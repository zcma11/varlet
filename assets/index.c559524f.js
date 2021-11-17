import{R as k}from"./index.23ced9c1.js";import{L as C}from"./index.a4b068bd.js";import{t as F}from"./elements.524bf92a.js";import{_ as z}from"./elevation.7a86b580.js";import{q as L,e as j,w as b,o as v,c as h,n as f,m as U,d as y,h as t,i as d,F as R,l as u,t as c,a as l,V as E,W as N}from"./vendor.8a125dba.js";import{A as B}from"./AppType.8af12281.js";import{R as I}from"./index.f7a1964d.js";import{w as $}from"./utils.faa57f31.js";import{u as V,a as w,_ as A,b as D,c as M}from"./en-US.51e06fb5.js";import"./index.789f7251.js";import"./shared.cba5a5a3.js";import"./components.581beddd.js";function T(e){return["fill","contain","cover","none","scale-down"].includes(e)}const x={src:{type:String},fit:{type:String,validator:T,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0},onClick:{type:Function},onLoad:{type:Function},onError:{type:Function}};const q=L({name:"VarImage",directives:{Lazy:C,Ripple:k},props:x,setup(e){return{toSizeUnit:F,handleLoad:r=>{const p=r.currentTarget,{lazy:n,onLoad:s,onError:a}=e;n?(p._lazy.state==="success"&&(s==null||s(r)),p._lazy.state==="error"&&(a==null||a(r))):s==null||s(r)},handleError:r=>{const{lazy:p,onError:n}=e;!p&&(n==null||n(r))}}}}),W=["alt","lazy-error","lazy-loading"],G=["alt","src"];function H(e,i,_,r,p,n){const s=j("lazy"),a=j("ripple");return b((v(),h("div",{class:U(["var-image var--box",[e.block?null:"var--inline-block"]]),style:f({width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)})},[e.lazy?b((v(),h("img",{key:0,class:"var-image__image",alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading,style:f({objectFit:e.fit}),onLoad:i[0]||(i[0]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[1]||(i[1]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[2]||(i[2]=(...o)=>e.onClick&&e.onClick(...o))},null,44,W)),[[s,e.src]]):(v(),h("img",{key:1,class:"var-image__image",alt:e.alt,style:f({objectFit:e.fit}),src:e.src,onLoad:i[3]||(i[3]=(...o)=>e.handleLoad&&e.handleLoad(...o)),onError:i[4]||(i[4]=(...o)=>e.handleError&&e.handleError(...o)),onClick:i[5]||(i[5]=(...o)=>e.onClick&&e.onClick(...o))},null,44,G))],6)),[[a,{disabled:!e.ripple}]])}var m=z(q,[["render",H]]);m.install=function(e){e.component(m.name,m)};var J={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},K={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:S,use:O,pack:P,packs:je,merge:be}=V(),Q=e=>{M(e),O(e)};w("zh-CN",A);w("en-US",D);S("zh-CN",J);S("en-US",K);const X={name:"ImageExample",components:{VarImage:m,VarRow:I,AppType:B},setup(){return $(Q),{pack:P}}},g=e=>(E("data-v-741fe41e"),e=e(),N(),e),Y={class:"fit-item"},Z=g(()=>l("div",null,"fill",-1)),ee={class:"fit-item"},te=g(()=>l("div",null,"cover",-1)),ae={class:"fit-item"},ie=g(()=>l("div",null,"contain",-1)),se={class:"fit-item"},oe=g(()=>l("div",null,"none",-1)),re={class:"fit-item"},le=g(()=>l("div",null,"scale-down",-1));function ne(e,i,_,r,p,n){const s=y("app-type"),a=y("var-image"),o=y("var-row");return v(),h(R,null,[t(s,null,{default:d(()=>[u(c(r.pack.basicUsage),1)]),_:1}),t(a,{src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.fitMode),1)]),_:1}),t(o,null,{default:d(()=>[l("div",Y,[t(a,{width:"85px",height:"85px",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),Z]),l("div",ee,[t(a,{width:"85px",height:"85px",fit:"cover",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),te]),l("div",ae,[t(a,{width:"85px",height:"85px",fit:"contain",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),ie]),l("div",se,[t(a,{width:"85px",height:"85px",fit:"none",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),oe]),l("div",re,[t(a,{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),le])]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.setRadius),1)]),_:1}),t(o,null,{default:d(()=>[t(a,{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet.gitee.io/varlet-ui/cat.jpg",style:{"margin-right":"10px"}}),t(a,{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})]),_:1}),t(s,null,{default:d(()=>[u(c(r.pack.useRipple),1)]),_:1}),t(a,{ripple:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"}),t(s,null,{default:d(()=>[u(c(r.pack.useLazyLoad),1)]),_:1}),t(a,{lazy:"",src:"https://varlet.gitee.io/varlet-ui/cat.jpg"})],64)}var we=z(X,[["render",ne],["__scopeId","data-v-741fe41e"]]);export{we as default};
