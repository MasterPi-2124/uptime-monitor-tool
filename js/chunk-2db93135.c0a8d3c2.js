(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2db93135"],{"0d43":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{staticClass:"text-truncate",attrs:{title:"Baisc"}},[t.tx.std?a("b-table-simple",{attrs:{striped:"",stacked:"sm"}},[a("tbody",[a("b-tr",[a("b-td",{staticStyle:{width:"200px"}},[t._v(" "+t._s("txhash")+" ")]),a("b-td",{staticClass:"text-truncate"},[t._v(t._s(t.tx.txhash))])],1),a("b-tr",[a("b-td",[t._v(" "+t._s("status")+" ")]),a("b-td",{staticClass:"text-wrap"},[0===t.tx.code?a("b-badge",{attrs:{variant:"light-success"}},[t._v(" Success ")]):a("b-badge",{attrs:{variant:"light-danger"}},[t._v(" Failed ")]),t.tx.code>0?a("b",[t._v(" "+t._s(t.tx.raw_log))]):t._e()],1)],1),a("b-tr",[a("b-td",[t._v(" "+t._s("height")+" ")]),a("b-td",[a("router-link",{attrs:{to:"../blocks/"+t.tx.height}},[t._v(" "+t._s(t.tx.height)+" ")])],1)],1),a("b-tr",[a("b-td",[t._v(" "+t._s("timestamp")+" ")]),a("b-td",[t._v(t._s(t.formatTime(t.tx.timestamp)))])],1),a("b-tr",[a("b-td",[t._v(" "+t._s("gas")+" ")]),a("b-td",[t._v(t._s(t.tx.gas_used)+" / "+t._s(t.tx.gas_wanted))])],1),a("b-tr",[a("b-td",[t._v(" "+t._s("fee")+" ")]),a("b-td",[t._v(t._s(t.formattoken(t.tx.tx.fee)))])],1),a("b-tr",[a("b-td",[t._v(" "+t._s("memo")+" ")]),a("b-td",[t._v(t._s(t.tx.tx.memo))])],1),a("b-tr",[a("b-td",[t._v(" "+t._s("timeout_height")+" ")]),a("b-td",[t._v(t._s(t.tx.tx.timeout_height))])],1)],1)]):a("object-field-component",{attrs:{tablefield:t.tx.raw}})],1),t.tx.tx.messages?a("b-card",{attrs:{title:"Messages (total: "+t.tx.tx.messages.length+")","no-body":""}},t._l(t.tx.tx.messages,(function(t,e){return a("b-card-body",{key:e,staticClass:"message",attrs:{id:"message"}},[a("object-field-component",{attrs:{tablefield:t}})],1)})),1):t._e()],1)},s=[],n=a("205f"),c=a("6197"),i=a("1eba"),o=a("2a2e"),b=a("0809"),d=a("e98b"),u=a("c97d"),l=a("5556"),f={components:{BCard:n["a"],BCardBody:c["a"],BTableSimple:i["a"],BTr:o["a"],BTd:b["a"],BBadge:d["a"],ObjectFieldComponent:l["a"]},data:function(){return{tx:{tx:{}}}},beforeRouteUpdate:function(t,e,a){var r=this,s=t.params.hash;s!==e.params.hash&&(this.$http.getTxs(s).then((function(t){r.tx=t})),a())},created:function(){var t=this,e=this.$route.params.hash;this.$http.getTxs(e).then((function(e){t.tx=e}))},methods:{formattoken:function(t){return Object(u["tokenFormatter"])(t)},formatTime:function(t){return Object(u["toDay"])(t)}}},p=f,_=(a("afb9"),a("2877")),h=Object(_["a"])(p,r,s,!1,null,null,null);e["default"]=h.exports},afb9:function(t,e,a){"use strict";a("c938")},c938:function(t,e,a){},e98b:function(t,e,a){"use strict";a.d(e,"a",(function(){return h}));var r=a("2b0e"),s=a("b42e"),n=a("c637"),c=a("a723"),i=a("d82f"),o=a("cf75"),b=a("4a38"),d=a("aa59");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){f(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function f(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p=Object(i["j"])(d["b"],["event","routerTag"]);delete p.href.default,delete p.to.default;var _=Object(o["d"])(Object(i["m"])(l(l({},p),{},{pill:Object(o["c"])(c["g"],!1),tag:Object(o["c"])(c["s"],"span"),variant:Object(o["c"])(c["s"],"secondary")})),n["c"]),h=r["default"].extend({name:n["c"],functional:!0,props:_,render:function(t,e){var a=e.props,r=e.data,n=e.children,c=a.active,i=a.disabled,u=Object(b["d"])(a),l=u?d["a"]:a.tag,f=a.variant||"secondary";return t(l,Object(s["a"])(r,{staticClass:"badge",class:["badge-".concat(f),{"badge-pill":a.pill,active:c,disabled:i}],props:u?Object(o["e"])(p,a):{}}),n)}})},f07e:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r=function(){}}}]);