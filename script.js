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

// 数据：获取侧边栏元素
const sidePanel = document.getElementById('sidePanel');
const sideContent = document.getElementById('sideContent');

// 数据：菜系信息
const cuisineInfo = {
    chuan: {
      title: "川菜 · Chuan Cuisine",
      desc: "起源四川、重庆地区，以麻、辣、鲜、香著称。代表菜有宫保鸡丁、水煮鱼、回锅肉。"
    },
    yue: {
      title: "粤菜 · Yue Cuisine",
      desc: "发源于广东、广西、海南，以清淡、鲜甜著称。代表菜有白切鸡、叉烧、虾饺。"
    },
    xiang: {
      title: "湘菜 · Xiang Cuisine",
      desc: "起源湖南，口味偏辣、酸香浓郁，代表菜有剁椒鱼头、毛氏红烧肉。"
    },
    // ... 其他菜系可继续添加
  };

  // 功能：显示侧边栏
  function showCuisinePanel(cuisineKey) {
    const info = cuisineInfo[cuisineKey];
    if (!info) return; // 如果没有对应信息，退出
  
    // 填充内容
    sideContent.innerHTML = `
      <h2>${info.title}</h2>
      <p>${info.desc}</p>
    `;
  
    // 激活侧边栏
    sidePanel.classList.add('active');
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
      showCuisinePanel(cuisine); // 显示侧边栏
    });
  });

  // 事件：单击空白处关闭侧边栏
  document.addEventListener('click', e => {
    if (!sidePanel.contains(e.target) && !e.target.closest('svg path')) {
      sidePanel.classList.remove('active');
    }
  });
  