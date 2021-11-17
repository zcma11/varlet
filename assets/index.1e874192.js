import{l as C}from"./elements.524bf92a.js";import{q as j,G as x,p as F,r as S,H as b,d as s,o as w,c as R,h as r,i as l,F as E,l as i,t as p}from"./vendor.8a125dba.js";import{R as P}from"./index.e04383f4.js";import{S as U}from"./index.f15e123b.js";import{B}from"./index.649744eb.js";import{A as N}from"./AppType.8af12281.js";import{c as h}from"./index.789f7251.js";import{w as z,b as D,g as A,d as L}from"./utils.faa57f31.js";import{u as O,a as T,_ as q,b as G,c as H}from"./en-US.51e06fb5.js";import{_ as K}from"./elevation.7a86b580.js";import"./shared.cba5a5a3.js";import"./index.7c2ed277.js";import"./provide.92646073.js";import"./components.581beddd.js";import"./index.23ced9c1.js";import"./index.860f6244.js";const n=j({name:"VarStyleProvider",props:{styleVars:{type:Object,default:()=>({})}},setup(t,{slots:o}){return()=>{var a;return x("div",{class:"var-style-provider",style:C(t.styleVars)},(a=o.default)==null?void 0:a.call(o))}}}),y=[];function c(t={}){y.forEach(a=>document.documentElement.style.removeProperty(a)),y.length=0;const o=C(t);Object.entries(o).forEach(([a,e])=>{document.documentElement.style.setProperty(a,e),y.push(a)})}c.Component=n;n.install=function(t){t.component(n.name,n)};c.install=function(t){t.component(n.name,n)};var I={componentCall:"\u7EC4\u4EF6\u8C03\u7528",functionCall:"\u51FD\u6570\u8C03\u7528",toggleTheme:"\u5207\u6362\u6837\u5F0F\u53D8\u91CF",toggleRootTheme:"\u5207\u6362\u6839\u8282\u70B9\u6837\u5F0F\u53D8\u91CF"},J={componentCall:"Component Call",functionCall:"Function Call",toggleTheme:"Toggle Theme",toggleRootTheme:"Toggle Root Theme"};const{add:V,use:M,pack:Q,packs:fe,merge:ve}=O(),W=t=>{H(t),M(t)};T("zh-CN",q);T("en-US",G);V("zh-CN",I);V("en-US",J);const X={name:"StyleProviderExample",components:{VarStyleProvider:c.Component,VarRate:P,VarSwitch:U,VarButton:B,AppType:N},setup(){const t=F({score:5,license:!0}),o=S(null),a={"--rate-primary-color":"var(--color-success)","--button-primary-color":"var(--color-success)","--switch-handle-active-background":"var(--color-success)","--switch-track-active-background":"var(--color-success)"},e=()=>{o.value=o.value?null:a};let m=null;const _={"--color-primary":"#3f51b5"},u=()=>{m=m?null:_,c(m)};z(W);const d=h.touchmoveForbid;return D(f=>{f==="pc"&&(h.touchmoveForbid=!1)}),b(()=>{h.touchmoveForbid=d}),b(()=>{c(A()==="darkThemes"?L:null)}),{pack:Q,state:t,styleVars:o,toggleTheme:e,toggleRootTheme:u}}};function Y(t,o,a,e,m,_){const u=s("app-type"),d=s("var-rate"),f=s("var-switch"),g=s("var-button"),k=s("var-style-provider");return w(),R(E,null,[r(u,null,{default:l(()=>[i(p(e.pack.componentCall),1)]),_:1}),r(k,{"style-vars":e.styleVars},{default:l(()=>[r(d,{modelValue:e.state.score,"onUpdate:modelValue":o[0]||(o[0]=v=>e.state.score=v)},null,8,["modelValue"]),r(f,{modelValue:e.state.license,"onUpdate:modelValue":o[1]||(o[1]=v=>e.state.license=v)},null,8,["modelValue"]),r(g,{style:{"margin-top":"10px"},type:"primary",block:"",onClick:e.toggleTheme},{default:l(()=>[i(p(e.pack.toggleTheme),1)]),_:1},8,["onClick"])]),_:1},8,["style-vars"]),r(u,null,{default:l(()=>[i(p(e.pack.functionCall),1)]),_:1}),r(g,{type:"primary",block:"",onClick:e.toggleRootTheme},{default:l(()=>[i(p(e.pack.toggleRootTheme),1)]),_:1},8,["onClick"])],64)}var he=K(X,[["render",Y]]);export{he as default};
