import{c as u,t as o}from"./shared.6d6b25a1.js";import{t as p}from"./elements.f945da86.js";import{_ as c}from"./IconSfc.fde87e76.js";import{q as f,r as l,y as d,o as g,k as v,m as y,n as h,R as z,z as S}from"./vendor.85536c59.js";const k={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const U=f({name:"VarIcon",props:k,setup(e){const n=l(""),a=l(!1);return d(()=>e.name,async(s,i)=>{const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await S(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))},{immediate:!0}),{nextName:n,shrinking:a,isURL:u,toNumber:o,toSizeUnit:p}}});function C(e,n,a,m,s,i){return g(),v(z(e.isURL(e.name)?"img":"i"),{class:y(["var-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-icon--shrinking":null]]),style:h({color:e.color,transition:`all ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var r=c(U,[["render",C]]);r.install=function(e){e.component(r.name,r)};export{r as I,k as p};
