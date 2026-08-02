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
    interpretation.innerHTML = `<h3>观澜玄微解读</h3>${parsed.interpretation ? `<pre>${parsed.interpretation}</pre>` : `<pre>观澜评语：命局排定，生克在心。时空流转，大运起伏。
一事一占，趋势化参考，不承诺吉凶成败。</pre>`}`;
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

