import{o as a,c as r,b as t,t as c,l as w,m as I,n as R,x as b,g as S,h as m,r as x,F as D,j as F,w as g,u as v,f as y,s as p,y as N,i as Y,p as V,a as h,z as U,k as M}from"./index-taWSVO8y.js";const j={class:"budget"},A={class:"container"},L={class:"budget__column"},T={class:"budget__item"},E=t("h3",{class:"budget__item-title"},"Бюджет",-1),G={class:"budget__item-descr"},K={class:"budget__item"},X=t("h3",{class:"budget__item-title"},"Сборы",-1),q={class:"budget__item-descr"},H={class:"budget__item"},J=t("h3",{class:"budget__item-title"},"Статус",-1),O={class:"budget__item-descr"},P={class:"budget__item"},Q=t("h3",{class:"budget__item-title"},"Исходное название",-1),W={class:"budget__item-descr"},Z={__name:"Budget",props:["info"],setup(e){const s=(o="")=>o==0||o==""?"Не известно":o.toLocaleString("en-US",{style:"currency",currency:"USD"});return(o,n)=>{var i,l,_,d;return a(),r("div",j,[t("div",A,[t("div",L,[t("div",T,[E,t("p",G,c(s((i=e.info)==null?void 0:i.budget)),1)]),t("div",K,[X,t("p",q,c(s(e.info.revenue)),1)]),t("div",H,[J,t("p",O,c((l=e.info)==null?void 0:l.status),1)]),t("div",P,[Q,t("p",W,c(((_=e.info)==null?void 0:_.original_title)||((d=e.info)==null?void 0:d.original_name)),1)])])])])}}},ee=w({id:"recommend",state:()=>({url:"https://api.themoviedb.org/3/",recommend:null}),actions:{async getRecommend({type:e,id:s}){try{const o=await R.get(`${this.url}${e}/${s}/recommendations?api_key=${I}&language=ru-RU`);this.recommend=o.data.results}catch(o){console.log("Произошла ошибка при получении рекомендованных фильмов",o)}}},getters:{getFilterRecommend(e){var s;return(s=e==null?void 0:e.recommend)==null?void 0:s.slice(0,4)}}}),te={key:0,class:"recommend"},oe={class:"container"},se={class:"recommend__title"},ne={class:"recommend__column"},ie={class:"recommend__column-img",alt:""},ce={__name:"Recommend",props:["type"],setup(e){const s=e,o=b(),n=ee();S(()=>n.getRecommend({type:s.type,id:o.params.id}));const i=m(()=>n.getFilterRecommend);return(l,_)=>{const d=x("lazy");return i.value?(a(),r("div",te,[t("div",oe,[t("h2",se,c(i.value.length==0?"Рекомендации нет":"Рекомендации"),1),t("div",ne,[(a(!0),r(D,null,F(i.value,u=>(a(),r("div",{class:"recommend__column-item",key:u.id},[g(t("img",ie,null,512),[[d,v(y)+u.poster_path]])]))),128))])])])):p("",!0)}}},ae=["src"],de={__name:"Video",props:["type","openVideo","randomVideo"],setup(e){return(s,o)=>e.randomVideo?(a(),r("div",{key:0,class:N(["video",{active:e.openVideo}])},[t("iframe",{src:`https://www.youtube.com/embed/${e.randomVideo}`,title:"YouTube video player",frameborder:"0",allowfullscreen:""},null,8,ae),t("button",{class:"video__close",onClick:o[0]||(o[0]=n=>s.$emit("closeVideo"))}," X ")],2)):p("",!0)}},re=w({id:"video",state:()=>({url:"https://api.themoviedb.org/3/",video:null}),actions:{async getVideo({type:e,id:s}){try{const o=await R.get(`${this.url}${e}/${s}/videos?api_key=${I}`);this.video=o.data.results}catch(o){console.log("Произошла ошибка при получении видео",o)}}},getters:{videoRandom(e){var s,o;if((s=e==null?void 0:e.video)!=null&&s.length){const n=Math.floor(Math.random()*(((o=e==null?void 0:e.video)==null?void 0:o.length)-1+1));return e.video[n].key}}}}),le={class:"media"},_e={class:"media__poster",alt:""},me={class:"media__block"},ue={class:"media__block-left"},ve={class:"media__block-left-title"},he={class:"media__block-left-text"},pe={class:"media__block-left-janr"},ge=t("span",null,"Смотерть трейлер",-1),ye={class:"media__block-right"},be={alt:""},fe={class:"media__block-actors"},$e=t("h2",{class:"media__block-title"},"В главных ролях",-1),ke={class:"media__block-casts"},Ve={__name:"Intro",props:["type","currentMovie"],setup(e){const s=e,o=b(),n=re(),i=m(()=>n.videoRandom),l=m(()=>new Date(s.currentMovie.release_date).getFullYear()||new Date(s.currentMovie.first_air_date).getFullYear()),_=m(()=>s.currentMovie.genres.reduce((f,$)=>f+`, ${$.name}`,""));let d=Y(!1);const u=async()=>{await n.getVideo({type:s.type,id:o.params.id}),d.value=!0,window.scrollTo({top:0,behavior:"smooth"})},B=()=>{d.value=!1,n.video=null};return(f,$)=>{const C=V("fa"),z=V("Actor"),k=x("lazy");return a(),r("div",le,[g(t("img",_e,null,512),[[k,v(y)+e.currentMovie.backdrop_path]]),t("div",me,[t("div",ue,[t("h1",ve,c(e.currentMovie.name||e.currentMovie.title),1),t("p",he,c(e.currentMovie.overview||e.currentMovie.name),1),t("p",pe,[t("span",null,c(l.value),1),t("span",null,c(_.value),1)]),t("button",{class:"media__btn",onClick:u},[h(C,{icon:"play",class:"media__btn-icon"}),ge])]),t("div",ye,[g(t("img",be,null,512),[[k,v(y)+e.currentMovie.poster_path]])]),t("div",fe,[$e,t("div",ke,[h(z,{type:e.type,id:e.currentMovie.id,count:6},null,8,["type","id"])])])]),h(de,{type:s.type,openVideo:v(d),onCloseVideo:B,randomVideo:i.value},null,8,["type","openVideo","randomVideo"])])}}},Me={class:"contentId"},Ie={__name:"ContentId",props:["type"],setup(e){const s=e,o=U(),n=b();S(()=>{o.getItemById({type:s.type,id:n.params.id})});const i=m(()=>o.movie);return(l,_)=>(a(),r("div",Me,[i.value?(a(),M(Ve,{key:0,type:e.type,currentMovie:i.value},null,8,["type","currentMovie"])):p("",!0),i.value?(a(),M(Z,{key:1,info:i.value},null,8,["info"])):p("",!0),h(ce,{type:e.type},null,8,["type"])]))}};export{Ie as _};
