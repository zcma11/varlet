import{d as g,r as v,x as y,Y as h,e as c,o as l,c as p,G as j,p as S,n as B,R as T,i as d,j as k,F as C,k as x,l as $,m as V,t as E}from"./vendor.efca09d3.js";import{B as w}from"./index.5f40636a.js";import{I as N}from"./index.1f66764b.js";import{h as z,j as I,c as L,l as U}from"./shared.1184922b.js";import{b as F,t as M,c as O,s as D,d as H,e as P}from"./elements.ce092872.js";import{_}from"./elevation.f7de2a7a.js";import{C as q}from"./index.6b9659ee.js";import{d as A}from"./index.9b1139e6.js";import{a as G}from"./utils.5a4067e3.js";import"./index.b50b8baf.js";import"./index.45528475.js";import"./index.878e7f64.js";import"./components.57ac5c69.js";const R={visibilityHeight:{type:[Number,String],default:200},duration:{type:Number,default:300},right:{type:[Number,String]},bottom:{type:[Number,String]},target:{type:[String,Object]},onClick:{type:Function}};const Y=g({name:"VarBackTop",components:{VarButton:w,VarIcon:N},props:R,setup(t){const r=v(!1),s=v(null);let o;const u=e=>{var b;(b=t.onClick)==null||b.call(t,e);const i=O(o);D(o,{left:i,duration:t.duration,animation:z})},a=I(()=>{r.value=H(o)>=P(t.visibilityHeight)},200),n=()=>{const{target:e}=t;if(L(e)){const i=document.querySelector(t.target);if(!i)throw Error("[Varlet] BackTop: target element cannot found");return i}if(U(e))return e;throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object')};return y(()=>{o=t.target?n():F(s.value),o.addEventListener("scroll",a)}),h(()=>{o.removeEventListener("scroll",a)}),{show:r,backTopEl:s,toSizeUnit:M,click:u}}});function J(t,r,s,o,u,f){const a=c("var-icon"),n=c("var-button");return l(),p("div",{class:S(["var-back-top",[t.show?"var-back-top--active":null]]),ref:"backTopEl",style:B({right:t.toSizeUnit(t.right),bottom:t.toSizeUnit(t.bottom)}),onClick:r[0]||(r[0]=T((...e)=>t.click&&t.click(...e),["stop"]))},[j(t.$slots,"default",{},()=>[d(n,{type:"primary",round:"","var-back-top-cover":""},{default:k(()=>[d(a,{name:"chevron-up"})]),_:1})])],6)}var m=_(Y,[["render",J]]);m.install=function(t){t.component(m.name,m)};const K=[...Array(100).keys()],Q={name:"BackTopExample",components:{VarBackTop:m,VarCell:q},setup(){return G(A),{lists:K}}};function W(t,r,s,o,u,f){const a=c("var-cell"),n=c("var-back-top");return l(),p("div",null,[(l(!0),p(C,null,x(o.lists,e=>(l(),$(a,{key:e},{default:k(()=>[V("Scroll to bottom "+E(e),1)]),_:2},1024))),128)),d(n,{duration:300})])}var ut=_(Q,[["render",W]]);export{ut as default};
