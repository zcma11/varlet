var m=Object.defineProperty;var o=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var i=(u,e,a)=>e in u?m(u,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[e]=a,t=(u,e)=>{for(var a in e||(e={}))c.call(e,a)&&i(u,a,e[a]);if(o)for(var a of o(e))s.call(e,a)&&i(u,a,e[a]);return u};import{r as E}from"./vendor.85536c59.js";var d={dialogTitle:"\u63D0\u793A",dialogConfirmButtonText:"\u786E\u8BA4",dialogCancelButtonText:"\u53D6\u6D88",actionSheetTitle:"\u8BF7\u9009\u62E9",listLoadingText:"\u52A0\u8F7D\u4E2D",listFinishedText:"\u6CA1\u6709\u66F4\u591A\u4E86",listErrorText:"\u52A0\u8F7D\u5931\u8D25",pickerTitle:"\u8BF7\u9009\u62E9",pickerConfirmButtonText:"\u786E\u8BA4",pickerCancelButtonText:"\u53D6\u6D88",monthDictionary:{"01":{name:"\u4E00\u6708",abbr:"\u4E00\u6708"},"02":{name:"\u4E8C\u6708",abbr:"\u4E8C\u6708"},"03":{name:"\u4E09\u6708",abbr:"\u4E09\u6708"},"04":{name:"\u56DB\u6708",abbr:"\u56DB\u6708"},"05":{name:"\u4E94\u6708",abbr:"\u4E94\u6708"},"06":{name:"\u516D\u6708",abbr:"\u516D\u6708"},"07":{name:"\u4E03\u6708",abbr:"\u4E03\u6708"},"08":{name:"\u516B\u6708",abbr:"\u516B\u6708"},"09":{name:"\u4E5D\u6708",abbr:"\u4E5D\u6708"},"10":{name:"\u5341\u6708",abbr:"\u5341\u6708"},"11":{name:"\u5341\u4E00\u6708",abbr:"\u5341\u4E00\u6708"},"12":{name:"\u5341\u4E8C\u6708",abbr:"\u5341\u4E8C\u6708"}},weekDictionary:{0:{name:"\u661F\u671F\u65E5",abbr:"\u65E5"},1:{name:"\u661F\u671F\u4E00",abbr:"\u4E00"},2:{name:"\u661F\u671F\u4E8C",abbr:"\u4E8C"},3:{name:"\u661F\u671F\u4E09",abbr:"\u4E09"},4:{name:"\u661F\u671F\u56DB",abbr:"\u56DB"},5:{name:"\u661F\u671F\u4E94",abbr:"\u4E94"},6:{name:"\u661F\u671F\u516D",abbr:"\u516D"}},selected:"\u4E2A\u88AB\u9009\u62E9"};function l(){const u={},e=E({}),a=(n,r)=>{r.lang=n,u[n]=r},b=n=>{if(!u[n])return console.warn(`The ${n} does not exist. You can mount a language package using the add method`),{};e.value=u[n]};return{packs:u,pack:e,add:a,use:b,merge:(n,r)=>{if(!u[n]){console.warn(`The ${n} does not exist. You can mount a language package using the add method`);return}u[n]=t(t({},u[n]),r),b(n)}}}const{packs:p,pack:h,add:T,use:C,merge:x}=l();T("zh-CN",d);C("zh-CN");var g={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",monthDictionary:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},"10":{name:"October",abbr:"OCT"},"11":{name:"November",abbr:"NOV"},"12":{name:"December",abbr:"DEC"}},weekDictionary:{0:{name:"Sunday",abbr:"S"},1:{name:"Monday",abbr:"M"},2:{name:"Tuesday",abbr:"T"},3:{name:"Wednesday",abbr:"W"},4:{name:"Thursday",abbr:"T"},5:{name:"Friday",abbr:"F"},6:{name:"Saturday",abbr:"S"}},selected:" selected"};export{d as _,T as a,g as b,C as c,h as p,l as u};
