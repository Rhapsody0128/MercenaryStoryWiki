import{o as e,c as a,a as t,w as i,_ as s,r as l,b as o,d as r,e as n,f as c,g as p,h as f,i as m,j as y,k as g,l as v,p as h,m as d,F as _,n as u,q as k,t as U,s as H,u as E,v as T,x}from"./vendor.7f1e1949.js";const j={id:"app"},N=p("HOME"),w=p("FAVORITE"),S=p("EQUIP"),M=p("ACTIVITY"),C=p("OTHERS"),A=t("a",{href:"https://forum.gamer.com.tw/B.php?bsn=72995"},"GAMER",-1),O=t("a",{href:"https://forum.gamer.com.tw/C.php?bsn=72995&snA=44&tnum=3"},"DATA",-1),b=t("a",{href:"https://github.com/Rhapsody0128/MercenaryStoryWiki"},"GITHUB",-1);const D={data:()=>({})};let I;D.render=function(p,f,m,y,g,v){const h=l("router-link"),d=l("router-view");return e(),a("div",j,[t(s,null,{default:i((()=>[t(o,{class:"nav",density:"compact"},{default:i((()=>[t(r,null,{default:i((()=>[t(n,null,{default:i((()=>[t(h,{to:"/"},{default:i((()=>[N])),_:1})])),_:1}),t(n,null,{default:i((()=>[t(h,{to:"/favorite"},{default:i((()=>[w])),_:1})])),_:1}),t(n,null,{default:i((()=>[t(h,{to:"/"},{default:i((()=>[S])),_:1})])),_:1}),t(n,null,{default:i((()=>[t(h,{to:"/"},{default:i((()=>[M])),_:1})])),_:1}),t(n,null,{default:i((()=>[t(h,{to:"/"},{default:i((()=>[C])),_:1})])),_:1}),t(n,null,{default:i((()=>[A])),_:1}),t(n,null,{default:i((()=>[O])),_:1}),t(n,null,{default:i((()=>[b])),_:1})])),_:1})])),_:1}),t(c,null,{default:i((()=>[t(d)])),_:1})])),_:1})])};const R={},L=function(e,a){if(!a||0===a.length)return e();if(void 0===I){const e=document.createElement("link").relList;I=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if((e=`./${e}`)in R)return;R[e]=!0;const a=e.endsWith(".css"),t=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const i=document.createElement("link");return i.rel=a?"stylesheet":I,a||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),a?new Promise(((e,a)=>{i.addEventListener("load",e),i.addEventListener("error",a)})):void 0}))).then((()=>e()))},V=[{path:"/",name:"Home",component:()=>L((()=>import("./Home.1623e90c.js")),["assets/Home.1623e90c.js","assets/Home.798e5809.css","assets/index.6ac5bf59.js","assets/vendor.7f1e1949.js","assets/vendor.bd1b091e.css"])},{path:"/hero",name:"Hero",component:()=>L((()=>import("./Hero.20b33ce6.js")),["assets/Hero.20b33ce6.js","assets/Hero.d137f8ef.css","assets/index.6ac5bf59.js","assets/vendor.7f1e1949.js","assets/vendor.bd1b091e.css"])},{path:"/favorite",name:"Favorite",component:()=>L((()=>import("./Favorite.07eed0e6.js")),["assets/Favorite.07eed0e6.js","assets/Favorite.e1c6cb55.css","assets/vendor.7f1e1949.js","assets/vendor.bd1b091e.css"])}],F=f({history:m("#"),routes:V}),B=[{name:"克莉西塔",armyType:"劍兵",race:"札坎",nickName:["札劍"],tag:["前排坦克","擊退","自我恢復","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_9_Kriemhild.png",infoUrl:"./images/heros/info/克莉西塔.jpg",skill:[{type:"必殺技",title:"女武神布莉茲",info:"衝向一處後揮劍,造成250%的物理傷害。推開被擊中的敵人,並賦予自身5秒內增加物理防禦力50%的增益。冷卻時間25秒、範圍2。",class:"Ex"},{type:"主動技能",title:"閃電破壞",info:"對單一敵人造成150%的物理傷害後,於2秒內增加自身的攻擊速度200%。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"芙蕾亞的庇護",info:"被擊時,於10秒內恢復生命力20%。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"札坎的憤怒",info:"於50秒內增加札坎種族的物理攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"亞羅加斯",armyType:"劍兵",race:"獸人",nickName:["獸劍"],tag:["前排輸出","攻速增加","跑速增加","擊退","抖M","自我恢復","資源巨怪"],info:"",avatarUrl:"./images/heros/avatar/Hero_15_Yarogash.png",infoUrl:"./images/heros/info/亞羅加斯.jpg",skill:[{type:"必殺技",title:"狂戰士的吶喊",info:"於10秒內增加自身部隊劍兵的攻擊速度50%、移動速度50%。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"X斬",info:"攻擊前方扇形範圍內的敵人,造成400%的物理傷害並將其推開(擊退0.6)。冷卻時間7秒",class:"active"},{type:"被動技能",title:"狂暴化",info:"自身生命力低於50%時,於10秒內恢復生命力50%、物理攻擊力30%。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"獸人的團結",info:"於50秒內增加獸人種族的物理攻擊力、物理防禦力5%。冷卻時間60秒。",class:"race"}]},{name:"希芙爾",armyType:"弓兵",race:"精靈",nickName:["精弓"],tag:["擊退","擊飛","燒傷","暈眩","抖S","後排輸出","激勵"],info:"",avatarUrl:"./images/heros/avatar/Hero_7_Silpir.png",infoUrl:"./images/heros/info/希芙爾.jpg",skill:[{type:"必殺技",title:"光之箭",info:"發射射程遙遠的巨大光箭,射穿且擊飛所有敵人,並造成200%的物理傷害;對被擊中的敵人造成6次每秒50%的火焰持續傷害,並使其暈眩2秒。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"衝擊箭",info:"遠距離推開單一敵人(擊退0·6),使其暈眩2秒,並造成200%的物理傷害。冷卻時間8秒。",class:"active"},{type:"被動技能",title:"弓手的自信心",info:"使敵人死亡時,發動於5秒內增加自身部隊弓手的物理攻擊力25%的增益。冷卻時間8秒。",class:"passive"},{type:"種族技能",title:"精靈的疾速戰略",info:"於50秒內增加精靈種族的攻擊速度10%。冷卻時間60秒。",class:"race"}]},{name:"蘇菲亞",armyType:"騎兵",race:"洛伊安",nickName:["洛騎"],tag:["前排輸出","資源巨怪","暈眩","抖S","擊殺回血","擊退","持盾"],info:"小編云:雖然我不是大課，但這隻是我本命，配帝騎護盾補起手，最近剛入手野獸騎，暴力衝鋒準備中，希望我能趕快抽到減CD戒給他",avatarUrl:"./images/heros/avatar/Hero_5_Sophia.png",infoUrl:"./images/heros/info/蘇菲亞.jpg",skill:[{type:"必殺技",title:"突破敵營",info:"排列成一字形突擊,對突擊範圍內的所有敵人造成400%的物理傷害,並使其暈眩3秒。突擊後於5秒內增加自身的物理防禦力100%。冷卻時間20秒。",class:"Ex"},{type:"主動技能",title:"長槍衝鋒",info:"槍騎兵奔馳一定距離後,加快移動速度進行突擊,造成1040%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"連續突擊",info:"使敵人死亡時,重置突擊冷卻時間,並恢復自身生命力22%。冷卻時間5秒。",class:"passive"},{type:"種族技能",title:"洛伊安的突擊姿勢",info:"於50秒內增加洛伊安種族的物理攻擊力、物理防禦力8%。冷卻時間60秒。",class:"race"}]},{name:"拉維亞",armyType:"補師",race:"精靈",nickName:["精補"],tag:["全體恢復","抖M"],info:"",avatarUrl:"./images/heros/avatar/Hero_4_Ravia.png",infoUrl:"./images/heros/info/拉維亞.jpg",skill:[{type:"必殺技",title:"自然的恢復",info:"恢復全體我方隊員相當於自身魔法攻擊力200%的體力。冷卻時間20秒。",class:"Ex"},{type:"主動技能",title:"恢復",info:"恢復1名我方隊員相當於自身魔法攻擊力300%的體力。冷卻時間4秒。",class:"active"},{type:"被動技能",title:"森林氣息",info:"生命力低於90%時,於10秒內增加魔法攻擊力50%。冷卻時間20秒。",class:"passive"},{type:"種族技能",title:"精靈的祝福",info:"於50秒內增加精靈種族的物理攻擊力、物理防禦力5%。冷卻時間60秒。",class:"race"}]},{name:"米凱爾",armyType:"槍兵",race:"洛伊安",nickName:["洛槍"],tag:["前排坦克","物防增加","跑速減少","自我恢復"],info:"",avatarUrl:"./images/heros/avatar/Hero_3_Mikel.png",infoUrl:"./images/heros/info/米凱爾.jpg",skill:[{type:"必殺技",title:"西班牙大方陣",info:"於10秒內增加該部隊槍兵兵種的物理防禦力100%。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"投擲貫穿",info:"對遠距離的敵人造成300%的物理傷害,並於5秒內減少移動速度90%。冷卻時間8秒。",class:"active"},{type:"被動技能",title:"不屈的鬥志",info:"自身生命力低於50%時,於5秒內恢復50%的生命力。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"洛伊安的防禦姿勢",info:"於50秒內增加洛伊安種族的物理防禦力10%。冷卻時間60秒。",class:"race"}]},{name:"澤努斯",armyType:"劍兵",race:"帝國",nickName:["帝劍"],tag:["前排坦克","遠迴增加","物防增加","暈眩","抖M","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_6_Zenus.png",infoUrl:"./images/heros/info/澤努斯.jpg",skill:[{type:"必殺技",title:"龜甲陣",info:"於10秒內增加自身部隊劍兵的遠距離攻擊迴避率25%、物理防禦力50%。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"盾牌強擊",info:"對單一敵人造成400%的物理傷害,並使其暈眩2秒。冷卻時間8秒。",class:"active"},{type:"被動技能",title:"防禦姿勢",info:"自身生命力低於75%時,於10秒內增加物理防禦力50%。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"帝國的防禦陣型",info:"於50秒內增加帝國種族的生命力、物理防禦力5%。冷卻時間60秒。",class:"race"}]},{name:"萊娜",armyType:"弓兵",race:"洛伊安",nickName:["洛弓"],tag:["後排輸出","攻速增加","燒傷","抖S"],info:"",avatarUrl:"./images/heros/avatar/Hero_2_Rena.png",infoUrl:"./images/heros/info/萊娜.jpg",skill:[{type:"必殺技",title:"速射劍雨",info:"於5秒內增加自身部隊中弓手兵種的攻擊速度300%。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"燃燒的火箭",info:"向敵人射出容易著火的火箭,對其造成150%的物理傷害,並於4秒內每秒造成50%的火焰持續傷害。冷卻時間8秒。",class:"active"},{type:"被動技能",title:"腎上腺素的極限",info:"使敵人死亡時,於20秒內增加攻擊速度20%。最多疊加5個增益,且增加攻擊速度至100%。",class:"passive"},{type:"種族技能",title:"洛伊安的攻擊姿勢",info:"於50秒內增加洛伊安種族的物理攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"庫歐拉",armyType:"劍兵",race:"獸人",nickName:["獸妹劍"],tag:["前排控制","抖M","單點","出血","沉默"],info:"小編云:如果王會被沉默感覺是設計用來打王的",avatarUrl:"./images/heros/avatar/Hero_16_Cuora.png",infoUrl:"./images/heros/info/庫歐拉.jpg",skill:[{type:"必殺技",title:"襲擊",info:"朝敵人突擊,對範圍內敵人造成400%的物理傷害後回到原位。賦予敵人沉默5秒,使其無法施展主動技能。冷卻時間25秒。範圍1.5。",class:"Ex"},{type:"主動技能",title:"暗殺",info:"對單一敵人造成400%的物理傷害,使其出血並造成4次每秒100%的物理持續傷害。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"潛力",info:"自身生命力低於50%時,於5秒內增加自身的攻擊速度100%。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"獸人族的敏捷",info:"於50秒內增加獸人族的近距離迴避率10%。冷卻時間60秒。",class:"race"}]},{name:"艾魯斯",armyType:"劍兵",race:"洛伊安",nickName:["洛劍","男主","傭兵王","生髮水"],tag:["物攻增加","物防增加","暈眩","擊退","激勵"],info:"",avatarUrl:"./images/heros/avatar/Hero_1.png",infoUrl:"./images/heros/info/艾魯斯.jpg",skill:[{type:"必殺技",title:"聖光暴風劍",info:"如暴風般地揮劍,攻擊自身周遭的敵人,對其造成300%的物理傷害並推開。受到攻擊的敵人陷入暈眩2秒。冷卻時間20秒、範圍2。",class:"Ex"},{type:"主動技能",title:"閃光薩肯",info:"對單一敵人造成300%的物理傷害,並推開敵人(擊退0.6)。冷卻時間6秒。",class:"active"},{type:"被動技能",title:"傭兵隊長的勇氣",info:"自身生命力低於75%時,於10秒內增加自身部隊全體士兵的物理攻擊力25%、物理防禦力25%。冫令卻時間20秒。",class:"passive"},{type:"種族技能",title:"洛伊安的意志",info:"於50秒內增加洛伊安種族的最大生命力10%。冷卻時間60秒。",class:"race"}]},{name:"貝拉",armyType:"騎兵",race:"野獸",nickName:["野獸騎"],tag:["擊退","暈眩","遠迴增加","免疫","前排輔助"],info:"小編云:一整群免疫異常狀態的騎兵發動衝鋒，這樣的騎兵你喜歡嗎?",avatarUrl:"./images/heros/avatar/Hero_39_Arg.png",infoUrl:"./images/heros/info/貝拉.jpg",skill:[{type:"必殺技",title:"札坎之陣營",info:"命令沙兵向前突進,並推開敵人,造成600%的物理傷害。冷卻時間22秒。",class:"Ex"},{type:"主動技能",title:"奇襲",info:"朝敵人突擊,使其暈眩3秒,造成250%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"追擊陣營",info:"於20秒內增加自身部隊騎兵的遠距離迴避率18%,且於10秒內免疫異常狀態。冷卻時間50秒。",class:"passive"},{type:"種族技能",title:"強化相剋",info:"於50秒內增加野獸種族的兵種相剋10%。冷卻時間60秒。",class:"race"}]},{name:"錫安",armyType:"劍兵",race:"野獸",nickName:["野獸劍"],tag:["減療","激勵","物防增加","魔防增加","擊殺恢復","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_38_Xian.png",infoUrl:"./images/heros/info/錫安.jpg",skill:[{type:"必殺技",title:"疾風劍",info:"攻擊路徑上所有敵人後回到原位,造成500%的物理傷害,並於5秒內增加物理防禦力50%。受擊敵人於10秒內減少體力恢復效果10%。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"野獸的咆哮",info:"朝敵人突進,砍擊路徑上的所有敵人,並造成200%的物理傷害。若以該技能擊殺敵人,將恢復體力3%。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"戰場的軍歌",info:"體力低於70%時,於20秒內增加我方部隊劍兵的物理防禦力及魔法防禦力10%。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"野獸的鬥志",info:"於50秒內增加野獸種族的最大生命力10%。冷卻時間60秒。",class:"race"}]},{name:"樂爾",armyType:"槍兵",race:"精靈",nickName:["精槍"],tag:["前排輸出","旋轉","相剋增加"],info:"小編云:玩騎兵隊的我絕對不想看到對面有這隻",avatarUrl:"./images/heros/avatar/Hero_37_Leen.png",infoUrl:"./images/heros/info/樂爾.jpg",skill:[{type:"必殺技",title:"無差別刺擊",info:"朝前方敵人快速刺擊,最多造成8次每0·5秒300%的物理傷害。冷卻時間20秒。",class:"Ex"},{type:"主動技能",title:"大力揮舞",info:"大力揮舞長槍,對週遭敵人造成500%的物理傷害,並使被擊敵人旋轉。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"強化相剋",info:"於15秒內增加自身部隊槍兵的兵種相剋能力值10%。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"風之槍術",info:"於50秒內增加精靈種族的物理攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"戴夫",armyType:"補師",race:"獸人",nickName:["獸補","史帝夫和戴夫","etoro"],tag:["範圍恢復","驅散","單體祝福","免疫"],info:"",avatarUrl:"./images/heros/avatar/Hero_36_Dev.png",infoUrl:"./images/heros/info/戴夫.jpg",skill:[{type:"必殺技",title:"投擲藥水",info:"投擲藥水並引爆,於10秒內減少週遭敵人50%的治癒效果,並造成300%的魔法傷害。恢復我軍300%的體力,並消除所有減益效果。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"解放之力",info:"恢復1名隊員相當於魔法攻擊力300%的體力,並於10秒內增加物理攻擊力、魔法攻擊力及攻擊速度30%。冷卻時間6秒",class:"active"},{type:"被動技能",title:"神之庇護",info:"免疫敵人的異常狀態攻擊。持續時間10秒;冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"禁忌契約",info:"禁忌契約於50秒內增加獸人種族的魔法攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"賽莉亞",armyType:"弓兵",race:"札坎",nickName:["札弓","冰弓"],tag:["冰凍","跑速減少","抖S","後排控制"],info:"",avatarUrl:"./images/heros/avatar/Hero_35_Seria.png",infoUrl:"./images/heros/info/賽莉亞.jpg",skill:[{type:"必殺技",title:"冰箭",info:"冰箭朝敵人發射冰箭,造成300%的物理傷害且使其冰凍5秒,1.8秒後爆炸,並於5秒內賦予週遭40%的慢速效果。札坎種族攻擊被冰凍的敵人時,將造成30%的追加傷害。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"齊射",info:"以扇狀朝前方發射冰箭,造成300%的物理傷害。被冰箭命中的敵人於6秒內減少移動速度50%。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"捷報",info:"使敵人死亡時,於20秒內增加暴擊傷害30%。最多疊加10個增益。",class:"passive"},{type:"種族技能",title:"強化冰凍",info:"於20秒內增加札坎種族的暴擊率5%。冷卻時間60秒。",class:"race"}]},{name:"艾莎",armyType:"補師",race:"亞馬遜",nickName:["亞補"],tag:["範圍恢復","遠迴增加","遠傷減少","觸電"],info:"",avatarUrl:"./images/heros/avatar/Hero_34_Aisha.png",infoUrl:"./images/heros/info/艾莎.jpg",skill:[{type:"必殺技",title:"召喚圖騰",info:"召喚圖騰,每秒治癒週遭我軍相當於魔法攻擊力100%,並減少遠距離傷害10%,及增加遠距離迴避率10%。持續時間10秒。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"魔法寶珠",info:"賦予受到傷害的隊員魔法寶珠,恢復相當於魔法攻擊力300%的體力。恢復效果轉移至週遭我軍,且恢復效果減為原本的50%。冷卻時間6秒。",class:"active"},{type:"被動技能",title:"雷雲",info:"對攻擊自身的對象落下閃電,對敵人週遭造成300%的魔法傷害,並使其觸電。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"魔力增幅",info:"於50秒內增加亞馬遜種族的魔法攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"葛雷斯",armyType:"補師",race:"洛伊安",nickName:["洛補","護盾補"],tag:["全體護盾","驅散","免疫","單體祝福"],info:"小編云:總之就是很可愛",avatarUrl:"./images/heros/avatar/Hero_33_Mercy.png",infoUrl:"./images/heros/info/葛雷斯.jpg",skill:[{type:"必殺技",title:"魔法防護罩",info:"賦予全體我方隊員相當於魔法攻擊力200%且持續15秒的防護罩。冷卻時間40秒。",class:"Ex"},{type:"主動技能",title:"恢復",info:"恢復1名我方隊員相當於自身魔法攻擊力300%的體力。冷卻時間4秒。",class:"active"},{type:"被動技能",title:"消除魔法",info:"消除1名隊員的異常狀態或減益效果,並於5秒內賦予其免疫狀態。冷卻時間20秒。",class:"passive"},{type:"種族技能",title:"魔法衣",info:"於50秒內增加洛伊安種族的魔法防禦力10%。冷卻時間60秒。",class:"race"}]},{name:"庫魯米",armyType:"法師",race:"獸人",nickName:["獸法","獸召"],tag:["召喚","魔防減少","中毒","減療","攻速減少","後排輸出","後排輔助"],info:"小編云:其他獸人技能敘述都短短的，就你特長，分一點效果給別的獸人好不好XD，能做的事情太多了吧",avatarUrl:"./images/heros/avatar/Hero_32_Kurumi.png",infoUrl:"./images/heros/info/庫魯米.jpg",skill:[{type:"必殺技",title:"詛咒魔法陣",info:"於指定地點設下詛咒魔法陣,造成100%的魔法傷害,並於10秒內減少魔法防禦力50%。受擊敵人於10秒內每秒受到35%的劇毒傷害。冷卻時間25秒。範圍2。",class:"Ex"},{type:"主動技能",title:"暗黑火花",info:"賦予遠距離單一敵人詛咒,造成150%的魔法傷害。賦予受詛咒敵人的週遭敵人,於10秒內減少恢復量30%、攻擊速度30%的詛咒,並於5秒內每秒造成30%的劇毒傷害。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"召喚黑士兵",info:"召喚暗黑士兵。暗黑士兵將以庫魯米魔法攻擊力的100%攻擊,死亡或經過60秒時,則造成700%的魔法傷害後消失。冷卻時間60秒。",class:"passive"},{type:"種族技能",title:"暗黑抗性",info:"於50秒內增加獸人種族的魔法防禦力10%。冷卻時間60秒。",class:"race"}]},{name:"珍妮",armyType:"弓兵",race:"亞馬遜",nickName:["亞弓","迴力鏢"],tag:["觸電"],info:"",avatarUrl:"./images/heros/avatar/Hero_31_Karma.png",infoUrl:"./images/heros/info/珍妮.jpg",skill:[{type:"必殺技",title:"查克迴力鏢",info:"朝前方投擲迴力鏢,對週遭敵人持續造成300%的物理傷害,並使其觸電1秒。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"迴力鏢連擊",info:"朝前方連續投出迴力鏢,造成200%的物理傷害,並使敵人觸電1秒。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"狩獵開始",info:"於10秒內增加自身的攻擊速度及移動速度30%。冷卻時間20秒。",class:"passive"},{type:"種族技能",title:"亞馬遜的全盛期",info:"於50秒內增加亞馬遜種族的攻擊速度10%。冷卻時間60秒。",class:"race"}]},{name:"茱莉亞",armyType:"弓兵",race:"帝國",nickName:["帝弓"],tag:["後排輸出","召喚","擊退","單點"],info:"",avatarUrl:"./images/heros/avatar/Hero_30_Julia.png",infoUrl:"./images/heros/info/茱莉亞.jpg",skill:[{type:"必殺技",title:"設置自動石弓",info:"於週遭設置一個自動石弓。石弓將以角色50%的物理攻擊力攻擊敵人,最多可設置1個。冷卻時間60秒。",class:"Ex"},{type:"主動技能",title:"無差別射擊",info:"發射1次貫穿前方所有敵人的箭矢,造成200%的物理傷害,並擊退敵人。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"宣告",info:"攻擊命中同一目標五次時,額外造成200%的物理傷害。冷卻時間6秒。",class:"passive"},{type:"種族技能",title:"帝國的反擊",info:"於50秒內增加帝國種族的攻擊速度10%。冷卻時間60秒。",class:"race"}]},{name:"德雷德",armyType:"槍兵",race:"獸人",nickName:["獸槍"],tag:["跑速減少","物傷免疫","擊退","抖M","自我恢復","暴率增加","資源巨怪"],info:"小編云:稀有的暴率增加跟物傷免疫，自我恢復與buff，或許投入足夠資源時是對物理戰神?",avatarUrl:"./images/heros/avatar/Hero_29_Dread.png",infoUrl:"./images/heros/info/德雷德.jpg",skill:[{type:"必殺技",title:"無情突擊",info:"朝敵人突進,對週遭敵人造成500%的物理傷害,且受擊敵人於5秒內減少移動速度30%並被推開。突擊後於4秒內進入免疫物理攻擊的狀態。冷卻時間20秒。",class:"Ex"},{type:"主動技能",title:"亂砍",info:"以巨大的偃月刀朝前方砍擊。造成300%的物理傷害,並擊退敵人。於10秒內增加自身的暴擊率10%。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"熟悉的痛苦",info:"被擊時,於10秒內增加攻擊速度30%,並於10秒內恢復總生命力10%。冷卻時間25秒。",class:"passive"},{type:"種族技能",title:"獸人的全盛期",info:"於20秒內增加獸人種族的暴擊率5%。冷卻時間60秒。",class:"race"}]},{name:"可芙",armyType:"法師",race:"洛伊安",nickName:["洛法","耀西"],tag:["馬猴燒酒","失明","物攻減少","魔攻減少","單體祝福","後排輔助"],info:"",avatarUrl:"./images/heros/avatar/Hero_28_Cove.png",infoUrl:"./images/heros/info/可芙.jpg",skill:[{type:"必殺技",title:"科瓦變身",info:"藉科瓦之力變身,於20秒內增加生命力/物理防禦力/魔法防禦力50%、魔法攻擊力/移動速度100%、攻擊速度150%。冷卻時間60秒。",class:"Ex"},{type:"主動技能",title:"科瓦的詛咒",info:"降下科瓦的詛咒,對敵人造成300%的魔法傷害,並使其失明6秒。於5秒內減少目標的物理攻擊力及魔法攻擊力20%。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"科瓦的祝福",info:"於20秒內增加1名隊員的物理及魔法攻擊力20%。冷卻時間60秒。",class:"passive"},{type:"種族技能",title:"洛伊安的信念",info:"於50秒內增加洛伊安種族的異常狀態抗性10%。冷卻時間60秒。",class:"race"}]},{name:"梅爾賽黛絲",armyType:"槍兵",race:"帝國",nickName:["帝槍"],tag:["前排輸出","暈眩","擊退","抖M","資源巨怪"],info:"",avatarUrl:"./images/heros/avatar/Hero_27_Mercedes.png",infoUrl:"./images/heros/info/梅爾賽黛絲.jpg",skill:[{type:"必殺技",title:"刺擊",info:"朝前方敵人突進後折返,最多造成2次500%的物理傷害,並賦予其暈眩及擊退效果。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"擊退",info:"以巨大長槍刺擊,對前方敵人造成500%的物理傷害,並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"貫穿",info:"被擊時,於20秒內增加物理防禦力貫通10%。冷卻時間60秒。",class:"passive"},{type:"種族技能",title:"帝國的自豪",info:"於50秒內增加帝國種族的物理攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"奇埃魯",armyType:"劍兵",race:"亞馬遜",nickName:["亞劍"],tag:["混沌","減療","抖M","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_26_Kiena.png",infoUrl:"./images/heros/info/奇埃魯.jpg",skill:[{type:"必殺技",title:"混沌",info:"對週遭敵人施展混沌咒語,造成400%的物理傷害,並使其於4秒內慢慢靠向自己。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"被詛咒的劍氣",info:"對敵人造成400%的物理傷害,並於5秒內減少恢復力50%。冷卻時間25秒。",class:"active"},{type:"被動技能",title:"強化體質",info:"自身生命力低於50%時,於20秒內增加攻擊速度50%、物理防禦力30%。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"強化魔力",info:"於30秒內增加亞馬遜的魔法防禦力20%。冷卻時間60秒。",class:"race"}]},{name:"貝倫",armyType:"騎兵",race:"獸人",nickName:["獸騎"],tag:["前排輸出","吸血","抖M","擊退"],info:"",avatarUrl:"./images/heros/avatar/Hero_25_Veron.png",infoUrl:"./images/heros/info/貝倫.jpg",skill:[{type:"必殺技",title:"風車",info:"旋轉大劍朝敵人突進,對週遭目標造成最多6次每0,5秒200%的物理傷害。(擊退0.5)冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"揮舞大劍",info:"揮舞大劍,對週遭敵人造成400%的物理傷害,並推開敵人。冷卻時間15秒。",class:"active"},{type:"被動技能",title:"狩獵",info:"受到敵人攻擊時,於10秒內增加吸收生命力1%,冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"血盟",info:"於50秒內增加獸人族的生命力10%。冷卻時間60秒。",class:"race"}]},{name:"阿勒爾",armyType:"騎兵",race:"精靈",nickName:["精騎","四超人"],tag:["單點","擊退","物理免疫","抖M"],info:"",avatarUrl:"./images/heros/avatar/Hero_24_Arel.png",infoUrl:"./images/heros/info/阿勒爾.jpg",skill:[{type:"必殺技",title:"焦點攻擊",info:"刺穿單一目標,並造成500%的物理傷害。有20%的機率額外造成5000%的物理傷害。冷卻時間15秒。",class:"Ex"},{type:"主動技能",title:"騎兵衝鋒",info:"劍騎兵奔馳一定距離後,加快移動速度進行突擊,造成450%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"超集中",info:"受到敵人攻擊時,於5秒內增加攻擊速度50%,並免疫物理攻擊力。冷卻時間25秒。",class:"passive"},{type:"種族技能",title:"黑暗",info:"於50秒內增加精靈族的遠距離避率10%。冷卻時間60秒。",class:"race"}]},{name:"巴伊凱",armyType:"騎兵",race:"札坎",nickName:["札騎"],tag:["前排輸出","跑速減少","抖M","資源巨怪","持盾"],info:"小編云:幫我撐十秒，有吸血戒的話疊滿被動2倍攻又有高倍率範圍攻擊，呂布4ni?",avatarUrl:"./images/heros/avatar/Hero_23_Bykal.png",infoUrl:"./images/heros/info/巴伊凱.jpg",skill:[{type:"必殺技",title:"龍捲風",info:"於前方捲起龍捲風,對週遭多名敵人造成最多6次每秒100%的物理傷害,並使目標陷入慢速狀態。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"長槍衝鋒",info:"槍騎兵奔馳一定距離後,加快移動速度進行突擊,造成800%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"魔槍士的憤怒",info:"受到敵人攻擊時,於20秒內增加物理攻擊力10%。最多疊加10個增益,並增加至100%。冷卻時間1秒。",class:"passive"},{type:"種族技能",title:"札坎的專注力",info:"於30秒內增加札坎種族的暴擊傷害30%。冷卻時間60秒。",class:"race"}]},{name:"艾爾琳",armyType:"法師",race:"精靈",nickName:["精法"],tag:["旋轉","抖S","後排輸出"],info:"",avatarUrl:"./images/heros/avatar/Hero_21_Ellin.png",infoUrl:"./images/heros/info/艾爾琳.jpg",skill:[{type:"必殺技",title:"風暴",info:"於敵人所在位置捲起強烈風暴,於6秒內對週遭多名敵人造成最多6次每秒100%的魔法傷害,並使敵人旋轉。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"風之擊",info:"對單一敵人造成300%的魔法傷害。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"魔法補給",info:"使敵人死亡時,於10秒內增加魔法攻擊力30%。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"魔法防禦",info:"於40秒內增加精靈種族的魔法防禦力上限10%。冷卻時間60秒。",class:"race"}]},{name:"雅莉亞",armyType:"補師",race:"札坎",nickName:["札補"],tag:["範圍恢復","自我恢復"],info:"",avatarUrl:"./images/heros/avatar/Hero_20_Aria.png",infoUrl:"./images/heros/info/雅莉亞.jpg",skill:[{type:"必殺技",title:"生命之光",info:"召喚生命之光,恢復該地區我軍的體力。於10秒內每2秒恢復相當於魔法攻擊力100%的體力。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"堅毅的再生力",info:"於6秒內恢復1名我方隊員相當於魔法攻擊力900%的生命力。冷卻時間15秒。",class:"active"},{type:"被動技能",title:"自我治癒",info:"被擊時,於4秒內恢復生命力20%。冷卻時間15秒。",class:"passive"},{type:"種族技能",title:"充滿信任",info:"於30秒內增加札坎種族的魔法攻擊力上限10%。冷卻時間60秒。",class:"race"}]},{name:"愛琳",armyType:"劍兵",race:"精靈",nickName:["精劍"],tag:["後排輸出","召喚","擊退","單點","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_19_Arin.png",infoUrl:"./images/heros/info/愛琳.jpg",skill:[{type:"必殺技",title:"躲在我身後",info:"召喚魔法盾牌,阻擋敵人的遠距離攻擊。魔法盾牌將以角色體力的50%形成並維持20秒。冷卻時間45秒。",class:"Ex"},{type:"主動技能",title:"力推盾牌",info:"造成300%的物理傷害,並推開敵人。冷卻時間15秒。",class:"active"},{type:"被動技能",title:"高貴的精神",info:"自身生命力低於50%時,於15秒內增加自身的物理防禦力50%。冷卻時間25秒。",class:"passive"},{type:"種族技能",title:"精靈的祝福",info:"於45秒內增加精靈種族的最大生命力5%。冷卻時間60秒。",class:"race"}]},{name:"艾娜",armyType:"槍兵",race:"亞馬遜",nickName:["亞槍"],tag:["暈眩","擊退","後排控制"],info:"小編云:不知為何，有種這隻來湊數的感覺，技能效果都很簡單，有種不想動腦就隨便塞效果上去的feel",avatarUrl:"./images/heros/avatar/Hero_17_Anna.png",infoUrl:"./images/heros/info/艾娜.jpg",skill:[{type:"必殺技",title:"雷擊",info:"對前方敵人施展閃電範圍攻擊,造成300%的物理傷害;擊退敵人並使其陷入觸電狀態。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"連續刺擊",info:"連續攻擊敵人兩次,每次造成300%的物理傷害。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"亞馬遜人的狂氣",info:"若使敵人死亡,將重置連續刺擊的冷卻時間,並於10秒內增加物理攻擊力30%。冷卻時間3秒。",class:"passive"},{type:"種族技能",title:"亞馬遜的憤怒",info:"於50秒內增加亞馬遜的物理攻擊力10%。冷卻時間60秒。",class:"race"}]},{name:"芬泰勒",armyType:"法師",race:"亞馬遜",nickName:["亞法","亞召"],tag:["召喚","後排保排"],info:"",avatarUrl:"./images/heros/avatar/Hero_8_Penteir.png",infoUrl:"./images/heros/info/芬泰勒.jpg",skill:[{type:"必殺技",title:"召喚大地精靈",info:"召喚出5隻槍兵屬性的大地精靈。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"強化大地精靈",info:"增加1名大地精靈的最大生命力40%。冷卻時間8秒。",class:"active"},{type:"被動技能",title:"守護精靈",info:"自身生命力低於75%時,原先的召喚物不會消失,並額外召喚出5隻大地精靈。冷卻時間40秒。",class:"passive"},{type:"種族技能",title:"亞馬遜的高晠",info:"於50秒內增加亞馬遜種族的物理攻擊力、物理防禦力5%。冷卻時間60秒。",class:"race"}]},{name:"克萊溫",armyType:"槍兵",race:"札坎",nickName:["札槍"],tag:["物攻增加","攻速增加","擊退","暈眩","射程增加","前排輔助"],info:"小編云:沒意外必殺技的槍兵物攻增加是可以讓槍兵英雄吃到的，根本槍兵輸出專武吧XD",avatarUrl:"./images/heros/avatar/Hero_14_Creon.png",infoUrl:"./images/heros/info/克萊溫.jpg",skill:[{type:"必殺技",title:"長柄槍攻擊",info:"於10秒內增加自身部隊槍兵的物理攻擊力50%、攻擊速度50%。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"螺旋槍",info:"向敵人投擲長槍,造成400%的物理傷害並將其推開(擊退1.2),且使其暈眩2秒。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"槍鬥",info:"強化槍的力量,使攻擊距離比一般長槍更長。",class:"passive"},{type:"種族技能",title:"札坎之盾",info:"於50秒內增加札坎種族的物理防禦力10%。冷卻時間60秒。",class:"race"}]},{name:"薩瑪克",armyType:"法師",race:"札坎",nickName:["札法"],tag:["攻速減少","物防減少","詛咒","推開","後排輔助"],info:"",avatarUrl:"./images/heros/avatar/Hero_13_Shamark.png",infoUrl:"./images/heros/info/薩瑪克.jpg",skill:[{type:"必殺技",title:"靈魂鎖鏈",info:"向指定地點施展大範圍詛咒,造成100%的魔法傷害,並於10秒內減少攻擊速度50%、物理防禦力25%。冷卻時間25秒。範圍2。",class:"Ex"},{type:"主動技能",title:"亡靈入侵",info:"對遠距離單一對象造成150%的魔法傷害,並於5秒內減少物理防禦力50%。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"尖刺詛咒",info:"對攻擊自身的對象降下詛咒,造成6次每秒50%的持續傷害並將其推開。冷卻時間12秒。",class:"passive"},{type:"種族技能",title:"札坎的潛力",info:"於50秒內增加札坎種族的最大生命力10%。冷卻時間60秒。",class:"race"}]},{name:"卡西烏斯",armyType:"騎兵",race:"帝國",nickName:["帝騎"],tag:["前排坦克","攻速增加","跑速增加","暈眩","抖M","持盾"],info:"小編云:全隊騎兵衝鋒流怎麼能少了他呢",avatarUrl:"./images/heros/avatar/Hero_12_Cassius.png",infoUrl:"./images/heros/info/卡西烏斯.jpg",skill:[{type:"必殺技",title:"騎兵隊長的突擊",info:"於10秒內增加自身部隊騎兵的攻擊速度50%、移動速度50%。冷卻時間30秒。",class:"Ex"},{type:"主動技能",title:"騎兵衝鋒",info:"劍騎兵奔馳一定距離後,加快移動速度進行突擊,使其暈眩1秒,造成450%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"防守補給",info:"受到敵人攻擊時,於20秒內增加物理防禦力和魔法防禦力20%。最多疊加5個增益,且最多增加100%。冷卻時間3秒。",class:"passive"},{type:"種族技能",title:"帝國的進擊",info:"於50秒內增加帝國種族的物理攻擊力、物理防禦力5%。冷卻時間60秒。",class:"race"}]},{name:"賽里亞絲",armyType:"補師",race:"帝國",nickName:["帝補","復活補"],tag:["復活"],info:"",avatarUrl:"./images/heros/avatar/Hero_11_Celias.png",infoUrl:"./images/heros/info/賽里亞絲.jpg",skill:[{type:"必殺技",title:"復活",info:"復活1名死亡的我方隊員。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"恢復",info:"恢復1名我方隊員相當於自身魔法攻撃力300%的體力。冷卻時間4秒。",class:"active"},{type:"被動技能",title:"神的呼喚",info:"自身死亡時,於3秒後復活。冷卻時間120秒。",class:"passive"},{type:"種族技能",title:"帝國的自豪",info:"於50秒內增加帝國種族的最大生命力10%。冷卻時間60秒。",class:"race"}]},{name:"杜魯希拉",armyType:"法師",race:"帝國",nickName:["帝法"],tag:["暈眩","擊退","燒傷","抖S","觸電","後排輸出","後排控制"],info:"小編云:觸電...你是不是有亞馬遜血統",avatarUrl:"./images/heros/avatar/Hero_10_Drusilla.png",infoUrl:"./images/heros/info/杜魯希拉.jpg",skill:[{type:"必殺技",title:"隕石衝撞",info:"於空中產生一顆小隕石,接著掉落至指定地點。被擊中的敵人會受到300%的魔法傷害並被推開;陷入暈眩3秒,且受到3次每秒50%的火焰持續傷害。冷卻時間35秒。",class:"Ex"},{type:"主動技能",title:"閃電伏特",info:"對單一對象發射電流並使其觸電,造成300%的魔法傷害且暈眩3秒。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"魔法血流",info:"擊殺敵人後,於20秒內增加魔法攻擊力10%。最多疊加5個增益。",class:"passive"},{type:"種族技能",title:"帝國的魔法工學",info:"於50秒內增加帝國種族的魔法攻擊力5%。冷卻時間60秒。",class:"race"}]},{name:"科克斯",armyType:"弓兵",race:"獸人",nickName:["獸弓"],tag:["暈眩","擊退","後排控制"],info:"小編云:不知為何，有種這隻來湊數的感覺，技能效果都很簡單，有種不想動腦就隨便塞效果上去的feel",avatarUrl:"./images/heros/avatar/Hero_18_Kerkes.png",infoUrl:"./images/heros/info/科克斯.jpg",skill:[{type:"必殺技",title:"爆裂射擊",info:"指定範圍造成300%的物理傷害,並使目標暈眩。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"三重射擊",info:"發射造成300%物理傷害的箭矢,並擊退敵人。冷卻時間10秒。",class:"active"},{type:"被動技能",title:"疾速",info:"於15秒內增加自身的攻擊速度30%。冷卻時間30秒。",class:"passive"},{type:"種族技能",title:"獸人的氣勢",info:"於20秒內增加獸人的物理攻擊力15%。冷卻時間60秒。",class:"race"}]},{name:"蒂芬妮",armyType:"騎兵",race:"亞馬遜",nickName:["亞騎"],tag:["觸電擊退","自我恢復","抖M","持盾"],info:"",avatarUrl:"./images/heros/avatar/Hero_22_Stephanie.png",infoUrl:"./images/heros/info/蒂芬妮.jpg",skill:[{type:"必殺技",title:"擲槍",info:"朝敵人投擲長槍,對週遭多名敵人造成500%的物理傷害,並使目標陷入觸電狀態。冷卻時間25秒。",class:"Ex"},{type:"主動技能",title:"長槍衝鋒",info:"槍騎兵奔馳一定距離後,加快移動速度進行突擊,造成800%的物理傷害並推開敵人。冷卻時間20秒。",class:"active"},{type:"被動技能",title:"野生的憤怒",info:"自身生命力低於60%時,於2秒內恢復生命力20%,並於15秒內增加自身的暴擊率30%。冷卻時間20秒。",class:"passive"},{type:"種族技能",title:"野生的氣息",info:"於50秒內增加亞馬遜種族的生命力10%。冷卻時間60秒。",class:"race"}]}];var P=y({state:{favoriteHero:JSON.parse(JSON.stringify(B))},getters:{getFavoriteHero:e=>e.favoriteHero},mutations:{addFavoriteHero(e,a){e.favoriteHero.map((e=>{if(e.name==a.name)try{let t=e.favorite.indexOf(a.index);-1!=t?(e.favorite.splice(t,1),console.log(e.favorite)):(e.favorite.push(a.index),console.log(e.favorite))}catch(t){console.log(t),e.favorite=[a.index]}}))},clearFavorite(e){e.favoriteHero=JSON.parse(JSON.stringify(B))}},actions:{},modules:{},plugins:[g()]}),$=v({theme:{defaultTheme:"primary"}});const J=E("data-v-0689f029");h("data-v-0689f029");const K={class:"outerCard"},X={key:0,class:"favoriteGroup"},q=t("path",{d:"M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"},null,-1),G={class:"img"},W={class:"name"},Y={class:"p"},Z={class:"mt"},z={class:"mt"},Q={class:"mt"};d();const ee=J(((i,s,l,o,r,n)=>(e(),a("div",K,[t(H,{class:"card",onClick:s[1]||(s[1]=e=>n.selectCard(l.data))},{default:J((()=>[l.showHeart?(e(),a("div",X,[(e(!0),a(_,null,u(n.herofavoriteList,(t=>(e(),a("svg",{class:["favoriteTpye","favoriteTpye"+t],xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24"},[q],2)))),256))])):k("",!0),t("div",G,[t("img",{src:l.data.avatarUrl},null,8,["src"]),t("div",W,[t("h3",null,U(l.data.name),1)])])])),_:1}),t("div",{class:["skill tooltiptext",{show:r.show}],onClick:s[2]||(s[2]=e=>n.colseSkill())},[t("h1",null,U(l.data.name)+" 技能",1),(e(!0),a(_,null,u(l.data.skill,(i=>(e(),a("div",Y,[t("h2",Z,U(i.title),1),t("h3",z,U(i.type),1),t("h4",Q,U(i.info),1)])))),256))],2)]))));const ae={name:"heroCard",data:()=>({show:!1}),props:{data:Object,favoriteTpye:{type:Number,default:0},type:{type:Number,default:0},showHeart:{type:Boolean,default:!1},showSkill:{type:Boolean,default:!1}},computed:{favoriteHero(){return this.$store.getters.getFavoriteHero.find((e=>e.name==this.data.name))},herofavoriteList(){let e=this.favoriteHero.favorite;return e||[]}},methods:{selectCard(e){this.showSkill?this.show=!0:0==this.favoriteTpye?(this.$router.push({name:"Hero",query:{name:e.name}}),window.scrollTo({top:0,behavior:"smooth"})):this.$store.commit("addFavoriteHero",{index:this.favoriteTpye,name:e.name})},colseSkill(){this.show=!1}},watch:{favoriteHero:{handler:function(){},deep:!0}}};ae.render=ee,ae.__scopeId="data-v-0689f029";const te=E("data-v-af54d700");h("data-v-af54d700");const ie={class:"tags"},se={class:"tag tooltip"},le={key:0,style:{width:"20px",height:"20px"},viewBox:"0 0 24 20"},oe=t("path",{fill:"gray",d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"},null,-1);d();const re=te(((i,s,l,o,r,c)=>(e(),a("div",ie,[(e(!0),a(_,null,u(l.datas,(i=>(e(),a("div",se,[t(n,{class:["btn",i.title,{active:i.active}],rounded:"pill",onClick:e=>c.select(i)},{default:te((()=>[t("span",null,U(i.title),1),i.intro.length>0?(e(),a("svg",le,[oe])):k("",!0)])),_:2},1032,["class","onClick"]),i.intro.length>0?(e(),a(T,{key:0,class:"p mt rounded-lg tooltiptext"},{default:te((()=>[p(U(i.intro),1)])),_:2},1024)):k("",!0)])))),256))]))));const ne={name:"tag",props:{datas:Array,canSelect:{type:Boolean,default:!0}},methods:{select(e){this.canSelect&&(e.active?e.active=!1:e.active=!0)}}};ne.render=re,ne.__scopeId="data-v-af54d700",async function(){(await L((()=>import("./webfontloader.02e4671c.js").then((function(e){return e.w}))),[])).load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}(),x(D).use(F).use(P).use($).component("heroCard",ae).component("tag",ne).mount("#app");export{B as h};
