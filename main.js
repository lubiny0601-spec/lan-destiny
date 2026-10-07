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
    
    // Helper to calculate valid days for a given year, month and calendar
    function getDaysInMonth(year, month, calendarType) {
        if (calendarType === 'lunar') {
            return 30; // Chinese lunar month has at most 30 days
        }
        return new Date(year, month, 0).getDate();
    }

    function updateDaysInMonth() {
        const calendarRadio = document.querySelector('input[name="consumer_calendar"]:checked');
        const year = parseInt(yearSelect.value, 10) || 1995;
        const month = parseInt(monthSelect.value, 10) || 5;
        const calendarType = calendarRadio ? calendarRadio.value : 'solar';

        const maxDays = getDaysInMonth(year, month, calendarType);
        const prevDay = parseInt(daySelect.value, 10) || 15;
        const targetDay = Math.min(prevDay, maxDays);

        daySelect.innerHTML = '';
        for (let d = 1; d <= maxDays; d++) {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = `${d}日`;
            if (d === targetDay) opt.selected = true;
            daySelect.appendChild(opt);
        }
    }

    // Initial days generation
    updateDaysInMonth();

    // Dynamically adjust day options when year, month or calendar changes
    yearSelect.addEventListener('change', updateDaysInMonth);
    monthSelect.addEventListener('change', updateDaysInMonth);
    const calRadios = document.querySelectorAll('input[name="consumer_calendar"]');
    calRadios.forEach(r => r.addEventListener('change', updateDaysInMonth));

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

    const precisionSelect = document.getElementById('consumer-time-precision');
    if (precisionSelect) {
        hourSelect.addEventListener('change', () => {
            if (parseInt(hourSelect.value, 10) === -1) {
                precisionSelect.value = 'unknown';
            } else if (precisionSelect.value === 'unknown') {
                precisionSelect.value = 'hour';
            }
        });
        precisionSelect.addEventListener('change', () => {
            if (precisionSelect.value === 'unknown') {
                hourSelect.value = '-1';
            } else if (parseInt(hourSelect.value, 10) === -1) {
                hourSelect.value = '11';
            }
        });
    }
    
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

function showConsumerFormError(userMsg, rawError) {
    if (rawError) {
        console.error('[ConsumerForm] Error details:', rawError);
    }
    const errEl = document.getElementById('consumer-form-error');
    if (errEl) {
        errEl.textContent = userMsg;
        errEl.classList.remove('hidden');
    }
}

function clearConsumerFormError() {
    const errEl = document.getElementById('consumer-form-error');
    if (errEl) {
        errEl.textContent = '';
        errEl.classList.add('hidden');
    }
}

// ------------------------------------------------------------------
// Pure-JS In-Browser Bazi Calculation Engine (Zero-Backend / Offline Ready)
// ------------------------------------------------------------------
function convertLunarToSolarInBrowser(lunarYear, lunarMonth, lunarDay) {
    try {
        const fmt = new Intl.DateTimeFormat('en-u-ca-chinese', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
        const start = new Date(lunarYear, 0, 1);
        for (let offset = 0; offset < 420; offset++) {
            const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + offset);
            const parts = fmt.formatToParts(d);
            const mPart = parts.find(p => p.type === 'month')?.value || '';
            const dPart = parts.find(p => p.type === 'day')?.value || '';
            const mNum = parseInt(mPart.replace(/\D/g, ''), 10);
            const dNum = parseInt(dPart.replace(/\D/g, ''), 10);
            if (mNum === lunarMonth && dNum === lunarDay) {
                return {
                    year: d.getFullYear(),
                    month: d.getMonth() + 1,
                    day: d.getDate()
                };
            }
        }
    } catch (e) {
        console.warn('[BrowserBazi] Intl lunar conversion fallback:', e);
    }
    // Approximate fallback (+30 days) if Intl chinese calendar is unavailable
    const approx = new Date(lunarYear, lunarMonth - 1, lunarDay + 29);
    return {
        year: approx.getFullYear(),
        month: approx.getMonth() + 1,
        day: approx.getDate()
    };
}

function getTenGodName(dayStemIdx, targetStemIdx) {
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const ELEM_IDX = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 木0 火1 土2 金3 水4
    const dmElem = ELEM_IDX[dayStemIdx];
    const tgElem = ELEM_IDX[targetStemIdx];
    const samePolarity = (dayStemIdx % 2) === (targetStemIdx % 2);
    const diff = (tgElem - dmElem + 5) % 5;
    if (diff === 0) return samePolarity ? '比肩' : '劫财';
    if (diff === 1) return samePolarity ? '食神' : '伤官';
    if (diff === 2) return samePolarity ? '偏财' : '正财';
    if (diff === 3) return samePolarity ? '七杀' : '正官';
    return samePolarity ? '偏印' : '正印';
}

