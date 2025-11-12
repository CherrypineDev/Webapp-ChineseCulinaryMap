// 数据：匹配 svg 中 path元素 的所有名为 sm_state 的 class
const paths = document.querySelectorAll('svg path.sm_state');

// 数据：提取省份代码，并保存到 path 元素的 data-province 属性中
paths.forEach(path => {
  const classes = path.getAttribute('class').split(' ');
  const provinceCode = classes.find(c => c.startsWith('sm_state_CN'));
  if (provinceCode) {
    path.dataset.province = provinceCode.replace('sm_state_', ''); // 变成 CNJS
  }
});

// 数据：菜系与省份的对应表
const cuisineGroups = {
    chuan: ['CNSC', 'CNCQ'],                             // 川菜
    yue: ['CNGD', 'CNHK', 'CNMC'],                       // 粤菜
    huaiyang: ['CNJS'],                                  // 淮扬菜
    lu: ['CNSD'],                                        // 鲁菜
    zhe: ['CNZJ'],                                       // 浙菜
    min: ['CNFJ'],                                       // 闽菜
    xiang: ['CNHN'],                                     // 湘菜
    hui: ['CNAH'],                                       // 徽菜
    jing: ['CNBJ'],                                      // 京菜
    hu: ['CNSH'],                                        // 沪菜
    e: ['CNHB'],                                         // 鄂菜
    xibei: ['CNSN', 'CNGS', 'CNNX', 'CNXJ'],            // 西北菜
    dongbei: ['CNLN', 'CNJL', 'CNHL'],                   // 东北菜
    qingzhen: [],                                        // 清真菜（表格为空）
    zhongyuan: ['CNHA', 'CNHE', 'CNSX'],                 // 中原风味
    xinan: ['CNYN', 'CNGZ'],                             // 西南风味
    huanan: ['CNGX', 'CNHI', 'CNTW', 'CNJX'],            // 华南风味
    gaoyuan: ['CNXZ', 'CNQH'],                           // 高原风味
    jin: ['CNTJ'],                                       // 津菜
    meng: ['CNNM']                                       // 蒙菜
  };

// 数据：省份代码对应表
const provinceNames = {
  CNBJ: "北京",
  CNTJ: "天津",
  CNHE: "河北",
  CNSX: "山西",
  CNCQ: "重庆",
  CNJL: "吉林",
  CNLN: "辽宁",
  CNHL: "黑龙江",
  CNJS: "江苏",
  CNZJ: "浙江",
  CNFJ: "福建",
  CNHN: "湖南",
  CNHB: "湖北",
  CNGD: "广东",
  CNGX: "广西",
  CNSC: "四川",
  CNGZ: "贵州",
  CNYN: "云南",
  CNXZ: "西藏",
  CNSN: "陕西",
  CNHA: "河南",
  CNSH: "上海",
  CNHI: "海南",
  CNXJ: "新疆",
  CNNX: "宁夏",
  CNNM: "内蒙古",
  CNQH: "青海",
  CNGS: "甘肃",
  CNSD: "山东",
  CNJX: "江西",
  CNAH: "安徽",
  CNHK: "香港",
  CNMC: "澳门",
  CNTW: "台湾"
};

// 数据：获取侧边栏元素
const sidePanel = document.getElementById('sidePanel');
const sideContent = document.getElementById('sideContent');

