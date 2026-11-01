/*!
 * 观澜 Lan.Destiny · 极简离线二维码编码器（byte 模式，版本 1–6，纠错等级 M/L）
 * 用途：分享海报右下角二维码，指向 ?s=<scenario> 的落地页。
 * 无第三方依赖，不联网，浏览器内直接生成矩阵。
 */
(function (global) {
    'use strict';

    // ---------- GF(256) ----------
    var EXP = new Uint8Array(512);
    var LOG = new Uint8Array(256);
    (function initTables() {
        var x = 1;
        for (var i = 0; i < 255; i++) {
            EXP[i] = x;
            LOG[x] = i;
            x <<= 1;
            if (x & 0x100) x ^= 0x11d;
        }
        for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
    })();

    function gfMul(a, b) {
        if (a === 0 || b === 0) return 0;
        return EXP[LOG[a] + LOG[b]];
    }

    function rsGeneratorPoly(degree) {
        var poly = [1];
        for (var i = 0; i < degree; i++) {
            var next = new Array(poly.length + 1);
            for (var k = 0; k < next.length; k++) next[k] = 0;
            for (var j = 0; j < poly.length; j++) {
                next[j] ^= poly[j];
                next[j + 1] ^= gfMul(poly[j], EXP[i]);
            }
            poly = next;
        }
        return poly;
    }

    function rsRemainder(data, degree) {
        var gen = rsGeneratorPoly(degree);
        var rem = new Array(degree);
        for (var i = 0; i < degree; i++) rem[i] = 0;
        for (var d = 0; d < data.length; d++) {
            var factor = data[d] ^ rem[0];
            for (var s = 0; s < degree - 1; s++) rem[s] = rem[s + 1];
            rem[degree - 1] = 0;
            for (var t = 0; t < degree; t++) rem[t] ^= gfMul(gen[t + 1], factor);
        }
        return rem;
    }

    // ---------- 版式表（版本 1–6） ----------
    // [每块纠错码字数, [[块数, 每块数据码字数], ...]]
    var BLOCKS = {
        1: { L: [7, [[1, 19]]], M: [10, [[1, 16]]], Q: [13, [[1, 13]]], H: [17, [[1, 9]]] },
        2: { L: [10, [[1, 34]]], M: [16, [[1, 28]]], Q: [22, [[1, 22]]], H: [28, [[1, 16]]] },
        3: { L: [15, [[1, 55]]], M: [26, [[1, 44]]], Q: [18, [[2, 17]]], H: [22, [[2, 13]]] },
        4: { L: [20, [[1, 80]]], M: [18, [[2, 32]]], Q: [26, [[2, 24]]], H: [16, [[4, 9]]] },
        5: { L: [26, [[1, 108]]], M: [24, [[2, 43]]], Q: [18, [[2, 15], [2, 16]]], H: [22, [[2, 11], [2, 12]]] },
        6: { L: [18, [[2, 68]]], M: [16, [[4, 27]]], Q: [24, [[4, 19]]], H: [28, [[4, 15]]] }
    };

    var ALIGN = { 1: [], 2: [6, 18], 3: [6, 22], 4: [6, 26], 5: [6, 30], 6: [6, 34] };

    // 纠错等级 → 2 位编码（L=01, M=00, Q=11, H=10）
    var ECL_BITS = { L: 1, M: 0, Q: 3, H: 2 };

    function dataCodewords(version, ecl) {
        var spec = BLOCKS[version][ecl];
        var total = 0;
        for (var i = 0; i < spec[1].length; i++) total += spec[1][i][0] * spec[1][i][1];
        return total;
    }

    function pickVersion(byteLen, preferredECL) {
        var order = [preferredECL, 'M', 'L'];
        for (var o = 0; o < order.length; o++) {
            var ecl = order[o];
            for (var v = 1; v <= 6; v++) {
                // 4 位模式 + 8 位字符计数（版本 1–9 恒为 8）+ 数据位
                if (4 + 8 + byteLen * 8 <= dataCodewords(v, ecl) * 8) {
                    return { version: v, ecl: ecl };
                }
            }
        }
        return null;
    }

    function toUtf8Bytes(text) {
        if (typeof TextEncoder !== 'undefined') return Array.prototype.slice.call(new TextEncoder().encode(text));
        var out = [];
        for (var i = 0; i < text.length; i++) {
            var c = text.charCodeAt(i);
            if (c < 0x80) out.push(c);
            else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
            else out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
        }
        return out;
    }

    function buildCodewords(bytes, version, ecl) {
        var spec = BLOCKS[version][ecl];
        var eccLen = spec[0];
        var totalData = dataCodewords(version, ecl);

        // 1) 比特流：模式 0100 + 长度(8) + 数据
        var bits = [];
        function push(val, len) {
            for (var i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1);
        }
        push(4, 4);
        push(bytes.length, 8);
        for (var b = 0; b < bytes.length; b++) push(bytes[b], 8);

        // 2) 终止符 + 补齐到字节
        var capacityBits = totalData * 8;
        var term = Math.min(4, capacityBits - bits.length);
        push(0, term);
        while (bits.length % 8 !== 0) bits.push(0);

        // 3) 字节化 + 填充码 0xEC / 0x11
        var dataBytes = [];
        for (var i = 0; i < bits.length; i += 8) {
            var byteVal = 0;
            for (var j = 0; j < 8; j++) byteVal = (byteVal << 1) | bits[i + j];
            dataBytes.push(byteVal);
        }
        var padToggle = true;
        while (dataBytes.length < totalData) {
            dataBytes.push(padToggle ? 0xec : 0x11);
            padToggle = !padToggle;
        }

        // 4) 分块 → 每块算纠错 → 交织
        var dataBlocks = [];
        var eccBlocks = [];
        var offset = 0;
        for (var g = 0; g < spec[1].length; g++) {
            var count = spec[1][g][0];
            var size = spec[1][g][1];
            for (var n = 0; n < count; n++) {
                var chunk = dataBytes.slice(offset, offset + size);
                offset += size;
                dataBlocks.push(chunk);
                eccBlocks.push(rsRemainder(chunk, eccLen));
            }
        }

        var maxDataLen = 0;
        for (var d = 0; d < dataBlocks.length; d++) maxDataLen = Math.max(maxDataLen, dataBlocks[d].length);
        var out = [];
        for (var idx = 0; idx < maxDataLen; idx++) {
            for (var blk = 0; blk < dataBlocks.length; blk++) {
                if (idx < dataBlocks[blk].length) out.push(dataBlocks[blk][idx]);
            }
        }
        for (var e = 0; e < eccLen; e++) {
            for (var blk2 = 0; blk2 < eccBlocks.length; blk2++) out.push(eccBlocks[blk2][e]);
        }
        return out;
    }

    function makeMatrix(version) {
        var size = version * 4 + 17;
        var modules = [];
        var reserved = [];
        for (var r = 0; r < size; r++) {
            modules.push(new Array(size).fill(0));
            reserved.push(new Array(size).fill(false));
        }

        function setFn(row, col, dark) {
            modules[row][col] = dark ? 1 : 0;
            reserved[row][col] = true;
        }

        // 定位图案 + 分隔符
        function drawFinder(top, left) {
            for (var dr = -1; dr <= 7; dr++) {
                for (var dc = -1; dc <= 7; dc++) {
                    var r = top + dr, c = left + dc;
                    if (r < 0 || r >= size || c < 0 || c >= size) continue;
                    var inRing = (dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6) &&
                        (dr === 0 || dr === 6 || dc === 0 || dc === 6);
                    var inCore = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
                    setFn(r, c, inRing || inCore);
                }
            }
        }
        drawFinder(0, 0);
        drawFinder(0, size - 7);
        drawFinder(size - 7, 0);

        // 定时图案
        for (var i = 8; i < size - 8; i++) {
            var dark = (i % 2 === 0);
            setFn(6, i, dark);
            setFn(i, 6, dark);
        }

        // 校正图案
        var alignPos = ALIGN[version];
        for (var a = 0; a < alignPos.length; a++) {
            for (var b2 = 0; b2 < alignPos.length; b2++) {
                var ar = alignPos[a], ac = alignPos[b2];
                // 与定位图案重叠的位置跳过
                if ((ar === 6 && ac === 6) || (ar === 6 && ac === size - 7) || (ar === size - 7 && ac === 6)) continue;
                for (var dr2 = -2; dr2 <= 2; dr2++) {
                    for (var dc2 = -2; dc2 <= 2; dc2++) {
                        var rr = ar + dr2, cc = ac + dc2;
                        if (rr < 0 || rr >= size || cc < 0 || cc >= size) continue;
                        var ring = Math.max(Math.abs(dr2), Math.abs(dc2));
                        setFn(rr, cc, ring !== 1);
                    }
                }
            }
        }

        // 固定暗模块
        setFn(size - 8, 8, true);

        // 预留格式信息区（先在最终写格式位时覆盖）
        for (var k = 0; k <= 8; k++) {
            if (k !== 6) {
                reserved[8][k] = true;
                reserved[k][8] = true;
            }
        }
        reserved[8][6] = true;
        reserved[6][8] = true;
        for (var m = 0; m < 8; m++) {
            reserved[8][size - 1 - m] = true;
            reserved[size - 1 - m][8] = true;
        }

        return { size: size, modules: modules, reserved: reserved, setFn: setFn };
    }

    function placeData(mat, codewords) {
        var size = mat.size;
        var modules = mat.modules;
        var reserved = mat.reserved;
        var bits = [];
        for (var i = 0; i < codewords.length; i++) {
            for (var b = 7; b >= 0; b--) bits.push((codewords[i] >>> b) & 1);
        }
        var bitIdx = 0;
        for (var right = size - 1; right >= 1; right -= 2) {
            if (right === 6) right = 5;
            for (var vert = 0; vert < size; vert++) {
                for (var j = 0; j < 2; j++) {
                    var col = right - j;
                    var upward = ((right + 1) & 2) === 0;
                    var row = upward ? size - 1 - vert : vert;
                    if (col < 0 || reserved[row][col]) continue;
                    var bit = bitIdx < bits.length ? bits[bitIdx] : 0;
                    bitIdx++;
                    modules[row][col] = bit;
                }
            }
        }
    }

    var MASKS = [
        function (i, j) { return (i + j) % 2 === 0; },
        function (i) { return i % 2 === 0; },
        function (i, j) { return j % 3 === 0; },
        function (i, j) { return (i + j) % 3 === 0; },
        function (i, j) { return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0; },
        function (i, j) { return (i * j) % 2 + (i * j) % 3 === 0; },
        function (i, j) { return ((i * j) % 2 + (i * j) % 3) % 2 === 0; },
        function (i, j) { return ((i + j) % 2 + (i * j) % 3) % 2 === 0; }
    ];

    function applyMask(mat, maskIdx) {
        var size = mat.size;
        var fn = MASKS[maskIdx];
        for (var r = 0; r < size; r++) {
            for (var c = 0; c < size; c++) {
                if (mat.reserved[r][c]) continue;
                if (fn(r, c)) mat.modules[r][c] ^= 1;
            }
        }
    }

    function penalty(mat) {
        var size = mat.size;
        var mods = mat.modules;
        var score = 0;
        // 规则 1：同色连续 ≥5
        for (var r = 0; r < size; r++) {
            var runRow = 1;
            for (var c = 1; c < size; c++) {
                if (mods[r][c] === mods[r][c - 1]) { runRow++; if (runRow === 5) score += 3; else if (runRow > 5) score++; }
                else runRow = 1;
            }
        }
        for (var c2 = 0; c2 < size; c2++) {
            var runCol = 1;
            for (var r2 = 1; r2 < size; r2++) {
                if (mods[r2][c2] === mods[r2 - 1][c2]) { runCol++; if (runCol === 5) score += 3; else if (runCol > 5) score++; }
                else runCol = 1;
            }
        }
        // 规则 3：2×2 同色
        for (var r3 = 0; r3 < size - 1; r3++) {
            for (var c3 = 0; c3 < size - 1; c3++) {
                var v = mods[r3][c3];
                if (v === mods[r3][c3 + 1] && v === mods[r3 + 1][c3] && v === mods[r3 + 1][c3 + 1]) score += 3;
            }
        }
        // 规则 4：黑白比例偏离 50%
        var dark = 0;
        for (var r4 = 0; r4 < size; r4++) for (var c4 = 0; c4 < size; c4++) dark += mods[r4][c4];
        var ratio = (dark * 100) / (size * size);
        score += Math.floor(Math.abs(ratio - 50) / 5) * 2;
        return score;
    }

    function drawFormat(mat, ecl, maskIdx) {
        var size = mat.size;
        var data = (ECL_BITS[ecl] << 3) | maskIdx;
        var rem = data;
        for (var i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
        var bitsVal = ((data << 10) | rem) ^ 0x5412;

        function bit(k) { return (bitsVal >>> k) & 1; }

        // 第一份：竖向（第 8 列，第 0–8 行）
        for (var a = 0; a <= 5; a++) mat.setFn(a, 8, bit(a));
        mat.setFn(7, 8, bit(6));
        mat.setFn(8, 8, bit(7));
        mat.setFn(8, 7, bit(8));
        for (var b = 9; b < 15; b++) mat.setFn(8, 14 - b, bit(b));

        // 第二份：横向（第 8 行，右侧与下侧）
        for (var c = 0; c < 8; c++) mat.setFn(8, size - 1 - c, bit(c));
        for (var d = 8; d < 15; d++) mat.setFn(size - 15 + d, 8, bit(d));

        // 固定暗模块（第 8 列，size-8 行）
        mat.setFn(size - 8, 8, true);
    }

    // 对外接口：返回 { size, modules }
    function buildQrMatrix(text, preferredECL) {
        var bytes = toUtf8Bytes(String(text));
        var pick = pickVersion(bytes.length, preferredECL || 'M');
        if (!pick) return null;
        var codewords = buildCodewords(bytes, pick.version, pick.ecl);
        var mat = makeMatrix(pick.version);
        placeData(mat, codewords);

        var best = null;
        var bestScore = Infinity;
        for (var maskIdx = 0; maskIdx < 8; maskIdx++) {
            var trial = makeMatrix(pick.version);
            placeData(trial, codewords);
            applyMask(trial, maskIdx);
            drawFormat(trial, pick.ecl, maskIdx);
            var sc = penalty(trial);
            if (sc < bestScore) { bestScore = sc; best = trial; }
        }
        return { size: best.size, modules: best.modules, version: pick.version, ecl: pick.ecl };
    }

    global.buildQrMatrix = buildQrMatrix;
})(typeof window !== 'undefined' ? window : globalThis);
