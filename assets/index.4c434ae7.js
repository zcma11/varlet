import{p as G,S as M}from"./index.b2d42f2d.js";import{d as W,r as b,b as s,y as D,x as Q,C as q,T as J,o as F,l as Z,j as x,a as _,p as U,G as K,n as R,H as tt,Q as et,f as at,w as ot,c as it}from"./vendor.49f89f0d.js";import{p as nt,f as rt,g as lt,d as st,h as ct}from"./components.2481c71b.js";import{i as dt,s as H}from"./shared.506a394a.js";import{t as ut,e as I,i as vt}from"./elements.92736b4e.js";import{_ as X}from"./elevation.229458c1.js";import{R as ft}from"./index.f8492b74.js";function V(t){return["horizontal","vertical"].includes(t)}const bt={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:V},itemDirection:{type:String,default:"horizontal",validator:V},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},offsetTop:nt(G,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},O=Symbol("TABS_BIND_TAB_KEY"),j=Symbol("TABS_COUNT_TAB_KEY");function mt(){const{childProviders:t,bindChildren:o}=rt(O),{length:n}=lt(j);return{length:n,tabList:t,bindTabList:o}}const yt=W({name:"VarTabs",components:{VarSticky:M},inheritAttrs:!1,props:bt,setup(t){const o=b("0px"),n=b("0px"),m=b("0px"),y=b("0px"),i=b(!1),h=b(null),C=s(()=>t.active),z=s(()=>t.activeColor),c=s(()=>t.inactiveColor),p=s(()=>t.disabledColor),$=s(()=>t.itemDirection),{tabList:T,bindTabList:k,length:d}=mt(),g=a=>{var L,Y;const e=(L=a.name.value)!=null?L:a.index.value,{active:l,onChange:f,onClick:E}=t;(Y=t["onUpdate:active"])==null||Y.call(t,e),E==null||E(e),e!==l&&(f==null||f(e))},w=()=>T.find(({name:a})=>t.active===a.value),B=()=>T.find(({index:a})=>t.active===a.value),A=()=>{var e,l;if(d.value===0)return;const{active:a}=t;return dt(a)&&(a>d.value-1?(e=t["onUpdate:active"])==null||e.call(t,d.value-1):(l=t["onUpdate:active"])==null||l.call(t,0)),B()},u=()=>{i.value=T.length>=5},v=({element:a})=>{const e=a.value;t.layoutDirection==="horizontal"?(o.value=`${e==null?void 0:e.offsetWidth}px`,m.value=`${e==null?void 0:e.offsetLeft}px`):(n.value=`${e==null?void 0:e.offsetHeight}px`,y.value=`${e==null?void 0:e.offsetTop}px`)},S=({element:a})=>{if(!i.value)return;const e=h.value,l=a.value;if(t.layoutDirection==="horizontal"){const f=l.offsetLeft+l.offsetWidth/2-e.offsetWidth/2;I(e,{left:f,animation:H})}else{const f=l.offsetTop+l.offsetHeight/2-e.offsetHeight/2;I(e,{top:f,animation:H})}},r=()=>{const a=w()||B()||A();!a||a.disabled.value||(u(),v(a),S(a))};return k({active:C,activeColor:z,inactiveColor:c,disabledColor:p,itemDirection:$,resize:r,onTabClick:g}),D(()=>d.value,async()=>{await vt(),r()}),D(()=>t.active,r),Q(()=>window.addEventListener("resize",r)),q(()=>window.removeEventListener("resize",r)),{indicatorWidth:o,indicatorHeight:n,indicatorX:m,indicatorY:y,scrollable:i,scrollerEl:h,Transition:J,toSizeUnit:ut,resize:r}}});function ht(t,o,n,m,y,i){return F(),Z(et(t.sticky?"var-sticky":t.Transition),{"offset-top":t.sticky?t.offsetTop:null},{default:x(()=>[_("div",tt({class:["var-tabs var--box",[`var-tabs--item-${t.itemDirection}`,`var-tabs--layout-${t.layoutDirection}-padding`,t.elevation?"var-elevation--4":null,t.fixedBottom?"var-tabs--fixed-bottom":null]],style:{background:t.color}},t.$attrs),[_("div",{class:U(["var-tabs__tab-wrap",[t.scrollable?`var-tabs--layout-${t.layoutDirection}-scrollable`:null,`var-tabs--layout-${t.layoutDirection}`]]),ref:"scrollerEl"},[K(t.$slots,"default"),_("div",{class:U(["var-tabs__indicator",[`var-tabs--layout-${t.layoutDirection}-indicator`]]),style:R({width:t.layoutDirection==="horizontal"?t.indicatorWidth:t.toSizeUnit(t.indicatorSize),height:t.layoutDirection==="horizontal"?t.toSizeUnit(t.indicatorSize):t.indicatorHeight,transform:t.layoutDirection==="horizontal"?`translateX(${t.indicatorX})`:`translateY(${t.indicatorY})`,background:t.indicatorColor||t.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var N=X(yt,[["render",ht]]);N.install=function(t){t.component(N.name,N)};const Ct={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function Tt(){const{parentProvider:t,bindParent:o}=st(O),{index:n}=ct(j);if(!t||!o||!n)throw Error("<var-tab/> must in <var-tabs/>");return{index:n,tabs:t,bindTabs:o}}const St=W({name:"VarTab",directives:{Ripple:ft},props:Ct,setup(t){const o=b(null),n=s(()=>t.name),m=s(()=>t.disabled),y=s(()=>o.value),{index:i,tabs:h,bindTabs:C}=Tt(),{onTabClick:z,active:c,activeColor:p,inactiveColor:$,disabledColor:T,itemDirection:k,resize:d}=h,g={name:n,index:i,disabled:m,element:y};C(g);const w=()=>{const{disabled:u,name:v}=t;return u?T.value:c.value===v||c.value===(i==null?void 0:i.value)?p.value:$.value},B=()=>{const{disabled:u,name:v}=t;return u?"var-tab--disabled":c.value===v||c.value===(i==null?void 0:i.value)?"var-tab--active":"var-tab--inactive"},A=u=>{const{disabled:v,name:S,onClick:r}=t;v||(r==null||r(S!=null?S:i.value,u),z(g))};return D(()=>t.name,d),D(()=>t.disabled,d),{tabEl:o,active:c,activeColor:p,inactiveColor:$,itemDirection:k,computeColorStyle:w,computeColorClass:B,handleClick:A}}});function pt(t,o,n,m,y,i){const h=at("ripple");return ot((F(),it("div",{class:U(["var-tab var--box",[t.computeColorClass(),`var-tab--${t.itemDirection}`]]),ref:"tabEl",style:R({color:t.computeColorStyle()}),onClick:o[0]||(o[0]=(...C)=>t.handleClick&&t.handleClick(...C))},[K(t.$slots,"default")],6)),[[h,{disabled:t.disabled}]])}var P=X(St,[["render",pt]]);P.install=function(t){t.component(P.name,P)};export{N as T,P as a};
