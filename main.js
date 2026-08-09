const fieldsConfig = {
    bazi: `
        <div class="form-group">
            <label for="bazi-gender">性别</label>
            <select name="gender" id="bazi-gender" required>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <div class="form-group">
            <label for="bazi-calendar">历法</label>
            <select name="calendar" id="bazi-calendar">
                <option value="solar">公历 (阳历)</option>
                <option value="lunar">农历 (阴历)</option>
            </select>
        </div>
        <div class="form-group">
            <label>生日时间</label>
            <div class="datetime-inputs">
                <input type="number" name="year" id="bazi-year" placeholder="年 (如1990)" min="1600" max="2200" aria-label="年份" required>
                <input type="number" name="month" id="bazi-month" placeholder="月" min="1" max="12" aria-label="月份" required>
                <input type="number" name="day" id="bazi-day" placeholder="日" min="1" max="31" aria-label="日期" required>
                <input type="number" name="hour" id="bazi-hour" placeholder="时 (0-23)" min="0" max="23" aria-label="小时">
                <input type="number" name="minute" id="bazi-minute" placeholder="分" min="0" max="59" aria-label="分钟">
            </div>
        </div>
        <div class="form-group">
            <label for="bazi-lng">经度 (选填，计算真太阳时)</label>
            <input type="number" name="lng" id="bazi-lng" step="0.1" placeholder="如广州 113.3" min="-180" max="180">
        </div>
    `,
    ziwei: `
        <div class="form-group">
            <label for="ziwei-gender">性别</label>
            <select name="gender" id="ziwei-gender" required>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <div class="form-group">
            <label for="ziwei-calendar">历法</label>
            <select name="calendar" id="ziwei-calendar">
                <option value="solar">公历</option>
                <option value="lunar">农历</option>
            </select>
        </div>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="year" id="ziwei-year" placeholder="年" min="1600" max="2200" aria-label="年份" required>
                <input type="number" name="month" id="ziwei-month" placeholder="月" min="1" max="12" aria-label="月份" required>
                <input type="number" name="day" id="ziwei-day" placeholder="日" min="1" max="31" aria-label="日期" required>
                <input type="number" name="hour" id="ziwei-hour" placeholder="时" min="0" max="23" aria-label="小时" required>
                <input type="number" name="minute" id="ziwei-minute" placeholder="分" min="0" max="59" aria-label="分钟" required>
            </div>
        </div>
    `,
    hehun: `
        <h3>甲方 (男方)</h3>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="year" id="hehun-year" placeholder="年" min="1600" max="2200" aria-label="男方出生年份" required>
                <input type="number" name="month" id="hehun-month" placeholder="月" aria-label="男方出生月份" required>
                <input type="number" name="day" id="hehun-day" placeholder="日" aria-label="男方出生日期" required>
                <input type="number" name="hour" id="hehun-hour" placeholder="时" aria-label="男方出生小时">
                <input type="number" name="minute" id="hehun-minute" placeholder="分" aria-label="男方出生分钟">
            </div>
        </div>
        <h3>乙方 (女方)</h3>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="partner_year" id="hehun-partner-year" placeholder="年" min="1600" max="2200" aria-label="女方出生年份" required>
                <input type="number" name="partner_month" id="hehun-partner-month" placeholder="月" aria-label="女方出生月份" required>
                <input type="number" name="partner_day" id="hehun-partner-day" placeholder="日" aria-label="女方出生日期" required>
                <input type="number" name="partner_hour" id="hehun-partner-hour" placeholder="时" aria-label="女方出生小时">
                <input type="number" name="partner_minute" id="hehun-partner-minute" placeholder="分" aria-label="女方出生分钟">
            </div>
        </div>
    `,
    meihua: `
        <div class="form-group">
            <label for="meihua-type">起卦方式</label>
            <select name="type" id="meihua-type">
                <option value="time">按当前时间起卦</option>
                <option value="numbers">按三个数字起卦</option>
            </select>
        </div>
        <div id="meihua-numbers-group" class="form-group hidden">
            <label for="meihua-numbers">输入数字 (例如: 123 456 789)</label>
            <input type="text" name="numbers" id="meihua-numbers" placeholder="以空格分隔三个正整数">
        </div>
        <div class="form-group">
            <label for="meihua-query">所占之事</label>
            <input type="text" name="query" id="meihua-query" placeholder="例如: 测求职面试结果" required>
        </div>
    `,
    liuyao: `
        <div class="form-group">
            <label for="liuyao-yao">输入六爻卦象 (初爻在左，少阳为7，少阴为8，老阳为9，老阴为6)</label>
            <input type="text" name="yao" id="liuyao-yao" placeholder="例如: 787888" pattern="[6789]{6}" required>
        </div>
        <div class="form-group">
            <label for="liuyao-query">所占之事</label>
            <input type="text" name="query" id="liuyao-query" placeholder="例如: 测出行吉凶" required>
        </div>
    `,
    qimen: `
        <div class="form-group">
            <label>起局时间 (默认当前时间)</label>
            <div class="datetime-inputs">
                <input type="number" name="year" id="qimen-year" placeholder="年" min="1600" max="2200" aria-label="年份">
                <input type="number" name="month" id="qimen-month" placeholder="月" aria-label="月份">
                <input type="number" name="day" id="qimen-day" placeholder="日" aria-label="日期">
                <input type="number" name="hour" id="qimen-hour" placeholder="时" aria-label="小时">
            </div>
        </div>
        <div class="form-group">
            <label for="qimen-jufa">起局流派</label>
            <select name="ju_fa" id="qimen-jufa">
                <option value="chaibu">拆补法</option>
                <option value="zhirun">置闰法</option>
            </select>
        </div>
    `
};

let activeModule = 'bazi';
const dynamicFields = document.getElementById('dynamic-fields');
const tabs = document.querySelectorAll('.tab-btn');

function renderFields(module) {
    dynamicFields.innerHTML = fieldsConfig[module];
    activeModule = module;
    
    // Bind specific sub-module changes
    if (module === 'meihua') {
        const typeSelect = document.getElementById('meihua-type');
        const numGroup = document.getElementById('meihua-numbers-group');
        const numInput = numGroup.querySelector('input[name="numbers"]');
        typeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'numbers') {
                numGroup.classList.remove('hidden');
                numInput.required = true;
            } else {
                numGroup.classList.add('hidden');
                numInput.required = false;
            }
        });
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
        renderFields(e.target.dataset.module);
    });
});

// Initial render
renderFields('bazi');

// Detect if running via file:// protocol
if (window.location.protocol === 'file:') {
    document.getElementById('local-warning-modal').classList.remove('hidden');
}

// Append form submission and report rendering logic
const calcForm = document.getElementById('calc-form');
const welcomeScreen = document.getElementById('welcome-screen');
const loadingScreen = document.getElementById('loading-screen');
const reportGrid = document.getElementById('report-grid');

calcForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Hide screens, show loading
    welcomeScreen.classList.add('hidden');
    reportGrid.classList.add('hidden');
    loadingScreen.classList.remove('hidden');

    const formData = new FormData(calcForm);
    const data = {
        module: activeModule
    };
    
    formData.forEach((value, key) => {
        if (value !== "") {
            // Convert to number for appropriate fields to avoid server-side FastAPI parsing type mismatch
            if ([
                'year', 'month', 'day', 'hour', 'minute',
                'partner_year', 'partner_month', 'partner_day', 'partner_hour', 'partner_minute',
                'lng'
            ].includes(key)) {
                data[key] = Number(value);
            } else {
                data[key] = value;
            }
        }
    });

    try {
        const response = await fetch('/api/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        loadingScreen.classList.add('hidden');
        reportGrid.classList.remove('hidden');

        if (!response.ok || result.detail || result.error) {
            const errDetail = result.detail || result.error || '计算出错，请核对输入参数';
            document.getElementById('btn-export').classList.add('hidden');
            document.getElementById('report-title-area').innerHTML = `<h2 style="color: var(--accent-pink)">计算错误</h2>`;
            document.getElementById('card-basics').innerHTML = `<h3>基本信息</h3><p>${errDetail}</p>`;
            document.getElementById('card-elements').innerHTML = `<h3>能量结构</h3><p>--</p>`;
            document.getElementById('card-chart').innerHTML = `<h3>时空命盘</h3><p>--</p>`;
            document.getElementById('card-cycles').innerHTML = `<h3>大运流年</h3><p>--</p>`;
            document.getElementById('card-interpretation').innerHTML = `<h3>观澜解读</h3><p>--</p>`;
        } else {
            document.getElementById('btn-export').classList.remove('hidden');
            renderReport(result.stdout);
        }
    } catch (err) {
        loadingScreen.classList.add('hidden');
        reportGrid.classList.remove('hidden');
        document.getElementById('btn-export').classList.add('hidden');
        document.getElementById('local-warning-modal').classList.remove('hidden');
        document.getElementById('report-title-area').innerHTML = `<h2 style="color: var(--accent-pink)">网络请求失败</h2>`;
        document.getElementById('card-basics').innerHTML = `<h3>错误信息</h3><p>${err.toString()}<br><br><span style="color: var(--accent-gold)">提示：请确认本地后端服务已通过双击运行 run.bat 启动，并且是通过 http://127.0.0.1:8000 访问网页，而不是直接双击打开 HTML 文件。</span></p>`;
        document.getElementById('card-elements').innerHTML = `<h3>能量结构</h3><p>--</p>`;
        document.getElementById('card-chart').innerHTML = `<h3>时空命盘</h3><p>--</p>`;
        document.getElementById('card-cycles').innerHTML = `<h3>大运流年</h3><p>--</p>`;
        document.getElementById('card-interpretation').innerHTML = `<h3>观澜解读</h3><p>--</p>`;
    }
});

