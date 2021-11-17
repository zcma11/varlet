import{_ as S,c as l,g as j,r as ne,w as H,s as G,a as U,M as y,i as ae,b as e,t as V,m as re,C as _e,R as ie,I as se}from"./elevation.7a86b580.js";import{o as s,c as p,a as f,r as v,g as u,u as pe,b as k,d as P,e as F,f as T,t as A,w as I,h as C,n as N,i as w,v as J,F as K,j as Q,k as X,l as $,m as O,T as ce,p as Y,q as Z,s as de,x as le,y as me,z as ue,A as M,B as x,C as he,D as ve,E as Ee}from"./vendor.8a125dba.js";const ge={name:"AppMobile",props:{componentName:{type:String},language:{type:String},replace:{type:String}}},Te={class:"varlet-site-mobile"},fe={class:"varlet-site-mobile-content"},Ce=["src"];function Ne(t,n,r,o,i,_){return s(),p("div",Te,[f("div",fe,[f("iframe",{id:"mobile",src:`./mobile.html#/${r.componentName}?language=${r.language}&platform=pc&replace=${r.replace}`},null,8,Ce)])])}var ze=S(ge,[["render",Ne],["__scopeId","data-v-70803dd9"]]);const Pe={name:"AppHeader",props:{language:{type:String}},setup(){const t=v(u(l,"title")),n=v(u(l,"logo")),r=v(u(l,"pc.header.i18n")),o=v(u(l,"pc.header.github")),i=v(u(l,"pc.header.darkMode")),_=v(j()),c=v(!1),h=pe(),a=k(()=>ne(r.value)),d=m=>{const{menuName:z}=U();h.replace(`/${m}/${z}`),c.value=!1},g=m=>{_.value=m,G(l,_.value),window.localStorage.setItem("currentThemes",_.value)},b=()=>({action:"themesChange",from:"pc",data:_.value}),E=()=>{g(_.value==="darkThemes"?"themes":"darkThemes"),window.postMessage(b(),"*"),document.getElementById("mobile").contentWindow.postMessage(b(),"*")};return H((m,z)=>{z==="mobile"&&g(m)}),G(l,_.value),window.postMessage(b(),"*"),{logo:n,title:t,languages:r,nonEmptyLanguages:a,github:o,isOpenMenu:c,darkMode:i,currentThemes:_,handleLanguageChange:d,toggleTheme:E}}},be={class:"varlet-site-header"},Ae={class:"varlet-site-header__lead"},Ie=["src"],Se={key:1,class:"varlet-site-header__title"},Le={class:"varlet-site-header__tail"},Ve=["href"];function Oe(t,n,r,o,i,_){const c=P("var-site-icon"),h=P("var-site-cell"),a=F("ripple");return s(),p("div",be,[f("div",Ae,[o.logo?(s(),p("img",{key:0,class:"varlet-site-header__logo",src:o.logo,alt:"logo"},null,8,Ie)):T("v-if",!0),o.title?(s(),p("div",Se,A(o.title),1)):T("v-if",!0)]),f("div",Le,[o.github?I((s(),p("a",{key:0,class:"varlet-site-header__link",target:"_blank",href:o.github},[C(c,{name:"github",size:28})],8,Ve)),[[a]]):T("v-if",!0),o.darkMode?I((s(),p("div",{key:1,class:"varlet-site-header__theme",onClick:n[0]||(n[0]=(...d)=>o.toggleTheme&&o.toggleTheme(...d))},[C(c,{size:"26px",name:o.currentThemes==="themes"?"white-balance-sunny":"weather-night",style:N({marginBottom:o.currentThemes==="darkThemes"&&"2px",marginTop:o.currentThemes==="themes"&&"2px"})},null,8,["name","style"])],512)),[[a]]):T("v-if",!0),o.languages?(s(),p("div",{key:2,class:"varlet-site-header__language",onMouseenter:n[1]||(n[1]=d=>o.isOpenMenu=!0),onMouseleave:n[2]||(n[2]=d=>o.isOpenMenu=!1)},[C(c,{name:"translate",size:"26px"}),C(c,{name:"chevron-down"}),C(ce,{name:"fade"},{default:w(()=>[I(f("div",{class:"varlet-site-header__language-list var-site-elevation--5",style:N({pointerEvents:o.isOpenMenu?"auto":"none"})},[(s(!0),p(K,null,Q(o.nonEmptyLanguages,(d,g)=>I((s(),X(h,{key:g,class:O({"varlet-site-header__language-list--active":r.language===g}),onClick:b=>o.handleLanguageChange(g)},{default:w(()=>[$(A(d),1)]),_:2},1032,["class","onClick"])),[[a]])),128))],4),[[J,o.isOpenMenu]])]),_:1})],32)):T("v-if",!0)])])}var De=S(Pe,[["render",Oe],["__scopeId","data-v-19f2c6ce"]]);const Re={name:"AppSidebar",props:{menu:{type:Array},menuName:{type:String},language:{type:String}},emits:["change"],setup(t,{emit:n}){const r=Y(y),o=v(u(l,"themes"));return{menuTypes:r,themes:o,changeRoute:_=>{_.type===y.TITLE||t.menuName===_.doc||n("change",_)}}}},je={class:"varlet-site-sidebar var-elevation--3"},Ue={key:0,class:"varlet-site-sidebar__item--title"},ye={key:1};function ke(t,n,r,o,i,_){const c=P("var-site-cell"),h=F("ripple");return s(),p("div",je,[(s(!0),p(K,null,Q(r.menu,(a,d)=>I((s(),X(c,{class:O(["varlet-site-sidebar__item",{"varlet-site-sidebar__item--active":a.doc===r.menuName,"varlet-site-sidebar__link":a.type!==o.menuTypes.TITLE,"varlet-site-sidebar__title":a.type===o.menuTypes.TITLE}]),id:a.doc,key:d,onClick:g=>o.changeRoute(a)},{default:w(()=>[a.type===o.menuTypes.TITLE?(s(),p("span",Ue,A(a.text[r.language]),1)):(s(),p("span",ye,A(a.text[r.language]),1))]),_:2},1032,["id","class","onClick"])),[[h,{touchmoveForbid:!1,disabled:a.type===o.menuTypes.TITLE,color:o.themes["color-side-bar"]}]])),128))])}var we=S(Re,[["render",ke],["__scopeId","data-v-31a9a9f5"]]);const $e=Z({components:{AppMobile:ze,AppHeader:De,AppSidebar:we},setup(){const t=u(l,"defaultLanguage"),n=v(u(l,"pc.menu",[])),r=v(u(l,"useMobile")),o=u(l,"mobile.redirect"),i=v(""),_=v(null),c=v(""),h=v(null),a=de(),d=E=>{const m=n.value.find(z=>z.doc===E);return(m==null?void 0:m.type)===y.COMPONENT?E:o.slice(1)},g=()=>{const{language:E,menuName:m}=U();if(ae()&&r.value){window.location.href=`./mobile.html#/${m}?language=${E||t}&platform=mobile`;return}ue(()=>{const z=document.querySelector(".varlet-site-sidebar").getElementsByClassName("var-site-cell"),q=n.value.findIndex(oe=>oe.doc===m);q!==-1&&z[q].scrollIntoView({block:"center",inline:"start"})})},b=E=>{h.value.scrollTop=0,_.value=d(E.doc),c.value=E.doc};return le(()=>g()),me(()=>a.path,()=>{const{language:E,menuName:m}=U();!E||!m||(_.value=d(m),c.value=m,i.value=E,document.title=u(l,"pc.title")[E])},{immediate:!0}),{menu:n,language:i,componentName:_,menuName:c,doc:h,useMobile:r,handleSidebarChange:b}}}),Me={class:"varlet-site"},Be={class:"varlet-site-content"};function We(t,n,r,o,i,_){const c=P("app-header"),h=P("app-sidebar"),a=P("router-view"),d=P("app-mobile");return s(),p("div",Me,[C(c,{language:t.language},null,8,["language"]),f("div",Be,[C(h,{language:t.language,menu:t.menu,"menu-name":t.menuName,onChange:t.handleSidebarChange},null,8,["language","menu","menu-name","onChange"]),f("div",{class:O(["varlet-site-doc-container",[!t.useMobile&&"varlet-site-doc-container--pc-only"]]),ref:"doc"},[C(a)],2),I(C(d,{"component-name":t.componentName,language:t.language,replace:t.menuName},null,8,["component-name","language","replace"]),[[J,t.useMobile]])])])}var qe=S($e,[["render",We]]),ee=[{path:"/en-US/action-sheet",component:()=>e(()=>import("./en-US.87f0240d.js"),["assets/en-US.87f0240d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/action-sheet",component:()=>e(()=>import("./zh-CN.d3ad74ec.js"),["assets/zh-CN.d3ad74ec.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/app-bar",component:()=>e(()=>import("./en-US.264b9a08.js"),["assets/en-US.264b9a08.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/app-bar",component:()=>e(()=>import("./zh-CN.b5d3c78d.js"),["assets/zh-CN.b5d3c78d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/back-top",component:()=>e(()=>import("./en-US.a6204718.js"),["assets/en-US.a6204718.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/back-top",component:()=>e(()=>import("./zh-CN.8f66317b.js"),["assets/zh-CN.8f66317b.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/badge",component:()=>e(()=>import("./en-US.0fdbf6f9.js"),["assets/en-US.0fdbf6f9.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/badge",component:()=>e(()=>import("./zh-CN.01665936.js"),["assets/zh-CN.01665936.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/button",component:()=>e(()=>import("./en-US.e5edc6c5.js"),["assets/en-US.e5edc6c5.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/button",component:()=>e(()=>import("./zh-CN.21eb7c01.js"),["assets/zh-CN.21eb7c01.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/card",component:()=>e(()=>import("./en-US.da36d526.js"),["assets/en-US.da36d526.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/card",component:()=>e(()=>import("./zh-CN.de40b00e.js"),["assets/zh-CN.de40b00e.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/cell",component:()=>e(()=>import("./en-US.a1b043e9.js"),["assets/en-US.a1b043e9.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/cell",component:()=>e(()=>import("./zh-CN.a03774e3.js"),["assets/zh-CN.a03774e3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/checkbox",component:()=>e(()=>import("./zh-CN.30a2af22.js"),["assets/zh-CN.30a2af22.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/checkbox-group",component:()=>e(()=>import("./en-US.c24e20b4.js"),["assets/en-US.c24e20b4.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/checkbox-group",component:()=>e(()=>import("./zh-CN.1e129228.js"),["assets/zh-CN.1e129228.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/chip",component:()=>e(()=>import("./en-US.53189e84.js"),["assets/en-US.53189e84.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/chip",component:()=>e(()=>import("./zh-CN.c1ee7b9c.js"),["assets/zh-CN.c1ee7b9c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/col",component:()=>e(()=>import("./zh-CN.2a81d868.js"),["assets/zh-CN.2a81d868.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/collapse",component:()=>e(()=>import("./en-US.deaa5d33.js"),["assets/en-US.deaa5d33.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/collapse",component:()=>e(()=>import("./zh-CN.2501f262.js"),["assets/zh-CN.2501f262.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/collapse-item",component:()=>e(()=>import("./zh-CN.a7fe4ff3.js"),["assets/zh-CN.a7fe4ff3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/countdown",component:()=>e(()=>import("./en-US.30aa648f.js"),["assets/en-US.30aa648f.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/countdown",component:()=>e(()=>import("./zh-CN.a084ca8c.js"),["assets/zh-CN.a084ca8c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/counter",component:()=>e(()=>import("./en-US.973d7267.js"),["assets/en-US.973d7267.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/counter",component:()=>e(()=>import("./zh-CN.c7b43047.js"),["assets/zh-CN.c7b43047.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/date-picker",component:()=>e(()=>import("./en-US.6e938908.js"),["assets/en-US.6e938908.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/date-picker",component:()=>e(()=>import("./zh-CN.513758d8.js"),["assets/zh-CN.513758d8.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/dialog",component:()=>e(()=>import("./en-US.91e2d724.js"),["assets/en-US.91e2d724.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/dialog",component:()=>e(()=>import("./zh-CN.ea2e2ba2.js"),["assets/zh-CN.ea2e2ba2.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/divider",component:()=>e(()=>import("./en-US.9b7b677c.js"),["assets/en-US.9b7b677c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/divider",component:()=>e(()=>import("./zh-CN.00afece1.js"),["assets/zh-CN.00afece1.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/form",component:()=>e(()=>import("./en-US.da54bccb.js"),["assets/en-US.da54bccb.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/form",component:()=>e(()=>import("./zh-CN.d76ae0ac.js"),["assets/zh-CN.d76ae0ac.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/form-details",component:()=>e(()=>import("./en-US.90190d54.js"),["assets/en-US.90190d54.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/form-details",component:()=>e(()=>import("./zh-CN.2774e357.js"),["assets/zh-CN.2774e357.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/icon",component:()=>e(()=>import("./en-US.28df7550.js"),["assets/en-US.28df7550.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/icon",component:()=>e(()=>import("./zh-CN.cb1793a7.js"),["assets/zh-CN.cb1793a7.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/image",component:()=>e(()=>import("./en-US.20d5d290.js"),["assets/en-US.20d5d290.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/image",component:()=>e(()=>import("./zh-CN.2cbac2b2.js"),["assets/zh-CN.2cbac2b2.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/image-preview",component:()=>e(()=>import("./en-US.9a72672f.js"),["assets/en-US.9a72672f.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/image-preview",component:()=>e(()=>import("./zh-CN.7fdc2245.js"),["assets/zh-CN.7fdc2245.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/index-anchor",component:()=>e(()=>import("./zh-CN.a515de6c.js"),["assets/zh-CN.a515de6c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/index-bar",component:()=>e(()=>import("./en-US.7933157a.js"),["assets/en-US.7933157a.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/index-bar",component:()=>e(()=>import("./zh-CN.d86a1e09.js"),["assets/zh-CN.d86a1e09.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/input",component:()=>e(()=>import("./en-US.9c81daa2.js"),["assets/en-US.9c81daa2.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/input",component:()=>e(()=>import("./zh-CN.a50d808c.js"),["assets/zh-CN.a50d808c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/lazy",component:()=>e(()=>import("./en-US.f4a958ba.js"),["assets/en-US.f4a958ba.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/lazy",component:()=>e(()=>import("./zh-CN.90afb142.js"),["assets/zh-CN.90afb142.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/list",component:()=>e(()=>import("./en-US.95319a8f.js"),["assets/en-US.95319a8f.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/list",component:()=>e(()=>import("./zh-CN.f84a62b5.js"),["assets/zh-CN.f84a62b5.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/loading",component:()=>e(()=>import("./en-US.1539fdfa.js"),["assets/en-US.1539fdfa.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/loading",component:()=>e(()=>import("./zh-CN.939ca597.js"),["assets/zh-CN.939ca597.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/locale",component:()=>e(()=>import("./en-US.a206f8dc.js"),["assets/en-US.a206f8dc.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/locale",component:()=>e(()=>import("./zh-CN.aa869090.js"),["assets/zh-CN.aa869090.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/menu",component:()=>e(()=>import("./en-US.07fc4b8d.js"),["assets/en-US.07fc4b8d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/menu",component:()=>e(()=>import("./zh-CN.30c0dbd5.js"),["assets/zh-CN.30c0dbd5.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/option",component:()=>e(()=>import("./zh-CN.f9b03cdf.js"),["assets/zh-CN.f9b03cdf.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/pagination",component:()=>e(()=>import("./en-US.3de87d2c.js"),["assets/en-US.3de87d2c.js","assets/Disabled.17611727.js","assets/Disabled.1cd4e284.css","assets/Pagination.26135d5e.js","assets/Pagination.1656f347.css","assets/index.e201f887.js","assets/index.e01dd283.css","assets/vendor.8a125dba.js","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/zIndex.2c847fc6.js","assets/index.789f7251.js","assets/components.581beddd.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/index.23ced9c1.js","assets/index.9aa8f4dd.css","assets/index.7c2ed277.js","assets/index.e8f58f8b.css","assets/index.76c31e1f.js","assets/index.d070c5b9.css","assets/index.d22b8661.js","assets/index.ea17957f.css","assets/provide.92646073.js","assets/provide.77af86eb.css","assets/en-US.51e06fb5.js","assets/utils.faa57f31.js","assets/index.ecbc8da2.js"])},{path:"/zh-CN/pagination",component:()=>e(()=>import("./zh-CN.a65907ca.js"),["assets/zh-CN.a65907ca.js","assets/Disabled.17611727.js","assets/Disabled.1cd4e284.css","assets/Pagination.26135d5e.js","assets/Pagination.1656f347.css","assets/index.e201f887.js","assets/index.e01dd283.css","assets/vendor.8a125dba.js","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/zIndex.2c847fc6.js","assets/index.789f7251.js","assets/components.581beddd.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/index.23ced9c1.js","assets/index.9aa8f4dd.css","assets/index.7c2ed277.js","assets/index.e8f58f8b.css","assets/index.76c31e1f.js","assets/index.d070c5b9.css","assets/index.d22b8661.js","assets/index.ea17957f.css","assets/provide.92646073.js","assets/provide.77af86eb.css","assets/en-US.51e06fb5.js","assets/utils.faa57f31.js","assets/index.ecbc8da2.js"])},{path:"/en-US/picker",component:()=>e(()=>import("./en-US.54f74f4c.js"),["assets/en-US.54f74f4c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/picker",component:()=>e(()=>import("./zh-CN.b1560db0.js"),["assets/zh-CN.b1560db0.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/popup",component:()=>e(()=>import("./en-US.d6b37804.js"),["assets/en-US.d6b37804.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/popup",component:()=>e(()=>import("./zh-CN.a131fcf8.js"),["assets/zh-CN.a131fcf8.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/progress",component:()=>e(()=>import("./en-US.775a0fcf.js"),["assets/en-US.775a0fcf.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/progress",component:()=>e(()=>import("./zh-CN.7841fa43.js"),["assets/zh-CN.7841fa43.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/pull-refresh",component:()=>e(()=>import("./en-US.fd2a7935.js"),["assets/en-US.fd2a7935.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/pull-refresh",component:()=>e(()=>import("./zh-CN.cc65f0b3.js"),["assets/zh-CN.cc65f0b3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/radio",component:()=>e(()=>import("./zh-CN.e4ab4a17.js"),["assets/zh-CN.e4ab4a17.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/radio-group",component:()=>e(()=>import("./en-US.c52d4d51.js"),["assets/en-US.c52d4d51.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/radio-group",component:()=>e(()=>import("./zh-CN.84364bbf.js"),["assets/zh-CN.84364bbf.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/rate",component:()=>e(()=>import("./en-US.096146bf.js"),["assets/en-US.096146bf.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/rate",component:()=>e(()=>import("./zh-CN.e9f62009.js"),["assets/zh-CN.e9f62009.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/ripple",component:()=>e(()=>import("./en-US.151744fc.js"),["assets/en-US.151744fc.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/ripple",component:()=>e(()=>import("./zh-CN.53a46693.js"),["assets/zh-CN.53a46693.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/row",component:()=>e(()=>import("./en-US.48540594.js"),["assets/en-US.48540594.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/row",component:()=>e(()=>import("./zh-CN.040e66c1.js"),["assets/zh-CN.040e66c1.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/select",component:()=>e(()=>import("./en-US.c5acf9b0.js"),["assets/en-US.c5acf9b0.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/select",component:()=>e(()=>import("./zh-CN.3a42dbea.js"),["assets/zh-CN.3a42dbea.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/skeleton",component:()=>e(()=>import("./en-US.335c9322.js"),["assets/en-US.335c9322.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/skeleton",component:()=>e(()=>import("./zh-CN.09243b01.js"),["assets/zh-CN.09243b01.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/slider",component:()=>e(()=>import("./en-US.2a71b676.js"),["assets/en-US.2a71b676.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/slider",component:()=>e(()=>import("./zh-CN.5f0d593e.js"),["assets/zh-CN.5f0d593e.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/snackbar",component:()=>e(()=>import("./en-US.076ae939.js"),["assets/en-US.076ae939.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/snackbar",component:()=>e(()=>import("./zh-CN.6997bd18.js"),["assets/zh-CN.6997bd18.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/space",component:()=>e(()=>import("./en-US.9316eb70.js"),["assets/en-US.9316eb70.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/space",component:()=>e(()=>import("./zh-CN.a2d62347.js"),["assets/zh-CN.a2d62347.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/step",component:()=>e(()=>import("./zh-CN.e97d7fe8.js"),["assets/zh-CN.e97d7fe8.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/steps",component:()=>e(()=>import("./en-US.30437a3d.js"),["assets/en-US.30437a3d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/steps",component:()=>e(()=>import("./zh-CN.2906122d.js"),["assets/zh-CN.2906122d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/sticky",component:()=>e(()=>import("./en-US.e56182a4.js"),["assets/en-US.e56182a4.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/sticky",component:()=>e(()=>import("./zh-CN.9ce9f01d.js"),["assets/zh-CN.9ce9f01d.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/style-provider",component:()=>e(()=>import("./en-US.2900b25c.js"),["assets/en-US.2900b25c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/style-provider",component:()=>e(()=>import("./zh-CN.d825bb79.js"),["assets/zh-CN.d825bb79.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/styles",component:()=>e(()=>import("./en-US.b2ff7d3a.js"),["assets/en-US.b2ff7d3a.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/styles",component:()=>e(()=>import("./zh-CN.fb9f2ed9.js"),["assets/zh-CN.fb9f2ed9.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/swipe",component:()=>e(()=>import("./en-US.e75996a8.js"),["assets/en-US.e75996a8.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/swipe",component:()=>e(()=>import("./zh-CN.ae201c8f.js"),["assets/zh-CN.ae201c8f.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/swipe-item",component:()=>e(()=>import("./zh-CN.8f2b0366.js"),["assets/zh-CN.8f2b0366.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/switch",component:()=>e(()=>import("./en-US.12a530e6.js"),["assets/en-US.12a530e6.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/switch",component:()=>e(()=>import("./zh-CN.19037d0a.js"),["assets/zh-CN.19037d0a.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/tab",component:()=>e(()=>import("./zh-CN.d3403215.js"),["assets/zh-CN.d3403215.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/tab-item",component:()=>e(()=>import("./zh-CN.57facdc6.js"),["assets/zh-CN.57facdc6.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/table",component:()=>e(()=>import("./en-US.7fdf2433.js"),["assets/en-US.7fdf2433.js","assets/FooterSlots.b7f98f2a.js","assets/FooterSlots.efbf154b.css","assets/index.4b48529f.js","assets/index.9a65c9e1.css","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js","assets/index.f25f400e.js","assets/Pagination.26135d5e.js","assets/Pagination.1656f347.css","assets/index.e201f887.js","assets/index.e01dd283.css","assets/zIndex.2c847fc6.js","assets/index.789f7251.js","assets/components.581beddd.js","assets/index.23ced9c1.js","assets/index.9aa8f4dd.css","assets/index.7c2ed277.js","assets/index.e8f58f8b.css","assets/index.76c31e1f.js","assets/index.d070c5b9.css","assets/index.d22b8661.js","assets/index.ea17957f.css","assets/provide.92646073.js","assets/provide.77af86eb.css","assets/en-US.51e06fb5.js","assets/AppType.8af12281.js","assets/AppType.050268da.css","assets/utils.faa57f31.js"])},{path:"/zh-CN/table",component:()=>e(()=>import("./zh-CN.7e5aaa12.js"),["assets/zh-CN.7e5aaa12.js","assets/FooterSlots.b7f98f2a.js","assets/FooterSlots.efbf154b.css","assets/index.4b48529f.js","assets/index.9a65c9e1.css","assets/elements.524bf92a.js","assets/shared.cba5a5a3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js","assets/index.f25f400e.js","assets/Pagination.26135d5e.js","assets/Pagination.1656f347.css","assets/index.e201f887.js","assets/index.e01dd283.css","assets/zIndex.2c847fc6.js","assets/index.789f7251.js","assets/components.581beddd.js","assets/index.23ced9c1.js","assets/index.9aa8f4dd.css","assets/index.7c2ed277.js","assets/index.e8f58f8b.css","assets/index.76c31e1f.js","assets/index.d070c5b9.css","assets/index.d22b8661.js","assets/index.ea17957f.css","assets/provide.92646073.js","assets/provide.77af86eb.css","assets/en-US.51e06fb5.js","assets/AppType.8af12281.js","assets/AppType.050268da.css","assets/utils.faa57f31.js"])},{path:"/en-US/tabs",component:()=>e(()=>import("./en-US.62944c72.js"),["assets/en-US.62944c72.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/tabs",component:()=>e(()=>import("./zh-CN.f386af82.js"),["assets/zh-CN.f386af82.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/tabs-items",component:()=>e(()=>import("./zh-CN.c1b48ec0.js"),["assets/zh-CN.c1b48ec0.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/time-picker",component:()=>e(()=>import("./en-US.ac80a778.js"),["assets/en-US.ac80a778.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/time-picker",component:()=>e(()=>import("./zh-CN.6f42d2cc.js"),["assets/zh-CN.6f42d2cc.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/uploader",component:()=>e(()=>import("./en-US.2cf600a8.js"),["assets/en-US.2cf600a8.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/uploader",component:()=>e(()=>import("./zh-CN.c05c7112.js"),["assets/zh-CN.c05c7112.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.en-US.d9d43673.js"),["assets/browserAdaptation.en-US.d9d43673.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/browserAdaptation",component:()=>e(()=>import("./browserAdaptation.zh-CN.a4f9ab59.js"),["assets/browserAdaptation.zh-CN.a4f9ab59.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/cli",component:()=>e(()=>import("./cli.en-US.c970960e.js"),["assets/cli.en-US.c970960e.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/cli",component:()=>e(()=>import("./cli.zh-CN.615813d9.js"),["assets/cli.zh-CN.615813d9.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/customTheme",component:()=>e(()=>import("./customTheme.en-US.5394b9a3.js"),["assets/customTheme.en-US.5394b9a3.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/customTheme",component:()=>e(()=>import("./customTheme.zh-CN.9a385530.js"),["assets/customTheme.zh-CN.9a385530.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/home",component:()=>e(()=>import("./home.en-US.f7899223.js"),["assets/home.en-US.f7899223.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/home",component:()=>e(()=>import("./home.zh-CN.e931a4f5.js"),["assets/home.zh-CN.e931a4f5.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/ide",component:()=>e(()=>import("./ide.en-US.fff9b514.js"),["assets/ide.en-US.fff9b514.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/ide",component:()=>e(()=>import("./ide.zh-CN.925bfc5b.js"),["assets/ide.zh-CN.925bfc5b.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/importOnDemand",component:()=>e(()=>import("./importOnDemand.en-US.775d21fb.js"),["assets/importOnDemand.en-US.775d21fb.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/importOnDemand",component:()=>e(()=>import("./importOnDemand.zh-CN.445e4a2c.js"),["assets/importOnDemand.zh-CN.445e4a2c.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.en-US.bd2b3b17.js"),["assets/openSourceGuide.en-US.bd2b3b17.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/openSourceGuide",component:()=>e(()=>import("./openSourceGuide.zh-CN.2b36e382.js"),["assets/openSourceGuide.zh-CN.2b36e382.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/en-US/quickstart",component:()=>e(()=>import("./quickstart.en-US.384676fb.js"),["assets/quickstart.en-US.384676fb.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])},{path:"/zh-CN/quickstart",component:()=>e(()=>import("./quickstart.zh-CN.78092678.js"),["assets/quickstart.zh-CN.78092678.js","assets/elevation.7a86b580.js","assets/elevation.5b9a1d5b.css","assets/vendor.8a125dba.js"])}];function He(t){return["linear","circle"].includes(t)}const Ge={mode:{type:String,default:"linear",validator:He},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:Number,default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}};const Fe=Z({name:"VarSiteProgress",inheritAttrs:!1,props:Ge,setup(t){const n=k(()=>{const o=V(t.value),i=o>100?100:o,_=o>100?100:Math.round(o);return{width:`${i}%`,roundValue:`${_}%`}}),r=k(()=>{const{size:o,lineWidth:i,value:_}=t,c=`0 0 ${o} ${o}`,h=V(_)>100?100:Math.round(V(_)),a=(o-V(i))/2,d=2*Math.PI*a,g=`${h/100*d}, ${d}`;return{viewBox:c,radius:a,strokeDasharray:g,perimeter:d,roundValue:`${h}%`}});return{linearProps:n,circleProps:r}}}),Je={class:"var-site-progress"},Ke={key:0,class:"var-site-progress-linear"},Qe=["viewBox"],Xe=["cx","cy","r","stroke-width"],Ye=["cx","cy","r","stroke-width"];function Ze(t,n,r,o,i,_){return s(),p("div",Je,[t.mode==="linear"?(s(),p("div",Ke,[f("div",M({class:"var-site-progress-linear__block",style:{height:`${t.lineWidth}px`}},t.$attrs),[t.track?(s(),p("div",{key:0,class:"var-site-progress-linear__background",style:N({background:t.trackColor})},null,4)):T("v-if",!0),f("div",{class:O(`var-site-progress-linear__certain${t.ripple?" var-site-progress-linear__ripple":""}`),style:N({background:t.color,width:t.linearProps.width})},null,6)],16),t.label?(s(),p("div",M({key:0,class:"var-site-progress-linear__label"},t.$attrs),[x(t.$slots,"default",{},()=>[$(A(t.linearProps.roundValue),1)])],16)):T("v-if",!0)])):T("v-if",!0),t.mode==="circle"?(s(),p("div",{key:1,class:"var-site-progress-circle",style:N({width:`${t.size}px`,height:`${t.size}px`})},[(s(),p("svg",{class:"var-site-progress-circle__svg",style:N({transform:`rotate(${t.rotate-90}deg)`}),viewBox:t.circleProps.viewBox},[t.track?(s(),p("circle",{key:0,class:"var-site-progress-circle__background",cx:t.size/2,cy:t.size/2,r:t.circleProps.radius,fill:"transparent","stroke-width":t.lineWidth,style:N({strokeDasharray:t.circleProps.perimeter,stroke:t.trackColor})},null,12,Xe)):T("v-if",!0),f("circle",{class:"var-site-progress-circle__certain",cx:t.size/2,cy:t.size/2,r:t.circleProps.radius,fill:"transparent","stroke-width":t.lineWidth,style:N({strokeDasharray:t.circleProps.strokeDasharray,stroke:t.color})},null,12,Ye)],12,Qe)),t.label?(s(),p("div",M({key:0,class:"var-site-progress-circle__label"},t.$attrs),[x(t.$slots,"default",{},()=>[$(A(t.circleProps.roundValue),1)])],16)):T("v-if",!0)],4)):T("v-if",!0)])}var D=S(Fe,[["render",Ze]]);D.install=function(t){t.component(D.name,D)};function B(t){return u(l,`${t!=null?t:j()}.color-progress`)}function R(t){return u(l,`${t!=null?t:j()}.color-progress-track`)}function xe(){let t,n;const r=R(),o=B(),i=Y({style:{position:"fixed",width:"100%",left:0,top:0,zIndex:10086},trackColor:r,color:o,lineWidth:3,value:0});H(a=>{n=a,i.trackColor=R(a),i.color=i.value===100?R(a):B(a)},!1);const _=()=>{t=window.setTimeout(()=>{if(i.value>=95)return;let a=Math.random();i.value<70&&(a=Math.round(5*Math.random())),i.value+=a,_()},200)},c=()=>{i.value=0,setTimeout(()=>i.color=B(n),200),_()},h=()=>{i.value=100,setTimeout(()=>i.color=R(n),300),window.clearTimeout(t)};return re(D,i),{start:c,end:h}}const et=u(l,"defaultLanguage"),te=u(l,"pc.redirect"),tt=u(l,"mobile.redirect");te&&ee.push({path:"/:pathMatch(.*)*",redirect:`/${et}${te}`});const L=he({history:ve(),scrollBehavior:()=>({top:0}),routes:ee});let W=!0;const{start:ot,end:nt}=xe();L.beforeEach((t,n)=>{if(t.path===n.path)return!1;W=!1,setTimeout(()=>!W&&ot(),200),window._hmt&&t.path&&window._hmt.push(["_trackPageview",`/#${t.fullPath}`])});L.afterEach(()=>{W=!0,nt()});Object.defineProperty(window,"onMobileRouteChange",{value:(t,n,r)=>{if(t===tt){L.replace(`/${n}/${r}`);return}L.replace(`/${n}${t}`)}});Object.defineProperty(window,"scrollToMenu",{value:t=>{setTimeout(()=>{const n=document.getElementById(t),r=n.parentNode;r.scrollTo({top:n.offsetTop-r.offsetHeight/2})})}});Ee(qe).use(L).use(_e).use(ie).use(se).mount("#app");
