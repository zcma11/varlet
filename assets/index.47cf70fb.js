import{F as C,u as U}from"./provide.92d12d40.js";import{c as H,d as J,b as G,e as L,f as Q}from"./components.0481fe69.js";import{_ as E}from"./IconSfc.fde87e76.js";import{q as p,b as w,y as T,d as z,o as B,c as N,a as A,O as $,m as k,h as D,z as j,r as F,e as X,i as Z,n as x,P as ee}from"./vendor.85536c59.js";import{R as ae}from"./index.b3b1e3ce.js";import{I as K}from"./index.5f8c0dc7.js";function oe(e){return["horizontal","vertical"].includes(e)}const re={modelValue:{default:void 0},direction:{type:String,default:"horizontal",validator:oe},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},W=Symbol("RADIO_GROUP_BIND_RADIO_KEY"),Y=Symbol("RADIO_GROUP_COUNT_RADIO_KEY");function ne(){const{bindChildren:e,childProviders:o}=H(W),{length:s}=J(Y);return{length:s,radios:o,bindRadios:e}}const ie=p({name:"VarRadioGroup",components:{[C.name]:C},props:re,setup(e){const{length:o,radios:s,bindRadios:h}=ne(),{bindForm:n}=U(),{errorMessage:t,validateWithTrigger:a,validate:c,resetValidation:u}=G(),y=w(()=>t.value),O=i=>{j(()=>{const{validateTrigger:v,rules:f,modelValue:b}=e;a(v,i,f,b)})},g=()=>s.forEach(({sync:i})=>i(e.modelValue)),I=i=>{var v,f;(v=e["onUpdate:modelValue"])==null||v.call(e,i),(f=e.onChange)==null||f.call(e,i),O("onChange")},_=()=>c(e.rules,e.modelValue),V=()=>{var i;(i=e["onUpdate:modelValue"])==null||i.call(e,void 0),u()};T(()=>e.modelValue,g),T(()=>o.value,g);const R={onToggle:I,validate:_,reset:V,resetValidation:u,errorMessage:y};return n==null||n(R),h(R),{errorMessage:t,reset:V,validate:_,resetValidation:u}}}),le={class:"var-radio-group__wrap"};function de(e,o,s,h,n,t){const a=z("var-form-details");return B(),N("div",le,[A("div",{class:k(["var-radio-group",[`var-radio-group--${e.direction}`]])},[$(e.$slots,"default")],2),D(a,{"error-message":e.errorMessage},null,8,["error-message"])])}var M=E(ie,[["render",de]]);M.install=function(e){e.component(M.name,M)};const se={modelValue:{default:!1},checkedValue:{default:!0},uncheckedValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},checkedColor:{type:String},uncheckedColor:{type:String},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:()=>["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function te(){const{bindParent:e,parentProvider:o}=L(W),{index:s}=Q(Y);return{index:s,radioGroup:o,bindRadioGroup:e}}const ce=p({name:"VarRadio",directives:{Ripple:ae},components:{[K.name]:K,[C.name]:C},inheritAttrs:!1,props:se,setup(e){const o=F(!1),s=w(()=>o.value===e.checkedValue),h=F(!1),{radioGroup:n,bindRadioGroup:t}=te(),{form:a,bindForm:c}=U(),{errorMessage:u,validateWithTrigger:y,validate:O,resetValidation:g}=G(),I=r=>{j(()=>{const{validateTrigger:l,rules:d,modelValue:m}=e;y(l,r,d,m)})},_=r=>{var m;const{checkedValue:l,onChange:d}=e;n&&o.value===l||(o.value=r,(m=e["onUpdate:modelValue"])==null||m.call(e,o.value),d==null||d(o.value),n==null||n.onToggle(l),I("onChange"))},V=r=>{const{disabled:l,readonly:d,uncheckedValue:m,checkedValue:q,onClick:P}=e;(a==null?void 0:a.disabled.value)||l||(P==null||P(r),!((a==null?void 0:a.readonly.value)||d)&&(h.value=!0,_(s.value?m:q)))},R=r=>{const{checkedValue:l,uncheckedValue:d}=e;o.value=r===l?l:d},i=()=>{var r;(r=e["onUpdate:modelValue"])==null||r.call(e,e.uncheckedValue),g()},v=()=>O(e.rules,e.modelValue),f=r=>{const{uncheckedValue:l,checkedValue:d}=e;![l,d].includes(r)&&(r=s.value?l:d),_(r)};T(()=>e.modelValue,r=>{o.value=r},{immediate:!0});const b={sync:R,validate:v,resetValidation:g,reset:i};return t==null||t(b),c==null||c(b),{withAnimation:h,checked:s,errorMessage:u,radioGroupErrorMessage:n==null?void 0:n.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,handleClick:V,toggle:f,reset:i,validate:v,resetValidation:g}}}),ue={class:"var-radio__wrap"};function ve(e,o,s,h,n,t){const a=z("var-icon"),c=z("var-form-details"),u=X("ripple");return B(),N("div",ue,[A("div",ee({class:"var-radio",onClick:o[0]||(o[0]=(...y)=>e.handleClick&&e.handleClick(...y))},e.$attrs),[Z(A("div",{class:k(["var-radio__action",[e.checked?"var-radio--checked":"var-radio--unchecked",e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]]),style:x({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?$(e.$slots,"checked-icon",{key:0},()=>[D(a,{class:k(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-marked",size:e.iconSize},null,8,["class","size"])]):$(e.$slots,"unchecked-icon",{key:1},()=>[D(a,{class:k(["var-radio__icon",[e.withAnimation?"var-radio--with-animation":null]]),"var-radio-cover":"",name:"radio-blank",size:e.iconSize},null,8,["class","size"])])],6),[[u,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),A("div",{class:k(["var-radio__text",[e.errorMessage||e.radioGroupErrorMessage?"var-radio--error":null,e.formDisabled||e.disabled?"var-radio--disabled":null]])},[$(e.$slots,"default")],2)],16),D(c,{"error-message":e.errorMessage},null,8,["error-message"])])}var S=E(ce,[["render",ve]]);S.install=function(e){e.component(S.name,S)};export{M as R,S as a};
