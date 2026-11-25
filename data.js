const WA='https://worldathletics.org/competition/calendar-results?competitionGroupId=3775&startDate=2027-01-01&endDate=2027-12-31';
const tiers=[{id:'platinum',name:'白金',full:'白金标',color:'#47657a',reward:[10000,5000,5000]},{id:'gold',name:'金',full:'金标',color:'#ad812b',reward:[6000,3000,3000]},{id:'elite',name:'精英',full:'精英标',color:'#856192',reward:[4000,2000,2000]},{id:'label',name:'标',full:'标牌',color:'#447d71',reward:[3000,1500,1500]},{id:'other',name:'其他',full:'其他赛事',color:'#7c7d86',reward:[2000,1000,1000]}];
const races=[
{id:'gz-women',name:'粤港澳大湾区女子半程马拉松',city:'广东 · 广州增城',date:'2027-01-01',distance:'半马',tier:'other',status:'日期已公布',note:'2027世界田联标牌待核实。',source:'https://www.zc.gov.cn/gzzcwglt/gkmlpt/content/11/11078/post_11078946.html',sourceName:'广州增城政府公告'},
{id:'jiading',name:'上海嘉定半程马拉松暨蒸蒸日上迎新跑',city:'上海 · 嘉定',date:'2027-01-01',distance:'半马',tier:'other',status:'日期已公布',note:'2027世界田联标牌待核实。',source:'https://shxwcbjy.com/registration/reginfo/',sourceName:'赛事报名须知'},
{id:'shishi',name:'泉州石狮半程马拉松',city:'福建 · 石狮',date:'2027-01-02',distance:'半马',tier:'other',status:'报名平台已列',note:'2027世界田联标牌待核实。',source:'https://reg.zuicool.com/94681',sourceName:'赛事报名页'},
{id:'ronggui',name:'顺德容桂马拉松',city:'广东 · 佛山顺德',date:'2027-01-03',distance:'全马 / 半马',tier:'other',status:'日期已公布',note:'2027世界田联标牌待核实。',source:'https://www.foshannews.net/h/175/20260909/8845871.html',sourceName:'佛山新闻网'},
{id:'xiamen',name:'厦门马拉松',city:'福建 · 厦门',date:'2027-01-10',distance:'全马',tier:'platinum',status:'世界田联赛历',note:'2027白金标。',source:WA,sourceName:'世界田联2027赛历'},
{id:'chongqing',name:'重庆马拉松',city:'重庆',date:'2027-01-10',distance:'全马',tier:'other',status:'日期已公布',note:'赛事官网确认1月10日。2027世界田联等级待核实；不沿用往届金标直接核奖。AIMS目录仍有旧日期，以当届官网为准。',source:'https://www.cqmarathon.com/News/Detail/21070C87897D1015',sourceName:'2027重庆马拉松竞赛规程'},
{id:'puer',name:'普洱思茅马拉松',city:'云南 · 普洱思茅',date:'2027-01-10',distance:'全马 / 半马',tier:'other',status:'报名平台已列',note:'2027世界田联标牌待核实。',source:'https://reg.zuicool.com/45049',sourceName:'赛事报名页'},
{id:'maoming',name:'茂名马拉松',city:'广东 · 茂名',date:'2027-01-10',distance:'全马 / 半马',tier:'other',status:'日期已公布',note:'2027世界田联标牌待核实。',source:'https://www.maoming.gov.cn/zwgk/zwhd/content/post_1664879.html',sourceName:'茂名市政府新闻发布会'},
{id:'hongkong',name:'渣打香港半程马拉松',city:'香港',date:'2027-01-17',distance:'半马',tier:'gold',region:'hmt',status:'世界田联赛历',note:'此处金标对应世界田联列出的半马项目，不套用到同日全马及10公里。',source:WA,sourceName:'世界田联2027赛历'},
{id:'renshou',name:'眉山仁寿半程马拉松',city:'四川 · 眉山仁寿',date:'2027-02-28',distance:'半马',tier:'platinum',status:'世界田联赛历',note:'2027白金标。',source:WA,sourceName:'世界田联2027赛历'},
{id:'yangzhou',name:'扬州半程马拉松',city:'江苏 · 扬州',date:'2027-03-28',distance:'半马',tier:'platinum',status:'世界田联赛历',note:'2027白金标。同日世界田联路跑锦标赛独立列项，不重复计为大众赛事。',source:WA,sourceName:'世界田联2027赛历'},
{id:'guangyuan',name:'广元半程马拉松',city:'四川 · 广元',date:'2027-03-28',distance:'半马',tier:'other',status:'报名平台已列',note:'2027世界田联标牌待核实。',source:'https://chinamarathon.com/',sourceName:'中国马拉松赛事目录'},
{id:'dalian',name:'大连国际马拉松',city:'辽宁 · 大连',date:'2027-04-25',distance:'全马',tier:'other',status:'AIMS赛历',note:'AIMS已列4月25日；当届报名公告待核。2027等级待确认，2026精英标仅作历史参考。',source:'https://aims-worldrunning.org/zh-CN/countries/22.html',sourceName:'AIMS中国赛事目录'},
{id:'greatwall',name:'黄崖关长城马拉松',city:'天津 · 蓟州',date:'2027-05-15',distance:'全马 / 半马',tier:'other',status:'日期已公布',note:'赛事官网与AIMS均列5月15日。2027世界田联标牌待核实。',source:'https://great-wall-marathon.com/',sourceName:'赛事官网'},
{id:'changchun',name:'长春马拉松',city:'吉林 · 长春',date:'2027-05-16',distance:'全马 / 半马',tier:'other',status:'日期已公布',note:'2026赛事结束后公布次年日期；2027项目设置和标牌以当届规程为准。',source:'https://news.cnjiwang.com/jwyc/202605/4047619.html',sourceName:'中国吉林网'},
{id:'lanzhou',name:'兰州马拉松',city:'甘肃 · 兰州',date:'2027-05-23',distance:'全马',tier:'gold',status:'世界田联赛历',note:'金标对应马拉松项目；半马设置及适用标准以当届规程为准。',source:WA,sourceName:'世界田联2027赛历'},
{id:'taiyuan',name:'太原马拉松',city:'山西 · 太原',date:'2027-09-19',distance:'全马',tier:'gold',status:'世界田联赛历',note:'2027金标。',source:WA,sourceName:'世界田联2027赛历'},
{id:'dongying',name:'黄河口东营马拉松',city:'山东 · 东营',date:'2027-10-17',distance:'全马',tier:'gold',status:'世界田联赛历',note:'2027金标。',source:WA,sourceName:'世界田联2027赛历'},
{id:'guangzhou',name:'广州马拉松',city:'广东 · 广州',date:'2027-12-19',distance:'全马',tier:'gold',status:'世界田联赛历',note:'2027金标。',source:WA,sourceName:'世界田联2027赛历'},
{id:'taipei',name:'台北马拉松',city:'台湾 · 台北',date:'2027-12-19',distance:'全马',tier:'gold',region:'hmt',status:'世界田联赛历',note:'2027金标。',source:WA,sourceName:'世界田联2027赛历'}
];
const products=[{name:'甜菜根液',quantity:60,value:800,image:'product-beet.png'},{name:'小红瓶',quantity:20,value:400,image:'product-red-bottle.png'},{name:'金装速耐饮',quantity:20,value:1000,image:'product-gold.png'},{name:'分段式能量胶',quantity:100,value:320,image:'product-segment-gel.png'},{name:'清酸片',quantity:28,value:200,image:null},{name:'蛋白饮',quantity:30,value:600,image:'product-protein.png'}];
