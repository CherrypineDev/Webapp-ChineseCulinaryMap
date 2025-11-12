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
      content_Origin:"巴蜀地区",
      content_Operation:"善用小炒、干煸、干烧、泡、烩等技法",
      content_typicalCuisine:"麻婆豆腐、回锅肉、宫保鸡丁、夫妻肺片、水煮鱼、毛血旺",
      // 代表菜系图片
      content_Feature:"以麻辣、鱼香、怪味、椒麻等复合味型著称，味道多变，清鲜醇浓并重",
      content_Culture:" 川菜如同四川盆地的气候,热情似火，包含并蓄",
      content_Words:"食在中国，味在四川",
    },

    yue: {
      title_cn: "粤菜",
      title_en: "Yue Cuisine",
      content_Origin:"广东",
      content_Operation:"技法精湛,尤以炒蒸煲炖焗见长,讲究火候,追求食材的原汁原味",
      content_typicalCuisine:"白切鸡、烤乳猪、老火靓汤、盐焗鸡、蜜汁叉烧、清蒸鱼",
      // 代表菜系图片
      content_Feature:"口味清鲜，爽滑嫩脆，突出本味",
      content_Culture:"粤菜精致而务实，充满了开放和创新的精神",
      content_Words:"背脊向天皆可食",
    },

    huaiyang: {
      title_cn: "淮阳菜",
      title_en: "HuaiYang Cuisine",
      content_Origin:"江苏淮安、扬州一带",
      content_Operation:"擅长炖、焖、煨、焐、烧等技法，注重调汤，口味平和",
      content_typicalCuisine:"清炖蟹粉狮子头、大煮干丝、平桥豆腐、松鼠鳜鱼、文思豆腐羹",
      // 代表菜系图片
      content_Feature:"口味清淡，甜咸适中，原料鲜活，造型美观",
      content_Culture:"淮扬菜是文人菜的代表，典雅精致，充满了书卷气",
      content_Words:"扬州三把刀，菜刀为第一",
    },

    lu: {
      title_cn: "鲁菜",
      title_en: "Lu Cuisine",
      content_Origin:"山东",
      content_Operation:"精于制汤，善用葱香，爆、炒、烧、塌、扒等技法独具特色",
      content_typicalCuisine:"葱烧海参、九转大肠、糖醋鲤鱼、油爆双脆、德州扒鸡",
      // 代表菜系图片
      content_Feature:"口味以咸鲜为主，注重火候，味道纯正，醇厚",
      content_Culture:" 鲁菜大气磅礴，规矩严谨，颇有儒家风范",
      content_Words:"唱戏的腔，厨师的汤",
    },

    zhe: {
      title_cn: "浙菜",
      title_en: "Zhe Cuisine",
      content_Origin:"杭州、宁波、绍兴、温州等地方",
      content_Operation:"烹调技法丰富，注重清鲜脆嫩，讲究时令",
      content_typicalCuisine:"东坡肉、龙井虾仁、西湖醋鱼、干菜焖肉、宋嫂鱼羹",
      // 代表菜系图片
      content_Feature:"口味清淡，鲜嫩爽口，讲究时令，因材施技",
      content_Culture:"浙菜秀美精巧，充满诗意，如同西湖山水",
      content_Words:"上有天堂，下有苏杭",
    },
    // ... 其他菜系可继续添加

     min: {
      title_cn: "闽菜",
      title_en: "Min Cuisine",
      content_Origin:"福建福州",
      content_Operation:"刀工巧妙，汤菜考究，调味奇特，善用红糟、虾油、沙茶酱等调味料",
      content_typicalCuisine:"佛跳墙、荔枝肉、沙茶面、蚵仔煎、淡糟香螺片",
      // 代表菜系图片
      content_Feature:"口味清鲜，和醇荤香，尤以“鲜”、“香”见长",
      content_Culture:"闽菜充满了山海交融的奇异风采，精致而含蓄",
      content_Words:"佛闻弃禅跳墙来",
    },
    
     xiang: {
      title_cn: "湘菜",
      title_en: "Xiang Cuisine",
      content_Origin:"以湘江流域、洞庭湖区和湘西山区三种地方风味为主",
      content_Operation:"擅长煨、炖、腊、蒸、炒，口味侧重酸辣",
      content_typicalCuisine:"剁椒鱼头、东安子鸡、毛氏红烧肉、腊味合蒸、永州血鸭",
      // 代表菜系图片
      content_Feature:"口味香辣、鲜辣、酸辣为主，油重色浓，滋味浓郁",
      content_Culture:"湘菜热烈奔放，滋味直接，如同湖南人“吃得苦、耐得烦、霸得蛮”的性格",
      content_Words:"无辣不成菜",
    },

     hui: {
      title_cn: "徽菜",
      title_en: "Hui Cuisine",
      content_Origin:"古徽州地区",
      content_Operation:"善用火腿佐味，冰糖提鲜，擅长烧、炖、蒸，讲究火工，重油重色",
      content_typicalCuisine:"​臭鳜鱼、毛豆腐、胡适一品锅、火腿炖甲鱼、问政山笋",
      // 代表菜系图片
      content_Feature:"味鲜醇厚重，原汁原味，酥嫩香鲜",
      content_Culture:"徽菜古朴沉稳，如同徽派建筑，在岁月的沉淀中散发出独特风味",
      content_Words:"前世不修，生在徽州，十三四岁，往外一丢",
    },

     jing: {
      title_cn: "京菜",
      title_en: "Jing Cuisine",
      content_Origin:"北京",
      content_Operation:"技法全面，以爆、烤、涮、熘、扒见长，讲究时节，菜式宏大",
      content_typicalCuisine:"北京烤鸭、涮羊肉、京酱肉丝、它似蜜、芥末墩",
      // 代表菜系图片
      content_Feature:"口味丰富多元，咸甜分明，酥脆鲜嫩，造型精美",
      content_Culture:"京菜是帝都文化的缩影，兼容并包，自带一种“范儿”",
      content_Words:"不到长城非好汉，不吃烤鸭真遗憾",
    },

     hu: {
      title_cn: "沪菜",
      title_en: "Hu Cuisine",
      content_Origin:"上海",
      content_Operation:"​技法多样，擅长红烧、滑炒、生煸、煨、糟等",
      content_typicalCuisine:"红烧鮰鱼、草头圈子、糖醋小排、上海醉蟹、南翔小笼包",
      // 代表菜系图片
      content_Feature:"口感清淡，款式秀丽，色调高雅，常用糟卤，味浓带甜",
      content_Culture:"沪菜精致细腻，充满现代感和融合性，如同上海这座城市",
      content_Words:"上阿拉上海宁，吃饭讲究个‘适意’",
    },

     e: {
      title_cn: "鄂菜",
      title_en: "E Cuisine",
      content_Origin:"湖北",
      content_Operation:"以“蒸、煨、炸、烧、炒”见长，尤其擅长烹制河鲜",
      content_typicalCuisine:"清蒸武昌鱼、排骨藕汤、沔阳三蒸（蒸肉、蒸鱼、蒸菜）、红菜苔炒腊肉",
      // 代表菜系图片
      content_Feature:"口味以鲜香、微辣为主，注重食材的原味，鱼馔特色极其突出，富有浓郁的江南水乡气息",
      content_Culture:"鄂菜如同九省通衢的湖北，兼容南北，贯通东西",
      content_Words:"无汤不成席",
    },

     xibei: {
      title_cn: "西北菜",
      title_en: "Xi Bei Cuisine",
      content_Origin:"陕西、甘肃、宁夏、新疆等地风味",
      content_Operation:"善用烤、烙、炖、涮，面食制作技艺登峰造极",
      content_typicalCuisine:"陕西羊肉泡馍、甘肃兰州牛肉面、新疆大盘鸡、宁夏手抓羊肉",
      // 代表菜系图片
      content_Feature:"口味清淡，鲜嫩爽口，讲究时令，因材施技",
      content_Culture:"浙菜秀美精巧，充满诗意，如同西湖山水",
      content_Words:"上有天堂，下有苏杭",
    },

     dongbei: {
      title_cn: "东北菜",
      title_en: "Dong Bei Cuisine",
      content_Origin:"辽宁，吉林，黑龙江",
      content_Operation:"擅长烧、炖、扒、烤，喜欢用酱，讲究火候，做法不拘小节，量大实惠",
      content_typicalCuisine:"锅包肉、猪肉炖粉条、地三鲜、小鸡炖蘑菇、杀猪菜、酱骨架",
      // 代表菜系图片
      content_Feature:"口味咸鲜，酱香浓郁，油多色重，滋味十足，以适应东北寒冷的气候",
      content_Culture:"东北菜充满了一种热乎乎、实在在的烟火气，如同东北人豪爽、直率、讲义气的性格",
      content_Words:"舒服不如倒着，好吃不如饺子",
    },

     zhongyuan: {
      title_cn: "中原菜",
      title_en: "Zhong Yuan Cuisine",
      content_Origin:"以河南菜为核心，融合河北、山西部分地区风味",
      content_Operation:"烹饪技法全面，扒、烧、炸、熘、爆、炒、炝样样精通，尤其讲究汤头和吊汤",
      content_typicalCuisine:"河南烩面、道口烧鸡、黄河大鲤鱼、河北驴肉火烧、山西刀削面、过油肉",
      // 代表菜系图片
      content_Feature:"口味居中，咸甜适中，鲜香爽口，兼具南北特色，面食文化极其发达",
      content_Culture:"中原风味古朴、厚重，有“华夏烹任始祖”之誉",
      content_Words:"戏的腔，烩面的汤",
    },

     xinan: {
      title_cn: "西南菜",
      title_en: "Xi Nan Cuisine",
      content_Origin:"云南、贵州等地",
      content_Operation:"善用发酵、腌制、舂、烤等技法，调料丰富奇特，如菌菇、野菜、酸汤等",
      content_typicalCuisine:"云南过桥米线、汽锅鸡、贵州酸汤鱼、花江狗肉、昆明菌子火锅、遵义羊肉粉",
      // 代表菜系图片
      content_Feature:"口味丰富多样，鲜嫩清香，酸辣微麻，充满山野之趣和独特的民族风味",
      content_Culture:"西南风味神秘而多彩，如同云贵高原的山水和多元的民族文化",
      content_Words:"云南十八怪，过桥米线人人爱",
    },

     huanan: {
      title_cn: "华南菜",
      title_en: "Zhe Cuisine",
      content_Origin:"广西、海南、台湾、江西等地",
      content_Operation:" 技法多样，注重鲜甜，善用清蒸、白灼、炖煮等保持原味的烹调方法",
      content_typicalCuisine:"海南文昌鸡、台湾卤肉饭、江西粉蒸肉、柳州螺蛳粉、三杯鸡",
      // 代表菜系图片
      content_Feature:"口味清淡、鲜美、甜润，食材广泛，水果入馔常见，地方特色鲜明",
      content_Culture:"华南风味充满热带风情和田园气息，甜美而富有活力",
      content_Words:"上桂林山水甲天下，桂林米粉爽天下",
    },

     gaoyuan: {
      title_cn: "高原菜",
      title_en: "Gao Yuan Cuisine",
      content_Origin:"青藏高原地区",
      content_Operation:"以糌粑制作、牛羊肉烹制、奶制品加工为特色，多采用风干、烧烤、炖煮等技法",
      content_typicalCuisine:"糌粑、酥油茶、牦牛肉干、手抓羊肉、血肠、青海老酸奶、人参果饭",
      // 代表菜系图片
      content_Feature:"口味质朴、醇厚，热量高，奶香浓郁，具有御寒、耐饥的实用特点",
      content_Culture:"高原风味纯净、神秘而充满力量，如同雪域高原的蓝天白云",
      content_Words:"宁可三日无粮，不可一日无茶",
    },

     jin: {
      title_cn: "津菜",
      title_en: "Jin Cuisine",
      content_Origin:"天津地区",
      content_Operation:"擅长炸、烹、熬、扒，精于调味，尤其以“津门三绝”小吃闻名",
      content_typicalCuisine:"罾蹦鲤鱼、狗不理包子、十八街麻花、耳朵眼炸糕、锅塌里脊、天津嘎巴菜",
      // 代表菜系图片
      content_Feature:"口味以咸鲜、清淡为主，不乏酸甜，小吃品种极其丰富，带有浓厚的码头文化和市井气息",
      content_Culture:" 津菜透着一种“俗”中见雅的幽默感和烟火气，如同天津的相声文化",
      content_Words:"京油子，卫嘴子",
    },

     meng: {
      title_cn: "蒙菜",
      title_en: "Meng Cuisine",
      content_Origin:"以内蒙古自治区蒙古族的传统饮食为主",
      content_Operation:"以烤、煮、涮为主，加工技艺粗犷，善制奶制品",
      content_typicalCuisine:"手把肉、烤全羊、涮羊肉、奶茶、奶豆腐、血肠",
      // 代表菜系图片
      content_Feature:"口味咸香，以肉、奶为主，讲究原汁原味，分量十足，体现了游牧民族的饮食特点",
      content_Culture:"​蒙菜充满了草原的辽阔与豪迈，热情而奔放",
      content_Words:"金杯银杯斟满酒，双手举过头，炒米奶茶手把肉，今天喝个够",
    },

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



