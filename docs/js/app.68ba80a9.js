(function(e){function t(t){for(var n,i,u=t[0],s=t[1],l=t[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1355:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("HelloWorld")],1)},o=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("QMK USB VID/PID Usage")]),r("div",{staticClass:"top-bar"},[r("div",{staticClass:"left-top"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"input-filter",attrs:{type:"text",placeholder:"filter on content"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}})]),r("div",{staticClass:"right-top"},[e._v(" "+e._s(this._rowData.length)+" keyboards, "+e._s(this.vids.length)+" VIDs, "+e._s(this.pids.length)+" PIDs ")])]),r("ag-grid-vue",{staticClass:"ag-theme-balham-dark",staticStyle:{width:"100vw",height:"100vh"},attrs:{columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e._rowData,sizeColumnsToFit:!0}})],1)},u=[],s=(r("4de4"),r("0481"),r("d81d"),r("13d5"),r("4069"),r("b64b"),r("ac1f"),r("841c"),r("401b")),l=r("bc3a"),c=r.n(l),d=r("6062"),f={name:"HelloWorld",components:{AgGridVue:s["AgGridVue"]},data:function(){return{defaultColDef:{sortable:!0,resizable:!0},columnDefs:[{headerName:"Keyboard",field:"keyboard"},{headerName:"VendorID",field:"vendor_id"},{headerName:"ProductID",field:"product_id"},{headerName:"Device ver",field:"device_ver"},{headerName:"Manu",field:"manufacturer"},{headerName:"Desc",field:"description"}],rowData:[],vids:[],pids:[],filter:"",fuse:void 0}},computed:{_rowData:function(){return""===this.filter?this.rowData:this.fuse.search(this.filter).map((function(e){return e.item}))}},beforeMount:function(){var e=this;c.a.get("https://api.qmk.fm/v1/usb").then((function(t){var r=[];200===t.status&&(r=Object.keys(t.data).reduce((function(r,n){var a=t.data[n];return e.vids.push(n),r.push(Object.keys(a).reduce((function(t,r){var n=a[r];return e.pids.push(r),t.push(Object.keys(n).reduce((function(e,t){return e.push(n[t]),e}),[])),t}),[])),r}),r),r=r.flat(3),e.rowData=r,e.fuse=new d["a"](r,{keys:["keyboard","vendor_id","product_id","device_ver","description","manufacturer"],minMatchCharLength:3,distance:30,threshold:.4}))}))}},p=f,h=(r("7d5b"),r("2877")),v=Object(h["a"])(p,i,u,!1,null,null,null),m=v.exports,b={name:"App",components:{HelloWorld:m}},g=b,y=(r("034f"),Object(h["a"])(g,a,o,!1,null,null,null)),_=y.exports,w=r("2f62");n["a"].use(w["a"]);var D=new w["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:D,render:function(e){return e(_)}}).$mount("#app")},"7d5b":function(e,t,r){"use strict";r("1355")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.68ba80a9.js.map