function calculateBaziInBrowser(payload) {
    const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
    const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
    const STEM_ELEM = { '甲': '木', '乙': '木', '丙': '火', '丁': '火', '戊': '土', '己': '土', '庚': '金', '辛': '金', '壬': '水', '癸': '水' };
    const BRANCH_ELEM = { '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火', '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水' };
    const HIDDEN_STEMS = {
        '子': [{ s: '癸', w: 1.0 }],
        '丑': [{ s: '己', w: 1.0 }, { s: '癸', w: 0.5 }, { s: '辛', w: 0.2 }],
        '寅': [{ s: '甲', w: 1.0 }, { s: '丙', w: 0.5 }, { s: '戊', w: 0.2 }],
        '卯': [{ s: '乙', w: 1.0 }],
        '辰': [{ s: '戊', w: 1.0 }, { s: '乙', w: 0.5 }, { s: '癸', w: 0.2 }],
        '巳': [{ s: '丙', w: 1.0 }, { s: '庚', w: 0.5 }, { s: '戊', w: 0.2 }],
        '午': [{ s: '丁', w: 1.0 }, { s: '己', w: 0.5 }],
        '未': [{ s: '己', w: 1.0 }, { s: '丁', w: 0.5 }, { s: '乙', w: 0.2 }],
        '申': [{ s: '庚', w: 1.0 }, { s: '壬', w: 0.5 }, { s: '戊', w: 0.2 }],
        '酉': [{ s: '辛', w: 1.0 }],
        '戌': [{ s: '戊', w: 1.0 }, { s: '辛', w: 0.5 }, { s: '丁', w: 0.2 }],
        '亥': [{ s: '壬', w: 1.0 }, { s: '甲', w: 0.5 }]
    };

    const rawYear = parseInt(payload.year, 10) || 1995;
    const rawMonth = parseInt(payload.month, 10) || 5;
    const rawDay = parseInt(payload.day, 10) || 15;
    const isHourKnown = payload.hour !== null && payload.hour !== undefined && parseInt(payload.hour, 10) >= 0;
    const hourVal = isHourKnown ? parseInt(payload.hour, 10) : null;
    const gender = payload.gender === 'female' ? 'female' : 'male';

    let solar = { year: rawYear, month: rawMonth, day: rawDay };
    if (payload.calendar === 'lunar') {
        solar = convertLunarToSolarInBrowser(rawYear, rawMonth, rawDay);
    }

    const sYear = solar.year;
    const sMonth = solar.month;
    const sDay = solar.day;

    // 12 Major Solar Terms (节) C-values for 20th/21st century (Jan 小寒 to Dec 大雪)
    const JIE_C_20 = [6.11, 4.6295, 6.3826, 5.59, 5.988, 6.5, 7.928, 8.35, 8.44, 9.098, 8.218, 7.9];
    const JIE_C_21 = [5.4055, 3.87, 5.63, 4.81, 5.52, 5.678, 7.108, 7.5, 7.646, 8.318, 7.438, 7.18];
    const y2 = sYear % 100;
    const cArr = sYear >= 2000 ? JIE_C_21 : JIE_C_20;
    const jieDayForMonth = (m1to12) => {
        const c = cArr[m1to12 - 1];
        return Math.floor(y2 * 0.2422 + c) - Math.floor((y2 - 1) / 4);
    };

    // Determine Bazi Year (starts at 立春 in Feb)
    const lichunDay = jieDayForMonth(2);
    const beforeLichun = (sMonth === 1) || (sMonth === 2 && sDay < lichunDay);
    const baziYear = beforeLichun ? sYear - 1 : sYear;
    const yearStemIdx = ((baziYear - 4) % 10 + 10) % 10;
    const yearBranchIdx = ((baziYear - 4) % 12 + 12) % 12;

    // Determine Bazi Month index (0 = 寅月 starting at Feb 立春, ..., 11 = 丑月 starting at Jan 小寒)
    const jieDay = jieDayForMonth(sMonth);
    // For sMonth=2 on/after jieDay -> mIdx=0 (寅); before jieDay -> mIdx=11 (丑)
    let mIdx;
    if (sDay >= jieDay) {
        mIdx = (sMonth + 10) % 12; // Feb(2)->0(寅), Mar(3)->1(卯), ..., Jan(1)->11(丑)
    } else {
        mIdx = (sMonth + 9) % 12;
    }
    const monthBranchIdx = (mIdx + 2) % 12;
    const monthStemIdx = ((yearStemIdx % 5) * 2 + 2 + mIdx) % 10;

    // Determine Day Pillar via Julian Day Number (JDN)
    const a = Math.floor((14 - sMonth) / 12);
    const yJdn = sYear + 4800 - a;
    const mJdn = sMonth + 12 * a - 3;
    const jdn = sDay + Math.floor((153 * mJdn + 2) / 5) + 365 * yJdn + Math.floor(yJdn / 4) - Math.floor(yJdn / 100) + Math.floor(yJdn / 400) - 32045;
    const dayJiaziIdx = ((jdn - 11) % 60 + 60) % 60;
    const dayStemIdx = dayJiaziIdx % 10;
    const dayBranchIdx = dayJiaziIdx % 12;

    // Determine Hour Pillar if known
    let hourStemIdx = null;
    let hourBranchIdx = null;
    if (isHourKnown) {
        hourBranchIdx = Math.floor((hourVal + 1) / 2) % 12;
        hourStemIdx = ((dayStemIdx % 5) * 2 + hourBranchIdx) % 10;
    }

    const yStem = STEMS[yearStemIdx], yBranch = BRANCHES[yearBranchIdx];
    const mStem = STEMS[monthStemIdx], mBranch = BRANCHES[monthBranchIdx];
    const dStem = STEMS[dayStemIdx], dBranch = BRANCHES[dayBranchIdx];
    const hStem = isHourKnown ? STEMS[hourStemIdx] : null;
    const hBranch = isHourKnown ? BRANCHES[hourBranchIdx] : null;

    // Calculate Element Scores & Ten-God Group Scores (matching paipan.py weights)
    const elemScores = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
    const addStemWeight = (stemChar, weight) => {
        const el = STEM_ELEM[stemChar];
        if (el) elemScores[el] += weight;
    };
    const addBranchWeights = (branchChar, mult) => {
        const hidden = HIDDEN_STEMS[branchChar] || [];
        hidden.forEach(item => addStemWeight(item.s, item.w * mult));
    };

    addStemWeight(yStem, 1.0);
    addStemWeight(mStem, 1.0);
    addStemWeight(dStem, 1.0);
    if (isHourKnown && hStem) addStemWeight(hStem, 1.0);

    addBranchWeights(yBranch, 1.0);
    addBranchWeights(mBranch, 2.0); // 月支司令×2
    addBranchWeights(dBranch, 1.0);
    if (isHourKnown && hBranch) addBranchWeights(hBranch, 1.0);

    const dmElem = STEM_ELEM[dStem];
    const ELEM_ORDER = ['木', '火', '土', '金', '水'];
    const dmElemPos = ELEM_ORDER.indexOf(dmElem);
    const bijieElem = ELEM_ORDER[dmElemPos];
    const shishangElem = ELEM_ORDER[(dmElemPos + 1) % 5];
    const caiElem = ELEM_ORDER[(dmElemPos + 2) % 5];
    const guanshaElem = ELEM_ORDER[(dmElemPos + 3) % 5];
    const yinElem = ELEM_ORDER[(dmElemPos + 4) % 5];

    const bijieScore = elemScores[bijieElem];
    const yinScore = elemScores[yinElem];
    const shishangScore = elemScores[shishangElem];
    const caiScore = elemScores[caiElem];
    const guanshaScore = elemScores[guanshaElem];

    const tongdang = bijieScore + yinScore;
    const yidang = shishangScore + caiScore + guanshaScore;
    const totalPower = tongdang + yidang || 1;
    const ratioPct = Math.round((tongdang / totalPower) * 100);

    let strengthLabel = '均势';
    if (ratioPct >= 62) strengthLabel = '身强';
    else if (ratioPct >= 53) strengthLabel = '偏强';
    else if (ratioPct <= 35) strengthLabel = '身弱';
    else if (ratioPct <= 46) strengthLabel = '偏弱';

    // Decade Luck (大运: 阳男阴女顺排，阴男阳女逆排)
    const isYangYear = (yearStemIdx % 2 === 0);
    const isForward = (isYangYear && gender === 'male') || (!isYangYear && gender === 'female');
    const luckDir = isForward ? '顺排' : '逆排';
    const startAge = 4 + ((sDay + sMonth) % 6); // 4-9岁起运
    const startYear0 = sYear + startAge;

    let decadeLines = [];
    for (let i = 1; i <= 8; i++) {
        const step = isForward ? i : -i;
        const dSIdx = ((monthStemIdx + step) % 10 + 10) % 10;
        const dBIdx = ((monthBranchIdx + step) % 12 + 12) % 12;
        const dStemChar = STEMS[dSIdx];
        const dBranchChar = BRANCHES[dBIdx];
        const sAge = startAge + (i - 1) * 10;
        const eAge = sAge + 9;
        const sYr = startYear0 + (i - 1) * 10;
        const tgMain = getTenGodName(dayStemIdx, dSIdx);
        const branchTgs = (HIDDEN_STEMS[dBranchChar] || []).map(h => getTenGodName(dayStemIdx, STEMS.indexOf(h.s)));
        const allTgs = [tgMain, ...branchTgs].join('/');
        decadeLines.push(`  ${dStemChar}${dBranchChar}\t${sAge}-${eAge}岁\t${sYr}年起\t[${allTgs}]`);
    }

    const headerMode = isHourKnown
        ? `【四柱】     年柱    月柱    日柱    时柱\n  天干       ${yStem}(${STEM_ELEM[yStem]})    ${mStem}(${STEM_ELEM[mStem]})    ${dStem}(${STEM_ELEM[dStem]})    ${hStem}(${STEM_ELEM[hStem]})\n  地支       ${yBranch}(${BRANCH_ELEM[yBranch]})    ${mBranch}(${BRANCH_ELEM[mBranch]})    ${dBranch}(${BRANCH_ELEM[dBranch]})    ${hBranch}(${BRANCH_ELEM[hBranch]})`
        : `公历：${sYear}-${String(sMonth).padStart(2, '0')}-${String(sDay).padStart(2, '0')}（时辰未知）\n【三柱】     年柱    月柱    日柱\n  天干       ${yStem}(${STEM_ELEM[yStem]})    ${mStem}(${STEM_ELEM[mStem]})    ${dStem}(${STEM_ELEM[dStem]})\n  地支       ${yBranch}(${BRANCH_ELEM[yBranch]})    ${mBranch}(${BRANCH_ELEM[mBranch]})    ${dBranch}(${BRANCH_ELEM[dBranch]})`;

    const stdout = [
        `════════════════════ 观澜浏览器本机排盘引擎 ════════════════════`,
        headerMode,
        `【日主】${dStem}${dmElem}，生于 ${mBranch}（${BRANCH_ELEM[mBranch]}） 月令`,
        `【五行力量】（天干1 / 藏干本气1·中气0.5·余气0.2 / 月支司令×2）`,
        `  木:${elemScores['木'].toFixed(1)}  火:${elemScores['火'].toFixed(1)}  土:${elemScores['土'].toFixed(1)}  金:${elemScores['金'].toFixed(1)}  水:${elemScores['水'].toFixed(1)}`,
        `  同党(扶日主)=${tongdang.toFixed(1)}  [比劫(${bijieElem})${bijieScore.toFixed(1)} + 印(${yinElem})${yinScore.toFixed(1)}]`,
        `  异党(耗日主)=${yidang.toFixed(1)}  [食伤(${shishangElem})${shishangScore.toFixed(1)} + 财(${caiElem})${caiScore.toFixed(1)} + 官杀(${guanshaElem})${guanshaScore.toFixed(1)}]`,
        `  同党占比 ${ratioPct}% → 量化参考：${strengthLabel}`,
        `【大运】${luckDir}`,
        ...decadeLines
    ].join('\n');

    return {
        stdout,
        engine: 'browser-local-v2',
        calculatedAt: new Date().toISOString(),
        payload
    };
}
window.calculateBaziInBrowser = calculateBaziInBrowser;

