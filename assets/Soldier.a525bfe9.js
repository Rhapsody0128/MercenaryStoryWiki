import{V as a,a as t,b as e,f as l,c as s}from"./VRow.9ae58704.js";import{a as o,r}from"./index.eae7ac6e.js";import{a as n}from"./index.e3cebc9f.js";import{a as i}from"./armyTagList.e863cbe0.js";import{p as h,m as u,o as d,c,a as g,x as m,F as p,n as f,t as _,u as v,r as y,q as D}from"./vendor.0d840192.js";const b=v();h("data-v-6ee5179f");const x={class:"soldier"},T={class:"tooltip"},j={class:"tooltiptext"},k={key:0},N={class:"tags mt"};u();const w=b(((l,s,o,r,n,i)=>{const h=y("tag"),u=y("soldierCard");return d(),c("div",x,[g(e,{fluid:""},{default:b((()=>[g(a,null,{default:b((()=>[g(t,{cols:"12",md:"8"},{default:b((()=>[g(m,{class:"p rounded-lg img",elevation:"3",color:"rgba(0,0,0,0)"},{default:b((()=>[g("img",{src:n.hero.avatarUrl},null,8,["src"]),(d(!0),c(p,null,f(n.hero.skill,(a=>(d(),c("div",{class:["skill",a.class]},[g("div",T,[g("div",j,[g("h2",null,_(a.title),1),g("span",null,_(a.info),1)])])],2)))),256))])),_:1})])),_:1}),g(t,{cols:"12",md:"4"},{default:b((()=>[g(a,{class:"flex-row"},{default:b((()=>[(d(!0),c(p,null,f(n.hero.skill,(a=>(d(),c(t,{class:"p",col:"3",md:"12"},{default:b((()=>[g(m,{class:"p rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:b((()=>[g("h2",null,_(a.title),1),g("h3",null,_(a.type),1),g("h4",null,_(a.info),1)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])),_:1})])),_:1}),g(a,null,{default:b((()=>[g(t,null,{default:b((()=>[g(m,{class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:b((()=>[g("h1",null,_(n.hero.name),1),(d(!0),c(p,null,f(n.hero.nickName,((a,t)=>(d(),c("span",null,[t>0?(d(),c("span",k,"、")):D("",!0),g("span",null,_(a),1)])))),256)),g("h5",null,_(n.hero.info),1),g("div",N,[g(h,{datas:n.tag,canSelect:!1},null,8,["datas"])])])),_:1})])),_:1})])),_:1}),(d(!0),c(p,null,f(n.tagData,(e=>(d(),c(a,null,{default:b((()=>[g(t,null,{default:b((()=>[g(m,{class:"p mt rounded-lg",elevation:"6",color:"rgba(0,0,0,0)"},{default:b((()=>[g("h2",null,_(e.tag),1),(d(!0),c(p,null,f(e.data,(a=>(d(),c(u,{data:a},null,8,["data"])))),256))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),256))])),_:1})])}));const q={data:()=>({hero:{},tag:[],tagData:[]}),computed:{heroName(){return this.$route.query.name}},methods:{getData(){this.hero=l(n,"name",this.heroName),this.tag=[];let a=l(o,"title",this.hero.armyType),t=l(r,"title",this.hero.race);this.tag.push(t,a),console.log(this.tag),this.hero.tag.map((a=>{let t=l(i,"title",a);t&&this.tag.push(t)})),this.getTagHero()},getTagHero(){this.tagData=[];let a=s(n,"race",this.hero.race,this.hero.name),t=s(n,"armyType",this.hero.armyType,this.hero.name);a.length>0&&this.tagData.push({tag:"種族",data:a}),t.length>0&&this.tagData.push({tag:"兵種",data:t}),this.tag.map((a=>{let t=[];a&&(n.map((e=>{e.tag.includes(a.title)&&e.name!==this.hero.name&&t.push(e)})),t.length>0&&this.tagData.push({tag:a.title,data:t}))}))}},mounted(){this.getData()},watch:{heroName(){this.heroName&&this.getData()}}};q.render=w,q.__scopeId="data-v-6ee5179f";export{q as default};
