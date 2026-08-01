const fieldsConfig = {
    bazi: `
        <div class="form-group">
            <label>性别</label>
            <select name="gender" required>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <div class="form-group">
            <label>历法</label>
            <select name="calendar" id="calendar-select">
                <option value="solar">公历 (阳历)</option>
                <option value="lunar">农历 (阴历)</option>
            </select>
        </div>
        <div class="form-group">
            <label>生日时间</label>
            <div class="datetime-inputs">
                <input type="number" name="year" placeholder="年 (如1990)" min="1600" max="2200" required>
                <input type="number" name="month" placeholder="月" min="1" max="12" required>
                <input type="number" name="day" placeholder="日" min="1" max="31" required>
                <input type="number" name="hour" placeholder="时 (0-23)" min="0" max="23">
                <input type="number" name="minute" placeholder="分" min="0" max="59">
            </div>
        </div>
        <div class="form-group">
            <label>经度 (选填，计算真太阳时)</label>
            <input type="number" name="lng" step="0.1" placeholder="如广州 113.3" min="-180" max="180">
        </div>
    `,
    ziwei: `
        <div class="form-group">
            <label>性别</label>
            <select name="gender" required>
                <option value="male">男</option>
                <option value="female">女</option>
            </select>
        </div>
        <div class="form-group">
            <label>历法</label>
            <select name="calendar">
                <option value="solar">公历</option>
                <option value="lunar">农历</option>
            </select>
        </div>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="year" placeholder="年" min="1600" max="2200" required>
                <input type="number" name="month" placeholder="月" min="1" max="12" required>
                <input type="number" name="day" placeholder="日" min="1" max="31" required>
                <input type="number" name="hour" placeholder="时" min="0" max="23" required>
                <input type="number" name="minute" placeholder="分" min="0" max="59" required>
            </div>
        </div>
    `,
    hehun: `
        <h3>甲方 (男方)</h3>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="year" placeholder="年" required>
                <input type="number" name="month" placeholder="月" required>
                <input type="number" name="day" placeholder="日" required>
                <input type="number" name="hour" placeholder="时">
                <input type="number" name="minute" placeholder="分">
            </div>
        </div>
        <h3>乙方 (女方)</h3>
        <div class="form-group">
            <div class="datetime-inputs">
                <input type="number" name="partner_year" placeholder="年" required>
                <input type="number" name="partner_month" placeholder="月" required>
                <input type="number" name="partner_day" placeholder="日" required>
                <input type="number" name="partner_hour" placeholder="时">
                <input type="number" name="partner_minute" placeholder="分">
            </div>
        </div>
    `,
    meihua: `
        <div class="form-group">
            <label>起卦方式</label>
            <select name="type" id="meihua-type">
                <option value="time">按当前时间起卦</option>
                <option value="numbers">按三个数字起卦</option>
            </select>
        </div>
        <div id="meihua-numbers-group" class="form-group hidden">
            <label>输入数字 (例如: 123 456 789)</label>
            <input type="text" name="numbers" placeholder="以空格分隔三个正整数">
        </div>
        <div class="form-group">
            <label>所占之事</label>
            <input type="text" name="query" placeholder="例如: 测求职面试结果" required>
        </div>
    `,
    liuyao: `
        <div class="form-group">
            <label>输入六爻卦象 (初爻在左，少阳为7，少阴为8，老阳为9，老阴为6)</label>
            <input type="text" name="yao" placeholder="例如: 787888" pattern="[6789]{6}" required>
        </div>
        <div class="form-group">
            <label>所占之事</label>
            <input type="text" name="query" placeholder="例如: 测出行吉凶" required>
        </div>
    `,
    qimen: `
        <div class="form-group">
            <label>起局时间 (默认当前时间)</label>
            <div class="datetime-inputs">
                <input type="number" name="year" placeholder="年">
                <input type="number" name="month" placeholder="月">
                <input type="number" name="day" placeholder="日">
                <input type="number" name="hour" placeholder="时">
            </div>
        </div>
        <div class="form-group">
            <label>起局流派</label>
            <select name="ju_fa">
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
        typeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'numbers') {
                numGroup.classList.remove('hidden');
            } else {
                numGroup.classList.add('hidden');
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
