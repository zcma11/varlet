import{C as E}from"./index.d7f37f26.js";import{R as y}from"./index.b50b8baf.js";import{d as N,r as P,b as r,y as T,e as w,f as g,w as V,o as v,c as I,a as m,p as f,n as b,l as B,R as j,h as D,G as $,m as K,t as L}from"./vendor.efca09d3.js";import{c as Y,f as R,b as U,g as z}from"./components.57ac5c69.js";import{_ as A}from"./elevation.f7de2a7a.js";const C=Symbol("SELECT_BIND_OPTION_KEY"),h=Symbol("SELECT_COUNT_OPTION_KEY");function ee(){const{bindChildren:e,childProviders:o}=Y(C),{length:n}=R(h);return{length:n,options:o,bindOptions:e}}function W(){const{bindParent:e,parentProvider:o}=U(C),{index:n}=z(h);if(!e||!o)throw Error("<var-option/> must in <var-select/>");return{index:n,select:o,bindSelect:e}}const G={label:{},value:{}};const M=N({name:"VarOption",directives:{Ripple:y},components:{VarCheckbox:E},props:G,setup(e){const o=P(!1),n=r(()=>o.value),c=r(()=>e.label),d=r(()=>e.value),{select:u,bindSelect:l}=W(),{wrapWidth:s,multiple:t,focusColor:S,onSelect:p}=u,k=()=>{o.value=!o.value,p(a)},_=()=>p(a),a={label:c,value:d,selected:n,sync:O=>{o.value=O}};return T([()=>e.label,()=>e.value],()=>{if(e.label==null&&e.value==null)throw Error(`Props label and value can't both be undefined
`)},{immediate:!0}),l(a),{optionSelected:o,wrapWidth:s,multiple:t,focusColor:S,handleClick:k,handleSelect:_}}}),q={class:"var-option__text var--ellipsis"};function x(e,o,n,c,d,u){const l=w("var-checkbox"),s=g("ripple");return V((v(),I("div",{class:f(["var-option var--box",[e.optionSelected?"var-option--selected-color":null]]),style:b({width:e.wrapWidth,color:e.optionSelected?e.focusColor:void 0}),onClick:o[2]||(o[2]=(...t)=>e.handleClick&&e.handleClick(...t))},[m("div",{class:f(["var-option__cover",[e.optionSelected?"var-option--selected-background":null]]),style:b({background:e.optionSelected?e.focusColor:void 0})},null,6),e.multiple?(v(),B(l,{key:0,ref:"checkbox","checked-color":e.focusColor,modelValue:e.optionSelected,"onUpdate:modelValue":o[0]||(o[0]=t=>e.optionSelected=t),onClick:o[1]||(o[1]=j(()=>{},["stop"])),onChange:e.handleSelect},null,8,["checked-color","modelValue","onChange"])):D("v-if",!0),m("div",q,[$(e.$slots,"default",{},()=>[K(L(e.label),1)])])],6)),[[s]])}var i=A(M,[["render",x]]);i.install=function(e){e.component(i.name,i)};export{i as O,ee as u};