function parseStdout(stdout) {
    const lines = stdout.split('\n');
    let currentSection = 'basics';
    const sections = {
        basics: [],
        elements: [],
        chart: [],
        cycles: [],
        interpretation: []
    };

    // Helper to add lines
    const addLine = (sec, line) => {
        sections[sec].push(line);
    };

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        // Skip the CLI horizontal borders
        if (trimmed.startsWith('════════') || trimmed.startsWith('━━━━━━━━') || (trimmed.startsWith('═') && trimmed.endsWith('═') && trimmed.length > 10)) {
            continue;
        }

        // Module-independent section switching
        if (trimmed.startsWith('【四柱】') || trimmed.startsWith('【三柱】') || trimmed.startsWith('【十二宫】') || trimmed.startsWith('【本卦】') || trimmed.startsWith('【变卦】') || trimmed.startsWith('【互卦】') || trimmed.startsWith('四柱：')) {
            currentSection = 'chart';
        } else if (trimmed.startsWith('【五行个数】') || trimmed.startsWith('【五行力量】') || trimmed.startsWith('【体用】') || trimmed.startsWith('【宫干飞化】') || trimmed.startsWith('【类象】') || trimmed.startsWith('克应：') || trimmed.startsWith('格局：')) {
            currentSection = 'elements';
        } else if (trimmed.startsWith('【大运】') || trimmed.startsWith('【流年】') || trimmed.startsWith('【大限】') || trimmed.startsWith('【小限】') || trimmed.startsWith('【指定日推演】') || trimmed.startsWith('动爻：')) {
            currentSection = 'cycles';
        } else if (trimmed.startsWith('【断语提示】') || trimmed.startsWith('【合婚双盘对照】') || trimmed.startsWith('【日主】') || trimmed.startsWith('【胎元】')) {
            currentSection = 'interpretation';
        }

        // Specific line overrides or routing
        if (trimmed.startsWith('动爻：') && activeModule === 'liuyao') {
            addLine('cycles', line);
        } else if (trimmed.startsWith('乙方四柱：')) {
            addLine('chart', line);
        } else if (trimmed.startsWith('乙方大运：') || trimmed.startsWith('乙方夏令时：')) {
            addLine('cycles', line);
        } else {
            addLine(currentSection, line);
        }
    }

    return {
        basics: sections.basics.join('\n').trim(),
        elements: sections.elements.join('\n').trim(),
        chart: sections.chart.join('\n').trim(),
        cycles: sections.cycles.join('\n').trim(),
        interpretation: sections.interpretation.join('\n').trim()
    };
}

function renderReport(stdout) {
    const titleArea = document.getElementById('report-title-area');
    titleArea.innerHTML = `<h1>${activeModule.toUpperCase()} <span>推演报告</span></h1>`;

    const parsed = parseStdout(stdout);

    const basics = document.getElementById('card-basics');
    const elements = document.getElementById('card-elements');
    const chart = document.getElementById('card-chart');
    const cycles = document.getElementById('card-cycles');
    const interpretation = document.getElementById('card-interpretation');

    // Fill each card with a heading and a formatted pre block (or fallback text)
    basics.innerHTML = `<h3>基本信息 & 参数</h3>${parsed.basics ? `<pre>${parsed.basics}</pre>` : '<p class="empty-state">暂无数据</p>'}`;
    elements.innerHTML = `<h3>能量结构 & 格局</h3>${parsed.elements ? `<pre>${parsed.elements}</pre>` : '<p class="empty-state">无能量特质数据</p>'}`;
    chart.innerHTML = `<h3>时空命盘排布</h3>${parsed.chart ? `<pre>${parsed.chart}</pre>` : '<p class="empty-state">命盘生成失败</p>'}`;
    cycles.innerHTML = `<h3>大运流年轨变</h3>${parsed.cycles ? `<pre>${parsed.cycles}</pre>` : '<p class="empty-state">无流年大运轨变信息</p>'}`;
    interpretation.innerHTML = getWhiteCollarInterpretation(activeModule, stdout);
}

