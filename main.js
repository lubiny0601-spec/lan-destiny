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
    } else if (consumerFormShellState.step === 2) {
        if (step1View) step1View.classList.add('hidden');
        if (step2View) {
            step2View.classList.remove('hidden');
            populateBirthDateSelects();
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

// Consumer V0 Report Generator & View Management
function renderConsumerReport(baziResult, formState) {
    const reportView = document.getElementById('consumer-report-view');
    const mainView = document.querySelector('.consumer-main');
    const footer = document.querySelector('.consumer-footer');
    
    if (!reportView) return;
    
    const stdout = baziResult ? baziResult.stdout || '' : '';
    
    // Parse Day Master
    const dayMasterMatch = stdout.match(/(日主|日干)：?\s*([甲乙丙丁戊己庚辛壬癸][木火土金水]?)/);
    const dayMaster = dayMasterMatch ? dayMasterMatch[2] : "丙火";
    
    // Parse Balance
    const balanceMatch = stdout.match(/量化参考：\s*([^\n\r]+)/) || stdout.match(/(偏强|偏弱|身强|身弱)/);
    const balance = balanceMatch ? balanceMatch[1].trim() : "偏弱";
    
    // Parse Elements
    const wuxingRegex = /(木|火|土|金|水):([\d\.]+)/g;
    let scores = { "木": 1.5, "火": 2.0, "土": 3.0, "金": 1.0, "水": 2.5 };
    let match;
    while ((match = wuxingRegex.exec(stdout)) !== null) {
        scores[match[1]] = parseFloat(match[2]);
    }
    
    let sorted = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    let strongest = sorted[0];
    let weakest = sorted[sorted.length - 1];
    
    // Update Banner Meta
    const userNameEl = document.getElementById('report-user-name');
    const genderEl = document.getElementById('report-meta-gender');
    const birthEl = document.getElementById('report-meta-birth');
    const calendarEl = document.getElementById('report-meta-calendar');
    const scenarioEl = document.getElementById('report-meta-scenario');
    
    if (userNameEl) userNameEl.textContent = formState.nickname || '阿澜';
    if (genderEl) genderEl.textContent = `性别：${formState.gender === 'female' ? '女' : '男'}`;
    if (birthEl) birthEl.textContent = `生辰：${formState.birthYear}年${formState.birthMonth}月${formState.birthDay}日 ${formState.birthHour >= 0 ? formState.birthHour + '时' : '时辰未定'}`;
    if (calendarEl) calendarEl.textContent = `历法：${formState.calendarType === 'lunar' ? '农历' : '公历'}`;
    
    const scenarioNames = {
        self: '了解自己',
        career: '事业方向',
        relationship: '关系模式',
        confusion: '走出迷茫'
    };
    if (scenarioEl) scenarioEl.textContent = `关注方向：${scenarioNames[formState.scenario] || '了解自己'}`;

    // Section 01: Personality
    const personalityEl = document.getElementById('report-section-personality');
    if (personalityEl) {
        personalityEl.innerHTML = `
            <p>通过东方时间模型推演，你的日主天干为 <strong>${dayMaster}</strong>，全局能量格局呈现 <strong>${balance}</strong> 状态。</p>
            <div class="highlight-box">
                <p><strong>核心特质：</strong> ${getDayMasterDesc(dayMaster, balance)}</p>
            </div>
            <p>在日常思考模式中，你倾向于建立清晰的秩序与安全感，对周围环境的变化有着敏锐的感察能力。面对抉择时，你更习惯先在内心建立完整的评估逻辑，再迈出稳妥的步调。</p>
        `;
    }
    
    // Section 02: Energy
    const energyEl = document.getElementById('report-section-energy');
    if (energyEl) {
        energyEl.innerHTML = `
            <p>在你的五行能量分布中：</p>
            <div class="wuxing-grid">
                ${Object.keys(scores).map(elem => `
                    <div class="wuxing-item">
                        <div class="wuxing-name">${elem}</div>
                        <div class="wuxing-score">${scores[elem].toFixed(1)}</div>
                    </div>
                `).join('')}
            </div>
            <p>相对最充盈的能量为 <strong>${strongest}</strong>，相对偏弱或需滋养的能量为 <strong>${weakest}</strong>。</p>
            <div class="highlight-box">
                <p><strong>能量调理建议：</strong> ${getWuxingAdvice(weakest, strongest)}</p>
            </div>
        `;
    }
    
    // Section 03: Career
    const careerEl = document.getElementById('report-section-career');
    if (careerEl) {
        careerEl.innerHTML = `
            <p>根据你的日主 <strong>${dayMaster}</strong> 与 <strong>${balance}</strong> 的能量特征，在职场与工作中：</p>
            <p>👉 ${getCareerAdvice(dayMaster, balance, weakest)}</p>
            <p>在团队协作中，你更擅长扮演提供秩序、把控细节或独立攻坚的角色。避免在精力透支时硬撑承担过多的外部沟通，适度划分工作边界能让你的长板发挥得更加稳定。</p>
        `;
    }
    
    // Section 04: Relationship
    const relationshipEl = document.getElementById('report-section-relationship');
    if (relationshipEl) {
        relationshipEl.innerHTML = `
            <p>在人际与亲密关系中：</p>
            <p>👉 <strong>表达模式：</strong> 你重情重义且注重真实的信任感，不喜过于浮夸的应酬。在深度关系中，你习惯用实际行动和陪伴来传递关怀。</p>
            <p>👉 <strong>边界与需求：</strong> 你的内在需要足够的独立空间与情绪尊重。当感到边界被侵犯时，可能会选择暂时退缩或冷处理。学会温和、直接地表达需求，是让关系更顺畅的钥匙。</p>
        `;
    }
    
    // Section 05: Action Advice (Scenario-based)
    const adviceEl = document.getElementById('report-section-advice');
    if (adviceEl) {
        const scenarioAdviceMap = {
            self: `
                <p><strong>基于当下【了解自己】的关注重点：</strong></p>
                <p>1. <strong>接纳自己的情绪周期：</strong> 不必时刻要求自己处于完美的高能状态，能量偏弱时给大脑留出纯粹的休养窗口。</p>
                <p>2. <strong>建立微小的能量仪式：</strong> 日常多通过接触自然（如步行、绿植）或物理运动来释放积累的内耗。</p>
            `,
            career: `
                <p><strong>基于当下【事业方向】的关注重点：</strong></p>
                <p>1. <strong>聚焦优势长板：</strong> 将主要精力放在自己最有把握和成就感的专业核心领域，减少非必要的人际内耗。</p>
                <p>2. <strong>节奏求稳求精：</strong> 遇到变局时，保持定力，先看清资源与风险后再做重大长远决策。</p>
            `,
            relationship: `
                <p><strong>基于当下【关系模式】的关注重点：</strong></p>
                <p>1. <strong>清晰表达需求：</strong> 试着把“希望对方猜到”转化为“明确告知对方自己的感受与偏好”。</p>
                <p>2. <strong>保有独立精神领地：</strong> 在亲密关系中依然留出一块专属于自己的兴趣空间，关系反而更加通透。</p>
            `,
            confusion: `
                <p><strong>基于当下【走出迷茫】的关注重点：</strong></p>
                <p>1. <strong>降低信息过载：</strong> 迷茫往往源于选项过多与比较焦虑，试着先只做一件具体、可控的小事。</p>
                <p>2. <strong>关注当下节奏：</strong> 允许自己有一个“整理期”，厘清真正的核心需求，一步步恢复自信与秩序。</p>
            `
        };
        adviceEl.innerHTML = scenarioAdviceMap[formState.scenario] || scenarioAdviceMap.self;
    }
    
    // Section 06: Boundary
    const boundaryEl = document.getElementById('report-section-boundary');
    if (boundaryEl) {
        boundaryEl.innerHTML = `
            <p><strong>推演数据依据：</strong></p>
            <pre style="background: var(--consumer-surface); padding: 12px; border-radius: 8px; border: 1px solid var(--consumer-border); font-size: 0.85rem; overflow-x: auto; color: var(--consumer-text-sub);">${stdout.substring(0, 240)}...</pre>
            <p style="margin-top: 16px; font-size: 0.9rem; color: var(--consumer-text-muted);">
                ✦ <strong>说明书使用边界：</strong> 本说明书仅基于传统时间模型对性格习惯与行动倾向提供结构化观察，不预测疾病、寿命或决定人生选择。结果仅供自我启迪与探索参考。
            </p>
        `;
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
    }
});
