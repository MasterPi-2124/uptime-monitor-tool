(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f14ef0c"],{2632:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("2b0e"),r=n("c637"),o=n("8df8"),s=n("7b1e"),c=n("df44"),a=i["default"].extend({name:r["hb"],extends:c["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(t){var e=this.title,n=this.content,i=Object(s["e"])(e)?e({}):e,r=Object(s["e"])(n)?n({}):n,o=this.html&&!Object(s["e"])(e)?{innerHTML:e}:{},c=this.html&&!Object(s["e"])(n)?{innerHTML:n}:{};return t("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[t("div",{staticClass:"arrow",ref:"arrow"}),Object(s["o"])(i)||""===i?t():t("h3",{staticClass:"popover-header",domProps:o},[i]),Object(s["o"])(r)||""===r?t():t("div",{staticClass:"popover-body",domProps:c},[r])])}}}),l=i["default"].extend({name:r["gb"],extends:o["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return a}}})},"26fc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEUpQqK2q8384OL3qa/tKTkAI5Wrt9z////5t7ztKTlzpJCAAAAABXRSTlP++vjs1BQWlgsAAAAxSURBVHgBYmRAA4yKaAJCAugqQgHtyzENAAAAAiD7pzaDr4MfRVEURVGU36IoipK5FLWNJ6UFusbWAAAAAElFTkSuQmCC"},4711:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var i=n("2b0e"),r=n("b42e"),o=n("c637"),s=n("a723"),c=n("d82f"),a=n("cf75"),l=n("aa59");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=Object(a["d"])(Object(c["m"])(d(d({},Object(c["j"])(l["b"],["event","routerTag"])),{},{linkAttrs:Object(a["c"])(s["o"],{}),linkClasses:Object(a["c"])(s["e"])})),o["bb"]),p=i["default"].extend({name:o["bb"],functional:!0,props:f,render:function(t,e){var n=e.props,i=e.data,o=e.listeners,s=e.children;return t("li",Object(r["a"])(Object(c["j"])(i,["on"]),{staticClass:"nav-item"}),[t(l["a"],{staticClass:"nav-link",class:n.linkClasses,attrs:n.linkAttrs,props:n,on:o},s)])}})},4918:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"a",(function(){return m}));var i=n("2b0e"),r=n("b42e"),o=n("c637"),s=n("a723"),c=n("2326"),a=n("6c06"),l=n("7b1e"),u=n("3a58"),d=n("cf75"),b=n("fa73");function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=function(t,e,n){var i=encodeURIComponent(p.replace("%{w}",Object(b["g"])(t)).replace("%{h}",Object(b["g"])(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(i)},g=Object(d["d"])({alt:Object(d["c"])(s["s"]),blank:Object(d["c"])(s["g"],!1),blankColor:Object(d["c"])(s["s"],"transparent"),block:Object(d["c"])(s["g"],!1),center:Object(d["c"])(s["g"],!1),fluid:Object(d["c"])(s["g"],!1),fluidGrow:Object(d["c"])(s["g"],!1),height:Object(d["c"])(s["n"]),left:Object(d["c"])(s["g"],!1),right:Object(d["c"])(s["g"],!1),rounded:Object(d["c"])(s["i"],!1),sizes:Object(d["c"])(s["f"]),src:Object(d["c"])(s["s"]),srcset:Object(d["c"])(s["f"]),thumbnail:Object(d["c"])(s["g"],!1),width:Object(d["c"])(s["n"])},o["M"]),m=i["default"].extend({name:o["M"],functional:!0,props:g,render:function(t,e){var n,i=e.props,o=e.data,s=i.alt,d=i.src,p=i.block,g=i.fluidGrow,m=i.rounded,O=Object(u["c"])(i.width)||null,v=Object(u["c"])(i.height)||null,j=null,y=Object(c["b"])(i.srcset).filter(a["a"]).join(","),A=Object(c["b"])(i.sizes).filter(a["a"]).join(",");return i.blank&&(!v&&O?v=O:!O&&v&&(O=v),O||v||(O=1,v=1),d=h(O,v,i.blankColor||"transparent"),y=null,A=null),i.left?j="float-left":i.right?j="float-right":i.center&&(j="mx-auto",p=!0),t("img",Object(r["a"])(o,{attrs:{src:d,alt:s,width:O?Object(b["g"])(O):null,height:v?Object(b["g"])(v):null,srcset:y||null,sizes:A||null},class:(n={"img-thumbnail":i.thumbnail,"img-fluid":i.fluid||g,"w-100":g,rounded:""===m||!0===m},f(n,"rounded-".concat(m),Object(l["m"])(m)&&""!==m),f(n,j,j),f(n,"d-block",p),n)}))}})},"59fb":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d}));var i=n("2b0e"),r=n("b42e"),o=n("c637"),s=n("a723"),c=n("cf75");function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},u=Object(c["d"])({align:Object(c["c"])(s["s"]),cardHeader:Object(c["c"])(s["g"],!1),fill:Object(c["c"])(s["g"],!1),justified:Object(c["c"])(s["g"],!1),pills:Object(c["c"])(s["g"],!1),small:Object(c["c"])(s["g"],!1),tabs:Object(c["c"])(s["g"],!1),tag:Object(c["c"])(s["s"],"ul"),vertical:Object(c["c"])(s["g"],!1)},o["Y"]),d=i["default"].extend({name:o["Y"],functional:!0,props:u,render:function(t,e){var n,i=e.props,o=e.data,s=e.children,c=i.tabs,u=i.pills,d=i.vertical,b=i.align,f=i.cardHeader;return t(i.tag,Object(r["a"])(o,{staticClass:"nav",class:(n={"nav-tabs":c,"nav-pills":u&&!c,"card-header-tabs":!d&&f&&c,"card-header-pills":!d&&f&&u&&!c,"flex-column":d,"nav-fill":!d&&i.fill,"nav-justified":!d&&i.justified},a(n,l(b),!d&&b),a(n,"small",i.small),n)}),s)}})},"5e3c":function(t,e){t.exports="data:image/png;base64,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"},"62cb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"clearfix mb-0"},[n("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[t._v(" Powered By "),n("b-link",{staticClass:"ml-25 font-weight-bolder",attrs:{href:"#",target:"_blank"}},[t._v("Ping.pub")])],1),n("span",{staticClass:"float-md-right d-none d-md-block"},[t._v("Buy me a cup of coffee. "),n("span",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.topleft",value:"Atom: cosmos1ev0vtddkl7jlwfawlk06yzncapw2x9quyxx75u",expression:"'Atom: cosmos1ev0vtddkl7jlwfawlk06yzncapw2x9quyxx75u'",modifiers:{hover:!0,topleft:!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{title:"Thanks for your donation!",variant:"outline-primary"}},[n("feather-icon",{staticClass:"text-danger stroke-current",attrs:{icon:"HeartIcon",size:"21"}})],1)])])},r=[],o=n("aa59"),s=n("c637"),c=n("e863"),a=n("0056"),l=n("2326"),u=n("228e"),d=n("be29"),b=n("6c06"),f=n("7b1e"),p=n("3c21"),h=n("3a58"),g=n("d82f"),m=n("2632");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y="__BV_Popover__",A="click",w={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},k=/^html$/i,C=/^nofade$/i,P=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,x=/^(window|viewport|scrollParent)$/i,E=/^d\d+$/i,I=/^ds\d+$/i,D=/^dh\d+$/i,T=/^o-?\d+$/i,S=/^v-.+$/i,B=/\s+/,U=function(t,e){var n={title:void 0,content:void 0,trigger:"",placement:"right",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,disabled:!1,id:null,html:!1,delay:Object(u["c"])(s["fb"],"delay",50),boundary:String(Object(u["c"])(s["fb"],"boundary","scrollParent")),boundaryPadding:Object(h["c"])(Object(u["c"])(s["fb"],"boundaryPadding",5),0),variant:Object(u["c"])(s["fb"],"variant"),customClass:Object(u["c"])(s["fb"],"customClass")};if(Object(f["m"])(t.value)||Object(f["g"])(t.value)||Object(f["e"])(t.value)?n.content=t.value:Object(f["j"])(t.value)&&(n=v(v({},n),t.value)),t.arg&&(n.container="#".concat(t.arg)),Object(f["n"])(n.title)){var i=e.data||{};n.title=i.attrs&&!Object(f["o"])(i.attrs.title)?i.attrs.title:void 0}Object(f["j"])(n.delay)||(n.delay={show:Object(h["c"])(n.delay,0),hide:Object(h["c"])(n.delay,0)}),Object(g["h"])(t.modifiers).forEach((function(t){if(k.test(t))n.html=!0;else if(C.test(t))n.animation=!1;else if(P.test(t))n.placement=t;else if(x.test(t))t="scrollparent"===t?"scrollParent":t,n.boundary=t;else if(E.test(t)){var e=Object(h["c"])(t.slice(1),0);n.delay.show=e,n.delay.hide=e}else I.test(t)?n.delay.show=Object(h["c"])(t.slice(2),0):D.test(t)?n.delay.hide=Object(h["c"])(t.slice(2),0):T.test(t)?n.offset=Object(h["c"])(t.slice(1),0):S.test(t)&&(n.variant=t.slice(2)||null)}));var r={};return Object(l["b"])(n.trigger||"").filter(b["a"]).join(" ").trim().toLowerCase().split(B).forEach((function(t){w[t]&&(r[t]=!0)})),Object(g["h"])(t.modifiers).forEach((function(t){t=t.toLowerCase(),w[t]&&(r[t]=!0)})),n.trigger=Object(g["h"])(r).join(" "),"blur"===n.trigger&&(n.trigger="focus"),n.trigger||(n.trigger=A),n},N=function(t,e,n){if(c["f"]){var i=U(e,n);if(!t[y]){var r=n.context;t[y]=new m["a"]({parent:r,_scopeId:Object(d["a"])(r,void 0)}),t[y].__bv_prev_data__={},t[y].$on(a["P"],(function(){var e={};Object(f["e"])(i.title)&&(e.title=i.title(t)),Object(f["e"])(i.content)&&(e.content=i.content(t)),Object(g["h"])(e).length>0&&t[y].updateData(e)}))}var o={title:i.title,content:i.content,triggers:i.trigger,placement:i.placement,fallbackPlacement:i.fallbackPlacement,variant:i.variant,customClass:i.customClass,container:i.container,boundary:i.boundary,delay:i.delay,offset:i.offset,noFade:!i.animation,id:i.id,disabled:i.disabled,html:i.html},s=t[y].__bv_prev_data__;if(t[y].__bv_prev_data__=o,!Object(p["a"])(o,s)){var l={target:t};Object(g["h"])(o).forEach((function(e){o[e]!==s[e]&&(l[e]="title"!==e&&"content"!==e||!Object(f["e"])(o[e])?o[e]:o[e](t))})),t[y].updateData(l)}}},H=function(t){t[y]&&(t[y].$destroy(),t[y]=null),delete t[y]},R={bind:function(t,e,n){N(t,e,n)},componentUpdated:function(t,e,n){n.context.$nextTick((function(){N(t,e,n)}))},unbind:function(t){H(t)}},M=n("e009"),Q={name:"AppFooter",components:{BLink:o["a"]},directives:{"b-popover":R,Ripple:M["a"]}},G=Q,V=n("2877"),F=Object(V["a"])(G,i,r,!1,null,null,null);e["a"]=F.exports},"72fe":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="},"95ae":function(t,e,n){"use strict";n.d(e,"b",(function(){return N})),n.d(e,"a",(function(){return H}));var i=n("f0bd"),r=n("2b0e"),o=n("c637"),s=n("0056"),c=n("9bfa"),a="top-start",l="top-end",u="bottom-start",d="bottom-end",b="right-start",f="left-start",p=n("a723"),h=n("ca88"),g=n("6d40"),m=n("906c"),O=n("6b77"),v=n("7b1e"),j=n("d82f"),y=n("cf75"),A=n("686b"),w=r["default"].extend({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(O["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,s["U"]),t&&Object(O["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,s["U"]))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(O["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,s["U"])},beforeDestroy:function(){Object(O["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,s["U"])},methods:{isClickOut:function(t){return!Object(m["f"])(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),k=r["default"].extend({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(O["a"])(this.focusInElement,"focusin",this._focusInHandler,s["U"]),t&&Object(O["b"])(this.focusInElement,"focusin",this._focusInHandler,s["U"]))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(O["b"])(this.focusInElement,"focusin",this._focusInHandler,s["U"])},beforeDestroy:function(){Object(O["a"])(this.focusInElement,"focusin",this._focusInHandler,s["U"])},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),C=n("90ef"),P=n("602d");function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){I(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var D=Object(O["e"])(o["u"],s["Q"]),T=Object(O["e"])(o["u"],s["u"]),S=".dropdown form",B=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),U=function(t){return(t||[]).filter(m["u"])},N=Object(y["d"])(Object(j["m"])(E(E({},C["b"]),{},{boundary:Object(y["c"])([h["c"],p["s"]],"scrollParent"),disabled:Object(y["c"])(p["g"],!1),dropleft:Object(y["c"])(p["g"],!1),dropright:Object(y["c"])(p["g"],!1),dropup:Object(y["c"])(p["g"],!1),noFlip:Object(y["c"])(p["g"],!1),offset:Object(y["c"])(p["n"],0),popperOpts:Object(y["c"])(p["o"],{}),right:Object(y["c"])(p["g"],!1)})),o["u"]),H=r["default"].extend({mixins:[C["a"],P["a"],w,k],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:N,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(v["f"])(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var n=t?s["P"]:s["v"],i=new g["a"](n,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(i),i.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(s["u"],this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(O["e"])(o["u"],e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"===typeof i["a"])Object(A["a"])("Popper.js not found. Falling back to CSS positioning",o["u"]);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(D,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(s["Q"])}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(T,this),this.$emit(s["u"]),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new i["a"](t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=u;this.dropup?t=this.right?l:a:this.dropright?t=b:this.dropleft?t=f:this.right&&(t=d);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},n=this.boundary;return n&&(e.modifiers.preventOverflow={boundariesElement:n}),Object(j["i"])(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](D,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(m["B"])((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(s["u"],this.focusToggler))},toggle:function(t){t=t||{};var e=t,n=e.type,i=e.keyCode;("click"===n||"keydown"===n&&-1!==[c["c"],c["h"],c["a"]].indexOf(i))&&(this.disabled?this.visible=!1:(this.$emit(s["S"],t),Object(O["f"])(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(O["f"])(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===c["d"]?this.onEsc(t):e===c["a"]?this.focusNext(t,!1):e===c["i"]&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(O["f"])(t),this.$once(s["u"],this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(s["f"],t)},hideHandler:function(t){var e=this,n=t.target;!this.visible||Object(m["f"])(this.$refs.menu,n)||Object(m["f"])(this.toggler,n)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.inNavbar?300:0))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var n=this,i=t.target;!this.visible||t&&Object(m["e"])(S,i)||(Object(O["f"])(t),this.$nextTick((function(){var t=n.getItems();if(!(t.length<1)){var r=t.indexOf(i);e&&r>0?r--:!e&&r<t.length-1&&r++,r<0&&(r=0),n.focusItem(r,t)}})))},focusItem:function(t,e){var n=e.find((function(e,n){return n===t}));Object(m["d"])(n)},getItems:function(){return U(Object(m["D"])(B,this.$refs.menu))},focusMenu:function(){Object(m["d"])(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(m["d"])(t.toggler)}))}}})},9996:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"},"9eaa":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("2b0e"),r=n("c637"),o=n("0056"),s=n("a723"),c=n("906c"),a=n("d82f"),l=n("cf75"),u=n("493b"),d=n("8c18"),b=n("aa59");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=Object(l["d"])(Object(a["m"])(p(p({},Object(a["j"])(b["b"],["event","routerTag"])),{},{linkClass:Object(l["c"])(s["e"]),variant:Object(l["c"])(s["s"])})),r["w"]),m=i["default"].extend({name:r["w"],mixins:[u["a"],d["a"]],inject:{bvDropdown:{default:null}},inheritAttrs:!1,props:g,computed:{computedAttrs:function(){return p(p({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(c["B"])((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit(o["f"],t),this.closeDropdown()}},render:function(t){var e=this.linkClass,n=this.variant,i=this.active,r=this.disabled,o=this.onClick,s=this.bvAttrs;return t("li",{class:s.class,style:s.style,attrs:{role:"presentation"}},[t(b["a"],{staticClass:"dropdown-item",class:[e,h({},"text-".concat(n),n&&!(i||r))],props:this.$props,attrs:this.computedAttrs,on:{click:o},ref:"item"},this.normalizeSlot())])}})},"9f5c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-nav-item",{on:{click:function(e){t.skin=t.isDark?"light":"dark"}}},[n("feather-icon",{attrs:{size:"21",icon:(t.isDark?"Sun":"Moon")+"Icon"}})],1)},r=[],o=n("b8f2"),s=n("ed09"),c=n("4711"),a={components:{BNavItem:c["a"]},setup:function(){var t=Object(o["a"])(),e=t.skin,n=Object(s["computed"])((function(){return"dark"===e.value}));return{skin:e,isDark:n}}},l=a,u=n("2877"),d=Object(u["a"])(l,i,r,!1,null,null,null);e["a"]=d.exports},dd9a:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return j}));var i=n("2b0e"),r=n("c637"),o=n("a723"),s=n("9b76"),c=n("2326"),a=n("8690"),l=n("cf75"),u=n("fa73"),d=n("95ae"),b=n("90ef"),f=n("8c18"),p=n("1947"),h=n("d82f");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(l["d"])(Object(h["m"])(m(m(m({},b["b"]),d["b"]),{},{block:Object(l["c"])(o["g"],!1),html:Object(l["c"])(o["s"]),lazy:Object(l["c"])(o["g"],!1),menuClass:Object(l["c"])(o["e"]),noCaret:Object(l["c"])(o["g"],!1),role:Object(l["c"])(o["s"],"menu"),size:Object(l["c"])(o["s"]),split:Object(l["c"])(o["g"],!1),splitButtonType:Object(l["c"])(o["s"],"button",(function(t){return Object(c["a"])(["button","submit","reset"],t)})),splitClass:Object(l["c"])(o["e"]),splitHref:Object(l["c"])(o["s"]),splitTo:Object(l["c"])(o["q"]),splitVariant:Object(l["c"])(o["s"]),text:Object(l["c"])(o["s"]),toggleClass:Object(l["c"])(o["e"]),toggleTag:Object(l["c"])(o["s"],"button"),toggleText:Object(l["c"])(o["s"],"Toggle dropdown"),variant:Object(l["c"])(o["s"],"secondary")})),r["u"]),j=i["default"].extend({name:r["u"],mixins:[b["a"],d["a"],f["a"]],props:v,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,n=this.variant,i=this.size,r=this.block,o=this.disabled,c=this.split,l=this.role,d=this.hide,b=this.toggle,f={variant:n,size:i,block:r,disabled:o},h=this.normalizeSlot(s["e"]),g=this.hasNormalizedSlot(s["e"])?{}:Object(a["a"])(this.html,this.text),O=t();if(c){var v=this.splitTo,j=this.splitHref,y=this.splitButtonType,A=m(m({},f),{},{variant:this.splitVariant||n});v?A.to=v:j?A.href=j:y&&(A.type=y),O=t(p["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:A,domProps:g,on:{click:this.onSplitClick},ref:"button"},h),h=[t("span",{class:["sr-only"]},[this.toggleText])],g={}}var w=t(p["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(u["g"])(e)},props:m(m({},f),{},{tag:this.toggleTag,block:r&&!c}),domProps:g,on:{mousedown:this.onMousedown,click:b,keydown:b},ref:"toggle"},h),k=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:l,tabindex:"-1","aria-labelledby":this.safeId(c?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(s["g"],{hide:d}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[O,w,k])}})},e009:function(t,e,n){"use strict";var i={bind:function(t,e){var n={event:"mousedown",transition:600};r(Object.keys(e.modifiers),n),t.addEventListener(n.event,(function(n){c(n,t,e.value)}));var o=e.value||i.color||"rgba(0, 0, 0, 0.35)",s=i.zIndex||"9999";function c(t,e){var i=e,r=parseInt(getComputedStyle(i).borderWidth.replace("px","")),c=i.getBoundingClientRect(),a=c.left,l=c.top,u=i.offsetWidth,d=i.offsetHeight,b=t.clientX-a,f=t.clientY-l,p=Math.max(b,u-b),h=Math.max(f,d-f),g=window.getComputedStyle(i),m=Math.sqrt(p*p+h*h),O=r>0?r:0,v=document.createElement("div"),j=document.createElement("div");j.className="ripple-container",v.className="ripple",v.style.marginTop="0px",v.style.marginLeft="0px",v.style.width="1px",v.style.height="1px",v.style.transition="all "+n.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",v.style.borderRadius="50%",v.style.pointerEvents="none",v.style.position="relative",v.style.zIndex=s,v.style.backgroundColor=o,j.style.position="absolute",j.style.left=0-O+"px",j.style.top=0-O+"px",j.style.height="0",j.style.width="0",j.style.pointerEvents="none",j.style.overflow="hidden";var y=i.style.position.length>0?i.style.position:getComputedStyle(i).position;function A(){setTimeout((function(){v.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){j.parentNode.removeChild(j)}),850),e.removeEventListener("mouseup",A,!1),setTimeout((function(){for(var t=!0,e=0;e<i.childNodes.length;e++)"ripple-container"===i.childNodes[e].className&&(t=!1);t&&(i.style.position="static"!==y?y:"")}),n.transition+250)}"relative"!==y&&(i.style.position="relative"),j.appendChild(v),i.appendChild(j),v.style.marginLeft=b+"px",v.style.marginTop=f+"px",j.style.width=u+"px",j.style.height=d+"px",j.style.borderTopLeftRadius=g.borderTopLeftRadius,j.style.borderTopRightRadius=g.borderTopRightRadius,j.style.borderBottomLeftRadius=g.borderBottomLeftRadius,j.style.borderBottomRightRadius=g.borderBottomRightRadius,j.style.direction="ltr",setTimeout((function(){v.style.width=2*m+"px",v.style.height=2*m+"px",v.style.marginLeft=b-m+"px",v.style.marginTop=f-m+"px"}),0),"mousedown"===t.type?e.addEventListener("mouseup",A,!1):A()}}};function r(t,e){t.forEach((function(t){isNaN(Number(t))?e.event=t:e.transition=t}))}e["a"]=i},e2f5:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-nav-item-dropdown",{staticClass:"dropdown-language",attrs:{id:"dropdown-grouped",variant:"link",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("b-img",{attrs:{src:t.currentLocale.img,height:"14px",width:"22px",alt:t.currentLocale.locale}}),n("span",{staticClass:"ml-50 text-body d-none"},[t._v(t._s(t.currentLocale.name))])]},proxy:!0}])},t._l(t.locales,(function(e){return n("b-dropdown-item",{key:e.locale,on:{click:function(n){t.$i18n.locale=e.locale}}},[n("b-img",{attrs:{src:e.img,height:"14px",width:"22px",alt:e.locale}}),n("span",{staticClass:"ml-50"},[t._v(t._s(e.name))])],1)})),1)},r=[],o=(n("7db0"),n("ede5")),s=n("9eaa"),c=n("4918"),a={components:{BNavItemDropdown:o["a"],BDropdownItem:s["a"],BImg:c["a"]},computed:{currentLocale:function(){var t=this;return this.locales.find((function(e){return e.locale===t.$i18n.locale}))}},setup:function(){var t=[{locale:"en",img:n("9996"),name:"English"},{locale:"fr",img:n("26fc"),name:"French"},{locale:"de",img:n("72fe"),name:"German"},{locale:"pt",img:n("5e3c"),name:"Portuguese"}];return{locales:t}}},l=a,u=n("2877"),d=Object(u["a"])(l,i,r,!1,null,null,null);e["a"]=d.exports},ede5:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var i=n("2b0e"),r=n("c637"),o=n("9b76"),s=n("8690"),c=n("d82f"),a=n("cf75"),l=n("95ae"),u=n("90ef"),d=n("8c18"),b=n("dd9a"),f=n("aa59");function p(t){return O(t)||m(t)||g(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,e){if(t){if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function m(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function O(t){if(Array.isArray(t))return v(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){A(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function A(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=Object(a["d"])(Object(c["m"])(y(y({},u["b"]),Object(c["k"])(b["b"],[].concat(p(Object(c["h"])(l["b"])),["html","lazy","menuClass","noCaret","role","text","toggleClass"])))),r["cb"]),k=i["default"].extend({name:r["cb"],mixins:[u["a"],l["a"],d["a"]],props:w,computed:{toggleId:function(){return this.safeId("_BV_toggle_")},dropdownClasses:function(){return[this.directionClass,this.boundaryClass,{show:this.visible}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){return[this.toggleClass,{"dropdown-toggle-no-caret":this.noCaret}]}},render:function(t){var e=this.toggleId,n=this.visible,i=this.hide,r=t(f["a"],{staticClass:"nav-link dropdown-toggle",class:this.toggleClasses,props:{href:"#".concat(this.id||""),disabled:this.disabled},attrs:{id:e,role:"button","aria-haspopup":"true","aria-expanded":n?"true":"false"},on:{mousedown:this.onMousedown,click:this.toggle,keydown:this.toggle},ref:"toggle"},[this.normalizeSlot([o["e"],o["L"]])||t("span",{domProps:Object(s["a"])(this.html,this.text)})]),c=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{tabindex:"-1","aria-labelledby":e},on:{keydown:this.onKeydown},ref:"menu"},!this.lazy||n?this.normalizeSlot(o["g"],{hide:i}):[t()]);return t("li",{staticClass:"nav-item b-nav-dropdown dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[r,c])}})}}]);