var k=Object.defineProperty,g=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var v=(e,l,u)=>l in e?k(e,l,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[l]=u,V=(e,l)=>{for(var u in l||(l={}))F.call(l,u)&&v(e,u,l[u]);if(p)for(var u of p(l))j.call(l,u)&&v(e,u,l[u]);return e},f=(e,l)=>g(e,w(l));import{A}from"./AppType.51c8189b.js";import{S as c}from"./index.95d089fe.js";import{C as b}from"./index.3b46a3d5.js";import{u as z,a as C,_ as S,b as h,c as E}from"./en-US.97fca002.js";import{_ as N,w as y}from"./IconSfc.fde87e76.js";import{p as B,a2 as x,d as _,o as D,c as L,h as o,w as n,a as m,F as T,l as i,t as r}from"./vendor.85536c59.js";import"./components.0481fe69.js";import"./shared.6d6b25a1.js";import"./provide.92d12d40.js";import"./index.dbaa2483.js";import"./index.b3b1e3ce.js";import"./index.5f8c0dc7.js";import"./elements.f945da86.js";var I={basicUsage:"\u57FA\u672C\u4F7F\u7528",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",notAvailable:"\u4E0D\u53EF\u7528",size:"\u4E0D\u540C\u5927\u5C0F",loading:"\u52A0\u8F7D\u72B6\u6001",validateValue:"\u503C\u7684\u6821\u9A8C",text:"\u662F\u5426\u6253\u5F00\u5F00\u5173",state:"\u9519\u8BEF\uFF01"},R={basicUsage:"Basic Usage",customColor:"Custom Color",notAvailable:"Not Available",size:"Size",loading:"Loading",validateValue:"Validate Value",text:"Whether to open the switch",state:"Error!"};const{add:U,use:W,pack:q,packs:pe,merge:ve}=z(),G=e=>{E(e),W(e)};C("zh-CN",S);C("en-US",h);U("zh-CN",I);U("en-US",R);const H={name:"SwitchExample",components:{[c.name]:c,[b.name]:b,AppType:A},setup(){const e=B({value:!0,value1:!0,value2:!0,value3:!0,value4:!0});return y(G),f(V({},x(e)),{pack:q})}},J={class:"var-switch__example-block"},K={class:"var-switch__example-block"},M={class:"var-switch__example-block"},O={class:"var-switch__example-block"},P={class:"var-switch__example-block"};function Q(e,l,u,d,X,Y){const t=_("app-type"),s=_("var-switch");return D(),L(T,null,[o(t,null,{default:n(()=>[i(r(d.pack.basicUsage),1)]),_:1}),m("div",J,[o(s,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=a=>e.value=a)},null,8,["modelValue"])]),o(t,null,{default:n(()=>[i(r(d.pack.notAvailable),1)]),_:1}),m("div",K,[o(s,{modelValue:e.value1,"onUpdate:modelValue":l[1]||(l[1]=a=>e.value1=a),disabled:""},null,8,["modelValue"]),o(s,{modelValue:e.value1,"onUpdate:modelValue":l[2]||(l[2]=a=>e.value1=a),readonly:""},null,8,["modelValue"])]),o(t,null,{default:n(()=>[i(r(d.pack.customColor),1)]),_:1}),m("div",M,[o(s,{modelValue:e.value2,"onUpdate:modelValue":l[3]||(l[3]=a=>e.value2=a),ripple:!1},null,8,["modelValue"]),o(s,{modelValue:e.value2,"onUpdate:modelValue":l[4]||(l[4]=a=>e.value2=a),color:"#ff9f00","close-color":"#f5cb90"},null,8,["modelValue"])]),o(t,null,{default:n(()=>[i(r(d.pack.size),1)]),_:1}),m("div",O,[o(s,{modelValue:e.value3,"onUpdate:modelValue":l[5]||(l[5]=a=>e.value3=a),size:"15"},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":l[6]||(l[6]=a=>e.value3=a)},null,8,["modelValue"]),o(s,{modelValue:e.value3,"onUpdate:modelValue":l[7]||(l[7]=a=>e.value3=a),size:"25"},null,8,["modelValue"])]),o(t,null,{default:n(()=>[i(r(d.pack.loading),1)]),_:1}),m("div",P,[o(s,{"model-value":!0,loading:""}),o(s,{"model-value":!0,size:"25",loading:"","loading-color":"#ff9f00"})]),o(t,null,{default:n(()=>[i(r(d.pack.validateValue),1)]),_:1}),o(s,{modelValue:e.value4,"onUpdate:modelValue":l[8]||(l[8]=a=>e.value4=a),rules:[a=>a===!0||d.pack.state]},null,8,["modelValue","rules"])],64)}var Ve=N(H,[["render",Q],["__scopeId","data-v-29ba999e"]]);export{Ve as default};
