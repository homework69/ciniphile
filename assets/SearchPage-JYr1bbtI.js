import{n as y,p as f,q as k,j as h,k as S,r as x,b as $,o as r,c as o,d as a,e as _,v as V,F as d,l as C,m as b,w,u as B,s as N,t as T,x as D,f as I,a as L}from"./index-1a48VgfQ.js";const R=y({id:"searching",state:()=>({url:"https://api.themoviedb.org/3/search/multi",searching:null,search:""}),actions:{async getSearch(i=1){if(this.search)try{const e=await k.get(`${this.url}?api_key=${f}&language=ru-RU&query=${this.search}&page=${i}`);this.searching=e.data.results}catch(e){console.log("Произошла ошибка при поиске",e)}else this.searching=null}},getters:{}}),q={class:"search"},z={class:"container"},F={key:0,class:"list"},U={class:"container"},j={class:"list__img",alt:""},A={__name:"Search",setup(i){const e=R(),m=((s,c)=>{let t=null;return()=>{t&&clearInterval(t),t=setTimeout(()=>{s()},c)}})(e.getSearch,100),l=h(()=>e.searching),u=h({get:()=>e.search,set:s=>{e.search=s,m()}});return S(0),(s,c)=>{const t=x("RouterLink"),g=$("lazy");return r(),o(d,null,[a("div",q,[a("div",z,[_(a("input",{type:"text",placeholder:"Найти фильм, сериал...",class:"search__input","onUpdate:modelValue":c[0]||(c[0]=n=>u.value=n)},null,512),[[V,u.value]])])]),l.value?(r(),o("div",F,[a("div",U,[(r(!0),o(d,null,C(l.value,(n,v)=>(r(),b(t,{to:"/",key:n.id,onClick:K=>s.searchItem(v)},{default:w(()=>[_(a("img",j,null,512),[[g,B(I)+n.poster_path]]),N(" "+T(s.searchType),1)]),_:2},1032,["onClick"]))),128))])])):D("",!0)],64)}}},E={class:"main"},P={__name:"SearchPage",setup(i){return(e,p)=>(r(),o("main",E,[L(A)]))}};export{P as default};
