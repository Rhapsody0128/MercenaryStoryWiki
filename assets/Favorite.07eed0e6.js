import{p as t,m as s,o as a,c as e,F as o,n as r,u as l,r as i,v as d,a as n,t as v,q as h}from"./vendor.7f1e1949.js";const c=l();t("data-v-7e8b588d");const u={class:"favorite"},p={class:"row"},g={class:"title"},f=n("path",{d:"M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"},null,-1),m={class:"cardList"};s();const w=c(((t,s,l,w,L,b)=>{const x=i("heroCard");return a(),e("div",u,[(a(!0),e(o,null,r(L.herosList,((t,s)=>(a(),e("div",p,[t.length>0?(a(),e(d,{key:0,class:"p mt rounded-lg",elevation:"3",color:"rgba(0,0,0,0)"},{default:c((()=>[n("div",null,[n("span",g,"隊伍"+v(s+1),1),(a(),e("svg",{class:"favoriteTpye"+(s+1),xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 24 24"},[f],2))]),n("div",m,[(a(!0),e(o,null,r(t,(t=>(a(),e(x,{data:t,showSkill:!0},null,8,["data"])))),256))])])),_:2},1024)):h("",!0)])))),256))])}));const L={data:()=>({hero:{},herosList:[]}),computed:{favoriteHero(){return this.$store.getters.getFavoriteHero}},methods:{getData(){let t=[[],[],[]];this.favoriteHero.map((s=>{s.favorite&&s.favorite.map((a=>{t[a-1].push(s)}))})),this.herosList=t}},mounted(){this.getData()}};L.render=w,L.__scopeId="data-v-7e8b588d";export{L as default};