// Export Report functionality
const exportBtn = document.getElementById('btn-export');
exportBtn.addEventListener('click', async () => {
    // Collect output from all cards
    const basicsHTML = document.getElementById('card-basics').innerHTML;
    const elementsHTML = document.getElementById('card-elements').innerHTML;
    const chartHTML = document.getElementById('card-chart').innerHTML;
    const cyclesHTML = document.getElementById('card-cycles').innerHTML;
    const interpretationHTML = document.getElementById('card-interpretation').innerHTML;

    const htmlContent = `
        <div class="export-header">
            <h2>${activeModule.toUpperCase()} 命理与占测推演报告</h2>
            <p>生成日期: ${new Date().toLocaleDateString('zh-CN')}</p>
        </div>
        <div class="export-section">
            ${basicsHTML}
        </div>
        <div class="export-section">
            ${elementsHTML}
        </div>
        <div class="export-section">
            ${chartHTML}
        </div>
        <div class="export-section">
            ${cyclesHTML}
        </div>
        <div class="export-section">
            ${interpretationHTML}
        </div>
    `;

    const title = `${activeModule.toUpperCase()}_推演报告`;

    try {
        const response = await fetch('/api/export', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                html_content: htmlContent
            })
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${title}.html`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } else {
            alert('导出失败，服务器返回错误');
        }
    } catch (err) {
        console.error('Export error:', err);
        alert('导出请求失败: ' + err.toString());
    }
});

// Help Drawer toggle
const helpBtn = document.getElementById('btn-help');
const helpDrawer = document.getElementById('help-drawer');
const closeDrawerBtn = document.getElementById('btn-close-drawer');

helpBtn.addEventListener('click', () => {
    helpDrawer.classList.toggle('hidden');
});

closeDrawerBtn.addEventListener('click', () => {
    helpDrawer.classList.add('hidden');
});

// Dynamic Plain-Language (White-Collar) Metaphysical Interpreters
function getWhiteCollarInterpretation(module, stdout) {
    if (module === 'bazi') {
        return generateBaziAnalysis(stdout);
    } else if (module === 'ziwei') {
        return generateZiweiAnalysis(stdout);
    } else if (module === 'hehun') {
        return generateHehunAnalysis(stdout);
    } else if (module === 'meihua') {
        return generateMeihuaAnalysis(stdout);
    } else if (module === 'liuyao') {
        return generateLiuyaoAnalysis(stdout);
    } else if (module === 'qimen') {
        return generateQimenAnalysis(stdout);
    }
    return `<h3>观澜玄微解读</h3><pre>生克在心，时空流转。仅供生涯规划与日常参考。</pre>`;
}

function generateBaziAnalysis(stdout) {
    const dayMasterMatch = stdout.match(/(日主|日干)：?\s*([甲乙丙丁戊己庚辛壬癸][木火土金水])/);
    const dayMaster = dayMasterMatch ? dayMasterMatch[2] : "丙火";
    
    const balanceMatch = stdout.match(/量化参考：\s*([^\n\r]+)/) || stdout.match(/(偏强|偏弱)/);
    const balance = balanceMatch ? balanceMatch[1].trim() : "偏弱 (身弱)";

    const wuxingRegex = /(木|火|土|金|水):([\d\.]+)/g;
    let scores = { "木": 1.5, "火": 2.0, "土": 3.0, "金": 1.0, "水": 2.5 };
    let match;
    while ((match = wuxingRegex.exec(stdout)) !== null) {
        scores[match[1]] = parseFloat(match[2]);
    }
    
    let sorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let strongest = sorted[0];
    let weakest = sorted[sorted.length - 1];

    return `
        <h3>🔮 观澜玄微解读 (八字白话分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>🎯 命理格局与日主性格：</strong></p>
            <p>你的日主为 <strong>${dayMaster}</strong>，全局能量呈现 <strong>${balance}</strong> 状态。${getDayMasterDesc(dayMaster, balance)}</p>
        </div>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>⚖️ 五行平衡调理建议：</strong></p>
            <p>你命盘中能量最旺的五行是 <strong>${strongest}</strong>，最弱的五行是 <strong>${weakest}</strong>。根据“损有余而补不足”的命理智慧：</p>
            <p>👉 <strong>建议调整：</strong> ${getWuxingAdvice(weakest, strongest)}</p>
        </div>
        <div class="analysis-section">
            <p><strong>💼 个人事业财富路径：</strong></p>
            <p>${getCareerAdvice(dayMaster, balance, weakest)}</p>
        </div>
    `;
}

function getDayMasterDesc(dm, balance) {
    const stem = dm[0];
    const descs = {
        '甲': '甲木如参天大树，直立向上。你性格刚直，富有恻隐之心与责任感，但也容易倔强不服输。',
        '乙': '乙木如花草藤蔓，柔顺而富有弹性。你性格温和，心思细腻，适应力极强，善于协调关系。',
        '丙': '丙火如太阳之火，热烈大方。你热情洋溢，心直口快，积极乐观，但有时急躁缺乏耐性。',
        '丁': '丁火如人间烛光，温和内敛。你思想深邃，富有同理心，做事细致，但有时敏感多虑。',
        '戊': '戊土如高山厚土，沉稳厚重。你诚实守信，包容力强，行事稳重踏实，但有时过于固执。',
        '己': '己土如田园湿土，温润育万物。你性格柔顺，心思多变，极具包容与忍耐力。',
        '庚': '庚金如刀剑铁矿，刚健锐利。你果断刚毅，重情重义，有强烈的正义感，但说话直白易伤人。',
        '辛': '辛金如珠宝首饰，精致华美。你自尊心强，感觉敏锐，追求完美，但有时较为清高。',
        '壬': '壬水如江河奔流，浩大宽广。你聪明多智，心胸开阔，极富创意与远见，但有时随性散漫。',
        '癸': '癸水如雨露之水，润物无声。你心思缜密，温柔内敛，直觉敏锐，善于以柔克刚。'
    };
    let base = descs[stem] || '你性格独特，五行能量流转。';
    if (balance.includes('弱')) {
        base += ' 你的能量场偏柔、偏弱，容易感到外界环境或职场的压力，需要注重精力和精神的自我滋养，多补充生助你的印星和比劫能量。';
    } else {
        base += ' 你的能量场旺盛、强健，精力充沛且好胜心强，适合通过挑战性目标、财富运营或者专业输出将能量合理释放。';
    }
    return base;
}

function getWuxingAdvice(weak, strong) {
    const advices = {
        '木': '多接触绿色，种植绿植，日常多吃绿色果蔬，穿着青碧色服饰以提升生机。',
        '火': '多晒太阳，多用红色、紫色等暖色调，保持积极乐观的社交接触以补充热情。',
        '土': '多接触大自然（如赤脚踩泥土沙滩），多用黄色、棕色，保持诚信与定力以扎根。',
        '金': '佩戴金属饰品，多用白色、金色，行事培养果断利落的规则感与秩序感。',
        '水': '保持饮水充足，多游泳接触水，多用黑色、蓝色，静坐沉思以修养智慧。'
    };
    return advices[weak] || '保持作息规律，五行运转流畅。';
}

function getCareerAdvice(dm, balance, weak) {
    if (balance.includes('弱')) {
        return '鉴于全局偏弱，你在职业路径上更适合依托大型平台、实力机构或者成熟的团队作为支撑。在团队中担任智囊、技术核心或管理辅助角色能最大程度避开直面竞争的压力，行事宜求稳健。';
    } else {
        return '鉴于全局偏强，你具备较好的独立开拓能力，适合做具有挑战性、能够独立主导或者有分成激励的岗位（如业务开拓、独立顾问、创业决策等）。多防范因固执己见与人合伙产生摩擦。';
    }
}

function generateZiweiAnalysis(stdout) {
    return `
        <h3>🔮 观澜玄微解读 (紫微斗数白话分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>🎯 命盘局势与潜能：</strong></p>
            <p>紫微斗数是通过安星十二宫来展示命运轨迹。你的命盘中，各主星（如紫微、天府、太阳等）与辅星已各归其位：</p>
            <p>👉 <strong>命宫特质：</strong> 代表你的核心性格、天赋潜能。主星旺则性格显耀，无主星则多借对宫星曜力量，性格多变适应性强。</p>
        </div>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>⚖️ 夫妻宫与财帛宫：</strong></p>
            <p>👉 <strong>夫妻宫：</strong> 揭示你的情感倾向与理想伴侣类型。若逢吉星（如天同、太阴）相助多温情；若逢煞星则相处多磨合。</p>
            <p>👉 <strong>财帛宫：</strong> 代表你的理财观念与赚钱手段。宜守宜攻，需对照星曜的庙旺利陷判断财源稳定性。</p>
        </div>
        <div class="analysis-section">
            <p><strong>⚠️ 四化运势开关（禄权科忌）：</strong></p>
            <p>化禄代表顺利与增益，化忌代表压力与阻碍。特别注意命盘中【化忌】所在的宫位，该宫位往往是你今生需要花最多精力去面对、克服执念并修行成长的“压力点”。</p>
        </div>
    `;
}

function generateHehunAnalysis(stdout) {
    return `
        <h3>🔮 观澜玄微解读 (合婚白话分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>💑 双盘合参总论：</strong></p>
            <p>合婚并非决定两人“能不能在一起”，而是剖析双方的性格合拍度与长期相处的摩擦指数。</p>
        </div>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>⚖️ 能量互补与合参：</strong></p>
            <p>👉 <strong>天干/地支相合：</strong> 双方干支合多者，初期沟通极易产生默契与眼缘，如同知己。</p>
            <p>👉 <strong>日干关系：</strong> 日干的生克关系（如甲木生丁火）揭示了相处中谁主动体贴、谁更容易被吸引。</p>
        </div>
        <div class="analysis-section">
            <p><strong>💡 观澜相处建议：</strong></p>
            <p>如果两人五行喜忌能形成良性互补（你缺的大体对方旺，对方缺的你大体有），能极大增加关系的稳定性。遇到流年运势起伏时，建议互相包容，各自克制脾气，以柔克刚方为长久之道。</p>
        </div>
    `;
}

function generateMeihuaAnalysis(stdout) {
    return `
        <h3>🔮 观澜玄微解读 (易数卦象分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>☯️ 卦象吉凶演变：</strong></p>
            <p>👉 <strong>本卦（现状起因）：</strong> 代表你求问事情的当前处境。体用生克决定了事情的起点难度。</p>
            <p>👉 <strong>互卦（过程发展）：</strong> 揭示事情在中期发展中容易暴露的隐蔽问题或人际障碍。</p>
            <p>👉 <strong>变卦（最终结局）：</strong> 象征事情的最终落脚点和长远走向。</p>
        </div>
        <div class="analysis-section">
            <p><strong>💡 体用白话心法：</strong></p>
            <p>“体”为自己，“用”为所求的事物。若用卦生体卦、或体用比和（五行相同），则代表求事易成，阻碍较小；若用卦克体卦、或体去生用（泄气），则代表需要付出成倍努力，应提防中途生变。</p>
        </div>
    `;
}

function generateLiuyaoAnalysis(stdout) {
    return `
        <h3>🔮 观澜玄微解读 (六爻神卦分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>🎭 世爻与应爻（主客对照）：</strong></p>
            <p>👉 <strong>世爻（己方）：</strong> 代表你本人的能力、信心与当下的准备状态。世爻旺相则自身有实力胜任。</p>
            <p>👉 <strong>应爻（彼方）：</strong> 代表你想求的人、求职的单位或你想达到的目的。应爻生世爻代表阻碍较小。</p>
        </div>
        <div class="analysis-section">
            <p><strong>💡 动爻变卦机理：</strong></p>
            <p>六爻最看重“动爻”。卦中有爻发动的，代表事情在酝酿变化。动而化吉（如化回头生）则事情虽有反复但终归能成；动而化凶（如化回头克、化退神）则预示着过程中容易产生波折，应防范中途生变。</p>
        </div>
    `;
}

function generateQimenAnalysis(stdout) {
    return `
        <h3>🔮 观澜玄微解读 (奇门时空分析)</h3>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>🌀 时空局势剖析：</strong></p>
            <p>奇门遁甲利用九宫、八门、九星、八神锁定空间方位与时间契机。</p>
        </div>
        <div class="analysis-section" style="margin-bottom: 12px;">
            <p><strong>🚪 八门人盘格局（人际与环境）：</strong></p>
            <p>👉 <strong>吉门（开、休、生）：</strong> 若所占落宫临开、休、生门，代表存在正向转机，宜积极拓展。</p>
            <p>👉 <strong>凶门（死、惊、伤）：</strong> 临死门主阻碍，临惊门主口舌恐慌，临伤门主破财或竞争激烈。此时宜守不宜攻。</p>
        </div>
        <div class="analysis-section">
            <p><strong>💡 行动指南建议：</strong></p>
            <p>注意天盘九星代表的“天时大势”，人盘八门代表的“地利执行”。天时虽不利，但若能占据吉利方位（如寻找生旺落宫的方向），以避开冲克，亦能谋求局部最优解。</p>
        </div>
    `;
}

// ========================================================
// View Mode Switching Logic & Consumer Logic (Task 2)
// ========================================================
const VIEW_MODES = {
    CONSUMER: "consumer",
    PROFESSIONAL: "professional"
};

const consumerView = document.getElementById('consumer-mode-view');
const professionalView = document.getElementById('professional-mode-view');
const btnEnterPro = document.getElementById('btn-enter-pro');
const btnEnterProFooter = document.getElementById('btn-enter-pro-footer');
const btnBackConsumer = document.getElementById('btn-back-consumer');

function closeProfessionalHelpDrawer() {
    const helpDrawer = document.getElementById('help-drawer');
    const helpBtn = document.getElementById('btn-help');
    
    if (helpDrawer && !helpDrawer.classList.contains('hidden')) {
        helpDrawer.classList.add('hidden');
        helpDrawer.setAttribute('aria-hidden', 'true');
        if (helpBtn) {
            helpBtn.setAttribute('aria-expanded', 'false');
        }
    }
}

function switchViewMode(mode) {
    if (!consumerView || !professionalView) return;

    if (mode === VIEW_MODES.PROFESSIONAL) {
        if (typeof closeConsumerFormShell === 'function') {
            closeConsumerFormShell();
        }
        consumerView.classList.add('hidden');
        consumerView.setAttribute('aria-hidden', 'true');
        
        professionalView.classList.remove('hidden');
        professionalView.setAttribute('aria-hidden', 'false');
        
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        
        if (btnEnterPro) btnEnterPro.setAttribute('aria-expanded', 'true');
        if (btnEnterProFooter) btnEnterProFooter.setAttribute('aria-expanded', 'true');
        if (btnBackConsumer) btnBackConsumer.setAttribute('aria-expanded', 'true');
        
        // Show help drawer button in professional mode
        if (helpBtn) helpBtn.classList.remove('hidden');
        closeProfessionalHelpDrawer();
        
        window.scrollTo(0, 0);
    } else {
        professionalView.classList.add('hidden');
        professionalView.setAttribute('aria-hidden', 'true');
        
        consumerView.classList.remove('hidden');
        consumerView.setAttribute('aria-hidden', 'false');
        
        document.body.style.overflow = '';
        document.body.style.height = '';
        
        if (btnEnterPro) btnEnterPro.setAttribute('aria-expanded', 'false');
        if (btnEnterProFooter) btnEnterProFooter.setAttribute('aria-expanded', 'false');
        if (btnBackConsumer) btnBackConsumer.setAttribute('aria-expanded', 'false');
        
        // Hide help drawer button in consumer mode
        if (helpBtn) helpBtn.classList.add('hidden');
        closeProfessionalHelpDrawer();
        
        window.scrollTo(0, 0);
    }
}

if (btnEnterPro) {
    btnEnterPro.addEventListener('click', () => {
        switchViewMode(VIEW_MODES.PROFESSIONAL);
    });
}
if (btnEnterProFooter) {
    btnEnterProFooter.addEventListener('click', () => {
        switchViewMode(VIEW_MODES.PROFESSIONAL);
    });
}

if (btnBackConsumer) {
    btnBackConsumer.addEventListener('click', () => {
        switchViewMode(VIEW_MODES.CONSUMER);
    });
}

// Initial mode setup (Hide help button on load since default is consumer)
if (helpBtn && (!professionalView || professionalView.classList.contains('hidden'))) {
    helpBtn.classList.add('hidden');
}

// --- Consumer Page Interactions ---

// 1. Scenario Cards Selection
const scenarioCards = document.querySelectorAll('.scenario-card');
let selectedScenario = null;

scenarioCards.forEach(card => {
    card.addEventListener('click', () => {
        // Deselect all
        scenarioCards.forEach(c => c.classList.remove('selected'));
        // Select current
        card.classList.add('selected');
        selectedScenario = card.dataset.scenario;
    });
});

// 2. Custom Notice for Start Generation
const startBtns = document.querySelectorAll('.start-generation-btn');
const consumerNotice = document.getElementById('consumer-notice');
const btnCloseNotice = document.getElementById('btn-close-notice');
let noticeTimeout;

function showNotice() {
    if (!consumerNotice) return;
    
    // Clear any existing timeout
    if (noticeTimeout) clearTimeout(noticeTimeout);
    
    consumerNotice.classList.remove('hidden');
    
    // Auto hide after 5 seconds
    noticeTimeout = setTimeout(() => {
        consumerNotice.classList.add('hidden');
    }, 5000);
}

// Removed old startBtns listener

// Consumer Form Shell State
const consumerFormShellState = {
    step: 1,
    scenario: null,
    nickname: '',
    gender: 'male',
    calendarType: 'solar',
    birthYear: 1995,
    birthMonth: 5,
    birthDay: 15,
    birthHour: 12,
    timePrecision: 'hour'
};

// Initialize Date Select options
let dateSelectsPopulated = false;
function populateBirthDateSelects() {
    if (dateSelectsPopulated) return;
    
    const yearSelect = document.getElementById('consumer-birth-year');
    const monthSelect = document.getElementById('consumer-birth-month');
    const daySelect = document.getElementById('consumer-birth-day');
    const hourSelect = document.getElementById('consumer-birth-hour');
    
    if (!yearSelect || !monthSelect || !daySelect || !hourSelect) return;
    
    yearSelect.innerHTML = '';
    for (let y = 2026; y >= 1940; y--) {
        const opt = document.createElement('option');
        opt.value = y;
        opt.textContent = `${y}年`;
        if (y === 1995) opt.selected = true;
        yearSelect.appendChild(opt);
    }
    
    monthSelect.innerHTML = '';
    for (let m = 1; m <= 12; m++) {
        const opt = document.createElement('option');
        opt.value = m;
        opt.textContent = `${m}月`;
        if (m === 5) opt.selected = true;
        monthSelect.appendChild(opt);
    }
    
    daySelect.innerHTML = '';
    for (let d = 1; d <= 31; d++) {
        const opt = document.createElement('option');
        opt.value = d;
        opt.textContent = `${d}日`;
        if (d === 15) opt.selected = true;
        daySelect.appendChild(opt);
    }
    
    hourSelect.innerHTML = '';
    const shichenList = [
        { val: 0, label: '00:00 (子时 23-01点)' },
        { val: 1, label: '01:00 (丑时 01-03点)' },
        { val: 3, label: '03:00 (寅时 03-05点)' },
        { val: 5, label: '05:00 (卯时 05-07点)' },
        { val: 7, label: '07:00 (辰时 07-09点)' },
        { val: 9, label: '09:00 (巳时 09-11点)' },
        { val: 11, label: '12:00 (午时 11-13点)' },
        { val: 13, label: '14:00 (未时 13-15点)' },
        { val: 15, label: '16:00 (申时 15-17点)' },
        { val: 17, label: '18:00 (酉时 17-19点)' },
        { val: 19, label: '20:00 (戌时 19-21点)' },
        { val: 21, label: '22:00 (亥时 21-23点)' },
        { val: -1, label: '不清楚具体时辰' }
    ];
    
    shichenList.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.val;
        opt.textContent = item.label;
        if (item.val === 11) opt.selected = true;
        hourSelect.appendChild(opt);
    });
    
    dateSelectsPopulated = true;
}

// Consumer Form Shell Logic
let currentFormTrigger = null;
let previousBodyOverflow = '';

const scenarioStep2Map = {
    self: {
        label: '了解自己',
        title: '拆解你的内在精力模式',
        desc: '填写必要的出生资料，我们将重点剖析你的天生优势、情绪消耗源，以及在哪些事情上你最容易无意识地过度内耗。'
    },
    career: {
        label: '事业方向',
        title: '梳理你的职场定位与战略节奏',
        desc: '填写必要的出生资料，我们将重点剖析你的工作爆发力、团队协作位、最适合的决策节奏以及面对环境变局时的应变偏好。'
    },
    relationship: {
        label: '关系模式',
        title: '洞察你在关系中的安全感与边界',
        desc: '填写必要的出生资料，我们将重点剖析你在亲密与人际关系中的真实需求、表达屏障，以及感到被侵犯时的自我防御机制。'
    },
    confusion: {
        label: '走出迷茫',
        title: '破除迷茫，建立你的优先确定性',
        desc: '填写必要的出生资料，我们将从多重纷乱选项中，帮你厘清当下最值得先稳定的核心支柱，按优先级重建行动秩序。'
    }
};

function renderConsumerFormShellState() {
    const btnNext = document.getElementById('btn-next-form-shell');
    if (btnNext) {
        btnNext.disabled = !consumerFormShellState.scenario;
    }
    
    const step1View = document.getElementById('form-shell-step1');
    const step2View = document.getElementById('form-shell-step2');
    
    if (consumerFormShellState.step === 1) {
        if (step1View) step1View.classList.remove('hidden');
        if (step2View) step2View.classList.add('hidden');
        
        // Ensure selected radio is checked
        if (consumerFormShellState.scenario) {
            const selectedRadio = document.querySelector(`input[name="consumer_scenario"][value="${consumerFormShellState.scenario}"]`);
            if (selectedRadio) selectedRadio.checked = true;
        }
    } else if (consumerFormShellState.step === 2) {
        if (step1View) step1View.classList.add('hidden');
        if (step2View) {
            step2View.classList.remove('hidden');
            populateBirthDateSelects();
            
            // Update Step 02 Scenario specific header & bar
            const activeScenario = consumerFormShellState.scenario || 'self';
            const config = scenarioStep2Map[activeScenario] || scenarioStep2Map.self;
            
            const labelEl = document.getElementById('selected-scenario-label');
            const titleEl = document.getElementById('form-shell-title-step2');
            const descEl = document.getElementById('form-shell-desc-step2');
            
            if (labelEl) labelEl.textContent = config.label;
            if (titleEl) titleEl.textContent = config.title;
            if (descEl) descEl.textContent = config.desc;
        }
    }
}

function openConsumerFormShell(triggerBtn) {
    const shell = document.getElementById('consumer-form-shell');
    if (!shell) return;
    
    // Ensure help drawer is closed
    if (typeof closeProfessionalHelpDrawer === 'function') {
        closeProfessionalHelpDrawer();
    }
    
    shell.classList.remove('hidden');
    shell.setAttribute('aria-hidden', 'false');
    
    const title = document.getElementById('form-shell-title');
    if (title) {
        title.setAttribute('tabindex', '-1');
        title.focus();
    }
    
    currentFormTrigger = triggerBtn;
    
    // Disable background scroll/interaction
    previousBodyOverflow = document.body.style.overflow || '';
    document.body.style.overflow = 'hidden';
}

function closeConsumerFormShell() {
    const shell = document.getElementById('consumer-form-shell');
    if (!shell) return;
    
    shell.classList.add('hidden');
    shell.setAttribute('aria-hidden', 'true');
    
    document.body.style.overflow = previousBodyOverflow;
    
    if (currentFormTrigger) {
        currentFormTrigger.focus();
        currentFormTrigger = null;
    }
}

// Global click delegate for open/close form shell
document.addEventListener('click', (e) => {
    const openBtn = e.target.closest('[data-action="open-consumer-form"]');
    if (openBtn) {
        openConsumerFormShell(openBtn);
        return;
    }
    
    const closeBtn = e.target.closest('[data-action="close-consumer-form"]');
    if (closeBtn) {
        closeConsumerFormShell();
        return;
    }
});

// Global escape key handler
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeConsumerFormShell();
    }
});

// Form logic
const scenarioRadios = document.querySelectorAll('input[name="consumer_scenario"]');
scenarioRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        if (e.target.checked) {
            consumerFormShellState.scenario = e.target.value;
            renderConsumerFormShellState();
        }
    });
});

const btnNextFormShell = document.getElementById('btn-next-form-shell');
if (btnNextFormShell) {
    btnNextFormShell.addEventListener('click', () => {
        if (consumerFormShellState.scenario) {
            consumerFormShellState.step = 2;
            renderConsumerFormShellState();
        }
    });
}

const btnRevertStep = document.getElementById('btn-revert-step');
if (btnRevertStep) {
    btnRevertStep.addEventListener('click', () => {
        consumerFormShellState.step = 1;
        renderConsumerFormShellState();
    });
}

const btnBackStep1 = document.getElementById('btn-back-step1');
if (btnBackStep1) {
    btnBackStep1.addEventListener('click', () => {
        consumerFormShellState.step = 1;
        renderConsumerFormShellState();
    });
}

const btnChangeScenario = document.getElementById('btn-change-scenario');
if (btnChangeScenario) {
    btnChangeScenario.addEventListener('click', () => {
        consumerFormShellState.step = 1;
        renderConsumerFormShellState();
    });
}

const btnSubmitConsumerForm = document.getElementById('btn-submit-consumer-form');
if (btnSubmitConsumerForm) {
    btnSubmitConsumerForm.addEventListener('click', async () => {
        const nicknameInput = document.getElementById('consumer-nickname');
        const genderRadio = document.querySelector('input[name="consumer_gender"]:checked');
        const calendarRadio = document.querySelector('input[name="consumer_calendar"]:checked');
        const yearSelect = document.getElementById('consumer-birth-year');
        const monthSelect = document.getElementById('consumer-birth-month');
        const daySelect = document.getElementById('consumer-birth-day');
        const hourSelect = document.getElementById('consumer-birth-hour');
        const precisionSelect = document.getElementById('consumer-time-precision');
        
        consumerFormShellState.nickname = nicknameInput ? nicknameInput.value.trim() || '阿澜' : '阿澜';
        consumerFormShellState.gender = genderRadio ? genderRadio.value : 'male';
        consumerFormShellState.calendarType = calendarRadio ? calendarRadio.value : 'solar';
        consumerFormShellState.birthYear = yearSelect ? parseInt(yearSelect.value, 10) : 1995;
        consumerFormShellState.birthMonth = monthSelect ? parseInt(monthSelect.value, 10) : 5;
        consumerFormShellState.birthDay = daySelect ? parseInt(daySelect.value, 10) : 15;
        
        let rawHour = hourSelect ? parseInt(hourSelect.value, 10) : 12;
        if (rawHour === -1) {
            consumerFormShellState.birthHour = 12;
            consumerFormShellState.timePrecision = 'unknown';
        } else {
            consumerFormShellState.birthHour = rawHour;
            consumerFormShellState.timePrecision = precisionSelect ? precisionSelect.value : 'hour';
        }

        const calcPayload = {
            module: 'bazi',
            gender: consumerFormShellState.gender,
            calendar: consumerFormShellState.calendarType,
            year: consumerFormShellState.birthYear,
            month: consumerFormShellState.birthMonth,
            day: consumerFormShellState.birthDay,
            hour: consumerFormShellState.birthHour,
            minute: 0
        };

        btnSubmitConsumerForm.disabled = true;
        btnSubmitConsumerForm.textContent = '正在精密推演生辰结构...';

        try {
            const response = await fetch('/api/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(calcPayload)
            });

            const result = await response.json();

            if (!response.ok || result.detail || result.error) {
                const errDetail = result.detail || result.error || '八字推演失败，请核对输入参数。';
                btnSubmitConsumerForm.disabled = false;
                btnSubmitConsumerForm.textContent = '重试生成说明书';
                alert(`计算遇到问题: ${errDetail}`);
                return;
            }

            consumerFormShellState.baziResult = {
                stdout: result.stdout,
                calculatedAt: new Date().toISOString(),
                payload: calcPayload
            };
            console.log('[ConsumerForm] Bazi calculation successful:', consumerFormShellState.baziResult);

            const formStep2 = document.getElementById('consumer-step2-form');
            const step2Completed = document.getElementById('step2-completed-state');
            if (formStep2) formStep2.classList.add('hidden');
            if (step2Completed) {
                step2Completed.classList.remove('hidden');
                const desc = step2Completed.querySelector('.completed-desc');
                if (desc) {
                    desc.textContent = `生辰推演成功！已稳定生成【${consumerFormShellState.nickname}】的底层八字盘面数据（${consumerFormShellState.birthYear}年${consumerFormShellState.birthMonth}月${consumerFormShellState.birthDay}日）。`;
                }
            }

            btnSubmitConsumerForm.disabled = true;
            btnSubmitConsumerForm.textContent = '基础排盘推演完成';

            setTimeout(() => {
                closeConsumerFormShell();
                if (formStep2) formStep2.classList.remove('hidden');
                if (step2Completed) step2Completed.classList.add('hidden');
                btnSubmitConsumerForm.disabled = false;
                btnSubmitConsumerForm.textContent = '生成我的结构说明书';
                
                // Render and show Consumer V0 Report Page
                renderConsumerReport(consumerFormShellState.baziResult, consumerFormShellState);
            }, 1200);

        } catch (err) {
            console.error('[ConsumerForm] API fetch error:', err);
            btnSubmitConsumerForm.disabled = false;
            btnSubmitConsumerForm.textContent = '生成我的结构说明书';
            const warningModal = document.getElementById('local-warning-modal');
            if (warningModal) {
                warningModal.classList.remove('hidden');
            } else {
                alert('网络请求失败：无法连接到本地计算引擎。请确认已通过 run.bat 启动服务。');
            }
        }
    });
}

if (btnCloseNotice) {
    btnCloseNotice.addEventListener('click', () => {
        if (consumerNotice) {
            consumerNotice.classList.add('hidden');
            if (noticeTimeout) clearTimeout(noticeTimeout);
        }
    });
}


// ------------------------------------------------------------------
// Consumer Personalization Rules & 3-Layer Report Engine (Task 4.3A Data Model)
// ------------------------------------------------------------------

const DAY_MASTER_TRAITS = {
    '甲': {
        name: '甲木 (阳木)',
        title: '参天开路型 · 极强目标感',
        trait: '如参天大树，性格直爽包容，富有主见与进取心，讲求信义，但有时略显固执，不愿轻易妥协折弯。',
        advantage: '具备极强开创力与领头羊意识，面对明确目标时启动迅速，行动干净利落。',
        risk: '容易因为刚直不阿而在人际或沟通中显得硬朗过度，缺乏回旋余地。',
        realLifeScenario: '在团队或项目中，当大家还在犹豫时，你常常是第一个提出方案并开始行动的人；但若项目后期需要繁琐细致的修正，你可能会感到厌烦。',
        selfVerifyQuestion: '上一次让你感到力不从心的项目，是因为开始时冲得太快，还是因为中途没有及时求助？',
        keywords: ['主动开路', '刚直坚定', '容易硬撑']
    },
    '乙': {
        name: '乙木 (阴木)',
        title: '柔藤随应型 · 极强生存韧性',
        trait: '如藤蔓柔草，适应能力极强，外柔内刚，善于借力打力、随遇而安，富有人情味与洞察力。',
        advantage: '具备极高的环境生存韧性与协调手腕，擅长在复杂人际中化解矛盾。',
        risk: '面对重大抉择时偶尔容易优柔寡断，过度受周围情绪与环境影响。',
        realLifeScenario: '在复杂的多方沟通中，你擅长听出各方的真实诉求并找到折中方案；但当需要做单点斩乱麻的坚决割舍时，内耗极大。',
        selfVerifyQuestion: '你最近感到的纠结，是因为真的没有解决方案，还是因为试图照顾所有人的情绪而委屈了自己？',
        keywords: ['灵活随应', '外柔内刚', '容易优柔']
    },
    '丙': {
        name: '丙火 (阳火)',
        title: '太阳感染型 · 极高爆发力',
        trait: '如太阳炽热，热情光明，坦荡直率，行动力极强，乐于奉献与照亮他人，感染力十足。',
        advantage: '具备天生的领袖气场与号召力，办事果敢，能迅速激活团队氛围。',
        risk: '情绪来得快去得也快，容易三分钟热度，或因急躁而忽略细节执行。',
        realLifeScenario: '在项目启动或对外演示时你充满激情与气场；但如果需要连续数周进行枯燥的数据核对，你会感到能量被迅速抽干。',
        selfVerifyQuestion: '你最近感到疲惫，是因为工作量真的太大，还是因为近期缺乏能让你感到兴奋的新刺激与新反馈？',
        keywords: ['热情感染', '爆发力强', '厌恶拖沓']
    },
    '丁': {
        name: '丁火 (阴火)',
        title: '灯火洞察型 · 深度专注力',
        trait: '如烛光灯火，心思细腻内敛，专注度高，洞察力极强，富温情与礼数，内心执着而有明灯。',
        advantage: '擅长深耕细作与察觉他人未表达的需求，具备极高的高维感知力。',
        risk: '容易思虑过度、敏感内耗，在低能期倾向于将情绪埋藏于心。',
        realLifeScenario: '在独立钻研或一对一沟通中，你的专注力与敏锐度极高；但面对大声嚷嚷或毫无秩序的混乱场合，你会习惯性关上心门。',
        selfVerifyQuestion: '你最近闷闷不乐，是因为对方真的做错了什么，还是因为你习惯性把情绪压在心里等待对方主动察觉？',
        keywords: ['细腻专注', '洞察敏锐', '敏感内耗']
    },
    '戊': {
        name: '戊土 (阳土)',
        title: '高山基石型 · 极强承载力',
        trait: '如城墙高山，沉稳厚重，包容守信，讲求实在，做人做事有始有终，极具安全感。',
        advantage: '承载力极强，能扛重任，在团队中是定海神针般的稳定基石。',
        risk: '反应速度相对偏稳，容易显得固执守旧，对突发变革接受度较低。',
        realLifeScenario: '当团队遭遇危机时，你往往是大家最信任的靠山；但在需要快速转向或尝试未知的极简实验时，你往往需要更长的评估期。',
        selfVerifyQuestion: '你坚持不肯改变目前的方案，是因为目前的方案确实最优，还是因为内心抗拒未知的秩序重构？',
        keywords: ['沉稳靠山', '坚固守信', '抗拒剧变']
    },
    '己': {
        name: '己土 (阴土)',
        title: '沃土筹谋型 · 极强吸收整合力',
        trait: '如田园沃土，温和包容，多才多艺，善于配合与筹谋，能吸收整合各方资源。',
        advantage: '具备极高的包容度与细节整合能力，擅长默默滋养团队与项目。',
        risk: '偶尔缺乏果断斩乱麻的狠劲，容易因顾全大局而委屈自身需求。',
        realLifeScenario: '在幕后筹谋与资源协调中，你能把各方照顾得面面俱到；但当需要为自己争取正当利益时，往往难以开口。',
        selfVerifyQuestion: '上一次你感到被占便宜，是因为对方太强势，还是因为你从一开始就没有表达自己的底线？',
        keywords: ['温和滋养', '善于筹谋', '难以开口']
    },
    '庚': {
        name: '庚金 (阳金)',
        title: '刀剑裁决型 · 极强刚毅决断力',
        trait: '如刀剑矿石，刚毅果断，讲究义气与规则，决断力极强，重视效率与结果。',
        advantage: '斩钉截铁，执行力强，在危机时刻具备极佳的破局与裁决魄力。',
        risk: '性格直白硬朗，有时说话易伤人而不自知，缺乏缓冲温情。',
        realLifeScenario: '面对混乱低效的流程，你能毫不留情地砍掉无用环节；但在处理敏感的人际情绪时，直截了当的说话方式容易被误认为冷酷。',
        selfVerifyQuestion: '你刚才对同事/伴侣的评价，是为了解决问题，还是仅仅在宣泄对低效的容忍极限？',
        keywords: ['刚毅裁决', '讲求规则', '说话直硬']
    },
    '辛': {
        name: '辛金 (阴金)',
        title: '珠玉精雕型 · 极高审美品味',
        trait: '如珠玉金饰，精致温润，注重品质与自尊，感受敏锐，带独特的审美品味与批判眼光。',
        advantage: '追求完美与极致细节，在专业领域具备极高的鉴赏力与雕琢精神。',
        risk: '自尊心强，对批评较敏锐，容易在细节瑕疵上死磕而产生精神内耗。',
        realLifeScenario: '你的产出往往精致优雅、品质极高；但当别人提出修改意见时，你内心容易产生被否定或被挑剔的强烈防御感。',
        selfVerifyQuestion: '你迟迟不肯交付这份作品，是因为它真的达不到合格标准，还是因为你在和无意义的完美主义死磕？',
        keywords: ['精致品味', '自尊心强', '细节死磕']
    },
    '壬': {
        name: '壬水 (阳水)',
        title: '江河大局型 · 极强资源流动力',
        trait: '如江河大海，奔放聪明，格局宏大，随应万变，富战略眼光与宏观统筹力。',
        advantage: '思维活跃不设限，具备极强的资源流动意识与大局观。',
        risk: '纪律束缚感差，容易心浮气躁，有时缺乏持久落地的细致耐性。',
        realLifeScenario: '在画大图景与看清趋势时你眼光独到；但如果让你每天按部就班地打卡并做微观记录，你会感到精神被强烈困住。',
        selfVerifyQuestion: '你现在感到迷茫，是因为宏观方向不清，还是因为缺失了把大目标拆解为具体日计划的执行力？',
        keywords: ['宏观大局', '资源流动', '讨厌束缚']
    },
    '癸': {
        name: '癸水 (阴水)',
        title: '雨露智谋型 · 静水流深直觉力',
        trait: '如雨露甘霖，润物无声，智谋深远，内秀柔和，思维缜密，富深层直觉力。',
        advantage: '擅长以柔克刚、静水流深，在暗处默默布局与达成目标。',
        risk: '想法过于隐秘内敛，容易陷入悲观多虑或沉溺于内心情感漩涡。',
        realLifeScenario: '你往往能凭第六感精准捕捉事情的发展走势；但当直觉无法被逻辑证明时，你倾向于把担忧压在心底默默消化。',
        selfVerifyQuestion: '你最近的焦虑，是因为现实中真的发生了糟糕的事，还是你在脑海中排练了太多未发生的坏结果？',
        keywords: ['静水流深', '直觉敏锐', '隐秘多虑']
    }
};

const STRENGTH_MODULATION = {
    '身强': {
        plainTitle: '自主驱动型',
        plainExplain: '更容易依靠自身判断与独立行动推进事情，主导欲较强，适合独当一面。',
        desc: '全局能量主控力强，独立意识突出，习惯掌控主导权，擅长单点攻坚与主导大局；宜防范自负孤行。',
        workStyle: '倾向自主决策、主导业务方向，适合在富有自主权的舞台上担任核心指挥官。',
        relationStyle: '在关系中习惯占据主导庇护地位，表达直接，需学会主动倾听对方情绪。'
    },
    '偏强': {
        plainTitle: '充沛破局型',
        plainExplain: '能量较为充沛，自信心足，行动主动性强，在攻守转换间具备良好的独立破局力。',
        desc: '全局能量充沛有余，自信心足，行动主动性强；在攻守转换间具备良好的独立破局力。',
        workStyle: '具备极强的执行推动力与目标感，擅长领头攻坚或独立承担重大板块。',
        relationStyle: '互动中积极坦诚，愿意为他人遮风挡雨，需适度给对方留出表达空间。'
    },
    '身弱': {
        plainTitle: '环境协同型',
        plainExplain: '更容易感知环境变化，善于借助资源、团队与合作伙伴的力量共同推进。',
        desc: '全局能量敏感细腻，感受力强，善于统筹协同与借势打力；宜防范精力过度分散与多虑内耗。',
        workStyle: '擅长借助平台与团队力量协同推进，在智囊、风控或协调岗位上长板明显。',
        relationStyle: '关系中极其看重信任感与情绪安全感，敏感体贴，需建立清晰的自我边界。'
    },
    '偏弱': {
        plainTitle: '敏锐精细型',
        plainExplain: '感受力敏锐，对环境变化感察深刻，擅长在既定框架内精雕细琢与避其锋芒。',
        desc: '全局能量柔和敏锐，对环境变化感察深刻，擅长避其锋芒与精细化运作；宜注重能量滋养。',
        workStyle: '擅长在既定框架内精雕细琢，适合扮演智囊协助、品质把控或顾问专家角色。',
        relationStyle: '重情重义且注重深层精神共鸣，偶尔表达含蓄，需要对方给予明确正向反馈。'
    },
    '均势': {
        plainTitle: '灵活调和型',
        plainExplain: '攻守兼备，阴阳调和，能根据外部环境灵活切换独立攻坚与团队协同模式。',
        desc: '全局能量中和均衡，阴阳调和，应变度极高；能根据外部环境灵活切换攻守与进退策略。',
        workStyle: '适应力极广，既能独立攻坚亦能团队协作，在复杂变化中能保持情绪定力。',
        relationStyle: '关系中讲求互惠平等与相互尊重，沟通平和理性，具备极佳的人际缓冲力。'
    }
};

const ELEMENT_CAREER_RULES = {
    '木': '擅长生发与规划，在创意策划、教育培植、品牌文化或新业务开拓领域最能施展长板。',
    '火': '擅长表达与传播，在视觉艺术、品牌公关、大众传播或内容创作领域最能发挥爆发力。',
    '土': '擅长承载与整合，在资产管理、运营架构、平台支撑或资源统筹领域最显安定基石作用。',
    '金': '擅长规则与裁决，在技术研发、风控合规、精密制造或标准化建立领域最显精细威力。',
    '水': '擅长智谋与流动，在战略顾问、市场洞察、跨境流转或灵活投资领域最能随应施展。'
};

const ELEMENT_RELATION_RULES = {
    '阳': '在关系沟通中倾向于**开门见山、直接保护**，习惯用明确的行动或承诺传递关怀，但偶尔需要收敛强势气场。',
    '阴': '在关系沟通中倾向于**润物无声、细腻陪伴**，习惯在细节处照顾对方感受，但偶尔需要更直接地表达自身需求。'
};

// 1. Layer 1 Parsing Function
function parseConsumerBaziResult(baziResult) {
    const rawResult = {
        parseStatus: 'failed',
        dayMaster: { stem: null, element: null, yinYang: null },
        strength: '均势',
        isStrong: false,
        elementScores: { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 },
        strongestElement: '木',
        weakestElement: '水',
        fourPillars: { year: '', month: '', day: '', hour: '' },
        rawStdout: '',
        warnings: []
    };

    if (!baziResult || typeof baziResult !== 'object') {
        rawResult.warnings.push('八字结果对象为空');
        return rawResult;
    }

    const stdout = baziResult.stdout || (typeof baziResult === 'string' ? baziResult : '');
    rawResult.rawStdout = stdout;
    if (!stdout || typeof stdout !== 'string') {
        rawResult.warnings.push('stdout 文本为空');
        return rawResult;
    }

    // Parse Day Master
    const dmMatch = stdout.match(/【日主】([甲乙丙丁戊己庚辛壬癸])([木火土金水])?/) || stdout.match(/(?:日主|日干)：?\s*([甲乙丙丁戊己庚辛壬癸])([木火土金水])?/);
    if (dmMatch) {
        const stem = dmMatch[1];
        const stemElementMap = {
            '甲': { elem: '木', yy: '阳' },
            '乙': { elem: '木', yy: '阴' },
            '丙': { elem: '火', yy: '阳' },
            '丁': { elem: '火', yy: '阴' },
            '戊': { elem: '土', yy: '阳' },
            '己': { elem: '土', yy: '阴' },
            '庚': { elem: '金', yy: '阳' },
            '辛': { elem: '金', yy: '阴' },
            '壬': { elem: '水', yy: '阳' },
            '癸': { elem: '水', yy: '阴' }
        };
        const info = stemElementMap[stem] || { elem: dmMatch[2] || '火', yy: '阳' };
        rawResult.dayMaster = {
            stem: stem,
            element: info.elem,
            yinYang: info.yy
        };
    } else {
        rawResult.warnings.push('未能确定日主天干');
    }

    // Parse Strength
    const strengthMatch = stdout.match(/(身强|偏强|身弱|偏弱|均势)/) || stdout.match(/同党占比.*→\s*量化参考：?([^\n\r（]+)/);
    if (strengthMatch) {
        const sStr = strengthMatch[1].trim();
        if (['身强', '偏强', '身弱', '偏弱', '均势'].includes(sStr)) {
            rawResult.strength = sStr;
        } else if (sStr.includes('强')) {
            rawResult.strength = '偏强';
        } else if (sStr.includes('弱')) {
            rawResult.strength = '偏弱';
        } else {
            rawResult.strength = '均势';
        }
        rawResult.isStrong = rawResult.strength.includes('强');
    }

    // Parse Elements
    const wuxingRegex = /(?:  |\t|^)(木|火|土|金|水):([\d\.]+)/gm;
    let scoresFound = false;
    let match;
    while ((match = wuxingRegex.exec(stdout)) !== null) {
        scoresFound = true;
        rawResult.elementScores[match[1]] = parseFloat(match[2]);
    }
    if (scoresFound) {
        const sorted = Object.keys(rawResult.elementScores).sort((a, b) => rawResult.elementScores[b] - rawResult.elementScores[a]);
        rawResult.strongestElement = sorted[0];
        rawResult.weakestElement = sorted[sorted.length - 1];
    } else {
        rawResult.warnings.push('未能解析五行得分');
    }

    // Parse Four Pillars
    const tgMatch = stdout.match(/天干\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?/);
    const dzMatch = stdout.match(/地支\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?/);

    if (tgMatch && dzMatch) {
        rawResult.fourPillars.year = tgMatch[1] + dzMatch[1];
        rawResult.fourPillars.month = tgMatch[2] + dzMatch[2];
        rawResult.fourPillars.day = tgMatch[3] + dzMatch[3];
        rawResult.fourPillars.hour = tgMatch[4] + dzMatch[4];
    }

    if (rawResult.dayMaster.stem && scoresFound) {
        rawResult.parseStatus = 'success';
    } else if (rawResult.dayMaster.stem || scoresFound) {
        rawResult.parseStatus = 'partial';
    } else {
        rawResult.parseStatus = 'failed';
    }

    return rawResult;
}

// 2. Layer 2 Model Building Function (Task 4.3A Data Architecture)
function buildPersonalizedReportModel(parsedResult, formState) {
    if (!parsedResult || parsedResult.parseStatus === 'failed') {
        return {
            isDegraded: true,
            degradationMessage: '基础计算已完成，但当前版本未能稳定整理为个人结构说明书。你可以进入专业模式查看原始排盘结果。'
        };
    }

    const dm = parsedResult.dayMaster;
    const stem = dm.stem || '丙';
    const traitInfo = DAY_MASTER_TRAITS[stem] || DAY_MASTER_TRAITS['丙'];
    const strengthInfo = STRENGTH_MODULATION[parsedResult.strength] || STRENGTH_MODULATION['均势'];
    const activeScenario = formState.scenario || 'self';

    const scenarioNames = {
        self: '了解自己',
        career: '事业方向',
        relationship: '关系模式',
        confusion: '走出迷茫'
    };

    const scenarioSubtitles = {
        self: '关于内在能量、行为惯性与精力黑洞的深度拆解',
        career: '关于职场定位、协作惯性与战略节奏的深度拆解',
        relationship: '关于人际表达、心理边界与亲密需求的深度拆解',
        confusion: '关于降低内耗、破除焦虑与重建秩序的综合建议'
    };

    // --- Task 4.3A Plain Term Mapping ---
    const plainTerms = {
        dayMasterPlain: `核心驱动力: ${traitInfo.title}`,
        dayMasterExplain: `你更自然、更习惯采用的行动方式与性格底色（传统模型中称为日主“${stem}${dm.element}”）`,
        strengthPlain: `力量模式: ${strengthInfo.plainTitle}`,
        strengthExplain: strengthInfo.plainExplain,
        strongestPlain: `主导行为倾向: ${parsedResult.strongestElement}`,
        weakestPlain: `精细补给倾向: ${parsedResult.weakestElement}`
    };

    // --- Task 4.3A 30-Second Summary ---
    const summary30s = {
        keywords: traitInfo.keywords || ['主动推动', '重视反馈', '容易过载'],
        coreObservation: `你在目标清晰、正向反馈及时的环境中更能发挥高绩效。真正需要留意的，通常不是能力不足，而是容易因过分追求完美或不愿示弱而独自承担过多事。`,
        topAdvantage: traitInfo.advantage,
        topBurnout: traitInfo.risk,
        topAction: '未来两周尝试做一次“选择题减法”，主动暂停一个非核心消耗事项。',
        scenarioLabel: `本次关注: ${scenarioNames[activeScenario] || '了解自己'}`,
        scenarioSubtitle: scenarioSubtitles[activeScenario] || scenarioSubtitles.self
    };

    // --- Task 4.3A 14-Day Action Experiments (带做什么、为什么、如何判断 3 要素) ---
    const actionExperiments14Days = [
        {
            priorityPill: 'P1 核心突破',
            action: '建立“精力黑洞”拦截清单：在接受新任务前，先写下目标、交付标准与权责边界。',
            why: `由于你的驱动模式为【${traitInfo.title}】，提前划清边界可有效拦截由于缺乏准备而带来的后期反复修正内耗。`,
            verifyMetric: '观察未来两周内任务返工或沟通拉扯的频次是否明显下降。'
        },
        {
            priorityPill: 'P2 惯性防范',
            action: '警惕“优势过度使用”的副作用：当习惯性冲动或理性过度分析时，强制暂停 3 秒再做回应。',
            why: `【${strengthInfo.plainTitle}】的惯性容易让你在压力下习惯性硬扛或过度防御，建立 3 秒缓冲可保护情绪定力。`,
            verifyMetric: '观察在遇到分歧时，自己是否能够平和、清晰地表达真实诉求而非陷入辩驳。'
        },
        {
            priorityPill: 'P3 能量补给',
            action: '设立不作决定的纯粹休养窗口：每周固定 2 小时关闭外部消息，不做任何重大抉择。',
            why: `补充相对偏弱的【${parsedResult.weakestElement}】元素倾向，通过静心休养恢复精神敏锐度与直觉爆发力。`,
            verifyMetric: '观察休养窗口结束后，次日工作的专注度与情绪安顿感是否提升。'
        }
    ];

    // 1. Personality Section
    const framingMap = {
        self: `<p>【了解自己 · 精力模式拆解】本次报告重点聚焦于你的“内在精力结构”。在日常生活中，你最容易因为过度思考或追求完美而无意识消耗精神力。你的日主为 <strong>${traitInfo.name}</strong>（命局格局：<strong>${parsedResult.strength}</strong>）：</p>`,
        career: `<p>【事业方向 · 战术定位拆解】本次报告优先切入你的“职场能量与战术位”。你的日主为 <strong>${traitInfo.name}</strong>（命局格局：<strong>${parsedResult.strength}</strong>），直接决定了你的工作爆发力与协作习惯：</p>`,
        relationship: `<p>【关系模式 · 情感边界拆解】本次报告优先切入你的“关系互动与安全感机制”。在深度人际或亲密关系中，你的日主为 <strong>${traitInfo.name}</strong>（命局格局：<strong>${parsedResult.strength}</strong>），深刻影响着你如何索取与传递关怀：</p>`,
        confusion: `<p>【走出迷茫 · 秩序重建拆解】本次报告优先切入你的“当下迷茫解构与秩序破局”。面对人生整理期，你的日主为 <strong>${traitInfo.name}</strong>（命局格局：<strong>${parsedResult.strength}</strong>）提示我们：迷茫往往是因为试图同时解决太多不属于当前核心的问题：</p>`
    };

    const personalityHTML = `
        ${framingMap[activeScenario] || framingMap.self}
        <div class="highlight-box">
            <p><strong>天干核心原型：</strong> ${traitInfo.title}</p>
            <p style="margin-top: 6px; font-size: 0.9rem;">${traitInfo.trait}</p>
        </div>
        <div class="trait-split-box">
            <div class="advantage-col">
                <div class="col-header">✦ 天生核心长板</div>
                <div class="col-content">${traitInfo.advantage}</div>
            </div>
            <div class="risk-col">
                <div class="col-header">⚠ 无意识内耗点</div>
                <div class="col-content">${traitInfo.risk}</div>
            </div>
        </div>
        <p>👉 <strong>格局调和建议：</strong> ${strengthInfo.desc}</p>
        <p style="font-size: 0.88rem; color: var(--consumer-text-sub); margin-top: 8px;">💡 <strong>现实场景验证：</strong> ${traitInfo.realLifeScenario || ''}</p>
        <p style="font-size: 0.88rem; color: var(--consumer-primary-dark);">❓ <strong>自我验证提问：</strong> ${traitInfo.selfVerifyQuestion || ''}</p>
    `;

    // 2. Energy Section with Visual Energy Bars
    const totalScore = Object.values(parsedResult.elementScores).reduce((a, b) => a + b, 0) || 10;
    const elemClasses = { '木': 'fill-mu', '火': 'fill-huo', '土': 'fill-tu', '金': 'fill-jin', '水': 'fill-shui' };
    
    const strongestAdviceMap = {
        '木': '你的木属性能量充盈，创意生发力强；但需防范思虑漫无边际，宜将想法及时具象化落地。',
        '火': '你的火属性能量旺盛，爆发力与感染力极高；但需防范冲动急躁，注意保护心血管与睡眠质量。',
        '土': '你的土属性能量厚重，包容与承载力极佳；但需防范过于固执守旧，适度保持思维的流动灵活性。',
        '金': '你的金属性能量刚锐，规则感与裁决力极强；但需防范过分严苛与批判锋芒，保留缓冲温情。',
        '水': '你的水属性能量深沉，智谋与应变力突出；但需防范过度悲观多虑，多接触日光与户外活动。'
    };
    const weakestAdviceMap = {
        '木': '多接触大自然绿植，增加体能拉伸，多吃青绿色蔬菜，补足生机与向上进取心。',
        '火': '多接触阳光与明亮环境，适当饮用温热茶水，保持积极的社交接触以补充热情。',
        '土': '建立规律的生活作息，赤脚接触大地或泥土沙滩，注重脾胃调理以扎实根基。',
        '金': '保持居住与工作环境整洁干爽，佩戴金属饰品，行事培养果断利落的界限感。',
        '水': '保证充足的睡眠休养，多饮用纯净水，通过静心或冥想沉淀杂念，滋养心神。'
    };

    const energyHTML = `
        <p>在你的东方时间五行能量分布中，各维度占比与强弱可视化呈现如下：</p>
        <div class="energy-bar-list">
            ${Object.keys(parsedResult.elementScores).map(elem => {
                const score = parsedResult.elementScores[elem];
                const pct = Math.min(100, Math.max(8, Math.round((score / totalScore) * 100)));
                return `
                    <div class="energy-bar-item">
                        <div class="energy-bar-label"><span>${elem}</span><span>${score.toFixed(1)}</span></div>
                        <div class="energy-bar-track">
                            <div class="energy-bar-fill ${elemClasses[elem] || 'fill-mu'}" style="width: ${pct}%;"></div>
                        </div>
                        <div class="energy-bar-val">${pct}%</div>
                    </div>
                `;
            }).join('')}
        </div>
        <p>相对最主导的能量为 <strong>${parsedResult.strongestElement}</strong>（${strongestAdviceMap[parsedResult.strongestElement] || ''}），相对需滋养的能量为 <strong>${parsedResult.weakestElement}</strong>。</p>
        <div class="highlight-box">
            <p><strong>五行滋养指南：</strong> ${weakestAdviceMap[parsedResult.weakestElement] || ''}</p>
        </div>
    `;

    // 3. Career Section with Dos & Donts Tactical Redlines
    const careerElemAdvice = ELEMENT_CAREER_RULES[dm.element] || ELEMENT_CAREER_RULES['火'];
    const careerHTML = `
        <p>根据你的天干 <strong>${dm.stem}${dm.element} (${dm.yinYang}${dm.element})</strong> 与 <strong>${parsedResult.strength}</strong> 格局：</p>
        <div class="dos-donts-container">
            <div class="dos-box">
                <strong>✔ 最推荐的战术定位</strong>
                ${careerElemAdvice}
            </div>
            <div class="donts-box">
                <strong>✖ 最应避开的内耗红线</strong>
                避免在精力低谷时硬撑承担非核心的无谓摩擦，避免无边界的琐碎消耗，将 80% 的注意力锁死在核心长板壁垒上。
            </div>
        </div>
        <p>👉 <strong>最佳工作节奏：</strong> ${strengthInfo.workStyle}</p>
    `;

    // 4. Relationship Section
    const relationYinYangText = ELEMENT_RELATION_RULES[dm.yinYang] || ELEMENT_RELATION_RULES['阳'];
    const relationshipHTML = `
        <p>在人际与深度亲密关系中：</p>
        <p>👉 <strong>表达模式：</strong> ${relationYinYangText}</p>
        <p>👉 <strong>安全感与边界：</strong> ${strengthInfo.relationStyle}</p>
        <div class="highlight-box">
            <p><strong>沟通防爆指南：</strong> 当感受到情绪透支或边界被侵犯时，第一时间申请独立的心理冷却空间，避免陷入无休止的内耗辩驳。</p>
        </div>
    `;

    // 5. Action Section with Priority Action Cards (P1 / P2 / P3)
    const actionHTML = `
        <div class="priority-action-list">
            ${actionExperiments14Days.map(item => `
                <div class="priority-action-card">
                    <span class="priority-pill ${item.priorityPill.includes('P1') ? 'priority-p1' : item.priorityPill.includes('P2') ? 'priority-p2' : 'priority-p3'}">${item.priorityPill}</span>
                    <div class="action-card-body">
                        <h4>${item.action}</h4>
                        <p style="margin-bottom: 4px;">💡 <strong>适合原因：</strong> ${item.why}</p>
                        <p style="font-size: 0.85rem; color: var(--consumer-primary-dark);">🎯 <strong>判断方式：</strong> ${item.verifyMetric}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // 6. Evidence Section
    const stdoutSnippet = (parsedResult.rawStdout || '').substring(0, 240);
    const pillarsStr = parsedResult.fourPillars.year ? `年柱:${parsedResult.fourPillars.year} 月柱:${parsedResult.fourPillars.month} 日柱:${parsedResult.fourPillars.day} 时柱:${parsedResult.fourPillars.hour}` : '基础四柱已成功转换';
    const evidenceHTML = `
        <p><strong>推演干支四柱：</strong> ${pillarsStr}</p>
        <p><strong>底层数据片段：</strong></p>
        <pre style="background: var(--consumer-surface); padding: 12px; border-radius: 8px; border: 1px solid var(--consumer-border); font-size: 0.85rem; overflow-x: auto; color: var(--consumer-text-sub);">${stdoutSnippet}...</pre>
        <p style="margin-top: 16px; font-size: 0.9rem; color: var(--consumer-text-muted);">
            ✦ <strong>说明书使用边界：</strong> 本说明书仅基于传统时间模型对性格习惯与行动倾向提供结构化观察，不预测疾病、寿命或决定人生选择。结果仅供自我启迪与探索参考。
        </p>
    `;

    return {
        isDegraded: false,
        scenario: activeScenario,
        summary30s,
        plainTerms,
        actionExperiments14Days,
        userHeader: {
            nickname: formState.nickname || '阿澜',
            genderText: `性别：${formState.gender === 'female' ? '女' : '男'}`,
            birthText: `生辰：${formState.birthYear}年${formState.birthMonth}月${formState.birthDay}日 ${formState.birthHour >= 0 ? formState.birthHour + '时' : '时辰未定'}`,
            calendarText: `历法：${formState.calendarType === 'lunar' ? '农历' : '公历'}`,
            scenarioLabel: `本次关注：${scenarioNames[activeScenario] || '了解自己'}`,
            scenarioSubtitle: scenarioSubtitles[activeScenario] || scenarioSubtitles.self
        },
        personalityHTML,
        energyHTML,
        careerHTML,
        relationshipHTML,
        actionHTML,
        evidenceHTML
    };
}

// 3. Layer 3 DOM Rendering Function
function renderConsumerReport(baziResult, formState) {
    const reportView = document.getElementById('consumer-report-view');
    const mainView = document.querySelector('.consumer-main');
    const footer = document.querySelector('.consumer-footer');
    
    if (!reportView) return;
    
    // Parse Bazi Result & Build Report Model
    const parsedResult = parseConsumerBaziResult(baziResult);
    const reportModel = buildPersonalizedReportModel(parsedResult, formState);

    const userNameEl = document.getElementById('report-user-name');
    const userSubtitleEl = document.getElementById('report-user-subtitle');
    const genderEl = document.getElementById('report-meta-gender');
    const birthEl = document.getElementById('report-meta-birth');
    const calendarEl = document.getElementById('report-meta-calendar');
    const scenarioEl = document.getElementById('report-meta-scenario');

    if (reportModel.isDegraded) {
        if (userNameEl) userNameEl.textContent = formState.nickname || '受测人';
        if (userSubtitleEl) userSubtitleEl.textContent = '基础推演完成 · 报告格式降级提醒';
        
        const personalityEl = document.getElementById('report-section-personality');
        if (personalityEl) {
            personalityEl.innerHTML = `
                <div class="degraded-notice-box" style="padding: 20px; background: var(--consumer-surface); border: 1px solid var(--consumer-border); border-radius: 8px; color: var(--consumer-text-main);">
                    <p><strong>提示：</strong> ${reportModel.degradationMessage}</p>
                </div>
            `;
        }
    } else {
        // Normal Personalization Rendering
        if (userNameEl) userNameEl.textContent = reportModel.userHeader.nickname;
        if (userSubtitleEl) userSubtitleEl.textContent = reportModel.userHeader.scenarioSubtitle;
        if (genderEl) genderEl.textContent = reportModel.userHeader.genderText;
        if (birthEl) birthEl.textContent = reportModel.userHeader.birthText;
        if (calendarEl) calendarEl.textContent = reportModel.userHeader.calendarText;
        if (scenarioEl) scenarioEl.textContent = reportModel.userHeader.scenarioLabel;

        // Render Level 1: 30-Second Summary Card
        const summaryKeywordsEl = document.getElementById('summary-keywords');
        if (summaryKeywordsEl && reportModel.summary30s) {
            summaryKeywordsEl.innerHTML = (reportModel.summary30s.keywords || [])
                .map(kw => `<span class="summary-keyword-tag">${kw}</span>`)
                .join('');
        }
        const summaryObsEl = document.getElementById('summary-observation');
        if (summaryObsEl && reportModel.summary30s) {
            summaryObsEl.textContent = reportModel.summary30s.coreObservation;
        }
        const summaryAdvEl = document.getElementById('summary-advantage');
        if (summaryAdvEl && reportModel.summary30s) {
            summaryAdvEl.textContent = reportModel.summary30s.topAdvantage;
        }
        const summaryBurnoutEl = document.getElementById('summary-burnout');
        if (summaryBurnoutEl && reportModel.summary30s) {
            summaryBurnoutEl.textContent = reportModel.summary30s.topBurnout;
        }
        const summaryActionEl = document.getElementById('summary-action');
        if (summaryActionEl && reportModel.summary30s) {
            summaryActionEl.textContent = reportModel.summary30s.topAction;
        }

        // Section DOM Reordering based on scenario
        const container = document.querySelector('#consumer-report-view .report-container');
        const cardNodes = {
            personality: document.getElementById('card-section-personality'),
            energy: document.getElementById('card-section-energy'),
            career: document.getElementById('card-section-career'),
            relationship: document.getElementById('card-section-relationship'),
            action: document.getElementById('card-section-action'),
            evidence: document.getElementById('card-section-evidence')
        };
        const bottomActions = container ? container.querySelector('.report-bottom-actions') : null;

        const sectionOrders = {
            self: ['personality', 'energy', 'career', 'relationship', 'action', 'evidence'],
            career: ['career', 'energy', 'personality', 'action', 'relationship', 'evidence'],
            relationship: ['relationship', 'personality', 'energy', 'action', 'career', 'evidence'],
            confusion: ['action', 'personality', 'career', 'relationship', 'energy', 'evidence']
        };

        if (container && bottomActions) {
            const targetOrder = sectionOrders[reportModel.scenario] || sectionOrders.self;
            targetOrder.forEach(key => {
                if (cardNodes[key]) {
                    container.insertBefore(cardNodes[key], bottomActions);
                }
            });
        }

        // Fill Level 2 Content
        const personalityEl = document.getElementById('report-section-personality');
        if (personalityEl) personalityEl.innerHTML = reportModel.personalityHTML;

        const energyEl = document.getElementById('report-section-energy');
        if (energyEl) energyEl.innerHTML = reportModel.energyHTML;

        const careerEl = document.getElementById('report-section-career');
        if (careerEl) careerEl.innerHTML = reportModel.careerHTML;

        const relationshipEl = document.getElementById('report-section-relationship');
        if (relationshipEl) relationshipEl.innerHTML = reportModel.relationshipHTML;

        const adviceEl = document.getElementById('report-section-advice');
        if (adviceEl) adviceEl.innerHTML = reportModel.actionHTML;

        // Fill Level 3 Folded Evidence
        const boundaryEl = document.getElementById('report-section-boundary');
        if (boundaryEl) {
            boundaryEl.innerHTML = `
                ${reportModel.evidenceHTML}
                <div class="evidence-pro-entry" style="margin-top: 20px; padding-top: 16px; border-top: 1px dashed var(--consumer-border);">
                    <p style="font-size: 0.88rem; color: var(--consumer-text-sub); margin-bottom: 8px;">
                        需要对照完整的生辰干支排盘、大运流年或十神格局细节？
                    </p>
                    <button id="btn-enter-pro-from-evidence" class="btn-secondary-sm">进入专业排盘工作台反查 →</button>
                </div>
            `;
        }
    }

    // Toggle Views
    if (mainView) mainView.classList.add('hidden');
    if (footer) footer.classList.add('hidden');
    reportView.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeConsumerReportView() {
    const reportView = document.getElementById('consumer-report-view');
    const mainView = document.querySelector('.consumer-main');
    const footer = document.querySelector('.consumer-footer');
    
    if (reportView) reportView.classList.add('hidden');
    if (mainView) mainView.classList.remove('hidden');
    if (footer) footer.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Global listeners for report view buttons
document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-report-edit' || e.target.id === 'btn-report-bottom-edit') {
        closeConsumerReportView();
        openConsumerFormShell();
    } else if (e.target.id === 'btn-report-close' || e.target.id === 'btn-report-bottom-home') {
        closeConsumerReportView();
    } else if (e.target.id === 'btn-enter-pro-from-evidence') {
        closeConsumerReportView();
        const proView = document.getElementById('professional-mode-view');
        const consumerView = document.getElementById('consumer-mode-view');
        if (proView && consumerView) {
            consumerView.classList.add('hidden');
            proView.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
});
