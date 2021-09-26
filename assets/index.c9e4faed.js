import{A as f}from"./AppType.51c8189b.js";import{I as p}from"./index.5f8c0dc7.js";import{C as u}from"./index.3b46a3d5.js";import{u as h,a as m,_ as k,b as w,c as C}from"./en-US.97fca002.js";import{_ as F,w as v}from"./IconSfc.fde87e76.js";import{d,o as x,c as b,a as r,h as e,w as a,F as B,l as c,t}from"./vendor.85536c59.js";import"./shared.6d6b25a1.js";import"./elements.f945da86.js";var S={basicUsage:"\u57FA\u672C\u4F7F\u7528",showIcon:"\u663E\u793A\u56FE\u6807",showDesc:"\u663E\u793A\u63CF\u8FF0",showBorder:"\u663E\u793A\u8FB9\u6846",content:"\u8FD9\u662F\u5355\u5143\u683C",description:"\u63CF\u8FF0"},U={basicUsage:"Basic Usage",showIcon:"Show Icon",showDesc:"Show Description",showBorder:"Show Border",content:"This is Cell",description:"Description"};const{add:_,use:j,pack:N,packs:M,merge:O}=h(),g=i=>{C(i),j(i)};m("zh-CN",k);m("en-US",w);_("zh-CN",S);_("en-US",U);const A={name:"CellExample",components:{[u.name]:u,[p.name]:p,AppType:f},setup(){return v(g),{pack:N}}};function D(i,I,E,n,y,z){const s=d("app-type"),o=d("var-cell"),l=d("var-icon");return x(),b(B,null,[r("div",null,[e(s,null,{default:a(()=>[c(t(n.pack.basicUsage),1)]),_:1}),e(o,null,{default:a(()=>[c(t(n.pack.content),1)]),_:1}),e(o,null,{default:a(()=>[c(t(n.pack.content),1)]),_:1})]),r("div",null,[e(s,null,{default:a(()=>[c(t(n.pack.showIcon),1)]),_:1}),e(o,{icon:"fire",title:n.pack.content},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title"]),e(o,{icon:"fire",title:n.pack.content},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title"])]),r("div",null,[e(s,null,{default:a(()=>[c(t(n.pack.showDesc),1)]),_:1}),e(o,{icon:"fire",title:n.pack.content,desc:n.pack.description},{extra:a(()=>[e(l,{name:"information"})]),_:1},8,["title","desc"]),e(o,{title:n.pack.content,desc:n.pack.description},null,8,["title","desc"])]),r("div",null,[e(s,null,{default:a(()=>[c(t(n.pack.showBorder),1)]),_:1}),e(o,{border:""},{default:a(()=>[c(t(n.pack.content),1)]),_:1}),e(o,{border:""},{default:a(()=>[c(t(n.pack.content),1)]),_:1})])],64)}var P=F(A,[["render",D]]);export{P as default};