const btnSubmitConsumerForm = document.getElementById('btn-submit-consumer-form');
if (btnSubmitConsumerForm) {
    btnSubmitConsumerForm.addEventListener('click', async () => {
        clearConsumerFormError();

        const nicknameInput = document.getElementById('consumer-nickname');
        const genderRadio = document.querySelector('input[name="consumer_gender"]:checked');
        const calendarRadio = document.querySelector('input[name="consumer_calendar"]:checked');
        const yearSelect = document.getElementById('consumer-birth-year');
        const monthSelect = document.getElementById('consumer-birth-month');
        const daySelect = document.getElementById('consumer-birth-day');
        const hourSelect = document.getElementById('consumer-birth-hour');
        const precisionSelect = document.getElementById('consumer-time-precision');

        const sq1Radio = document.querySelector('input[name="situational_q1"]:checked');
        const sq2Radio = document.querySelector('input[name="situational_q2"]:checked');
        const sq3Radio = document.querySelector('input[name="situational_q3"]:checked');
        
        consumerFormShellState.nickname = nicknameInput ? nicknameInput.value.trim() || '阿澜' : '阿澜';
        consumerFormShellState.gender = genderRadio ? genderRadio.value : 'male';
        consumerFormShellState.calendarType = calendarRadio ? calendarRadio.value : 'solar';
        consumerFormShellState.birthYear = yearSelect ? parseInt(yearSelect.value, 10) : 1995;
        consumerFormShellState.birthMonth = monthSelect ? parseInt(monthSelect.value, 10) : 5;
        consumerFormShellState.birthDay = daySelect ? parseInt(daySelect.value, 10) : 15;
        consumerFormShellState.situationalAnswers = {
            q1: sq1Radio ? sq1Radio.value : 'push',
            q2: sq2Radio ? sq2Radio.value : 'overload',
            q3: sq3Radio ? sq3Radio.value : 'subtract'
        };
        
        const rawHour = hourSelect ? parseInt(hourSelect.value, 10) : 11;
        const precisionVal = precisionSelect ? precisionSelect.value : 'hour';

        if (rawHour === -1 || precisionVal === 'unknown') {
            consumerFormShellState.birthHour = -1;
            consumerFormShellState.timePrecision = 'unknown';
        } else {
            consumerFormShellState.birthHour = rawHour;
            consumerFormShellState.timePrecision = precisionVal;
        }

        // Validate date boundaries defensively
        const maxValidDays = (consumerFormShellState.calendarType === 'lunar') ? 30 : new Date(consumerFormShellState.birthYear, consumerFormShellState.birthMonth, 0).getDate();
        if (consumerFormShellState.birthDay > maxValidDays) {
            if (daySelect) daySelect.classList.add('is-error');
            showConsumerFormError(`选择的出生日期超出范围：${consumerFormShellState.birthYear}年${consumerFormShellState.birthMonth}月最多只有 ${maxValidDays} 天，请重新选择日期。`);
            return;
        }
        if (daySelect) daySelect.classList.remove('is-error');

        const isHourKnown = consumerFormShellState.birthHour >= 0 && consumerFormShellState.timePrecision !== 'unknown';
        const calcPayload = {
            module: 'bazi',
            gender: consumerFormShellState.gender,
            calendar: consumerFormShellState.calendarType,
            year: consumerFormShellState.birthYear,
            month: consumerFormShellState.birthMonth,
            day: consumerFormShellState.birthDay,
            hour: isHourKnown ? consumerFormShellState.birthHour : null,
            minute: isHourKnown ? 0 : null
        };

        btnSubmitConsumerForm.disabled = true;
        btnSubmitConsumerForm.classList.add('is-loading');
        btnSubmitConsumerForm.textContent = '1/3 正在读取出生资料与情境答案...';

        try {
            // Compute directly in the browser (0 external server dependency!)
            const localCalcResult = calculateBaziInBrowser(calcPayload);
            consumerFormShellState.baziResult = localCalcResult;

            btnSubmitConsumerForm.textContent = '2/3 正在交叉校准内在结构...';

            const formStep2 = document.getElementById('consumer-step2-form');
            const step2Completed = document.getElementById('step2-completed-state');
            if (formStep2) formStep2.classList.add('hidden');
            if (step2Completed) {
                step2Completed.classList.remove('hidden');
                const desc = step2Completed.querySelector('.completed-desc');
                if (desc) {
                    const modeNote = isHourKnown ? '四柱完整模式' : '三柱模式（未提供时辰）';
                    desc.textContent = `已在浏览器本机完成【${consumerFormShellState.nickname}】的结构推演与情境校准（${modeNote}），正在生成说明书...`;
                }
            }

            setTimeout(() => {
                btnSubmitConsumerForm.classList.remove('is-loading');
                btnSubmitConsumerForm.classList.add('is-success');
                btnSubmitConsumerForm.textContent = '✓ 3/3 已生成个人说明书';
            }, 220);

            setTimeout(() => {
                closeConsumerFormShell();
                if (formStep2) formStep2.classList.remove('hidden');
                if (step2Completed) step2Completed.classList.add('hidden');
                btnSubmitConsumerForm.disabled = false;
                btnSubmitConsumerForm.classList.remove('is-loading', 'is-success');
                btnSubmitConsumerForm.textContent = '生成我的结构说明书';
                
                renderConsumerReport(consumerFormShellState.baziResult, consumerFormShellState);
            }, 460);

        } catch (err) {
            btnSubmitConsumerForm.disabled = false;
            btnSubmitConsumerForm.classList.remove('is-loading', 'is-success');
            btnSubmitConsumerForm.textContent = '生成我的结构说明书';
            showConsumerFormError('浏览器本机推演遇到异常，请检查出生日期格式后再试。', err);
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
        trait: '如江河大海，奔放聪明，视野宏大，随应万变，富战略眼光与宏观统筹力。',
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
    '阳': '在关系沟通中倾向于<strong>开门见山、直接保护</strong>，习惯用明确的行动或承诺传递关怀，但偶尔需要收敛强势气场。',
    '阴': '在关系沟通中倾向于<strong>润物无声、细腻陪伴</strong>，习惯在细节处照顾对方感受，但偶尔需要更直接地表达自身需求。'
};

// 1. Layer 1 Parsing Function
function parseConsumerBaziResult(baziResult) {
    const rawResult = {
        parseStatus: 'failed',
        isTimeKnown: true,
        dayMaster: { stem: null, element: null, yinYang: null },
        monthBranch: '寅',
        monthElement: '木',
        strength: '均势',
        isStrong: false,
        elementScores: { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 },
        strongestElement: '木',
        weakestElement: '水',
        tenGodScores: { '比劫': 0, '印': 0, '食伤': 0, '财': 0, '官杀': 0 },
        topTenGod: '食伤',
        secondTenGod: '比劫',
        luckDirection: '顺排',
        currentDecade: null,
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

    // Check 3-pillar (unknown birth hour) mode
    if (stdout.includes('【三柱】') || stdout.includes('时辰未知')) {
        rawResult.isTimeKnown = false;
    }

    // Parse Day Master & Month Command (月令)
    const dmMatch = stdout.match(/【日主】([甲乙丙丁戊己庚辛壬癸])([木火土金水])?(?:，生于\s*([子丑寅卯辰巳午未申酉戌亥])（([木火土金水])）\s*月令)?/) ||
        stdout.match(/(?:日主|日干)：?\s*([甲乙丙丁戊己庚辛壬癸])([木火土金水])?/);
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
        if (dmMatch[3]) rawResult.monthBranch = dmMatch[3];
        if (dmMatch[4]) rawResult.monthElement = dmMatch[4];
    } else {
        rawResult.warnings.push('未能确定日主天干');
    }

    // Parse Strength
    const strengthMatch = stdout.match(/量化参考：?\s*(身强|偏强|身弱|偏弱|均势)/) || stdout.match(/(身强|偏强|身弱|偏弱|均势)/);
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

    // Parse Ten-God (十神) Group Scores from 同党/异党 lines
    const tgGroupRegexes = {
        '比劫': /比劫\([木火土金水]\)\s*([\d\.]+)/,
        '印': /印\([木火土金水]\)\s*([\d\.]+)/,
        '食伤': /食伤\([木火土金水]\)\s*([\d\.]+)/,
        '财': /财\([木火土金水]\)\s*([\d\.]+)/,
        '官杀': /官杀\([木火土金水]\)\s*([\d\.]+)/
    };
    let tgFound = false;
    Object.keys(tgGroupRegexes).forEach(group => {
        const m = stdout.match(tgGroupRegexes[group]);
        if (m) {
            rawResult.tenGodScores[group] = parseFloat(m[1]);
            tgFound = true;
        }
    });
    if (tgFound) {
        const sortedTg = Object.keys(rawResult.tenGodScores).sort((a, b) => rawResult.tenGodScores[b] - rawResult.tenGodScores[a]);
        rawResult.topTenGod = sortedTg[0];
        rawResult.secondTenGod = sortedTg[1];
    }

    // Parse Decade Luck (【大运】) - varies by gender (顺排 vs 逆排)
    const dirMatch = stdout.match(/【大运】(顺排|逆排)/);
    if (dirMatch) {
        rawResult.luckDirection = dirMatch[1];
    }
    const decadeRegex = /^\s*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])\s+(\d+)-(\d+)岁\s+(\d{4})年起\s+\[([^\]]+)\]/gm;
    const decades = [];
    let dMatch;
    while ((dMatch = decadeRegex.exec(stdout)) !== null) {
        const startYear = parseInt(dMatch[4], 10);
        const tgList = dMatch[5].split('/').map(s => s.trim()).filter(Boolean);
        decades.push({
            pillar: dMatch[1],
            startAge: parseInt(dMatch[2], 10),
            endAge: parseInt(dMatch[3], 10),
            startYear,
            endYear: startYear + 9,
            tenGods: tgList,
            primaryTenGod: tgList[0] || '比肩'
        });
    }
    if (decades.length > 0) {
        const targetYear = 2026;
        const active = decades.find(d => targetYear >= d.startYear && targetYear <= d.endYear) || decades[0];
        rawResult.currentDecade = active;
    }

    // Parse Four Pillars (or Three Pillars when birth hour is unknown)
    const tgMatch4 = stdout.match(/天干\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?/);
    const dzMatch4 = stdout.match(/地支\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?/);

    if (tgMatch4 && dzMatch4) {
        rawResult.fourPillars.year = tgMatch4[1] + dzMatch4[1];
        rawResult.fourPillars.month = tgMatch4[2] + dzMatch4[2];
        rawResult.fourPillars.day = tgMatch4[3] + dzMatch4[3];
        rawResult.fourPillars.hour = tgMatch4[4] + dzMatch4[4];
    } else {
        const tgMatch3 = stdout.match(/天干\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?\s+([甲乙丙丁戊己庚辛壬癸])(?:\([木火土金水]\))?/);
        const dzMatch3 = stdout.match(/地支\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?\s+([子丑寅卯辰巳午未申酉戌亥])(?:\([木火土金水]\))?/);
        if (tgMatch3 && dzMatch3) {
            rawResult.fourPillars.year = tgMatch3[1] + dzMatch3[1];
            rawResult.fourPillars.month = tgMatch3[2] + dzMatch3[2];
            rawResult.fourPillars.day = tgMatch3[3] + dzMatch3[3];
            rawResult.fourPillars.hour = '时辰未定';
        }
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

// ------------------------------------------------------------------
// Consumer Scenario Deep-Dive & Action Generators (Task 4.3C)
// ------------------------------------------------------------------

const OVERUSE_RISK_MAP = {
    '甲': '容易将“目标感”演变为刚愎固执，不愿向他人暴露弱点或寻求支持，容易单打独斗导致能量透支。',
    '乙': '容易将“适应力”演变为讨好妥协，为了维护表面和谐而模糊个人底线，累积隐性怨气。',
    '丙': '容易将“热情感染”演变为急躁冒进与三分钟热度，缺乏深耕落地的耐心，面对迟缓反馈极易烦躁。',
    '丁': '容易将“洞察敏锐”演变为思虑过度与情绪内耗，在暗中预设过多假想敌，消耗大量心力。',
    '戊': '容易将“沉稳承载”演变为抗拒变革与固步自封，对新工具与新逻辑反应偏慢，承担过多沉重包袱。',
    '己': '容易将“包容筹谋”演变为委曲求全与过度奉献，难以果断拒绝他人要求，常感精力被无度蚕食。',
    '庚': '容易将“刚毅决断”演变为严苛批判与说话直硬，对低效容忍度极低，容易无意间刺伤他人。',
    '辛': '容易将“追求精致”演变为死磕细节与完美主义内耗，对批评极其敏感，常因微小瑕疵而全盘自我怀疑。',
    '壬': '容易将“宏观大局”演变为浮躁散漫与缺乏定力，难以忍受琐碎执行，容易在频繁转换赛道中迷失。',
    '癸': '容易将“静水流深”演变为隐秘多虑与悲观预演，在脑海中排练过多灾难化假设，不敢果断采取行动。'
};

const ENERGY_RECHARGE_DRAIN_MAP = {
    '甲': {
        recharge: ['拥有自主支配权的拓荒项目', '明确且具挑战性的单点攻坚', '大自然绿植与户外徒步活动'],
        drain: ['被微观管理与无序指挥', '缺乏明确决策权的拉扯会议', '繁琐重复的后期修修补补']
    },
    '乙': {
        recharge: ['氛围融洽且相互支持的小型团队', '允许灵活调整推进方式的环境', '温馨舒适的私密生活空间'],
        drain: ['针锋相对的高压冲突场合', '被要求做单点斩乱麻的残酷决断', '周围充斥消极抱怨与负能量']
    },
    '丙': {
        recharge: ['能得到热烈正向反馈的公开舞台', '充满新鲜刺激的创意头脑风暴', '日光充足且视野开阔的明亮空间'],
        drain: ['长达数周封闭枯燥的数据核对', '毫无情绪波动的冷漠办公氛围', '被要求按部就班做事务性打卡']
    },
    '丁': {
        recharge: ['一对一深度交心的真诚沟通', '安静无打扰的独立专研时光', '阅读、艺术或具有精神滋养的活动'],
        drain: ['人声嘈杂且毫无秩序的混乱社交', '情绪被粗暴忽视或被误解', '高频切换任务打断心流']
    },
    '戊': {
        recharge: ['节奏稳健、权责明确的成熟平台', '有充分时间做前期调研评估的事项', '接触大地泥土与规律生活作息'],
        drain: ['毫无预警的突发剧烈架构变动', '被逼迫在信息不足时盲目押注', '承诺被频繁单方面撕毁']
    },
    '己': {
        recharge: ['被真诚认可与信任的后盾角色', '按照自己的节奏整合筹备资源', '家庭或亲密圈子的温暖陪伴'],
        drain: ['需要正面发起攻坚抢夺资源的竞争', '付出被视为理所当然缺乏感谢', '被迫站上风口浪尖承担攻击']
    },
    '庚': {
        recharge: ['清晰透明的规则与高效率协作', '大刀阔斧推行流程优化的裁决权', '高强度体能锻炼与利落整理'],
        drain: ['说话弯弯绕绕不讲重点的低效沟通', '人浮于事、责任不清的推诿环境', '被迫配合毫无结果的虚假表演']
    },
    '辛': {
        recharge: ['高品质、高审美的独立创作空间', '专业水准得到同行的极致赞誉', '精致整洁、极具格调的个人环境'],
        drain: ['产出被粗糙对待或毫无品味地修改', '公开场合遭受不专业的贬低挑剔', '脏乱差且缺乏质感的工作环境']
    },
    '壬': {
        recharge: ['自由度极高、跨界的宏观战略构想', '跨国、跨行业的新信息流转接触', '临水散步与不设限的思维漫游'],
        drain: ['被按在固定工位做极其死板的微观记录', '视野狭隘、只看眼前蝇头小利的局限', '行动被重重繁琐流程层层审批']
    },
    '癸': {
        recharge: ['凭借深层直觉默默布局并见效', '充足的水疗、静心冥想与睡眠休养', '与懂自己底层逻辑的知己轻声交谈'],
        drain: ['被强行要求用严密逻辑证明所有直觉', '情绪隐私被公开展露与剖析', '长期处于身心缺水或极度亢奋状态']
    }
};

const CAREER_SYNERGY_MAP = {
    '身强': '你具备天生的主导者与破局者意识，在拥有充分自主权与决策权的战术位上绩效最高；若处于层层汇报的执行层，容易产生强烈的束缚内耗。',
    '偏强': '你兼具强大的目标感与攻坚执行力，擅长在明确的大方向下独立负责重大板块，适合担任项目主推手或核心骨干。',
    '身弱': '你对环境风向与资源变动极具敏锐度，擅长在成熟平台中借势发力，在智囊支持、跨部门协同或专业顾问岗位上长板最明显。',
    '偏弱': '你擅长在既定框架下精雕细琢，具备出色的风险防御与品质把控能力，适合扮演专家顾问、品控中枢或关键辅助角色。',
    '均势': '你攻守兼备，能根据项目不同阶段灵活切换“独立攻坚”与“团队统筹”角色，是团队中不可或缺的粘合剂与定海神针。'
};

const CAREER_CHAOS_MAP = {
    '木': '面对行业变局，你倾向于快速生发新想法并尝试开路，但需防范盲目开拓新业务而分散有限资源。',
    '火': '面对突发危机，你往往能以极高的爆发力迅速应对与鼓舞士气，但需注意保护体力，防范后期耐力断档。',
    '土': '面对外部动荡，你的第一反应是坚守阵地与稳住基盘，但需警惕过度防御而错失主动转型的窗口期。',
    '金': '面对效率危机，你能果断手起刀落斩断亏损环节，但需注意安抚团队情绪，避免因态度刚硬引发次生矛盾。',
    '水': '面对市场变动，你的思维极其灵活善于捕捉新趋势，但需设立清晰的阶段止盈与止损点，防范方向摇摆。'
};

const RELATION_DEFENSE_MAP = {
    '阳': '在遭遇关系冲突或误解时，你容易倾向于<strong>直接反驳、争夺定义权或用行动掩盖情绪</strong>，虽然初衷是解决问题，但外在表现容易让对方感受到强势与压迫感。',
    '阴': '在遭遇关系冲突或压力时，你容易倾向于<strong>沉默退缩、把委屈压在心底或开启防御性冷淡</strong>，虽然避免了当场冲突，但容易在内心累积隐性隔阂与怨气。'
};

const RELATION_BOUNDARY_MAP = {
    '身强': {
        bottomLine: '保持彼此的独立人格与平等尊重，不接受单方面的控制与无理索取。',
        vulnerability: '容易因责任感过强而过度大包大揽，不知不觉承担了本该由对方承担的生活或情绪责任。'
    },
    '偏强': {
        bottomLine: '沟通开诚布公，坦荡相待，不接受隐瞒与玩弄心机。',
        vulnerability: '习惯用“我为你好”的付出方式代替倾听，容易忽略对方细腻的心理感受。'
    },
    '身弱': {
        bottomLine: '需要稳定、可预测的情绪安全感，拒绝情绪暴力与冷暴力。',
        vulnerability: '容易因为害怕关系破裂而一再退让底线，直到自身能量彻底透支崩溃。'
    },
    '偏弱': {
        bottomLine: '尊重彼此的心理冷却空间，不接受过度侵入私人精神领域。',
        vulnerability: '过度在意对方的微表情与情绪变化，容易因过度解读而陷入精神内耗。'
    },
    '均势': {
        bottomLine: '讲求互惠互利与相互扶持，追求健康对等的双向奔赴。',
        vulnerability: '有时过于理智客观看待感情，容易在对方需要情绪共鸣时显得过于冷静。'
    }
};

const RELATION_REFLECTION_MAP = {
    '甲': '在下一次感到沟通受阻时，尝试先向对方表达一句“我理解你的感受”，再阐述你的解决方案。',
    '乙': '试着在感到不舒服的第一时间平静说出“我现在需要一些时间”，而不是委屈配合后再默默委屈。',
    '丙': '在急于表达观点前，先深呼吸停留 3 秒，给对方完整的表达机会，避免抢话打断。',
    '丁': '将你心中希望对方察觉的需求，用温和而明确的文字直接告诉对方，不留猜测盲区。',
    '戊': '在坚持原则的同时，试着给对方一个温暖的肢体接触或温和的解释，软化紧绷气氛。',
    '己': '明确划出一件你“不再代劳”的事情，让对方学会为自己的生活板块负责。',
    '庚': '在指出问题后，补充一句肯定对方初衷的话，用柔软包裹锋芒。',
    '辛': '当对方提出不同意见时，提醒自己“对方只是在讨论事情本身，并不是在否定我的价值”。',
    '壬': '在向对方勾勒远大蓝图的同时，落实一个今天就能共同完成的生活小细节。',
    '癸': '把脑海中反复纠结的某个担忧主动向对方核实，用真实对话打破臆想中的坏结果。'
};

const PLAIN_ELEMENT_MAP = {
    '木': { name: '生长开拓', short: '开拓规划', color: '#315C4C' },
    '火': { name: '表达感染', short: '传播号召', color: '#C85A32' },
    '土': { name: '承载统筹', short: '稳健整合', color: '#B58A52' },
    '金': { name: '秩序决断', short: '精密裁决', color: '#607870' },
    '水': { name: '洞察思辨', short: '策略流动', color: '#2B4C5E' }
};

const TEN_GOD_BEHAVIOR_MAP = {
    '比劫': {
        label: '自主并肩驱动',
        coreStyle: '极看重个人主权与直接行动，在有竞争张力或自主拍板的场景中状态最佳',
        careerEdge: '适合独立负责核心业务单元或带领高执行力小分队突围',
        burnoutTrap: '容易把本可分工的协作全部扛在自己肩上，不愿轻易示弱求助',
        relationHabit: '习惯用并肩作战与实际行动表达在乎，反感被单方面说教或控制'
    },
    '印': {
        label: '深度内化吸收',
        coreStyle: '习惯先洞察底层逻辑与系统安全感，在深度钻研与知识沉淀中积累势能',
        careerEdge: '适合策略研究、体系搭建、专家顾问或高壁垒专业深耕',
        burnoutTrap: '容易在准备阶段反复推演而推迟行动节点，将外部压力内化为精神思虑',
        relationHabit: '看重精神默契与温和包容的安全感，需要稳定的独处充电空间'
    },
    '食伤': {
        label: '创造表达生发',
        coreStyle: '极具原创灵气与表达张力，天然抗拒机械刻板的重复流程',
        careerEdge: '适合产品创新、内容创作、审美设计、方案策划或从0到1孵化',
        burnoutTrap: '容易因情绪起伏或对庸常流程的不耐烦而损耗心神，难以忍受僵化指令',
        relationHabit: '追求鲜活有趣的灵魂共鸣与高感知度互动，对敷衍冷漠极其敏感'
    },
    '财': {
        label: '结果价值导向',
        coreStyle: '务实敏锐、看重投入产出比与可量化成果，擅长把想法转化为具体落地价值',
        careerEdge: '适合商业运营、资源变现、项目管理、供应链统筹或目标闭环攻坚',
        burnoutTrap: '容易被过多多线程的目标与现实得失绑架，忽略身心长期的休养弹性',
        relationHabit: '倾向于用具体的物质照顾与解决问题来表达爱意，有时显得过于理性务实'
    },
    '官杀': {
        label: '秩序责任攻坚',
        coreStyle: '对规则、标准与外部承诺有极强的自我要求，危机感与抗压使命感突出',
        careerEdge: '适合风控管理、架构治理、高标准交付、流程裁决或复杂组织协同',
        burnoutTrap: '容易把外部评价与责任枷锁背得过重，长期处于紧绷备战状态难以放松',
        relationHabit: '对待承诺极为认真克制，习惯先讲原则与责任，需要学会卸下防备表达脆弱'
    }
};

const MONTH_RHYTHM_MAP = {
    '寅': '初春破土般的主动生发感',
    '卯': '仲春舒展般的敏捷协调感',
    '辰': '暮春沉淀般的统筹缓冲力',
    '巳': '初夏升腾般的敏锐推进力',
    '午': '盛夏凝聚般的高光爆发力',
    '未': '季夏温厚般的融合承载力',
    '申': '初秋肃敛般的利落决断力',
    '酉': '仲秋澄澈般的精致把控力',
    '戌': '暮秋厚重般的守成定力',
    '亥': '初冬蓄势般的深层洞察力',
    '子': '仲冬潜藏般的冷静思辨力',
    '丑': '季冬坚韧般的默默蓄力感'
};

const SITUATIONAL_CALIBRATION_RULES = {
    q1: {
        push: { tag: '高压硬扛态', note: '当下面对卡点时倾向于先顶上去强行推进，需警惕身体与情绪在不知不觉中透支' },
        think: { tag: '审慎推演态', note: '当下面对卡点时倾向于反复推演所有细节与风险，需防范思维过载导致的行动迟滞' },
        harmony: { tag: '关系顾全态', note: '当下面对卡点时优先照顾各方情绪与表面和谐，需防范委屈自身真实诉求' }
    },
    q2: {
        overload: { tag: '多线过载源', drainFocus: '多线程任务并行与高频打断正在稀释你的核心长板', cutTarget: '砍掉 2 项低价值的非核心琐事' },
        boundary: { tag: '边界拉扯源', drainFocus: '权责不清的协作拉扯或隐性情绪索取正在消耗你的心流', cutTarget: '明确拒绝 1 次模糊越界的配合请求' },
        stagnation: { tag: '摇摆内耗源', drainFocus: '在多个方向之间反复权衡却未迈出验证步，正在造成空转焦虑', cutTarget: '停止无休止的方案比较，锁定 1 个最小验证动作' }
    },
    q3: {
        subtract: { tag: '减法清场', actionVerb: '执行“强制减法清场”：每天早晨划掉清单上最不重要的 30% 事项' },
        breakthrough: { tag: '单点破局', actionVerb: '执行“单点最小闭环”：用 48 小时完成一个最核心想法的极简样品并获取反馈' },
        recharge: { tag: '边界充能', actionVerb: '执行“护城河充能”：每天设立 45 分钟免打扰窗口，切断一切非紧急响应' }
    }
};

// 2. Layer 2 Model Building Function (Multidimensional + Situational Calibration)
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
    const isTimeKnown = parsedResult.isTimeKnown !== false;

    const topTgKey = parsedResult.topTenGod || '食伤';
    const secondTgKey = parsedResult.secondTenGod || '比劫';
    const topTgInfo = TEN_GOD_BEHAVIOR_MAP[topTgKey] || TEN_GOD_BEHAVIOR_MAP['食伤'];
    const secondTgInfo = TEN_GOD_BEHAVIOR_MAP[secondTgKey] || TEN_GOD_BEHAVIOR_MAP['比劫'];

    const strongElemPlain = PLAIN_ELEMENT_MAP[parsedResult.strongestElement] || PLAIN_ELEMENT_MAP['木'];
    const weakElemPlain = PLAIN_ELEMENT_MAP[parsedResult.weakestElement] || PLAIN_ELEMENT_MAP['水'];
    const monthRhythm = MONTH_RHYTHM_MAP[parsedResult.monthBranch] || '敏锐推进力';

    const sq = formState.situationalAnswers || { q1: 'push', q2: 'overload', q3: 'subtract' };
    const sq1 = SITUATIONAL_CALIBRATION_RULES.q1[sq.q1] || SITUATIONAL_CALIBRATION_RULES.q1.push;
    const sq2 = SITUATIONAL_CALIBRATION_RULES.q2[sq.q2] || SITUATIONAL_CALIBRATION_RULES.q2.overload;
    const sq3 = SITUATIONAL_CALIBRATION_RULES.q3[sq.q3] || SITUATIONAL_CALIBRATION_RULES.q3.subtract;

    // Decade stage rhythm (varies by gender's 顺排/逆排)
    const decade = parsedResult.currentDecade;
    const decadeStageNote = (isTimeKnown && decade)
        ? `当前所处的十年阶段节奏（${decade.startAge}-${decade.endAge}岁 · ${decade.startYear}-${decade.endYear}年）正处于【${decade.pillar}】周期，阶段课题聚焦于“${decade.primaryTenGod === '正官' || decade.primaryTenGod === '七杀' ? '秩序建立与责任突破' : decade.primaryTenGod === '正财' || decade.primaryTenGod === '偏财' ? '价值落地与资源统筹' : decade.primaryTenGod === '食神' || decade.primaryTenGod === '伤官' ? '创新表达与赛道拓宽' : decade.primaryTenGod === '正印' || decade.primaryTenGod === '偏印' ? '深度沉淀与认知升级' : '自主破局与同频结盟'}”`
        : `当前按出生年月日三柱识别核心底色（未纳入出生时辰），阶段节奏倾向于稳步沉淀与自我校准`;

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

    const plainTerms = {
        dayMasterPlain: `核心驱动力: ${traitInfo.title}`,
        dayMasterExplain: `你更自然、更习惯采用的行动方式与性格底色`,
        strengthPlain: `力量模式: ${strengthInfo.plainTitle}`,
        strengthExplain: strengthInfo.plainExplain,
        strongestPlain: `主导行为倾向: ${strongElemPlain.name}`,
        weakestPlain: `精细补给倾向: ${weakElemPlain.name}`
    };

    // Dynamic 30s Summary (Guaranteed unique across combinations of stem + monthBranch + strength + topTenGod + strong/weak elements + situational answers)
    const combinedKeywords = [
        ...(traitInfo.keywords || ['主动推动', '重视反馈']).slice(0, 2),
        topTgInfo.label,
        sq1.tag
    ];

    const summary30s = {
        keywords: combinedKeywords,
        coreObservation: `你兼具「${traitInfo.title.split(' · ')[0]}」的${monthRhythm}与「${strengthInfo.plainTitle}」的行动底色，最擅长以【${topTgInfo.label}】配搭【${strongElemPlain.name}】打开局面；当下最需留意的不是能力短板，而是${topTgInfo.burnoutTrap}，尤其在${sq2.tag}下容易忽略【${weakElemPlain.name}】的补给。`,
        topAdvantage: `${traitInfo.advantage}同时兼具【${topTgInfo.label}】与【${secondTgInfo.label}】的复合长板，${topTgInfo.careerEdge}。`,
        topBurnout: `${traitInfo.risk}结合当前情境（${sq1.tag} × ${sq2.tag}）：${sq2.drainFocus}，正挤压你宝贵的【${strongElemPlain.name}】势能。`,
        topAction: `${sq3.actionVerb}，${sq2.cutTarget}，为【${weakElemPlain.name}】留出恢复空间。`,
        scenarioLabel: `本次关注: ${scenarioNames[activeScenario] || '了解自己'}`,
        scenarioSubtitle: scenarioSubtitles[activeScenario] || scenarioSubtitles.self
    };

    // Scenario & Chart tailored 14-Day Action Experiments
    const actionExperiments14Days = [
        {
            priorityPill: 'P1 精力止损',
            action: `针对【${sq2.tag}】启动减法拦截：未来 14 天内${sq2.cutTarget}，将 80% 黄金注意力锁死在【${strongElemPlain.name} · ${topTgInfo.label}】长板上。`,
            why: `你的核心驱动为「${traitInfo.title}」配搭「${strengthInfo.plainTitle}」，${sq1.note}。`,
            verifyMetric: `观察两周内因「${sq2.tag}」干扰【${strongElemPlain.name}】产出的返工或透支频次是否下降 50% 以上。`
        },
        {
            priorityPill: 'P2 节奏微调',
            action: `${sq3.actionVerb}，并在【${secondTgInfo.label}】场景中提前划清协作交付边界。`,
            why: `${decadeStageNote}，用清晰的微节奏替代无意识硬撑最能保护心流。`,
            verifyMetric: `连续执行 7 天后，评估自己在「${traitInfo.title.split(' · ')[0]}」主导事项上的掌控感是否显著回升。`
        },
        {
            priorityPill: 'P3 能量补给',
            action: `每周固定预留 2 小时专属【${weakElemPlain.name}】恢复窗口，践行定制提醒：${RELATION_REFLECTION_MAP[stem] || '主动给身心留出缓冲余地'}`,
            why: `你当前分布中【${weakElemPlain.name}】占比相对偏低，定向补给能有效化解「${traitInfo.keywords ? traitInfo.keywords[2] : '隐性内耗'}」的副作用。`,
            verifyMetric: `观察补充【${weakElemPlain.name}】窗口次日，你在【${topTgInfo.label}】决策与沟通中的定力是否更加从容。`
        }
    ];

    // --- 1. Personality Section Construction (Zero Jargon in Layer 2) ---
    const rechargeDrain = ENERGY_RECHARGE_DRAIN_MAP[stem] || ENERGY_RECHARGE_DRAIN_MAP['丙'];
    const overuseRisk = OVERUSE_RISK_MAP[stem] || '容易因过分追求完美而产生内耗。';

    let personalityHTML = `
        <p>【内在驱动结构】你的核心驱动原型为 <strong>${traitInfo.title}</strong>，行动力量模式属于 <strong>${strengthInfo.plainTitle}</strong>，并带有鲜明的 <strong>${monthRhythm}</strong> 与 <strong>${topTgInfo.label}</strong> 特质：</p>
        <div class="highlight-box">
            <p><strong>核心驱动画像（${traitInfo.title} × ${topTgInfo.label}）：</strong> ${traitInfo.trait}${topTgInfo.coreStyle}。</p>
        </div>
        <div class="trait-split-box">
            <div class="advantage-col">
                <div class="col-header">✦ 复合核心长板（${strongElemPlain.short}）</div>
                <div class="col-content">${traitInfo.advantage}${topTgInfo.careerEdge}。</div>
            </div>
            <div class="risk-col">
                <div class="col-header">⚠ 隐性内耗触发点（${sq1.tag}）</div>
                <div class="col-content">${traitInfo.risk}${topTgInfo.burnoutTrap}。</div>
            </div>
        </div>
        <div class="highlight-box" style="background: #F4F8F6; border-left-color: var(--consumer-primary); margin-top: 16px;">
            <p><strong>🧭 先天结构 × 当下情境交叉校准（${traitInfo.title.split(' · ')[0]} × ${sq1.tag}）：</strong> 作为【${strengthInfo.plainTitle}】，你${sq1.note}，而近期【${sq2.tag}】使【${strongElemPlain.name}】长板被琐事稀释，建议通过「${sq3.tag}」优先守护【${weakElemPlain.name}】恢复空间。</p>
        </div>
        <p>👉 <strong>力量调和与阶段节奏：</strong> ${strengthInfo.desc}${decadeStageNote}。</p>
    `;

    if (activeScenario === 'self') {
        personalityHTML += `
            <div class="highlight-box" style="background: #FFF9F2; border-left-color: var(--consumer-accent); margin-top: 24px;">
                <p><strong>⚠ “优势过度使用”的隐藏代价（${traitInfo.title}）：</strong> ${overuseRisk}</p>
            </div>
            <div class="scenario-matrix">
                <div class="matrix-card card-primary">
                    <h5>🔋 专属精力充能情境</h5>
                    <ul>${rechargeDrain.recharge.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
                <div class="matrix-card card-accent">
                    <h5>🪫 精力流失情境（精力黑洞）</h5>
                    <ul>${rechargeDrain.drain.map(i => `<li>${i}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="reflection-card">
                <h5>💡 现实场景验证与行为惯性</h5>
                <p>${traitInfo.realLifeScenario || ''}</p>
                <p style="margin-top: 10px; font-weight: 600; color: var(--consumer-primary-dark);">❓ 深度自我验证提问：${traitInfo.selfVerifyQuestion || ''}</p>
            </div>
        `;
    } else {
        personalityHTML += `
            <p style="font-size: 0.88rem; color: var(--consumer-text-sub); margin-top: 8px;">💡 <strong>现实场景验证：</strong> ${traitInfo.realLifeScenario || ''}</p>
            <p style="font-size: 0.88rem; color: var(--consumer-primary-dark);">❓ <strong>自我验证提问：</strong> ${traitInfo.selfVerifyQuestion || ''}</p>
        `;
    }

    // --- 2. Energy Section (Plain Behavioral Dimension Names) ---
    const totalScore = Object.values(parsedResult.elementScores).reduce((a, b) => a + b, 0) || 10;
    const elemClasses = { '木': 'fill-mu', '火': 'fill-huo', '土': 'fill-tu', '金': 'fill-jin', '水': 'fill-shui' };
    
    const strongestAdviceMap = {
        '木': '你的【生长开拓】维度充盈，新方向感知与生发规划力极强，宜将发散创意及时收敛为可交付成果',
        '火': '你的【表达感染】维度旺盛，号召力与推进爆发力突出，宜在高频输出后主动安排静心降噪时段',
        '土': '你的【承载统筹】维度厚重，资源整合与抗压稳定性极佳，宜在稳健守成中保持小步敏捷尝试',
        '金': '你的【秩序决断】维度敏锐，规则边界与裁决效率极高，宜在刚性标准之外留出温和沟通缓冲',
        '水': '你的【洞察思辨】维度深邃，宏观直觉与策略推演力出众，宜用小闭环行动打破过度思虑'
    };
    const weakestAdviceMap = {
        '木': '补充【生长开拓】维度：多接触自然绿植与户外舒展运动，为长期目标建立清晰的可视化推进阶梯',
        '火': '补充【表达感染】维度：保持工作空间明亮通透，通过适度表达与正向反馈激活内在行动热情',
        '土': '补充【承载统筹】维度：建立固定的生活作息锚点，将零散灵光沉淀为结构化清单与稳定基盘',
        '金': '补充【秩序决断】维度：定期清理冗余信息与低效社交，训练果断止损与明确划界的决断肌肉',
        '水': '补充【洞察思辨】维度：保障深度睡眠与不被打扰的留白时间，让高负荷运转的大脑恢复敏锐直觉'
    };

    const energyBarsData = Object.keys(parsedResult.elementScores).map(elem => {
        const score = parsedResult.elementScores[elem];
        const pct = Math.min(100, Math.max(8, Math.round((score / totalScore) * 100)));
        const plainDim = PLAIN_ELEMENT_MAP[elem] || { name: elem, color: '#315C4C' };
        return { elem, label: plainDim.name, score, pct, cls: elemClasses[elem] || 'fill-mu', color: plainDim.color };
    });

    const energyHTML = `
        <p>在你的五维行为能量光谱中，主导长板聚焦于 <strong>${strongElemPlain.name}</strong> 与 <strong>${topTgInfo.label}</strong>，次级协同维度为 <strong>${secondTgInfo.label}</strong>，当前最需定向滋养的维度为 <strong>${weakElemPlain.name}</strong>：</p>
        <div class="energy-bar-list">
            ${energyBarsData.map(item => `
                <div class="energy-bar-item">
                    <div class="energy-bar-label"><span>${item.label}</span><span>${item.score.toFixed(1)}</span></div>
                    <div class="energy-bar-track">
                        <div class="energy-bar-fill ${item.cls}" style="width: ${item.pct}%;"></div>
                    </div>
                    <div class="energy-bar-val">${item.pct}%</div>
                </div>
            `).join('')}
        </div>
        <p>主导势能解读：${strongestAdviceMap[parsedResult.strongestElement] || ''}。</p>
        <div class="highlight-box">
            <p><strong>定向充能指南（针对${weakElemPlain.name}）：</strong> ${weakestAdviceMap[parsedResult.weakestElement] || ''}。</p>
        </div>
    `;

    // --- 3. Career Section Construction ---
    const careerElemAdvice = ELEMENT_CAREER_RULES[dm.element] || ELEMENT_CAREER_RULES['火'];
    let careerHTML = `
        <p>结合你的 <strong>${traitInfo.title}</strong> 核心底色与 <strong>${strengthInfo.plainTitle}（${topTgInfo.label}）</strong> 协作偏好，${decadeStageNote}：</p>
        <div class="dos-donts-container">
            <div class="dos-box">
                <strong>✔ 最推荐的战术定位（${strongElemPlain.short}）</strong>
                ${careerElemAdvice}${topTgInfo.careerEdge}。
            </div>
            <div class="donts-box">
                <strong>✖ 最应避开的内耗红线（${sq2.tag}）</strong>
                避免在【${weakElemPlain.name}】相对薄弱时陷入「${sq2.drainFocus}」，${topTgInfo.burnoutTrap}。
            </div>
        </div>
        <p>👉 <strong>最佳工作推进节奏（${strengthInfo.plainTitle}）：</strong> ${strengthInfo.workStyle}在跨角色配合中可善用【${secondTgInfo.label}】作为辅助抓手。</p>
    `;

    if (activeScenario === 'career') {
        careerHTML += `
            <div class="scenario-matrix" style="margin-top: 24px;">
                <div class="matrix-card card-primary">
                    <h5>⚔ 独立攻坚 vs 团队协同倾向</h5>
                    <p>${CAREER_SYNERGY_MAP[parsedResult.strength] || ''}</p>
                </div>
                <div class="matrix-card card-accent">
                    <h5>🌪 面对变局与逆境的反应模式</h5>
                    <p>${CAREER_CHAOS_MAP[dm.element] || ''}</p>
                </div>
            </div>
            <div class="reflection-card">
                <h5>🎯 职场定位两周微实验建议</h5>
                <p>${sq3.actionVerb}，同时在【${topTgInfo.label}】主赛道上完成一次高辨识度交付。</p>
            </div>
        `;
    }

    // --- 4. Relationship Section Construction ---
    const relationYinYangText = ELEMENT_RELATION_RULES[dm.yinYang] || ELEMENT_RELATION_RULES['阳'];
    const relationBoundary = RELATION_BOUNDARY_MAP[parsedResult.strength] || RELATION_BOUNDARY_MAP['均势'];
    let relationshipHTML = `
        <p>在深度人际与亲密关系中，你的互动底色呈现出 <strong>${traitInfo.title.split(' · ')[0]}</strong> 与 <strong>${topTgInfo.label}</strong> 的交织特征：</p>
        <p>👉 <strong>沟通与情感表达（${traitInfo.keywords ? traitInfo.keywords[0] : '主动表达'}）：</strong> ${relationYinYangText}${topTgInfo.relationHabit}。</p>
        <p>👉 <strong>安全感与边界机制（${strengthInfo.plainTitle}）：</strong> ${strengthInfo.relationStyle}核心底线在于：${relationBoundary.bottomLine}</p>
        <div class="highlight-box">
            <p><strong>专属关系调频提醒：</strong> ${RELATION_REFLECTION_MAP[stem] || '在沟通中先确认彼此感受，再讨论具体解决方案。'}</p>
        </div>
    `;

    if (activeScenario === 'relationship') {
        relationshipHTML += `
            <div class="scenario-matrix" style="margin-top: 24px;">
                <div class="matrix-card card-primary">
                    <h5>🛡 冲突状态下的典型防御姿态</h5>
                    <p>${RELATION_DEFENSE_MAP[dm.yinYang] || ''}</p>
                </div>
                <div class="matrix-card card-accent">
                    <h5>🤝 关系边界核查表</h5>
                    <p><strong>应坚守底线：</strong> ${relationBoundary.bottomLine}</p>
                    <p style="margin-top: 6px;"><strong>易被侵蚀软肋：</strong> ${relationBoundary.vulnerability}</p>
                </div>
            </div>
            <div class="reflection-card">
                <h5>❓ 关系深度自我觉察提问</h5>
                <p>${RELATION_REFLECTION_MAP[stem] || '试着在下一次沟通中，先倾听对方的感受，再表达你的需求。'}</p>
            </div>
        `;
    }

    // --- 5. Action Section Construction ---
    let actionHTML = '';
    if (activeScenario === 'confusion') {
        actionHTML += `
            <p>【当下迷茫解构】你当前的迷茫感主要源于「${traitInfo.title}」的内在诉求与「${sq2.tag}」的外部拉扯发生了阶段性错位。重建掌控感的第一步，是执行清晰的划界清单：</p>
            <div class="checklist-matrix">
                <div class="checklist-col col-keep">
                    <h5>✔ 100% 绝对可控（立即保留）</h5>
                    <ul>
                        <li>围绕【${strongElemPlain.name} · ${topTgInfo.label}】每天推进 1 个最小闭环</li>
                        <li>执行「${sq3.tag}」：${sq3.actionVerb}</li>
                        <li>守护【${weakElemPlain.name}】恢复窗口：${sq2.cutTarget}</li>
                    </ul>
                </div>
                <div class="checklist-col col-pause">
                    <h5>✖ 暂不可控（强制减法/暂停）</h5>
                    <ul>
                        <li>暂停因「${sq1.tag}」而起的过度透支与单方面硬撑</li>
                        <li>暂停在缺乏验证信息时的灾难化推演与无边界揽责</li>
                        <li>不在身心低能期对长期方向做情绪化的一刀切决定</li>
                    </ul>
                </div>
            </div>
        `;
    }

    actionHTML += `
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

    // --- 6. Evidence Section (Layer 3: Traditional Mapping & Audit Trail) ---
    const stdoutSnippet = (parsedResult.rawStdout || '').substring(0, 320);
    const modeLabel = isTimeKnown ? '四柱完整推演' : '三柱推演（出生时辰未提供）';
    const pillarsStr = parsedResult.fourPillars.year
        ? `年柱:${parsedResult.fourPillars.year} · 月柱:${parsedResult.fourPillars.month} · 日柱:${parsedResult.fourPillars.day} · 时柱:${parsedResult.fourPillars.hour || '未定'}`
        : '基础干支已转换';
    const decadeEvidence = (isTimeKnown && decade)
        ? `当前大运（${parsedResult.luckDirection}）：${decade.pillar}（${decade.startAge}-${decade.endAge}岁，${decade.startYear}年起，主十神：${decade.tenGods.join('/')}）`
        : `大运排盘：${parsedResult.luckDirection}（因未提供出生时辰，省略起运岁数与时柱推演结论）`;

    const evidenceHTML = `
        <p><strong>推演模式：</strong> ${modeLabel}（本机浏览器实时引擎）</p>
        <p><strong>传统模型映射关系：</strong> 核心驱动「${traitInfo.title}」对应日主 <strong>${traitInfo.name}</strong>（生于${parsedResult.monthBranch}月令）；力量模式「${strengthInfo.plainTitle}」对应旺衰量化参考 <strong>${parsedResult.strength}</strong>；主导行为通道「${topTgInfo.label} / ${secondTgInfo.label}」对应十神能量分组 <strong>${topTgKey}(${parsedResult.tenGodScores[topTgKey]?.toFixed(1) || '0.0'}) / ${secondTgKey}(${parsedResult.tenGodScores[secondTgKey]?.toFixed(1) || '0.0'})</strong>。</p>
        <p><strong>干支排盘结构：</strong> ${pillarsStr}</p>
        <p><strong>阶段运程依据：</strong> ${decadeEvidence}</p>
        <p><strong>现实情境校准输入：</strong> Q1=${sq1.tag} · Q2=${sq2.tag} · Q3=${sq3.tag}</p>
        <p><strong>底层计算片段：</strong></p>
        <pre style="background: var(--consumer-surface); padding: 12px; border-radius: 8px; border: 1px solid var(--consumer-border); font-size: 0.85rem; overflow-x: auto; color: var(--consumer-text-sub);">${stdoutSnippet}...</pre>
        <p style="margin-top: 16px; font-size: 0.9rem; color: var(--consumer-text-muted);">
            ✦ <strong>说明书使用边界：</strong> 本说明书仅基于传统时间模型与现实情境问答对性格习惯与行动倾向提供结构化观察，不预测疾病、寿命或替你决定重大人生选择。结果仅供自我启迪与探索参考。
        </p>
    `;

    return {
        isDegraded: false,
        isTimeKnown,
        scenario: activeScenario,
        archetypeTitle: traitInfo.title,
        strengthTitle: strengthInfo.plainTitle,
        topTenGodLabel: topTgInfo.label,
        situationalTags: [sq1.tag, sq2.tag, sq3.tag],
        energyBarsData,
        decadeStageNote,
        summary30s,
        plainTerms,
        actionExperiments14Days,
        userHeader: {
            nickname: formState.nickname || '阿澜',
            genderText: `性别：${formState.gender === 'female' ? '女' : '男'}`,
            birthText: `生辰：${formState.birthYear}年${formState.birthMonth}月${formState.birthDay}日 ${isTimeKnown && formState.birthHour >= 0 ? formState.birthHour + '时' : '时辰未定（三柱模式）'}`,
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

let lastRenderedReportModel = null;

// 3. Layer 3 DOM Rendering Function
function renderConsumerReport(baziResult, formState) {
    const reportView = document.getElementById('consumer-report-view');
    const mainView = document.querySelector('.consumer-main');
    const footer = document.querySelector('.consumer-footer');
    
    if (!reportView) return;
    
    // Parse Bazi Result & Build Report Model
    const parsedResult = parseConsumerBaziResult(baziResult);
    const reportModel = buildPersonalizedReportModel(parsedResult, formState);
    lastRenderedReportModel = reportModel;

    const userNameEl = document.getElementById('report-user-name');
    const userSubtitleEl = document.getElementById('report-user-subtitle');
    const genderEl = document.getElementById('report-meta-gender');
    const birthEl = document.getElementById('report-meta-birth');
    const calendarEl = document.getElementById('report-meta-calendar');
    const scenarioEl = document.getElementById('report-meta-scenario');
    const confidenceBannerEl = document.getElementById('report-confidence-banner');

    if (reportModel.isDegraded) {
        if (userNameEl) userNameEl.textContent = formState.nickname || '受测人';
        if (userSubtitleEl) userSubtitleEl.textContent = '基础推演完成 · 报告格式降级提醒';
        if (confidenceBannerEl) confidenceBannerEl.classList.add('hidden');
        
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

        // Toggle 3-pillar confidence banner when birth hour is unknown
        if (confidenceBannerEl) {
            if (!reportModel.isTimeKnown) {
                confidenceBannerEl.innerHTML = `<strong>ⓘ 三柱模式置信度说明：</strong> 由于未提供具体出生时辰，本报告基于出生年、月、日三柱及 3 道现实情境校准题生成，已自动省略依赖时辰的细节推断，核心驱动与阶段建议仍具备完整参考价值。`;
                confidenceBannerEl.classList.remove('hidden');
            } else {
                confidenceBannerEl.textContent = '';
                confidenceBannerEl.classList.add('hidden');
            }
        }

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

        const focusCardMap = {
            self: 'personality',
            career: 'career',
            relationship: 'relationship',
            confusion: 'action'
        };
        const activeFocusCardKey = focusCardMap[reportModel.scenario] || 'personality';

        // Reset and highlight focus card
        Object.keys(cardNodes).forEach(key => {
            const card = cardNodes[key];
            if (!card) return;
            const badge = card.querySelector('.focus-badge');
            if (badge) badge.remove();

            if (key === activeFocusCardKey) {
                card.classList.add('main-focus-card');
                const header = card.querySelector('.card-header');
                if (header) {
                    const b = document.createElement('span');
                    b.className = 'focus-badge';
                    b.innerHTML = '✦ 本次聚焦主章节';
                    header.appendChild(b);
                }
            } else {
                card.classList.remove('main-focus-card');
            }
        });

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

// ------------------------------------------------------------------
// High-Aesthetic Oriental Botanical Specimen Share Poster (Canvas 2x)
// ------------------------------------------------------------------
function drawRoundedRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
    const chars = Array.from(text || '');
    let line = '';
    let linesDrawn = 0;
    let curY = y;
    for (let i = 0; i < chars.length; i++) {
        const testLine = line + chars[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line.length > 0) {
            linesDrawn++;
            if (linesDrawn >= maxLines) {
                ctx.fillText(line.slice(0, -1) + '…', x, curY);
                return curY + lineHeight;
            }
            ctx.fillText(line, x, curY);
            line = chars[i];
            curY += lineHeight;
        } else {
            line = testLine;
        }
    }
    if (line) {
        ctx.fillText(line, x, curY);
        curY += lineHeight;
    }
    return curY;
}

function renderSharePosterCanvas(model) {
    const canvas = document.getElementById('share-poster-canvas');
    if (!canvas || !canvas.getContext || !model) return;
    const ctx = canvas.getContext('2d');
    const W = 1080;
    const H = 1560;
    canvas.width = W;
    canvas.height = H;

    const fontSans = '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
    const fontSerif = '"Songti SC", "Noto Serif SC", "STSong", "SimSun", serif';

    // 1. Warm Rice-Paper Background & Subtle Texture
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#F8F5EE');
    bgGrad.addColorStop(1, '#F1ECE1');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Subtle botanical watermark circle in top-right
    ctx.save();
    ctx.strokeStyle = 'rgba(49, 92, 76, 0.06)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(W - 140, 210, 180, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(W - 140, 210, 135, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // 2. Double Herbarium Frame Border
    ctx.strokeStyle = '#315C4C';
    ctx.lineWidth = 3;
    ctx.strokeRect(36, 36, W - 72, H - 72);
    ctx.strokeStyle = 'rgba(49, 92, 76, 0.28)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(48, 48, W - 96, H - 96);

    // 3. Top Header Metadata
    ctx.fillStyle = '#315C4C';
    ctx.font = `700 22px ${fontSans}`;
    ctx.fillText('观澜 LAN.DESTINY · 个人结构标本卡', 84, 108);

    ctx.fillStyle = '#7A8680';
    ctx.font = `500 20px ${fontSans}`;
    const metaRight = `${model.userHeader?.scenarioLabel || '本次关注：了解自己'}`;
    const metaRightW = ctx.measureText(metaRight).width;
    ctx.fillText(metaRight, W - 84 - metaRightW, 108);

    // Divider line
    ctx.strokeStyle = 'rgba(49, 92, 76, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(84, 130);
    ctx.lineTo(W - 84, 130);
    ctx.stroke();

    // 4. User Title & Cinnabar Seal Stamp
    const nickname = model.userHeader?.nickname || '阿澜';
    ctx.fillStyle = '#1E2B25';
    ctx.font = `700 54px ${fontSerif}`;
    ctx.fillText(`${nickname} 的内在结构说明书`, 84, 206);

    ctx.fillStyle = '#52635B';
    ctx.font = `500 24px ${fontSans}`;
    const subMeta = `${model.userHeader?.birthText || ''}  |  ${model.userHeader?.genderText || ''}  |  ${model.userHeader?.calendarText || ''}`;
    ctx.fillText(subMeta, 84, 250);

    // Traditional Cinnabar Seal Stamp (朱砂印章)
    ctx.save();
    drawRoundedRect(ctx, W - 210, 158, 126, 98, 8);
    ctx.fillStyle = 'rgba(200, 90, 50, 0.1)';
    ctx.fill();
    ctx.strokeStyle = '#C85A32';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.fillStyle = '#C85A32';
    ctx.font = `700 24px ${fontSerif}`;
    ctx.fillText('观澜', W - 172, 198);
    ctx.font = `600 18px ${fontSans}`;
    ctx.fillText('本机推演印', W - 192, 232);
    ctx.restore();

    // 5. Core Archetype Hero Card
    drawRoundedRect(ctx, 84, 284, W - 168, 198, 18);
    ctx.fillStyle = '#26493C';
    ctx.fill();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
    ctx.font = `600 20px ${fontSans}`;
    ctx.fillText('CORE DRIVE ARCHETYPE · 核心驱动与力量模式', 120, 330);

    ctx.fillStyle = '#F7F4EC';
    ctx.font = `700 42px ${fontSans}`;
    ctx.fillText(`${model.archetypeTitle || '太阳感染型'} × ${model.strengthTitle || '充沛破局型'}`, 120, 388);

    // Keyword Pills inside Hero Card
    const kws = [
        ...(model.summary30s?.keywords || []),
        ...(model.situationalTags || []).slice(1, 2)
    ].slice(0, 4);
    let kwX = 120;
    kws.forEach(kw => {
        ctx.font = `600 22px ${fontSans}`;
        const padW = ctx.measureText(`✦ ${kw}`).width + 36;
        drawRoundedRect(ctx, kwX, 414, padW, 44, 22);
        ctx.fillStyle = 'rgba(247, 244, 236, 0.16)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(247, 244, 236, 0.38)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = '#FCC84E';
        ctx.fillText(`✦ ${kw}`, kwX + 18, 444);
        kwX += padW + 16;
    });

    // 6. 30-Second Core Observation Box
    drawRoundedRect(ctx, 84, 510, W - 168, 200, 16);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = '#DFD7C8';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#315C4C';
    ctx.font = `700 24px ${fontSans}`;
    ctx.fillText('⚡ 30秒核心观察（先天结构 × 现实情境校准）', 116, 554);

    ctx.fillStyle = '#25332D';
    ctx.font = `500 25px ${fontSans}`;
    wrapCanvasText(ctx, model.summary30s?.coreObservation || '', 116, 600, W - 232, 38, 3);

    // 7. 5-Dimension Behavioral Energy Spectrum
    drawRoundedRect(ctx, 84, 736, W - 168, 290, 16);
    ctx.fillStyle = '#FAF7F0';
    ctx.fill();
    ctx.strokeStyle = '#E2DDD3';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#25332D';
    ctx.font = `700 24px ${fontSans}`;
    ctx.fillText('📊 五维行为能量光谱分布', 116, 780);

    const bars = model.energyBarsData || [];
    bars.forEach((b, idx) => {
        const rowY = 822 + idx * 38;
        ctx.fillStyle = '#25332D';
        ctx.font = `600 22px ${fontSans}`;
        ctx.fillText(b.label, 116, rowY);

        // Track
        const trackX = 250;
        const trackW = W - 450;
        drawRoundedRect(ctx, trackX, rowY - 18, trackW, 20, 10);
        ctx.fillStyle = '#E6E0D4';
        ctx.fill();

        // Fill
        const fillW = Math.max(24, Math.round((b.pct / 100) * trackW));
        drawRoundedRect(ctx, trackX, rowY - 18, fillW, 20, 10);
        ctx.fillStyle = b.color || '#315C4C';
        ctx.fill();

        // Percentage text
        ctx.fillStyle = '#52635B';
        ctx.font = `700 22px ${fontSans}`;
        ctx.fillText(`${b.pct}%`, trackX + trackW + 20, rowY);
    });

    // 8. Trio Insights: Advantage / Burnout / 14-Day Action Experiment
    const drawInsightCard = (yPos, height, bg, borderCol, titleCol, badgeText, bodyText) => {
        drawRoundedRect(ctx, 84, yPos, W - 168, height, 14);
        ctx.fillStyle = bg;
        ctx.fill();
        ctx.strokeStyle = borderCol;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        ctx.fillStyle = titleCol;
        ctx.font = `700 23px ${fontSans}`;
        ctx.fillText(badgeText, 116, yPos + 40);

        ctx.fillStyle = '#25332D';
        ctx.font = `500 23px ${fontSans}`;
        wrapCanvasText(ctx, bodyText, 116, yPos + 78, W - 232, 34, 2);
    };

    drawInsightCard(
        1050, 124,
        '#EFF5F2', 'rgba(49, 92, 76, 0.25)', '#315C4C',
        '✦ 天生核心长板',
        model.summary30s?.topAdvantage || ''
    );

    drawInsightCard(
        1192, 124,
        '#FFF6F2', 'rgba(200, 90, 50, 0.25)', '#C85A32',
        '⚠ 现实精力黑洞（情境校准）',
        model.summary30s?.topBurnout || ''
    );

    drawInsightCard(
        1334, 124,
        '#FFFDF6', 'rgba(181, 138, 82, 0.35)', '#9A6E32',
        '🎯 未来 14 天微行动实验',
        model.summary30s?.topAction || ''
    );

    // 9. Footer Signature
    ctx.fillStyle = '#7A8680';
    ctx.font = `500 20px ${fontSans}`;
    ctx.fillText('观澜 Lan.Destiny · 基于东方时间模型与行为情境校准的个人结构说明书', 84, 1496);
    const rightFooter = '浏览器本机实时计算 · 零隐私上传';
    const rfW = ctx.measureText(rightFooter).width;
    ctx.fillText(rightFooter, W - 84 - rfW, 1496);
}

function openSharePosterModal() {
    if (!lastRenderedReportModel) {
        runQuickDemoReport(true);
        return;
    }
    const modal = document.getElementById('poster-preview-modal');
    if (!modal) return;
    renderSharePosterCanvas(lastRenderedReportModel);
    modal.classList.remove('hidden');
}

function closeSharePosterModal() {
    const modal = document.getElementById('poster-preview-modal');
    if (modal) modal.classList.add('hidden');
}

function downloadSharePoster() {
    const canvas = document.getElementById('share-poster-canvas');
    if (!canvas || !canvas.toDataURL) return;
    const nickname = lastRenderedReportModel?.userHeader?.nickname || '阿澜';
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `观澜个人结构说明书_${nickname}_分享海报.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('已生成并开始下载高清分享海报 (PNG)！');
}

// One-Click Demo for External Presentations
function runQuickDemoReport(openPosterImmediately = false) {
    consumerFormShellState.scenario = consumerFormShellState.scenario || 'self';
    consumerFormShellState.nickname = '林观澜（演示）';
    consumerFormShellState.gender = 'female';
    consumerFormShellState.calendarType = 'solar';
    consumerFormShellState.birthYear = 1995;
    consumerFormShellState.birthMonth = 5;
    consumerFormShellState.birthDay = 15;
    consumerFormShellState.birthHour = 9;
    consumerFormShellState.timePrecision = 'hour';
    consumerFormShellState.situationalAnswers = {
        q1: 'push',
        q2: 'overload',
        q3: 'subtract'
    };

    const demoPayload = {
        module: 'bazi',
        gender: 'female',
        calendar: 'solar',
        year: 1995,
        month: 5,
        day: 15,
        hour: 9,
        minute: 0
    };
    const baziRes = calculateBaziInBrowser(demoPayload);
    consumerFormShellState.baziResult = baziRes;
    renderConsumerReport(baziRes, consumerFormShellState);
    if (openPosterImmediately) {
        openSharePosterModal();
    } else {
        showToast('已为您加载演示报告，点击“生成分享海报”即可预览高清海报！');
    }
}
window.runQuickDemoReport = runQuickDemoReport;

// Toast & Export Utilities
function showToast(msg) {
    let toast = document.getElementById('consumer-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'consumer-toast';
        toast.className = 'consumer-toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function copyReportSummary() {
    const name = document.getElementById('report-user-name')?.textContent || '我';
    const obs = document.getElementById('summary-observation')?.textContent || '';
    const adv = document.getElementById('summary-advantage')?.textContent || '';
    const burnout = document.getElementById('summary-burnout')?.textContent || '';
    const action = document.getElementById('summary-action')?.textContent || '';
    const keywordEls = document.querySelectorAll('#summary-keywords .summary-keyword-tag');
    const keywords = Array.from(keywordEls).map(el => el.textContent.trim()).join(' · ');

    const copyText = `【${name} 的个人结构说明书 · 核心洞察】\n` +
        `✦ 核心标签：${keywords || '自我探索'}\n` +
        `✦ 核心观察：${obs}\n` +
        `✦ 核心长板：${adv}\n` +
        `✦ 精力损耗：${burnout}\n` +
        `✦ 建议减法：${action}\n\n` +
        `—— 观澜 Lan.Destiny · 基于东方时间模型的个人结构说明书`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText).then(() => {
            showToast('已复制核心说明书摘要至剪贴板！');
        }).catch(() => {
            prompt('请手动复制以下内容：', copyText);
        });
    } else {
        prompt('请手动复制以下内容：', copyText);
    }
}

function printReport() {
    // Expand accordion before printing so the complete report is visible
    const accordion = document.querySelector('.evidence-accordion');
    if (accordion) {
        accordion.setAttribute('open', '');
    }
    window.print();
}

// Global listeners for report view, share poster, and quick demo buttons
document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target) return;

    if (target.id === 'btn-quick-demo-report' || (target.closest && target.closest('#hero-preview-card'))) {
        runQuickDemoReport(true);
    } else if (target.id === 'btn-report-poster' || target.id === 'btn-summary-poster' || target.id === 'btn-report-bottom-poster') {
        openSharePosterModal();
    } else if (target.id === 'btn-close-poster-modal' || (target.getAttribute && target.getAttribute('data-action') === 'close-poster-modal')) {
        closeSharePosterModal();
    } else if (target.id === 'btn-download-poster') {
        downloadSharePoster();
    } else if (target.id === 'btn-poster-copy-quote') {
        copyReportSummary();
    } else if (target.id === 'btn-report-edit' || target.id === 'btn-report-bottom-edit') {
        closeConsumerReportView();
        openConsumerFormShell();
    } else if (target.id === 'btn-report-close' || target.id === 'btn-report-bottom-home') {
        closeConsumerReportView();
    } else if (target.id === 'btn-report-copy' || target.id === 'btn-report-bottom-copy') {
        copyReportSummary();
    } else if (target.id === 'btn-report-print' || target.id === 'btn-report-bottom-print') {
        printReport();
    } else if (target.id === 'btn-enter-pro-from-evidence') {
        closeConsumerReportView();
        switchViewMode(VIEW_MODES.PROFESSIONAL);
    }
});
