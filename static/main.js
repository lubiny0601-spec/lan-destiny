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
// View Mode Switching Logic (Task 1)
// ========================================================
const VIEW_MODES = {
    CONSUMER: "consumer",
    PROFESSIONAL: "professional"
};

const consumerView = document.getElementById('consumer-mode-view');
const professionalView = document.getElementById('professional-mode-view');
const btnEnterPro = document.getElementById('btn-enter-pro');
const btnBackConsumer = document.getElementById('btn-back-consumer');

function switchViewMode(mode) {
    if (!consumerView || !professionalView) return;

    if (mode === VIEW_MODES.PROFESSIONAL) {
        consumerView.classList.add('hidden');
        consumerView.setAttribute('aria-hidden', 'true');
        
        professionalView.classList.remove('hidden');
        professionalView.setAttribute('aria-hidden', 'false');
        
        if (btnEnterPro) btnEnterPro.setAttribute('aria-expanded', 'true');
        if (btnBackConsumer) btnBackConsumer.setAttribute('aria-expanded', 'true');
        
        window.scrollTo(0, 0);
    } else {
        professionalView.classList.add('hidden');
        professionalView.setAttribute('aria-hidden', 'true');
        
        consumerView.classList.remove('hidden');
        consumerView.setAttribute('aria-hidden', 'false');
        
        if (btnEnterPro) btnEnterPro.setAttribute('aria-expanded', 'false');
        if (btnBackConsumer) btnBackConsumer.setAttribute('aria-expanded', 'false');
        
        window.scrollTo(0, 0);
    }
}

if (btnEnterPro) {
    btnEnterPro.addEventListener('click', () => {
        switchViewMode(VIEW_MODES.PROFESSIONAL);
    });
}

if (btnBackConsumer) {
    btnBackConsumer.addEventListener('click', () => {
        switchViewMode(VIEW_MODES.CONSUMER);
    });
}
