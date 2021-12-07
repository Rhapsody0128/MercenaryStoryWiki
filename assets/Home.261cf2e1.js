import{h as e}from"./index.d9eb42a4.js";import{h as a}from"./heroTagList.f74b11b6.js";import{a as t,r as s}from"./index.eae7ac6e.js";import{p as i,m as l,o as r,c as o,a as c,v as n,e as h,F as d,n as p,u as g,r as u}from"./vendor.02a84c76.js";const v=g();i("data-v-309d4652");const f={id:"home"},y={class:"row"},m=c("h3",null,"種族",-1),T={class:"tags"},w={class:"row"},b=c("h3",null,"兵種",-1),S={class:"tags"},k={class:"row"},_=c("h3",null,"其他標籤",-1),O={class:"tags"},x={class:"row p mt"},J=c("span",null,"清空所有標籤 (快捷鍵可按esc)",-1),N=c("span",null,"收藏模式",-1),U={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},H=c("path",{d:"M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z"},null,-1),F=c("path",{d:"M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"},null,-1),C=c("span",null,"清空所有收藏",-1),j={class:"row"};l();const E=v(((e,a,t,s,i,l)=>{const g=u("tag"),E=u("v-switch"),z=u("heroCard");return r(),o("div",f,[c("div",y,[c(n,{class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:v((()=>[m,c("div",T,[c(g,{datas:i.race},null,8,["datas"])])])),_:1})]),c("div",w,[c(n,{class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:v((()=>[b,c("div",S,[c(g,{datas:i.armyType},null,8,["datas"])])])),_:1})]),c("div",k,[c(n,{class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:v((()=>[_,c("div",O,[c(g,{datas:i.tag},null,8,["datas"])])])),_:1})]),c("div",x,[c(h,{onClick:a[1]||(a[1]=e=>l.clearSelectTag())},{default:v((()=>[J])),_:1}),c(h,{class:"favorite",onClick:a[2]||(a[2]=e=>l.changeFavoriteType())},{default:v((()=>[N,0==i.favoriteType?(r(),o("svg",U,[H])):(r(),o("svg",{key:1,class:"favoriteTpye"+i.favoriteType,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[F],2))])),_:1}),c(h,{class:"favorite",onClick:a[3]||(a[3]=e=>l.clearFavorite())},{default:v((()=>[C])),_:1}),c(h,{onClick:a[5]||(a[5]=e=>l.getData())},{default:v((()=>[c(E,{modelValue:i.isUnion,"onUpdate:modelValue":a[4]||(a[4]=e=>i.isUnion=e),label:l.unionLabel},null,8,["modelValue","label"])])),_:1})]),c("div",j,[c(n,{class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:v((()=>[(r(!0),o(d,null,p(i.selectHeros,(e=>(r(),o(z,{data:e,favoriteTpye:i.favoriteType,showHeart:!0},null,8,["data","favoriteTpye"])))),256))])),_:1})])])}));const z={data:()=>({heros:[],selectHeros:[],armyType:[],race:[],tag:[],favoriteType:0,isUnion:!1}),computed:{selectTags(){let e=this.race.filter((e=>e.active)),a=this.armyType.filter((e=>e.active)),t=this.tag.filter((e=>e.active)),s=e.concat(a);return s=s.concat(t),s},unionLabel(){return this.isUnion?"聯集模式 (or)":"交集模式 ( and )"}},methods:{getData(){if(0==this.selectTags.length)this.selectHeros=this.heros;else{let a=e,t=[];this.selectTags.map((e=>{this.isUnion||(t=[]),a.map((a=>{if("tag"==e.type){if(a.tag.includes(e.title)){t.find((e=>a==e))||t.push(a)}}else if(e.title==a[e.type]){t.find((e=>a==e))||t.push(a)}})),this.isUnion||(a=t)})),this.isUnion?this.selectHeros=t:this.selectHeros=a}},selectTag(e,a){this.selectTags.push(a),e.find((e=>a==e))&&e.splice(e.indexOf(a),1)},tagSelectBack(e,a){switch(e.type){case"armyType":this.armyType.push(e);break;case"race":this.race.push(e);break;case"tag":this.tag.push(e)}this.selectTags.splice(a,1)},clearSelectTag(){this.tag.forEach((e=>{e.active=!1})),this.race.forEach((e=>{e.active=!1})),this.armyType.forEach((e=>{e.active=!1}))},changeFavoriteType(){this.favoriteType++,this.favoriteType>3&&(this.favoriteType=0)},clearFavorite(){this.favoriteType=0,this.$store.commit("clearFavorite")}},mounted(){this.heros=JSON.parse(JSON.stringify(e)),this.armyType=JSON.parse(JSON.stringify(t)),this.race=JSON.parse(JSON.stringify(s)),this.tag=JSON.parse(JSON.stringify(a)),this.selectHeros=this.heros;let i=this;document.onkeydown=function(e){"Escape"==e.key&&i.clearSelectTag()}},watch:{selectTags:{handler:function(){this.getData()},deep:!0}}};z.render=E,z.__scopeId="data-v-309d4652";export{z as default};