// 数据：菜系信息
const cuisineInfo = {
    chuan: {
      title_cn: "川菜",
      title_en: "Chuan Cuisine",
      content_Origin:"QWQ",
      content_Operation:"QWQ",
      content_typicalCuisine:"QWQ",
      // 代表菜系图片
      content_Feature:"QWQ",
      content_Culture:"QWQ",
      content_Words:"QWQ",
    },

    yue: {
      title_cn: "粤菜",
      title_en: "Yue Cuisine",
      content_Origin:"广东",
      content_Operation:"QWQ",
      content_typicalCuisine:"QWQ",
      // 代表菜系图片
      content_Feature:"QWQ",
      content_Culture:"QWQ",
      content_Words:"QWQ",
    },

    huaiyang: {
      title_cn: "淮阳菜",
      title_en: "HuaiYang Cuisine",
      content_Origin:"QWQ",
      content_Operation:"QWQ",
      content_typicalCuisine:"QWQ",
      // 代表菜系图片
      content_Feature:"QWQ",
      content_Culture:"QWQ",
      content_Words:"QWQ",
    },

    chuan: {
      title_cn: "川菜",
      title_en: "Chuan Cuisine",
      content_Origin:"QWQ",
      content_Operation:"QWQ",
      content_typicalCuisine:"QWQ",
      // 代表菜系图片
      content_Feature:"QWQ",
      content_Culture:"QWQ",
      content_Words:"QWQ",
    },

    chuan: {
      title_cn: "川菜",
      title_en: "Chuan Cuisine",
      content_Origin:"QWQ",
      content_Operation:"QWQ",
      content_typicalCuisine:"QWQ",
      // 代表菜系图片
      content_Feature:"QWQ",
      content_Culture:"QWQ",
      content_Words:"QWQ",
    }
    // ... 其他菜系可继续添加
  };

  // 功能：显示侧边栏
  function showCuisinePanel(cuisineKey, provinceCode) {
    const info = cuisineInfo[cuisineKey];
    if (!info) return; // 如果没有对应信息，退出

    const provinceName = provinceNames[provinceCode] || "未知省份";

    // 填充内容
    sideContent.innerHTML = `
      <h1>${info.title_cn}</h1>
      <h2>${info.title_en}</h2>
      <p>当前选中：${provinceName}</p>
      <br>      
      <ul>
        <li>
            <p>起源与分布：${info.content_Origin}</p>
        </li>

        <li>
            <p>制作主要技法：${info.content_Operation}</p>
        </li>

        <li>
            <p>代表菜肴：${info.content_typicalCuisine}</p>
        </li>

        <li>
            <p>风味特点：${info.content_Feature}</p>
        </li>

        <li>
            <p>文化印象：${info.content_Culture}</p>
        </li>

        <li>
            <p>地方谚语：${info.content_Words}</p>
        </li>

      </ul>

      <button class="cuisine-detail-btn" data-cuisine="${cuisineKey}">
        查看详细介绍 →
      </button>

    `;
  
    // 激活侧边栏
    sidePanel.classList.add('active');
  
    const detailBtn = sideContent.querySelector('.cuisine-detail-btn');
    detailBtn.addEventListener('click', () => {
      // 跳转至对应菜系详情页
      window.location.href = `cuisine_${cuisineKey}.html`;
    });
    
  }


  // 功能：点击事件

  let currentCuisine = null;

  paths.forEach(path => {
    path.addEventListener('click', () => {
        
      const province = path.dataset.province;
      const cuisine = Object.keys(cuisineGroups).find(key =>
        cuisineGroups[key].includes(province)
      );
  
      if (!cuisine) return;
  
      // 事件：再次单击同省份
      if (currentCuisine === cuisine) {
        paths.forEach(p => p.classList.remove('active')); // 移除菜系区域包含省份的选中状态
        sidePanel.classList.remove('active'); // 移除侧边栏
        currentCuisine = null;
        return;
      }
  
      // 事件：首次单击不同省份
      paths.forEach(p => p.classList.remove('active'));
      cuisineGroups[cuisine].forEach(code => {
        document.querySelector(`.sm_state_${code}`)?.classList.add('active');
      });
      currentCuisine = cuisine;
      showCuisinePanel(cuisine, province); // 显示侧边栏：传入菜系和省份
    });
  });

  // 事件：单击空白处关闭侧边栏
  document.addEventListener('click', e => {
    if (!sidePanel.contains(e.target) && !e.target.closest('svg path')) {
      sidePanel.classList.remove('active');
    }
  });  


const hoverInfo = document.getElementById('hoverInfo');

paths.forEach(path => {
  // 获取省份代码
  const province = path.dataset.province;

  path.addEventListener('mouseenter', () => {
    // 获取省份中文名称（需要一个映射表）
    const provinceName = provinceNames[province] || '未知地区';
    hoverInfo.textContent = `当前光标浮于：${provinceName}`;
  });

  path.addEventListener('mouseleave', () => {
    hoverInfo.textContent = '当前光标浮于：无';
  });
});



