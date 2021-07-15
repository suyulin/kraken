// {"framework" : "Rax"}
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=47)}([function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(25)("wks"),o=e(16),i=e(2).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(11)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(8),o=e(38),i=e(21),u=Object.defineProperty;n.f=e(3)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2),o=e(0),i=e(37),u=e(7),f=e(5),c=function(t,n,e){var a,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,b=t&c.W,g=d?o:o[n]||(o[n]={}),m=g.prototype,_=d?r:y?r[n]:(r[n]||{}).prototype;for(a in d&&(e=n),e)(s=!p&&_&&void 0!==_[a])&&f(g,a)||(l=s?_[a]:e[a],g[a]=d&&"function"!=typeof _[a]?e[a]:h&&s?i(l,r):b&&_[a]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&c.R&&m&&!m[a]&&u(m,a,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(4),o=e(14);t.exports=e(3)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(9);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(42),o=e(20);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(41),o=e(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){"use strict";var r=e(51)(!0);e(36)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(8),o=e(54),i=e(26),u=e(24)("IE_PROTO"),f=function(){},c=function(){var t,n=e(39)("iframe"),r=i.length;for(n.style.display="none",e(58).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c.prototype[i[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[u]=t):e=c(),void 0===n?e:o(e,n)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(25)("keys"),o=e(16);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=e(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(13)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4).f,o=e(5),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(20);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(60);for(var r=e(2),o=e(7),i=e(12),u=e(1)("toStringTag"),f="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<f.length;c++){var a=f[c],s=r[a],l=s&&s.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,n,e){n.f=e(1)},function(t,n,e){var r=e(2),o=e(0),i=e(13),u=e(30),f=e(4).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||f(n,t,{value:u.f(t)})}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";n.__esModule=!0;var r=u(e(35)),o=u(e(43)),i="function"==typeof o.default&&"symbol"==typeof r.default?function(t){return typeof t}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}n.default="function"==typeof o.default&&"symbol"===i(r.default)?function(t){return void 0===t?"undefined":i(t)}:function(t){return t&&"function"==typeof o.default&&t.constructor===o.default&&t!==o.default.prototype?"symbol":void 0===t?"undefined":i(t)}},function(t,n,e){t.exports={default:e(50),__esModule:!0}},function(t,n,e){"use strict";var r=e(13),o=e(6),i=e(40),u=e(7),f=e(12),c=e(53),a=e(27),s=e(59),l=e(1)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,y,v,h,b){c(e,n,y);var g,m,_,x=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",O="values"==v,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||v&&j[v],E=P||x(v),M=v?O?x("entries"):E:void 0,T="Array"==n&&j.entries||P;if(T&&(_=s(T.call(new t)))!==Object.prototype&&_.next&&(a(_,w,!0),r||"function"==typeof _[l]||u(_,l,d)),O&&P&&"values"!==P.name&&(S=!0,E=function(){return P.call(this)}),r&&!b||!p&&!S&&j[l]||u(j,l,E),f[n]=E,f[w]=d,v)if(g={values:O?E:x("values"),keys:h?E:x("keys"),entries:M},b)for(m in g)m in j||i(j,m,g[m]);else o(o.P+o.F*(p||S),n,g);return g}},function(t,n,e){var r=e(52);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){t.exports=!e(3)&&!e(11)((function(){return 7!=Object.defineProperty(e(39)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(9),o=e(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){t.exports=e(7)},function(t,n,e){var r=e(5),o=e(10),i=e(55)(!1),u=e(24)("IE_PROTO");t.exports=function(t,n){var e,f=o(t),c=0,a=[];for(e in f)e!=u&&r(f,e)&&a.push(e);for(;n.length>c;)r(f,e=n[c++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){t.exports={default:e(63),__esModule:!0}},function(t,n,e){var r=e(41),o=e(26).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(17),o=e(14),i=e(10),u=e(21),f=e(5),c=e(38),a=Object.getOwnPropertyDescriptor;n.f=e(3)?a:function(t,n){if(t=i(t),n=u(n,!0),c)try{return a(t,n)}catch(t){}if(f(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(23),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){"use strict";e(48)},function(t,n,e){"use strict";e(49),e(72)},function(t,n,e){"use strict";(function(t){var n=function(t){return t&&t.__esModule?t:{default:t}}(e(34));!function(t){if(!t.define){var n={},e=!1;t.define=function(t,e,r){e instanceof Function&&(r=e,e=[]),n[t]={factory:r,deps:e,module:{exports:{}},isInitialized:!1,hasError:!1}},t.require=function r(o){if(0===o.indexOf("@weex-module"))return{};var i=o,u=n[o];return u||(u=n[o+="/index"]),u&&u.isInitialized?u.module.exports:function o(i,u){if(t.ErrorUtils&&!e){var f;e=!0;try{f=o.apply(this,arguments)}catch(n){t.ErrorUtils.reportFatalError(n)}return e=!1,f}var c=n[i];if(!c)throw new Error('Requiring unknown module "'+u+'"');if(c.hasError)throw new Error('Requiring module "'+u+'" which threw an exception');try{c.isInitialized=!0,c.factory(r,c.module.exports,c.module)}catch(t){throw c.hasError=!0,c.isInitialized=!1,t}return c.module.exports}(o,i)}}}("object"===(void 0===t?"undefined":(0,n.default)(t))&&t||"object"===("undefined"==typeof window?"undefined":(0,n.default)(window))&&window)}).call(this,e(33))},function(t,n,e){e(18),e(29),t.exports=e(30).f("iterator")},function(t,n,e){var r=e(19),o=e(20);t.exports=function(t){return function(n,e){var i,u,f=String(o(n)),c=r(e),a=f.length;return c<0||c>=a?t?"":void 0:(i=f.charCodeAt(c))<55296||i>56319||c+1===a||(u=f.charCodeAt(c+1))<56320||u>57343?t?f.charAt(c):i:t?f.slice(c,c+2):u-56320+(i-55296<<10)+65536}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){"use strict";var r=e(22),o=e(14),i=e(27),u={};e(7)(u,e(1)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(4),o=e(8),i=e(15);t.exports=e(3)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),f=u.length,c=0;f>c;)r.f(t,e=u[c++],n[e]);return t}},function(t,n,e){var r=e(10),o=e(56),i=e(57);t.exports=function(t){return function(n,e,u){var f,c=r(n),a=o(c.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((f=c[s++])!=f)return!0}else for(;a>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(5),o=e(28),i=e(24)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){"use strict";var r=e(61),o=e(62),i=e(12),u=e(10);t.exports=e(36)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){e(64),e(69),e(70),e(71),t.exports=e(0).Symbol},function(t,n,e){"use strict";var r=e(2),o=e(5),i=e(3),u=e(6),f=e(40),c=e(65).KEY,a=e(11),s=e(25),l=e(27),p=e(16),d=e(1),y=e(30),v=e(31),h=e(66),b=e(67),g=e(8),m=e(9),_=e(28),x=e(10),w=e(21),O=e(14),S=e(22),j=e(68),P=e(45),E=e(32),M=e(4),T=e(15),L=P.f,k=M.f,A=j.f,F=r.Symbol,I=r.JSON,C=I&&I.stringify,N=d("_hidden"),R=d("toPrimitive"),D={}.propertyIsEnumerable,G=s("symbol-registry"),q=s("symbols"),z=s("op-symbols"),V=Object.prototype,W="function"==typeof F&&!!E.f,H=r.QObject,J=!H||!H.prototype||!H.prototype.findChild,U=i&&a((function(){return 7!=S(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=L(V,n);r&&delete V[n],k(t,n,e),r&&t!==V&&k(V,n,r)}:k,B=function(t){var n=q[t]=S(F.prototype);return n._k=t,n},K=W&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===V&&Y(z,n,e),g(t),n=w(n,!0),g(e),o(q,n)?(e.enumerable?(o(t,N)&&t[N][n]&&(t[N][n]=!1),e=S(e,{enumerable:O(0,!1)})):(o(t,N)||k(t,N,O(1,{})),t[N][n]=!0),U(t,n,e)):k(t,n,e)},Q=function(t,n){g(t);for(var e,r=h(n=x(n)),o=0,i=r.length;i>o;)Y(t,e=r[o++],n[e]);return t},X=function(t){var n=D.call(this,t=w(t,!0));return!(this===V&&o(q,t)&&!o(z,t))&&(!(n||!o(this,t)||!o(q,t)||o(this,N)&&this[N][t])||n)},Z=function(t,n){if(t=x(t),n=w(n,!0),t!==V||!o(q,n)||o(z,n)){var e=L(t,n);return!e||!o(q,n)||o(t,N)&&t[N][n]||(e.enumerable=!0),e}},$=function(t){for(var n,e=A(x(t)),r=[],i=0;e.length>i;)o(q,n=e[i++])||n==N||n==c||r.push(n);return r},tt=function(t){for(var n,e=t===V,r=A(e?z:x(t)),i=[],u=0;r.length>u;)!o(q,n=r[u++])||e&&!o(V,n)||i.push(q[n]);return i};W||(f((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===V&&n.call(z,e),o(this,N)&&o(this[N],t)&&(this[N][t]=!1),U(this,t,O(1,e))};return i&&J&&U(V,t,{configurable:!0,set:n}),B(t)}).prototype,"toString",(function(){return this._k})),P.f=Z,M.f=Y,e(44).f=j.f=$,e(17).f=X,E.f=tt,i&&!e(13)&&f(V,"propertyIsEnumerable",X,!0),y.f=function(t){return B(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var rt=T(d.store),ot=0;rt.length>ot;)v(rt[ot++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=F(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var n in G)if(G[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?S(t):Q(S(t),n)},defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:tt});var it=a((function(){E.f(1)}));u(u.S+u.F*it,"Object",{getOwnPropertySymbols:function(t){return E.f(_(t))}}),I&&u(u.S+u.F*(!W||a((function(){var t=F();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(m(n)||void 0!==t)&&!K(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!K(n))return n}),r[1]=n,C.apply(I,r)}}),F.prototype[R]||e(7)(F.prototype,R,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(16)("meta"),o=e(9),i=e(5),u=e(4).f,f=0,c=Object.isExtensible||function(){return!0},a=!e(11)((function(){return c(Object.preventExtensions({}))})),s=function(t){u(t,r,{value:{i:"O"+ ++f,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[r].i},getWeak:function(t,n){if(!i(t,r)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[r].w},onFreeze:function(t){return a&&l.NEED&&c(t)&&!i(t,r)&&s(t),t}}},function(t,n,e){var r=e(15),o=e(32),i=e(17);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,f=e(t),c=i.f,a=0;f.length>a;)c.call(t,u=f[a++])&&n.push(u);return n}},function(t,n,e){var r=e(23);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(10),o=e(44).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},function(t,n){},function(t,n,e){e(31)("asyncIterator")},function(t,n,e){e(31)("observable")},function(t,n,e){"use strict";(function(t){var n=l(e(73)),r=l(e(76)),o=l(e(80)),i=l(e(84)),u=l(e(87)),f=l(e(91)),c=l(e(35)),a=l(e(34)),s=l(e(43));function l(t){return t&&t.__esModule?t:{default:t}}!function(t){var e="function"==typeof s.default&&"symbol"==(0,a.default)(c.default)?function(t){return void 0===t?"undefined":(0,a.default)(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default?"symbol":void 0===t?"undefined":(0,a.default)(t)},l=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,f.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),p=u.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},d=function(t,e){if(Array.isArray(t))return t;if((0,n.default)(Object(t)))return function(t,n){var e=[],o=!0,i=!1,u=void 0;try{for(var f,c=(0,r.default)(t);!(o=(f=c.next()).done)&&(e.push(f.value),!n||e.length!==n);o=!0);}catch(t){i=!0,u=t}finally{try{!o&&c.return&&c.return()}finally{if(i)throw u}}return e}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t._typeof=e,t._classCallCheck=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},t._createClass=l,t._defineProperty=function(t,n,e){return n in t?(0,f.default)(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},t._extends=p,t._inherits=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":(0,a.default)(n)));t.prototype=(0,i.default)(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(o.default?(0,o.default)(t,n):t.__proto__=n)},t._interopRequireWildcard=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n},t._possibleConstructorReturn=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=(void 0===n?"undefined":(0,a.default)(n))&&"function"!=typeof n?t:n},t._slicedToArray=d,t._interopRequireDefault=function(t){return t&&t.__esModule?t:{default:t}}}("object"===(void 0===t?"undefined":(0,a.default)(t))&&t||"object"===("undefined"==typeof window?"undefined":(0,a.default)(window))&&window)}).call(this,e(33))},function(t,n,e){t.exports={default:e(74),__esModule:!0}},function(t,n,e){e(29),e(18),t.exports=e(75)},function(t,n,e){var r=e(46),o=e(1)("iterator"),i=e(12);t.exports=e(0).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(r(n))}},function(t,n,e){t.exports={default:e(77),__esModule:!0}},function(t,n,e){e(29),e(18),t.exports=e(78)},function(t,n,e){var r=e(8),o=e(79);t.exports=e(0).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},function(t,n,e){var r=e(46),o=e(1)("iterator"),i=e(12);t.exports=e(0).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){t.exports={default:e(81),__esModule:!0}},function(t,n,e){e(82),t.exports=e(0).Object.setPrototypeOf},function(t,n,e){var r=e(6);r(r.S,"Object",{setPrototypeOf:e(83).set})},function(t,n,e){var r=e(9),o=e(8),i=function(t,n){if(o(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(37)(Function.call,e(45).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return i(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:i}},function(t,n,e){t.exports={default:e(85),__esModule:!0}},function(t,n,e){e(86);var r=e(0).Object;t.exports=function(t,n){return r.create(t,n)}},function(t,n,e){var r=e(6);r(r.S,"Object",{create:e(22)})},function(t,n,e){t.exports={default:e(88),__esModule:!0}},function(t,n,e){e(89),t.exports=e(0).Object.assign},function(t,n,e){var r=e(6);r(r.S+r.F,"Object",{assign:e(90)})},function(t,n,e){"use strict";var r=e(3),o=e(15),i=e(32),u=e(17),f=e(28),c=e(42),a=Object.assign;t.exports=!a||e(11)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=a({},t)[e]||Object.keys(a({},n)).join("")!=r}))?function(t,n){for(var e=f(t),a=arguments.length,s=1,l=i.f,p=u.f;a>s;)for(var d,y=c(arguments[s++]),v=l?o(y).concat(l(y)):o(y),h=v.length,b=0;h>b;)d=v[b++],r&&!p.call(y,d)||(e[d]=y[d]);return e}:a},function(t,n,e){t.exports={default:e(92),__esModule:!0}},function(t,n,e){e(93);var r=e(0).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){var r=e(6);r(r.S+r.F*!e(3),"Object",{defineProperty:e(4).f})}]);
define("demo.init", function(require) {/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://g.alicdn.com/code/npm/@ali/hlw-v1-rax-play-pi-hollywood/1.0.0/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _rax = __webpack_require__(2);

	var _hlwV1YkKukanTips = __webpack_require__(4);

	var _hlwV1YkKukanTips2 = _interopRequireDefault(_hlwV1YkKukanTips);

	var _localTestPageData = __webpack_require__(138);

	var _localTestPageData2 = _interopRequireDefault(_localTestPageData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// eslint-disable-next-line no-unused-vars
	function make(moduleName, deps, func) {
	  try {
	    // eslint-disable-next-line no-eval
	    return eval('define(\'' + moduleName + '\', deps, func)');
	  } catch (e) {
	    console.error(e);
	  }
	  return null;
	}

	// 补齐本地测试环境pagedata
	// eslint-disable-next-line
	make('@page/data', [], function (require, exports, module) {
	  module.exports = _localTestPageData2.default;
	});

	// // 补齐本地测试环境module依赖
	make('npm/@ali/hlw-v1-yk-kukan-tips/index', [], function (require, exports, module) {
	  module.exports = _hlwV1YkKukanTips2.default;
	});

	__webpack_require__(139);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(3);
	} else {
	  module.exports = require('./lib/index.js');
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function () {
	  var P = { n: 1, t: !1, driver: null, rootComponents: {}, rootInstances: {}, owner: null };function l(n, t, i, r, u) {
	    return { type: n, key: t, ref: i, props: r, _owner: u };
	  }function x(n) {
	    return null === n;
	  }function a(n) {
	    return "function" == typeof n;
	  }function u(n) {
	    return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n));
	  }function e(n) {
	    return "[object Object]" === s.toString.call(n);
	  }function A(n) {
	    return Array.isArray(n);
	  }function o(n) {
	    return "string" == typeof n;
	  }function f(n) {
	    return "number" == typeof n;
	  }function v() {}var s = {};function d(n) {
	    if (null == n) return n;var t = [];return function n(t, i) {
	      if (A(t)) for (var r = 0, u = t.length; r < u; r++) {
	        n(t[r], i);
	      } else i.push(t);
	    }(n, t), t.length - 1 ? t : t[0];
	  }var t = [],
	      i = [],
	      c = [],
	      h = setTimeout;function _(n) {
	    var t;while (t = n.shift()) {
	      t();
	    }
	  }function r(n) {
	    0 === t.length && h(p), t.push(n);
	  }function p() {
	    _(t);
	  }function m(n) {
	    0 === i.length && h(w), i.push(n);
	  }function w() {
	    _(i);
	  }function y(n) {
	    c.push(n);
	  }function b(n, t, i) {
	    var r,
	        r = void 0 === i ? "" : " got: " + (e(r = i) ? Object.keys(r) : r);return Error(n + ": #" + t + ", " + ((t = P.owner) ? "check <" + t.i() + ">" : "no owner") + "." + r);
	  }function j(n, t) {
	    throw b("Error", n, t);
	  }function C(n, t) {
	    var i = b("Warn", n, t);h(function () {
	      throw i;
	    }, 0);
	  }var g = { key: !0, ref: !0 };function O(n, t, i) {
	    var r,
	        u = {},
	        e = null,
	        o = null;if (null != t) for (r in o = void 0 === t.ref ? null : t.ref, e = void 0 === t.key ? null : "" + t.key, t) {
	      g[r] || (u[r] = t[r]);
	    }var f = arguments.length - 2;if (0 < f) if (1 != f || A(i)) {
	      var s = i;if (1 < f) {
	        s = Array(f);for (var c = 0; c < f; c++) {
	          s[c] = arguments[c + 2];
	        }
	      }u.children = d(s);
	    } else u.children = i;if (n && n.defaultProps) {
	      var h = n.defaultProps;for (r in h) {
	        void 0 === u[r] && (u[r] = h[r]);
	      }
	    }return null == n && (n = v, C(0)), new l(n, e, o, u, P.owner);
	  }function k(n, t, i) {
	    for (var r = 0, u = n && n.length; r < u; r++) {
	      n[r].call(t, i);
	    }
	  }var E = s.hasOwnProperty;function I(n, t) {
	    return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
	  }function R(n, t) {
	    if (I(n, t)) return !0;if (!u(n) || x(n) || !u(t) || x(t)) return !1;var i = Object.keys(n);if (i.length !== Object.keys(t).length) return !1;for (var r = 0; r < i.length; r++) {
	      if (!E.call(t, i[r]) || !I(n[i[r]], t[i[r]])) return !1;
	    }return !0;
	  }var S = "_internal",
	      D = "_instance",
	      H = "_nativeNode",
	      N = "_renderedComponent";function U() {
	    return P.owner && P.owner[D];
	  }function F() {
	    var n = U();if (n) return n;j(1);
	  }function L(n, t) {
	    if (!x(t) && n.length === t.length) {
	      for (var i = 0; i < n.length; i++) {
	        if (!I(n[i], t[i])) return;
	      }return 1;
	    }
	  }function M(n) {
	    var r = F(),
	        u = r.getHookID(),
	        e = r.getHooks();e[u] || (a(n) && (n = n()), e[u] = [n, function (n) {
	      P.t || w();var t = e[u],
	          i = t[2];a(n) && (n = n(i)), I(n, i) || (t[2] = n, U() === r ? r.r = !0 : r.u());
	    }, n]);n = e[u];return I(n[0], n[2]) || (n[0] = n[2], r.e = !0), n;
	  }function T(n, t) {
	    V(n, t);
	  }function V(n, t, i) {
	    var r,
	        u,
	        e,
	        o,
	        f = F(),
	        s = f.getHookID(),
	        c = f.getHooks();t = void 0 === t ? null : t, c[s] ? (e = (r = c[s]).o, u = r.f, r.f = t, r.s = u, e.current = n) : (e = function n(t) {
	      if (!t && i) return m(function () {
	        return n(!0);
	      });t = n.current;t && (o.current = t(), n.current = null);
	    }, o = function n(t) {
	      if (!t && i) return m(function () {
	        return n(!0);
	      });t = n.current;t && (t(), n.current = null);
	    }, e.current = n, c[s] = { o: e, c: o, s: t, f: t }, f.didMount.push(e), f.willUnmount.push(function () {
	      return o(!0);
	    }), f.didUpdate.push(function () {
	      var n = c[s],
	          t = n.f,
	          i = n.o;null != t && L(t, n.s) || (o(), i());
	    }));
	  }function W(n, t) {
	    var i = F(),
	        r = i.getHookID(),
	        i = i.getHooks();return t = void 0 === t ? null : t, i[r] && !x(t) && L(t, i[r][1]) || (i[r] = [n(), t]), i[r][0];
	  }function Z(n) {
	    return A(n) ? n : [n];
	  }function $(n, t) {
	    var i;while (n && n[S]) {
	      if (t(n)) {
	        i = n;break;
	      }n = n[S].h;
	    }return i;
	  }var n = 0;function q(n, t) {
	    n.prototype = Object.create(t.prototype), (n.prototype.constructor = n).__proto__ = t;
	  }var z = function () {
	    function n(n) {
	      this.l = n;
	    }var t = n.prototype;return t.a = function (n, t, i) {
	      this._parent = n, this.h = t, this._context = i, this._mountID = P.n++;
	    }, t.v = function () {
	      this.l = this[H] = this._parent = this.h = this._context = null, this[D] && (this[D] = this[D][S] = null);
	    }, t.d = function (n, t, i, r) {
	      this.a(n, t, i), this._(r);r = {};return r[S] = this, r;
	    }, t.unmountComponent = function (n) {
	      this[H] && !n && P.driver.removeChild(this[H], this._parent), this.v();
	    }, t.i = function () {
	      var n = this.l,
	          t = n && n.type;return t && t.displayName || t && t.name || t || n;
	    }, t._ = function (n) {
	      var t = this.p(),
	          i = this._parent;n ? n(t, i) : P.driver.appendChild(t, i);
	    }, t.p = function () {
	      return null == this[H] ? this[H] = this.m() : this[H];
	    }, t.w = function () {
	      return this.p();
	    }, n;
	  }(),
	      B = function (n) {
	    function t() {
	      return n.apply(this, arguments) || this;
	    }q(t, n);var i = t.prototype;return i.m = function () {
	      return P.driver.createEmpty(this);
	    }, i.y = function () {}, t;
	  }(z);function G(n, t, i) {
	    var r = n ? n.ref : null,
	        u = t ? t.ref : null;r !== u && (r && K(n._owner, r, i), u && J(t._owner, u, i));
	  }function J(n, t, i) {
	    n ? (i = i.w(), a(t) ? t(i) : u(t) ? t.current = i : n[D].refs[t] = i) : C(3);
	  }function K(n, t, i) {
	    a(t) ? t(null) : (i = i.w(), u(t) && t.current === i ? t.current = null : n[D].refs[t] === i && delete n[D].refs[t]);
	  }function Q(n) {
	    n = e(n) && null !== n && n.type ? new (o(n.type) ? P.b : P.j)(n) : o(n) || f(n) ? new P.C(n + "") : A(n) ? new P.g(n) : (void 0 === n || x(n) || !1 === n || !0 === n || C(2, n), new P.O(n));return n;
	  }function X(n, t) {
	    var i = x(n),
	        r = x(t);return i || r ? i === r : A(n) && A(t) || (o(n) || f(n) ? o(t) || f(t) : u(n) && u(t) && n.type === t.type && n.key === t.key);
	  }function Y(n, t, i) {
	    t = t && t.key, i = "." + i.toString(36);if (o(t)) {
	      t = "$" + t;return void 0 === n[t] ? t : i;
	    }return i;
	  }function nn(n) {
	    var t = n;while (t = n.h && n.h[S]) {
	      if (t instanceof P.j) n = t;else {
	        for (var i = Object.keys(t.k), r = n.I - 1; 0 <= r; r--) {
	          var u = t.k[i[r]].p();if (!A(u)) return u;if (0 < u.length) return u[u.length - 1];
	        }if (!(t instanceof P.g)) return null;n = t;
	      }
	    }
	  }var tn = function () {
	    function n(n, t) {
	      this.props = n, this.context = t, this.refs = {};
	    }var t = n.prototype;return t.setState = function (n, t) {
	      this.updater.setState(this, n, t);
	    }, t.forceUpdate = function (n) {
	      this.updater.forceUpdate(this, n);
	    }, n;
	  }(),
	      rn = function (i) {
	    function n(n, t) {
	      t = i.call(this, n, t) || this;return t.R = !0, t;
	    }return q(n, i), n;
	  }(tn),
	      un = 1,
	      en = function (t) {
	    function n() {
	      var n = t.call(this) || this;return n.P = [], n.x = un++, n;
	    }q(n, t);var i = n.prototype;return i.w = function () {
	      return this.A().w();
	    }, i.A = function () {
	      return this[S][N];
	    }, i.u = function (n) {
	      this.P = n, this.forceUpdate();
	    }, i.render = function () {
	      return this.P;
	    }, n;
	  }(tn),
	      on = { set: function set(n, t) {
	      n._r || (n._r = t).x && (P.rootInstances[t.x] = t, P.rootComponents[t.x] = t[S]);
	    }, get: function get(n) {
	      return n._r;
	    }, remove: function remove(n) {
	      var t = this.get(n);t && (n._r = null, t.x && (delete P.rootComponents[t.x], delete P.rootInstances[t.x]));
	    }, mount: function mount(n, t, i) {
	      var r = i.parent,
	          u = i.hydrate,
	          i = P.driver;null == t && (t = i.createBody());u = { element: n, container: t, hydrate: u };i.beforeRender && i.beforeRender(u), r && (o = (e = r[S]).S(e._context));var e = this.get(t);if (e && e.x) return o && (e[S].D = o), e.u(n), i.afterRender && i.afterRender(u), e;var o = Q(O(en)).d(t, r, o || {});return this.set(t, o), o.u(n), i.afterRender && i.afterRender(u), o;
	    } },
	      fn = Object.assign,
	      sn = "style",
	      cn = "children",
	      hn = /^on[A-Z]/,
	      ln = function (n) {
	    function t() {
	      return n.apply(this, arguments) || this;
	    }q(t, n);var i = t.prototype;return i.d = function (n, t, i, r) {
	      this.a(n, t, i);var u = this.l,
	          e = u.props,
	          o = u.type,
	          n = e[cn],
	          t = e.append || "tree";this.H = fn({}, e[sn]);e = { type: o, props: e };return (e[S] = this)[D] = e, "tree" === t ? (this.N(n, i), this._(r)) : (this._(r), this.N(n, i)), u && u.ref && J(u._owner, u.ref, this), e;
	    }, i.N = function (n, t) {
	      if (null == n) return n;var i = this.p();return this.U(i, Z(n), t);
	    }, i.U = function (n, t, i, r) {
	      for (var u = this.k = {}, e = [], o = 0, f = t.length; o < f; o++) {
	        var s = t[o],
	            c = Q(s);(u[Y(u, s, o)] = c).I = o;c = c.d(n, this[D], i, r);e.push(c);
	      }return e;
	    }, i.F = function (n) {
	      var t = this.k;if (t) {
	        for (var i in t) {
	          t[i].unmountComponent(n);
	        }this.k = null;
	      }
	    }, i.unmountComponent = function (n) {
	      var t;this[H] && ((t = this.l.ref) && K(this.l._owner, t, this), on.remove(this[H]), n || P.driver.removeChild(this[H], this._parent)), this.F(!0), this.H = null, this.v();
	    }, i.y = function (n, t, i, r) {
	      G(n, this.l = t, this);n = n.props, t = t.props;this.L(n, t), null == n[cn] || A(n[cn]) && 0 === n[cn].length ? this.N(t[cn], r) : this.M(t[cn], r);
	    }, i.L = function (n, t) {
	      var i,
	          r,
	          u,
	          e,
	          o = P.driver,
	          f = this.p();for (i in n) {
	        if (i !== cn && null != n[i] && !t.hasOwnProperty(i)) if (i === sn) {
	          for (r in this.H) {
	            (u = u || {})[r] = "";
	          }this.H = null;
	        } else hn.test(i) ? a(e = n[i]) && o.removeEventListener(f, i.slice(2).toLowerCase(), e) : o.removeAttribute(f, i, n[i]);
	      }for (i in t) {
	        var s,
	            c = t[i],
	            h = i === sn ? this.H : null != n ? n[i] : void 0;if (i !== cn && h !== c && (null != c || null != h)) if (i === sn) {
	          if (c ? c = this.H = fn({}, c) : this.H = null, null != h) {
	            for (r in h) {
	              c && (c[r] || 0 === c[r]) || ((u = u || {})[r] = "");
	            }for (r in c) {
	              h[r] !== c[r] && ((u = u || {})[r] = c[r]);
	            }
	          } else u = c;
	        } else hn.test(i) ? (s = i.slice(2).toLowerCase(), a(h) && o.removeEventListener(f, s, h, t), a(c) && o.addEventListener(f, s, c, t)) : null != c ? o.setAttribute(f, i, c) : o.removeAttribute(f, i, n[i]);
	      }u && o.setStyle(f, u);
	    }, i.M = function (n, t) {
	      var i = this.k,
	          u = P.driver;if (null != n || null != i) {
	        var r = {};if (null != n) for (var e = 0, o = (n = Z(n)).length; e < o; e++) {
	          var f = n[e],
	              s = Y(r, f, e),
	              c = i && i[s],
	              h = c && c.l,
	              l = c && c._context;null != c && X(h, f) ? (h === f && l === t || c.y(h, f, t, t), r[s] = c) : (c && (c.T = !0), r[s] = Q(f));
	        }var a = this.p(),
	            v = A(a),
	            d = null,
	            _ = null,
	            p = !1,
	            m = !1,
	            w = null,
	            y = !(!u.removeChildren || !(x(n) || n && !n.length) || v);if (null != i) {
	          for (var b in i) {
	            var j = i[b],
	                C = j.T || !r[b];d ? C && j.unmountComponent(y) : (m = C, A(_ = (d = j).p()) && (p = 0 === _.length, _ = _[0]));
	          }(v && 0 === a.length || p) && (w = nn(this));
	        }{
	          var _g = function (n, t) {
	            for (var i = 0, r = (n = Z(n)).length; i < r; i++) {
	              w ? u.insertAfter(n[r - 1 - i], w) : _ ? u.insertBefore(n[i], _) : t && u.appendChild(n[i], t);
	            }
	          };

	          var O,
	              k = 0;for (O in r) {
	            var E,
	                I = r[O],
	                R = i && i[O];R === I ? (E = R.p(), R.I !== k && _g(E)) : (v && (a = this._parent), I.d(a, this[D], t, _g)), I.I = k++, A(w = I.p()) && (w = w[w.length - 1]);
	          }
	        }m && d.unmountComponent(y), y && u.removeChildren(this[H]), this.k = r;
	      }
	    }, i.m = function () {
	      var n = this[D],
	          t = P.driver.createElement(n.type, n.props, this);return on.set(t, n), t;
	    }, t;
	  }(z),
	      an = function (n) {
	    function t() {
	      return n.apply(this, arguments) || this;
	    }q(t, n);var i = t.prototype;return i.y = function (n, t) {
	      n !== (t = "" + t) && (this.l = t, P.driver.updateText(this.p(), t));
	    }, i.m = function () {
	      return P.driver.createText(this.l, this);
	    }, t;
	  }(z),
	      vn = function (i) {
	    function n(n, t) {
	      var r = i.call(this) || this;r.V = !0, r.W = n, r.Z = 0, r.$ = 0, r.q = {}, r.r = !1, r.e = !1, r.z = null, r.B = {}, r.didMount = [], r.didUpdate = [], r.willUnmount = [], r.state = s, n._forwardRef && (r.G = r._forwardRef = t);var u = n.J;return u && (r.shouldComponentUpdate = function (n) {
	        for (var t = !0, i = u.length - 1; -1 < i; i--) {
	          if (t = u[i](r.props, n)) break;
	        }return !t || r.G !== r._forwardRef;
	      }), r;
	    }q(n, i);var t = n.prototype;return t.getHooks = function () {
	      return this.q;
	    }, t.getHookID = function () {
	      return ++this.Z;
	    }, t.useContext = function (n) {
	      var t,
	          i,
	          r = this,
	          u = n._contextID,
	          e = this.B[u];return e || (t = n.K(this), e = this.B[u] = { Q: t }, t && (t.X(i = function (n) {
	        e.Y !== n && (r.e = !0, r.u());
	      }), this.willUnmount.push(function () {
	        return t.nn(i);
	      }))), e.Y = e.Q ? e.Q.getValue() : n._defaultValue;
	    }, t.componentWillMount = function () {
	      this.e = !0;
	    }, t.componentDidMount = function () {
	      k(this.didMount);
	    }, t.componentWillReceiveProps = function () {
	      this.e = !0;
	    }, t.componentDidUpdate = function () {
	      k(this.didUpdate);
	    }, t.componentWillUnmount = function () {
	      k(this.willUnmount);
	    }, t.u = function () {
	      this[S].tn = !0, this.setState(s);
	    }, t.render = function () {
	      this.Z = 0, this.$ = 0, this.r = !1;var n = this.W(this.props, this._forwardRef || this.context);while (this.r) {
	        this.$++, 24 < this.$ && j(4), this.Z = 0, this.r = !1, n = this.W(this.props, this._forwardRef || this.context);
	      }return this.e && (this.z = n, this.e = !1), this.z;
	    }, n;
	  }(tn),
	      dn = [];function _n(n) {
	    return n.in;
	  }function pn(n) {
	    var t,
	        i,
	        r = n[S];r && (P.t = !0, t = r.l, i = r._context, n = r.D || i, r.D = void 0, (_n(r) || r.tn) && (r.y(t, t, i, n), _(c)), P.t = !1);
	  }function mn(n, t) {
	    return t[S]._mountID - n[S]._mountID;
	  }function wn() {
	    if (P.t) return r(wn);var n,
	        t = dn;if (0 < t.length) {
	      w(), dn = [], 1 < t.length && (t = t.filter(function (n) {
	        return !!n[S];
	      }).sort(mn));while (n = t.pop()) {
	        pn(n);
	      }
	    }
	  }function yn(n, t) {
	    ~dn.indexOf(n) || dn.push(n), t ? 1 < dn.length || r(wn) : wn();
	  }function bn(n, t, i) {
	    var r,
	        u,
	        e = n[S];e && (i && (u = i, ((r = e).rn || (r.rn = [])).push(u)), r = e[N], t ? (u = t, (_n(t = e) || (t.in = [])).push(u), !e.un && r && yn(n, !0)) : (e.tn = !0, r && yn(n)));
	  }var jn = { setState: function setState(n, t, i) {
	      P.t || w(), bn(n, t, i);
	    }, forceUpdate: function forceUpdate(n, t) {
	      bn(n, null, t);
	    } };function Cn(n, t, i) {
	    try {
	      return n();
	    } catch (n) {
	      i ? i(n) : (r = n, (u = $(t, function (n) {
	        return n.componentDidCatch || n.constructor && n.constructor.getDerivedStateFromError;
	      })) ? y(function () {
	        var n = u[S];n && Cn(function () {
	          var n;u.componentDidCatch && u.componentDidCatch(r), u.constructor && u.constructor.getDerivedStateFromError && (n = u.constructor.getDerivedStateFromError(), u.setState(n));
	        }, n.h);
	      }) : h(function () {
	        throw r;
	      }, 0));
	    }var r, u;
	  }function gn(n, t) {
	    y(function () {
	      Cn(n, t);
	    });
	  }function On(n, t) {
	    n && gn(function () {
	      k(n, t);
	    }, t);
	  }var kn = function (n) {
	    function t() {
	      return n.apply(this, arguments) || this;
	    }q(t, n);var i = t.prototype;return i.d = function (n, t, i, r) {
	      this.a(n, t, i);var u,
	          e,
	          n = this.l,
	          o = n.type,
	          f = n.ref,
	          s = n.props,
	          c = o.prototype,
	          h = this.en(i);if (Cn(function () {
	        c && c.render ? u = new o(s, h) : a(o) ? u = new vn(o, f) : j(6, o);
	      }, t), u) {
	        u.props = s, u.context = h, u.refs = {}, u.updater = jn, void 0 === ((u[S] = this)[D] = u).state && (u.state = null), u.componentWillMount && Cn(function () {
	          u.componentWillMount();
	        }, u), u.state = (P.owner = this).on(s, h);t = this.rn;return this.rn = null, Cn(function () {
	          e = u.render();
	        }, u), P.owner = null, this[N] = Q(e), this[N].d(this._parent, u, this.S(i), r), !n.type._forwardRef && f && J(n._owner, f, this), u.componentDidMount && gn(function () {
	          u.componentDidMount();
	        }, u), On(t, u), u;
	      }
	    }, i.unmountComponent = function (n) {
	      var t,
	          i,
	          r = this[D];r && r.componentWillUnmount && Cn(function () {
	        r.componentWillUnmount();
	      }, r), null != this[N] && (i = (t = this.l).ref, !t.type._forwardRef && i && K(t._owner, i, this), this[N].unmountComponent(n), this[N] = null), this.in = null, this.tn = !1, this.v();
	    }, i.en = function (n) {
	      var t = {},
	          i = this.l.type.contextTypes;if (i) for (var r in i) {
	        t[r] = n[r];
	      }return t;
	    }, i.S = function (n) {
	      var t = this[D],
	          t = t.getChildContext && t.getChildContext();return t ? fn({}, n, t) : n;
	    }, i.on = function (n, t) {
	      var i = this[D],
	          r = this.in;if (!r) return i.state;this.in = null;for (var u = fn({}, i.state), e = 0; e < r.length; e++) {
	        var o = r[e];fn(u, a(o) ? o.call(i, u, n, t) : o);
	      }return u;
	    }, i.y = function (s, c, n, h) {
	      var l = this,
	          a = this[D];a && Cn(function () {
	        var n, t;l._context === h ? n = a.context : (n = l.en(h), f = !0), t = c.props, s !== c && (f = !0), f && a.componentWillReceiveProps && (l.un = !0, a.componentWillReceiveProps(t, n), l.un = !1), l.l.type._forwardRef ? (a.G = s.ref, a._forwardRef = c.ref) : G(s, c, l);var i,
	            r = !0,
	            u = a.props,
	            e = a.state,
	            o = l.on(t, n),
	            f = l.rn;l.rn = null, l.tn || (a.shouldComponentUpdate ? r = a.shouldComponentUpdate(t, o, n) : a.R && (r = !R(u, t) || !R(e, o))), r ? (l.tn = !1, i = a.context, a.componentWillUpdate && a.componentWillUpdate(t, o, n), l.l = c, l._context = h, a.props = t, a.state = o, a.context = n, l.fn(h), a.componentDidUpdate && gn(function () {
	          a.componentDidUpdate(u, e, i);
	        }, a)) : (l.l = c, l._context = h, a.props = t, a.state = o, a.context = n), On(f, a);
	      }, a);
	    }, i.fn = function (n) {
	      var t,
	          i,
	          r,
	          o,
	          f,
	          u = this[N],
	          e = u.l,
	          s = this[D];P.owner = this, t = s.render(), P.owner = null, X(e, t) ? (i = u._context, r = this.S(n), e === t && i === r || u.y(e, t, i, r)) : (o = null, A(f = u.p()) && 0 === f.length && null == s.x && (o = nn(u)), u.unmountComponent(!0), this[N] = Q(t), this[N].d(this._parent, s, this.S(n), function (n, t) {
	        var i = P.driver;f = Z(f), n = Z(n);for (var r = 0; r < n.length; r++) {
	          var u = n[r];f[r] ? i.replaceChild(u, f[r]) : o ? i.insertAfter(u, o) : i.appendChild(u, t), o = u;
	        }for (var e = n.length; e < f.length; e++) {
	          i.removeChild(f[e]);
	        }
	      }));
	    }, i.p = function () {
	      var n = this[N];if (n) return n.p();
	    }, i.w = function () {
	      var n = this[D];return n.V ? null : n;
	    }, t;
	  }(z),
	      En = function (n) {
	    function t() {
	      return n.apply(this, arguments) || this;
	    }q(t, n);var i = t.prototype;return i.d = function (n, t, i, r) {
	      this.a(n, t, i);var t = this[D] = {},
	          u = [];if ((t[S] = this).U(this._parent, this.l, i, function (n) {
	        n = Z(n);for (var t = 0; t < n.length; t++) {
	          u.push(n[t]);
	        }
	      }), r) r(u, n);else for (var e = 0; e < u.length; e++) {
	        P.driver.appendChild(u[e], n);
	      }return t;
	    }, i.unmountComponent = function (n) {
	      if (!n) for (var t = this.p(), i = 0, r = t.length; i < r; i++) {
	        P.driver.removeChild(t[i]);
	      }this.F(!0), this.v();
	    }, i.y = function (n, t, i, r) {
	      this.l = t, this.M(this.l, r);
	    }, i.p = function () {
	      var t = this.k || {};return [].concat.apply([], Object.keys(t).map(function (n) {
	        return t[n].p();
	      }));
	    }, t;
	  }(ln);rn = { __proto__: null, createElement: O, createContext: function createContext(f) {
	      var s = "_c" + n++;function c(n) {
	        return $(n, function (n) {
	          return n.sn === s;
	        });
	      }return { Provider: function () {
	          function n() {
	            this.sn = s, this.cn = [];
	          }var t = n.prototype;return t.X = function (n) {
	            this.cn.push(n);
	          }, t.nn = function (t) {
	            this.cn = this.cn.filter(function (n) {
	              return n !== t;
	            });
	          }, t._getChildContext = function () {
	            var n = {};return n[s] = this, n;
	          }, t.getValue = function () {
	            return void 0 !== this.props.value ? this.props.value : f;
	          }, t.componentDidUpdate = function (n) {
	            this.props.value !== n.value && k(this.cn, null, this.getValue());
	          }, t.render = function () {
	            return this.props.children;
	          }, n;
	        }(), Consumer: function Consumer(n, t) {
	          var i = this,
	              r = M(function () {
	            return t[s] || c(i);
	          })[0],
	              u = r ? r.getValue() : f,
	              e = M(u),
	              o = e[1];if (u === e[0]) {
	            T(function () {
	              if (r) return r.X(o), function () {
	                r.nn(o);
	              };
	            }, []);n = Z(n.children)[0];return a(n) ? n(u) : void 0;
	          }o(u);
	        }, _contextID: s, _defaultValue: f, K: c };
	    }, createRef: function createRef() {
	      return { current: null };
	    }, forwardRef: function forwardRef(n) {
	      return n._forwardRef = !0, n;
	    }, memo: function memo(n, t) {
	      return t = t || R, n.J ? n.J.push(t) : n.J = [t], n;
	    }, Fragment: function Fragment(n) {
	      return n.children;
	    }, render: function render(n, t, i, r) {
	      var u;return a(i) && (r = i, i = null), u = (u = i = i || s).driver, P.O = B, P.b = ln, P.C = an, P.g = En, P.j = kn, (P.driver = u || P.driver) || j(5), i = on.mount(n, t, i).w(), r && r.call(i), i;
	    }, Component: tn, version: "1.1.0", shared: { Host: P, Instance: on, Element: l, flattenChildren: d }, useState: M, useContext: function useContext(n) {
	      return F().useContext(n);
	    }, useEffect: function useEffect(n, t) {
	      V(n, t, !0);
	    }, useLayoutEffect: T, useRef: function useRef(n) {
	      var t = F(),
	          i = t.getHookID();return (t = t.getHooks())[i] || (t[i] = { current: n }), t[i];
	    }, useCallback: function useCallback(n, t) {
	      return W(function () {
	        return n;
	      }, t);
	    }, useMemo: W, useReducer: function useReducer(n, t, i) {
	      var u = F(),
	          e = u.getHookID(),
	          o = u.getHooks(),
	          r = o[e];if (!r) {
	        t = a(i) ? i(t) : t;return o[e] = [t, function (n) {
	          P.t || w();var t,
	              i,
	              r = o[e][2];U() === u ? (r.hn.push(n), u.r = !0) : I(i = (0, r.ln)(t = r.an, n), t) || (r.an = i, r.hn.push(n), u.u());
	        }, { hn: [], ln: n, an: t }];
	      }var f = r[2],
	          s = r[0];if (0 < u.$) for (var c = 0; c < f.hn.length; c++) {
	        s = n(s, f.hn[c]);
	      } else s = f.an;return I(s, r[0]) || (r[0] = s, u.e = !0), f.ln = n, f.an = s, f.hn.length = 0, o[e];
	    }, useImperativeHandle: function useImperativeHandle(n, t, i) {
	      T(function () {
	        return a(n) ? (n(t()), function () {
	          return n(null);
	        }) : null != n ? (n.current = t(), function () {
	          n.current = null;
	        }) : void 0;
	      }, A(i) ? i.concat([n]) : null);
	    }, PureComponent: rn },  true ? module.exports = rn : self.Rax = rn;
	}();
	//# sourceMappingURL=rax.min.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// phone端模块入口
	module.exports = __webpack_require__(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_hlw-v1-yk-kukan-tips@1.0.3@@ali/hlw-v1-yk-kukan-tips/src/phone/index.js';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _raxDiv = __webpack_require__(6);

	var _raxDiv2 = _interopRequireDefault(_raxDiv);

	var _hlwRaxText = __webpack_require__(129);

	var _hlwRaxText2 = _interopRequireDefault(_hlwRaxText);

	var _raxBase = __webpack_require__(31);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _raxImg = __webpack_require__(15);

	var _raxImg2 = _interopRequireDefault(_raxImg);

	var _universalEnv = __webpack_require__(11);

	var _ut = __webpack_require__(133);

	var _ut2 = _interopRequireDefault(_ut);

	var _rax = __webpack_require__(2);

	var _universalParam = __webpack_require__(40);

	var _log = __webpack_require__(134);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // 由于引入了服务端渲染功能开发前请仔细阅读好莱坞Rax1.0组件开发规范，否则应用必挂！！！ https://yuque.antfin-inc.com/hollywood/development/spozfi


	var PluginModule = {};
	try {
	  PluginModule = __webpack_require__(122);
	} catch (e) {}
	var styles = __webpack_require__(137);

	var TAG = 'kukan-tips:>>';

	var globalEvent = {};

	if (_universalEnv.isWeex) {
	  try {
	    if (typeof weex !== 'undefined') {
	      globalEvent = weex.requireModule('globalEvent');
	    } else {
	      globalEvent = __webpack_require__(47);
	    }
	  } catch (e) {
	    console.error(e);
	  }
	} else {
	  globalEvent = {
	    addEventListener: function addEventListener() {}
	  };
	}
	var playInfoModule = null;
	var placeholder = '//img.alicdn.com/tfs/TB1ByCEX3aH3KVjSZFjXXcFWpXa-148-148.png';

	/** 埋点 **/
	var UT_PAGENAME = 'page_playpage';
	var UT_SPMA = 'a2h08';
	var UT_SPMB = '8165823';

	var Page = function (_Component) {
	  _inherits(Page, _Component);

	  function Page(props) {
	    _classCallCheck(this, Page);

	    // globalEvent && globalEvent.addEventListener('vicPluginWillAppearEvent', this.pageAppear);
	    // globalEvent && globalEvent.addEventListener('vicPluginWillDisappearEvent', this.pageDisappear);
	    // /** 埋点 **/
	    // UT.setPage(UT_PAGENAME, UT_SPMA, UT_SPMB);
	    // this.renderInfo = {};

	    // try {
	    //   playInfoModule = require('@weex-module/VICWeexPlayInfoModule');
	    // } catch (e) { }

	    // const queryParams = unparam(location.search);
	    // this.pluginId = queryParams && queryParams.plugin_id ? queryParams.plugin_id : undefined;

	    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

	    _this.getPlayedTime = function (tag) {
	      if (playInfoModule) {
	        playInfoModule.getPlayedTime(function (info) {
	          _log2.default.d(TAG, tag + 'time = ' + info.playedTime);
	        });
	      }
	    };

	    _this.pageDisappear = function () {
	      if (!_this.userClose) {
	        _log2.default.d(TAG, 'nextStage = ' + _this.nextStageId);
	        PluginModule.loadStage(_this.nextStageId);
	      }
	    };

	    _this.pageAppear = function () {
	      _this.hasAppear = true;
	      if (!_this.state.leftTime || _this.intervalTimer) {
	        return;
	      }
	      _this.startTimer();
	    };

	    _this.startTimer = function () {

	      var second = _this.state.leftTime;
	      _this.intervalTimer = setInterval(function () {
	        // 倒计时到
	        _log2.default.d(TAG, 'update = ' + second);
	        if (second > 0) {
	          // do something
	          second = second - 1;
	          _this.setState({
	            leftTime: second
	          });

	          //倒计时结束
	        } else {
	          _log2.default.d(TAG, 'time out ');
	          clearInterval(_this.intervalTimer);
	        }
	      }, 1000);
	    };

	    _this.handleAvatarError = function () {
	      _this.setState({
	        avatarImage: { uri: placeholder }
	      });
	    };

	    _this.closeTip = function () {
	      // pluginModule.unload(this.pluginId);
	      // pluginModule.close(19612, 2);
	      _this.userClose = true;
	      PluginModule.close(_this.pluginId);
	    };

	    _this.state = {
	      avatarImage: undefined,
	      title: undefined,
	      subTitle: undefined,
	      leftTime: undefined
	    };

	    // this.trackData = {
	    //   spm: UT.getCurPageSPMCD('fullplayer.kukanbaiketipsexpo'),
	    // };
	    // this.track_info = {
	    // };

	    return _this;
	  }

	  //从 native 获取参数


	  _createClass(Page, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // PluginModule && PluginModule.stageInfo && PluginModule.stageInfo(this.pluginId, (info) => {

	      //   if (info && info.success) {
	      //     if (info.handlerMap && info.handlerMap.click
	      //       && info.handlerMap.click.actionResponseType == 'activate_stage'
	      //       && info.handlerMap.click.detailDTO
	      //       && info.handlerMap.click.detailDTO.stageIdList
	      //       && info.handlerMap.click.detailDTO.stageIdList.length > 0) {
	      //       this.nextStageId = info.handlerMap.click.detailDTO.stageIdList[0];
	      //     }
	      //     const renderInfo = info.renderInfo;
	      //     // 倒计时
	      var second = undefined;
	      //     if (renderInfo.tipsCountdownTime) {
	      //       second = renderInfo.tipsCountdownTime > 1000 ? renderInfo.tipsCountdownTime / 1000 : renderInfo.tipsCountdownTime;
	      //     }
	      //     this.renderInfo = renderInfo;
	      //     // 埋点信息
	      //     if (info && info.extend && info.extend.ut && info.extend.ut.exposure && info.extend.ut.exposure.trackInfo) {
	      //       this.track_info.iid = info.extend.ut.exposure.trackInfo.iid;
	      //       this.track_info.type = info.extend.ut.exposure.trackInfo.type;
	      //     }
	      //     let preloadResource = false;
	      //     let preloadData = false;
	      //     if (info.handlerMap && info.handlerMap.preloadResource) {
	      //       preloadResource = info.handlerMap.preloadResource.preload;
	      //     }
	      //     if (info.handlerMap && info.handlerMap.preloadData) {
	      //       preloadData = info.handlerMap.preloadData.preload;
	      //     }

	      this.setState({
	        avatarImage: { uri: this.props.data.imgurl },
	        title: this.props.data.name,
	        subTitle: this.props.data.desc,
	        leftTime: second
	      }, function () {
	        // Tlog.d(TAG, 'appear = ' + this.hasAppear + ', preload data = ' + preloadData + ', preload resource = ' + preloadResource);
	        // if ((this.hasAppear || (!preloadData && !preloadResource)) && !this.intervalTimer) {
	        //   this.startTimer();
	        // }
	      });
	      //   }
	      // });
	      // // 埋点信息
	      // if (this.pluginId !== undefined && playInfoModule) {
	      //   playInfoModule.getVideoInfo((info) => {

	      //     if (info && info.vid && info.showId) {
	      //       this.track_info.vid = info.vid;
	      //       this.track_info.sid = info.showId;
	      //     }
	      //   });
	      // }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // 埋点信息
	      // if (this.pluginId !== undefined && playInfoModule) {
	      //   playInfoModule.getPlayedTime((info) => {

	      //     if (info && info.playedTime) {
	      //       this.track_info.time = info.playedTime / 1000;
	      //     }
	      //     this.trackData.track_info = JSON.stringify(this.track_info);
	      //     UT.expose('ShowContent', this.trackData);
	      //   });
	      // } else {
	      //   this.trackData.track_info = JSON.stringify(this.track_info);
	      //   UT.expose('ShowContent', this.trackData);
	      // }

	    }
	  }, {
	    key: 'render',
	    value: function () {
	      this.props;

	      return (0, _rax.createElement)(
	        _raxDiv2.default,
	        { style: styles.app, onClick: function onClick() {
	            alert(1);
	          }, __source: {
	            fileName: _jsxFileName,
	            lineNumber: 216
	          }
	        },
	        this.state.avatarImage !== undefined && (0, _rax.createElement)(
	          _raxDiv2.default,
	          { style: styles.appLeftWapper, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 219
	            }
	          },
	          (0, _rax.createElement)(_raxImg2.default, { resizeMode: 'cover', style: styles.appLeftBackground, source: { uri: 'https://img.alicdn.com/tfs/TB1CjNUXWWs3KVjSZFxXXaWUXXa-148-106.png' }, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 220
	            }
	          }),
	          (0, _rax.createElement)(_raxImg2.default, { resizeMode: 'cover',
	            style: styles.appLeftAvatarImage,
	            source: this.state.avatarImage,
	            onError: this.handleAvatarError, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 221
	            }
	          }),
	          (0, _rax.createElement)(
	            _hlwRaxText2.default,
	            { style: styles.appAD, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 227
	              }
	            },
	            '\u5E7F\u544A'
	          )
	        ),
	        (this.state.title !== undefined || this.state.subTitle !== undefined) && (0, _rax.createElement)(
	          _raxDiv2.default,
	          { style: styles.appRightWapper, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 236
	            }
	          },
	          (0, _rax.createElement)(
	            _raxDiv2.default,
	            { style: styles.appRightBackground, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 238
	              }
	            },
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appRightBackground1, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 239
	              }
	            }),
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appRightBackground2, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 240
	              }
	            })
	          ),
	          (0, _rax.createElement)(
	            _raxDiv2.default,
	            { style: styles.appTopLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 243
	              }
	            },
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appLeftLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 244
	              }
	            }),
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appRightLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 245
	              }
	            })
	          ),
	          (0, _rax.createElement)(
	            _raxDiv2.default,
	            { style: styles.appBottomLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 248
	              }
	            },
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appLeftLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 249
	              }
	            }),
	            (0, _rax.createElement)(_raxDiv2.default, { style: styles.appRightLine, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 250
	              }
	            })
	          ),
	          (0, _rax.createElement)(_raxDiv2.default, { style: styles.appSeparateLine, __source: {
	              fileName: _jsxFileName,
	              lineNumber: 253
	            }
	          }),
	          this.state.title !== undefined && (0, _rax.createElement)(
	            _hlwRaxText2.default,
	            { style: styles.appTitle, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 257
	              }
	            },
	            this.state.title
	          ),
	          (0, _rax.createElement)(
	            _raxDiv2.default,
	            { style: styles.appSubTitleWrapper, __source: {
	                fileName: _jsxFileName,
	                lineNumber: 262
	              }
	            },
	            this.state.subTitle !== undefined && (0, _rax.createElement)(
	              _hlwRaxText2.default,
	              { style: styles.appSubTitle, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 265
	                }
	              },
	              this.state.subTitle
	            ),
	            this.state.leftTime !== undefined && (0, _rax.createElement)(
	              _hlwRaxText2.default,
	              { style: styles.appSeconds, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 272
	                }
	              },
	              this.state.leftTime
	            ),
	            this.state.leftTime !== undefined && (0, _rax.createElement)(
	              _hlwRaxText2.default,
	              { style: styles.appUnit, __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 279
	                }
	              },
	              's'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Page;
	}(_rax.Component);

	exports.default = Page;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(7);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/** @jsx createElement */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-div@2.0.12@@ali/rax-div/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _raxView = __webpack_require__(8);

	var _raxView2 = _interopRequireDefault(_raxView);

	var _raxImg = __webpack_require__(15);

	var _raxImg2 = _interopRequireDefault(_raxImg);

	var _raxBase = __webpack_require__(31);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isInChannel = _raxBase2.default.pageInfo.isInChannel;

	// 坑位曝光依赖
	// 如果是大作页容器，默认false，等待触发active事件后再去进行坑位曝光。
	// 如果是普通容器，默认true，直接进行坑位曝光。

	var isPageActive = !isInChannel;
	_raxBase2.default.YoukuEvent.on('pageShow', function () {
	  isPageActive = true;
	});
	_raxBase2.default.YoukuEvent.on('pageHide', function () {
	  isPageActive = false;
	});

	var Division = function (_Component) {
	  _inherits(Division, _Component);

	  function Division() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Division);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Division.__proto__ || Object.getPrototypeOf(Division)).call.apply(_ref, [this].concat(args))), _this), _this.doUserTrack = function (type) {
	      if (type === 'click') {
	        _raxBase2.default.sendClickEvent(_this.props);
	      }
	      if (type === 'expose') {
	        _raxBase2.default.sendExposeEvent(_this.props);
	      }
	    }, _this.canExpose = function () {
	      // 判断是否可以执行坑位的曝光操作
	      var trackExpose = !_this.props.disableExposeTrack;
	      return !_this.exposed && isPageActive && _this.divVisible && trackExpose;
	    }, _this.doExpose = function () {
	      if (_this.exposeTimeout || !_this.canExpose()) {
	        return;
	      }
	      _this.exposeTimeout = setTimeout(function () {
	        _this.exposeTimeout = null;
	        if (!_this.canExpose()) {
	          return;
	        }
	        _this.doUserTrack('expose');
	        _this.props.repeatExpose || (_this.exposed = true);
	      }, 100);
	    }, _this.tryClearTimeout = function () {
	      if (_this.exposeTimeout && !_this.canExpose()) {
	        clearTimeout(_this.exposeTimeout);
	        _this.exposeTimeout = null;
	      }
	    }, _this.onClick = function (e) {
	      var _this2 = _this,
	          props = _this2.props;
	      // 执行开发定义的点击回调

	      props.onClick && props.onClick(e);
	      var trackClick = !props.exposeOnly && !props.disableClickTrack;
	      // 点击埋点，如果是禁用Click埋点则不上报
	      trackClick && _this.doUserTrack('click');
	      // 跳转
	      props.jumpType && _raxBase2.default.jumpTo(props);
	      try {
	        // 触发点击事件供全局监听
	        _raxBase2.default.YoukuEvent.fire('divClick', _extends({}, _this.props));
	      } catch (err) {
	        console.error('divClick 事件处理异常catch：');
	        console.error(JSON.stringify(err));
	      }
	    }, _this.onDivAppear = function (e) {
	      // 执行开发定义的点击回调
	      _this.props.onAppear && _this.props.onAppear(e);
	      _this.divVisible = true;
	      _this.doExpose();
	    }, _this.onDivDisappear = function (e) {
	      // 执行开发定义的点击回调
	      _this.props.onDisappear && _this.props.onDisappear(e);
	      _this.divVisible = false;
	      _this.tryClearTimeout();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Division, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      _raxBase2.default.YoukuEvent.on('pageShow', function () {
	        // 清空曝光id列表，返回页面时重复曝光
	        _this3.exposed = false;
	        _this3.doExpose();
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // posId调整后进行一次曝光操作
	      if (nextProps.posId !== this.props.posId) {
	        this.exposed = false;
	        this.doExpose();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var nativeProps = _extends({}, props, {
	        onAppear: this.onDivAppear,
	        onDisappear: this.onDivDisappear
	      });
	      var trackClick = !props.exposeOnly && !props.disableClickTrack;
	      if (props.jumpType || props.jumpUrl || props.posId && trackClick) {
	        // 有需要的时候才能加click不然无法冒泡
	        nativeProps.onClick = this.onClick;
	      }

	      // 处理样式类型
	      var propsStyle = props.style || {};
	      if (propsStyle && Array.isArray(propsStyle) && _raxBase2.default.assignStyle) {
	        // 将数组类型转成对象
	        propsStyle = _raxBase2.default.assignStyle(propsStyle);
	      }
	      // div默认添加position:relative属性
	      if (propsStyle && !propsStyle.position) {
	        propsStyle.position = 'relative';
	      }
	      nativeProps.style = propsStyle;

	      // 处理背景图片
	      var hasBackgroundImage = props.backgroundImage && props.backgroundImage.uri;
	      var backgroundImg = null;
	      if (hasBackgroundImage) {
	        var _props$backgroundImag = props.backgroundImage,
	            uri = _props$backgroundImag.uri,
	            left = _props$backgroundImag.left,
	            top = _props$backgroundImag.top,
	            opacity = _props$backgroundImag.opacity,
	            right = _props$backgroundImag.right,
	            bottom = _props$backgroundImag.bottom,
	            etc = _objectWithoutProperties(_props$backgroundImag, ['uri', 'left', 'top', 'opacity', 'right', 'bottom']);

	        var _props$backgroundImag2 = props.backgroundImage,
	            width = _props$backgroundImag2.width,
	            height = _props$backgroundImag2.height;

	        if (!width && !height) {
	          // 如果宽高都未设定，按容器的宽高来设置背景大小
	          width = propsStyle.width;
	          height = propsStyle.height;
	        }
	        backgroundImg = (0, _rax.createElement)(_raxImg2.default, _extends({
	          key: uri,
	          source: { uri: uri },
	          style: {
	            position: 'absolute',
	            left: left,
	            top: top,
	            right: right,
	            bottom: bottom,
	            width: width,
	            height: height,
	            opacity: opacity === undefined ? 1 : opacity
	          },
	          lazyload: false
	        }, etc, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 143
	          }
	        }));
	      }

	      return (0, _rax.createElement)(
	        _raxView2.default,
	        _extends({}, nativeProps, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 163
	          }
	        }),
	        backgroundImg,
	        props.children
	      );
	    }
	  }]);

	  return Division;
	}(_rax.Component);

	exports.default = Division;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _dedupe = _interopRequireDefault(__webpack_require__(9));

	var _universalEnv = __webpack_require__(11);

	var _index = _interopRequireDefault(__webpack_require__(14));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var __rest = void 0 && (void 0).__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var _styleSheet = _index.default;

	function _getClassName() {
	  var className = [];
	  var args = arguments[0];
	  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

	  if (type === 'string') {
	    args = args.trim();
	    args && className.push(args);
	  } else if (type === 'array') {
	    args.forEach(function (cls) {
	      cls = _getClassName(cls).trim();
	      cls && className.push(cls);
	    });
	  } else if (type === 'object') {
	    for (var k in args) {
	      k = k.trim();

	      if (k && args.hasOwnProperty(k) && args[k]) {
	        className.push(k);
	      }
	    }
	  }

	  return className.join(' ').trim();
	}

	function _getStyle(classNameExpression) {
	  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

	  var className = _getClassName(classNameExpression);

	  var classNameArr = className.split(/\s+/);
	  var style = cache[className];

	  if (!style) {
	    style = {};

	    if (classNameArr.length === 1) {
	      style = _styleSheet[classNameArr[0].trim()];
	    } else {
	      classNameArr.forEach(function (cls) {
	        var value = _styleSheet[cls.trim()];

	        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	          style = Object.assign(style, _styleSheet[cls.trim()]);
	        }
	      });
	    }

	    cache[className] = style;
	  }

	  return style;
	}

	var View = (0, _rax.forwardRef)(function (props, ref) {
	  var selfRef = (0, _rax.useRef)(null);

	  var className = props.className,
	      style = props.style,
	      onFirstAppear = props.onFirstAppear,
	      onAppear = props.onAppear,
	      rest = __rest(props, ["className", "style", "onFirstAppear", "onAppear"]);

	  if (_universalEnv.isMiniApp) {
	    // For miniapp runtime pre-compile
	    return (0, _rax.createElement)("view", _extends({}, rest, {
	      onAppear: onAppear,
	      onDisappear: rest.onDisappear,
	      onFirstAppear: onFirstAppear,
	      ref: ref,
	      className: "rax-view " + className,
	      style: Object.assign({}, _getStyle("rax-view " + className), style)
	    }));
	  }

	  var handleAppear = onAppear;

	  if (onFirstAppear) {
	    handleAppear = function (event) {
	      onAppear && onAppear(event);

	      if (!selfRef.triggeredAppear) {
	        onFirstAppear && onFirstAppear(event);
	      } else {
	        selfRef.triggeredAppear = true;
	      }
	    };
	  }

	  return (0, _rax.createElement)("div", _extends({}, rest, {
	    onAppear: handleAppear,
	    ref: ref,
	    className: (0, _dedupe.default)(_universalEnv.isWeex ? '' : 'rax-view', className),
	    style: Object.assign({}, _getStyle((0, _dedupe.default)(_universalEnv.isWeex ? '' : 'rax-view', className)), style)
	  }));
	});
	View.displayName = 'View';
	var _default = View;
	exports.default = _default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var classNames = function () {
			// don't inherit from Object so we can skip hasOwnProperty check later
			// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
			function StorageObject() {}
			StorageObject.prototype = Object.create(null);

			function _parseArray(resultSet, array) {
				var length = array.length;

				for (var i = 0; i < length; ++i) {
					_parse(resultSet, array[i]);
				}
			}

			var hasOwn = {}.hasOwnProperty;

			function _parseNumber(resultSet, num) {
				resultSet[num] = true;
			}

			function _parseObject(resultSet, object) {
				if (object.toString === Object.prototype.toString) {
					for (var k in object) {
						if (hasOwn.call(object, k)) {
							// set value to false instead of deleting it to avoid changing object structure
							// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
							resultSet[k] = !!object[k];
						}
					}
				} else {
					resultSet[object.toString()] = true;
				}
			}

			var SPACE = /\s+/;
			function _parseString(resultSet, str) {
				var array = str.split(SPACE);
				var length = array.length;

				for (var i = 0; i < length; ++i) {
					resultSet[array[i]] = true;
				}
			}

			function _parse(resultSet, arg) {
				if (!arg) return;
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				// 'foo bar'
				if (argType === 'string') {
					_parseString(resultSet, arg);

					// ['foo', 'bar', ...]
				} else if (Array.isArray(arg)) {
					_parseArray(resultSet, arg);

					// { 'foo': true, ... }
				} else if (argType === 'object') {
					_parseObject(resultSet, arg);

					// '130'
				} else if (argType === 'number') {
					_parseNumber(resultSet, arg);
				}
			}

			return function () {
				// don't leak arguments
				// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
				var len = arguments.length;
				var args = Array(len);
				for (var i = 0; i < len; i++) {
					args[i] = arguments[i];
				}

				var classSet = new StorageObject();
				_parseArray(classSet, args);

				var list = [];

				for (var k in classSet) {
					if (classSet[k]) {
						list.push(k);
					}
				}

				return list.join(' ');
			};
		}();

		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(10)) === 'object' && __webpack_require__(10)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _env = __webpack_require__(12);

	Object.keys(_env).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  if (key in exports && exports[key] === _env[key]) return;
	  exports[key] = _env[key];
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.default = exports.isQuickApp = exports.isWeChatMiniProgram = exports.isKuaiShouMiniProgram = exports.isBaiduSmartProgram = exports.isByteDanceMicroApp = exports.isMiniApp = exports.isKraken = exports.isWeex = exports.isNode = exports.isWeb = void 0;

	function isUndef(type) {
	  return type === 'undefined';
	}

	var isWeb = !isUndef(typeof window === 'undefined' ? 'undefined' : _typeof(window)) && 'onload' in window;
	exports.isWeb = isWeb;
	var isNode = !isUndef(typeof process === 'undefined' ? 'undefined' : _typeof(process)) && !!(process.versions && process.versions.node);
	exports.isNode = isNode;
	var isWeex = !isUndef(typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) && WXEnvironment.platform !== 'Web';
	exports.isWeex = isWeex;
	var isKraken = !isUndef(typeof __kraken__ === 'undefined' ? 'undefined' : _typeof(__kraken__));
	exports.isKraken = isKraken;
	var isMiniApp = !isUndef(typeof my === 'undefined' ? 'undefined' : _typeof(my)) && my !== null && !isUndef(_typeof(my.alert));
	exports.isMiniApp = isMiniApp;
	var isByteDanceMicroApp = !isUndef(typeof tt === 'undefined' ? 'undefined' : _typeof(tt)) && tt !== null && !isUndef(typeof tt === 'undefined' ? 'undefined' : _typeof(tt)) && !isUndef(tt.showToast);
	exports.isByteDanceMicroApp = isByteDanceMicroApp;
	var isBaiduSmartProgram = !isUndef(typeof swan === 'undefined' ? 'undefined' : _typeof(swan)) && swan !== null && !isUndef(typeof swan === 'undefined' ? 'undefined' : _typeof(swan)) && !isUndef(swan.showToast);
	exports.isBaiduSmartProgram = isBaiduSmartProgram;
	var isKuaiShouMiniProgram = !isUndef(typeof ks === 'undefined' ? 'undefined' : _typeof(ks)) && ks !== null && !isUndef(typeof ks === 'undefined' ? 'undefined' : _typeof(ks)) && !isUndef(ks.showToast); // In wechat mini program, wx.login is a function
	// In wechat mini propgram webview, there is no wx.login, but exist wx.miniProgram
	// In bytedance maicro app, there is wx variable.

	exports.isKuaiShouMiniProgram = isKuaiShouMiniProgram;
	var isWeChatMiniProgram = !isByteDanceMicroApp && !isUndef(typeof wx === 'undefined' ? 'undefined' : _typeof(wx)) && wx !== null && (!isUndef(_typeof(wx.login)) || !isUndef(_typeof(wx.miniProgram)));
	exports.isWeChatMiniProgram = isWeChatMiniProgram;
	var isQuickApp = !isUndef(typeof global === 'undefined' ? 'undefined' : _typeof(global)) && global !== null && !isUndef(_typeof(global.callNative)) && !isWeex;
	exports.isQuickApp = isQuickApp;
	var _default = {
	  isWeb: isWeb,
	  isNode: isNode,
	  isWeex: isWeex,
	  isKraken: isKraken,
	  isMiniApp: isMiniApp,
	  isByteDanceMicroApp: isByteDanceMicroApp,
	  isBaiduSmartProgram: isBaiduSmartProgram,
	  isKuaiShouMiniProgram: isKuaiShouMiniProgram,
	  isWeChatMiniProgram: isWeChatMiniProgram,
	  isQuickApp: isQuickApp
	};
	exports.default = _default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13), (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function () {
	    return [];
	};

	process.binding = function () {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function () {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {


	  var _styles = {
	  "rax-view": {
	    "boxSizing": "border-box",
	    "display": "flex",
	    "position": "relative",
	    "flexDirection": "column",
	    "flexShrink": 0,
	    "alignContent": "flex-start",
	    "borderWidth": 0,
	    "borderStyle": "solid",
	    "borderColor": "black",
	    "marginTop": 0,
	    "marginRight": 0,
	    "marginBottom": 0,
	    "marginLeft": 0,
	    "paddingTop": 0,
	    "paddingRight": 0,
	    "paddingBottom": 0,
	    "paddingLeft": 0,
	    "minWidth": 0
	  }
	};



	  module.exports = _styles;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(16);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-img@2.0.10@@ali/rax-img/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _raxPicture = __webpack_require__(17);

	var _raxPicture2 = _interopRequireDefault(_raxPicture);

	var _raxBase = __webpack_require__(31);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _universalEnv = __webpack_require__(45);

	var _pictureWeex = __webpack_require__(128);

	var _pictureWeex2 = _interopRequireDefault(_pictureWeex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultProps = {
	  lazyload: false,
	  autoWebp: false,
	  autoCompress: false,
	  autoReplaceDomain: false,
	  autoScaling: false,
	  highQuality: false
	};

	var Img = function (_Component) {
	  _inherits(Img, _Component);

	  function Img() {
	    _classCallCheck(this, Img);

	    return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
	  }

	  _createClass(Img, [{
	    key: 'render',
	    value: function render() {
	      var mergedProps = _extends({}, defaultProps, this.props);
	      var source = mergedProps.source,
	          style = mergedProps.style;
	      // 默认gif图才会original，如果没设置quality而且是gif图，那么设置quality为original

	      if (!mergedProps.quality && source && source.uri && source.uri.indexOf && source.uri.indexOf('.gif') !== -1) {
	        mergedProps.quality = 'original';
	      }

	      // 处理样式类型
	      var propsStyle = style || {};

	      // 处理样式
	      if (propsStyle && Array.isArray(propsStyle) && _raxBase2.default.assignStyle) {
	        // 将数组类型转成对象
	        propsStyle = _raxBase2.default.assignStyle(propsStyle);
	      }

	      // 默认添加position：relative
	      if (!propsStyle.position) {
	        propsStyle.position = 'relative';
	      }

	      mergedProps.style = propsStyle;

	      // 修复weex下切换图片url无效的bug
	      if (_universalEnv.isWeex) {
	        return (0, _rax.createElement)(_pictureWeex2.default, _extends({}, mergedProps, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 56
	          }
	        }));
	      }

	      // 解决手淘H5下r1.ykimg.com域名图片加载不了的问题，替换为m.ykimg.com
	      if (_universalEnv.isWeb && _raxBase2.default.isTaobao && source && source.uri && source.uri.indexOf && source.uri.indexOf('r1.ykimg.com') !== -1) {
	        source.uri = source.uri.replace('r1.ykimg.com', 'm.ykimg.com');
	      }

	      return (0, _rax.createElement)(_raxPicture2.default, _extends({}, mergedProps, {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 71
	        }
	      }));
	    }
	  }]);

	  return Img;
	}(_rax.Component);

	exports.default = Img;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _universalEnv = __webpack_require__(11);

	var _pictureWeex = _interopRequireDefault(__webpack_require__(18));

	var _pictureWeb = _interopRequireDefault(__webpack_require__(21));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var Picture = (0, _rax.forwardRef)(function (props, ref) {
	  if (_universalEnv.isWeex) {
	    return (0, _rax.createElement)(_pictureWeex.default, _extends({}, props, {
	      ref: ref
	    }));
	  } else {
	    return (0, _rax.createElement)(_pictureWeb.default, _extends({}, props, {
	      ref: ref
	    }));
	  }
	});
	Picture.displayName = 'Picture';
	var _default = Picture;
	exports.default = _default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _raxImage = _interopRequireDefault(__webpack_require__(19));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var __rest = void 0 && (void 0).__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var Picture = (0, _rax.forwardRef)(function (props, ref) {
	  var children = props.children,
	      _props$style = props.style,
	      style = _props$style === void 0 ? {} : _props$style,
	      source = props.source,
	      resizeMode = props.resizeMode,
	      width = props.width,
	      height = props.height,
	      defaultHeight = props.defaultHeight,
	      rest = __rest(props, ["children", "style", "source", "resizeMode", "width", "height", "defaultHeight"]);

	  var styleWidth = style.width; // style width of picture

	  var styleHeight = style.height; // style width of picture
	  // according to the original height and width of the picture

	  if (!styleHeight && styleWidth && width && height) {
	    var pScaling = width / (typeof styleWidth === 'string' ? parseInt(styleWidth, 10) : styleWidth);
	    styleHeight = parseInt(height / pScaling + '', 10);
	  }

	  if (!styleHeight) {
	    styleHeight = defaultHeight;

	    if (!resizeMode) {
	      // ensure that the picture can be displayed
	      resizeMode = 'contain';
	    }
	  }

	  var newStyle = Object.assign({
	    height: styleHeight
	  }, style);

	  if (resizeMode) {
	    newStyle.resizeMode = resizeMode;
	  }

	  return (0, _rax.createElement)(_raxImage.default, _extends({}, rest, {
	    ref: ref,
	    source: source,
	    style: newStyle
	  }), children);
	});
	Picture.displayName = 'Picture';

	function shouldComponentUpdate(preProps, nextProps) {
	  if (preProps.forceUpdate || preProps.children) {
	    return true;
	  }

	  return preProps.source.uri !== nextProps.source.uri;
	}

	var _default = (0, _rax.memo)(Picture, shouldComponentUpdate);

	exports.default = _default;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _universalEnv = __webpack_require__(20);

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var __rest = void 0 && (void 0).__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var Image = (0, _rax.forwardRef)(function (props, ref) {
	  var _useState = (0, _rax.useState)(props.source),
	      source = _useState[0],
	      setSource = _useState[1];

	  var isInitialMount = (0, _rax.useRef)(false);

	  var onError = function (e) {
	    var fallbackSource = props.fallbackSource,
	        _props$onError = props.onError,
	        onError = _props$onError === void 0 ? function () {} : _props$onError;

	    if (fallbackSource && fallbackSource.uri && source.uri !== fallbackSource.uri) {
	      setSource(fallbackSource);
	    }

	    onError(e);
	  };

	  var onLoad = function (e) {
	    var _props$onLoad = props.onLoad,
	        onLoad = _props$onLoad === void 0 ? function () {} : _props$onLoad;

	    if (typeof e.success !== 'undefined') {
	      if (e.success) {
	        onLoad(e);
	      } else {
	        onError(e);
	      }
	    } else if (typeof e.currentTarget !== 'undefined') {
	      if (e.currentTarget.naturalWidth > 1 && e.currentTarget.naturalHeight > 1) {
	        onLoad(e);
	      } else {
	        onError(e);
	      }
	    }
	  };

	  (0, _rax.useEffect)(function () {
	    if (!isInitialMount.current) {
	      isInitialMount.current = true;
	    } else {
	      setSource(props.source);
	    }
	  }, [props.source.uri]);
	  var nativeProps = Object.assign({}, props); // Source must a object

	  if (source && source.uri) {
	    var _nativeProps$style = nativeProps.style,
	        style = _nativeProps$style === void 0 ? {} : _nativeProps$style;
	    var width = source.width,
	        height = source.height,
	        uri = source.uri;
	    nativeProps.style = Object.assign({
	      width: width,
	      height: height
	    }, style);
	    nativeProps.src = uri;
	    nativeProps.onLoad = onLoad;
	    nativeProps.onError = onError;
	    delete nativeProps.source; // for cover and contain

	    var resizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;

	    if (resizeMode) {
	      if (_universalEnv.isWeex) {
	        nativeProps.resize = resizeMode;
	        nativeProps.style.resizeMode = resizeMode;
	      } else {
	        nativeProps.style.objectFit = resizeMode;
	      }
	    }

	    var className = nativeProps.className,
	        children = nativeProps.children,
	        nativeStyle = nativeProps.style,
	        otherProps = __rest(nativeProps, ["className", "children", "style"]);

	    var cls = ['rax-image', className].join(' ');
	    return _universalEnv.isWeex ? (0, _rax.createElement)("image", _extends({
	      ref: ref,
	      className: cls,
	      style: nativeStyle
	    }, otherProps)) : (0, _rax.createElement)("img", _extends({
	      ref: ref,
	      className: cls,
	      style: nativeStyle
	    }, otherProps));
	  }

	  return null;
	});
	var _default = Image;
	exports.default = _default;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.isIOS = exports.isAndroid = exports.isWeb = exports.isWechatApp = exports.isMiniApp = exports.isReactNative = exports.isWeex = exports.isNode = void 0;
	// compatibility taobao mp
	var isTaoWebview = typeof __sfc__ !== 'undefined';
	var isWebPure = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	exports.isNode = isNode;
	var isWeex = typeof callNative === 'function' || (typeof WXEnvironment === 'undefined' ? 'undefined' : _typeof(WXEnvironment)) === 'object' && WXEnvironment.platform !== 'Web';
	exports.isWeex = isWeex;
	var isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	exports.isReactNative = isReactNative;
	var isMiniApp = (typeof my === 'undefined' ? 'undefined' : _typeof(my)) === 'object' && typeof my.getSystemInfo !== 'undefined' && !isTaoWebview;
	exports.isMiniApp = isMiniApp;
	var isWechatApp = (typeof wx === 'undefined' ? 'undefined' : _typeof(wx)) === 'object' && typeof wx.getSystemInfo !== 'undefined'; // In taobao mp'webview __sfc__ is an object

	exports.isWechatApp = isWechatApp;
	var isWeb = isWebPure && !isMiniApp && !isWechatApp || isTaoWebview;
	exports.isWeb = isWeb;
	var systemInfo = {};

	if (isMiniApp) {
	  systemInfo = my.getSystemInfoSync();
	}

	if (isWechatApp) {
	  systemInfo = wx.getSystemInfoSync();
	}

	if (isWeex) {
	  systemInfo = navigator;
	}

	var isAndroid = function () {
	  if (isMiniApp || isWechatApp || isWeex) {
	    var platform = systemInfo.platform || '';
	    return platform.toLowerCase() === 'android';
	  } else if (isWeb) {
	    return Boolean(navigator.userAgent.match(/android/i));
	  }

	  return false;
	}();

	exports.isAndroid = isAndroid;

	var isIOS = function () {
	  if (isMiniApp || isWechatApp || isWeex) {
	    return ['ios', 'iOS', 'iPhone OS'].indexOf(systemInfo.platform) > -1;
	  } else if (isWeb) {
	    return Boolean(navigator.userAgent.match(/(iphone|ipod|ipad)/i));
	  }

	  return false;
	}();

	exports.isIOS = isIOS;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _raxView = _interopRequireDefault(__webpack_require__(8));

	var _raxImage = _interopRequireDefault(__webpack_require__(19));

	var _index = _interopRequireDefault(__webpack_require__(22));

	var _webp = __webpack_require__(30);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var isSupportJPG = false;
	var isSupportPNG = false;
	(0, _webp.isSupport)(function (_isSupportJPG) {
	  isSupportJPG = _isSupportJPG;
	});
	(0, _webp.isSupport)(function (_isSupportPNG) {
	  isSupportPNG = _isSupportPNG;
	}, 'alpha');
	/**
	 * @param  {String|[String]} suffix
	 * @return {[String]}        [description]
	 */

	function parseSuffix(suffix) {
	  var result = [];
	  var ret = [];

	  if (typeof suffix === 'string') {
	    ret = suffix.split(',');
	  }

	  if (Array.isArray(suffix)) {
	    ret = suffix;
	  }

	  if (ret && ret[0]) {
	    result[0] = ret[0];
	  }

	  if (ret && ret[1]) {
	    result[1] = ret[1];
	  }

	  return result;
	}
	/**
	 * @param  {String|Array} suffix
	 * @return {[type]}
	 */

	function getQualitySuffix(highQuality, suffix) {
	  var _suffix = parseSuffix(suffix);

	  return highQuality ? _suffix[0] : _suffix[1];
	}

	var Picture = (0, _rax.forwardRef)(function (props, ref) {
	  var children = props.children,
	      className = props.className,
	      _props$style = props.style,
	      style = _props$style === void 0 ? {} : _props$style,
	      resizeMode = props.resizeMode,
	      width = props.width,
	      height = props.height,
	      _props$placeholder = props.placeholder,
	      placeholder = _props$placeholder === void 0 ? 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==' : _props$placeholder,
	      _props$source = props.source,
	      source = _props$source === void 0 ? {
	    uri: ''
	  } : _props$source,
	      _props$autoRemoveSche = props.autoRemoveScheme,
	      autoRemoveScheme = _props$autoRemoveSche === void 0 ? true : _props$autoRemoveSche,
	      _props$autoReplaceDom = props.autoReplaceDomain,
	      autoReplaceDomain = _props$autoReplaceDom === void 0 ? true : _props$autoReplaceDom,
	      _props$autoScaling = props.autoScaling,
	      autoScaling = _props$autoScaling === void 0 ? true : _props$autoScaling,
	      _props$autoWebp = props.autoWebp,
	      autoWebp = _props$autoWebp === void 0 ? true : _props$autoWebp,
	      _props$ignoreGif = props.ignoreGif,
	      ignoreGif = _props$ignoreGif === void 0 ? true : _props$ignoreGif,
	      _props$autoCompress = props.autoCompress,
	      autoCompress = _props$autoCompress === void 0 ? true : _props$autoCompress,
	      _props$highQuality = props.highQuality,
	      highQuality = _props$highQuality === void 0 ? true : _props$highQuality,
	      _props$compressSuffix = props.compressSuffix,
	      compressSuffix = _props$compressSuffix === void 0 ? ['Q75', 'Q50'] : _props$compressSuffix,
	      _props$defaultHeight = props.defaultHeight,
	      defaultHeight = _props$defaultHeight === void 0 ? '750rem' : _props$defaultHeight,
	      _props$lazyload = props.lazyload,
	      lazyload = _props$lazyload === void 0 ? false : _props$lazyload,
	      _props$autoPixelRatio = props.autoPixelRatio,
	      autoPixelRatio = _props$autoPixelRatio === void 0 ? true : _props$autoPixelRatio;
	  var uri = source.uri;
	  var nativeProps = Object.assign({}, props);

	  var _useState = (0, _rax.useState)(false),
	      visible = _useState[0],
	      setVisible = _useState[1];

	  var sWidth = style.width,

	  // style width of picture
	  sHeight = style.height; // style width of picture
	  // according to the original height and width of the picture

	  if (!sHeight && sWidth && width && height) {
	    var pScaling = width / (typeof sWidth === 'string' ? parseInt(sWidth, 10) : sWidth);
	    sHeight = parseInt(height / pScaling + '', 10);
	  }

	  var newStyle = Object.assign({
	    height: sHeight
	  }, style);

	  if (uri) {
	    if (autoPixelRatio && window.devicePixelRatio > 1) {
	      // devicePixelRatio >= 2 for web
	      if (typeof sWidth === 'string' && sWidth.indexOf('rem') > -1) {
	        sWidth = parseInt(sWidth.split('rem')[0]) * 2 + 'rem';
	      }
	    }

	    uri = (0, _index.default)(uri, {
	      ignoreGif: ignoreGif,
	      ignorePng: true,
	      removeScheme: autoRemoveScheme,
	      replaceDomain: autoReplaceDomain,
	      scalingWidth: autoScaling ? sWidth : 0,
	      webp: autoWebp && isSupportJPG && isSupportPNG,
	      compressSuffix: autoCompress ? getQualitySuffix(highQuality, compressSuffix) : ''
	    });
	  }

	  if (resizeMode) {
	    newStyle.resizeMode = resizeMode;
	  }

	  var url = placeholder;

	  if (window.__isHydrating || props.isHydrating || window.navigator.userAgent.match(/PHA/)) {
	    lazyload = false;
	  }

	  if (lazyload) {
	    nativeProps.onAppear = function () {
	      return setVisible(true);
	    };

	    if (visible) {
	      url = uri;
	    }
	  } else {
	    url = uri;
	  }

	  if (children) {
	    return (0, _rax.createElement)(_raxView.default, _extends({}, nativeProps, {
	      className: className,
	      style: Object.assign(Object.assign({}, newStyle), {
	        backgroundImage: 'url(' + url + ')',
	        backgroundSize: resizeMode || 'cover',
	        backgroundRepeat: 'no-repeat',
	        backgroundPosition: resizeMode === 'cover' || resizeMode === 'contain' ? 'center' : null,
	        height: newStyle.height ? newStyle.height : defaultHeight
	      }),
	      "data-once": true
	    }), children);
	  } else {
	    return (0, _rax.createElement)(_raxImage.default, _extends({}, nativeProps, {
	      ref: ref,
	      className: className,
	      style: newStyle,
	      "data-once": true,
	      source: {
	        uri: url
	      }
	    }));
	  }
	});
	Picture.displayName = 'Picture';

	function shouldComponentUpdate(preProps) {
	  return !!preProps.children;
	}

	var _default = (0, _rax.memo)(Picture, shouldComponentUpdate);

	exports.default = _default;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;

	var _universalEnv = __webpack_require__(11);

	var _isCdnImage = _interopRequireDefault(__webpack_require__(23));

	var _isOSSImage = _interopRequireDefault(__webpack_require__(24));

	var _removeScheme = _interopRequireDefault(__webpack_require__(25));

	var _replaceDomain = _interopRequireDefault(__webpack_require__(26));

	var _scaling = _interopRequireDefault(__webpack_require__(27));

	var _webp = _interopRequireDefault(__webpack_require__(28));

	var _compress = _interopRequireDefault(__webpack_require__(29));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var REG_IMG_SUFFIX = /_(\d+x\d+|cy\d+i\d+|sum|m|b)?(xz|xc)?((?:q\d+)?(?:s\d+)?)(\.jpg)?(_\.webp)?$/i;
	/*
	TODO
	缩放剪裁(xz) _100x100xz.jpg @100h_100w_1e
	非缩放剪裁(xc) _100x100xc.jpg  @100-50-0-0a
	*/

	/**
	 *
	 * @param {String} uri
	 * @param {Object} config
	 *    scalingWidth
	 *    webp
	 *    compressSuffix
	 *    removeScheme
	 *    replaceDomain
	 * @returns {String} newUrl
	 */

	function _default(uri, config) {
	  var scalingWidth = config.scalingWidth,
	      webp = config.webp,
	      compressSuffix = config.compressSuffix,
	      quality = config.quality,
	      acutance = config.acutance,
	      removeScheme = config.removeScheme,
	      replaceDomain = config.replaceDomain,
	      ignoreGif = config.ignoreGif,
	      ignorePng = config.ignorePng;
	  var newUrl = uri;

	  if (typeof uri === 'string') {
	    var ret = (0, _isCdnImage.default)(uri); // is cdn image

	    if (ret) {
	      var isOSSImg = (0, _isOSSImage.default)(uri);
	      var host = ret[1];
	      var path = ret[2];
	      var suffixRet = path.match(REG_IMG_SUFFIX) || [];
	      var notGif = !~path.indexOf('gif') && !~path.indexOf('GIF') || !ignoreGif;
	      var notPng = !~path.indexOf('png') && !~path.indexOf('png') || !ignorePng;
	      var scalingSuffix = suffixRet[1] || '';

	      if (!_universalEnv.isNode && scalingWidth && notGif) {
	        scalingSuffix = (0, _scaling.default)(scalingWidth, isOSSImg) || scalingSuffix;
	      } // webp


	      var webpSuffix = suffixRet[5] || '';

	      if (webp && notGif) {
	        webpSuffix = (0, _webp.default)(isOSSImg) || webpSuffix;
	      }

	      var _compressSuffix = suffixRet[3] || '';

	      if ((compressSuffix || quality || acutance) && notGif && notPng) {
	        _compressSuffix = (0, _compress.default)(compressSuffix, quality, acutance, isOSSImg) || _compressSuffix;
	      }

	      var cut = scalingSuffix ? suffixRet[2] || '' : '';
	      var suffix = scalingSuffix || _compressSuffix ? suffixRet[4] || '.jpg' : '';
	      var prev = scalingSuffix || _compressSuffix ? '_' : '';

	      if (isOSSImg) {
	        if (prev == '_') {
	          prev = '@';
	        }

	        if (uri.split('@')[1]) {
	          prev = '';
	        }
	      }

	      if (notGif) {
	        if (suffixRet[0] !== '_.jpg') {
	          newUrl = newUrl.replace(suffixRet[0], '');
	        }

	        if (isOSSImg) {
	          newUrl += prev + scalingSuffix + cut + _compressSuffix + webpSuffix;
	        } else {
	          newUrl += prev + scalingSuffix + cut + _compressSuffix + suffix + webpSuffix;
	        }

	        if (removeScheme) {
	          newUrl = (0, _removeScheme.default)(newUrl);
	        }
	      }

	      if (replaceDomain) {
	        newUrl = (0, _replaceDomain.default)(newUrl, host);
	      }
	    }
	  }

	  return newUrl;
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;
	var REG_IMG_URL = /^(?:(?:http|https):)?\/\/(.+\.(?:alicdn|taobaocdn|taobao)\.(?:com|net))(\/.*(?:\.(jpg|png|gif|jpeg|webp))?)$/i;
	/**
	 * @param {String} url
	 * @returns {RegExpMatchArray}
	 */

	function _default(url) {
	  return url.match(REG_IMG_URL);
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;
	var REG_IMG_URL = /^(?:(?:http|https):)?\/\/(ossgw\.(?:alicdn|taobaocdn|taobao)\.(?:com|net))(\/.*(?:\.(jpg|png|gif|jpeg|webp))?)$/i;
	/**
	 * @param {String} url
	 * @returns {RegExpMatchArray}
	 */

	function _default(url) {
	  return url.match(REG_IMG_URL);
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;

	/**
	 * @param {String} url
	 * @returns {String}
	 */
	function _default(url) {
	  return url.replace(/(http|https):/gi, '');
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;
	var DEFAULT_HOSTNAME = 'gw.alicdn.com';
	var ALI_HOST = /(.+\.(?:alicdn|taobaocdn|taobao|mmcdn)\.com)/;
	var filterDomains = ['a.tbcdn.cn', 'assets.alicdn.com', 'wwc.taobaocdn.com', 'wwc.alicdn.com', 'cbu01.alicdn.com', 'ossgw.alicdn.com'];
	/**
	 * use gw.alicdn.com
	 *
	 * @param {String} url
	 * @param {String} host
	 * @returns {String}
	 */

	function _default(url, host) {
	  var hostReg = host.match(ALI_HOST);

	  if (hostReg && hostReg[0] != DEFAULT_HOSTNAME) {
	    if (filterDomains.indexOf(host) === -1) {
	      return url.replace(host, DEFAULT_HOSTNAME);
	    }
	  }

	  return url;
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;

	var _universalEnv = __webpack_require__(11);

	var width;

	if (_universalEnv.isWeb) {
	  var screenWidth = window.screen.width;
	  width = screenWidth ? screenWidth : document.documentElement.clientWidth / 750 * screenWidth;
	}

	var scalingWidth = [// use width
	110, 140, 150, 170, 220, 230, 240, 290, 300, 360, 450, 570, 580, 620, 790];
	var visualStandard = 750;

	function find(c, arr) {
	  var min = 1000;
	  var result = c;
	  var fKey = 0;

	  for (var i = 0; i < arr.length; i++) {
	    var num = arr[i];
	    var abs = Math.abs(num - c);

	    if (abs === 0) {
	      result = num;
	      fKey = i;
	      return false;
	    }

	    if (min > abs) {
	      min = abs;
	      result = num;
	      fKey = i;
	    }
	  }

	  if (c > result && arr[fKey + 1]) {
	    result = arr[fKey + 1];
	  }

	  if (arr.indexOf(result) > -1) {
	    return result;
	  }

	  return false;
	}
	/**
	 * @param {String | Number} sWidth
	 * @param {any} isOSSImg
	 * @returns {String}
	 */

	function _default(sWidth, isOSSImg) {
	  var xWidth = 0;
	  var scaling = 1;

	  if (typeof sWidth === 'string') {
	    if (sWidth.indexOf('rem') > -1) {
	      // isRem
	      xWidth = parseFloat(sWidth);

	      if (width) {
	        scaling = visualStandard / width;
	      }
	    }
	  } else {
	    // isNum
	    xWidth = sWidth;
	  }

	  var newWidth = find(Math.floor(xWidth / scaling), scalingWidth);
	  return newWidth ? isOSSImg ? "_" + newWidth + "w" : newWidth + "x10000" : '';
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;
	var webpSuffix = '_.webp';
	var ossWebpSuffix = '.webp';
	/**
	 * @param {any} isOSSImg
	 * @returns {String}
	 */

	function _default(isOSSImg) {
	  if (isOSSImg) {
	    return ossWebpSuffix;
	  } else {
	    return webpSuffix;
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = _default;

	/**
	 * @param  {String} compressSuffix
	 * @param  {Number} quality
	 * @param  {Number} acutance
	 * @param  {any} isOSSImg
	 * @return {String}
	 */
	function _default(compressSuffix, quality, acutance, isOSSImg) {
	  if (isOSSImg) {
	    // @90q（Q） ['@75q', '@50q']
	    if (compressSuffix.startsWith('Q')) {
	      compressSuffix = '_' + compressSuffix.split('Q')[1] + 'Q';
	    }

	    return compressSuffix ? compressSuffix : quality ? '_' + quality : 'Q';
	  } else {
	    // _Q(q)90 ['Q75', 'Q50']
	    return compressSuffix ? compressSuffix : (quality ? 'Q' + quality : '') + (acutance ? 'S' + acutance : '');
	  }
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.isSupport = isSupport;

	var _universalEnv = __webpack_require__(11);

	/**
	 * lossy : Lossy compression
	 * lossless : lossless compression
	 * alpha : example png
	 * animation : example gif
	 */
	var isIOS;

	if (!_universalEnv.isWeex && !_universalEnv.isNode) {
	  isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	}

	function isSupportTest(callback, type) {
	  if ('function' !== typeof callback) return;
	  var img = new Image();

	  img.onload = function () {
	    var is = img.width > 0 && img.height > 0;
	    setLocalStorage(is, type);
	    callback(is);
	  };

	  img.onerror = function () {
	    setLocalStorage(false, type);
	    callback(false);
	  };
	}

	function setLocalStorage(isSupport, type) {
	  if (window.localStorage && typeof window.localStorage.setItem === 'function') {
	    try {
	      window.localStorage.setItem('webpsupport-' + type, isSupport + '');
	    } catch (e) {}
	  }
	}

	function isSupport(callback, type) {
	  if (type === void 0) {
	    type = 'lossy';
	  }

	  if ('function' === typeof callback) {
	    if (_universalEnv.isWeex || _universalEnv.isNode || window.navigator.userAgent.match(/PHA/)) {
	      callback(true);
	    } else if (window.navigator.userAgent.match(/windows|win32/i) || isIOS && window.navigator.userAgent.match(/UCBrowser/i)) {
	      callback(false);
	    } else if (window.chrome || window.opera) {
	      callback(true);
	    } else {
	      var val = window.localStorage && window.localStorage.getItem('webpsupport-' + type);

	      if (val) {
	        callback(val == 'true');
	      } else {
	        isSupportTest(callback, type);
	      }
	    }
	  }
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(32);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _tracker = __webpack_require__(33);

	var _tracker2 = _interopRequireDefault(_tracker);

	var _img = __webpack_require__(72);

	var _img2 = _interopRequireDefault(_img);

	var _env = __webpack_require__(108);

	var _env2 = _interopRequireDefault(_env);

	var _event = __webpack_require__(116);

	var _event2 = _interopRequireDefault(_event);

	var _util = __webpack_require__(75);

	var _util2 = _interopRequireDefault(_util);

	var _jumper = __webpack_require__(117);

	var _jumper2 = _interopRequireDefault(_jumper);

	var _share = __webpack_require__(124);

	var _share2 = _interopRequireDefault(_share);

	var _youkuUser = __webpack_require__(125);

	var _youkuUser2 = _interopRequireDefault(_youkuUser);

	var _bind = __webpack_require__(127);

	var _bind2 = _interopRequireDefault(_bind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = _extends({}, _tracker2.default, _img2.default, _env2.default, _event2.default, _util2.default, _jumper2.default, _share2.default, _youkuUser2.default, _bind2.default);

	exports.default = Base;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	// import scmdTypeMap from './scmdTypeMap';


	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _addEvents = __webpack_require__(36);

	var _addEvents2 = _interopRequireDefault(_addEvents);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(45);

	var _hlwV1UniversalGoldlog = __webpack_require__(50);

	var _hlwV1UniversalGoldlog2 = _interopRequireDefault(_hlwV1UniversalGoldlog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var objToQueryString = _url2.default.objToQueryString,
	    urlSearchObj = _url2.default.urlSearchObj,
	    parsePlayUrl = _url2.default.parsePlayUrl,
	    checkIfPlayUrl = _url2.default.checkIfPlayUrl;

	var weexConfig = window.__weex_config__ && window.__weex_config__.weex && window.__weex_config__.weex.config || {};
	var isInChannel = !!(weexConfig && weexConfig.instanceId);
	var isIOS = _browser2.default.isIOS,
	    isAndroid = _browser2.default.isAndroid;
	// 大作页万花筒容器pv埋点使用

	var KSData = null;
	// 普通weex容器pv埋点及点击曝光埋点使用
	var YoukuTracker = null;
	try {
	  YoukuTracker = __webpack_require__(70);
	  KSData = __webpack_require__(71);
	} catch (e) {}

	// ab测试坑位的utParam信息
	var abUtParam = {};
	function appendABUtParam() {
	  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  for (var key in param) {
	    param[key] && (abUtParam[key] = param[key]);
	  }
	}

	var globalLogParam = {};

	// 自定义埋点参数，用于全局上报，支付宝小程序H5定制需求
	var extraTrackParam = {};

	function setExtraTrackParam(param) {
	  extraTrackParam = _extends({}, extraTrackParam, param);
	}

	function getExtraTrackParam() {
	  return extraTrackParam;
	}

	// 大作页中的PV埋点处理
	function doChannelContainerPV(pvParam) {
	  var instanceId = weexConfig.instanceId || '';
	  // 大作页容器pv设置
	  if (isIOS) {
	    // IOS 大作页容器直接设置即可
	    KSData && KSData.setPageInfo(instanceId, pvParam);
	  } else if (_YoukuEvent2.default && _YoukuEvent2.default.on) {
	    // 安卓大作页容器需要在pageactive后设置
	    _YoukuEvent2.default.on('pageShow', function () {
	      setTimeout(function () {
	        KSData && KSData.setPageInfo(instanceId, pvParam);
	      }, 100);
	    });
	  }
	}

	// 普通容器上报PV的方法
	function reportPV(pvParam) {
	  var isInPlayPageHalf = urlSearchObj.isInPlayPageHalf === 'true';
	  if (isAndroid && isInPlayPageHalf) {
	    // reportPV在Android播放页半屏页面下（播放页挂角、播放页banner打开的半屏容器），不会上报PV埋点
	    // 跟容器的实现机制有关，不当做单页面处理，需补充一次半屏的埋点
	    // IOS没问题
	    YoukuTracker && YoukuTracker.utCustomEvent && YoukuTracker.utCustomEvent(pvParam.pageName, 2001, '', '', '', _extends({}, pvParam.extend, {
	      isUtCustomEvent: 1,
	      spm: pvParam.spm,
	      'spm-cnt': pvParam.spm
	    }));
	  } else {
	    YoukuTracker && YoukuTracker.reportPV && YoukuTracker.reportPV(pvParam.pageName || '', pvParam.spm || '', _extends({}, pvParam.extend, {
	      isReportPV: 1
	    }));
	  }
	  sendCustomEvent({
	    customId: 'pv.validate',
	    customText: '页面曝光.验证',
	    trackInfo: {
	      pageName2: pvParam.pageName,
	      spm2: pvParam.spm
	    }
	  });
	}

	// 普通容器PV埋点处理
	function doNormalContainerPV(pvParam) {
	  if (!(_YoukuEvent2.default && _YoukuEvent2.default.on)) {
	    return;
	  }

	  _YoukuEvent2.default.on('pageShow', function () {
	    reportPV(pvParam);
	  });
	}

	function setPVParam(pvParam) {
	  pvParam = pvParam || {};
	  var extend = pvParam.extend || {};
	  urlSearchObj.spm && (extend['spm-url'] = urlSearchObj.spm);
	  pvParam.pageExtInfo = pvParam.extend = _extends({}, extend, {
	    pageurl: window.location.href
	  });
	  globalLogParam = pvParam;
	  // 兼容旧逻辑
	  window.globalLogParam = pvParam;
	}

	function sendPV() {
	  (0, _addEvents2.default)();
	  var pvParam = globalLogParam;
	  if (isInChannel) {
	    doChannelContainerPV(pvParam);
	  } else {
	    doNormalContainerPV(pvParam);
	  }
	}

	function doPV(pvParam) {
	  setPVParam(pvParam);
	  sendPV();
	}

	var trackTypeMap = {
	  click: 'reportClick',
	  expose: 'reportExpose',
	  custom: 'reportCustomEvent'
	};

	var goldlogTypeMap = {
	  click: 'CLK',
	  expose: 'EXP',
	  custom: 'OTHER'
	};

	var from = urlSearchObj.from,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	function doUserTrack(type, params) {
	  var _ref = params || {},
	      spmcd = _ref.spmcd,
	      posText = _ref.posText,
	      trackInfo = _ref.trackInfo,
	      scm = _ref.scm,
	      controltype = _ref.controltype,
	      descm = _ref.descm,
	      etc = _objectWithoutProperties(_ref, ['spmcd', 'posText', 'trackInfo', 'scm', 'controltype', 'descm']);

	  if (!spmcd) {
	    return;
	  }

	  var _ref2 = globalLogParam || {
	    pageName: 'hollywood_default_page'
	  },
	      pageName = _ref2.pageName,
	      spm = _ref2.spm,
	      extend = _ref2.extend;

	  var _ref3 = extend || { actid: '', actpage: '' },
	      actid = _ref3.actid,
	      actpage = _ref3.actpage;

	  var defaultTrackInfo = {
	    postext: posText,
	    pageurl: window.location.href,
	    actid: actid,
	    actpage: actpage
	  };
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (defaultTrackInfo['en_spm'] = enSpm || spm);
	  (enScm || scm) && (defaultTrackInfo['en_scm'] = enScm || scm);
	  enId && (defaultTrackInfo['en_id'] = enId);
	  var mergedTrackInfo = trackInfo ? _extends({}, trackInfo, defaultTrackInfo) : _extends({}, defaultTrackInfo);

	  var spmc = spmcd && spmcd.split ? spmcd.split('.')[0] : '';
	  var moduleABParam = spmc && abUtParam[spmc] ? abUtParam[spmc] : '';
	  var pageABParam = abUtParam.pageParam ? abUtParam.pageParam : '';
	  var yk_abtest = '';
	  if (moduleABParam && pageABParam) {
	    yk_abtest = [moduleABParam, pageABParam].join('#');
	  } else if (moduleABParam || pageABParam) {
	    yk_abtest = moduleABParam || pageABParam;
	  }
	  var utParam = {
	    yk_abtest: yk_abtest
	  };
	  var trackObject = _extends({
	    pageName: pageName,
	    controlName: spmcd,
	    spm: (spm || '') + '.' + spmcd,
	    scm: scm || '',
	    controltype: controltype || 'common',
	    descm: descm || '',
	    // trackInfo参数值不能时对象或者数组，JSON.stringify之后也不行，会导致埋点参数解析失败
	    trackInfo: JSON.stringify(mergedTrackInfo),
	    utParam: JSON.stringify(utParam),
	    // 添加自定义参数
	    extraTrackParam: JSON.stringify(extraTrackParam)
	  }, etc);
	  urlSearchObj.spm && (trackObject['spm-url'] = urlSearchObj.spm);
	  try {
	    if (_universalEnv.isWeex) {
	      if (type === 'click' || type === 'expose') {
	        YoukuTracker[trackTypeMap[type]](trackObject);
	      } else {
	        YoukuTracker.reportCustomEvent(pageName, '19999', 'hollywood_custom_event', '-', '-', trackObject);
	      }
	    } else {
	      trackObject.expand = trackObject.trackInfo;
	      _hlwV1UniversalGoldlog2.default.record('/yt/youkuapph5.normalpage.control', goldlogTypeMap[type], objToQueryString(trackObject), 'POST');
	      _browser2.default.isTaobao && _hlwV1UniversalGoldlog2.default.record('/youkuapph5.normalpage.control', goldlogTypeMap[type], objToQueryString(trackObject), 'POST');
	    }
	  } catch (e) {}
	}

	// 发送点击事件
	function sendClickEvent(params) {
	  var _ref4 = params || {},
	      posId = _ref4.posId,
	      posText = _ref4.posText,
	      trackInfo = _ref4.trackInfo,
	      scm = _ref4.scm,
	      controltype = _ref4.controltype,
	      descm = _ref4.descm,
	      trackArgs = _ref4.trackArgs;
	  // 额外的埋点参数，属性会打平放置在跟spm同级（一级）的信息里


	  var args = trackArgs && (typeof trackArgs === 'undefined' ? 'undefined' : _typeof(trackArgs)) === 'object' ? trackArgs : {};
	  doUserTrack('click', _extends({
	    spmcd: posId,
	    posText: posText,
	    scm: scm || getSCM(params),
	    controltype: controltype,
	    descm: descm,
	    trackInfo: trackInfo
	  }, args));
	}

	// 发送曝光事件
	function sendExposeEvent(params) {
	  var _ref5 = params || {},
	      posId = _ref5.posId,
	      posText = _ref5.posText,
	      trackInfo = _ref5.trackInfo,
	      scm = _ref5.scm,
	      controltype = _ref5.controltype,
	      descm = _ref5.descm,
	      trackArgs = _ref5.trackArgs;
	  // 额外的埋点参数，属性会打平放置在跟spm同级（一级）的信息里


	  var args = trackArgs && (typeof trackArgs === 'undefined' ? 'undefined' : _typeof(trackArgs)) === 'object' ? trackArgs : {};
	  doUserTrack('expose', _extends({
	    spmcd: posId,
	    posText: posText,
	    scm: scm || getSCM(params),
	    controltype: controltype,
	    descm: descm,
	    trackInfo: trackInfo
	  }, args));
	}

	// 发送自定义事件
	function sendCustomEvent(params) {
	  var _ref6 = params || {},
	      customId = _ref6.customId,
	      customText = _ref6.customText,
	      trackInfo = _ref6.trackInfo;

	  doUserTrack('custom', { spmcd: customId, posText: customText, trackInfo: trackInfo });
	}

	function getSPM(spmcd) {
	  var _ref7 = globalLogParam || {},
	      spm = _ref7.spm;

	  if (!spmcd) {
	    return spm || '';
	  }
	  return (spm || '') + '.' + spmcd;
	}

	function getSCM(params) {
	  if (!params) {
	    return '20140670.manual.0.non_';
	  }
	  var contentId = '';
	  if (typeof params === 'string') {
	    // 兼容旧版接口传string'scmc.scmd'的方式
	    contentId = params;
	  }
	  var scm = '';
	  var isAlg = false;
	  if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
	    // 如果直接指定scm，则用指定的scm
	    scm = params.scm;
	    if (scm) {
	      return scm;
	    }
	    // 是否是算法推荐
	    isAlg = params.isAlg;
	    // 如果指定的是contentId（即scmc.scmd）或scmcd
	    contentId = params.contentId || params.scmcd;
	    if (!contentId && params.posId) {
	      // 如果没有定制scm的contentId，则根据跳转规则自动补充
	      var jumpType = params.jumpType,
	          jumpUrl = params.jumpUrl,
	          videoId = params.videoId,
	          showId = params.showId,
	          posId = params.posId;
	      // scmc等于spmc

	      var scmc = posId.split('.')[0];
	      if (jumpType === 'url' && jumpUrl) {
	        if (checkIfPlayUrl(jumpUrl)) {
	          // 是播放页的url
	          var _parsePlayUrl = parsePlayUrl(jumpUrl),
	              vid = _parsePlayUrl.vid,
	              showid = _parsePlayUrl.showid;
	          // 判断是视频还是节目补充响应的scmd位


	          vid && (contentId = scmc + '.video_' + vid);
	          showid && (contentId = scmc + '.show_' + showid);
	        } else {
	          contentId = scmc + '.url_' + encodeURIComponent(jumpUrl);
	        }
	      } else if (jumpType === 'video' && videoId) {
	        contentId = scmc + '.video_' + videoId;
	      } else if (jumpType === 'show' && showId) {
	        contentId = scmc + '.show_' + showId;
	      } else {
	        contentId = '0.non_';
	      }
	    }
	  }
	  // scma目前是固定写死的20140670

	  var scmb = isAlg ? 'rcmd' : 'manual';
	  return '20140670' + '.' + scmb + '.' + contentId;
	}

	exports.default = {
	  doPV: doPV,
	  setPVParam: setPVParam,
	  appendABUtParam: appendABUtParam,
	  sendPV: sendPV,
	  sendClickEvent: sendClickEvent,
	  sendExposeEvent: sendExposeEvent,
	  sendCustomEvent: sendCustomEvent,
	  getSPM: getSPM,
	  getSCM: getSCM,
	  setExtraTrackParam: setExtraTrackParam,
	  getExtraTrackParam: getExtraTrackParam
	};
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Event = __webpack_require__(35);

	var _Event2 = _interopRequireDefault(_Event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YoukuEvent = null;

	if (!window._YoukuEvent_NoConflict) {
	  window._YoukuEvent_NoConflict = new _Event2.default();
	}
	YoukuEvent = window.YoukuEvent = window._YoukuEvent_NoConflict;
	exports.default = YoukuEvent;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Event = function () {
	  function Event() {
	    _classCallCheck(this, Event);

	    this._eventMap = {};
	  }
	  /**
	   * 增加事件监听
	   * @param type 事件类型
	   * @param cb 回调函数
	   * @returns this
	   */


	  _createClass(Event, [{
	    key: 'on',
	    value: function on(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      if (this._eventMap[type]) {
	        this._eventMap[type].push(cb);
	      } else {
	        this._eventMap[type] = [cb];
	      }
	      return this;
	    }

	    /**
	     * 移除事件监听
	     * @param type 事件类型
	     * @param cb 回调函数
	     * @returns this
	     */

	  }, {
	    key: 'off',
	    value: function off(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          if (cb === list[i]) {
	            list.splice(i, 1);
	            i--;
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * 是否包含某事件类型
	     * @param type
	     * @returns this
	     */

	  }, {
	    key: 'hasEvent',
	    value: function hasEvent(type) {
	      return this._eventMap[type] && this._eventMap[type].length ? true : false;
	    }

	    /**
	     * 派发事件
	     * @param type 事件类型
	     * @param data 发送数据
	     * @returns this
	     */

	  }, {
	    key: 'fire',
	    value: function fire(type, data) {
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          var cb = list[i];
	          cb && cb(data);
	        }
	      }
	      return this;
	    }

	    /**
	     * 基于fire新增派发事件notify，回调函数添加try/catch，防止一个回调执行报错导致其他回调不执行，淘票票的需求
	     * @param type 事件类型
	     * @param data 发送数据
	     * @returns this
	     */

	  }, {
	    key: 'notify',
	    value: function notify(type, data) {
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          var cb = list[i];
	          try {
	            cb && cb(data);
	          } catch (error) {
	            console.error(error);
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * 销毁事件
	     * @returns this
	     */

	  }, {
	    key: 'destroyEvent',
	    value: function destroyEvent() {
	      this._eventMap = {};
	      return this;
	    }

	    /**
	     * 销毁所有
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.fire('destroy');
	      this.destroyEnd();
	    }
	  }, {
	    key: 'destroyEnd',
	    value: function destroyEnd() {
	      var _this = this;
	      setTimeout(function () {
	        _this.fire('destroyEnd');
	        _this.destroyEvent();
	      }, 0);
	    }

	    /**
	     * 获取全部绑定事件
	     * @returns 全部绑定事件
	     */

	  }, {
	    key: 'getEventMap',
	    value: function getEventMap() {
	      return this._eventMap;
	    }
	  }]);

	  return Event;
	}();

	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addEvents;

	var _addWeexEvents = __webpack_require__(37);

	var _addWeexEvents2 = _interopRequireDefault(_addWeexEvents);

	var _addWebEvents = __webpack_require__(48);

	var _addWebEvents2 = _interopRequireDefault(_addWebEvents);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEvents() {
	  if (_universalEnv.isWeb) {
	    (0, _addWebEvents2.default)();
	  } else {
	    (0, _addWeexEvents2.default)();
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _universalPlanetMessager = __webpack_require__(38);

	var _universalPlanetMessager2 = _interopRequireDefault(_universalPlanetMessager);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;

	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';

	var globalEvent = null;
	try {
	  globalEvent = __webpack_require__(47);
	} catch (e) {}

	function addDocumentEvent(type, callback) {
	  var body = window.__weex_document__ && window.__weex_document__.body && window.__weex_document__.body;
	  body && body.addEvent && body.addEvent(type, callback);
	}

	function globalAddEvent(type, callback) {
	  globalEvent && globalEvent.addEventListener && globalEvent.addEventListener(type, callback);
	}

	var isFirstActivate = true;
	// 由于weex某些事件多次添加后后面的事件会覆盖前面的事件，因此统一使用YoukuEvent管理
	function addWeexEvents() {
	  if (_universalEnv.isWeb) {
	    return;
	  }
	  isInPlayerTab || addDocumentEvent('viewappear', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'viewappear' });
	  });
	  isInPlayerTab || addDocumentEvent('viewdisappear', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'viewdisappear' });
	  });
	  addDocumentEvent('pageActivate', function (param) {
	    if (param.state) {
	      _YoukuEvent2.default.fire('pageShow', { type: 'pageActivate' });
	    } else {
	      _YoukuEvent2.default.fire('pageHide', { type: 'pageActivate' });
	    }
	  });
	  // 兼容安卓播放页tab资源位的事件
	  isInPlayerTab && globalAddEvent('pageActivate', function (param) {
	    if (param.state) {
	      _YoukuEvent2.default.fire('pageShow', { type: 'pageActivate' });
	      isFirstActivate && isInPlayerTab && setTimeout(function () {
	        _YoukuEvent2.default.fire('mainViewScrollTo', { position: 1 });
	      }, 100);
	      isFirstActivate = false;
	    } else {
	      _YoukuEvent2.default.fire('pageHide', { type: 'pageActivate' });
	    }
	  });
	  addDocumentEvent('userInfoChanged', function () {
	    _YoukuEvent2.default.fire('userInfoChanged');
	  });
	  globalAddEvent('AppInFrontend', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'AppInFrontend' });
	  });
	  // ios通知栏遮挡收回页面出现时
	  globalAddEvent('UIApplicationDidBecomeActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'UIApplicationDidBecomeActiveNotification' });
	  });
	  globalAddEvent('AppInBackground', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'AppInBackground' });
	  });
	  // ios通知栏遮挡页面时
	  globalAddEvent('UIApplicationWillResignActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'UIApplicationWillResignActiveNotification' });
	  });
	  globalAddEvent('YKEventLogin', function () {
	    _YoukuEvent2.default.fire('userLogin', true);
	  });
	  try {
	    // 新增星球事件机制
	    var messager = new _universalPlanetMessager2.default(_universalPlanetMessager2.default.CHILD);
	    messager.onMessage(function (data) {
	      if (data._msg_type === _universalPlanetMessager2.default.msgChannel.PAGE_APPEAR) {
	        _YoukuEvent2.default.fire('pageShow', { type: 'universal-planet-messager' });
	      } else if (data._msg_type === _universalPlanetMessager2.default.msgChannel.PAGE_DISAPPEAR) {
	        _YoukuEvent2.default.fire('pageHide', { type: 'universal-planet-messager' });
	      }
	    });
	  } catch (e) {
	    console.error(JSON.stringify(e));
	  }
	}

	exports.default = addWeexEvents;
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(39);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp, _initialiseProps;

	var _universalParam = __webpack_require__(40);

	var _universalEnv = __webpack_require__(42);

	var _token = __webpack_require__(43);

	var _token2 = _interopRequireDefault(_token);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Messager = (_temp = _class = function () {
	  _createClass(Messager, null, [{
	    key: 'generateToken',


	    /**
	     * 生成随机数
	     * @returns {string|*}
	     */
	    value: function generateToken() {
	      return (0, _token2.default)();
	    }
	  }]);

	  function Messager() {
	    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	    _classCallCheck(this, Messager);

	    _initialiseProps.call(this);

	    this.tokenKey = 'weexToken';
	    this.childIdKey = 'weexTabId';

	    var search = typeof location !== 'undefined' && location.search ? location.search : '';
	    var queryParams = (0, _universalParam.unparam)(search);
	    this.unparam = queryParams;

	    if (type === Messager.PARENT) {
	      this.token = (0, _token2.default)();
	      this.id = Messager.PARENT;
	    } else if (type === Messager.CHILD) {
	      // get child token，id from url params
	      this.token = queryParams[this.tokenKey];
	      this.id = queryParams[this.childIdKey];
	    }
	  }

	  _createClass(Messager, [{
	    key: 'unparam',
	    set: function set(data) {
	      this._unparam = data;
	    },
	    get: function get() {
	      return this._unparam;
	    }
	  }, {
	    key: 'token',
	    set: function set(data) {
	      this._token = data;
	    },
	    get: function get() {
	      return this._token;
	    }
	  }]);

	  return Messager;
	}(), _class.PARENT = 'parent', _class.CHILD = 'child', _class.msgChannel = {

	  /**
	   * 圈子框架消息
	   */
	  PAGE_APPEAR: 'page.appear', // child可见
	  PAGE_DISAPPEAR: 'page.disappear', // child不可见
	  PAGE_GET_STATUS: 'page.get.status', // child获取当前是否可见状态
	  PAGE_REQUEST_DATA: 'page.request.data', // 获取讨论tab数据
	  PAGE_RESPONSE_DATA: 'page.response.data', // 发送讨论tab数据

	  /**
	   * 圈子固有的消息
	   */
	  EVENT_UPDATE: 'event.update', // 刷新圈子数据
	  EVENT_FOLLOW: 'event.follow', // 通知圈子进行关注操作
	  EVENT_FOLLOW_CB: 'event.follow.cb', // 关注消息回调

	  EVENT_SIGN_IN: 'event.sign.in', // 通知圈子进行签到操作
	  EVENT_SIGN_IN_CB: 'event.sign.in.cb', // 签到消息回调

	  /**
	   * 剧圈的排序Tab右边的排序功能
	   */
	  EVENT_TAB_SORT: 'event.tab.sort',

	  /**
	   * 用于定位tab
	   * 参数type
	   */
	  EVENT_TAB_LOCATION: 'event.tab.location',

	  /**
	   * 用于活动消息
	   */
	  EVENT_UPDATE_VOTE: 'event.vote' // 以团之名投票数据刷新消息

	}, _initialiseProps = function () {
	  var _this = this;

	  this.postMessage = function () {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '*';

	    if (_this.id !== Messager.PARENT) {
	      target = Messager.PARENT;
	    }

	    data._msg_token = _this.token;
	    data._msg_source = _this.id;
	    data._msg_type = type;
	    data._msg_target = target;
	    // console.error(`post message from ${this.id} to ${target}`);
	    // console.error(data);


	    // TODO: parent to child, frames
	    if (_universalEnv.isWeb && _this.id !== Messager.PARENT) {
	      window.parent.postMessage(data, '*');
	    } else if (typeof window.postMessage === 'function') {
	      window.postMessage(data, '*');
	    } else {
	      console.warn('[Messager]: 缺少 postmessage 方法');
	    }
	  };

	  this.onMessage = function (callback) {
	    if (!callback) {
	      return;
	    }

	    window.addEventListener && window.addEventListener('message', function (e) {
	      var data = e && e.data;

	      // 同一个框架实例
	      if (data) {
	        if (data._msg_token == _this.token) {
	          // 只有 parent 可以发广播消息，自己不接收
	          if (data._msg_source == Messager.PARENT && data._msg_target == '*' && data._msg_source != _this.id) {
	            callback(data);
	          } else if (data._msg_target == _this.id) {
	            // 指定用户接收
	            callback(data);
	          }
	        }
	      }
	    }, false);
	  };
	}, _temp);
	exports.default = Messager;
	module.exports = exports['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(41);

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * parse an object to query string
	 *
	 * @param params
	 */
	function param() {
	  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	  var result = '';

	  for (var key in params) {
	    if (params.hasOwnProperty(key)) {
	      result += '&' + key + '=' + params[key];
	    }
	  }

	  return result.slice(1);
	}

	/**
	 * parse a query string to object
	 *
	 * @param search
	 * @return {Object}
	 */
	function unparam() {
	  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	  var result = {};
	  var searchParts = void 0;

	  search = search.indexOf('?') === 0 ? search.substring(1) : search;

	  searchParts = search.split('&');
	  searchParts = searchParts.map(function (searchPart) {
	    var t = searchPart.split('=');
	    return [t[0], t[1]];
	  });

	  searchParts.forEach(function (searchPart) {
	    if (searchPart[0] !== '') {
	      result[searchPart[0]] = searchPart[1];
	    }
	  });

	  return result;
	}

	exports.param = param;
	exports.unparam = unparam;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.isReactNative = exports.isWeex = exports.isNode = exports.isWeb = void 0;

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	    };
	  }return _typeof(obj);
	}

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	exports.isWeb = isWeb;
	var isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	exports.isNode = isNode;
	var isWeex = typeof callNative === 'function' || (typeof WXEnvironment === "undefined" ? "undefined" : _typeof(WXEnvironment)) === 'object' && WXEnvironment.platform !== 'Web';
	exports.isWeex = isWeex;
	var isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	exports.isReactNative = isReactNative;
	exports["default"] = module.exports;
	var _default = module.exports;
	exports.default = _default;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var generateToken = function () {

	  // list containing characters for the random string
	  var stringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	  // set the length of the string


	  var tokenStr = '';

	  for (var i = 1; i < 15; i++) {
	    var rndNum = Math.ceil(Math.random() * stringArray.length) - 1;
	    tokenStr += stringArray[rndNum];
	  }

	  return tokenStr;
	};

	exports.default = generateToken;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	// 解析url参数
	function parseUrlParam(url) {
	  if (!url) {
	    return {};
	  }
	  var questionMarkPosition = url.indexOf('?') !== -1 ? url.indexOf('?') : url.length;
	  var urlParams = url ? url.substring(questionMarkPosition + 1).split('&') : [];
	  var params = {};
	  for (var i = 0; i < urlParams.length; i++) {
	    var kv = urlParams[i];
	    var equalPos = kv.indexOf('=');
	    if (equalPos === -1) {
	      continue;
	    }
	    var key = kv.substring(0, equalPos);
	    var value = kv.substring(equalPos + 1);
	    key && value && (params[key] = value);
	  }
	  return params;
	}

	// 解析当前地址url参数
	function getURLSearchObj() {
	  return parseUrlParam(window.location.href);
	}

	// 把一个url的参数跟新的对象参数merge到一起，重复的以新对象为准。
	function mergeUrlSearch(url, searchObj) {
	  if (!url || !url.split) {
	    return '';
	  }
	  // [\u200B-\u200D\uFEFF\uFFFC]是为了处理”zero width space“，中文下unicode是 FFFC
	  // 见：https://stackoverflow.com/questions/11305797/remove-zero-width-space-characters-from-a-javascript-string
	  var urlNoSpace = url.replace(/\s|[\u200B-\u200D\uFEFF\uFFFC]/g, '');
	  var questionMarkPosition = urlNoSpace.indexOf('?') !== -1 ? urlNoSpace.indexOf('?') : urlNoSpace.length;
	  var pureUrl = urlNoSpace.substring(0, questionMarkPosition);
	  var searchStr = urlNoSpace.substring(questionMarkPosition + 1);

	  // const [pureUrl, searchStr] = url
	  //   .replace(/\s|[\u200B-\u200D\uFEFF\uFFFC]/g, '')
	  //   .split('?');

	  var searches = searchStr ? searchStr.split('&') : [];
	  var oldSearchObj = {};
	  for (var i = 0; i < searches.length; i++) {
	    var kv = searches[i];
	    var equalPos = kv.indexOf('=');
	    if (equalPos === -1) {
	      continue;
	    }
	    var key = kv.substring(0, equalPos);
	    var value = kv.substring(equalPos + 1);
	    key && value && (oldSearchObj[key] = value);
	  }
	  // if (!searchObj.refer) {
	  //   delete searchObj.refer;
	  // }
	  // if (!searchObj.from) {
	  //   delete searchObj.from;
	  // }
	  for (var _key in searchObj) {
	    if (!searchObj[_key] && searchObj[_key] !== 0) {
	      delete searchObj[_key];
	    }
	  }
	  var mergedSearchObj = _extends({}, oldSearchObj, searchObj);
	  // refer和from不覆盖
	  oldSearchObj.from && (mergedSearchObj.from = oldSearchObj.from);
	  oldSearchObj.refer && (mergedSearchObj.refer = oldSearchObj.refer);
	  var newSearchString = Object.keys(mergedSearchObj).map(function (k) {
	    return k + '=' + mergedSearchObj[k];
	  }).join('&');
	  return pureUrl + '?' + newSearchString;
	}

	// 判断是否是http地址，否则是scheme地址
	function checkIfHttpUrl(url) {
	  return (/^http/.test(url)
	  );
	}

	// 判断是否是weex地址
	function checkIfWeexUrl(url) {
	  return checkIfHttpUrl(url) && /wh_weex|_wx_tpl|wxbundle/.test(url);
	}

	// 判断是否是纯weex地址
	function checkIfPureWeexUrl(url) {
	  return checkIfHttpUrl(url) && /wh_weex=true/.test(url) && !/_wx_tpl|wxbundle/.test(url);
	}

	// 判断是否是播放页地址或者直播地址
	function checkIfPlayUrl(url) {
	  var reg = /v.youku.com\/v_show|m.youku.com\/video/;
	  return checkIfHttpUrl(url) && reg.test(url);
	}

	// 判断是否是直播地址
	function checkIfLiveUrl(url) {
	  var reg = /vku.youku.com\/live\/ilproom/;
	  return checkIfHttpUrl(url) && reg.test(url);
	}

	// 根据videoId和playlistId生成视频播放页地址
	function genVideoUrl(videoId, playlistId) {
	  videoId = videoId.replace(/==|id_/gi, '');
	  var url = 'https://m.youku.com/video/id_' + videoId + '==.html';
	  if (playlistId) {
	    url += '?playlistId=' + playlistId + '&playlist_id=' + playlistId + '&f=' + playlistId;
	  }
	  return url;
	}

	// 根据showId播放页地址
	function genShowUrl(showId) {
	  return 'https://m.youku.com/video/id_' + showId + '.html';
	}

	// 根据url解析出视频id、节目id、播单id等
	// 视频：https://m.youku.com/video/id_XMzc4NDkwNTIzMg==.html
	// 视频：https://v.youku.com/v_show/id_XMzgwNTIyOTQ4MA==.html
	// 节目：https://m.youku.com/video/id_4956302985e1497394c5.html
	// 播单：https://m.youku.com/video/id_4956302985e1497394c5.html?f=123123
	function parsePlayUrl(url) {
	  // vid: '',
	  // showid: '',
	  // playlistid: '',
	  // playlist_id: '',
	  var res = {};
	  if (!checkIfPlayUrl(url)) {
	    return res;
	  }
	  var urlParam = parseUrlParam(url);
	  var playlistId = urlParam.playlistId || urlParam.playlistid || urlParam.playlist_id || urlParam.f;
	  if (playlistId) {
	    res.playlistid = playlistId;
	    res.playlist_id = playlistId;
	  }
	  // 解析出节目或者视频id，https://m.youku.com/video/id_{这里的内容}==.html
	  var showVideoId = url.match(/id_(\w+)=*\.html/)[1];
	  // 判断是否是视频id，视频id以X开头
	  var isVideo = /^X/.test(showVideoId);
	  if (isVideo) {
	    res.vid = showVideoId;
	  } else {
	    res.showid = showVideoId;
	  }
	  return res;
	}

	function objToQueryString(obj) {
	  return Object.keys(obj).map(function (k) {
	    return k + '=' + obj[k];
	  }).join('&');
	}

	exports.default = {
	  checkIfHttpUrl: checkIfHttpUrl,
	  checkIfWeexUrl: checkIfWeexUrl,
	  checkIfPureWeexUrl: checkIfPureWeexUrl,
	  checkIfPlayUrl: checkIfPlayUrl,
	  genVideoUrl: genVideoUrl,
	  genShowUrl: genShowUrl,
	  parsePlayUrl: parsePlayUrl,
	  checkIfLiveUrl: checkIfLiveUrl,
	  parseUrlParam: parseUrlParam,
	  mergeUrlSearch: mergeUrlSearch,
	  getURLSearchObj: getURLSearchObj,
	  objToQueryString: objToQueryString,
	  urlSearchObj: getURLSearchObj()
	};
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	if (true) {
	  module.exports = __webpack_require__(46);
	} else {
	  module.exports = require('./lib/index.js');
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function isUndef(e) {
	  return "undefined" === e;
	}Object.defineProperty(exports, "__esModule", { value: !0 });var isWeb = !isUndef(typeof window === "undefined" ? "undefined" : _typeof(window)) && "onload" in window,
	    isNode = !isUndef(typeof process === "undefined" ? "undefined" : _typeof(process)) && !(!process.versions || !process.versions.node),
	    isWeex = !isUndef(typeof callNative === "undefined" ? "undefined" : _typeof(callNative)) || !isUndef(typeof WXEnvironment === "undefined" ? "undefined" : _typeof(WXEnvironment)) && "Web" !== WXEnvironment.platform,
	    isMiniApp = !isUndef(typeof my === "undefined" ? "undefined" : _typeof(my)) && !isUndef(my.navigateTo),
	    isWeChatMiniprogram = !isUndef(typeof wx === "undefined" ? "undefined" : _typeof(wx)) && !isUndef(wx.navigateTo);exports.isMiniApp = isMiniApp, exports.isNode = isNode, exports.isWeChatMiniprogram = isWeChatMiniprogram, exports.isWeb = isWeb, exports.isWeex = isWeex;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/globalEvent");

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addWebEvents() {
	  if (_universalEnv.isWeex) {
	    return;
	  }
	  // 页面后台
	  document.addEventListener('WV.Event.APP.Background', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'WV.Event.APP.Background' });
	  });
	  // 大作页tab切出
	  document.addEventListener('WV.Event.APP.PageDeactivate', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'WV.Event.APP.PageDeactivate' });
	  });
	  // 页面前台
	  document.addEventListener('WV.Event.APP.Active', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'WV.Event.APP.Active' });
	  });
	  // 大作页tab切回
	  document.addEventListener('WV.Event.APP.PageActivate', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'WV.Event.APP.PageActivate' });
	  });

	  document.addEventListener('visibilitychange', function () {
	    if (document.visibilityState === 'visible') {
	      _YoukuEvent2.default.fire('pageShow', { type: 'visibilitychange' });
	    }
	    if (document.visibilityState === 'hidden') {
	      _YoukuEvent2.default.fire('pageHide', { type: 'visibilitychange' });
	    }
	  });
	}

	exports.default = addWebEvents;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ua = navigator.userAgent.toLowerCase();
	// 当前设备是否是Retina屏幕
	var isRetinaDevice = false;
	var devicePixelRatio = window.devicePixelRatio;
	if (devicePixelRatio >= 2) {
	  isRetinaDevice = true;
	}

	// 阿里经济体终端UA(UserAgent)规范：https://yuque.antfin-inc.com/velocity_cross-end-web/docs/wiki_app-ua
	// 但是有些app没有按照集团标准，比如优酷（尤其是weex容器）、UC；
	// 有些app在安卓和iOS下的UA规范也不一致，比如UC；
	// 安卓下有些app浏览器内核用的是UC会误判为UC，所以UC的相关判断建议放在最后；
	// 是否是阿里app
	var isAliApp = /(aliapp)+[\s]*/.test(ua);

	exports.default = {
	  isYouku: /youku|yk/.test(ua),
	  isYoukuHD: /youku_hd|youkuhd/.test(ua),
	  isYoukuMini: /(aliapp)+[\s]*(\([yk]+\/[\d|\.]+\))+/.test(ua) && /InsidePlus/gi.test(ua),

	  isDingding: /dingtalk/.test(ua),
	  isTaobao: /(aliapp)+[\s]*(\([tb]+\/[\d|\.]+\))+/.test(ua),
	  isTaobaoMiniApp: /(aliapp)+[\s]*(\([tb]+\/[\d|\.]+\))+/.test(ua) && /Triver/gi.test(ua),
	  isAlipay: /alipay/.test(ua),
	  isAlipayMiniApp: /alipay/.test(ua) && /MiniProgram/gi.test(ua),
	  isUC: /ucbrowser/.test(ua),
	  isTmall: /(aliapp)+[\s]*(\([tm]+\/[\d|\.]+\))+/.test(ua),
	  isDamai: /(aliapp)+[\s]*(\([dm]+\/[\d|\.]+\))+/.test(ua),
	  isTaopiaopiao: /(aliapp)+[\s]*(\([dy]+\/[\d|\.]+\))+/.test(ua),
	  isXianyu: /(aliapp)+[\s]*(\([fm]+\/[\d|\.]+\))+/.test(ua),
	  isEleme: /(aliapp)+[\s]*(\([elmc]+\/[\d|\.]+\))+/.test(ua),

	  isWeixin: /micromessenger/.test(ua),
	  isWechat: /micromessenger/.test(ua),
	  isQQ: /qq/.test(ua),
	  isQZone: /qzone/.test(ua),
	  isQQBrowser: /qqbrowser/.test(ua),
	  isToutiaoMiniApp: /ToutiaoMicroApp/gi.test(ua),
	  isWeibo: /weibo/.test(ua),

	  isAndroid: /android/.test(ua),
	  isIOS: /ipad|iphone/.test(ua),
	  isIPhone: /iphone/.test(ua),
	  isIPad: /ipad/.test(ua),

	  isWindvane: /windvane/.test(ua),
	  isAliApp: isAliApp,
	  isRetinaDevice: isRetinaDevice
	};
	module.exports = exports["default"];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(51);

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _goldlog = __webpack_require__(52);

	var _goldlog2 = _interopRequireDefault(_goldlog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tracker = __webpack_require__(67);

	exports.default = _extends({}, _goldlog2.default, tracker);
	module.exports = exports['default'];

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hlwV1Aplus_universal = __webpack_require__(53);

	var goldlog = {
	  record: function record(logkey, gmkey, gokey, chksum) {
	    _hlwV1Aplus_universal.aplus_universal.record(logkey, gmkey, gokey, chksum);
	  },
	  launch: function launch() {
	    var pageSPM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _hlwV1Aplus_universal.aplus_universal.getPageSPM();
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


	    _hlwV1Aplus_universal.aplus_universal.setPageSPM(pageSPM[0], pageSPM[1]);

	    _hlwV1Aplus_universal.aplus_universal.enter({
	      pageName: params.name,
	      pageUrl: params.url,
	      spmUrl: params['spm-url'],
	      referrer: params.referrer
	    }, params);
	  },
	  updateNextProps: function updateNextProps() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _hlwV1Aplus_universal.aplus_universal.updateNextPageProperties(params);
	  },
	  updatePageUtparam: function updatePageUtparam() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _hlwV1Aplus_universal.aplus_universal.updatePageUtparam(params);
	  },
	  updateNextPageUtparam: function updateNextPageUtparam() {
	    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _hlwV1Aplus_universal.aplus_universal.updateNextPageUtparam(params);
	  }
	};

	goldlog.sendPV = goldlog.launch;

	exports.default = goldlog;
	module.exports = exports['default'];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.aplus_universal = __webpack_require__(54);
	exports.AplusWeb = __webpack_require__(55);
	exports.AplusWeex = __webpack_require__(59);
	exports.AplusWindmill = __webpack_require__(63);
	exports.AplusWindmillAlipay = __webpack_require__(64);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * aplus_universal/src/main.js
	 * 入口
	 * 详细设计稿见:<https://yuque.antfin-inc.com/docs/share/08615d0a-ebf5-488a-8b54-fb5686edf7c7>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var universalEnv = __webpack_require__(42);
	var isWeex = universalEnv.isWeex;
	var isWeb = universalEnv.isWeb;
	var isNode = universalEnv.isNode;

	// 三方小程序
	var isInWindmillByMY = (typeof my === 'undefined' ? 'undefined' : _typeof(my)) === 'object';

	function isWxORAliapy() {
	  try {
	    var UA = navigator.userAgent;
	    return (/AlipayClient/.test(UA) || /micromessenger/.test(UA)
	    );
	  } catch (e) {}
	}

	var map = {
	  AplusWeb: __webpack_require__(55),
	  AplusWeex: __webpack_require__(59),
	  AplusWindmill: __webpack_require__(63),
	  AplusWindmillAlipay: __webpack_require__(64),
	  Common: __webpack_require__(57)
	};

	var path;
	if (isWeex) {
	  path = 'AplusWeex';
	} else if (isInWindmillByMY) {
	  if (isWxORAliapy()) {
	    path = 'AplusWindmillAlipay';
	  } else {
	    path = 'AplusWindmill';
	  }
	} else if (isWeb) {
	  path = 'AplusWeb';
	} else if (isNode) {
	  path = 'Common';
	  try {
	    if (!global.window) {
	      global.window = {};
	    }
	  } catch (e) {}
	}

	var goldlog;
	try {
	  var Goldlog = map[path];
	  if (Goldlog.default) {
	    goldlog = Goldlog.default.create();
	  } else {
	    goldlog = Goldlog.create();
	  }
	} catch (e) {
	  console && console.log(e);
	  goldlog = {};
	}

	module.exports = goldlog;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/index.js
	 * 主要API
	 * 详细设计稿见:<https://yuque.antfin-inc.com/docs/share/08615d0a-ebf5-488a-8b54-fb5686edf7c7>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var objToParams = __webpack_require__(56).objToParams;
	var _Base = __webpack_require__(57);

	var goldlog = _Base.extend({
	  /**
	   * 设置当前页面的SPM，这里直调aplusJS的API
	   */
	  setPageSPM: function setPageSPM(spmA, spmB, callback) {
	    this.spmAB = [spmA, spmB];
	    var q = window.goldlog_queue || (window.goldlog_queue = []);
	    q.push({
	      action: 'goldlog.setPageSPM',
	      arguments: [spmA, spmB]
	    });
	    if (typeof callback === 'function') {
	      callback();
	    }
	  },

	  /**
	   * 获取当前页面的SPM（数组格式）
	   *
	   * @return {Array} 如 ['spmA', 'spmB']
	   */
	  getPageSPM: function getPageSPM() {
	    return this.spmAB;
	  },

	  /**
	   * 获取当前页面的SPM（点号分隔的字符串格式）
	   *
	   * @return {String} 如 'spmA.spmB'
	   */
	  getPageSPMStr: function getPageSPMStr() {
	    return this.spmAB.join('.');
	  },

	  /**
	   * 发送黄金令箭的API，默认用sendBeacon post的形式发送
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params logkey {String} 到阿里日志平台<http://log.alibaba-inc.com/track/index.htm#/apply/gold>申请的黄金令箭logkey
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {Undefined}
	   */
	  record: function record(logkey, gmkey, gokey, method) {
	    gokey = typeof gokey === 'string' ? gokey : objToParams(gokey, true);
	    var q = window.goldlog_queue || (window.goldlog_queue = []);
	    q.push({
	      action: 'goldlog.record',
	      arguments: [logkey, gmkey, gokey, method || 'POST']
	    });
	    return true;
	  },

	  /**
	   * 发PV日志接口
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmA: 'spmA',
	   *    spmB: 'spmB'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   * }
	   *
	   * @return {Undefined}
	   */
	  enter: function enter(pageConfig, params) {
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }
	    // handle logConfig
	    var logConfig = {
	      is_auto: false,
	      page_id: ''
	    };
	    // special logic for logConfig
	    if (params.page_id) {
	      logConfig.page_id = params.page_id;
	      delete params.page_id;
	    }
	    var q = window.goldlog_queue || (window.goldlog_queue = []);
	    q.push({
	      action: 'goldlog.sendPV',
	      arguments: [logConfig, params]
	    });
	    return true;
	  }
	});

	module.exports = goldlog;

/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * aplus_universal/src/common/utils.js
	 * 工具方法集
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	exports.getAplusUniversalVersion = function () {
	  return '1.1.5';
	};

	exports.paramsToObj = function (str) {
	  str = typeof str === 'string' ? str : '';
	  var result = {};
	  var splitStr = str.split('&');
	  for (var i = 0; i < splitStr.length; i++) {
	    var s = splitStr[i];
	    var splitKV = s.split('=');
	    var key = splitKV[0];
	    var val = '';
	    if (splitKV.length === 2) {
	      val = splitKV[1];
	    } else if (splitKV.length > 2) {
	      var charIndex = s.indexOf('=');
	      val = s.slice(charIndex + 1);
	    }
	    if (key) {
	      result[key] = val;
	    }
	  }
	  return result;
	};

	exports.objToParams = function (obj, isEnCode) {
	  var result = [];
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      var val = isEnCode ? encodeURIComponent(obj[i]) : obj[i];
	      result.push(i + '=' + val);
	    }
	  }
	  return result.join('&');
	};

	exports.getParamFromURL = function (url, param) {
	  var paramValue = '';
	  if (!param) {
	    param = 'spm';
	  }
	  if (url) {
	    var search = url.split('?')[1] || '';
	    search.split('&').forEach(function (o) {
	      if (o.indexOf(param + '=') === 0) {
	        paramValue = o.substr(param.length + 1);
	      }
	    });
	  }
	  return paramValue;
	};

	exports.simplifyURL = function (url) {
	  if (!url) {
	    url = '';
	  }
	  var WEEX_PREFIX = '_wx_tpl=';
	  var WEEX_SUFFIX = '.js';

	  // http://wapp.wapa.taobao.com/crowd/index-wx/index.html?groupId=57&_wx_tpl=http://g-assets.daily.taobao.net/tb/m-crowd/0.1.1/p/index-wx/index.js
	  // 截取 js 部分 http://g-assets.daily.taobao.net/tb/m-crowd/0.1.1/p/index-wx/index.js
	  if (url.indexOf(WEEX_PREFIX) > -1) {
	    url = url.substring(url.indexOf(WEEX_PREFIX) + WEEX_PREFIX.length, url.indexOf(WEEX_SUFFIX) + WEEX_SUFFIX.length);
	  }

	  return url.split('?')[0];
	};

	exports.getLocation = function () {
	  var loc;
	  try {
	    loc = location || {};
	  } catch (e) {
	    loc = {};
	  }
	  return loc;
	};

	exports.getPVLogUrl = function (host) {
	  var tmp = '';
	  if (/^\/\/\w+/.test(host)) {
	    tmp = 'https:' + host;
	  } else {
	    tmp = 'https://' + host;
	  }
	  if (!/\w+\.gif$/.test(host)) {
	    tmp += '/vx.gif';
	  }
	  return tmp;
	};

	exports.getEtagUrl = function (host) {
	  // var values = host.match(/[\w+\.]+[a-z|A-Z|0-9]+/);
	  var tmp = '';
	  if (/^\/\/\w+/.test(host)) {
	    tmp = 'https:' + host;
	  } else {
	    tmp = 'https://' + host;
	  }
	  tmp += '/eg.js';
	  return tmp;
	};

	exports.getGoldlogUrl = function (host) {
	  var tmp = '';
	  if (/^\/\/\w+/.test(host)) {
	    tmp = 'https:' + host;
	  } else {
	    tmp = 'https://' + host;
	  }
	  return tmp;
	};

	/**
	 * 生成一个用于避免缓存的随机数
	 * 为了减少 url 长度，这个随机数据的长度定为 7 位，
	 * 为了减少碰撞，使用 16 进制数字
	 *
	 * 268435456 = 2 ^ 28 = 0xfffffff + 1
	 */
	exports.makeCacheNum = function () {
	  return Math.floor(Math.random() * 268435456).toString(16);
	};

	/**
	 * array to param
	 * 将一个简单的数组转化为 url 参数的形式，
	 * 其中数组为
	 *      [[k1, v1], [k2, v2], [k3, v3], ...]
	 * 的形式。
	 * 与 obj2param 相比，这个方法的好处是可以保证最后参数的顺序
	 * @param arr {Array}
	 * @return {String}
	 */
	function arr2param(arr) {
	  var a = [];
	  for (var i = 0; i < arr.length; i++) {
	    var k = arr[i][0];
	    var v = arr[i][1];
	    a.push(k + '=' + encodeURIComponent(v));
	  }
	  return a.join('&');
	}

	/**
	 * 根据url以及参数，拼装一个更长的url
	 * @param url {String}
	 * @param [data] {Object|Array}
	 */
	function makeUrl(o) {
	  // var link_char = url.indexOf('?') === -1 ? '?' : '&';
	  var pre_param_data = o.preParams ? arr2param(o.preParams) : '';
	  var end_param_data = o.endParams ? arr2param(o.endParams) : '';
	  return [pre_param_data, '&aplus&', end_param_data].join('');
	}
	exports.makeUrl = makeUrl;

	/**
	 * 支持四种格式：“gm.mmstat.com/uc、gm.mmstat.com、//gm.mmstat.com/uc、//gm.mmstat.com”
	 * http://gitlab.alibaba-inc.com/alilog/kb/issues/222
	 * @谋士 in 2018-04-20
	 */
	exports.hostValidity = function (metaValue) {
	  return (/^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(metaValue)
	  );
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/index.js
	 * 主要API
	 * 详细设计稿见:<https://yuque.antfin-inc.com/docs/share/08615d0a-ebf5-488a-8b54-fb5686edf7c7>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var _Class = __webpack_require__(58);

	var FN = function () {};

	var _Base = _Class.extend({
	  spmAB: ['0', '0'],

	  spmUrl: '',

	  spmPre: '',

	  pageName: '',

	  isPageDisAppear: true,

	  isPageAppear: false,

	  _meta_info: {},

	  record: FN,

	  setPageSPM: FN,

	  getPageSPM: FN,

	  enter: FN,

	  updatePageProperties: FN,

	  updateNextPageProperties: FN,

	  updatePageUtparam: FN,

	  updateNextPageUtparam: FN,

	  skipPage: FN,

	  pageAppear: FN,

	  pageDisappear: FN,

	  setExposureView: FN,

	  setMetaInfo: FN,

	  appendMetaInfo: FN,

	  getMetaInfo: FN,

	  catchException: function catchException(msg) {
	    try {
	      console && console.error(msg);
	    } catch (e) {}
	  }
	});

	module.exports = _Base;

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * alilog/s/src/lib_b/core/_Class.js
	 * 基类，提供类所需要的基础属性
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	// 基类

	function _Class() {}

	// 将extend和create置于prototype对象中，以便子类继承
	_Class.prototype.extend = function () {};
	_Class.prototype.create = function () {};

	// 为了能在基类上直接以.extend的方式进行调用
	_Class.extend = function (props) {
	  return this.prototype.extend.call(this, props);
	};

	_Class.prototype.create = function (props) {
	  /**
	   * create实际上是对new的封装；
	   * create返回的实例实际上就是new构造出的实例；
	   * this即指向调用当前create的构造函数；
	   */
	  var instance = new this();
	  // 绑定该实例的属性
	  for (var name in props) {
	    instance[name] = props[name];
	  }
	  return instance;
	};

	_Class.prototype.extend = function (props) {
	  // 派生出来的新的子类
	  var Sub_Class = function () {};
	  try {
	    /**
	     * 继承父类的属性和方法，
	     * 当然前提是父类的属性都放在prototype中
	     * 而非上面create方法的“实例属性”中
	     */
	    if (typeof Object.create !== 'function') {
	      Object.create = function (o) {
	        function F() {}
	        F.prototype = o;
	        return new F();
	      };
	    }
	    Sub_Class.prototype = Object.create(this.prototype);

	    // 并且添加自己的方法和属性
	    for (var name in props) {
	      Sub_Class.prototype[name] = props[name];
	    }
	    Sub_Class.prototype.constructor = Sub_Class;

	    // 需要以.extend的方式和.create的方式调用：
	    Sub_Class.extend = Sub_Class.prototype.extend;
	    Sub_Class.create = Sub_Class.prototype.create;
	  } catch (err) {
	    Sub_Class = function () {};
	  }
	  return Sub_Class;
	};

	module.exports = _Class;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/index.js
	 * weex环境
	 * 详细设计稿见:<https://yuque.antfin-inc.com/docs/share/08615d0a-ebf5-488a-8b54-fb5686edf7c7>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var isWeex = __webpack_require__(42).isWeex;
	var base_ww = __webpack_require__(60);
	var requireModule = __webpack_require__(61).requireModule;

	function isThirdGroupAPI() {
	  var weex = typeof __weex_options__ !== 'undefined' && __weex_options__.weex;
	  var isInWindmill = isWeex && (typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) === 'object' && weex.config.container === 'windmill';
	  // 判断是否是二方三期小程序 api
	  var flag = false;
	  if (isInWindmill) {
	    try {
	      var keyboard = requireModule('keyboard');
	      if ((typeof keyboard === 'undefined' ? 'undefined' : _typeof(keyboard)) && typeof keyboard.hideKeyboard === 'function') {
	        flag = true;
	      }
	    } catch (e) {}
	  }
	  return flag;
	}

	var goldlog = base_ww.extend({
	  getUT: function getUT() {
	    try {
	      var UT = this.UserTrack || {};
	      if (typeof UT.enterEvent !== 'function' && typeof UT.commit !== 'function') {
	        UT = requireModule('userTrack') || __webpack_require__(62);
	      }
	      this.UserTrack = UT || {};
	    } catch (e) {
	      this.UserTrack = {};
	    }
	    return this.UserTrack;
	  },

	  create: function create(props) {
	    var instance = new this();
	    // 绑定该实例的属性
	    for (var name in props) {
	      instance[name] = props[name];
	    }
	    instance.isThirdGroupAPI = isThirdGroupAPI();
	    instance.getUT();
	    return instance;
	  },
	  /**
	   * 发送黄金令箭的API
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params logkey {String} 到阿里日志平台<http://log.alibaba-inc.com/track/index.htm#/apply/gold>申请的黄金令箭logkey
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {Undefined}
	   */
	  record: function record(logkey, gmkey, gokey) {
	    var recordParams = this._getRecordParams(logkey, gmkey, gokey);
	    var gmObj = recordParams.gmObj || {};
	    var UT = this.getUT();
	    if (this.isThirdGroupAPI) {
	      recordParams.args.isThirdGroupAPI = '1';
	      UT.commitut && UT.commitut({
	        type: gmObj.name,
	        eventId: gmObj.id,
	        eventid: gmObj.id,
	        name: recordParams.pageName,
	        pageName: recordParams.pageName,
	        arg1: recordParams.arg1,
	        arg2: recordParams.arg2,
	        arg3: recordParams.arg3,
	        param: recordParams.args,
	        params: recordParams.args
	      });
	    } else {
	      if (UT.customAdvance) {
	        UT.customAdvance(recordParams.pageName, gmObj.id, recordParams.arg1, recordParams.arg2, recordParams.arg3, recordParams.args);
	      } else if (UT.commitut) {
	        UT.commitut(gmObj.name, gmObj.id, recordParams.pageName, '', recordParams.arg1, recordParams.arg2, recordParams.arg3, recordParams.args);
	      }
	    }
	    return true;
	  },

	  /**
	   * 发PV日志接口
	   *
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmUrl: 'yourSpmUrl',
	   *    spmPre: 'yourSpmPre'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   *
	   * @return {Undefined}
	   */
	  enter: function enter(pageConfig, params) {
	    var UT = this.getUT();
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }
	    var recordParams = this._getEnterParams(pageConfig, params);
	    // var gmObj = recordParams.gmObj || {};
	    if (this.isThirdGroupAPI && UT.commitut) {
	      recordParams.args.isThirdGroupAPI = '1';
	      UT.commitut({
	        type: 'enter',
	        eventId: '-1',
	        eventid: '-1',
	        name: recordParams.pageName,
	        pageName: recordParams.pageName,
	        comName: '',
	        arg1: '',
	        arg2: '',
	        arg3: '',
	        param: recordParams.args,
	        params: recordParams.args
	      });
	    } else {
	      if (UT.enterEvent) {
	        UT.enterEvent(recordParams.pageName, recordParams.args);
	      } else if (UT.commit) {
	        UT.commit('enter', recordParams.pageName, '', recordParams.args);
	      }
	    }
	    return true;
	  },

	  /**
	   * TODO, UserTrack本期还不支持
	   * @params {String} 透传json字符串，必须是字符串
	   */
	  updatePageProperties: function updatePageProperties() {
	    // UserTrack.updatePageProperties(params);
	  },

	  /**
	   * TODO, UserTrack本期还不支持
	   * @params {String} 透传json字符串，必须是字符串
	   *
	   * @return {Undefined}
	   */
	  updateNextPageProperties: function updateNextPageProperties(params) {
	    var UT = this.getUT();
	    this._updateNextPageSpm(params);
	    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && UT.commitut) {
	      if (this.isThirdGroupAPI) {
	        UT.commitut({
	          type: 'updateNextProp',
	          eventId: -1,
	          eventid: -1,
	          name: '',
	          pageName: '',
	          comName: '',
	          arg1: '',
	          arg2: '',
	          arg3: '',
	          param: params,
	          params: params
	        });
	      } else {
	        UT.commitut('updateNextProp', -1, '', '', '', '', '', params);
	      }
	    }
	  },

	  /**
	   * @params {String} 透传json字符串，必须是字符串
	   *
	   * @return {Undefined}
	   */
	  updatePageUtparam: function updatePageUtparam(params) {
	    var UT = this.getUT();
	    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && UT.updatePageUtparam) {
	      if (this.isThirdGroupAPI) {
	        UT.updatePageUtparam({
	          utParamJson: JSON.stringify(params)
	        });
	      } else {
	        // 透传json字符串，必须是字符串
	        UT.updatePageUtparam(JSON.stringify(params));
	      }
	    }
	  },

	  /**
	   * @params {String} 透传json字符串，必须是字符串
	   *
	   * @return {Undefined}
	   */
	  updateNextPageUtparam: function updateNextPageUtparam(params) {
	    var UT = this.getUT();
	    if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' && UT.updateNextPageUtparam) {
	      if (this.isThirdGroupAPI) {
	        UT.updateNextPageUtparam({
	          utParamJson: JSON.stringify(params)
	        });
	      } else {
	        // 透传json字符串，必须是字符串
	        UT.updateNextPageUtparam(JSON.stringify(params));
	      }
	    }
	  },

	  /**
	   * 如果容器实现了appear、disappear，但业务又想手动控制打点生命周期时使用
	   *
	   * @return {Undefined}
	   */
	  skipPage: function skipPage() {
	    var UT = this.getUT();
	    UT.skipPage && UT.skipPage();
	  },

	  /**
	   * 如果容器未提供appear、disappear时需要业务手动调用
	   *
	   * @return {Undefined}
	   */
	  pageAppear: function pageAppear() {
	    var UT = this.getUT();
	    if (UT.pageAppear && this.isPageDisAppear) {
	      this.isPageDisAppear = false;
	      this.isPageAppear = true;
	      UT.pageAppear();
	    }
	  },

	  /**
	   * 如果容器未提供appear、disappear时需要业务手动调用
	   *
	   * @return {Undefined}
	   */
	  pageDisappear: function pageDisappear() {
	    var UT = this.getUT();
	    if (UT.pageDisAppear && this.isPageAppear) {
	      this.isPageDisAppear = true;
	      this.isPageAppear = false;
	      UT.pageDisAppear();
	    }
	  },

	  /**
	   * 设置自动曝光
	   * @params {String} ref 视图id (spmA.spmB.spmC.spmD)
	   * @params {String} arg1 曝光区块 (logkey)
	   * @params {Object} args 曝光args
	   */
	  setExposureView: function setExposureView(ref, arg1, args) {
	    var UT = this.getUT();
	    var result = false;

	    if (UT && UT.setExposureView) {
	      UT.setExposureView(ref, arg1, args);
	      result = true;
	    }
	    return result;
	  }
	});

	module.exports = goldlog;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * alilog/aplus_universal/src/common/base_ww.js
	 * weex&windmill 基类
	 * 详细设计稿见:<https://yuque.antfin-inc.com/docs/share/08615d0a-ebf5-488a-8b54-fb5686edf7c7>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var WeexUtils = __webpack_require__(61);
	var requireModule = WeexUtils.requireModule;

	var base = __webpack_require__(57);
	var utils = __webpack_require__(56);

	var paramsToObj = utils.paramsToObj;
	var objToParams = utils.objToParams;
	var getParamFromURL = utils.getParamFromURL;
	var simplifyURL = utils.simplifyURL;
	var getAplusUniversalVersion = utils.getAplusUniversalVersion;
	var getLocation = utils.getLocation;

	var WEEX_GM_KEY_MAP = {
	  'CLK': {
	    'name': 'click',
	    'id': '2101'
	  },
	  'EXP': {
	    'name': 'expose',
	    'id': '2201'
	  },
	  'OTHER': {
	    'name': 'other',
	    'id': '19999'
	  }
	};

	function getGmObj(gmkey) {
	  return WEEX_GM_KEY_MAP[gmkey] || 'OTHER';
	}

	var base_ww = base.extend({
	  create: function create(props) {
	    var instance = new this();
	    // 绑定该实例的属性
	    for (var name in props) {
	      instance[name] = props[name];
	    }
	    try {
	      instance.UserTrack = requireModule('userTrack');
	    } catch (e) {
	      instance.UserTrack = {};
	    }
	    instance._meta_info = {};
	    return instance;
	  },

	  /**
	   * 设置当前页面的SPM
	   * TODO 二期需要调用 'UserTrack.updatePageProperties'
	   *
	   * @return {Undefined}
	   */
	  setPageSPM: function setPageSPM(spmA, spmB, callback) {
	    if (spmA && spmB) {
	      var arr = [];
	      arr.push(spmA);
	      arr.push(spmB);
	      this.spmAB = arr;
	      this.pageName = '';
	    }
	    if (typeof callback === 'function') {
	      callback();
	    }
	  },

	  _updateNextPageSpm: function _updateNextPageSpm(params) {
	    if (params) {
	      this.spmPre = this.spmUrl;
	      this.spmUrl = params['spm-url'] || params.spmUrl;
	    }
	  },

	  /**
	   * 获取当前页面的SPM（数组格式）
	   *
	   * @return {Array} 如 ['spmA', 'spmB']
	   */
	  getPageSPM: function getPageSPM() {
	    return this.spmAB;
	  },

	  /**
	   * 获取当前页面的SPM（点号分隔的字符串格式）
	   *
	   * @return {String} 如 'spmA.spmB'
	   */
	  getPageSPMStr: function getPageSPMStr() {
	    return this.spmAB.join('.');
	  },

	  /**
	   * 发送黄金令箭的API
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params logkey {String} 到阿里日志平台<http://log.alibaba-inc.com/track/index.htm#/apply/gold>申请的黄金令箭logkey
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {
	      pageName: args.url,
	      gmObj: gmObj,
	      arg1: logkey,
	      arg2: '',
	      arg3: '',
	      args: args
	    }
	   */
	  _getRecordParams: function _getRecordParams(logkey, gmkey, gokey) {
	    var loc = getLocation(); // 三方小程序下尝试取currentpagename
	    var logkeyargs = typeof gokey === 'string' ? paramsToObj(gokey) : gokey;
	    var url = logkeyargs.url || loc.currentpagename || loc.href || '';
	    if (!this.spmUrl) {
	      this.spmUrl = getParamFromURL(url, 'spm') || '';
	    }
	    if (!this.spmPre) {
	      this.spmPre = getParamFromURL(logkeyargs.referrer, 'spm') || '';
	    }

	    var gmObj = getGmObj(gmkey);

	    var args = {
	      'jsver': 'aplus_universal',
	      'lver': getAplusUniversalVersion(),
	      'weex': '1',
	      'functype': 'ctrl',
	      'funcId': gmObj.id,
	      '_toUT': '2',
	      'logkey': logkey,
	      // 'gokey': encodeURIComponent(objToParams(logkeyargs, true)),
	      'gokey': typeof gokey === 'string' ? encodeURIComponent(gokey) : encodeURIComponent(objToParams(gokey, true)),
	      'gmkey': gmkey,
	      'spm-cnt': this.getPageSPMStr() + '.0.0',
	      'spm-url': this.spmUrl,
	      'spm-pre': this.spmPre,
	      'urlpagename': '',
	      'url': logkeyargs.url || loc.currentpagename || loc.href || '' // 完整 url
	    };
	    if (!this.pageName) {
	      this.pageName = args.pageName || loc.currentpagename || simplifyURL(args.url) || '';
	    }
	    return {
	      pageName: this.pageName,
	      gmObj: gmObj,
	      arg1: logkey,
	      arg2: '',
	      arg3: '',
	      args: args
	    };
	  },

	  /**
	   * 发PV日志接口
	   *
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmUrl: 'yourSpmUrl',
	   *    spmPre: 'yourSpmPre'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   *
	   * @return {Undefined}
	   */
	  _getEnterParams: function _getEnterParams(pageConfig, params) {
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }
	    var _screen = {
	      width: '0',
	      height: '0'
	    };
	    try {
	      _screen = screen;
	    } catch (e) {}
	    try {
	      if (__windmill_environment__) {
	        _screen.width = __windmill_environment__.screenWidth;
	        _screen.height = __windmill_environment__.screenHeight;
	      }
	    } catch (e) {}

	    var loc = getLocation(); // 三方小程序尝试取currentpagename
	    params.url = pageConfig.pageUrl || loc.currentpagename || loc.href || '';
	    // 关键属性保证不被业务传入的params覆盖
	    params = Object.assign(params, {
	      'scm': params.scm || getParamFromURL(params.url, 'scm') || '',
	      'functype': 'page',
	      'funcId': '2001',
	      'isonepage': pageConfig.isonepage ? 1 : -1,
	      'scr': _screen.width + 'x' + _screen.height,
	      'jsver': 'aplus_universal',
	      'lver': getAplusUniversalVersion(),
	      'weex': '1',
	      '_toUT': '2'
	    });
	    // pageId为分桶逻辑
	    var pageId = pageConfig.pageId ? '/' + pageConfig.pageId : '';
	    var spmCnt = this.getPageSPMStr();
	    params['spm-cnt'] = spmCnt + '' + pageId + '.0.0';
	    // 来源spm逻辑
	    var spmUrl = pageConfig['spmUrl'] || pageConfig['spm-url'] || getParamFromURL(params.url, 'spm') || this.spmUrl || '';
	    if (spmUrl) {
	      this.spmUrl = spmUrl;
	      params['spm-url'] = spmUrl;
	    }
	    var spmPre = pageConfig['spmPre'] || pageConfig['spm-pre'] || getParamFromURL(pageConfig.referrer, 'spm') || this.spmPre || '';
	    if (this.spmPre) {
	      this.spmPre = spmPre;
	      params['spm-pre'] = spmPre;
	    }
	    this.pageName = pageConfig.pageName || loc.currentpagename || simplifyURL(params.url) || '';
	    return {
	      pageName: this.pageName,
	      args: params
	    };
	    // // TODO 二期UserTrack需要提供原子粒度的API：
	    // // “updatePageName,updatePageUrl,updatePageProperties”
	    // if (UserTrack.enterEvent) {
	    //   UserTrack.enterEvent(pageName, params);
	    // } else if (UserTrack.commit) {
	    //   UserTrack.commit('enter', pageName, '', params);
	    // }
	  }
	});

	module.exports = base_ww;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/common/utils.js
	 * 工具方法集
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   来一 <laibin.lb@alibaba-inc.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	/**
	 * isExist variable
	 * @private
	 *
	 * @param  {All}  v variable
	 * @return {Boolean}
	 */

	function isExist(v) {
	  return v && typeof v !== 'undefined';
	}

	/**
	 * 同时兼容rax、vue获取weex模块的方法
	 * @params {String} moduleName 如：UserTrack
	 */
	exports.requireModule = function (moduleName) {
	  var rs;
	  try {
	    if (isExist(__weex_require__)) {
	      rs = __weex_require__(moduleName);
	    }
	  } catch (e) {
	    rs = null;
	  }

	  if (!rs) {
	    try {
	      if (isExist(weex) && typeof weex.requireModule === 'function') {
	        // eslint-disable-line
	        rs = weex.requireModule(moduleName); // eslint-disable-line
	      }
	    } catch (e) {
	      rs = null;
	    }
	  }

	  if (!rs) {
	    try {
	      rs = !(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()); // eslint-disable-line
	    } catch (e) {
	      rs = null;
	    }
	  }

	  return rs;
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/userTrack");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/index.js
	 * 三方小程序环境，即需要调用my.reportAnalytics API
	 *
	 * function reportAnalytics(eventName, data) {
	 *      if ( data === void 0 ) data = {};
	 *
	 *      if (eventName == 'click' || eventName == 'enter' || eventName == 'expose') {
	 *          var commitut = getMethod('userTrack.commitut');
	 *          commitut({
	 *              type: eventName,
	 *              eventId: data.eventId,
	 *              name: data.name,
	 *              comName: data.comName,
	 *              arg1: data.arg1,
	 *              arg2: data.arg2,
	 *              arg3: data.arg3,
	 *              param: data.param
	 *          });
	 *      }
	 *      else {
	 *          var customAdvance = getMethod('userTrack.customAdvance');
	 *          customAdvance({
	 *              eventId: data.eventId,
	 *              name: data.name,
	 *              comName: data.comName,
	 *              arg1: data.arg1,
	 *              arg2: data.arg2,
	 *              arg3: data.arg3,
	 *              param: data.param
	 *          });
	 *      }
	 *  }
	 *
	 * @params {String} utMethodName
	 *  枚举值: commit, commitut, commitEvent, customAdvance, pageAppear,
	 *         pageDisappear, skipPage, updatePageUtparam, updateNextPageUtparam
	 * @params {Object} data
	 *
	 *  export function callUserTrack (utMethodName: string, data: PlainObject = {}) {
	 *    var utMethod = getMethod('userTrack.' + utMethodName);
	 *    if (typeof utMethod === 'function') {
	 *      utMethod(data);
	 *    }
	 *  }
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   亚城 <yacheng.sz@taobao.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var base_ww = __webpack_require__(60);
	var goldlog = base_ww.extend({
	  create: function create(props) {
	    var instance = new this();
	    // 绑定该实例的属性
	    for (var name in props) {
	      instance[name] = props[name];
	    }
	    return instance;
	  },
	  /**
	   * 发送黄金令箭的API
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params logkey {String} 到阿里日志平台<http://log.alibaba-inc.com/track/index.htm#/apply/gold>申请的黄金令箭logkey
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {Undefined}
	   */
	  record: function record(logkey, gmkey, gokey) {
	    var recordParams = this._getRecordParams(logkey, gmkey, gokey);
	    delete recordParams.args.weex;
	    recordParams.args.windmill = 1;
	    var gmObj = recordParams.gmObj || {};
	    // 这里eventName需要避开click,expose,enter，因为这三个类型有潜规则：”arg1 = pageName/pageUrl + '_' + arg1“
	    if (my) {
	      var data = {
	        type: gmObj.name,
	        eventId: gmObj.id,
	        // name: recordParams.pageName,
	        comName: recordParams.arg1,
	        arg1: recordParams.arg1,
	        arg2: recordParams.arg2,
	        arg3: recordParams.arg3,
	        param: recordParams.args
	      };
	      if (recordParams.pageName) {
	        data.name = recordParams.pageName;
	        data.pageName = recordParams.pageName;
	      }
	      if (my.callUserTrack) {
	        my.callUserTrack('customAdvance', data);
	      } else if (my.reportAnalytics) {
	        my.reportAnalytics('customAdvance', data);
	      }
	    }
	  },

	  /**
	   * 发PV日志接口
	   *
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmA: 'spmA',
	   *    spmB: 'spmB'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   * }
	   *
	   * @return {Undefined}
	   */
	  enter: function enter(pageConfig, params) {
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }
	    var recordParams = this._getEnterParams(pageConfig, params);
	    delete recordParams.args.weex;
	    recordParams.args.windmill = 1;
	    // var gmObj = recordParams.gmObj || {};
	    if (my) {
	      var data = {
	        type: 'enter',
	        eventId: '2001',
	        eventid: '-1',
	        pageName: recordParams.pageName,
	        name: recordParams.pageName,
	        comName: recordParams.arg1,
	        arg1: recordParams.arg1,
	        arg2: recordParams.arg2,
	        arg3: recordParams.arg3,
	        param: recordParams.args
	      };
	      if (my.callUserTrack) {
	        my.callUserTrack('commitut', data);
	      } else if (my.reportAnalytics) {
	        my.reportAnalytics('enter', data);
	      }
	    }
	  },

	  /**
	   * TODO, UserTrack本期还不支持
	   * @params {String} 透传json字符串，必须是字符串
	   */
	  updatePageProperties: function updatePageProperties() {},

	  /**
	   * @params {Object} params 参数透传一步
	   *
	   * @return {Undefined}
	   */
	  updateNextPageProperties: function updateNextPageProperties(params) {
	    if (!params) {
	      params = {};
	    }
	    this._updateNextPageSpm(params);
	    if (my) {
	      var data = {
	        type: 'updateNextProp',
	        eventId: -1,
	        eventid: -1,
	        name: '',
	        pageName: '',
	        comName: '',
	        arg1: '',
	        arg2: '',
	        arg3: '',
	        param: params,
	        params: params
	      };
	      if (my.callUserTrack) {
	        my.callUserTrack('commitut', data);
	      } else if (my.reportAnalytics) {
	        my.reportAnalytics('enter', data);
	      }
	    }
	  },

	  /**
	   * 参数透传2步，出现在当前页面pv日志args内的utparam-cnt内，下个页面会出现在utparam-url内，下下个页面会出现在utparam-pre内
	   * @params {Object} params 三方小程序params入参位object格式
	   *
	   * @return {Undefined}
	   */
	  updatePageUtparam: function updatePageUtparam(params) {
	    if (!params) {
	      params = {};
	    }
	    if (my && my.callUserTrack) {
	      my.callUserTrack('updatePageUtparam', {
	        'utParamJson': JSON.stringify(params)
	      });
	    }
	  },

	  /**
	   * 参数透传2步，当前页面不会出现，出现在下个页面pv日志args内的utparam-url内，下下个页面会出现在utparam-pre内
	   * @params {Object} params 三方小程序params入参位object格式
	   *
	   * @return {Undefined}
	   */
	  updateNextPageUtparam: function updateNextPageUtparam(params) {
	    if (!params) {
	      params = {};
	    }
	    if (my && my.callUserTrack) {
	      my.callUserTrack('updateNextPageUtparam', {
	        'utParamJson': JSON.stringify(params)
	      });
	    }
	  },

	  /**
	   * 如果容器实现了appear、disappear，但业务又想手动控制打点生命周期时使用
	   *
	   * @return {Undefined}
	   */
	  skipPage: function skipPage() {
	    // UserTrack.skipPage();
	    if (my && my.callUserTrack) {
	      my.callUserTrack('skipPage');
	    }
	  },

	  /**
	   * 如果容器未提供appear、disappear时需要业务手动调用
	   *
	   * @return {Undefined}
	   */
	  pageAppear: function pageAppear() {
	    if (my && my.callUserTrack && this.isPageDisAppear) {
	      this.isPageDisAppear = false;
	      this.isPageAppear = true;
	      my.callUserTrack('pageAppear');
	    }
	  },

	  /**
	   * 如果容器未提供appear、disappear时需要业务手动调用
	   *
	   * @return {Undefined}
	   */
	  pageDisappear: function pageDisappear() {
	    if (my && my.callUserTrack && this.isPageAppear) {
	      this.isPageDisAppear = true;
	      this.isPageAppear = false;
	      my.callUserTrack('pageDisappear');
	    }
	  }
	});
	module.exports = goldlog;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * aplus_universal/src/index.js
	 * 支付宝小程序环境，直接用类小程序流量日志请求规范
	 * https://yuque.antfin-inc.com/alilog/rules/mapp
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   兰梦 <lanmeng.bhy@alibaba-inc.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var utils = __webpack_require__(56);
	var request = __webpack_require__(65);

	var ETAG_STORAGE_KEY = '__ETAG__CNA__ID__';

	var base_windmill = __webpack_require__(66);

	var goldlog_queue = {
	  CNA: '',
	  set message(msg) {
	    if (typeof msg === 'function') {
	      if (this.CNA) {
	        msg(this.CNA);
	      } else {
	        this.logs.push(msg);
	      }
	    } else if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
	      if (msg.cna) {
	        var _self = this;
	        _self.CNA = msg.cna;
	        for (var i = 0; i < _self.logs.length; i++) {
	          var _log = _self.logs[i];
	          _log(_self.CNA);
	        }
	      }
	    }
	  },
	  get message() {
	    return this.logs;
	  },
	  logs: []
	};

	var goldlog = base_windmill.extend({
	  hasSyncEtag: false,

	  _syncEtag: function _syncEtag(callback) {
	    var check = function (o) {
	      var cna = o && o.data ? o.data.cna : '';
	      if (!cna) {
	        toSyncEtag();
	      } else {
	        callback(cna);
	      }
	    };
	    var rhost = this._meta_info['aplus-rhost-v'] || 'log.mmstat.com';
	    var toSyncEtag = function () {
	      var url = utils.getEtagUrl(rhost);
	      if (url) {
	        request.get(url, {
	          dataType: 'text'
	        }, function (res) {
	          var headers = res.headers || {};
	          var etag = headers.ETag || headers.Etag || '';
	          etag = etag.replace(/\"/g, '');
	          my.setStorageSync({
	            key: ETAG_STORAGE_KEY,
	            data: {
	              cna: etag
	            }
	          });
	          callback(etag);
	        });
	      }
	    };
	    my.getStorage({
	      key: ETAG_STORAGE_KEY,
	      success: function success(res) {
	        check(res);
	      },
	      fail: function fail(res) {
	        check(res);
	      }
	    });
	  },

	  _addDetailParam: function _addDetailParam(params) {
	    // 如果有商品信息
	    if (params.itemId) {
	      return {
	        _p_typ: 'pdp',
	        _p_item: params.itemId,
	        _p_ispdp: '1'
	      };
	    }
	    return {};
	  },

	  _addSellerParam: function _addSellerParam(params) {
	    // 如果有商品信息
	    if (params.sellerId) {
	      return {
	        _p_typ: params.itemId ? 'pdp' : 'slr',
	        _p_slr: params.sellerId,
	        _p_isdpp: '1'
	      };
	    }
	    return {};
	  },

	  tryAyncEtag: function tryAyncEtag() {
	    if (!this.hasSyncEtag) {
	      this.hasSyncEtag = true;
	      this._syncEtag(function (cna) {
	        if (cna) {
	          goldlog_queue.message = {
	            cna: cna
	          };
	        }
	      });
	    }
	  },

	  /**
	   * 发送黄金令箭的API
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params logkey {String} 到阿里日志平台<http://log.alibaba-inc.com/track/index.htm#/apply/gold>申请的黄金令箭logkey
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {Undefined}
	   */
	  record: function record(logkey, gmkey, gokey) {
	    var _self = this;
	    _self.tryAyncEtag();
	    goldlog_queue.message = function (cna) {
	      var logUrl = utils.getGoldlogUrl(_self._meta_info['aplus-rhost-g']);
	      var args = _self._getRecordParams(gmkey, gokey, cna);
	      if (logUrl && args) {
	        if (!logkey.startsWith('/vx')) {
	          logkey = '/vx' + logkey;
	        }

	        logUrl += /^\//.test(logkey) ? logkey : '/' + logkey;
	        var params = [];
	        for (var k in args) {
	          params.push(k + '=' + args[k]);
	        }
	        logUrl = logUrl + '?' + params.join('&');
	        request.get(logUrl, {}, function () {
	          // console.log(res);
	        });
	      }
	    };
	  },

	  /**
	   * 发PV日志接口
	   * 一个例子
	   * https://log.mmstat.com/vx.gif?
	   *  logtype=1
	   *  &title=vxTestPage
	   *  &cna=12388999
	   *  &aplus
	   *  &cfgver=vx.1.0
	   *  &pc_i=mi12313121231
	   *  &ps_i=20180131012353458353
	   *  &pu_i=6234249
	   *  &_p_url=https%3A%2F%2Fwww.test.com%3Fmypage.html
	   *  &_p_ref=https%3A%2F%2Fwww.test.com%3Freferpage.html
	   *  &spm-cnt=asite.mypage.0.0
	   *  &spm-url=asite.page0.mod1.d2
	   *  &_p_os=mac
	   *  &_p_scr=768*480
	   *  &_p_pf=mi
	   *  &cache=24243243
	   *  &mykey=myvalue
	   *
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmA: 'spmA',
	   *    spmB: 'spmB'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   * }
	   *
	   * @return {Undefined}
	   */
	  enter: function enter(pageConfig, params) {
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }
	    var _self = this;
	    _self.tryAyncEtag();
	    goldlog_queue.message = function (cna) {
	      params.cna = cna;
	      _self._getEnterParams(pageConfig, params, function (enterParams) {
	        var pvUrl = utils.getPVLogUrl(_self._meta_info['aplus-rhost-v']);
	        if (pvUrl) {
	          request.get(pvUrl + '?' + utils.makeUrl(enterParams), {}, function () {
	            // console.log(res);
	          });
	        }
	      });
	    };
	  },

	  /**
	   * @params {Object} params 参数透传一步
	   *
	   * @return {Undefined}
	   */
	  updateNextPageProperties: function updateNextPageProperties(params) {
	    if (!params) {
	      params = {};
	    }
	    this._updateNextPageSpm(params);
	  }
	});
	module.exports = goldlog;

/***/ },
/* 65 */
/***/ function(module, exports) {

	/**
	 * alilog/s/src/aplus.js
	 * request
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   jizha.wyj@blog http://oldj.net
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	/**
	 * 发送GET请求
	 * @params {String} url
	 * @params {String} opts {
	 *   timeout: 5000
	 * }
	 * @params {Function} callback {
	 *   timeout: 5000
	 * }
	 */

	exports.get = function (url, opts, callback) {
	  my.httpRequest({
	    url: url,
	    method: 'GET',
	    dataType: opts && opts.dataType ? opts.dataType : 'text',
	    timeout: opts && opts.timeout ? opts.timeout : 5000,
	    success: function success(res) {
	      callback(res);
	    },
	    fail: function fail(res) {
	      callback(res);
	    }
	  });
	};

	// 发送sendBeacon post请求
	exports.sendBeacon = function (url, data) {
	  for (var k in data) {
	    if (k !== 'cna') {
	      data[k] = encodeURIComponent(data[k]);
	    }
	  }
	  navigator.sendBeacon(url, JSON.stringify(data));
	  return url;
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * alilog/aplus_universal/src/common/base_windmill.js
	 * 类小程序流量日志请求规范
	 * 详细设计稿见:<https://yuque.antfin-inc.com/alilog/rules/mapp>
	 *
	 * Copyright(c) Alibaba Group Holding Limited.
	 *
	 * Authors:
	 *   兰梦 <lanmeng.bhy@alibaba-inc.com>
	 *   谋士 <qingliang.hql@alibaba-inc.com>
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var base = __webpack_require__(57);
	var utils = __webpack_require__(56);

	var paramsToObj = utils.paramsToObj;
	var objToParams = utils.objToParams;
	var getParamFromURL = utils.getParamFromURL;
	var simplifyURL = utils.simplifyURL;
	var getAplusUniversalVersion = utils.getAplusUniversalVersion;
	var getLocation = utils.getLocation;

	// 平台类型映射
	var APP_MAP = {
	  'alipay': 'my',
	  'TB': 'tb',
	  'Weixin': 'wx'
	};

	function getPlatType(systemInfo) {
	  var pf = APP_MAP[systemInfo ? systemInfo.app : ''] || '';
	  if (!pf) {
	    var UA = navigator.userAgent;
	    if (/alipay/i.test(UA)) {
	      pf = 'my';
	    } else if (/AliApp\(TB/i.test(UA)) {
	      pf = 'tb';
	    } else if (/micromessenger/.test(UA)) {
	      pf = 'wx';
	    }
	  }
	  return pf;
	}

	function parseOS(os) {
	  var rs = '';

	  if (os) {
	    rs = {
	      'iphone': 'ios',
	      'ipad': 'ios',
	      'ios': 'ios',
	      'android': 'andr',
	      'yunos': 'yun',
	      'wp': 'wp',
	      'linux': 'linux',
	      'unix': 'unix',
	      'macos': 'mac',
	      'windows': 'win'
	    }[os.toLowerCase()] || '';
	  }
	  return rs;
	}

	function getRandomId(size) {
	  /**
	   * 生成本页的 pv id
	   * pv id 只需要当前用户会话唯一即可，这儿使用一个 6 位的 16 进制数字
	   */
	  var rnd_strs = '';

	  var handled = false;
	  var char;

	  /**
	   * 解决部分 spm 被 GFW 墙了的情况，如 22.gl
	   * 排除 pvid 以 gl 开头的情况
	   */
	  function handlePVId(charPos) {

	    if (charPos === 1) {
	      return '0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ'.substr(Math.floor(Math.random() * 60), 1);
	    } else if (charPos === 2) {
	      return '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ'.substr(Math.floor(Math.random() * 60), 1);
	    }
	    return '0';
	  }

	  while (rnd_strs.length < size) {
	    char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.substr(Math.floor(Math.random() * 62), 1);
	    // 处理被墙的情况，目前只针对gl开头的
	    if (!handled && rnd_strs.length <= 2 && (char.toLowerCase() === 'g' || char.toLowerCase() === 'l')) {
	      if (rnd_strs.length === 0 && char.toLowerCase() === 'g') {
	        if (Math.random() < 0.5) {
	          char = handlePVId(1);
	          handled = true;
	        }
	      } else if (rnd_strs.length === 1 && char.toLowerCase() === 'l' && rnd_strs.charAt(0).toLowerCase() === 'g') {
	        char = handlePVId(2);
	        handled = true;
	      }
	    }
	    rnd_strs += char;
	  }
	  return rnd_strs;
	}

	function createPvId() {
	  return getRandomId(14);
	}

	var base_vx = base.extend({
	  create: function create(props) {
	    var instance = new this();
	    // 绑定该实例的属性
	    for (var name in props) {
	      instance[name] = props[name];
	    }
	    try {
	      // 详见可用的meta配置：https://yuque.antfin-inc.com/aplusjs/docs/meta
	      instance._meta_info = Object.assign({
	        'aplus-rhost-v': 'log.mmstat.com',
	        'aplus-rhost-g': 'wgo.mmstat.com',
	        'aplus-channel': 'GET'
	      }, instance._meta_info);
	    } catch (e) {
	      console && console.log(e);
	    }
	    return instance;
	  },

	  /**
	   * 设置当前页面的SPM
	   * TODO 二期需要调用 'UserTrack.updatePageProperties'
	   *
	   * @return {Undefined}
	   */
	  setPageSPM: function setPageSPM(spmA, spmB, callback) {
	    if (spmA && spmB) {
	      var arr = [];
	      arr.push(spmA);
	      arr.push(spmB);
	      this.spmAB = arr;
	      this.pageName = '';
	      this.pvid = createPvId();
	    }
	    if (typeof callback === 'function') {
	      callback();
	    }
	  },

	  _updateNextPageSpm: function _updateNextPageSpm(params) {
	    if (params) {
	      this.spmPre = this.spmUrl;
	      this.spmUrl = params['spm-url'] || params.spmUrl;
	    }
	  },

	  /**
	   * 获取当前页面的SPM（数组格式）
	   *
	   * @return {Array} 如 ['spmA', 'spmB']
	   */
	  getPageSPM: function getPageSPM() {
	    return this.spmAB;
	  },

	  /**
	   * 获取当前页面的SPM（点号分隔的字符串格式）
	   *
	   * @return {String} 如 'spmA.spmB'
	   */
	  getPageSPMStr: function getPageSPMStr() {
	    return this.spmAB.join('.');
	  },

	  /**
	   * 发送黄金令箭的API
	   * TODO 二期将UserTrack.commitut改成与UT4Aplus一致
	   *
	   * @params gmkey {String} 枚举值：CLK,EXP,OTHER，默认为OTHER
	   * @params gokey {String} '&'分隔的字符串，如：“a=1&b=2&c=3”
	   *
	   * @return {Object} args
	   */
	  _getRecordParams: function _getRecordParams(gmkey, gokey, cna) {
	    var loc = getLocation(); // 三方小程序下尝试取currentpagename
	    var logkeyargs = typeof gokey === 'string' ? paramsToObj(gokey) : gokey;
	    var url = logkeyargs.url || loc.currentpagename || loc.href || '';
	    if (!this.spmUrl) {
	      this.spmUrl = getParamFromURL(url, 'spm') || '';
	    }
	    if (!this.spmPre) {
	      this.spmPre = getParamFromURL(logkeyargs.referrer, 'spm') || '';
	    }

	    // var gmObj = getGmObj(gmkey);
	    logkeyargs = Object.assign({}, logkeyargs, {
	      'pc_i': logkeyargs.pc_i || cna, // 终端标识ID
	      'ps_i': logkeyargs.ps_i || '', // 业务session（可选）
	      'pu_i': logkeyargs.pu_i || '', // 注册会员ID（可选）
	      '_p_url': logkeyargs.url || loc.currentpagename || loc.href || '', // 当前页面的URL
	      '_p_ref': logkeyargs.pre || '', // 来源页面的URL
	      'spm-cnt': this.getPageSPMStr() + '.0.0.' + this.pvid,
	      'spm-url': this.spmUrl,
	      'spm-pre': this.spmPre,
	      'jsver': 'aplus_universal',
	      'lver': getAplusUniversalVersion(),
	      'windmill': '1',
	      'cache': utils.makeCacheNum()
	    });
	    var args = {
	      'logtype': '2',
	      'cna': cna,
	      'gokey': encodeURIComponent(objToParams(logkeyargs, true)),
	      'gmkey': gmkey
	    };
	    return args;
	  },

	  _addDetailParam: function _addDetailParam(params) {
	    // 如果有商品信息
	    if (params.itemId) {
	      return {
	        _p_typ: 'pdp',
	        _p_item: params.itemId,
	        _p_ispdp: '1'
	      };
	    }
	    return {};
	  },

	  _initPageSpmParams: function _initPageSpmParams(pageConfig, params) {
	    // pageId为分桶逻辑
	    var pageId = pageConfig.pageId ? '/' + pageConfig.pageId : '';
	    var spmCnt = this.getPageSPMStr();
	    var _spmCnt = spmCnt + '' + pageId + '.0.0.' + this.pvid;
	    // var _spmUrl;
	    // var _spmPre;
	    // 来源spm逻辑
	    var spmUrl = pageConfig['spmUrl'] || pageConfig['spm-url'] || getParamFromURL(params.url, 'spm') || this.spmUrl || '';
	    var spmPre = pageConfig['spmPre'] || pageConfig['spm-pre'] || getParamFromURL(pageConfig.referrer, 'spm') || this.spmPre || '';

	    var loc = getLocation(); // 三方小程序尝试取currentpagename
	    // var url = pageConfig.pageUrl || loc.currentpagename || loc.href || '';
	    var pageName = pageConfig.pageName || loc.currentpagename || simplifyURL(params.url) || '';

	    this.spmUrl = spmUrl;
	    this.spmPre = spmPre;
	    this.pageName = pageName;
	    return {
	      pageName: pageName,
	      spmCnt: _spmCnt,
	      spmUrl: spmUrl,
	      spmPre: spmPre
	    };
	  },

	  _addSellerParam: function _addSellerParam(params) {
	    // 如果有商商家信息
	    if (params.sellerId) {
	      return {
	        _p_typ: params.itemId ? 'pdp' : 'slr',
	        _p_slr: params.sellerId,
	        _p_isdpp: '1'
	      };
	    }
	    return {};
	  },

	  _appendParamsIntoArray: function _appendParamsIntoArray(params, exparams) {
	    if (params && exparams) {
	      Object.keys(exparams).forEach(function (k) {
	        params.push([k, exparams[k]]);
	      });
	    }
	    return params;
	  },

	  _appendUserParams: function _appendUserParams(params, userParams) {
	    ['pc_i', 'ps_i', 'pu_i'].forEach(function (k) {
	      if (userParams[k]) {
	        params.push([k, userParams[k]]);
	      }
	    });
	    return params;
	  },

	  /**
	   * 获取系统信息 https://docs.alipay.com/mini/api/system-info
	   * 手机型号、屏幕分辨率、系统版本等信息
	   */
	  _getSystemInfo: function _getSystemInfo(callback) {
	    var _self = this;
	    var emptyObj = {};
	    var sysInfo = _self.SYSTEM_INFO || {};
	    if (sysInfo && sysInfo.version) {
	      callback(_self.SYSTEM_INFO);
	    } else {
	      try {
	        my.getSystemInfo({
	          complete: function complete(res) {
	            if (res && res.version) {
	              _self.SYSTEM_INFO = res;
	              callback(res);
	            } else {
	              callback(emptyObj);
	            }
	          }
	        });
	      } catch (e) {
	        callback(emptyObj);
	      }
	    }
	  },

	  /**
	   * 发PV日志接口
	   *
	   * @params {Object} pageConfig {
	   *    pageId: 'abtestB',      // 可选，ABtest场景下传入
	   *    pageName: 'yourPageName',
	   *    pageUrl: 'yourPageUrl',
	   *    spmUrl: 'yourSpmUrl',
	   *    spmPre: 'yourSpmPre'
	   * }
	   * @params {Object} pageProperties {
	   *    key1: value1,
	   *    key2: value2,
	   *    ...
	   *    keyN: valueN
	   *
	   * @return {Undefined}
	   */
	  _getEnterParams: function _getEnterParams(pageConfig, params, callback) {
	    if (!pageConfig) {
	      pageConfig = {};
	    }
	    if (!params) {
	      params = {};
	    }

	    var pageSpmParams = this._initPageSpmParams(pageConfig, params);
	    // 关键属性保证不被业务传入的params覆盖
	    var preParams = [['logtype', '1'], // 必须
	    ['title', encodeURIComponent(pageSpmParams.pageName)], // 必须
	    ['cna', params.cna || '']
	    // ['spm-cnt', pageSpmParams.spmCnt], // 必须
	    // ['spm-url', pageSpmParams.spmUrl],
	    // ['spm-pre', pageSpmParams.spmPre]
	    ];

	    var _self = this;
	    _self._getSystemInfo(function (systemInfo) {
	      var endParams = [['_p_url', pageConfig.pageUrl], // 必须
	      ['_p_ref', pageConfig.referrer || ''], ['_p_os', parseOS(systemInfo.platform) || ''], ['_p_scr', systemInfo.screenWidth + 'x' + systemInfo.screenHeight], ['_p_pf', getPlatType(systemInfo)], ['spm-cnt', pageSpmParams.spmCnt], // 必须
	      ['spm-url', pageSpmParams.spmUrl], ['spm-pre', pageSpmParams.spmPre]];
	      if (endParams['spm-url']) {
	        _self.spmUrl = endParams['spm-url'];
	      }
	      if (endParams['spm-pre']) {
	        _self.spmPre = endParams['spm-pre'];
	      }

	      endParams = _self._appendParamsIntoArray(endParams, _self._addDetailParam(params));
	      endParams = _self._appendParamsIntoArray(endParams, _self._addSellerParam(params));
	      endParams = _self._appendUserParams(endParams, params);
	      endParams = _self._appendParamsIntoArray(endParams, {
	        'jsver': 'aplus_universal',
	        'lver': getAplusUniversalVersion(),
	        'windmill': '1',
	        'cache': utils.makeCacheNum()
	      });
	      if (typeof callback === 'function') {
	        var obj = {
	          pageName: pageSpmParams.pageName,
	          preParams: preParams,
	          endParams: endParams
	        };
	        callback(obj);
	      }
	    });
	  },

	  setMetaInfo: function setMetaInfo(metaKey, metaValue) {
	    switch (metaKey) {
	      case 'aplus-rhost-v':
	      case 'aplus-rhost-g':
	        if (utils.hostValidity(metaValue)) {
	          var tmpValue = metaValue.indexOf('//') !== 0 ? 'https://' + metaValue : 'https:' + metaValue;
	          this._meta_info[metaKey] = tmpValue;
	        } else {
	          this.catchException('sorry, metaValue of ' + metaValue + ' is not legality!');
	        }
	        break;
	      case 'aplus-exdata':
	      case 'aplus-cpvdata':
	        if ((typeof metaValue === 'undefined' ? 'undefined' : _typeof(metaValue)) === 'object') {
	          this._meta_info[metaKey] = metaValue;
	        } else {
	          this.catchException('sorry, type of ' + metaValue + '  must be object!');
	        }
	        break;
	      case 'aplus-channel':
	        this._meta_info[metaKey] = metaValue;
	        break;
	      default:
	        this.catchException('sorry, aplus do not support the metaKey of ' + metaKey);
	        break;
	    }
	  },

	  appendMetaInfo: function appendMetaInfo(metaKey, metaValue) {
	    switch (metaKey) {
	      case 'aplus-exdata':
	      case 'aplus-cpvdata':
	        if ((typeof metaValue === 'undefined' ? 'undefined' : _typeof(metaValue)) === 'object') {
	          var oldMetaValue = this._meta_info[metaKey];
	          this._meta_info[metaKey] = Object.assign(oldMetaValue, metaValue);
	        } else {
	          this.catchException('sorry, type of ' + metaValue + '  must be object!');
	        }
	        break;
	      default:
	        this.setMetaInfo(metaKey, metaValue);
	        break;
	    }
	  },

	  getMetaInfo: function getMetaInfo(metaKey) {
	    return this._meta_info[metaKey];
	  }
	});

	module.exports = base_vx;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(68);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _universalEnv = __webpack_require__(42);

	var _uri = __webpack_require__(69);

	var _uri2 = _interopRequireDefault(_uri);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 用以标记发送的次数
	var count = 0;

	var defaultConfig = {
	  screen: typeof screen === 'undefined' ? '0x0' : (screen && screen.width) + 'x' + (screen && screen.height),
	  sampling: 1,
	  version: 'rx-tracker/2.2.9',
	  native: _universalEnv.isWeex ? 1 : 0,
	  isInWindmill: 0
	};
	var logkey = '/jstracker.3';

	function report(userConfig) {

	  // 最多发送 20 次, 避免将 Web 通道搞挂
	  if (++count > 20 && _universalEnv.isWeb) {
	    return false;
	  }

	  var config = Object.assign({
	    url: _uri2.default.format(userConfig)
	  }, defaultConfig, userConfig);

	  config.sampling = isDebug() ? 1 : config.sampling;

	  if (Math.random() * config.sampling < 1) {

	    if (_universalEnv.isWeex) {
	      var UserTrack = void 0;
	      try {
	        UserTrack = __weex_require__('@weex-module/userTrack');
	      } catch (e) {}
	      var weex = typeof __weex_options__ !== 'undefined' && __weex_options__.weex;
	      var isInWindmill = _universalEnv.isWeex && (typeof weex === 'undefined' ? 'undefined' : _typeof(weex)) === 'object' && weex.config.container === 'windmill' || false; // eslint-disable-line
	      var isThirdGroupAPI = false; // 判断是否是三期小程序 api
	      if (isInWindmill) {
	        try {
	          var keyboard = __weex_require__('@weex-module/keyboard');
	          if ((typeof keyboard === 'undefined' ? 'undefined' : _typeof(keyboard)) && typeof keyboard.hideKeyboard == 'function') {
	            // eslint-disable-line
	            isThirdGroupAPI = true;
	          }
	        } catch (e) {}
	      }
	      if (UserTrack.commitEvent) {
	        if (isInWindmill && isThirdGroupAPI) {
	          config.isInWindmill = 'weex';
	          UserTrack.commitEvent({
	            eventId: '19999',
	            eventid: '19999',
	            name: location.href,
	            pageName: location.href,
	            arg1: logkey,
	            arg2: '',
	            arg3: '',
	            param: config,
	            params: config
	          });
	        } else {
	          // UserTrack.commit('click', logkey, logkey, config);
	          UserTrack.commitEvent(location.href, '19999', logkey, '', '', config);
	        }
	      }
	    } else if (_universalEnv.isWeb && 'undefined' !== typeof goldlog) {
	      if (goldlog.send) {
	        goldlog.send('//gm.mmstat.com' + logkey, config);
	      }
	    } else if (isThirdWindmill()) {
	      config.isInWindmill = 'web';
	      sendLogByThirdWindmill(config);
	    }
	  }
	}

	function isThirdWindmill() {
	  if (typeof my !== 'undefined' && my.getSystemInfoSync && typeof my.getSystemInfoSync === 'function') {
	    // eslint-disable-line
	    if (my.getSystemInfoSync().app === 'TB' || my.getSystemInfoSync().app === 'alipay') {
	      // eslint-disable-line
	      return true;
	    }
	  }

	  return false;
	}

	function sendLogByThirdWindmill(config) {
	  if (my.request && typeof my.request === 'function') {
	    // eslint-disable-line
	    my.request({ // eslint-disable-line
	      url: 'http://gm.mmstat.com' + logkey, // eslint-disable-line
	      method: 'GET',
	      data: config,
	      dataType: 'text'
	    }).catch(function () {});
	  } else if (my.httpRequest && typeof my.httpRequest === 'function') {
	    // eslint-disable-line
	    my.httpRequest({ // eslint-disable-line
	      url: '//gm.mmstat.com' + logkey,
	      method: 'get',
	      data: config,
	      dataType: 'json'
	    });
	  }
	}

	/**
	 * 上报异常
	 * @params {Error} error 异常对象  必选，否则不会上报
	 * @params {String} moduleName 上报模块名称，可选
	 * @params {String} reverse1 额外上报内容，可选
	 */
	function reportError(error, moduleName, reverse1) {
	  var userConfig = {};
	  if (error && error instanceof Error) {
	    userConfig = {
	      stack: JSON.stringify(error.stack),
	      name: error.name,
	      message: error.message,
	      type: 'error',
	      module: moduleName
	    };

	    if (reverse1) {
	      userConfig.reverse1 = reverse1;
	    }

	    report(userConfig);
	  }
	}

	/**
	 * 接口调用情况统计
	 * @params {String} userConfig.url 接口请求地址
	 * @params {Boolean} userConfig.success 接口请求是否成功
	 * @params {Integer} userConfig.timing 请求用时，单位 ms
	 * @params {String} userConfig.message 消息说明
	 */
	function reportApi(userConfig, moduleName) {
	  if (userConfig && userConfig.url) {
	    userConfig.type = 'api';
	    userConfig.module = moduleName;
	    userConfig.sampling = userConfig.sampling || '100'; // 默认 1% 抽样
	    report(userConfig);
	  }
	}

	/**
	 * 全局配置
	 */

	function setConfig(config) {
	  if (config && config.sampling) {
	    defaultConfig.sampling = config.sampling;
	  }
	}

	function isDebug() {
	  var uri = _universalEnv.isNode || typeof location === 'undefined' ? '' : location.href;

	  return uri.indexOf('jt_debug=1') > -1;
	}

	exports.default = {
	  report: report,
	  reportError: reportError,
	  reportApi: reportApi,
	  setConfig: setConfig
	};
	module.exports = exports['default'];

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(42);

	var DEFAULT_ERROR_CODE = 'rx_user_define_err'; /**
	                                                * @fileoverview URI.
	                                                */


	var errorCodeHash = {
	  render: 'rx_render_err',
	  data: 'rx_data_fetch_err',
	  error: 'rax_error'
	  // custom: 'rax_custom'
	};

	exports.default = {
	  format: function format(config) {

	    var uri = _universalEnv.isNode || typeof location === 'undefined' ? '' : location.href || '';

	    var errorCode = errorCodeHash[config.type || 'custom'] || DEFAULT_ERROR_CODE;

	    // remove slash and params
	    var pureURI = uri.replace(/[\?#].*$/, '').replace(/\/$/, '');

	    var url = [pureURI, config.module || '', errorCode].join('/');

	    if (_universalEnv.isWeex) {
	      return encodeURIComponent(url);
	    } else {
	      // H5 下黄金令箭无需编码, 否则会导致请求无法接收
	      return url;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 70 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuTracker");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/KSData");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseImgUrl = __webpack_require__(73);

	var _parseImgUrl2 = _interopRequireDefault(_parseImgUrl);

	var _checkWebp = __webpack_require__(74);

	var _checkWebp2 = _interopRequireDefault(_checkWebp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  checkWebp: _checkWebp2.default,
	  parseImgUrl: _parseImgUrl2.default
	};
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = parseImgUrl;

	var _checkWebp = __webpack_require__(74);

	var _checkWebp2 = _interopRequireDefault(_checkWebp);

	var _util = __webpack_require__(75);

	var _util2 = _interopRequireDefault(_util);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 确定设备宽像素
	var devicePix = 0;

	if (!window.isServer) {
	  // DEVICE_WIDTH是好莱坞搭建页定义的宽度
	  var deviceWidth = window.DEVICE_WIDTH ? window.DEVICE_WIDTH : window.screen.availWidth || window.screen.width || 750;
	  var devicePixelRatio = window.devicePixelRatio || 1;
	  // Weex下屏幕宽度为设备实际像素宽度，H5下屏幕宽度为CSS像素宽度
	  devicePix = _universalEnv.isWeex ? deviceWidth : deviceWidth * devicePixelRatio;
	}

	// 占位图
	var placeholder = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';

	// 获取图片像素值，将rem换算到px
	function getPx(value) {
	  // 根据屏幕宽度缩放
	  var result = value / 750 * devicePix;
	  return Math.round(result);
	}

	// x-oss-process=image/resize,w_750/format,webp/quality,Q_75
	// 图片地址优化处理，文档：https://help.aliyun.com/document_detail/44705.html
	function parseImgUrl(input) {
	  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!input) {
	    return '';
	  }
	  if (window.isServer) {
	    // 服务端不做处理，返回占位图片
	    return placeholder;
	  }
	  var isObj = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  var option = isObj ? obj : {};
	  var maxWidth = option.maxWidth,
	      disableWebp = option.disableWebp,
	      format = option.format,
	      quality = option.quality,
	      width = option.width;
	  // 去掉前缀

	  var imgUrl = input.replace(/^http(s?):/, '');
	  // 设置oss参数
	  var ossValue = 'image';
	  // 图片最大宽度，默认是最大设备宽度，可以通过maxWidth（px值）来设置，和图片实际显示宽度width（rem值）来设置
	  if (maxWidth || devicePix) {
	    var mw = Math.ceil(maxWidth ? maxWidth : devicePix);
	    // oss参数限制宽度最大为4096，超出会无法访问
	    var w = width ? Math.min(4096, mw, getPx(width)) : Math.min(4096, mw);
	    ossValue += '/resize,w_' + w;
	  }
	  // 处理图片格式转换
	  if (format) {
	    // 强制格式化
	    ossValue += '/format,' + format;
	  } else if ((0, _checkWebp2.default)() && !disableWebp) {
	    // 支持webp而且没有禁用webp的情况下转换成webp
	    ossValue += '/format,webp';
	  } else {
	    // 如果不支持webp或者禁用webp，而且是webp图片，强制转换成png
	    imgUrl.indexOf('.webp') !== -1 && (ossValue += '/format,png');
	  }
	  // 渐进式展示，仅对jpg格式有效
	  ossValue += '/interlace,1';
	  // 质量调整为绝对75，对jpg和webp格式的图片有效
	  if (quality) {
	    ossValue += '/quality,Q_' + obj.quality;
	  }
	  return _util2.default.mergeUrlSearch(imgUrl, { 'x-oss-process': ossValue });
	}
	module.exports = exports['default'];

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkWebp;

	var _universalEnv = __webpack_require__(45);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isSupportWebp = false;

	if (window.isServer) {
	  isSupportWebp = false;
	} else if (_universalEnv.isWeex) {
	  // 默认只有优酷weex支持webp
	  if (_browser2.default.isYouku) {
	    isSupportWebp = true;
	  } else {
	    isSupportWebp = false;
	  }
	} else {
	  try {
	    isSupportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
	  } catch (e) {}
	}

	function checkWebp() {
	  return isSupportWebp;
	}
	module.exports = exports['default'];

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _compareVersion = __webpack_require__(76);

	var _compareVersion2 = _interopRequireDefault(_compareVersion);

	var _requestMtop = __webpack_require__(77);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _requestHsf = __webpack_require__(89);

	var _requestHsf2 = _interopRequireDefault(_requestHsf);

	var _loadResource = __webpack_require__(91);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _closePage = __webpack_require__(92);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(96);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _pageStorage = __webpack_require__(88);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _getCookie = __webpack_require__(97);

	var _getCookie2 = _interopRequireDefault(_getCookie);

	var _read = __webpack_require__(98);

	var _read2 = _interopRequireDefault(_read);

	var _getComponentRect = __webpack_require__(99);

	var _getComponentRect2 = _interopRequireDefault(_getComponentRect);

	var _queryMedia = __webpack_require__(101);

	var _queryMedia2 = _interopRequireDefault(_queryMedia);

	var _unit = __webpack_require__(102);

	var _unit2 = _interopRequireDefault(_unit);

	var _theme = __webpack_require__(103);

	var _theme2 = _interopRequireDefault(_theme);

	var _getGeoLocation = __webpack_require__(104);

	var _getGeoLocation2 = _interopRequireDefault(_getGeoLocation);

	var _devtool = __webpack_require__(105);

	var _devtool2 = _interopRequireDefault(_devtool);

	var _isType = __webpack_require__(90);

	var _isType2 = _interopRequireDefault(_isType);

	var _getBuName = __webpack_require__(87);

	var _getBuName2 = _interopRequireDefault(_getBuName);

	var _font = __webpack_require__(106);

	var _font2 = _interopRequireDefault(_font);

	var _finishTask = __webpack_require__(107);

	var _finishTask2 = _interopRequireDefault(_finishTask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _extends({}, _url2.default, _loadResource2.default, {
	  isAppInstalled: _isAppInstalled2.default,
	  pageStorage: _pageStorage2.default,
	  closePage: _closePage2.default,
	  compareVersion: _compareVersion2.default,
	  requestMtop: _requestMtop2.default,
	  requestHsf: _requestHsf2.default,
	  getCookie: _getCookie2.default,
	  read: _read2.default,
	  getComponentRect: _getComponentRect2.default
	}, _queryMedia2.default, _unit2.default, _getGeoLocation2.default, _devtool2.default, _isType2.default, {
	  getBuName: _getBuName2.default
	}, _font2.default, {
	  theme: _theme2.default
	}, _finishTask2.default);
	module.exports = exports['default'];

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = compareVersion;
	// 比较两个version，ab相等返回0；a高于b返回1；a小于b返回-1；
	function compareVersion(versionA, versionB) {
	  if (versionA === versionB) {
	    return 0;
	  }
	  var versionAArr = versionA.split('.').map(function (v) {
	    return Number(v);
	  });
	  var versionBArr = versionB.split('.').map(function (v) {
	    return Number(v);
	  });
	  for (var i = 0; i < Math.max(versionBArr.length, versionAArr.length); i++) {
	    if (versionAArr[i] === undefined) {
	      return -1;
	    }
	    if (versionBArr[i] === undefined) {
	      return 1;
	    }
	    if (versionAArr[i] > versionBArr[i]) {
	      return 1;
	    }
	    if (versionAArr[i] < versionBArr[i]) {
	      return -1;
	    }
	  }
	  return 0;
	}
	module.exports = exports['default'];

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _universalMtop = __webpack_require__(82);

	var _universalMtop2 = _interopRequireDefault(_universalMtop);

	var _getBuName = __webpack_require__(87);

	var _getBuName2 = _interopRequireDefault(_getBuName);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _requestHsf = __webpack_require__(89);

	var _requestHsf2 = _interopRequireDefault(_requestHsf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var urlSearchObj = _url2.default.urlSearchObj;


	var APP_KEYS = {
	  daily: 4272,
	  pre: 24679788,
	  release: 24679788
	};

	var DOMAIN_PREFIX = {
	  daily: 'daily-acs',
	  pre: 'pre-acs',
	  release: 'acs'
	};

	// 接口域名白名单，有些MTOP接口域名需要特殊处理，有的接口支持多域名但是只能固定BU，例如好莱坞页面获取页面数据的MTOP接口
	var API_BU_MAP = {
	  'mtop.youku.hollywood.api.page.get.v2': 'youku'
	};

	// 通用调用mtop接口方法
	function requestMtop() {
	  var _this = this;

	  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var ctx = arguments[1];

	  // 服务端渲染下使用
	  if (window.isServer) {
	    console.log('调用requestHsf方法!');
	    return new Promise(function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
	        var result, res;
	        return _regenerator2.default.wrap(function (_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return (0, _requestHsf2.default)(args, ctx);

	              case 3:
	                result = _context.sent;
	                res = (0, _requestHsf.processResult)(result);

	                resolve(res);
	                _context.next = 11;
	                break;

	              case 8:
	                _context.prev = 8;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 11:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this, [[0, 8]]);
	      }));

	      return function () {
	        return _ref.apply(this, arguments);
	      };
	    }());
	  }
	  var data = {};
	  if (args.data) {
	    // 一般的mtop接口直接传data对象
	    data = args.data;
	  } else if (args.bizType && args.bizParam) {
	    // aplatform接口需要传bizType和bizParam参数，两个参数都是字符串形式
	    data = {
	      bizType: args.bizType,
	      bizParam: _typeof(args.bizParam) === 'object' ? JSON.stringify(args.bizParam) : args.bizParam
	    };
	  } else if (args.req) {
	    // GMP接口需要传req参数，req参数是字符串形式
	    data = {
	      req: _typeof(args.req) === 'object' ? JSON.stringify(args.req) : args.req
	    };
	  }

	  var env = urlSearchObj.env;
	  if (args.env) {
	    env = args.env;
	  }

	  //判断是否需要安全码
	  if (data.asac || args.asac) {
	    data.asac = data.asac || args.asac;
	  }

	  // 判断是否采集ua
	  if (data.ua || args.ua) {
	    data.ua = data.ua || args.ua;
	  }

	  var params = {
	    api: args.api, // 接口api
	    v: args.v || '1.0', // 接口版本
	    ecode: args.ecode || 0, // 0:不需要登录, 1:需要登录
	    appKey: APP_KEYS[env] || APP_KEYS.release, // appKey，h5下必须
	    type: args.type || 'GET', // 请求方式
	    isSec: args.isSec || 0, // 1:客户端请求启动WUA，一般调用需要安全码的接口需传1
	    dataType: args.dataType || 'jsonp', // 返回数据类型
	    timeout: args.timeout || 10000, // 超时时间
	    data: data
	  };

	  // 判断是否强制请求为客户端请求
	  if (args.WindVaneRequest) {
	    params.WindVaneRequest = true;
	  }

	  // 判断是否强制请求为H5请求
	  if (args.H5Request) {
	    params.H5Request = true;
	  }

	  // 判断是否需要添加项目标，用于淘票票调试日常环境
	  if (urlSearchObj.waptest_project_id) {
	    params.tb_eagleeyex_scm_project = urlSearchObj.waptest_project_id;
	  }

	  var buName = API_BU_MAP[args.api] || (0, _getBuName2.default)();

	  setMtopConfig(buName, env);

	  // 调用Rax的mtop接口
	  return new Promise(function (resolve, reject) {
	    _universalMtop2.default.request(params, function (res) {
	      resolve(res);
	    }, function (err) {
	      reject(err);
	    });
	  });
	}

	// 设置Mtop
	function setMtopConfig(buName, env) {
	  if (buName === 'damai') {
	    var getEvn = function () {
	      var ret = 'm';
	      if (env === 'waptest' || location.host.indexOf('waptest') !== -1) {
	        ret = 'waptest';
	      } else if (env === 'wapa' || location.host.indexOf('wapa') !== -1) {
	        ret = 'wapa';
	      }
	      return MTOP_CONF[ret];
	    };

	    // 大麦
	    var MTOP_CONF = {
	      waptest: {
	        sub: 'mtop',
	        main: 'damai.test'
	      },
	      wapa: {
	        sub: 'pre-mtop',
	        main: 'damai.cn'
	      },
	      m: {
	        sub: 'mtop',
	        main: 'damai.cn'
	      }
	    };

	    if (!location.host.includes('taobao')) {
	      var envObj = getEvn();
	      _universalMtop2.default.config('subDomain', envObj.sub); // mtop的子域
	      _universalMtop2.default.config('mainDomain', envObj.main); // mtop的主域
	      _universalMtop2.default.config('prefix', ''); // mtop的前缀
	      // fix 非法请求，保证 mtopDomain 和 pageDomain一致
	      if (location.host.indexOf('damai.cn') >= 0) {
	        _universalMtop2.default.config('pageDomain', envObj.main);
	      }
	    }
	  } else if (buName === 'taopiaopiao' || buName === 'bendishenghuo') {
	    // 淘票票
	    var host = window.location.host;
	    var isTpp = host.search(/\btaopiaopiao\.com\b/i) > -1;
	    var isWaptest = env === 'waptest' || host.search(/\.waptest\./i) > -1;
	    var isWapa = env === 'wapa' || host.search(/\.wapa\.|\bpre-tpp-act\b/i) > -1;
	    _universalMtop2.default.config('mainDomain', isTpp ? 'taopiaopiao.com' : 'taobao.com'); // mtop的主域
	    _universalMtop2.default.config('subDomain', isWaptest ? 'waptest' : isWapa ? 'wapa' : 'm'); // mtop的子域
	    _universalMtop2.default.config('prefix', DOMAIN_PREFIX[env] || DOMAIN_PREFIX.release); // mtop的前缀
	  } else {
	    // 优酷和其他情况
	    _universalMtop2.default.config('subDomain', ''); // mtop的子域
	    _universalMtop2.default.config('mainDomain', 'youku.com'); // mtop的主域
	    _universalMtop2.default.config('prefix', DOMAIN_PREFIX[env] || DOMAIN_PREFIX.release); // mtop的前缀
	  }
	}

	exports.default = requestMtop;
	module.exports = exports['default'];

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(79);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = function () {
	  return this;
	}() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	module.exports = __webpack_require__(80);

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch (e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!function (global) {
	  "use strict";

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";

	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function (method) {
	      prototype[method] = function (arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function (arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function (value) {
	            invoke("next", value, resolve, reject);
	          }, function (err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function (unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function (resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	      // If enqueue has been called before, then we want to wait until
	      // all previous Promises have been resolved before calling invoke,
	      // so that results are always delivered in the correct order. If
	      // enqueue has not been called before, then it is important to
	      // call invoke immediately, without waiting on a callback to fire,
	      // so that the async generator function has the opportunity to do
	      // any necessary setup in a predictable way. This predictability
	      // is why the Promise constructor synchronously invokes its
	      // executor callback, and why async functions synchronously
	      // execute code before the first await. Since we implement simple
	      // async functions in terms of async generators, it is especially
	      // important to get this right, even though it requires care.
	      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
	      // Avoid propagating failures to Promises returned by later
	      // invocations of the iterator.
	      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

	    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
	    : iter.next().then(function (result) {
	      return result.done ? result.value : iter.next();
	    });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function (method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : "suspendedYield";

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError("The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (!info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function (object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1,
	            next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function reset(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	}(
	// In sloppy mode, unbound `this` refers to the global object, fallback to
	// Function constructor if we're in global strict mode. That is sadly a form
	// of indirect eval which violates Content Security Policy.
	function () {
	  return this;
	}() || Function("return this")());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(81)(module)))

/***/ },
/* 81 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(83);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /** @jsx createElement */
	/* global lib: true */


	var _universalEnv = __webpack_require__(45);

	var _universalTracker = __webpack_require__(67);

	var _universalTracker2 = _interopRequireDefault(_universalTracker);

	var _help = __webpack_require__(84);

	var _alimp = __webpack_require__(85);

	var _alimp2 = _interopRequireDefault(_alimp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Mtop = void 0;
	var Windvane = void 0;

	if (_universalEnv.isWeex) {
	  try {
	    Mtop = __weex_require__('@weex-module/mtop'); // eslint-disable-line
	  } catch (e) {
	    console.warn('Mtop require error');
	  }
	  try {
	    Windvane = __weex_require__('@weex-module/windvane'); // eslint-disable-line
	  } catch (e) {
	    console.warn('Windvane require error');
	  }
	} else if (_universalEnv.isWeb) {
	  if (typeof lib == 'undefined' || !lib.mtop) {
	    __webpack_require__(86);
	  }
	}

	function requestByWindvane(params, successCallback, failureCallback) {
	  if (Windvane && Windvane.call) {
	    params.param = params.data || params.param;

	    if (params.type === 'POST') {
	      params.post = '1';
	    }

	    Windvane.call({
	      class: 'MtopWVPlugin',
	      method: 'send',
	      data: params
	    }, function (retJson) {
	      if (typeof retJson === 'string') {
	        retJson = JSON.parse(retJson);
	      }
	      if (retJson.retType === _help.RESPONSE_TYPE.SUCCESS || retJson.ret && retJson.ret[0].indexOf('SUCCESS') > -1) {
	        successCallback && successCallback(retJson);
	      } else {
	        failureCallback && failureCallback(retJson);
	      }
	    });
	  }
	}

	function processRetType(result) {
	  var ret = result.ret || '';
	  var retType = void 0;
	  if (Array.isArray(ret)) {
	    ret = ret.join(',');
	  }
	  if (ret.indexOf('SUCCESS') > -1) {
	    retType = _help.RESPONSE_TYPE.SUCCESS;
	  } else if (ret.indexOf('TOKEN_EMPTY') > -1 || ret.indexOf('TOKEN_EXOIRED') > -1) {
	    retType = _help.RESPONSE_TYPE.TOKEN_EXPIRED;
	  } else if (ret.indexOf('SESSION_EXPIRED') > -1 || ret.indexOf('SID_INVALID') > -1 || ret.indexOf('AUTH_REJECT') > -1 || ret.indexOf('NEED_LOGIN') > -1) {
	    retType = _help.RESPONSE_TYPE.SESSION_EXPIRED;
	  } else {
	    retType = _help.RESPONSE_TYPE.ERROR;
	  }
	  return retType;
	}

	function requestByMtop(params, successCallback, failureCallback) {
	  if (Mtop.request) {
	    if (_universalEnv.isWeex && params.dataType && /^(original){0,1}jsonp$/.test(params.dataType)) {
	      params.dataType = params.dataType.replace('jsonp', 'json');
	    }

	    // 兼容接口超时不返回问题
	    var timer = setTimeout(function () {
	      failureCallback({
	        ret: ['TIMEOUT::接口超时'],
	        retType: _help.RESPONSE_TYPE.ERROR
	      });
	    }, params.timeout || 20000);

	    Mtop.request(params, function (result) {
	      clearTimeout(timer);
	      result.retType = processRetType(result);

	      // 兼容 iOS 端超时不走 error 问题，
	      if (result && result.MP_TIME_OUT) {
	        failureCallback({
	          ret: ['TIMEOUT::接口超时'],
	          retType: -1
	        });
	        return;
	      }

	      successCallback(result);
	    }, function (error) {
	      clearTimeout(timer);
	      error.retType = processRetType(error);
	      failureCallback(error);
	    });
	  }
	}

	function reportError(mtopParams, error, errorCode) {
	  if (mtopParams.disableTracker) {
	    return;
	  }
	  var pageUrl = void 0;
	  if (_universalEnv.isMiniApp) {
	    pageUrl = mtopParams.miniAppID ? 'UN_MINIAPP/' + mtopParams.miniAppID : 'UN_MINIAPP';
	  } else {
	    pageUrl = location.hostname + location.pathname;
	  }
	  _universalTracker2.default.report({
	    url: '//tarzan/error/' + pageUrl + '/' + mtopParams.api + '/' + mtopParams.v,
	    message: JSON.stringify(error),
	    reverse1: errorCode,
	    type: 'mtop'
	  });
	}

	/**
	 * @description 参数解析
	 * @param params {Object} 接口配置入参
	 * @param requires {Array} 用户配置的接口必须入参，可选参数，如不设置，则全部必选
	 * @returns {string} 解析结果
	 */
	function parseMtopParams(params, requires, encodeParam) {
	  var result;
	  if (params) {
	    result = [];
	    for (var key in params) {
	      if (params.hasOwnProperty(key)) {
	        if (!requires || requires.indexOf(key) > -1) {
	          if (params[key] !== undefined && params[key] !== '') {
	            result.push(key + '-' + (encodeParam ? encodeURIComponent(params[key]) : params[key]));
	          }
	        }
	      }
	    }
	    result.sort();
	  } else {
	    result = [];
	  }
	  return result.join('_');
	}

	/**
	 * @description mtop接口解析
	 * @param apiConfig {Object} 接口配置信息
	 * @param apiConfig.api {String} mtop接口名称（必须）
	 * @param apiConfig.version {String} mtop接口版本（非必须，默认1.0）
	 * @param apiConfig.data {Object} 接口入参（非必须）
	 * @param apiConfig.appId {Number} 接口所属应用ID（非必须）
	 * @param apiConfig.dirName {String} 接口目录（非必须，默认default）
	 * @param apiConfig.type {String} 接口类型
	 * @param apiConfig.requiredParams {Array} 接口必须入参 （可选，默认为空）
	 * @param apiConfig.encodeParam {Boolean} 是否对参数进行encode，默认false
	 * @returns {null | Object} 接口解析结果，如果接口配置无法解析，返回null
	 */
	function getCDNInfoFromMtopConfig(apiConfig) {
	  // const DEFAULT_APP_DIRNAME = 'default';
	  var api = apiConfig.api;
	  var paramsStr;
	  if (api) {
	    // params
	    paramsStr = parseMtopParams(apiConfig.data, apiConfig.requiredParams, apiConfig.encodeParam);
	  }
	  return '//fallback.alicdn.com/mtop/' + apiConfig.api + '_' + (apiConfig.v || '1.0') + '/' + paramsStr;
	}

	function requestFallback(config, error) {
	  return new Promise(function (resolve, reject) {
	    if (typeof config.data == 'string') config.data = JSON.parse(config.data);
	    var backup = getCDNInfoFromMtopConfig(config);

	    var xhr = new XMLHttpRequest();
	    xhr.open('get', backup, true);
	    xhr.send(null);
	    xhr.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        try {
	          var data = JSON.parse(this.responseText);

	          // 容灾请求成功，但是接口未备份
	          if (data && data.success && data.result && !data.result.backup) {
	            reportError(config, error, '0210');
	            reject(error);
	          } else {
	            resolve(data);
	          }
	        } catch (e) {
	          reportError(config, error, '0210');
	          reject(error);
	        }
	      } else if (this.readyState == 4) {
	        reportError(config, error, '0011');
	        reject(error);
	      }
	    };
	  });
	}

	exports.default = {
	  request: function request(params, successCallback, failureCallback) {
	    // 默认关闭容灾
	    if (params) {
	      if (typeof params.preventFallback === 'undefined') {
	        params.preventFallback = true;
	      }
	    }
	    function requestWithPromise() {
	      return new Promise(function (resolve, reject) {
	        if (_universalEnv.isWeex) {
	          if (Mtop) {
	            requestByMtop(params, resolve, reject);
	          } else if (Windvane && Windvane.call) {
	            requestByWindvane(params, resolve, reject);
	          } else {
	            reject('Windvane & Mtop require error');
	          }
	        } else if (_universalEnv.isWeb) {
	          lib.mtop.request(params, function (res) {
	            if (res && res.ret && res.ret.length && res.ret[0] === 'WV_ERR::PARAM_PARSE_ERROR') {
	              // 修复U4上安卓4.4下 WV_ERR::PARAM_PARSE_ERROR 错误问题
	              lib.mtop.H5Request(params, resolve, reject); // eslint-disable-line
	            } else {
	              resolve(res);
	            }
	          }, reject);
	        } else if (_universalEnv.isMiniApp) {
	          (0, _alimp2.default)(params).then(resolve).catch(reject);
	        }
	      });
	    }
	    return new Promise(function (resolve, reject) {
	      var _failureCallback = function (error) {
	        var ERROR_RET_TYPE = -1;
	        failureCallback = failureCallback || successCallback;
	        // 组装统一错误格式
	        if (!error || !error.api && !error.v) {
	          error = {
	            api: params.api,
	            v: params.v,
	            data: {},
	            ret: ['FAIL::' + (JSON.stringify(error) || '')],
	            retType: ERROR_RET_TYPE
	          };
	        }
	        if (error.retType === undefined) {
	          error.retType = ERROR_RET_TYPE;
	        }
	        // 上报错误
	        reportError(params, error, '0012');
	        if (params && (params.ecode == 1 || params.preventFallback || _universalEnv.isMiniApp)) {
	          failureCallback && failureCallback(error);
	          return reject(error);
	        }
	        // TODO 小程序尚不支持容灾
	        // 尝试容灾
	        requestFallback(params, error).then(function (res) {
	          successCallback(res);
	          resolve(res);
	        }).catch(function (e) {
	          failureCallback = failureCallback || successCallback;
	          failureCallback && failureCallback(e);
	          reject(e);
	        });
	      };

	      requestWithPromise().then(function _successCallback(data) {
	        successCallback && successCallback(data);
	        resolve(data);
	      }).catch(_failureCallback);
	    });
	  },
	  config: function config(confKey, confValue) {
	    if (_universalEnv.isWeex) {
	      // Noop
	    } else if (typeof lib !== 'undefined' && lib.mtop) {
	      if (typeof confKey === 'string') {
	        lib.mtop.config[confKey] = confValue;
	      } else {
	        lib.mtop.config = _extends({}, lib.mtop.config, confKey);
	      }
	    }
	  },


	  RESPONSE_TYPE: _help.RESPONSE_TYPE
	};
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isObject = isObject;
	exports.getCommonError = getCommonError;
	function isObject(obj) {
	  return {}.toString.call(obj) == '[object Object]';
	}

	var RESPONSE_TYPE = exports.RESPONSE_TYPE = {
	  /**
	   * @description 请求出错
	   * @type {Number}
	   */
	  'ERROR': -1,
	  /**
	   * @description 请求成功
	   * @type {Number}
	   */
	  'SUCCESS': 0,
	  /**
	   * @description 请求token过期
	   * @type {Number}
	   */
	  'TOKEN_EXPIRED': 1,
	  /**
	   * @description 请求session过期
	   * @type {Number}
	   */
	  'SESSION_EXPIRED': 2
	};

	function getCommonError(params, errorMessage) {
	  return {
	    api: params.api,
	    v: params.v,
	    data: {},
	    ret: ['FAIL::' + (errorMessage || '')],
	    retType: -1
	  };
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (params) {
	  if (!systemInfo) {
	    systemInfo = my.getSystemInfoSync(); // eslint-disable-line
	  }
	  return new Promise(function (resolve, reject) {
	    var reqParams = Object.assign({}, params, {
	      apiName: params.api, // my.call('mtop')
	      apiVersion: params.v, // my.call('mtop')
	      needEcodeSign: String(params.ecode) === '1', // ecode 参数  my.call('mtop')
	      usePost: params.type === 'POST' // my.call('mtop')
	    });

	    // data 必须是 object，否则会 Crash
	    if (!(0, _help.isObject)(params.data)) {
	      reqParams.data = JSON.parse(params.data);
	    }

	    function handler(result) {
	      if (result.error) {
	        return reject(result.error);
	      }
	      resolve(result);
	    }

	    // 给调用方空出设置客户端请求参数的空间
	    if (Object.assign && params.dangerouslySetAlipayParams) {
	      Object.assign(reqParams, params.dangerouslySetAlipayParams);
	    }
	    // 使用 bridge 调用 MTOP
	    if (systemInfo.app === 'alipay') {
	      // 设定返回类型，默认返回字符串类型的数字和布尔。
	      if (!!params.originaljsonp || !!params.json) {
	        reqParams.type = 'originaljson';
	      }

	      // 新增参数，可根据需要返回不同类型的参数 （布尔和数字是否转换成字符串）
	      if (typeof params.valueType !== 'undefined') {
	        if (params.valueType === 'original') {
	          // 返回 布尔和数字类型
	          reqParams.type = 'originaljson';
	        } else if (params.valueType === 'string') {
	          // 返回转换成字符串的布尔和数字
	          delete reqParams.type;
	        }
	      }

	      // WJAS 下线切流，降低业务切换请求方式成本，可以允许只修改请求方式，不修改返回构造
	      if (params.useJsonpResultType === true) {
	        delete reqParams.type;
	      }
	      my.call('mtop', reqParams, handler); // eslint-disable-line
	    } else {
	      reqParams.success = function (result) {
	        resolve(result);
	      };
	      reqParams.fail = function (error) {
	        reject(error);
	      };
	      my.sendMtop(reqParams); // eslint-disable-line
	    }
	  });
	};

	var _help = __webpack_require__(84);

	var systemInfo = void 0;

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (a, b) {
	  function c() {
	    var a = {},
	        b = new q(function (b, c) {
	      a.resolve = b, a.reject = c;
	    });return a.promise = b, a;
	  }function d(a, b) {
	    for (var c in b) {
	      void 0 === a[c] && (a[c] = b[c]);
	    }return a;
	  }function e(a) {
	    var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;b.appendChild(a);
	  }function f(a) {
	    var b = [];for (var c in a) {
	      a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
	    }return b.join("&");
	  }function g(a) {
	    try {
	      return ".com" !== a.substring(a.lastIndexOf(".")) ? (a.split(".") || []).length <= 3 ? a : a.split(".").slice(1).join(".") : a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1);
	    } catch (b) {
	      return a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1);
	    }
	  }function h(a) {
	    function b(a, b) {
	      return a << b | a >>> 32 - b;
	    }function c(a, b) {
	      var c, d, e, f, g;return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f;
	    }function d(a, b, c) {
	      return a & b | ~a & c;
	    }function e(a, b, c) {
	      return a & c | b & ~c;
	    }function f(a, b, c) {
	      return a ^ b ^ c;
	    }function g(a, b, c) {
	      return b ^ (a | ~c);
	    }function h(a, e, f, g, h, i, j) {
	      return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e);
	    }function i(a, d, f, g, h, i, j) {
	      return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d);
	    }function j(a, d, e, g, h, i, j) {
	      return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d);
	    }function k(a, d, e, f, h, i, j) {
	      return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d);
	    }function l(a) {
	      for (var b, c = a.length, d = c + 8, f = 16 * ((d - d % 64) / 64 + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) {
	        b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;
	      }return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g;
	    }function m(a) {
	      var b,
	          c,
	          d = "",
	          e = "";for (c = 0; 3 >= c; c++) {
	        b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);
	      }return d;
	    }function n(a) {
	      a = a.replace(/\r\n/g, "\n");for (var b = "", c = 0; c < a.length; c++) {
	        var d = a.charCodeAt(c);128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
	      }return b;
	    }var o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u,
	        v,
	        w,
	        x = [],
	        y = 7,
	        z = 12,
	        A = 17,
	        B = 22,
	        C = 5,
	        D = 9,
	        E = 14,
	        F = 20,
	        G = 4,
	        H = 11,
	        I = 16,
	        J = 23,
	        K = 6,
	        L = 10,
	        M = 15,
	        N = 21;for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) {
	      p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
	    }var O = m(t) + m(u) + m(v) + m(w);return O.toLowerCase();
	  }function i(a) {
	    return "[object Object]" == {}.toString.call(a);
	  }function j(a, b, c) {
	    var d = c || {};document.cookie = a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "") + (d.sameSite ? ";Samesite=" + d.sameSite : "");
	  }function k(a) {
	    var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);return b ? b[1] : void 0;
	  }function l(a, b, c) {
	    var d = new Date();d.setTime(d.getTime() - 864e5);var e = "/";document.cookie = a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(), document.cookie = a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString();
	  }function m(a, b) {
	    for (var c = a.split("."), d = b.split("."), f = 0; 3 > f; f++) {
	      var g = Number(c[f]),
	          h = Number(d[f]);if (g > h) return 1;if (h > g) return -1;if (!isNaN(g) && isNaN(h)) return 1;if (isNaN(g) && !isNaN(h)) return -1;
	    }return 0;
	  }function p(a) {
	    this.id = "" + new Date().getTime() + ++y, this.params = d(a || {}, { v: "*", data: {}, type: "get", dataType: "jsonp" }), this.params.type = this.params.type.toLowerCase(), "object" == _typeof(this.params.data) && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = t.slice(0);
	  }var q = a.Promise,
	      r = (q || { resolve: function resolve() {
	      return void 0;
	    } }).resolve();String.prototype.trim || (String.prototype.trim = function () {
	    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	  });var s = { useJsonpResultType: !1, safariGoLogin: !0, useAlipayJSBridge: !1 },
	      t = [],
	      u = { ERROR: -1, SUCCESS: 0, TOKEN_EXPIRED: 1, SESSION_EXPIRED: 2 };(function () {
	    var b = a.location.hostname;if (!b) {
	      var c = a.parent.location.hostname;c && ~c.indexOf("zebra.alibaba-inc.com") && (b = c);
	    }var e = new RegExp("([^.]*?)\\.?((?:" + ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "alibaba-inc.com"].join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
	        f = b.match(e) || [],
	        g = f[2] || "taobao.com",
	        h = f[1] || "m";"taobao.net" !== g || "x" !== h && "waptest" !== h && "daily" !== h ? "taobao.net" === g && "demo" === h ? h = "demo" : "alibaba-inc.com" === g && "zebra" === h ? h = "zebra" : "waptest" !== h && "wapa" !== h && "m" !== h && (h = "m") : h = "waptest";var i = "h5api";"taobao.net" === g && "waptest" === h && (i = "acs"), s.mainDomain = g, s.subDomain = h, s.prefix = i;
	  })(), function () {
	    var b = a.navigator.userAgent,
	        c = b.match(/WindVane[\/\s]([\d\.\_]+)/);c && (s.WindVaneVersion = c[1]);var d = b.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);d && (s.AliAppName = d[1], s.AliAppVersion = d[2]);var e = b.match(/AMapClient\/([\d\.\_]+)/i);e && (s.AliAppName = "AMAP", s.AliAppVersion = e[1]);
	  }();var v = /[Android|Adr]/.test(a.navigator.userAgent),
	      w = "AP" === s.AliAppName,
	      x = w && m(s.AliAppVersion, "10.1.2") >= 0 || "KB" === s.AliAppName && m(s.AliAppVersion, "7.1.62") >= 0 || v && "AMAP" === s.AliAppName && m(s.AliAppVersion, "1.0.1") >= 0,
	      y = 0;p.prototype.use = function (a) {
	    if (!a) throw new Error("middleware is undefined");return this.middlewares.push(a), this;
	  }, p.prototype.__processRequestMethod = function (a) {
	    var b = this.params,
	        c = this.options;"get" === b.type && "jsonp" === b.dataType ? c.getJSONP = !0 : "get" === b.type && "originaljsonp" === b.dataType ? c.getOriginalJSONP = !0 : "get" === b.type && "json" === b.dataType ? c.getJSON = !0 : "post" === b.type && (c.postJSON = !0), a();
	  }, p.prototype.__processRequestType = function (c) {
	    var d = this,
	        e = this.params,
	        f = this.options;if (s.H5Request === !0 && (f.H5Request = !0), s.WindVaneRequest === !0 && (f.WindVaneRequest = !0), f.H5Request === !1 && f.WindVaneRequest === !0) {
	      if (!x && (!b.windvane || parseFloat(f.WindVaneVersion) < 5.4)) throw new Error("WINDVANE_NOT_FOUND::缺少WindVane环境");if (x && !a.AlipayJSBridge) throw new Error("ALIPAY_NOT_READY::支付宝通道未准备好，支付宝请见 https://lark.alipay.com/mtbsdkdocs/mtopjssdkdocs/pucq6z");
	    } else if (f.H5Request === !0) f.WindVaneRequest = !1;else if ("undefined" == typeof f.WindVaneRequest && "undefined" == typeof f.H5Request) {
	      if (b.windvane && parseFloat(f.WindVaneVersion) >= 5.4 ? f.WindVaneRequest = !0 : f.H5Request = !0, x) {
	        if (f.WindVaneRequest = f.H5Request = void 0, a.AlipayJSBridge) {
	          if (i(e.data)) f.WindVaneRequest = !0;else try {
	            i(JSON.parse(e.data)) ? f.WindVaneRequest = !0 : f.H5Request = !0;
	          } catch (g) {
	            f.H5Request = !0;
	          }
	        } else f.H5Request = !0;"AMAP" !== s.AliAppName || e.useNebulaJSbridgeWithAMAP || (f.WindVaneRequest = f.H5Request = void 0, f.H5Request = !0);
	      }window.self !== window.top && (f.H5Request = !0);
	    }var h = a.navigator.userAgent.toLowerCase();return h.indexOf("youku") > -1 && f.mainDomain.indexOf("youku.com") < 0 && (f.WindVaneRequest = !1, f.H5Request = !0), f.mainDomain.indexOf("youku.com") > -1 && h.indexOf("youku") < 0 && (f.WindVaneRequest = !1, f.H5Request = !0), c ? c().then(function () {
	      var a = f.retJson.ret;if (a instanceof Array && (a = a.join(",")), f.WindVaneRequest === !0 && x && f.retJson.error || !a || a.indexOf("PARAM_PARSE_ERROR") > -1 || a.indexOf("HY_FAILED") > -1 || a.indexOf("HY_NO_HANDLER") > -1 || a.indexOf("HY_CLOSED") > -1 || a.indexOf("HY_EXCEPTION") > -1 || a.indexOf("HY_NO_PERMISSION") > -1) {
	        if (!x || !isNaN(f.retJson.error) || -1 !== f.retJson.error.indexOf("FAIL_SYS_ACCESS_DENIED")) return x && i(e.data) && (e.data = JSON.stringify(e.data)), s.H5Request = !0, d.__sequence([d.__processRequestType, d.__processToken, d.__processRequestUrl, d.middlewares, d.__processRequest]);"undefined" == typeof f.retJson.api && "undefined" == typeof f.retJson.v && (f.retJson.api = e.api, f.retJson.v = e.v, f.retJson.ret = [f.retJson.error + "::" + f.retJson.errorMessage], f.retJson.data = {});
	      }
	    }) : void 0;
	  };var A = "_m_h5_c",
	      B = "_m_h5_tk";p.prototype.__getTokenFromAlipay = function () {
	    var b = c(),
	        d = this.options,
	        e = (a.navigator.userAgent, !!location.protocol.match(/^https?\:$/));return d.useAlipayJSBridge === !0 && !e && x && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function (a) {
	      a && a.token && (d.token = a.token), b.resolve();
	    }, function () {
	      b.resolve();
	    }) : b.resolve(), b.promise;
	  }, p.prototype.__getTokenFromCookie = function () {
	    var a = this.options;return a.CDR && k(A) ? a.token = k(A).split(";")[0] : a.token = a.token || k(B), a.token && (a.token = a.token.split("_")[0]), q.resolve();
	  }, p.prototype.__waitWKWebViewCookie = function (b) {
	    var c = this.options;c.waitWKWebViewCookieFn && c.H5Request && a.webkit && a.webkit.messageHandlers ? c.waitWKWebViewCookieFn(b) : b();
	  }, p.prototype.__processToken = function (a) {
	    var b = this,
	        c = this.options;this.params;return c.token && delete c.token, c.WindVaneRequest !== !0 ? r.then(function () {
	      return b.__getTokenFromAlipay();
	    }).then(function () {
	      return b.__getTokenFromCookie();
	    }).then(a).then(function () {
	      var a = c.retJson,
	          d = a.ret;if (d instanceof Array && (d = d.join(",")), d.indexOf("TOKEN_EMPTY") > -1 || (c.CDR === !0 || c.syncCookieMode === !0) && d.indexOf("ILLEGAL_ACCESS") > -1 || d.indexOf("TOKEN_EXOIRED") > -1) {
	        if (c.maxRetryTimes = c.maxRetryTimes || 5, c.failTimes = c.failTimes || 0, c.H5Request && ++c.failTimes < c.maxRetryTimes) {
	          var e = [b.__waitWKWebViewCookie, b.__processToken, b.__processRequestUrl, b.middlewares, b.__processRequest];if (c.syncCookieMode === !0 && b.constructor.__cookieProcessorId !== b.id) if (b.constructor.__cookieProcessor) {
	            var f = function (a) {
	              var c = function () {
	                b.constructor.__cookieProcessor = null, b.constructor.__cookieProcessorId = null, a();
	              };b.constructor.__cookieProcessor ? b.constructor.__cookieProcessor.then(c)["catch"](c) : a();
	            };e = [f, b.__waitWKWebViewCookie, b.__processToken, b.__processRequestUrl, b.middlewares, b.__processRequest];
	          } else b.constructor.__cookieProcessor = b.__requestProcessor, b.constructor.__cookieProcessorId = b.id;return b.__sequence(e);
	        }c.maxRetryTimes > 0 && (l(A, c.pageDomain, "*"), l(B, c.mainDomain, c.subDomain), l("_m_h5_tk_enc", c.mainDomain, c.subDomain)), a.retType = u.TOKEN_EXPIRED;
	      }
	    }) : void a();
	  }, p.prototype.__processRequestUrl = function (b) {
	    var c = this.params,
	        d = this.options;if (d.hostSetting && d.hostSetting[a.location.hostname]) {
	      var e = d.hostSetting[a.location.hostname];e.prefix && (d.prefix = e.prefix), e.subDomain && (d.subDomain = e.subDomain), e.mainDomain && (d.mainDomain = e.mainDomain);
	    }if (d.H5Request === !0) {
	      var f = "//" + (d.prefix ? d.prefix + "." : "") + (d.subDomain ? d.subDomain + "." : "") + d.mainDomain + "/h5/" + c.api.toLowerCase() + "/" + c.v.toLowerCase() + "/",
	          g = c.appKey || ("waptest" === d.subDomain ? "4272" : "12574478"),
	          i = new Date().getTime(),
	          j = h(d.token + "&" + i + "&" + g + "&" + c.data),
	          k = { jsv: "2.6.1", appKey: g, t: i, sign: j },
	          l = { data: c.data, ua: c.ua };Object.keys(c).forEach(function (a) {
	        "undefined" == typeof k[a] && "undefined" == typeof l[a] && "headers" !== a && "ext_headers" !== a && "ext_querys" !== a && (k[a] = c[a]);
	      }), c.ext_querys && Object.keys(c.ext_querys).forEach(function (a) {
	        k[a] = c.ext_querys[a];
	      }), d.getJSONP ? k.type = "jsonp" : d.getOriginalJSONP ? k.type = "originaljsonp" : (d.getJSON || d.postJSON) && (k.type = "originaljson"), "undefined" != typeof c.valueType && ("original" === c.valueType ? d.getJSONP || d.getOriginalJSONP ? k.type = "originaljsonp" : (d.getJSON || d.postJSON) && (k.type = "originaljson") : "string" === c.valueType && (d.getJSONP || d.getOriginalJSONP ? k.type = "jsonp" : (d.getJSON || d.postJSON) && (k.type = "json"))), d.useJsonpResultType === !0 && "originaljson" === k.type && delete k.type, d.dangerouslySetProtocol && (f = d.dangerouslySetProtocol + ":" + f), d.querystring = k, d.postdata = l, d.path = f;
	    }b();
	  }, p.prototype.__processUnitPrefix = function (a) {
	    a();
	  };var D = 0;p.prototype.__requestJSONP = function (a) {
	    function b(a) {
	      if (k && clearTimeout(k), l.parentNode && l.parentNode.removeChild(l), "TIMEOUT" === a) window[j] = function () {
	        window[j] = void 0;try {
	          delete window[j];
	        } catch (a) {}
	      };else {
	        window[j] = void 0;try {
	          delete window[j];
	        } catch (b) {}
	      }
	    }var d = c(),
	        g = this.params,
	        h = this.options,
	        i = g.timeout || 2e4,
	        j = "mtopjsonp" + (g.jsonpIncPrefix || "") + ++D,
	        k = setTimeout(function () {
	      a(h.timeoutErrMsg || "TIMEOUT::接口超时"), b("TIMEOUT");
	    }, i);h.querystring.callback = j;var l = document.createElement("script");return l.src = h.path + "?" + f(h.querystring) + "&" + f(h.postdata), l.async = !0, l.onerror = function () {
	      b("ABORT"), a(h.abortErrMsg || "ABORT::接口异常退出");
	    }, window[j] = function () {
	      h.results = Array.prototype.slice.call(arguments), b(), d.resolve();
	    }, e(l), d.promise;
	  }, p.prototype.__requestJSON = function (b) {
	    function d(a) {
	      l && clearTimeout(l), "TIMEOUT" === a && i.abort();
	    }var e = c(),
	        g = this.params,
	        h = this.options,
	        i = new a.XMLHttpRequest(),
	        j = g.timeout || 2e4,
	        l = setTimeout(function () {
	      b(h.timeoutErrMsg || "TIMEOUT::接口超时"), d("TIMEOUT");
	    }, j);h.CDR && k(A) && (h.querystring.c = decodeURIComponent(k(A))), i.onreadystatechange = function () {
	      if (4 == i.readyState) {
	        var a,
	            c,
	            f = i.status;if (f >= 200 && 300 > f || 304 == f) {
	          d(), a = i.responseText, c = i.getAllResponseHeaders() || "";try {
	            a = /^\s*$/.test(a) ? {} : JSON.parse(a), a.responseHeaders = c, h.results = [a], e.resolve();
	          } catch (g) {
	            b("PARSE_JSON_ERROR::解析JSON失败");
	          }
	        } else d("ABORT"), b(h.abortErrMsg || "ABORT::接口异常退出");
	      }
	    };var m,
	        n,
	        o = h.path + "?" + f(h.querystring);h.getJSON ? (m = "GET", o += "&" + f(h.postdata)) : h.postJSON && (m = "POST", n = f(h.postdata)), i.open(m, o, !0), i.withCredentials = !0, i.setRequestHeader("Accept", "application/json"), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded");var p = g.ext_headers || g.headers;if (p) for (var q in p) {
	      i.setRequestHeader(q, p[q]);
	    }return i.send(n), e.promise;
	  }, p.prototype.__requestWindVane = function () {
	    function d(a) {
	      g.results = [a], e.resolve();
	    }var e = c(),
	        f = this.params,
	        g = this.options,
	        h = f.data,
	        i = f.api,
	        j = f.v,
	        k = g.postJSON ? 1 : 0,
	        l = g.getJSON || g.postJSON || g.getOriginalJSONP ? "originaljson" : "";"undefined" != typeof f.valueType && ("original" === f.valueType ? l = "originaljson" : "string" === f.valueType && (l = "")), g.useJsonpResultType === !0 && (l = "");var m,
	        n,
	        o = "https" === location.protocol ? 1 : 0,
	        p = f.isSec || 0,
	        q = f.sessionOption || "AutoLoginOnly",
	        r = f.ecode || 0,
	        s = f.ext_headers || {},
	        t = f.ext_querys || {};n = "undefined" != typeof f.timer ? parseInt(f.timer) : "undefined" != typeof f.timeout ? parseInt(f.timeout) : 2e4, m = 2 * n, f.needLogin === !0 && "undefined" == typeof f.sessionOption && (q = "AutoLoginAndManualLogin"), "undefined" != typeof f.secType && "undefined" == typeof f.isSec && (p = f.secType);var u = { api: i, v: j, post: String(k), type: l, isHttps: String(o), ecode: String(r), isSec: String(p), param: JSON.parse(h), timer: n, sessionOption: q, ext_headers: s, ext_querys: t };f.ttid && g.dangerouslySetWVTtid === !0 && (u.ttid = f.ttid), Object.assign && f.dangerouslySetWindvaneParams && Object.assign(u, f.dangerouslySetWindvaneParams);var v = "MtopWVPlugin";return "string" == typeof f.customWindVaneClassName && (v = f.customWindVaneClassName), b.windvane.call(v, "send", u, d, d, m), e.promise;
	  }, p.prototype.__requestAlipay = function () {
	    var e = c(),
	        f = this.params,
	        g = this.options,
	        h = { apiName: f.api, apiVersion: f.v, needEcodeSign: "1" === String(f.ecode), headers: f.ext_headers || {}, usePost: !!g.postJSON };i(f.data) || (f.data = JSON.parse(f.data)), h.data = f.data, f.ttid && g.dangerouslySetWVTtid === !0 && (h.ttid = f.ttid), (g.getJSON || g.postJSON || g.getOriginalJSONP) && (h.type = "originaljson"), "undefined" != typeof f.valueType && ("original" === f.valueType ? h.type = "originaljson" : "string" === f.valueType && delete h.type), g.useJsonpResultType === !0 && delete h.type, Object.assign && f.dangerouslySetAlipayParams && Object.assign(h, f.dangerouslySetAlipayParams);var j = "mtop";return "string" == typeof f.customAlipayJSBridgeApi && (j = f.customAlipayJSBridgeApi), a.AlipayJSBridge.call(j, h, function (a) {
	      g.results = [a], e.resolve();
	    }), e.promise;
	  }, p.prototype.__processRequest = function (a, b) {
	    var c = this;return r.then(function () {
	      var a = c.options;if (a.H5Request && (a.getJSONP || a.getOriginalJSONP)) return c.__requestJSONP(b);if (a.H5Request && (a.getJSON || a.postJSON)) return c.__requestJSON(b);if (a.WindVaneRequest) return x ? c.__requestAlipay(b) : c.__requestWindVane(b);throw new Error("UNEXCEPT_REQUEST::错误的请求类型");
	    }).then(a).then(function () {
	      var a = c.options,
	          b = (c.params, a.results[0]),
	          d = b && b.ret || [];b.ret = d, d instanceof Array && (d = d.join(","));var e = b.c;a.CDR && e && j(A, e, { domain: a.pageDomain, path: "/", secure: a.secure, sameSite: a.sameSite }), d.indexOf("SUCCESS") > -1 ? b.retType = u.SUCCESS : b.retType = u.ERROR, a.retJson = b;
	    });
	  }, p.prototype.__sequence = function (a) {
	    function b(a) {
	      if (a instanceof Array) a.forEach(b);else {
	        var g,
	            h = c(),
	            i = c();e.push(function () {
	          return h = c(), g = a.call(d, function (a) {
	            return h.resolve(a), i.promise;
	          }, function (a) {
	            return h.reject(a), i.promise;
	          }), g && (g = g["catch"](function (a) {
	            h.reject(a);
	          })), h.promise;
	        }), f.push(function (a) {
	          return i.resolve(a), g;
	        });
	      }
	    }var d = this,
	        e = [],
	        f = [];a.forEach(b);for (var g, h = r; g = e.shift();) {
	      h = h.then(g);
	    }for (; g = f.pop();) {
	      h = h.then(g);
	    }return h;
	  };var E = function (a) {
	    a();
	  },
	      F = function (a) {
	    a();
	  };p.prototype.request = function (c) {
	    var e = this;if (this.options = d(c || {}, s), !q) {
	      var f = "当前浏览器不支持Promise，请在windows对象上挂载Promise对象";throw b.mtop = { ERROR: f }, new Error(f);
	    }var h = q.resolve([E, F]).then(function (a) {
	      var b = a[0],
	          c = a[1];return e.__sequence([b, e.__processRequestMethod, e.__processRequestType, e.__processToken, e.__processRequestUrl, e.middlewares, e.__processRequest, c]);
	    }).then(function () {
	      var a = e.options.retJson;return a.retType !== u.SUCCESS ? q.reject(a) : e.options.successCallback ? void e.options.successCallback(a) : q.resolve(a);
	    })["catch"](function (a) {
	      var c;return a instanceof Error ? (console.error(a.stack), c = { ret: [a.message], stack: [a.stack], retJson: u.ERROR }) : c = "string" == typeof a ? { ret: [a], retJson: u.ERROR } : void 0 !== a ? a : e.options.retJson, b.mtop.errorListener && b.mtop.errorListener({ api: e.params.api, data: e.params.data, v: e.params.v, retJson: c }), e.options.failureCallback ? void e.options.failureCallback(c) : q.reject(c);
	    });return this.__processRequestType(), e.options.H5Request && (e.constructor.__firstProcessor || (e.constructor.__firstProcessor = h), E = function (a) {
	      e.constructor.__firstProcessor.then(a)["catch"](a);
	    }), ("get" === this.params.type && "json" === this.params.dataType || "post" === this.params.type) && (c.pageDomain = c.pageDomain || g(a.location.hostname), c.mainDomain !== c.pageDomain && (c.maxRetryTimes = 4, c.CDR = !0)), this.__requestProcessor = h, h;
	  }, b.mtop = function (a) {
	    return new p(a);
	  }, b.mtop.request = function (a, b, c) {
	    var d = { H5Request: a.H5Request, WindVaneRequest: a.WindVaneRequest, LoginRequest: a.LoginRequest, AntiCreep: a.AntiCreep, AntiFlood: a.AntiFlood, successCallback: b, failureCallback: c || b };return new p(a).request(d);
	  }, b.mtop.H5Request = function (a, b, c) {
	    return new p(a).request({ H5Request: !0, successCallback: b, failureCallback: c || b });
	  }, b.mtop.middlewares = t, b.mtop.config = s, b.mtop.RESPONSE_TYPE = u, b.mtop.CLASS = p;
	}(window, window.lib || (window.lib = {})), function (a, b) {
	  function c(a) {
	    return a.preventDefault(), !1;
	  }function d(a) {
	    var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);return b ? b[1] : void 0;
	  }function e(b, d) {
	    var e = this,
	        f = a.dpr || 1,
	        g = document.createElement("div"),
	        h = document.documentElement.getBoundingClientRect(),
	        i = Math.max(h.width, window.innerWidth) / f,
	        j = Math.max(h.height, window.innerHeight) / f;g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:2147483647", "position:" + (i > 800 ? "fixed" : "absolute"), "left:0", "top:0px", "background:" + (i > 800 ? "rgba(0,0,0,.5)" : "#FFF"), "display:none"].join(";");var k = document.createElement("div");k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), k.innerText = b;var l = navigator.userAgent.match(/.*(iPhone|iPad|Android|ios|SymbianOS|Windows Phone).*/i),
	        m = document.createElement("img");m.style.cssText = ["display:block", "position:absolute", "margin-top:15px", "right:0", "top:0", "height:15px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), m.src = "https://gw.alicdn.com/tfs/TB1QZN.CYj1gK0jSZFuXXcrHpXa-200-200.png";var n = document.createElement("iframe");n.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), l ? (k.appendChild(m), g.appendChild(k)) : (m.style.cssText = ["position:absolute", "width:15px", "height:15px", "top:102px", "left:" + (i / 2 - 185 + 390) + "px", "cursor: pointer", "border:0", "z-index:1", "overflow:hidden"].join(";"), g.appendChild(m), n.style.cssText = ["position:absolute", "top:92px", "left:" + (i / 2 - 185) + "px", "width:420px", "height:320px", "border:0", "background:#FFF", "overflow:hidden"].join(";")), g.appendChild(n), g.className = "J_MIDDLEWARE_FRAME_WIDGET", document.body.appendChild(g), n.src = d, m.addEventListener("click", function () {
	      e.hide();var a = document.createEvent("HTMLEvents");a.initEvent("close", !1, !1), g.dispatchEvent(a);
	    }, !1), this.addEventListener = function () {
	      g.addEventListener.apply(g, arguments);
	    }, this.removeEventListener = function () {
	      g.removeEventListener.apply(g, arguments);
	    }, this.show = function () {
	      document.addEventListener("touchmove", c, !1), g.style.display = "block", window.scrollTo(0, 0);
	    }, this.hide = function () {
	      document.removeEventListener("touchmove", c), window.scrollTo(0, -h.top), g.parentNode && g.parentNode.removeChild(g);
	    };
	  }if (!b || !b.mtop || b.mtop.ERROR) throw new Error("Mtop 初始化失败！");var i = a.Promise,
	      j = b.mtop.CLASS,
	      k = b.mtop.config,
	      l = b.mtop.RESPONSE_TYPE;b.mtop.middlewares.push(function (a) {
	    var c = this,
	        d = this.options,
	        e = this.params;return a().then(function () {
	      var a = d.retJson,
	          f = a.ret,
	          g = navigator.userAgent.toLowerCase(),
	          h = g.indexOf("safari") > -1 && g.indexOf("chrome") < 0 && g.indexOf("qqbrowser") < 0;if (f instanceof Array && (f = f.join(",")), (f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1) && (a.retType = l.SESSION_EXPIRED, !d.WindVaneRequest && (k.LoginRequest === !0 || d.LoginRequest === !0 || e.needLogin === !0))) {
	        if (!b.login) throw new Error("LOGIN_NOT_FOUND::缺少lib.login");if (d.safariGoLogin !== !0 || !h || "taobao.com" === d.pageDomain) return b.login.goLoginAsync().then(function () {
	          return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]);
	        })["catch"](function (a) {
	          throw "CANCEL" === a ? new Error("LOGIN_CANCEL::用户取消登录") : new Error("LOGIN_FAILURE::用户登录失败");
	        });b.login.goLogin();
	      }
	    });
	  }), b.mtop.loginRequest = function (a, b, c) {
	    return new j(a).request({ LoginRequest: !0, H5Request: !0, successCallback: b, failureCallback: c || b });
	  }, b.mtop.antiFloodRequest = function (a, b, c) {
	    return new j(a).request({ AntiFlood: !0, successCallback: b, failureCallback: c || b });
	  }, b.mtop.middlewares.push(function (a) {
	    var b = this.options;this.params;return b.H5Request !== !0 || k.AntiFlood !== !0 && b.AntiFlood !== !0 ? void a() : a().then(function () {
	      var a = b.retJson,
	          c = a.ret;c instanceof Array && (c = c.join(",")), c.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a.data.url && (b.AntiFloodReferer ? location.href = a.data.url.replace(/(http_referer=).+/, "$1" + b.AntiFloodReferer) : location.href = a.data.url);
	    });
	  }), b.mtop.antiCreepRequest = function (a, b, c) {
	    return new j(a).request({ AntiCreep: !0, successCallback: b, failureCallback: c || b });
	  }, b.mtop.middlewares.push(function (b) {
	    var c = this,
	        f = this.options,
	        g = this.params;return f.AntiCreep !== !1 && (f.AntiCreep = !0), g.forceAntiCreep !== !0 && f.H5Request !== !0 || k.AntiCreep !== !0 && f.AntiCreep !== !0 ? void b() : b().then(function () {
	      var b = f.retJson,
	          h = b.ret;if (h instanceof Array && (h = h.join(",")), (h.indexOf("RGV587_ERROR::SM") > -1 || h.indexOf("ASSIST_FLAG") > -1) && b.data.url) {
	        var j = "_m_h5_smt",
	            k = d(j),
	            l = !1;if (f.saveAntiCreepToken === !0 && k) {
	          k = JSON.parse(k);for (var m in k) {
	            g[m] && (l = !0);
	          }
	        }if (f.saveAntiCreepToken === !0 && k && !l) {
	          for (var m in k) {
	            g[m] = k[m];
	          }return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]);
	        }return new i(function (d, h) {
	          function i() {
	            m.removeEventListener("close", i), a.removeEventListener("message", k), h("USER_INPUT_CANCEL::用户取消输入");
	          }function k(b) {
	            var e;try {
	              e = JSON.parse(b.data) || {};
	            } catch (l) {}if (e && "child" === e.type) {
	              m.removeEventListener("close", i), a.removeEventListener("message", k), m.hide();var n;try {
	                n = JSON.parse(decodeURIComponent(e.content)), "string" == typeof n && (n = JSON.parse(n));for (var o in n) {
	                  g[o] = n[o];
	                }f.saveAntiCreepToken === !0 ? (document.cookie = j + "=" + JSON.stringify(n) + ";", a.location.reload()) : c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]).then(d);
	              } catch (l) {
	                h("USER_INPUT_FAILURE::用户输入失败");
	              }
	            }
	          }var l = b.data.url,
	              m = new e("", l);m.addEventListener("close", i, !1), a.addEventListener("message", k, !1), m.show();
	        });
	      }
	    });
	  });
	}(window, window.lib || (window.lib = {}));

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBuName;

	var _pageStorage = __webpack_require__(88);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;
	// 获取页面BU属性，weex下不要在加载时获取，需要在调用时实时获取
	// 返回值有youku、damai和taopiaopiao，未识别到buName时返回空字符串

	function getBuName() {
	  var buName = '';
	  // 获取globalConfig，H5从window下取，weex从hollywoodPageData中取值
	  var globalConfig = window.globalConfig || {};
	  var hollywoodPageData = _pageStorage2.default.getItem('hollywoodPageData') || {};
	  var _hollywoodPageData$ba = hollywoodPageData.base,
	      base = _hollywoodPageData$ba === undefined ? {} : _hollywoodPageData$ba;

	  if (base.globalConfig) {
	    try {
	      globalConfig = typeof base.globalConfig === 'string' ? JSON.parse(base.globalConfig) : base.globalConfig;
	    } catch (error) {}
	  }

	  // 设置buName的值，优先级顺序：url->页面全局变量->域名
	  if (urlSearchObj.buName) {
	    // 优先从页面url中获取buName
	    buName = urlSearchObj.buName;
	  } else if (globalConfig.buName) {
	    // 从全局变量中取buName
	    buName = globalConfig.buName;
	  } else {
	    // 全局变量中没有时根据域名获取，兼容老页面
	    var host = location.host;
	    if (host.includes('youku.com')) {
	      buName = 'youku';
	    } else if (host.includes('damai.cn')) {
	      buName = 'damai';
	    } else if (host.includes('taopiaopiao.com')) {
	      buName = 'taopiaopiao';
	    }
	  }

	  return buName;
	}
	module.exports = exports['default'];

/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var storage = {};

	exports.default = {
	  setItem: function setItem(key, content) {
	    storage[key] = content;
	  },
	  getItem: function getItem(key) {
	    return storage[key];
	  },
	  removeItem: function removeItem(key) {
	    delete storage[key];
	  },
	  clear: function clear() {
	    storage = {};
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processResult = undefined;

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// 在SSR的node环境下根据mtop接口参数调用HSF接口
	var requestHsf = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var ctx = arguments[1];

	    var data, v, apiMappingList, mtopConfig, _ctx$userInfo, _ctx$userInfo$userNum, userNumbId, _ctx$userInfo$usernic, usernick, mtopContext, hsfConfig, _hsfConfig$version, version, group, method, _hsfConfig$paramList, paramList, _hsfConfig$isYoukuEnv, isYoukuEnv, ver, id, parameterTypes, hsfArgs, params, res;

	    return _regenerator2.default.wrap(function (_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (!(!window.isServer || !ctx || !ctx.hsfClient)) {
	              _context.next = 2;
	              break;
	            }

	            return _context.abrupt('return', new Promise(function (resolve, reject) {
	              reject('The requestHsf method must be in sff runtime!');
	            }));

	          case 2:
	            // 保存mtop接口请求数据参数
	            data = getMtopData(args);
	            v = args.v || '1.0';
	            apiMappingList = ctx.apiMappingList || [];
	            mtopConfig = apiMappingList.find(function (one) {
	              return one.api === args.api && one.version === v;
	            });

	            if (mtopConfig) {
	              _context.next = 8;
	              break;
	            }

	            return _context.abrupt('return', new Promise(function (resolve, reject) {
	              reject('mtop config not find!');
	            }));

	          case 8:
	            _ctx$userInfo = ctx.userInfo, _ctx$userInfo$userNum = _ctx$userInfo.userNumbId, userNumbId = _ctx$userInfo$userNum === undefined ? 0 : _ctx$userInfo$userNum, _ctx$userInfo$usernic = _ctx$userInfo.usernick, usernick = _ctx$userInfo$usernic === undefined ? '' : _ctx$userInfo$usernic;
	            // Mtop接口上下文参数

	            mtopContext = {
	              userNumbId: userNumbId,
	              usernick: usernick
	            };
	            // mtop接口对应HSF接口的配置

	            hsfConfig = mtopConfig.hsfConfig || {};
	            _hsfConfig$version = hsfConfig.version, version = _hsfConfig$version === undefined ? {} : _hsfConfig$version, group = hsfConfig.group, method = hsfConfig.method, _hsfConfig$paramList = hsfConfig.paramList, paramList = _hsfConfig$paramList === undefined ? [] : _hsfConfig$paramList, _hsfConfig$isYoukuEnv = hsfConfig.isYoukuEnv, isYoukuEnv = _hsfConfig$isYoukuEnv === undefined ? true : _hsfConfig$isYoukuEnv;
	            // 获取当前环境下的版本

	            ver = version[ctx.env] || version.daily;
	            id = hsfConfig.api + ':' + ver;
	            parameterTypes = paramList.map(function (item) {
	              return item.paramType;
	            });
	            hsfArgs = getHsfArgs(hsfConfig, data, mtopContext);

	            // 调用HSF接口参数

	            params = {
	              id: id,
	              group: group,
	              method: method,
	              parameterTypes: parameterTypes,
	              args: hsfArgs,
	              isYoukuEnv: isYoukuEnv
	            };

	            console.log('requestHsf params:', params);
	            _context.next = 20;
	            return ctx.ykHsfInvoke(params);

	          case 20:
	            res = _context.sent;

	            console.log('requestHsf res:', res);
	            return _context.abrupt('return', res);

	          case 23:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function () {
	    return _ref.apply(this, arguments);
	  };
	}();

	// 根据MTOP和HSF映射关系获取hsf接口args参数


	var _isType = __webpack_require__(90);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function getHsfArgs() {
	  var hsfConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var mtopContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var dataKeys = Object.keys(data);
	  var contextKeys = Object.keys(mtopContext);
	  var _hsfConfig$apiParam = hsfConfig.apiParam,
	      apiParam = _hsfConfig$apiParam === undefined ? {} : _hsfConfig$apiParam,
	      _hsfConfig$paramList2 = hsfConfig.paramList,
	      paramList = _hsfConfig$paramList2 === undefined ? [] : _hsfConfig$paramList2;

	  var obj = {};
	  loop(paramList, obj);
	  function loop(list, obj) {
	    list.forEach(function (elem) {
	      if (elem.mapType === 'api' && dataKeys.includes(elem.mapField)) {
	        // 如果是API请求参数
	        var value = data[elem.mapField];
	        // 如果是Map类型，则需要parse
	        if (apiParam[elem.mapField] && apiParam[elem.mapField].paramType === 'Map') {
	          try {
	            value = typeof value === 'string' ? JSON.parse(value) : value;
	          } catch (error) {}
	        }
	        obj[elem.paramName] = value;
	      } else if (elem.mapType === 'mtop' && contextKeys.includes(elem.mapField)) {
	        // 如果是mtop协议参数
	        obj[elem.paramName] = mtopContext[elem.mapField];
	      } else if (elem.children) {
	        obj[elem.paramName] = {};
	        loop(elem.children, obj[elem.paramName]);
	      }
	    });
	  }
	  var args = paramList.map(function (item) {
	    return obj[item.paramName];
	  });
	  return args;
	}

	// 获取mtop接口参数
	function getMtopData(args) {
	  var data = {};
	  if (args.data) {
	    // 一般的mtop接口直接传data对象
	    data = args.data;
	  } else if (args.bizType && args.bizParam) {
	    // aplatform接口需要传bizType和bizParam参数，两个参数都是字符串形式
	    data = {
	      bizType: args.bizType,
	      bizParam: _typeof(args.bizParam) === 'object' ? JSON.stringify(args.bizParam) : args.bizParam
	    };
	  } else if (args.req) {
	    // GMP接口需要传req参数，req参数是字符串形式
	    data = {
	      req: _typeof(args.req) === 'object' ? JSON.stringify(args.req) : args.req
	    };
	  }
	  return data;
	}

	// 处理HSF接口返回值，保持和MTOP接口一致
	// 参考文档：https://www.atatech.org/articles/10795
	function processResult(result) {
	  if (typeof result === 'string') {
	    try {
	      result = JSON.parse(result);
	    } catch (error) {}
	  }
	  // 调用HSF接口失败
	  if (!result.success) {
	    throw result.msgCode || result.msgInfo || 'HSF ERROR';
	  }

	  // 获取HSF接口数据，调用中心机房HSF接口时会再外面再包一层
	  var model = result.model || result.res && result.res.model || result;
	  var res = {};
	  if ((0, _isType.isObject)(model)) {
	    // 对于对象类型，调用成功data中直接返回model中数据，不会输出result字段。
	    res.data = model;
	  } else {
	    // 对应数组或者其他基本类型，需要添加result字段
	    res.data = {
	      result: model
	    };
	  }
	  console.log('processResult res:', res);
	  return res;
	}

	exports.default = requestHsf;
	exports.processResult = processResult;

/***/ },
/* 90 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// js类型判断方法
	function isArray(item) {
	  return Array.isArray(item);
	}

	function isObject(item) {
	  return Object.prototype.toString.call(item) === '[object Object]';
	}

	function isString(item) {
	  return Object.prototype.toString.call(item) === '[object String]';
	}

	function isNumber(item) {
	  return Object.prototype.toString.call(item) === '[object Number]';
	}

	exports.default = { isArray: isArray, isObject: isObject, isString: isString, isNumber: isNumber };
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(45);

	/**
	 * 加载单个脚本
	 * @Param {String} script 脚本url
	 * @Param {String} [charset = 'utf-8'] 脚本编码，默认utf-8
	 */

	// 记录脚本的加载历史
	// {
	//   'xxxxx.js?xxx=xxx': {
	//     status: 'loading/loaded',  loading：已经在加载中的脚本；loaded：已经加载过的脚本
	//     promise: Promise 加载中的Promise，status为1时记录
	//   }
	// }
	var scriptLoadHistoryMap = {};
	function loadScript(script) {
	  var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf-8';

	  if (_universalEnv.isWeex) {
	    // 如果是weex，则直接返回
	    return Promise.all([]);
	  }
	  var loadHistory = scriptLoadHistoryMap[script];
	  if (loadHistory) {
	    if (loadHistory.status === 'loaded') {
	      // 如果已经加载过，而且已经加载完成
	      return Promise.all([]);
	    }
	    if (loadHistory.status === 'loading') {
	      // 如果已经加载过，而且正在加载中
	      return loadHistory.promise;
	    }
	  } else {
	    // 新脚本执行加载
	    var promise = new Promise(function (resolve, reject) {
	      var scriptEle = document.createElement('script');
	      scriptEle.charset = charset;
	      scriptEle.src = script;
	      scriptEle.onload = function (e) {
	        scriptEle.onerror = null;
	        scriptEle.onload = null;
	        // 更改脚本加载历史已经加载
	        scriptLoadHistoryMap[script] = {
	          status: 'loaded'
	        };
	        resolve(e);
	      };
	      scriptEle.onerror = function (e) {
	        scriptEle.onerror = null;
	        scriptEle.onload = null;
	        // 删除脚本加载历史，以便重试
	        delete scriptLoadHistoryMap[script];
	        reject(e);
	      };
	      document.querySelector('head').appendChild(scriptEle);
	    });
	    // 记录脚本加载历史正在加载中
	    scriptLoadHistoryMap[script] = {
	      status: 'loading',
	      promise: promise
	    };
	    return promise;
	  }
	}

	/**
	 * 加载单个css资源
	 * @Param {String} script css url
	 */
	// 记录样式的加载历史
	// {
	//   'xxxxx.css?xxx=xxx': {
	//     status: 'loading/loaded',  loading：已经在加载中的样式；loaded：已经加载过的样式
	//     promise: Promise 加载中的Promise，status为1时记录
	//   }
	// }
	var cssLoadHistoryMap = {};
	function loadCss(href) {
	  if (_universalEnv.isWeex) {
	    // 如果是weex，则直接返回
	    return Promise.all([]);
	  }
	  var loadHistory = cssLoadHistoryMap[href];
	  if (loadHistory) {
	    if (loadHistory.status === 'loaded') {
	      // 如果已经加载过，而且已经加载完成
	      return Promise.all([]);
	    }
	    if (loadHistory.status === 'loading') {
	      // 如果已经加载过，而且正在加载中
	      return loadHistory.promise;
	    }
	  } else {
	    var promise = new Promise(function (resolve, reject) {
	      var styleElement = document.createElement('link');
	      styleElement.rel = 'stylesheet';
	      styleElement.type = 'text/css';
	      styleElement.href = href;
	      styleElement.onload = function (e) {
	        styleElement.onerror = null;
	        styleElement.onload = null;
	        // 更改样式加载历史已经加载
	        cssLoadHistoryMap[href] = {
	          status: 'loaded'
	        };
	        resolve(e);
	      };
	      styleElement.onerror = function (e) {
	        styleElement.onerror = null;
	        styleElement.onload = null;
	        // 删除样式加载历史，以便重试
	        delete cssLoadHistoryMap[href];
	        reject(e);
	      };
	      document.querySelector('head').appendChild(styleElement);
	    });
	    // 记录样式加载历史正在加载中
	    cssLoadHistoryMap[href] = {
	      status: 'loading',
	      promise: promise
	    };
	    return promise;
	  }
	}

	var playerResourceLoaded = false;
	var loadPlayerResourcePromise = null;
	function loadPlayerResource() {
	  if (playerResourceLoaded) {
	    return Promise.all([]);
	  }
	  if (loadPlayerResourcePromise) {
	    return loadPlayerResourcePromise;
	  }

	  loadPlayerResourcePromise = Promise.all([loadScript('https://g.alicdn.com/player/h5phoneplayer/1.8.0/js/h5phoneplayer.min.js'), loadCss('https://g.alicdn.com/player/h5phoneplayer/1.8.0/css/h5phoneplayer.min.css')]).then(function (res) {
	    playerResourceLoaded = true;
	    return res;
	  });
	  return loadPlayerResourcePromise;
	}

	exports.default = { loadScript: loadScript, loadCss: loadCss, loadPlayerResource: loadPlayerResource };
	module.exports = exports['default'];

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = closePage;

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YoukuPage = null;
	try {
	  YoukuPage = __webpack_require__(95);
	} catch (e) {}

	function closePage() {
	  if (_universalEnv.isWeex) {
	    YoukuPage && YoukuPage.close && YoukuPage.close();
	  } else {
	    _universalWindvane2.default.call('WVActionJSBridge', 'close', {}, function () {}, function () {});
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _universalEnv = __webpack_require__(11);

	if (_universalEnv.isWeb && window) {
	  if (typeof window.WindVane === 'undefined' || Object.keys(window.WindVane).length === 0) {
	    console.warn('load @ali/lib-windvane');

	    __webpack_require__(94);
	  }
	}

	var WV = {};

	WV.call = function (className, method, data, successCallback, failCallback) {
	  if (_universalEnv.isWeex) {
	    var Windvane;

	    try {
	      Windvane = __weex_require__('@weex-module/windvane');
	    } catch (e) {}

	    if (Windvane && Windvane.call) {
	      Windvane.call({
	        class: className,
	        method: method,
	        data: data
	      }, successCallback);
	    } else {
	      failCallback && failCallback({
	        msg: '浏览器不支持 windvane',
	        ret: ['HY_NOT_SUPPORT_DEVICE']
	      });
	    }
	  } else if (window && typeof window.WindVane !== 'undefined' && window.WindVane.isAvailable) {
	    var WindVane = window.WindVane;
	    WindVane.call(className, method, data, successCallback, failCallback);
	  } else {
	    // 失败
	    failCallback && failCallback({
	      msg: '浏览器不支持 windvane',
	      ret: ['HY_NOT_SUPPORT_DEVICE']
	    });
	  }
	};
	/**
	 * 调用 WindVane 提供的 JSBridge。
	 * windvane.call2(name, params, successCallback, failureCallback)
	 * call2
	 * @param {String} name		              必填		要调用的 JSBridge 的名称，注意格式为 '类名.方法名'
	 * @param {Object} params		            非必填  要调用的 JSBridge 的参数
	 * @param {Function} successCallback		非必填  成功回调
	 * @param {Function} failureCallback		非必填  失败回调
	 * 参考文档： http://doc.weex.alibaba-inc.com/modules/windvane.html
	 */

	WV.call2 = function (name, params, successCallback, failCallback) {
	  if (_universalEnv.isWeex) {
	    var Windvane;

	    try {
	      Windvane = __weex_require__('@weex-module/windvane');
	    } catch (e) {}

	    if (Windvane && Windvane.call2) {
	      Windvane.call2(name, params, successCallback, failCallback);
	    } else {
	      failCallback && failCallback({
	        msg: '浏览器不支持 windvane',
	        ret: ['HY_NOT_SUPPORT_DEVICE']
	      });
	    }
	  } else if (window && typeof window.WindVane !== 'undefined' && window.WindVane.isAvailable) {
	    var WindVane = window.WindVane; //FIXME: 需要 Web 端提供一样的 call2 方法

	    if (WindVane && WindVane.call2) {
	      WindVane.call2(name, params, successCallback, failCallback);
	    } else {
	      var nameList = name.split('.');
	      WindVane.call(nameList[0], nameList[1], params, successCallback, failCallback);
	    }
	  } else {
	    // 失败
	    failCallback && failCallback({
	      msg: '浏览器不支持 windvane',
	      ret: ['HY_NOT_SUPPORT_DEVICE']
	    });
	  }
	};

	WV.isAvailable = _universalEnv.isWeb ? window && window.WindVane && window.WindVane.isAvailable || false : true;
	var _default = WV;
	exports.default = _default;

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	typeof window === 'undefined' && (window = { ctrl: {}, lib: {} });!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function (a, b) {
	  function c(a, b) {
	    a = a.toString().split("."), b = b.toString().split(".");for (var c = 0; c < a.length || c < b.length; c++) {
	      var d = parseInt(a[c], 10),
	          e = parseInt(b[c], 10);if (window.isNaN(d) && (d = 0), window.isNaN(e) && (e = 0), e > d) return -1;if (d > e) return 1;
	    }return 0;
	  }var d = a.Promise,
	      e = a.document,
	      f = a.navigator.userAgent,
	      g = /Windows\sPhone\s(?:OS\s)?[\d\.]+/i.test(f) || /Windows\sNT\s[\d\.]+/i.test(f),
	      h = g && a.WindVane_Win_Private && a.WindVane_Win_Private.call,
	      i = /iPhone|iPad|iPod/i.test(f),
	      j = /Android/i.test(f),
	      k = f.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
	      l = Object.prototype.hasOwnProperty,
	      m = b.windvane = a.WindVane || (a.WindVane = { version: "3.0.7" }),
	      n = Math.floor(65536 * Math.random()),
	      o = 1,
	      p = [],
	      r = "hybrid",
	      t = "iframe_",
	      u = "param_";k = k ? (k[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0";var x = { isAvailable: 1 === c(k, "0"), isNewBridgeAvailable: 1 === c(k, j ? "8.3.0" : "8.2.0"), call2: function call2(a, b, c, d, e) {
	      var f = a.indexOf(".");return x.call(a.substr(0, f), a.substr(f + 1), b, c, d, e);
	    }, call: function call(b, c, e, f, g, h) {
	      var i, k;"number" == typeof arguments[arguments.length - 1] && (h = arguments[arguments.length - 1]), "function" != typeof f && (f = null), "function" != typeof g && (g = null), !d || f || g || (k = new d(function (a, b) {
	        f = a, g = b;
	      }));var l = ("" + c).indexOf(".") > -1;if ((!j || !l) && x.isNewBridgeAvailable && a.__windvane__ && (!a.__windvane__.call && a.__windvane__.windVaneCoreJs && new Function(a.__windvane__.windVaneCoreJs())(), a.__windvane__.call)) return a.__windvane__.call(b + "." + c, e, f, g, h), k;i = y.getSid();var m = { success: f, failure: g };return h > 0 && (m.timeout = setTimeout(function () {
	        x.onFailure(i, { ret: "HY_TIMEOUT" });
	      }, h)), y.registerCall(i, m), y.registerGC(i, h), x.isAvailable ? y.callMethod(b, c, e, i) : x.onFailure(i, { ret: "HY_NOT_IN_WINDVANE" }), k;
	    }, fireEvent: function fireEvent(a, b) {
	      var d = e.createEvent("HTMLEvents");d.initEvent(a, !1, !0), d.param = y.parseData(b), e.dispatchEvent(d);
	    }, getParam: function getParam(a) {
	      return y.getParam(a);
	    }, setData: function setData() {}, find: function find(a, b) {
	      b || y.unregisterCall(a, !1);
	    }, onSuccess: function onSuccess(a, b, c) {
	      y.onComplete(a, b, "success", c);
	    }, onFailure: function onFailure(a, b) {
	      y.onComplete(a, b, "failure");
	    } };x.isNewBridgeAvailable && a.__windvane__ && a.__windvane__.callSync && (x.callSync = function (b, c) {
	    if (i) return a.__windvane__.callSync(b, c);if (j) {
	      var d = { name: b };c && (d.params = JSON.stringify(c));var e = a.__windvane__.callSync(d);if (e) try {
	        return JSON.parse(e);
	      } catch (f) {}
	    }
	  });var y = { params: {}, calls: {}, getSid: function getSid() {
	      return (n + o++) % 65536 + "";
	    }, buildParam: function buildParam(a) {
	      return a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? JSON.stringify(a) : a || "";
	    }, getParam: function getParam(a) {
	      return this.params[u + a] || "";
	    }, setParam: function setParam(a, b) {
	      this.params[u + a] = b;
	    }, parseData: function parseData(a) {
	      var b;if (a && "string" == typeof a) try {
	        b = JSON.parse(a);
	      } catch (c) {
	        b = { ret: "HY_RESULT_PARSE_ERROR", originValue: a };
	      } else b = a || {};return b;
	    }, registerCall: function registerCall(a, b) {
	      this.calls[a] = b;
	    }, unregisterCall: function unregisterCall(a, b) {
	      var c = this.calls[a] || {},
	          d = c.timeout;return d && clearTimeout(d), b || delete this.calls[a], c;
	    }, useIframe: function useIframe(a, b) {
	      var d = p.pop();d || (d = e.createElement("iframe"), d.setAttribute("frameborder", "0"), d.style.cssText = "width:0;height:0;border:0;display:none;"), d.setAttribute("id", t + a), d.setAttribute("src", b), d.parentNode || setTimeout(function () {
	        e.body.appendChild(d);
	      }, 5);
	    }, retrieveIframe: function retrieveIframe(a) {
	      var c = e.querySelector("#" + (t + a));if (c) if (p.length >= 3) try {
	        e.body.removeChild(c);
	      } catch (d) {} else p.indexOf(c) < 0 && p.push(c);
	    }, callMethod: function callMethod(b, c, d, e) {
	      var f = y.buildParam(d);if (g) h ? a.WindVane_Win_Private.call(b, c, e, f) : this.onComplete(e, { ret: "HY_NO_HANDLER_ON_WP" }, "failure");else if (i) {
	        this.setParam(e, f);var k = r + "://" + b + ":" + e + "/" + c + "?" + encodeURIComponent(f);this.useIframe(e, k);
	      } else if (j) {
	        this.setParam(e, d);var k = r + "://" + b + ":" + e + "/" + c + "?" + f;window.prompt(k, "wv_hybrid" + ":");
	      } else this.onComplete(e, { ret: "HY_NOT_SUPPORT_DEVICE" }, "failure");
	    }, registerGC: function registerGC(a, b) {
	      var c = this,
	          d = Math.max(b || 0, 6e5),
	          e = Math.max(b || 0, 6e4);setTimeout(function () {
	        c.unregisterCall(a);
	      }, d), i && setTimeout(function () {
	        c.params[u + a] && delete c.params[u + a];
	      }, e);
	    }, onComplete: function onComplete(a, b, c, d) {
	      var e = this.unregisterCall(a, d),
	          f = e.success,
	          g = e.failure;b = this.parseData(b);var h = b.ret;"string" == typeof h && (b = b.value || b, b.ret || (b.ret = [h])), "success" === c ? f && f(b) : "failure" === c && g && g(b), i && (this.retrieveIframe(a), this.params[u + a] && delete this.params[u + a]);
	    } };for (var z in x) {
	    l.call(m, z) || (m[z] = x[z]);
	  }
	}(window, window.lib || (window.lib = {}));module.exports = window.lib['windvane'];

/***/ },
/* 95 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuPage");

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAppInstalled;

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _universalEnv = __webpack_require__(45);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAppInstalled(params) {
	  return new Promise(function (resolve) {
	    _universalWindvane2.default && _universalWindvane2.default.call('Base', 'isInstall', params, function (e) {
	      if (_universalEnv.isWeb) {
	        // web侧此处就算是已经安装
	        resolve('INSTALLED');
	      } else if (_browser2.default.isIOS) {
	        // IOS端跟安装端返回内容不一致，单独处理
	        try {
	          // weex侧需要解析返回参数进行判断
	          var obj = JSON.parse(e);
	          resolve(obj.status === 'SUCCESS' ? 'INSTALLED' : 'NOT_INSTALLED');
	        } catch (e) {
	          resolve('NOT_INSTALLED');
	        }
	      } else if (_browser2.default.isAndroid) {
	        // IOS端跟安装端返回内容不一致，单独处理
	        try {
	          // weex侧需要解析返回参数进行判断
	          var _obj = JSON.parse(e);
	          resolve(_obj.ret === 'HY_SUCCESS' ? 'INSTALLED' : 'NOT_INSTALLED');
	        } catch (e) {
	          resolve('NOT_INSTALLED');
	        }
	      }
	    }, function (e) {
	      if (e.ret && (e.ret === 'HY_FAILED' || e.ret[0] === 'HY_FAILED')) {
	        resolve('NOT_INSTALLED');
	      } else {
	        resolve('UNKNOWN');
	      }
	    });
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getCookie;
	function getCookie(cname) {
	  var name = cname + '=';
	  var decodedCookie = decodeURIComponent(document.cookie || '');
	  var ca = decodedCookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return '';
	}
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = read;

	/**
	 * 读取对象里面的值 防止出错
	 * @param {Object} obj {a:{b:{c:1}}}
	 * @param {String} key 'a.b.c'
	 */
	function read(obj, key) {
	  if (obj && key) {
	    var keys = key.split('.');
	    for (var i = 0; i < keys.length; i++) {
	      obj = obj[keys[i]];
	      if (!obj) {
	        if (i === keys.length - 1) {
	          return obj;
	        } else {
	          return undefined;
	        }
	      }
	    }
	  }
	  return obj;
	}
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(45);

	var FULL_WIDTH = 750;

	// 将px转为rem
	function px2rem(dur) {
	  // 移动到函数内部防止在服务端报错
	  var clientWidth = document.documentElement.clientWidth;
	  return _universalEnv.isWeex ? dur : dur * FULL_WIDTH / clientWidth;
	}

	// 批量转换单位
	function transferObject2rem(obj) {
	  Object.keys(obj).forEach(function (key) {
	    obj[key] = px2rem(obj[key]);
	  });
	  return obj;
	}

	// 获取节点位置信息
	function getComponentRect(node, callback) {
	  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  // 是否是视口
	  var isViewport = node === 'viewport';
	  if (_universalEnv.isWeex && !isViewport && !node.ref || !_universalEnv.isWeex && !isViewport && !node.getBoundingClientRect) {
	    try {
	      console.log('node参数不合法！如果不是viewport需要使用findDOMNode获取真实DOM节点再传入！');
	    } catch (error) {}
	    callback && callback({});
	    return;
	  }
	  // 默认是rem单位
	  var isRem = option.isRem !== false;
	  if (_universalEnv.isWeex) {
	    var dom = __webpack_require__(100);
	    dom && dom.getComponentRect && dom.getComponentRect(isViewport ? node : node.ref, function (option) {
	      callback && callback(option.size);
	    });
	  } else {
	    var _document$documentEle = document.documentElement,
	        clientHeight = _document$documentEle.clientHeight,
	        clientWidth = _document$documentEle.clientWidth,
	        clientTop = _document$documentEle.clientTop,
	        clientLeft = _document$documentEle.clientLeft;

	    var viewportDOM = isViewport ? {} : node.getBoundingClientRect();
	    var size = isViewport ? {
	      height: clientHeight,
	      width: clientWidth,
	      top: clientTop,
	      left: clientLeft,
	      bottom: clientHeight + clientTop,
	      right: clientWidth + clientLeft
	    } : {
	      height: viewportDOM.height,
	      width: viewportDOM.width,
	      top: viewportDOM.top,
	      left: viewportDOM.left,
	      bottom: viewportDOM.bottom,
	      right: viewportDOM.right
	    };
	    // 单位转换，px转rem
	    if (isRem) {
	      size = transferObject2rem(size);
	    }
	    callback && callback(size);
	  }
	}

	exports.default = getComponentRect;
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/dom");

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _universalEnv = __webpack_require__(45);

	var _isType = __webpack_require__(90);

	// PC 下单位相关方法
	var MEDIA_MAP = {
	  xs: {
	    mediaType: 'xs',
	    mediaName: 'pc-1024',
	    minWidth: 0,
	    maxWidth: 1280,
	    mainWidth: 912
	  },
	  sm: {
	    mediaType: 'sm',
	    mediaName: 'pc-1280',
	    minWidth: 1281,
	    maxWidth: 1550,
	    mainWidth: 1168
	  },
	  md: {
	    mediaType: 'md',
	    mediaName: 'pc-1344',
	    minWidth: 1551,
	    maxWidth: 1790,
	    mainWidth: 1438
	  },
	  lg: {
	    mediaType: 'lg',
	    mediaName: 'pc-1920',
	    minWidth: 1791,
	    maxWidth: 10000,
	    mainWidth: 1680
	  }
	};

	// 获取当前窗口宽度，单位px，返回数字类型
	function getClientWidth() {
	  if (_universalEnv.isWeex) {
	    return 750;
	  }
	  var clientWidth = document.documentElement.clientWidth;
	  // 页面最小宽度1024
	  if (clientWidth < 1024) {
	    clientWidth = 1024;
	  }
	  // 适配搭建页
	  if (window.DEVICE_WIDTH) {
	    clientWidth = window.DEVICE_WIDTH;
	  }
	  // 取整数，四舍五入
	  return Math.round(clientWidth);
	}

	// 获取当前窗口宽度对应的media
	function queryMedia() {
	  if (_universalEnv.isWeex) {
	    return {};
	  }
	  var clientWidth = getClientWidth();
	  var media = Object.values(MEDIA_MAP).find(function (one) {
	    return one.minWidth <= clientWidth && clientWidth <= one.maxWidth;
	  }) || {};
	  // 侧边宽度
	  var sideWidth = (clientWidth - media.mainWidth) / 2 || 0;
	  var result = _extends({}, media, {
	    sideWidth: sideWidth,
	    clientWidth: clientWidth
	  });
	  // 兼容搭建页预览，从页面最小宽度1024等比缩小到720，否则字体太小
	  if (window.DEVICE_WIDTH) {
	    result = {
	      mediaType: 'building',
	      mediaName: '搭建页',
	      minWidth: 0,
	      maxWidth: window.DEVICE_WIDTH,
	      mainWidth: 912 * window.DEVICE_WIDTH / 1024,
	      sideWidth: (clientWidth - 912 * window.DEVICE_WIDTH / 1024) / 2,
	      clientWidth: clientWidth
	    };
	  }
	  return result;
	}

	// 将rem值转为px，返回数字类型，根据内容实际主体宽度缩放
	function rem2px(value) {
	  if (_universalEnv.isWeex || !(0, _isType.isNumber)(value)) {
	    return value;
	  }
	  var media = queryMedia();
	  // 先还原图片在1790宽度下的高度

	  // 根据内容实际主体宽度缩放
	  var result = value * 1790 / 750 * media.mainWidth / 1438;
	  return Math.round(result);
	}

	exports.default = { queryMedia: queryMedia, getClientWidth: getClientWidth, rem2px: rem2px };
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _isType = __webpack_require__(90);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// 给style属性批量添加单位
	function postUnit(style) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	    return style;
	  }
	  opts.unit = opts.unit || 'px';
	  opts.scale = opts.scale || 1;
	  opts.ignore = _extends({
	    columns: true,
	    columnCount: true,
	    fillOpacity: true,
	    fontWeight: true,
	    opacity: true,
	    orphans: true,
	    widows: true,
	    zIndex: true,
	    zoom: true,
	    flex: true,
	    order: true,
	    flexGrow: true,
	    flexShrink: true,
	    uri: true
	  }, opts.ignore);

	  function replacer(match) {
	    var is0 = parseInt(match) === 0,
	        hasTimeUnit = /^m?s$/.test(opts.unit);

	    if (is0 && !hasTimeUnit) {
	      return match;
	    } else {
	      return match.replace(/\d+/, function (num) {
	        return num * opts.scale + opts.unit;
	      });
	    }
	  }

	  function transformDecl(key, val) {
	    var res = val;
	    if (!opts.ignore[key]) {
	      if ((0, _isType.isString)(val)) {
	        var parts = val.split(' ').filter(function (item) {
	          return item !== '';
	        });

	        for (var i = 0; i < parts.length; i++) {
	          var isColor = /#[0-9a-fA-F]+/.test(parts[i]),
	              hasParenths = /\w\(.*\)/.test(parts[i]);

	          if (!hasParenths && !isColor) {
	            parts[i] = parts[i].replace(/\d+(\s|\/|,|$)/g, replacer);
	          }
	        }

	        res = parts.join(' ');
	      } else if ((0, _isType.isNumber)(val)) {
	        res = val * opts.scale + opts.unit;
	      }
	    }
	    return res;
	  }

	  function handleObject(style) {
	    var obj = {};
	    Object.entries(style).forEach(function (entry) {
	      var _entry = _slicedToArray(entry, 2),
	          key = _entry[0],
	          val = _entry[1];

	      obj[key] = transformDecl(key, val);
	    });
	    return obj;
	  }

	  function handleArray(style) {
	    var arr = [];
	    style.forEach(function (item, index) {
	      arr[index] = (0, _isType.isObject)(item) ? handleObject(item) : item;
	    });
	    return arr;
	  }

	  if ((0, _isType.isObject)(style)) {
	    return handleObject(style);
	  } else if ((0, _isType.isArray)(style)) {
	    return handleArray(style);
	  } else {
	    return style;
	  }
	}

	// 将style的值转为对象形式
	function assignStyle(style) {
	  if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	    return style;
	  }
	  var result = {};
	  if ((0, _isType.isArray)(style)) {
	    var styleObjs = style.filter(function (item) {
	      return (0, _isType.isObject)(item);
	    });
	    result = Object.assign.apply(Object, [{}].concat(_toConsumableArray(styleObjs)));
	  } else if ((0, _isType.isObject)(style)) {
	    result = _extends({}, style);
	  }
	  return result;
	}

	exports.default = { postUnit: postUnit, assignStyle: assignStyle };
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function theme(api, param, callback) {
	  try {
	    _universalWindvane2.default && _universalWindvane2.default.call2(api, param, function (e) {
	      if (e && typeof e === 'string') {
	        try {
	          e = JSON.parse(e);
	        } catch (error) {
	          callback && callback('');
	          return;
	        }
	      }
	      if (e.ret && e.ret.includes('HY_SUCCESS')) {
	        if (api.indexOf('ThemeID') > -1) {
	          callback && callback(e.themeid);
	        } else if (api.indexOf('Table') > -1) {
	          callback && callback(e.result);
	        } else {
	          callback && callback('');
	        }
	      } else {
	        callback && callback('');
	      }
	    }, function () {
	      callback && callback('');
	    });
	  } catch (error) {
	    callback && callback('');
	  }
	}
	function themeID(callback) {
	  theme('WVUIDarkModeBridge.getCurrentThemeID', {}, callback);
	}
	function themeTable(callback) {
	  theme('WVUIDarkModeBridge.getColorTokenTable', {}, callback);
	}
	exports.default = {
	  themeID: themeID,
	  themeTable: themeTable
	};
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 本地存储经纬度信息
	var longitude = '';
	var latitude = '';

	// 获取地理位置
	// 返回Promise, 数据结构：{longitude: '', latitude: ''}
	function getGeoLocation() {
	  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var enableDegrade = option.enableDegrade || false; // 是否开启站外H5降级
	  var timeout = option.timeout || 0; // 超时时间
	  return new Promise(function (resolve, reject) {
	    // 优先取缓存数据
	    if (longitude && latitude) {
	      resolve({
	        longitude: longitude,
	        latitude: latitude
	      });
	      return;
	    }
	    if (_browser2.default.isYouku || _browser2.default.isWindvane) {
	      // 获取经纬度Windvane文档： http://h5.alibaba-inc.com/api/WindVane-API.html#WVLocation-getLocation
	      var params = _extends({
	        // 是否获取高精度的位置
	        enableHighAcuracy: true, // 不知道是不是Windvane文档拼写错误还是故意的
	        enableHighAccuracy: true,
	        // 是否获取地址描述
	        address: false
	      }, option);
	      _universalWindvane2.default.call('WVLocation', 'getLocation', params, function (e) {
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {
	            reject();
	            return;
	          }
	        }
	        if (e.ret && e.ret == 'HY_SUCCESS') {
	          var coords = e.coords || {};
	          // 把结果缓存下来
	          longitude = coords.longitude;
	          latitude = coords.latitude;
	          resolve({
	            longitude: coords.longitude,
	            latitude: coords.latitude
	          });
	        } else {
	          reject();
	        }
	      }, function () {
	        if (enableDegrade) {
	          getCurrentPosition().then(function (res) {
	            resolve(res);
	          }).catch(function () {
	            reject();
	          });
	        } else {
	          reject();
	        }
	      });
	    } else {
	      if (enableDegrade) {
	        getCurrentPosition().then(function (res) {
	          resolve(res);
	        }).catch(function () {
	          reject();
	        });
	      } else {
	        reject();
	      }
	    }
	    if (timeout) {
	      // 超时直接返回空
	      setTimeout(function () {
	        reject();
	      }, timeout);
	    }
	  });
	}

	// H5下根据geolocation获取坐标，https访问下有效，用于H5降级，但是打开页面都有询问获取地理位置权限弹窗提示
	function getCurrentPosition() {
	  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return new Promise(function (resolve, reject) {
	    // 只支持H5
	    if (_universalEnv.isWeex) {
	      reject();
	      return;
	    }
	    // 优先取缓存数据
	    if (longitude && latitude) {
	      resolve({
	        longitude: longitude,
	        latitude: latitude
	      });
	      return;
	    }
	    var navigator = window.navigator;
	    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
	      navigator.geolocation.getCurrentPosition(function (e) {
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        var coords = e.coords || {};
	        longitude = coords.longitude;
	        latitude = coords.latitude;
	        resolve({
	          longitude: longitude,
	          latitude: latitude
	        });
	      }, function () {
	        reject();
	      }, _extends({
	        enableHighAccuracy: true
	      }, option));
	    } else {
	      reject();
	    }
	  });
	}

	exports.default = { getGeoLocation: getGeoLocation, getCurrentPosition: getCurrentPosition };
	module.exports = exports['default'];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _loadResource = __webpack_require__(91);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;


	if (_universalEnv.isWeb) {
	  if (urlSearchObj.devtool === 'vconsole') {
	    console.log('vconsole 开始加载！');
	    _loadResource2.default.loadScript('//g.alicdn.com/hollywood/hlw-assets/0.0.13/vconsole-3.3.4/vconsole.min.js').then(function () {
	      window.vConsole = new window.VConsole();
	      console.log('vconsole 加载完成！');
	    });
	  }
	  if (urlSearchObj.devtool === 'eruda') {
	    console.log('eruda 开始加载！');
	    _loadResource2.default.loadScript('//g.alicdn.com/hollywood/hlw-assets/0.0.13/eruda-2.1.0/eruda.min.js').then(function () {
	      window.eruda.init();
	      console.log('eruda 加载完成！');
	    });
	  }
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(45);

	var dom = _universalEnv.isWeex ? __webpack_require__(100) : null;

	var fontUrlMap = {
	  Akrobat: 'https://g.alicdn.com/ykvip_rax/assets/0.0.1/Akrobat-Bold.ttf',
	  'Akrobat-Bold': 'https://g.alicdn.com/ykvip_rax/assets/0.0.1/Akrobat-Bold.ttf'
	};

	// 加载自定义字体
	function loadFont(fontFamily, fontUrl) {
	  var url = fontUrl || fontUrlMap[fontFamily];
	  if (!fontFamily || !url) {
	    return;
	  }
	  if (_universalEnv.isWeex) {
	    dom.addRule('fontFace', {
	      fontFamily: fontFamily,
	      src: 'url("' + url + '")'
	    });
	  } else {
	    var fnCssSheet = function () {
	      var style = document.createElement('style');
	      style.type = 'text/css';
	      document.head.appendChild(style);
	      return style.sheet;
	    }();

	    (function fnCssStyle(_selector, _rules) {
	      fnCssSheet && fnCssSheet.insertRule(_selector + '{' + _rules + '}', 0);
	    })('@font-face', 'font-family: "' + fontFamily + '"; src: url("' + url + '") format("truetype");');
	  }
	}

	function loadAkrobat() {
	  loadFont('Akrobat');
	}

	exports.default = { loadFont: loadFont, loadAkrobat: loadAkrobat };
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _requestMtop = __webpack_require__(77);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _url = __webpack_require__(44);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 加锁，防止连续点击
	var isLocked = false;

	// 上报完成任务
	function finishTask(actId, taskId) {
	  if (!actId || !taskId) {
	    return;
	  }
	  if (isLocked) {
	    return;
	  }
	  isLocked = true;
	  var params = {
	    actId: actId,
	    taskId: taskId,
	    appPackageKey: _browser2.default.isAndroid ? 'com.youku.phone' : 'com.youku.YouKu'
	  };
	  (0, _requestMtop2.default)({
	    api: 'mtop.youku.ykinfinite.taskservice.finishTask',
	    data: params,
	    ecode: 1
	  }).then(function (res) {
	    isLocked = false;
	    console.log('finishTask res: ' + JSON.stringify(res));
	  }).catch(function (err) {
	    isLocked = false;
	    console.error('finishTask err: ' + JSON.stringify(err));
	  });
	}

	// 根据URL的参数检查是否需要上报任务
	function checkFinishTask(url) {
	  if (!url) {
	    return;
	  }

	  var _parseUrlParam = (0, _url.parseUrlParam)(url),
	      _parseUrlParam$actId = _parseUrlParam.actId,
	      actId = _parseUrlParam$actId === undefined ? '' : _parseUrlParam$actId,
	      _parseUrlParam$taskId = _parseUrlParam.taskId,
	      taskId = _parseUrlParam$taskId === undefined ? '' : _parseUrlParam$taskId;

	  if (actId && taskId) {
	    finishTask(actId, taskId);
	  }
	}

	exports.default = { checkFinishTask: checkFinishTask, finishTask: finishTask };
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _getYoukuConfig = __webpack_require__(109);

	var _getYoukuConfig2 = _interopRequireDefault(_getYoukuConfig);

	var _getDeviceInfo = __webpack_require__(111);

	var _getDeviceInfo2 = _interopRequireDefault(_getDeviceInfo);

	var _pageInfo = __webpack_require__(112);

	var _pageInfo2 = _interopRequireDefault(_pageInfo);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _weexConfig = __webpack_require__(113);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _getPageVisibilityState = __webpack_require__(114);

	var _getPageVisibilityState2 = _interopRequireDefault(_getPageVisibilityState);

	var _getSystemInfo = __webpack_require__(115);

	var _getSystemInfo2 = _interopRequireDefault(_getSystemInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _extends({}, _browser2.default, {
	  weexConfig: _weexConfig2.default,
	  getPageVisibilityState: _getPageVisibilityState2.default,
	  pageInfo: _pageInfo2.default,
	  getYoukuConfig: _getYoukuConfig2.default,
	  getDeviceInfo: _getDeviceInfo2.default,
	  getSystemInfo: _getSystemInfo2.default
	});
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getYoukuConfig;

	var _universalEnv = __webpack_require__(45);

	var YoukuConfig = null;
	try {
	  YoukuConfig = __webpack_require__(110);
	} catch (e) {}

	// 将获取的优酷Config信息返回
	// Weex返回的信息，跟web之间兼容成本大，后续不推荐使用，使用统一的getDeviceInfo windvane接口。
	function getYoukuConfig() {
	  _universalEnv.isWeb && console.log('===== getYoukuConfig只有Weex容器支持，推荐使用getDeviceInfo');
	  return new Promise(function (resolve, reject) {
	    if (YoukuConfig && YoukuConfig.getConfig) {
	      YoukuConfig.getConfig(function (config) {
	        resolve(config);
	      });
	    } else {
	      reject();
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuConfig");

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDeviceInfo;

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDeviceInfo() {
	  return new Promise(function (resolve, reject) {
	    try {
	      _universalWindvane2.default.call('DYKBaseJSBridge', 'getDeviceInfo', {}, function (e) {
	        if (typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (e) {}
	        }
	        resolve(e);
	      }, function (e) {
	        reject(e);
	      });
	    } catch (e) {
	      reject(e);
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(45);

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _weexConfig = __webpack_require__(113);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 当前设备是否是Retina屏幕

	var isRetinaDevice = false;
	var devicePixelRatio = window.devicePixelRatio;
	if (devicePixelRatio >= 2) {
	  isRetinaDevice = true;
	}

	var urlSearchObj = _url2.default.urlSearchObj;

	var env = _weexConfig2.default && _weexConfig2.default.env;
	var platform = env ? env.platform : 'android';
	var isIOS = platform.toLowerCase() === 'ios';
	var isAndroid = !isIOS;
	var isInChannel = !!(_weexConfig2.default && _weexConfig2.default.instanceId);
	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	var isVipTab = urlSearchObj.isVipTab === 'true';

	var appPackageKey = '';
	// appPackageKey值，参考文档：https://yuque.antfin-inc.com/cummcf/df93x3/henue5#br61zw
	if (_browser2.default.isYouku) {
	  if (_browser2.default.isIPad) {
	    appPackageKey = 'com.youku.hd';
	  } else if (_browser2.default.isAndroid) {
	    appPackageKey = 'com.youku.phone';
	  } else if (_browser2.default.isIOS) {
	    appPackageKey = 'com.youku.YouKu';
	  }
	}

	var pageInfo = {
	  isRetinaDevice: isRetinaDevice,
	  urlSearchObj: urlSearchObj,
	  isIOS: _universalEnv.isWeex ? isIOS : _browser2.default.isIOS,
	  isAndroid: _universalEnv.isWeex ? isAndroid : _browser2.default.isAndroid,
	  isInChannel: _universalEnv.isWeex ? isInChannel : false,
	  isInPlayerTab: isInPlayerTab,
	  isVipTab: isVipTab,
	  weexConfig: _universalEnv.isWeex ? _weexConfig2.default : {},
	  // 页面是否可见，大作页默认不可见，pageShow时切换为可见
	  isPageVisible: !(isInChannel || isInPlayerTab || isVipTab),
	  appPackageKey: appPackageKey
	};

	!window.isServer && _YoukuEvent2.default.on('pageShow', function () {
	  pageInfo.isPageVisible = true;
	});
	!window.isServer && _YoukuEvent2.default.on('pageHide', function () {
	  pageInfo.isPageVisible = false;
	});

	// pageInfo是为了兼容旧逻辑，不再推荐使用
	exports.default = pageInfo;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var weexConfig = window.__weex_config__ && window.__weex_config__.weex && window.__weex_config__.weex.config || {};

	exports.default = weexConfig;
	module.exports = exports["default"];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPageVisibilityState;

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _weexConfig = __webpack_require__(113);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;

	var isInChannel = !!(_weexConfig2.default && _weexConfig2.default.instanceId);
	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	var isVipTab = urlSearchObj.isVipTab === 'true';

	// 这些投放场景下默认为不可见
	var isPageVisible = !(isInChannel || isInPlayerTab || isVipTab);
	!window.isServer && _YoukuEvent2.default.on('pageShow', function () {
	  isPageVisible = true;
	});
	!window.isServer && _YoukuEvent2.default.on('pageHide', function () {
	  isPageVisible = false;
	});

	function getPageVisibilityState() {
	  return isPageVisible;
	}
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = getSystemInfo;

	var _weexConfig = __webpack_require__(113);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _getYoukuConfig = __webpack_require__(109);

	var _getYoukuConfig2 = _interopRequireDefault(_getYoukuConfig);

	var _getDeviceInfo = __webpack_require__(111);

	var _getDeviceInfo2 = _interopRequireDefault(_getDeviceInfo);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * 获取系统信息
	 * systemInfo数据结构参考https://yuque.antfin-inc.com/ykarch/weex/youkuconfig
	 */
	function getSystemInfo() {
	  return new Promise(function (resolve, reject) {
	    // 优酷站内
	    if (_browser2.default.isYouku) {
	      // pad端暂无weex下getYoukuConfig方法只有H5的getDeviceInfo，需要单独处理
	      if (_browser2.default.isIPad) {
	        getFromDeviceInfo().then(function (res) {
	          return resolve(res);
	        }).catch(function (err) {
	          return reject(err);
	        });
	      } else {
	        // phone端weex容器
	        if (_universalEnv.isWeex) {
	          (0, _getYoukuConfig2.default)().then(function (youkuConfig) {
	            var systeminfo = youkuConfig.systeminfo,
	                etc = _objectWithoutProperties(youkuConfig, ['systeminfo']);

	            return resolve(_extends({}, etc, systeminfo, _browser2.default.isIOS ? { appPackageKey: getAppPackageKey() } : {}) // iOS下getYoukuConfig获取的appPackageKey值不对，覆盖为固定值
	            );
	          }).catch(function () {
	            getFromDeviceInfo().then(function (res) {
	              return resolve(res);
	            }).catch(function (err) {
	              return reject(err);
	            });
	          });
	        } else {
	          // H5容器
	          getFromDeviceInfo().then(function (res) {
	            return resolve(res);
	          }).catch(function (err) {
	            return reject(err);
	          });
	        }
	      }
	    } else {
	      // 不在优酷站内获取不到系统信息，返回空对象
	      return resolve({});
	    }
	  });
	}

	// 从DeviceInfo中获取systemInfo，用于降级
	function getFromDeviceInfo() {
	  return new Promise(function (resolve, reject) {
	    (0, _getDeviceInfo2.default)().then(function (deviceInfo) {
	      var _deviceInfo$ttid = deviceInfo.ttid,
	          ttid = _deviceInfo$ttid === undefined ? '' : _deviceInfo$ttid;
	      // 从ttid中获取应用版本

	      var _ttid$split = ttid.split('_'),
	          _ttid$split2 = _slicedToArray(_ttid$split, 3),
	          ver = _ttid$split2[2];

	      return resolve(_extends({}, deviceInfo, { os: _browser2.default.isIOS ? 'ios' : 'android' }, ver ? { ver: ver } : {}, getFromWeexConfig(), { appPackageKey: getAppPackageKey() // 包名
	      }));
	    }).catch(function () {
	      return reject({});
	    });
	  });
	}

	// 从weexConfig中获取部分systemInfo，weex容器下才有
	// 返回：btype、os、osVer、ver
	function getFromWeexConfig() {
	  // weex容器提供信息
	  var _ref$env = (_weexConfig2.default || {}).env,
	      env = _ref$env === undefined ? {} : _ref$env;
	  // 提取需要转换参数名的参数

	  var deviceModel = env.deviceModel,
	      osName = env.osName,
	      osVersion = env.osVersion,
	      appVersion = env.appVersion;

	  return _extends({}, deviceModel ? { btype: deviceModel } : {}, osName ? { os: osName.toLowerCase() } : {}, osVersion ? { osVer: osVersion } : {}, appVersion ? { ver: appVersion } : {});
	}

	// 获取appPackageKey，用于H5场景
	function getAppPackageKey() {
	  var appPackageKey = '';
	  // appPackageKey值，参考文档：https://yuque.antfin-inc.com/cummcf/df93x3/henue5#br61zw
	  if (_browser2.default.isYouku) {
	    if (_browser2.default.isIPad) {
	      appPackageKey = 'com.youku.hd';
	    } else if (_browser2.default.isAndroid) {
	      appPackageKey = 'com.youku.phone';
	    } else if (_browser2.default.isIOS) {
	      appPackageKey = 'com.youku.YouKu';
	    }
	  }
	  return appPackageKey;
	}
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  YoukuEvent: _YoukuEvent2.default
	};
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(45);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _webJumpTo = __webpack_require__(118);

	var _webJumpTo2 = _interopRequireDefault(_webJumpTo);

	var _weexJumpTo = __webpack_require__(119);

	var _weexJumpTo2 = _interopRequireDefault(_weexJumpTo);

	var _openInYouku = __webpack_require__(123);

	var _openInYouku2 = _interopRequireDefault(_openInYouku);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  openInYouku: _openInYouku2.default,
	  setAfterJumpDownloadUrl: _webJumpTo2.default.setAfterJumpDownloadUrl,
	  jumpTo: _universalEnv.isWeex ? _weexJumpTo2.default : _webJumpTo2.default.jumpTo
	};
	module.exports = exports['default'];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _util = __webpack_require__(75);

	var _util2 = _interopRequireDefault(_util);

	var _closePage = __webpack_require__(92);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(96);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _tracker = __webpack_require__(33);

	var _universalEnv = __webpack_require__(45);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _loadResource = __webpack_require__(91);

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageStorage = __webpack_require__(88);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _finishTask = __webpack_require__(107);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var supportedJumpTypes = ['url', 'http', 'video', 'show', 'scheme'];
	var yingyongbaoLink = '//a.app.qq.com/o/simple.jsp?pkgname=com.youku.phone';
	var universalLink = '//acz-jump.youku.com/wow/ykpage/act/ulink';
	// const commonDownloadPage = 'https://h5.m.youku.com//ju/download.html?refer=' + refer;
	var commonDownloadPage = 'https://hudong.vip.youku.com/act/download.html';

	var isAliPayMiniApp = _browser2.default.isAlipayMiniApp || false;
	isAliPayMiniApp && (universalLink = '//m.youku.com/download');
	if (_universalEnv.isWeb && (_browser2.default.isAlipayMiniApp || _browser2.default.isTaobaoMiniApp || _browser2.default.isYoukuMini)) {
	  (0, _loadResource.loadScript)('https://appx/web-view.min.js');
	}

	var isWeixinMiniApp = false;
	if (_universalEnv.isWeb && _browser2.default.isWeixin) {
	  (0, _loadResource.loadScript)('https://res.wx.qq.com/open/js/jweixin-1.3.2.js').then(function () {
	    window.wx.miniProgram.getEnv(function (res) {
	      isWeixinMiniApp = res.miniprogram;
	      isWeixinMiniApp && (universalLink = '//m.youku.com/download');
	    });
	  });
	}

	if (_browser2.default.isToutiaoMiniApp) {
	  (0, _loadResource.loadScript)('https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js');
	}

	var checkIfHttpUrl = _util2.default.checkIfHttpUrl,
	    checkIfWeexUrl = _util2.default.checkIfWeexUrl,
	    checkIfPlayUrl = _util2.default.checkIfPlayUrl,
	    checkIfLiveUrl = _util2.default.checkIfLiveUrl,
	    parsePlayUrl = _util2.default.parsePlayUrl,
	    mergeUrlSearch = _util2.default.mergeUrlSearch,
	    genVideoUrl = _util2.default.genVideoUrl,
	    genShowUrl = _util2.default.genShowUrl,
	    parseUrlParam = _util2.default.parseUrlParam,
	    urlSearchObj = _util2.default.urlSearchObj,
	    getCookie = _util2.default.getCookie;


	function empty() {}

	// let spmab = '';
	// function getSPMAB() {
	//   if (spmab) {
	//     return spmab;
	//   }
	//   const spmMeta = document.querySelector('meta[name=spm-id]');
	//   if (spmMeta) {
	//     spmab = spmMeta.getAttribute('content');
	//   } else {
	//     const spmaMeta = document.querySelector('meta[name=data-spm]');
	//     const spmb =
	//       document.body && document.body.dataset && document.body.dataset.spm;
	//     if (spmaMeta && spmb) {
	//       const spma = spmaMeta.getAttribute('content');
	//       spmab = `${spma}.${spmb}`;
	//     }
	//   }
	//   return spmab;
	// }

	var from = urlSearchObj.from,
	    refer = urlSearchObj.refer,
	    sharekey = urlSearchObj.sharekey,
	    calltype = urlSearchObj.calltype,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm,
	    xft_meta_id = urlSearchObj.xft_meta_id,
	    bizfrom = urlSearchObj.bizfrom;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	/**
	  参数attrObj示例如下：
	  {
	    posId
	    posText
	    jumpType
	    jumpUrl
	    videoId
	    playlistId
	    callType
	  }
	 */
	function jumpTo(attrObj, autoOpen) {
	  if (supportedJumpTypes.indexOf(attrObj.jumpType) === -1) {
	    // 不支持的跳转类型
	    return;
	  }
	  var spm = (0, _tracker.getSPM)(attrObj.posId || 'unknown.unknown');
	  var scm = encodeURIComponent(attrObj && attrObj.scm || (0, _tracker.getSCM)(attrObj));
	  if (/http|scheme/.test(attrObj.jumpType)) {
	    attrObj.jumpType = 'url';
	  }
	  // 埋点相关的一些url参数
	  var trackParam = { spm: spm, scm: scm, from: from, refer: refer, sharekey: sharekey, xft_meta_id: xft_meta_id };
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (trackParam['en_spm'] = enSpm || spm);
	  (enScm || scm) && (trackParam['en_scm'] = enScm || scm);
	  enId && (trackParam['en_id'] = enId);
	  var finalUrl = '';
	  if (attrObj.jumpType === 'url' && attrObj.jumpUrl) {
	    // url添加埋点参数
	    finalUrl = mergeUrlSearch(attrObj.jumpUrl, _extends({}, trackParam, {
	      isNeedBaseImage: 1
	    }));
	  }
	  if ((attrObj.jumpType === 'video' || attrObj.jumpType === 'show') && attrObj.videoId) {
	    // 转成视频播放地址
	    var videoUrl = genVideoUrl(attrObj.videoId, attrObj.playlistId);
	    finalUrl = mergeUrlSearch(videoUrl, _extends({}, trackParam, { isNeedBaseImage: 1 }));
	  }
	  if (attrObj.jumpType === 'show' && attrObj.showId) {
	    // 转成节目播放地址
	    var showUrl = genShowUrl(attrObj.showId);
	    finalUrl = mergeUrlSearch(showUrl, _extends({}, trackParam, { isNeedBaseImage: 1 }));
	  }
	  if (!finalUrl) {
	    return;
	  }
	  // 根据跳转url的参数检查是否上报任务
	  (0, _finishTask.checkFinishTask)(finalUrl);

	  if (/^hollywood/.test(attrObj.jumpUrl)) {
	    // 好莱坞提供的跳转类型，通过url支持各种跳转类型
	    var questionMarkPosition = attrObj.jumpUrl.indexOf('?') !== -1 ? attrObj.jumpUrl.indexOf('?') : attrObj.jumpUrl.length;
	    var action = attrObj.jumpUrl.substring(12, questionMarkPosition);
	    if (action === 'scrollToModule') {
	      var _parseUrlParam = parseUrlParam(attrObj.jumpUrl),
	          moduleName = _parseUrlParam.moduleName;
	      // 获取沉浸式导航高度


	      var topBarHeight = _pageStorage2.default.getItem('topBarHeight') || 0;
	      // 滚动偏移量，减去沉浸式导航高度，向上偏移时weex下为负数，H5下为正数，值为750宽度下的大小

	      _YoukuEvent2.default.fire('mainViewScrollToModule', { moduleName: moduleName, offset: topBarHeight });
	    } else if (action === 'closePage') {
	      (0, _closePage2.default)();
	    } else if (action === 'sharePage') {
	      _YoukuEvent2.default.fire('doPageShare');
	    } else if (action === 'showCommonDialog') {
	      var _parseUrlParam2 = parseUrlParam(attrObj.jumpUrl),
	          _moduleName = _parseUrlParam2.moduleName;

	      _YoukuEvent2.default.fire('showCommonDialog', { moduleName: _moduleName });
	    }
	    return;
	  }
	  // getGlobalCallType每次都执行而不是缓存，这样即使全局设置发生变化也能生效
	  var callType = attrObj.callType || +calltype || 3;
	  // IOS下是否强制使用scheme跳转，默认IOS是使用universallink跳转
	  var useScheme = _browser2.default.isUC || _browser2.default.isQQBrowser || attrObj.useScheme === 'true';
	  if (_browser2.default.isYoukuMini && /^youku:\/\/miniapp\/openMiniApp/.test(finalUrl)) {
	    var params = parseUrlParam(finalUrl);
	    var parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	    if (parentAppId == params.appId) {
	      // 跳转优酷小程序内部页面
	      var page = params.page && decodeURIComponent(params.page);
	      window.my && window.my.navigateTo({
	        url: '/' + (page || 'pages/home/index')
	      });
	    } else {
	      // 跳转到小程序外部页面
	      AlipayJSBridge && AlipayJSBridge.call('startApp', {
	        appId: '20000069',
	        param: {
	          url: finalUrl
	        }
	      });
	    }
	  } else if (_browser2.default.isYouku) {
	    var urlParams = parseUrlParam(attrObj.jumpUrl);
	    // 是否使用nativeOpen，从跳转url中获取useNativeOpen参数，为兼容ios播放页广告位页面location.href无法跳转的bug，正常情况下无需使用
	    var useNativeOpen = urlParams.useNativeOpen === 'true';
	    // removeStackTopPage作用是跳转时移除当前页面，调用nativeOpen传的参数，ios播放页广告位页面使用NativeOpen时还需要添加removeStackTopPage参数才能跳转
	    var removeStackTopPage = urlParams.removeStackTopPage === 'true';
	    // 优酷app内
	    if (checkIfWeexUrl(finalUrl)) {
	      // weex url转成scheme地址，不然安卓下统一路由经常出现跳源码的情况
	      finalUrl = 'youku://weex?url=' + encodeURIComponent(finalUrl);
	    }
	    if (+callType === 4 || !checkIfHttpUrl(finalUrl)) {
	      // callType=4 && weex地址 && scheme地址；用location.href打开
	      if (/^tbopen/.test(finalUrl)) {
	        // tbopen的url
	        (0, _isAppInstalled2.default)({
	          ios: 'taobao://',
	          android: 'com.taobao.taobao'
	        }).then(function (result) {
	          if (result === 'INSTALLED') {
	            // 如果已经安装，直接用scheme打开
	            window.location.href = finalUrl;
	          } else {
	            // 否则解析出tbopen里的h5Url并跳转
	            var _urlParams = parseUrlParam(attrObj.jumpUrl);
	            var h5Url = _urlParams.h5Url;

	            jumpTo(_extends({}, attrObj, {
	              jumpType: 'url',
	              jumpUrl: decodeURIComponent(h5Url)
	            }));
	          }
	        });
	      } else {
	        if (useNativeOpen) {
	          var _params = _extends({
	            url: finalUrl
	          }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	          // 使用nativeOpen接口跳转，如果跳转失败使用location.href兼容
	          nativeOpen(_params, empty, function () {
	            window.location.href = finalUrl;
	          });
	        } else {
	          window.location.href = finalUrl;
	        }
	      }
	    } else if (checkIfPlayUrl(finalUrl) || checkIfLiveUrl(finalUrl)) {
	      // 播放页或直播页走nativeOpen
	      // 其实也可走location.href，但是老版本的大作页没有走统一路由，会在当前打开，保险起见先用nativeOpen
	      var _params2 = _extends({
	        url: finalUrl
	      }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	      nativeOpen(_params2);
	    } else {
	      // 普通的http地址，转成scheme方式在新容器打开
	      // 安卓需要编码，不然参数会丢失，ios不能编码，编码会白页。。。。。。
	      _browser2.default.isAndroid && (finalUrl = encodeURIComponent(finalUrl));
	      finalUrl = 'youku://http?action=http&url=' + finalUrl;
	      if (useNativeOpen) {
	        var _params3 = _extends({
	          url: finalUrl
	        }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	        // 使用nativeOpen接口跳转，如果跳转失败使用location.href兼容
	        nativeOpen(_params3, empty, function () {
	          window.location.href = finalUrl;
	        });
	      } else {
	        window.location.href = finalUrl;
	      }
	    }
	  } else if (_browser2.default.isTaobao && (checkIfPlayUrl(finalUrl) || _browser2.default.isTaobaoMiniApp)) {
	    var taobaoRealUrl = finalUrl;
	    var playerParams = '';

	    // 播放页需要修改url
	    if (checkIfPlayUrl(finalUrl)) {
	      var parseObj = parsePlayUrl(finalUrl);
	      var vid = parseObj.vid,
	          showid = parseObj.showid;

	      playerParams = getAlipayPlayParams({
	        jumpType: vid ? 'video' : 'show',
	        videoId: vid,
	        showId: showid
	      });
	      var playerUrl = 'https://t.youku.com/yep/page/m/youkuh5player?isNeedBaseImage=1&disableNav=YES&isLogin=true&' + playerParams;
	      taobaoRealUrl = playerUrl;
	      window.location.href = taobaoRealUrl;
	    }

	    if (_browser2.default.isTaobaoMiniApp) {
	      my.call('navigateToOutside', {
	        url: taobaoRealUrl
	      });
	    }
	  } else if (_browser2.default.isAlipay && !isAliPayMiniApp && checkIfPlayUrl(finalUrl)) {
	    // 支付宝h5页面跳转小程序播放页
	    var _parseObj = parsePlayUrl(finalUrl);
	    var _vid = _parseObj.vid,
	        _showid = _parseObj.showid;

	    jumpToAlipayPlayPage({
	      jumpType: _vid ? 'video' : 'show',
	      videoId: _vid,
	      showId: _showid
	    }, true);
	  } else if (_browser2.default.isAlipay && !isAliPayMiniApp && checkIfLiveUrl(finalUrl) && window.AlipayJSBridge) {
	    // 支付宝非小程序内跳转直播页面
	    // 暂时使用pushWindow方法并添加newProcessPool=YES参数解决webview中直播播放器播放的问题
	    // pushWindow使用文档：http://myjsapi.alipay.com/jsapi/context/push-window.html
	    window.AlipayJSBridge.call('pushWindow', {
	      url: mergeUrlSearch(finalUrl, { newProcessPool: 'YES' })
	    });
	  } else if (isAliPayMiniApp && (checkIfPlayUrl(finalUrl) || finalUrl.indexOf('alipays://platformapi/startapp') === 0)) {
	    if (checkIfPlayUrl(finalUrl)) {
	      // 支付宝小程序播放页调小程序播放页
	      var _parseObj2 = parsePlayUrl(finalUrl);
	      var _vid2 = _parseObj2.vid,
	          _showid2 = _parseObj2.showid;

	      jumpToAlipayPlayPage({
	        jumpType: _vid2 ? 'video' : 'show',
	        videoId: _vid2,
	        showId: _showid2
	      });
	    } else if (finalUrl.indexOf('alipays://platformapi/startapp' === 0)) {
	      var _params4 = parseUrlParam(finalUrl);

	      //跳转优酷视频支付宝小程序内部页面
	      //判断目标小程序和当前小程序是否一致
	      var _parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	      if (_parentAppId === '2018040402504128' && _params4.appId === '2018040402504128') {
	        //小程序Tab页面
	        var tabPageList = ['pages/home/index', 'pages/entire/entire', 'pages/program-list/program-list', 'pages/account/account'];
	        try {
	          var _page = _params4.page && decodeURIComponent(_params4.page);
	          var noParamsPage = _page && _page.split('?')[0];
	          if (!_page || tabPageList && tabPageList.indexOf(noParamsPage) > -1) {
	            //路径后不能带参数
	            window.my && window.my.switchTab({
	              url: '/' + (noParamsPage || 'pages/home/index')
	            });
	          } else {
	            //非Tab页面
	            window.my && window.my.navigateTo({
	              url: '/' + _page
	            });
	          }
	        } catch (err) {}
	      } else if (_parentAppId === _params4.appId) {
	        // 跳转到本身支付宝小程序
	        var _page2 = _params4.page && decodeURIComponent(_params4.page);
	        window.my && window.my.navigateTo({
	          url: '/' + _page2
	        });
	      } else {
	        // 跳转到其他支付宝小程序
	        AlipayJSBridge.call('startApp', {
	          appId: '20000067',
	          param: {
	            url: finalUrl
	          }
	        });
	      }
	    }
	  } else if (isWeixinMiniApp && checkIfPlayUrl(finalUrl)) {
	    // 微信小程序播放页调小程序播放页
	    var paramStr = getMiniAppPlayParams(finalUrl);
	    // 跳转小程序播放页
	    window.wx.miniProgram.navigateTo({
	      url: '../play/play?' + paramStr
	    });
	  } else if (_browser2.default.isToutiaoMiniApp && checkIfPlayUrl(finalUrl)) {
	    var _paramStr = getMiniAppPlayParams(finalUrl);
	    // 头条小程序播放页跳转小程序播放页
	    tt.miniProgram.navigateTo({
	      url: '/pages/play/index?' + _paramStr
	    });
	  } else {
	    if ((+callType === 3 || +callType === 5) && checkIfHttpUrl(finalUrl)) {
	      if (bizfrom && checkIfPlayUrl(finalUrl)) {
	        // 站外跳转到m站播放页时，透传页面bizfrom参数用于免广等配置
	        finalUrl = mergeUrlSearch(finalUrl, { bizfrom: bizfrom });
	      }
	      // m.youku.com/video/ 替换成 m.youku.com/alipay_video/ 防止自动换端
	      finalUrl = finalUrl.replace(/^https:\/\/m.youku.com\/video\//, 'https://m.youku.com/alipay_video/').replace('_wx_tpl', '_wx_share_tpl');
	      if (+callType === 3) {
	        window.location.href = finalUrl;
	      } else {
	        window.open(finalUrl);
	      }
	    } else {
	      var ucodeConfig = attrObj.ucodeConfig || {};
	      ucodeConfig.usecreturl && (ucodeConfig.usecreturl = encodeURIComponent(ucodeConfig.usecreturl));
	      ucodeConfig.usecretpicurl && (ucodeConfig.usecretpicurl = encodeURIComponent(ucodeConfig.usecretpicurl));
	      youkuOpen(finalUrl, useScheme,
	      // 不播放开屏广告，增加唤端落地率
	      _extends({}, trackParam, { adv: 'no' }), autoOpen, ucodeConfig);
	    }
	  }
	}

	// 优酷站内使用的跳转方法
	function nativeOpen(params) {
	  var successCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : empty;
	  var failureCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : empty;

	  // 其他情况直接打开，播放页和直播页会走统一路由跳转到native地址
	  _browser2.default.isWindvane && _universalWindvane2.default && _universalWindvane2.default.call('DYKBaseJSBridge', 'nativeOpen', params, successCallback, failureCallBack);
	}

	// 站外唤端方法
	function youkuOpen(mergedUrl, useScheme, extraParam, autoOpen, ucodeConfig) {
	  var url = mergedUrl;
	  if (!url) {
	    return;
	  }
	  if (/^ykshortvideo/.test(url)) {
	    // 站外优酷
	    url = 'youku://ykshortvideo?url=' + encodeURIComponent(url);
	  }
	  var canYoukuOpen = /^http|^youku/.test(url);
	  if (!canYoukuOpen) {
	    // 不可优酷打开：非youku://开头的scheme地址
	    window.location.href = url;
	    return;
	  }
	  // 自动唤端强制使用scheme
	  if (_browser2.default.isIOS && !useScheme && !autoOpen) {
	    // ios默认用universallink打开
	    universalOpen(url, extraParam, ucodeConfig);
	  } else {
	    // 用schema打开
	    schemeOpen(url, extraParam, autoOpen, ucodeConfig);
	  }
	}

	// universallink打开方式
	function universalOpen(url, extraParam) {
	  var ucodeConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (_browser2.default.isAndroid) {
	    return;
	  }
	  if (checkIfHttpUrl(url)) {
	    if (checkIfPlayUrl(url)) {
	      // 播放页地址，需要解析出url内的videoid、showid、playlistid的信息，然后通过play的路由打开。
	      // 否则，使用http的方式打开IOS会有中间空白容器，安卓会在站内打开H5播放页。
	      window.location.href = mergeUrlSearch(universalLink, _extends({
	        action: 'play'
	      }, parsePlayUrl(url), extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }, ucodeConfig));
	    } else {
	      // 普通http地址或weex地址
	      window.location.href = mergeUrlSearch(universalLink, _extends({
	        action: checkIfWeexUrl(url) ? 'weex' : 'http',
	        url: encodeURIComponent(url)
	      }, extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }, ucodeConfig));
	    }
	  } else {
	    // scheme地址解析成为universallink地址后跳转
	    var questionMarkPosition = url.indexOf('?') !== -1 ? url.indexOf('?') : url.length;
	    var action = url ? url.substring(url.indexOf('youku://') + 8, questionMarkPosition) : '';
	    var params = parseUrlParam(url);
	    window.location.href = mergeUrlSearch(universalLink, _extends({
	      action: action
	    }, params, extraParam, {
	      cookieid: encodeURIComponent(getCookie('cna')),
	      refer_url: encodeURIComponent(window.location.href),
	      is_h5: 1,
	      callup_type: 'clk',
	      source: extraParam.spm,
	      ts: Date.now()
	    }, ucodeConfig));
	  }
	}

	// scheme打开方式
	function schemeOpen(originalUrl, extraParam, autoOpen, ucodeConfig) {
	  var url = originalUrl;
	  if (_browser2.default.isWeixin && _browser2.default.isIOS && !autoOpen) {
	    // ios微信强制用universallink的方式打开，因为scheme禁用了
	    // 自动唤端强制使用scheme
	    universalOpen(url, extraParam, ucodeConfig);
	    return;
	  }
	  if (checkIfHttpUrl(url)) {
	    if (checkIfPlayUrl(url)) {
	      // 播放页地址，需要解析出url内的videoid、showid、playlistid的信息，然后通过play的路由打开。
	      // 否则，使用http的方式打开IOS会有中间空白容器，安卓会在站内打开H5播放页。
	      url = mergeUrlSearch('youku://play', _extends({}, parsePlayUrl(url), extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: autoOpen ? 'auto' : 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }));
	    } else {
	      // 如果是普通http地址或者weex地址
	      var action = checkIfWeexUrl(url) ? 'weex' : 'http';
	      url = mergeUrlSearch('youku://' + action + '?action=' + action, _extends({
	        url: encodeURIComponent(url)
	      }, extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: autoOpen ? 'auto' : 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }));
	    }
	  } else {
	    url = mergeUrlSearch(url, _extends({}, extraParam, {
	      cookieid: encodeURIComponent(getCookie('cna')),
	      refer_url: encodeURIComponent(window.location.href),
	      is_h5: 1,
	      callup_type: autoOpen ? 'auto' : 'clk',
	      source: extraParam.spm,
	      ts: Date.now()
	    }));
	  }
	  if (_browser2.default.isWeixin && _browser2.default.isAndroid && !autoOpen) {
	    // 安卓应用宝打开
	    window.location.href = yingyongbaoLink + '&android_schema=' + encodeURIComponent(url);
	    return;
	  }

	  _universalWindvane2.default && _universalWindvane2.default.call('Base', 'isInstall', {
	    ios: 'youku://',
	    android: 'com.youku.phone'
	  }, function () {
	    window.location.href = url;
	  }, function (e) {
	    if (e.ret && (e.ret === 'HY_FAILED' || e.ret[0] === 'HY_FAILED')) {
	      // 判断未安装，非自动唤端时立即执行拉起下载或者跳下载页的操作
	      autoOpen || afterJump(ucodeConfig);
	    } else {
	      // 其他异常（不在windvane环境下或者windvane接口不存在），执行跳转
	      if (shouldUseIframeOpen()) {
	        iframeOpen(url);
	      } else {
	        window.location.href = url;
	      }
	      // 非自动唤端延迟检查页面visibility状态来执行后续操作
	      autoOpen || afterJump(ucodeConfig);
	    }
	  });
	}

	var iframe = void 0;
	// 某些app在未安装优酷的情况下使用location.href跳schema会跳空白页，需要用iframe的方式
	function iframeOpen(url) {
	  if (!iframe) {
	    iframe = document.createElement('iframe');
	    iframe.id = 'hollywood_iframe_' + Date.now();
	    iframe.frameborder = '0';
	    iframe.style.cssText = 'display:none;border:0;width:0;height:0;';
	    document.body.appendChild(iframe);
	  }
	  iframe.src = url;
	}

	// 配置需要用iframe跳转的情况
	function shouldUseIframeOpen() {
	  if (_browser2.default.isWeibo && _browser2.default.isAndroid) {
	    return true;
	  }
	  return false;
	}

	var startDownloadTimeout = null;
	var afterJumpDownloadUrl = '';
	function afterJump() {
	  var ucodeConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  startDownloadTimeout = setTimeout(function () {
	    var downloadPage = mergeUrlSearch(commonDownloadPage, ucodeConfig);
	    startDownloadTimeout = null;
	    if (_browser2.default.isAndroid) {
	      window.location.href = afterJumpDownloadUrl || downloadPage;
	    } else {
	      window.location.href = downloadPage;
	    }
	  }, 1500);
	}

	_universalEnv.isWeb && !window.isServer && document.addEventListener('visibilitychange', function () {
	  if (document.visibilityState === 'hidden') {
	    startDownloadTimeout && clearTimeout(startDownloadTimeout);
	  }
	});
	function setAfterJumpDownloadUrl(url) {
	  afterJumpDownloadUrl = url;
	}

	// 支付宝小程序站播放页的跳转方法
	function jumpToAlipayPlayPage(attrObj) {
	  var isH5ToAliPayMiniApp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var params = getAlipayPlayParams(attrObj);
	  if (isH5ToAliPayMiniApp) {
	    // 支付宝h5页面跳转小程序播放页
	    location.href = 'alipays://platformapi/startapp?appId=2018040402504128&page=pages/native-player/native-player?' + encodeURIComponent(params);
	  } else {
	    // 小程序套壳h5页跳转小程序播放页
	    // 判断当前小程序，跳转优酷视频小程序播放页
	    var parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	    if (parentAppId === '2018040402504128') {
	      // 原小程序套壳h5页跳转本身小程序的播放页
	      window.my && window.my.navigateTo({
	        url: '../native-player/native-player?' + params
	      });
	    } else {
	      // 其他小程序跳转到优酷视频小程序的播放页
	      window.AlipayJSBridge && window.AlipayJSBridge.call('startApp', {
	        appId: '20000067',
	        param: {
	          url: 'alipays://platformapi/startapp?appId=2018040402504128&page=pages/native-player/native-player?' + encodeURIComponent(params)
	        }
	      });
	    }
	  }
	}

	// 获取支付宝/淘宝播放页参数
	function getAlipayPlayParams(attrObj) {
	  var jumpType = attrObj.jumpType;

	  if (jumpType !== 'video' && jumpType !== 'show') {
	    return;
	  }
	  var obj = {}; // 播放参数

	  if (jumpType === 'video') {
	    obj.srcType = 0; // 会员鉴权类型 0是vid，1是showId
	    obj.videoId = attrObj.videoId; // videoId 和showId是并列情况 只传一种即可
	  }
	  if (jumpType === 'show') {
	    obj.srcType = 1; // 会员鉴权类型 0是vid，1是showId
	    obj.showId = attrObj.showId;
	  }

	  var params = '';
	  for (var key in obj) {
	    params += '&' + key + '=' + encodeURIComponent(obj[key]);
	  }
	  params = params.substring(1, params.length);
	  return params;
	}

	// 获取头条小程序和微信小程序播放页调小程序播放页的参数
	function getMiniAppPlayParams(finalUrl) {
	  var parseObj = parsePlayUrl(finalUrl);
	  var vid = parseObj.vid,
	      showid = parseObj.showid;

	  var obj = {}; // 播放参数
	  obj.title = ''; // 标题
	  obj.srcType = vid ? '0' : '1'; // 会员鉴权类型 0是vid，1是showId
	  vid && (obj.videoId = vid);
	  showid && (obj.showId = showid);
	  var params = [];
	  for (var key in obj) {
	    params.push(key + '=' + encodeURIComponent(obj[key]));
	  }
	  return params.join('&');
	}

	exports.default = { setAfterJumpDownloadUrl: setAfterJumpDownloadUrl, jumpTo: jumpTo };
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _url = __webpack_require__(44);

	var _url2 = _interopRequireDefault(_url);

	var _closePage = __webpack_require__(92);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(96);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _env = __webpack_require__(108);

	var _env2 = _interopRequireDefault(_env);

	var _tracker = __webpack_require__(33);

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageStorage = __webpack_require__(88);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _finishTask = __webpack_require__(107);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mergeUrlSearch = _url2.default.mergeUrlSearch,
	    parseUrlParam = _url2.default.parseUrlParam,
	    checkIfPlayUrl = _url2.default.checkIfPlayUrl,
	    checkIfHttpUrl = _url2.default.checkIfHttpUrl,
	    urlSearchObj = _url2.default.urlSearchObj;


	var YoukuPage = null;
	try {
	  YoukuPage = __webpack_require__(95);
	} catch (e) {}
	var navigator = null;
	try {
	  navigator = __webpack_require__(120);
	} catch (e) {
	  navigator = null;
	}

	var pwNavigator = null;
	try {
	  pwNavigator = __webpack_require__(121);
	} catch (e) {
	  pwNavigator = null;
	}

	var VICWeexPluginModule = null;
	try {
	  VICWeexPluginModule = __webpack_require__(122);
	} catch (e) {}

	var from = urlSearchObj.from,
	    refer = urlSearchObj.refer,
	    sharekey = urlSearchObj.sharekey,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	var lastJumpTime = 0;
	function jumpTo(params) {
	  if (!(YoukuPage && YoukuPage.jumpTo) || !(params && params.jumpType)) {
	    // 跳转 module load 失败，或者没有跳转类型
	    return;
	  }
	  var currentJumpTime = Date.now();
	  if (currentJumpTime - lastJumpTime < 500) {
	    // 避免多次重复点击
	    return;
	  }
	  lastJumpTime = currentJumpTime;

	  var _ref = params || {},
	      jumpType = _ref.jumpType,
	      jumpUrl = _ref.jumpUrl,
	      videoId = _ref.videoId,
	      showId = _ref.showId,
	      playlistId = _ref.playlistId,
	      action = _ref.action,
	      posId = _ref.posId;

	  var spm = (0, _tracker.getSPM)(posId);
	  var scm = encodeURIComponent(params && params.scm || (0, _tracker.getSCM)(params));
	  // 埋点相关的一些url参数
	  var trackParam = { spm: spm, scm: scm, from: from, refer: refer, sharekey: sharekey };
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (trackParam['en_spm'] = enSpm || spm);
	  (enScm || scm) && (trackParam['en_scm'] = enScm || scm);
	  enId && (trackParam['en_id'] = enId);

	  // 根据跳转url的参数检查是否上报任务
	  (0, _finishTask.checkFinishTask)(jumpUrl);

	  if ((jumpType === 'http' || jumpType === 'scheme' || jumpType === 'url') && jumpUrl) {
	    var value = jumpUrl.indexOf('youku://page/feed') === 0 ? mergeUrlSearch(jumpUrl, { spm: spm }) : mergeUrlSearch(jumpUrl, trackParam);
	    if (/^youku|^http|^ykshortvideo/.test(value)) {
	      var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	      var isPlayerUrl = checkIfPlayUrl(value);
	      if (_env2.default.isIOS && isInPlayerTab && isPlayerUrl) {
	        // 播放页tab & IOS & 播放页地址，增加isNeedSmallCardRequest参数来实现小刷新
	        value = mergeUrlSearch(value, { isNeedSmallCardRequest: 1 });
	      }
	      // http地址
	      var isHttpUrl = checkIfHttpUrl(value);
	      // 使用半屏打开
	      var useHalfView = urlSearchObj.calltype == 6;
	      if (isHttpUrl && !isPlayerUrl && useHalfView) {
	        // ios播放页tab，如果设置calltype=6，非播放页的http地址，拉起半屏打开
	        VICWeexPluginModule && VICWeexPluginModule.showVerticalHalfWebview && VICWeexPluginModule.showVerticalHalfWebview(value);
	      } else {
	        // 优酷的scheme或者http地址
	        YoukuPage.jumpTo({
	          action: {
	            type: 'JUMP_TO_URL',
	            extra: { value: value }
	          }
	        });
	      }
	    } else if (/^shuqiyk/.test(value)) {
	      // 2019春节战役针对书旗优酷站内scheme的跳转兼容
	      // 理论上其他url也可以用，但为了影响最小只针对书旗处理
	      // 后续验证评估是否全切为下面某种方式
	      if (pwNavigator && pwNavigator.navigate) {
	        // 星球提供的跳转，播放页半屏或者播放页tab使用，通用容器也可用
	        pwNavigator.navigate(value);
	      } else if (navigator && navigator.push) {
	        // 站内跳转
	        navigator.push({ url: value, animated: false }, function () {});
	      }
	    } else if (/^hollywood/.test(value)) {
	      // 好莱坞提供的跳转类型，通过url支持各种跳转类型
	      var questionMarkPosition = jumpUrl.indexOf('?') !== -1 ? jumpUrl.indexOf('?') : jumpUrl.length;
	      var _action = jumpUrl.substring(12, questionMarkPosition);
	      if (_action === 'scrollToModule') {
	        var _parseUrlParam = parseUrlParam(jumpUrl),
	            moduleName = _parseUrlParam.moduleName;
	        // 获取沉浸式导航高度


	        var topBarHeight = _pageStorage2.default.getItem('topBarHeight') || 0;
	        // 滚动偏移量，减去沉浸式导航高度，向上偏移时weex下为负数，H5下为正数，值为750宽度下的大小

	        _YoukuEvent2.default.fire('mainViewScrollToModule', { moduleName: moduleName, offset: -topBarHeight });
	      } else if (_action === 'closePage') {
	        (0, _closePage2.default)();
	      } else if (_action === 'sharePage') {
	        _YoukuEvent2.default.fire('doPageShare');
	      } else if (_action === 'showCommonDialog') {
	        var _parseUrlParam2 = parseUrlParam(jumpUrl),
	            _moduleName = _parseUrlParam2.moduleName;

	        _YoukuEvent2.default.fire('showCommonDialog', { moduleName: _moduleName });
	      }
	    } else if (/^tbopen/.test(value)) {
	      // tbopen的url
	      (0, _isAppInstalled2.default)({
	        ios: 'taobao://',
	        android: 'com.taobao.taobao'
	      }).then(function (result) {
	        if (result === 'INSTALLED') {
	          // 如果已经安装，直接用scheme打开
	          navigator && navigator.open && navigator.open({ url: value, animated: false }, function () {});
	        } else {
	          // 否则解析出tbopen里的h5Url并跳转
	          var urlParams = parseUrlParam(jumpUrl);
	          var h5Url = urlParams.h5Url;

	          lastJumpTime = 0;
	          jumpTo(_extends({}, params, {
	            jumpType: 'url',
	            jumpUrl: decodeURIComponent(h5Url)
	          }));
	        }
	      }).catch(function () {});
	    } else {
	      // 其他APP的地址
	      navigator && navigator.open && navigator.open({ url: value, animated: false }, function () {});
	    }
	  }
	  if (jumpType === 'video' && videoId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_VIDEO',
	        extra: { value: videoId }
	      }
	    });
	  }
	  if (jumpType === 'show' && showId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_SHOW',
	        extra: { value: showId, videoId: videoId || '' }
	      }
	    });
	  }
	  if (jumpType === 'playlist' && videoId && playlistId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_PLAY_LIST',
	        extra: { value: playlistId, videoId: videoId }
	      }
	    });
	  }
	  if (jumpType === 'action' && action) {
	    if (action.type === 'JUMP_TO_URL' && action.extra && action.extra.value) {
	      var _value = action.extra.value.indexOf('youku://page/feed') === 0 ? mergeUrlSearch(action.extra.value, { spm: spm }) : mergeUrlSearch(action.extra.value, trackParam);
	      var newAction = _extends({}, action, {
	        extra: _extends({}, action.extra, {
	          value: _value
	        })
	      });
	      YoukuPage.jumpTo({ action: newAction });
	    } else {
	      YoukuPage.jumpTo({ action: action });
	    }
	  }
	}

	exports.default = jumpTo;
	module.exports = exports['default'];

/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/navigator");

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/pw-navigator");

/***/ },
/* 122 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/VICWeexPluginModule");

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = openInYouku;

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _webJumpTo = __webpack_require__(118);

	var _webJumpTo2 = _interopRequireDefault(_webJumpTo);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function openInYouku(url) {
	  if (_universalEnv.isWeex || _browser2.default.isYouku) {
	    return;
	  }
	  _webJumpTo2.default.jumpTo({
	    jumpType: 'url',
	    jumpUrl: url || window.location.href,
	    posId: 'auto.call',
	    posText: '自动.唤端',
	    callType: 2
	  }, true);
	}
	module.exports = exports['default'];

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _loadResource = __webpack_require__(91);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _universalEnv = __webpack_require__(45);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 通用分享面板
	function shareWithParams(params, callback) {
	  try {
	    _universalWindvane2.default && _universalWindvane2.default.call('WVBehavioursBridge', 'showShareView', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	// 调用直接分享接口
	function shareOpenPlatformWithParams(params, callback) {
	  try {
	    _universalWindvane2.default && _universalWindvane2.default.call('WVBehavioursBridge', 'shareSendContent', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	// 获取outputType支持的对应渠道接口
	function getSharePlatformListIds(params, callback) {
	  try {
	    _universalWindvane2.default && _universalWindvane2.default.call('WVBehavioursBridge', 'shareSupportedOpenPlatformIds', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	function setPageShare(params) {
	  if (_universalEnv.isWeex || _browser2.default.isYouku) {
	    _universalWindvane2.default && _universalWindvane2.default.call('DYKBaseJSBridge', 'passShareInfoToNative', params, function () {}, function (e) {
	      console.log(JSON.stringify(e));
	    });
	  } else {
	    var config = {
	      title: params.titleText || document.title || '优酷-这世界很酷',
	      timelineTitle: params.titleText || document.title || '优酷-这世界很酷',
	      desc: params.descText || '优酷-这世界很酷',
	      link: params.url || window.location.href || '',
	      shareImage: params.thumbnailUrl || 'https://gw.alicdn.com/tfs/TB1HtifqAPoK1RjSZKbXXX1IXXa-200-200.png'
	    };
	    if (_browser2.default.isWechat) {
	      _loadResource2.default.loadScript('//res.wx.qq.com/open/js/jweixin-1.6.0.js').then(function () {
	        return _loadResource2.default.loadScript('//g.alicdn.com/ku/lib-share/0.0.11/index.js');
	      }).then(function () {
	        window.shareH5 && window.shareH5(config);
	      });
	    }
	    if (_browser2.default.isDingding) {
	      _loadResource2.default.loadScript('//g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js').then(function () {
	        return _loadResource2.default.loadScript('//g.alicdn.com/ku/lib-share/0.0.11/index.js');
	      }).then(function () {
	        window.shareH5 && window.shareH5(config);
	      });
	    }
	  }
	}

	exports.default = {
	  setPageShare: setPageShare,
	  shareWithParams: shareWithParams,
	  shareOpenPlatformWithParams: shareOpenPlatformWithParams,
	  getSharePlatformListIds: getSharePlatformListIds
	};
	module.exports = exports['default'];

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	var _browser = __webpack_require__(49);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(45);

	var _requestMtop = __webpack_require__(77);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _loadResource = __webpack_require__(91);

	var _YoukuEvent = __webpack_require__(34);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageInfo = __webpack_require__(112);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YoukuUser = null;
	try {
	  YoukuUser = __webpack_require__(126);
	} catch (e) {}

	function getUser(callback) {
	  if (_universalEnv.isWeex) {
	    YoukuUser && YoukuUser.getUser(function (data) {
	      callback && callback(data);
	    });
	  } else {
	    if (_browser2.default.isYouku) {
	      // 站内windvane
	      _universalWindvane2.default && _universalWindvane2.default.call('DYKUserJSBridge', 'getUserInfo', {
	        from: 'hollywood-mods'
	      }, function (e) {
	        if (typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (e) {}
	        }
	        if (!e.ytid && !e.uid) {
	          getUserMtop(callback);
	        } else {
	          // 参数需要转换下
	          var data = Object.assign({}, e, {
	            isLogined: e.login, // 是否已登录
	            userId: e.ytid, // 登录后用户的UID
	            ytid: e.ytid, // 用户唯一标识
	            isVip: e.isVip, // 是否vip
	            userName: e.username, // 该字段废弃
	            nickName: e.nickname, // 用户昵称
	            userIcon: e.avatar, // 用户头像url
	            ouid: '',
	            accessToken: '',
	            vipGrade: '',
	            userNumberId: e.ytid
	          });
	          callback && callback(data);
	        }
	      }, function () {
	        getUserMtop(callback);
	      });
	    } else {
	      getUserMtop(callback);
	    }
	  }
	}

	function getUserMtop(callback) {
	  // mtop接口
	  (0, _requestMtop2.default)({
	    api: 'mtop.com.youku.aplatform.weakGet',
	    bizType: 'CommonActivity.getWeakUserInfoCommon',
	    bizParam: { activityName: 'CommonActivity' }
	  }).then(function (e) {
	    if (e.ret && e.ret[0] === 'SUCCESS::调用成功' && e.data && e.data.data) {
	      var data = e.data.data;
	      var ytid = data.ytid,
	          isLogined = data.isLogined,
	          _data$nickName = data.nickName,
	          nickName = _data$nickName === undefined ? '' : _data$nickName,
	          _data$userName = data.userName,
	          userName = _data$userName === undefined ? '' : _data$userName,
	          userImg = data.userImg,
	          isVip = data.isVip,
	          vipGrade = data.vipGrade; // ytid

	      callback && callback({
	        isLogined: isLogined,
	        userId: ytid,
	        ytid: ytid,
	        userNumberId: ytid,
	        nickName: nickName,
	        userNick: userName,
	        userIcon: userImg,
	        isVip: isVip,
	        vipGrade: vipGrade
	      });
	    } else {
	      callback && callback({
	        isLogined: false
	      });
	    }
	  }).catch(function () {
	    callback && callback({
	      isLogined: false
	    });
	  });
	}

	function doLogin() {
	  var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hollywood-mods';

	  if (_universalEnv.isWeex) {
	    // 大作业登录bug ios换成windvane方式
	    if (_pageInfo.isInChannel && _pageInfo.isIOS) {
	      _universalWindvane2.default && _universalWindvane2.default.call('WVYoukuAccountJSBridge', 'pullLoginDialog', { from: from }, function () {}, function () {});
	    } else {
	      try {
	        YoukuUser && YoukuUser.pullLoginDialog(from);
	      } catch (e) {
	        YoukuUser && YoukuUser.login(from);
	      }
	    }
	  } else {
	    if (_browser2.default.isYouku) {
	      var params = {
	        link: window.location.href,
	        from: from
	      };
	      _universalWindvane2.default && _universalWindvane2.default.call('WVLoginJSBridge', 'showLoginView', params, function () {
	        if (_browser2.default.isAndroid) {
	          location.reload();
	        }
	      }, function () {});
	    } else {
	      if (_browser2.default.isAlipay) {
	        (0, _loadResource.loadScript)('//appx/web-view.min.js').then(function () {
	          my.getEnv(function (res) {
	            if (res.miniprogram) {
	              my.onMessage = function (e) {
	                //e {'isAppxLogin': 'true'}
	                if (e.isAppxLogin) {
	                  _YoukuEvent2.default.fire('userLogin', true);
	                }
	              };
	              // true
	              //H5传递信息给小程序
	              my.postMessage({ isNeedAppxLogin: true });
	            } else {
	              doH5Login();
	            }
	          });
	        }).catch(function (err) {
	          // js加载失败降级到H5登录
	          doH5Login();
	          console.error('appx/web-view.min.js加载失败', err);
	        });
	      } else {
	        doH5Login();
	      }
	    }
	  }
	}

	function doH5Login() {
	  var url = encodeURIComponent(location.href);
	  window.location.href = 'https://account.youku.com/?callback=' + url;
	}

	exports.default = {
	  getUser: getUser,
	  doLogin: doLogin,
	  login: doLogin
	};
	module.exports = exports['default'];

/***/ },
/* 126 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuUser");

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 检查是否绑定淘宝
	function queryBindingStatus() {
	  return new Promise(function (resolve, reject) {
	    try {
	      _universalWindvane2.default.call('WVTaobaoYoukuAccountJSBridge', 'queryBindingStatus', {}, function (e) {
	        console.log('queryBindingStatus success: ' + JSON.stringify(e));
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        if (e.status === 'success' && e.data) {
	          // 返回是否绑定
	          resolve(!!e.data.bound);
	        } else {
	          reject();
	        }
	      }, function (e) {
	        console.log('queryBindingStatus error: ' + JSON.stringify(e));
	        reject();
	      });
	    } catch (error) {
	      reject();
	    }
	  });
	}

	// 唤起绑定淘宝账户流程
	// 参考文档：https://yuque.antfin-inc.com/hollywood/yyzyzc/emka2v
	function bindTaobao() {
	  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hollywood-mods';
	  var h5Only = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

	  return new Promise(function (resolve, reject) {
	    try {
	      // 该接口weex下不管成功或失败都会走到第一个callback
	      // 该接口H5下成功走第一个callback，失败走第二个callback
	      // 成功为绑定且登录淘宝成功，失败为绑定淘宝成功登录失败（异常case，很少见）、绑定失败
	      _universalWindvane2.default.call('aluUccJSBridge', 'uccTrustLogin', {
	        site: 'taobao', // 绑淘宝写死taobao
	        scene: source, // 使用与login from相同的参数值 eg.2019_shouye_hongbao
	        h5Only: h5Only // 1 - 不拉native授权 ,0 - 拉native授权(0923不支持) 除猫晚外其他场景均为0
	      }, function (e) {
	        console.log('bindTaobao success: ' + JSON.stringify(e));
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        if (e && e.ret && e.ret.indexOf('HY_SUCCESS') > -1) {
	          // 绑定成功
	          resolve();
	        } else {
	          // 绑定失败
	          reject();
	        }
	      }, function (e) {
	        // 绑定出错
	        console.log('bindTaobao error: ' + JSON.stringify(e));
	        reject();
	      });
	    } catch (e) {
	      reject();
	    }
	  });
	}

	exports.default = { queryBindingStatus: queryBindingStatus, bindTaobao: bindTaobao };
	module.exports = exports['default'];

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-img@2.0.10@@ali/rax-img/src/picture.weex.js';

	var _rax = __webpack_require__(2);

	var _raxImage = __webpack_require__(19);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 因为rax-picture 1.x版本在weex下存在切换uri后图片不变的bug，但是2.0又没有cmd包，所以只能自己打包
	// 参考：http://gitlab.alibaba-inc.com/rax-pkg/rax-picture/blob/master/src/picture.weex.js
	function Picture(props, ref) {
	  var children = props.children,
	      _props$style = props.style,
	      style = _props$style === undefined ? {} : _props$style,
	      _props$source = props.source,
	      source = _props$source === undefined ? {} : _props$source,
	      resizeMode = props.resizeMode,
	      width = props.width,
	      height = props.height,
	      defaultHeight = props.defaultHeight;

	  var styleWidth = style.width; // style width of picture
	  var styleHeight = style.height; // style width of picture

	  // according to the original height and width of the picture
	  if (!styleHeight && styleWidth && width && height) {
	    var pScaling = width / parseInt(styleWidth, 10);
	    styleHeight = parseInt(height / pScaling, 10);
	  }

	  if (!styleHeight) {
	    styleHeight = defaultHeight;

	    if (!resizeMode) {
	      // ensure that the picture can be displayed
	      resizeMode = 'contain';
	    }
	  }

	  var newStyle = Object.assign({
	    height: styleHeight
	  }, style);

	  if (resizeMode) {
	    newStyle.resizeMode = resizeMode;
	  }

	  return (0, _rax.createElement)(
	    _raxImage2.default,
	    _extends({ ref: ref }, this.props, { source: source, style: newStyle, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 38
	      }
	    }),
	    children
	  );
	}

	Picture = (0, _rax.forwardRef)(Picture);

	exports.default = Picture;
	module.exports = exports['default'];

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(130);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_hlw-rax-text@2.0.7@@ali/hlw-rax-text/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _raxText = __webpack_require__(131);

	var _raxText2 = _interopRequireDefault(_raxText);

	var _raxBase = __webpack_require__(31);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HlwText = function (_Component) {
	  _inherits(HlwText, _Component);

	  function HlwText() {
	    _classCallCheck(this, HlwText);

	    return _possibleConstructorReturn(this, (HlwText.__proto__ || Object.getPrototypeOf(HlwText)).apply(this, arguments));
	  }

	  _createClass(HlwText, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var nativeProps = _extends({}, props);

	      // 处理样式类型
	      var propsStyle = props.style || {};
	      // 将数组类型转成对象
	      if (Array.isArray(propsStyle) && _raxBase2.default.assignStyle) {
	        propsStyle = _raxBase2.default.assignStyle(propsStyle);
	      }
	      // 处理行高，默认加上rpx单位
	      if (propsStyle.lineHeight && typeof propsStyle.lineHeight === 'number') {
	        propsStyle.lineHeight = propsStyle.lineHeight + 'rpx';
	      }
	      // 默认添加position：relative
	      if (!propsStyle.position) {
	        propsStyle.position = 'relative';
	      }
	      nativeProps.style = propsStyle;

	      return (0, _rax.createElement)(_raxText2.default, _extends({}, nativeProps, {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 32
	        }
	      }));
	    }
	  }]);

	  return HlwText;
	}(_rax.Component);

	exports.default = HlwText;
	module.exports = exports['default'];

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.default = void 0;

	var _rax = __webpack_require__(2);

	var _universalEnv = __webpack_require__(11);

	var _index = _interopRequireDefault(__webpack_require__(132));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var __rest = void 0 && (void 0).__rest || function (s, e) {
	  var t = {};

	  for (var p in s) {
	    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	  }

	  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	  }
	  return t;
	};

	var _styleSheet = _index.default;

	function _getClassName() {
	  var className = [];
	  var args = arguments[0];
	  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

	  if (type === 'string') {
	    args = args.trim();
	    args && className.push(args);
	  } else if (type === 'array') {
	    args.forEach(function (cls) {
	      cls = _getClassName(cls).trim();
	      cls && className.push(cls);
	    });
	  } else if (type === 'object') {
	    for (var k in args) {
	      k = k.trim();

	      if (k && args.hasOwnProperty(k) && args[k]) {
	        className.push(k);
	      }
	    }
	  }

	  return className.join(' ').trim();
	}

	function _getStyle(classNameExpression) {
	  var cache = _styleSheet.__cache || (_styleSheet.__cache = {});

	  var className = _getClassName(classNameExpression);

	  var classNameArr = className.split(/\s+/);
	  var style = cache[className];

	  if (!style) {
	    style = {};

	    if (classNameArr.length === 1) {
	      style = _styleSheet[classNameArr[0].trim()];
	    } else {
	      classNameArr.forEach(function (cls) {
	        var value = _styleSheet[cls.trim()];

	        if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') {
	          style = Object.assign(style, _styleSheet[cls.trim()]);
	        }
	      });
	    }

	    cache[className] = style;
	  }

	  return style;
	}

	var prefixCls = 'rax-text';
	var Text = (0, _rax.forwardRef)(function (props, ref) {
	  var className = props.className,
	      style = props.style,
	      numberOfLines = props.numberOfLines,
	      children = props.children,
	      onPress = props.onPress,
	      onClick = props.onClick,
	      rest = __rest(props, ["className", "style", "numberOfLines", "children", "onPress", "onClick"]);

	  var handleClick = onClick || onPress;
	  var lines = typeof numberOfLines === 'string' ? parseInt(numberOfLines, 10) : numberOfLines;
	  var textString = '';

	  if (children != null) {
	    textString = Array.isArray(children) ? children.join('') : children.toString();
	  }

	  if (_universalEnv.isWeex) {
	    return (0, _rax.createElement)("text", _extends({}, rest, {
	      ref: ref,
	      className: className,
	      style: Object.assign({}, _getStyle(className), Object.assign({
	        lines: lines
	      }, style)),
	      onClick: handleClick
	    }), textString);
	  } else if (_universalEnv.isMiniApp) {
	    return (0, _rax.createElement)("text", _extends({}, rest, {
	      ref: ref,
	      className: prefixCls + " " + className,
	      style: Object.assign({}, _getStyle(prefixCls + " " + className), Object.assign({
	        lines: lines
	      }, style)),
	      onClick: handleClick,
	      "number-of-lines": lines
	    }), textString);
	  } else {
	    var classNames = [prefixCls, className];

	    if (lines) {
	      classNames.push(prefixCls + "--overflow-hidden");

	      if (lines === 1) {
	        classNames.push(prefixCls + "--singleline");
	      } else {
	        classNames.push(prefixCls + "--multiline");
	      }
	    }

	    return (0, _rax.createElement)("span", _extends({}, rest, {
	      ref: ref,
	      className: classNames.join(' '),
	      style: Object.assign({}, _getStyle(classNames.join(' ')), Object.assign(Object.assign({}, style), {
	        webkitLineClamp: lines > 1 ? lines : undefined
	      })),
	      onClick: handleClick
	    }), textString);
	  }
	});
	Text.displayName = 'Text';
	var _default = Text;
	exports.default = _default;

/***/ },
/* 132 */
/***/ function(module, exports) {


	  var _styles = {
	  "rax-text": {
	    "boxSizing": "border-box",
	    "display": "block",
	    "fontSize": "32rpx",
	    "whiteSpace": "pre-wrap"
	  },
	  "rax-text--overflow-hidden": {
	    "overflow": "hidden"
	  },
	  "rax-text--singleline": {
	    "whiteSpace": "nowrap"
	  },
	  "rax-text--multiline": {
	    "display": "-webkit-box",
	    "WebkitBoxOrient": "vertical"
	  }
	};



	  module.exports = _styles;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _log = __webpack_require__(134);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var TAG = 'ut:>>';
	var youkuTrack = null;
	try {
	  youkuTrack = __webpack_require__(70);
	} catch (e) {}

	var utParams = {};
	var extend = {};

	module.exports = (_module$exports = {
	  getTrackInfo: function getTrackInfo(params, track_info) {
	    if (!params) {
	      return track_info;
	    }
	    if (typeof params == 'string') {
	      try {
	        params = JSON.parse(params);
	      } catch (error) {
	        params = {};
	        return track_info;
	      }
	    }
	    for (var key in params) {
	      if (key == 'track_info') {
	        track_info = this.getTrackInfo(params[key], track_info);
	      } else {

	        if (typeof params[key] != 'string') {
	          track_info[key] = params[key] + '';
	        } else {
	          track_info[key] = params[key];
	        }
	      }
	    }
	    return track_info;
	  },
	  setPage: function setPage(params) {
	    if (params) {
	      utParams = params;
	    }
	  },
	  setPageName: function setPageName(pageName) {
	    if (utParams) {
	      utParams.pageName = pageName;
	    } else {
	      utParams = {
	        pageName: pageName
	      };
	    }
	  }
	}, _defineProperty(_module$exports, 'setPage', function setPage(pageName, a, b) {
	  var scm = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	  utParams = {
	    pageName: pageName,
	    spmAB: a + '.' + b,
	    scmAB: scm
	  };
	}), _defineProperty(_module$exports, 'setExtend', function setExtend(params) {
	  extend = params;
	}), _defineProperty(_module$exports, 'reportCore', function reportCore(eventId, arg) {
	  var spmCD = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var scmCD = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	  var params = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

	  _log2.default.d(TAG, 'params = ' + JSON.stringify(params));
	  var track_info = this.getTrackInfo(params, {});
	  _log2.default.d(TAG, 'extend = ' + JSON.stringify(extend));
	  track_info = this.getTrackInfo(extend, track_info);
	  _log2.default.d(TAG, 'track_info = ' + JSON.stringify(track_info));

	  if (eventId == 2101) {
	    youkuTrack && youkuTrack.utClickEvent && youkuTrack.utClickEvent(utParams.pageName, arg, _extends({
	      'isWeex': '1',
	      'spm': utParams.spmAB + '.' + spmCD,
	      'scm': utParams.scmAB + '.' + scmCD,
	      'track_info': JSON.stringify(track_info)
	    }, track_info));
	  } else if (eventId == 2201) {
	    youkuTrack && youkuTrack.utExposeEvent && youkuTrack.utExposeEvent(utParams.pageName, _extends({
	      'isWeex': '1',
	      'spm': utParams.spmAB + '.' + spmCD,
	      'scm': utParams.scmAB + '.' + scmCD,
	      'track_info': JSON.stringify(track_info)
	    }, track_info));
	  } else if (eventId == 2001) {
	    youkuTrack && youkuTrack.reportPV && youkuTrack.reportPV(utParams.pageName, utParams.spmAB, _extends({
	      'isWeex': '1',
	      'track_info': JSON.stringify(track_info)
	    }, track_info));
	  } else {
	    _log2.default.d(TAG, '自定义埋点');
	    youkuTrack && youkuTrack.utCustomEvent && youkuTrack.utCustomEvent(utParams.pageName, eventId, arg, '', '', _extends({
	      'isWeex': '1',
	      'spm': utParams.spmAB + '.' + spmCD,
	      'scm': utParams.scmAB + '.' + scmCD,
	      'track_info': JSON.stringify(track_info)
	    }, track_info));
	  }
	}), _defineProperty(_module$exports, 'enter', function enter(pageName, a, b) {
	  var scm = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

	  this.setPage(pageName, a, b, scm);
	  this.reportCore(2001, '');
	}), _defineProperty(_module$exports, 'updatePageParams', function updatePageParams(params) {
	  if (params) {
	    for (var key in params) {
	      utParams[key] = params[key];
	    }
	  }
	}), _defineProperty(_module$exports, 'pageAppear', function pageAppear() {
	  // if (isAndroid || planetConfig) {
	  //   userTrack && userTrack.pageAppear && userTrack.pageAppear();
	  // }
	}), _defineProperty(_module$exports, 'pageDisAppear', function pageDisAppear() {
	  // if (isAndroid || planetConfig) {
	  //   userTrack && userTrack.pageDisAppear && userTrack.pageDisAppear();
	  // }
	}), _defineProperty(_module$exports, 'click', function click(comName, params) {
	  this.reportCore(2101, comName, '', '', params);
	}), _defineProperty(_module$exports, 'custom', function custom(eventName, params) {
	  this.reportCore(19999, eventName, '', '', params);
	}), _defineProperty(_module$exports, 'expose', function expose(eventName, params) {
	  this.reportCore(2201, eventName, '', '', params);
	}), _defineProperty(_module$exports, 'getPageName', function getPageName() {
	  if (utParams) {
	    return utParams.pageName;
	  }
	  return '';
	}), _defineProperty(_module$exports, 'getCurPageSPM', function getCurPageSPM(c, d) {
	  if (!utParams) {
	    return c + '.' + d;
	  }
	  var spm = utParams.spmAB;
	  if (c) {
	    spm += '.' + c;
	  } else {
	    spm += '.0';
	  }
	  if (d) {
	    spm += '.' + d;
	  } else {
	    spm += '.0';
	  }
	  return spm;
	}), _defineProperty(_module$exports, 'getCurPageSPMCD', function getCurPageSPMCD(cd) {
	  if (!utParams) {
	    return c + '.' + d;
	  }
	  var spm = utParams.spmAB;
	  if (cd) {
	    spm += '.' + cd;
	  } else {
	    spm += '.0.0';
	  }
	  return spm;
	}), _module$exports);

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _raxBase = __webpack_require__(31);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TLog = null;

	var isIOS = _raxBase2.default.isIOS;
	var MODULE = 'planet:>>';
	var Global = {
	  isEnvPre: false
	};
	try {
	  TLog = __webpack_require__(135);
	  if (!TLog) {
	    TLog = __webpack_require__(136);
	  }
	} catch (e) {
	  TLog = {
	    tlog: function tlog(level, content, module, tag) {
	      console.log(module + ':' + tag + ':' + content);
	    },
	    e: function (tag, content) {
	      console.error(tag + ':' + content);
	    },
	    d: function d(tag, content) {
	      console.log(tag + ':' + content);
	    }
	  };
	}

	module.exports = {
	  e: function e(tag, content) {
	    if (isIOS && !Global.isEnvPre) {
	      console.error(tag + ':' + content);
	    }
	    try {
	      TLog.tlog('E', content, MODULE, tag);
	    } catch (e) {}
	  },
	  d: function d(tag, content) {
	    if (isIOS && !Global.isEnvPre) {
	      console.log(tag + ':' + content);
	    }
	    try {
	      TLog.tlog('D', content, MODULE, tag);
	    } catch (e) {}
	  },
	  tlog: function tlog(level, content, module, tag) {
	    if (isIOS && !Global.isEnvPre) {
	      console.log(tag + ':' + content);
	    }
	    try {

	      TLog.tlog(level, content, module, tag);
	    } catch (e) {}
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuDebugLog");

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/VICWeexLogModule");

/***/ },
/* 137 */
/***/ function(module, exports) {


	  var _styles = {
	  "app": {
	    "width": 498,
	    "height": 148,
	    "justifyContent": "flex-start",
	    "alignContent": "flex-end",
	    "alignItems": "flex-end",
	    "flexDirection": "row"
	  },
	  "appLeftWapper": {
	    "width": 148,
	    "height": 148,
	    "backgroundColor": "transparent"
	  },
	  "appLeftBackground": {
	    "position": "absolute",
	    "left": 0,
	    "bottom": 0,
	    "width": 148,
	    "height": 106
	  },
	  "appAD": {
	    "color": "rgba(255,255,255,0.8)",
	    "position": "absolute",
	    "bottom": 0,
	    "left": 6,
	    "backgroundColor": "rgba(0,0,0,0.4)",
	    "borderRadius": 4,
	    "fontSize": 18,
	    "width": 48,
	    "height": 28,
	    "lineHeight": 28,
	    "textAlign": "center"
	  },
	  "appLeftAvatarImage": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "width": 148,
	    "height": 148
	  },
	  "appRightWapper": {
	    "height": 106,
	    "width": 350,
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "flex-start",
	    "paddingLeft": 38,
	    "paddingRight": 30
	  },
	  "appRightBackground": {
	    "position": "absolute",
	    "top": 0,
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "flexDirection": "row",
	    "justifyContent": "stretch"
	  },
	  "appRightBackground1": {
	    "flex": 1,
	    "height": 106,
	    "backgroundColor": "rgba(35,35,35,0.8)"
	  },
	  "appRightBackground2": {
	    "flex": 1,
	    "height": 106,
	    "backgroundImage": "linear-gradient(to right, rgba(35, 35, 35, 0.8),transparent)"
	  },
	  "appRightBackground3": {
	    "flex": 1,
	    "height": 106,
	    "backgroundImage": "linear-gradient(to right,rgba(35, 35, 35, 0.65),rgba(35, 35, 35, 0.4))"
	  },
	  "appRightBackground4": {
	    "flex": 1,
	    "height": 106,
	    "backgroundImage": "linear-gradient(to right, rgba(35, 35, 35, 0.4), rgba(35, 35, 35, 0))"
	  },
	  "appTopLine": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "paddingLeft": 12,
	    "flexDirection": "row",
	    "justifyContent": "stretch"
	  },
	  "appBottomLine": {
	    "position": "absolute",
	    "bottom": 0,
	    "left": 0,
	    "right": 0,
	    "paddingLeft": 12,
	    "flexDirection": "row",
	    "justifyContent": "stretch"
	  },
	  "appLeftLine": {
	    "height": 2,
	    "flex": 1,
	    "backgroundImage": "linear-gradient(to right,rgba(255, 255, 255, 0),rgba(255, 255, 255, 0.25))"
	  },
	  "appRightLine": {
	    "flex": 1,
	    "height": 2,
	    "backgroundImage": "linear-gradient(to right, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))"
	  },
	  "appSeparateLine": {
	    "position": "absolute",
	    "top": 24,
	    "left": 12,
	    "width": 2,
	    "height": 65,
	    "backgroundColor": "rgb(173,189,213)",
	    "opacity": 0.24
	  },
	  "appTitle": {
	    "height": 42,
	    "fontSize": 30,
	    "color": "white",
	    "fontWeight": "bold"
	  },
	  "appSubTitleWrapper": {
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "flex-end"
	  },
	  "appSubTitle": {
	    "height": 24,
	    "fontSize": 20,
	    "color": "white",
	    "marginBottom": 6
	  },
	  "appSeconds": {
	    "fontSize": 28,
	    "color": "rgb(150,246,255)",
	    "opacity": 0.96,
	    "marginBottom": 1
	  },
	  "appUnit": {
	    "fontSize": 20,
	    "color": "rgb(150,246,255)",
	    "opacity": 0.96,
	    "marginBottom": 3
	  },
	  "closePanel": {
	    "width": 100,
	    "height": 248,
	    "justifyContent": "center"
	  },
	  "closeIcon": {
	    "width": 40,
	    "height": 40,
	    "position": "absolute",
	    "left": 0
	  }
	};



	  module.exports = _styles;


/***/ },
/* 138 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  page: {
	    assignModules: [{ package: '@ali/rax-base', version: '3.0.33' }, { package: '@ali/rax-div', version: '3.0.1' }, { package: '@ali/rax-img', version: '3.0.5' }, { package: '@ali/hlw-rax-text', version: '3.0.1' }, { package: '@ali/hlw-v1-yk-general-item', version: '2.0.6' }, { package: '@ali/hlw-v1-damai-utils', version: '1.0.46' }, { package: '@ali/hlw-v1-yk-ssrhoc', version: '1.1.5' }, { package: 'universal-env', version: '0.6.6' }],
	    excludeModules: [],
	    enableKraken: true,
	    pi: '@ali/hlw-v1-rax-play-pi-hollywood',
	    officalModules: [{ package: 'rax-scrollview', version: '2.0.0' }, { package: 'rax', version: '1.1.2' }, { package: 'universal-env', version: '3.2.2' }],
	    moduleDeps: [{
	      version: '1.0.2',
	      key: 'hlw-v1-yk-kukan-tips',
	      group: 'hollywood-mod'
	    }, { version: '0.0.1', key: 'hlw-v1-rax-play-pi-hollywood', group: 'youku-pi' }],
	    mainVersion: 1,
	    config: {
	      shareConfig: {
	        shareTitle: '',
	        shareImage: '',
	        shareUrl: '',
	        shareDescription: '',
	        showShareButton: true
	      },
	      outsideConfig: {
	        referPubArr: [{ refer: '', pub: '' }],
	        backToAppList: [{
	          android: 'taobao://',
	          text: '返回淘宝',
	          callappback: 'taobao',
	          ios: 'taobao://'
	        }]
	      },
	      themeConfig: {
	        refreshBackgroundColor: 'rgba(0, 0, 0, 0)',
	        backgroundColor: '#ffffff',
	        devConfig: {
	          setRootHeight: false,
	          flexRootWidth: false,
	          customProbeParam: false,
	          firstScreenComponentSize: 10,
	          disableRefreshControl: false,
	          rootHeight: 1000,
	          customSampleRate: 1,
	          customPageBizType: '',
	          listType: 'default'
	        },
	        offlineUrl: 'https://www.youku.com',
	        refreshImage: { refreshImageWidth: 285, refreshImageUrl: '' },
	        pageTitle: '测试kraken',
	        backgroundImage: '',
	        backgroundImageHeight: 0,
	        hideBackToTopButton: false,
	        isTimingOffline: false,
	        theme: 0,
	        offlineTime: 4102416000000
	      }
	    },
	    base: {
	      actpage: '74a7e3e5e47048608e6b3f245ceb7801',
	      spma: 'a2hau',
	      containerType: 'kraken',
	      longtermOnline: 1,
	      spmb: '22207844',
	      actid: 'c97983a3ddeb452cb6a8ab842830ca6e',
	      pageName: 'chh8lpy6jd',
	      spm: 'a2hau.22207844',
	      enableStaticData: true,
	      globalConfig: '{"buName":"youku","spmId":"a2hau.22207844"}',
	      offlineUrl: 'https://www.youku.com',
	      domain: 'https://t.youku.com/yep/page/m/',
	      offlineTime: 4102416000000,
	      staticData: '{"layoutConfig":[{"modInsId":431403,"order":1,"pos":{"w":498,"h":148,"x":50,"y":50,"g":"sw"}}],"msg":"SUCCESS","code":0,"moduleList":[{"data":[{"commonData":{"name":"前方高能","imgurl":"https://img.alicdn.com/imgextra/i4/O1CN01eeLVM91v45myEEBm1_!!6000000006118-2-tps-222-222.png","desc":"你好，二倍速播放动口不动手"}}],"modInsId":431403,"modInsName":"快看tips_eqfhrb","config":[{"deliveryRuleIds":"","refers":"","timing":false,"filterReferOrFrom":false,"deviceData":[{"visible":true,"type":"commonData"}],"online":true,"startTime":"","endTime":"","froms":"","spmcText":"默认策略"}],"key":"hlw-v1-yk-kukan-tips","modVerId":27936,"order":1}],"staticPage":true}',
	      taskid: 'c97983a3ddeb452cb6a8ab842830ca6e'
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// phone端模块入口
	module.exports = __webpack_require__(140);

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _hlwV1DriverUniversal = __webpack_require__(141);

	var DomDriver = _interopRequireWildcard(_hlwV1DriverUniversal);

	var _raxDiv = __webpack_require__(155);

	var _raxDiv2 = _interopRequireDefault(_raxDiv);

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _uuidRandom = __webpack_require__(220);

	var _uuidRandom2 = _interopRequireDefault(_uuidRandom);

	var _ErrorBoundary = __webpack_require__(222);

	var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

	var _handleConfig = __webpack_require__(223);

	var _handleConfig2 = _interopRequireDefault(_handleConfig);

	var _getPageData = __webpack_require__(225);

	var _getPageData2 = _interopRequireDefault(_getPageData);

	var _getPageLayout = __webpack_require__(233);

	var _getPageLayout2 = _interopRequireDefault(_getPageLayout);

	var _filterPageLayout = __webpack_require__(239);

	var _filterPageLayout2 = _interopRequireDefault(_filterPageLayout);

	var _probeInit = __webpack_require__(240);

	var _probeInit2 = _interopRequireDefault(_probeInit);

	var _ModuleWrapper = __webpack_require__(262);

	var _ModuleWrapper2 = _interopRequireDefault(_ModuleWrapper);

	var _getWrapperStyle = __webpack_require__(263);

	var _getWrapperStyle2 = _interopRequireDefault(_getWrapperStyle);

	var _pageFrameConfig = __webpack_require__(224);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// window.device = ;

	Object.defineProperty(window, 'device', {
	  DeviceInfo: {
	    name: 'androidDeviceInfo.device'
	  },
	  os: {
	    name: 'Android',
	    version: 'androidDeviceInfo.version.release'
	  },
	  app: {
	    name: 'packageInfo.appName',
	    packageName: 'packageInfo.packageName',
	    buildNumber: 'packageInfo.buildNumber',
	    scene: '',
	    sceneInstanceId: '',
	    version: 'packageInfo.version'
	  },
	  devicePixelRatio: 3.0,
	  display: {
	    safeLeft: 0.0,
	    safeTop: 27.0,
	    safeRight: 0.0,
	    safeBottom: 0.0
	  }
	});

	/** @jsx createElement */
	var setPVParam = _raxBase2.default.setPVParam,
	    sendPV = _raxBase2.default.sendPV,
	    urlSearchObj = _raxBase2.default.urlSearchObj;


	var pageData = (0, _getPageData2.default)();
	window.hollywoodPageData = pageData.page;

	if (_raxBase2.default.pageStorage && _raxBase2.default.pageStorage.setItem) {
	  _raxBase2.default.pageStorage.setItem('hollywoodPageData', pageData.page);
	}

	var _ref = pageData.page || {},
	    baseData = _ref.base,
	    _ref$config = _ref.config,
	    configData = _ref$config === undefined ? {} : _ref$config;

	var enableStaticData = baseData.enableStaticData,
	    staticData = baseData.staticData;

	// 初始化探针

	(0, _probeInit2.default)(configData, baseData);

	// 处理页面配置，提到顶部保证代码执行顺序
	(0, _handleConfig2.default)(configData, baseData);

	var Page = function (_Component) {
	  _inherits(Page, _Component);

	  function Page(props) {
	    _classCallCheck(this, Page);

	    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

	    _this.addEventListeners = function () {
	      _raxBase2.default.YoukuEvent.on('setPageTheme', function (e) {
	        _this.setState(e);
	      });
	    };

	    _this.renderPageLayout = function (layoutAll) {
	      var layout = (0, _filterPageLayout2.default)(layoutAll);
	      if (window.useStaticData) {
	        return {
	          pageModuleList: layout
	        };
	      }
	      _this.setState({
	        pageModuleList: layout
	      });
	    };

	    _this.state = {
	      pageModuleList: [],
	      viewportHeight: (0, _pageFrameConfig.getRootViewLayout)().height // 视口高度，用于计算页面高度并重新渲染，没有直接用到state中的值
	    };

	    var themeConfig = configData.themeConfig;
	    themeConfig.devConfig || {};


	    window.useCdnData = urlSearchObj.useCdnData === 'true'; // 是否使用cdn中打底数据
	    window.useMtopData = urlSearchObj.useMtopData === 'true'; // 是否使用mtop接口数据
	    window.useStaticData = !window.useCdnData && !window.useMtopData && enableStaticData && staticData; // url没有调试参数且enableStaticData为true说明走静态数据的逻辑

	    if (window.useStaticData) {
	      // 静态页面无需等到didMount之后才能渲染正确的数据
	      _this.state = _extends({}, _this.state, _this.renderPageLayout((0, _getPageLayout2.default)(baseData)));
	    }
	    // 设置PV埋点信息
	    var domain = baseData.domain || 'https://t.youku.com/yep/page/m/';
	    var pageName = baseData.pageName || 'none';
	    // 生成traceId方便添加追踪订单
	    var traceId = 'hlw_' + (0, _uuidRandom2.default)().replace(/-/g, '');
	    setPVParam({
	      pageName: '' + domain + pageName,
	      spm: baseData.spm || 'hollywood.default',
	      extend: {
	        actid: baseData.actid,
	        actpage: baseData.actpage,
	        traceId: traceId
	      }
	    });
	    // 保存traceId便于页面中模块获取traceId
	    _raxBase2.default.pageStorage.setItem('traceId', traceId);

	    // 输出当前页面url，方便在weex下查看当前页面url
	    console.log('current page url: ' + window.location.href);
	    return _this;
	  }

	  _createClass(Page, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      sendPV();

	      // 请求页面布局数据并渲染
	      if (!window.useStaticData) {
	        (0, _getPageLayout2.default)(baseData).then(this.renderPageLayout);
	      }

	      this.setViewportHeight();

	      this.addEventListeners();
	    }
	  }, {
	    key: 'setViewportHeight',
	    value: function setViewportHeight() {
	      var _this2 = this;

	      var viewportHeight = this.state.viewportHeight;

	      _raxBase2.default.getComponentRect('viewport', function (e) {
	        if (e.height && viewportHeight !== e.height) {
	          (0, _pageFrameConfig.setPageHeight)(e.height);
	          _this2.setState({
	            viewportHeight: e.height
	          });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function () {
	      var config = pageData.page.config;
	      var themeConfig = config.themeConfig;
	      var _state = this.state,
	          pageModuleList = _state.pageModuleList,
	          viewportHeight = _state.viewportHeight;

	      var rootViewLayout = (0, _pageFrameConfig.getRootViewLayout)();
	      return (0, _rax.createElement)(
	        _raxDiv2.default,
	        {
	          style: _extends({}, rootViewLayout, {
	            backgroundColor: themeConfig.refreshBackgroundColor || 'rgba(0, 0, 0, 0)'
	          }),
	          backgroundImage: {
	            uri: _raxBase2.default.parseImgUrl(themeConfig.backgroundImage),
	            left: 0,
	            top: 0,
	            width: rootViewLayout.width,
	            height: themeConfig.backgroundImageHeight || 0
	          },
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 156
	          }
	        },
	        pageModuleList.map(function (item, index) {
	          try {
	            var Module = item.moduleClass;
	            var key = index + 1;
	            var moduleName = item.modInsName;
	            var props = {
	              moduleIndex: key, // 模块在页面位置
	              moduleKey: item.key,
	              spmc: item.modInsId,
	              spmcText: moduleName,
	              dataId: item.modInsId,
	              descm: item.config && item.config.descm || '',
	              attrs: { sceneId: item.modInsId },
	              data: item.data,
	              pos: item.pos
	            };
	            return (0, _rax.createElement)(
	              _ModuleWrapper2.default,
	              {
	                style: (0, _getWrapperStyle2.default)(item.pos, viewportHeight),
	                key: key,
	                'data-mod-order': item.order,
	                'data-mod-name': moduleName,
	                'data-mod-key': item.key,
	                'data-mod-id': item.modInsId,
	                __source: {
	                  fileName: _jsxFileName,
	                  lineNumber: 186
	                }
	              },
	              (0, _rax.createElement)(
	                _ErrorBoundary2.default,
	                _extends({}, props, {
	                  __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 194
	                  }
	                }),
	                (0, _rax.createElement)(Module, _extends({}, props, {
	                  __source: {
	                    fileName: _jsxFileName,
	                    lineNumber: 195
	                  }
	                }))
	              )
	            );
	          } catch (e) {
	            console.error(e);
	            return null;
	          }
	        })
	      );
	    }
	  }]);

	  return Page;
	}(_rax.Component);

	(0, _rax.render)((0, _rax.createElement)(Page, {
	  __source: {
	    fileName: _jsxFileName,
	    lineNumber: 209
	  }
	}), document.body, { driver: DomDriver });

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// phone端模块入口
	module.exports = __webpack_require__(142);

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(45);

	var _dom = __webpack_require__(143);

	var _dom2 = _interopRequireDefault(_dom);

	var _driverMiniapp = __webpack_require__(147);

	var _driverMiniapp2 = _interopRequireDefault(_driverMiniapp);

	var _driverWeex = __webpack_require__(153);

	var WeexDriver = _interopRequireWildcard(_driverWeex);

	var _driverKraken = __webpack_require__(154);

	var KrakenDriver = _interopRequireWildcard(_driverKraken);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var currentDriver = void 0;
	if (_universalEnv.isWeex) {
	  currentDriver = WeexDriver;
	} else if (_universalEnv.isWeb) {
	  currentDriver = (0, _dom2.default)();
	} else if (_universalEnv.isKraken) {
	  currentDriver = KrakenDriver;
	} else if (_universalEnv.isMiniApp || _universalEnv.isWeChatMiniProgram) {
	  currentDriver = _driverMiniapp2.default;
	} else {
	  throw new Error('Your environment was not supported by hlw-driver-universal.');
	}

	exports.default = currentDriver;
	module.exports = exports['default'];

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createDOMDriver;

	var _driverDom = __webpack_require__(144);

	var DriverDOM = _interopRequireWildcard(_driverDom);

	var _isType = __webpack_require__(146);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function createDOMDriver() {
	  return Object.assign({}, DriverDOM, {
	    createElement: function createElement(type, props, component) {
	      var style = props.style;
	      // 添加style属性对数组的支持，否则报Failed to set an indexed property on 'CSSStyleDeclaration': Index property setter is not supported.错误

	      if (style && (0, _isType.isArray)(style)) {
	        var styleObjs = style.filter(function (item) {
	          return (0, _isType.isObject)(item);
	        });
	        props.style = Object.assign.apply(Object, [{}].concat(_toConsumableArray(styleObjs)));
	      }
	      return DriverDOM.createElement(type, props, component, true);
	    },
	    setStyle: function setStyle(node, style) {
	      if (style && (0, _isType.isArray)(style)) {
	        var styleObjs = style.filter(function (item) {
	          return (0, _isType.isObject)(item);
	        });
	        style = Object.assign.apply(Object, [{}].concat(_toConsumableArray(styleObjs)));
	      }
	      return DriverDOM.setStyle(node, style, true);
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.setViewportWidth = setViewportWidth;
	exports.setUnitPrecision = setUnitPrecision;
	exports.setDecimalPixelTransformer = setDecimalPixelTransformer;
	exports.setTagNamePrefix = setTagNamePrefix;
	exports.createBody = createBody;
	exports.createEmpty = createEmpty;
	exports.createText = createText;
	exports.updateText = updateText;
	exports.createElement = createElement;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.replaceChild = replaceChild;
	exports.insertAfter = insertAfter;
	exports.insertBefore = insertBefore;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.removeAttribute = removeAttribute;
	exports.setAttribute = setAttribute;
	exports.setStyle = setStyle;
	exports.beforeRender = beforeRender;
	exports.afterRender = afterRender;
	exports.removeChildren = removeChildren;

	/**
	 * Driver for Web DOM
	 **/
	var _require = __webpack_require__(145),
	    warnForReplacedHydratebleElement = _require.warnForReplacedHydratebleElement,
	    warnForDeletedHydratableElement = _require.warnForDeletedHydratableElement,
	    warnForInsertedHydratedElement = _require.warnForInsertedHydratedElement;

	var RPX_REG = /[-+]?\d*\.?\d+(rpx)/g; // opacity -> opa
	// fontWeight -> ntw
	// lineHeight|lineClamp -> ne[ch]
	// flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
	// order -> ^ord
	// zoom -> zoo
	// gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
	// columnCount -> mnc
	// tabSize -> bs
	// orphans -> orp
	// windows -> ows
	// animationIterationCount -> onit
	// borderImageOutset|borderImageSlice|borderImageWidth -> erim

	var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
	var EVENT_PREFIX_REG = /^on[A-Z]/;
	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var HTML = '__html';
	var INNER_HTML = 'innerHTML';
	var CLASS_NAME = 'className';
	var CLASS = 'class';
	var STYLE = 'style';
	var CHILDREN = 'children';
	var TEXT_CONTENT_ATTR = 'textContent';
	var CREATE_ELEMENT = 'createElement';
	var CREATE_COMMENT = 'createComment';
	var CREATE_TEXT_NODE = 'createTextNode';
	var SET_ATTRIBUTE = 'setAttribute';
	var REMOVE_ATTRIBUTE = 'removeAttribute';
	var SVG_NS = 'http://www.w3.org/2000/svg';
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;
	var EMPTY = '';
	var HYDRATION_INDEX = '__i';
	var HYDRATION_APPEND = '__a';

	var __DEV__ = ("production") !== 'production';

	var tagNamePrefix = EMPTY; // Flag indicating if the diff is currently within an SVG

	var isSVGMode = false;
	var isHydrating = false;
	var viewportWidth = 750;
	var unitPrecision = 4;

	var decimalPixelTransformer = function (value) {
	  return value;
	};
	/**
	 * Set viewport width.
	 * @param viewport {Number} Viewport width, default to 750.
	 */

	function setViewportWidth(viewport) {
	  viewportWidth = viewport;
	}
	/**
	 * Set unit precision.
	 * @param n {Number} Unit precision, default to 4.
	 */

	function setUnitPrecision(n) {
	  unitPrecision = n;
	}
	/**
	 * Set a function to transform unit of pixel,
	 * default to passthrough.
	 * @param {Function} transformer function
	 */

	function setDecimalPixelTransformer(transformer) {
	  decimalPixelTransformer = transformer;
	}

	function unitTransformer(n) {
	  return toFixed(parseFloat(n) / (viewportWidth / 100), unitPrecision) + 'vw';
	}

	function toFixed(number, precision) {
	  var multiplier = Math.pow(10, precision + 1);
	  var wholeNumber = Math.floor(number * multiplier);
	  return Math.round(wholeNumber / 10) * 10 / multiplier;
	}
	/**
	 * Create a cached version of a pure function.
	 */

	function cached(fn) {
	  var cache = Object.create(null);
	  return function (str) {
	    return cache[str] || (cache[str] = fn(str));
	  };
	}

	function calcRpxToVw(value) {
	  return value.replace(RPX_REG, unitTransformer);
	}

	function isRpx(str) {
	  return RPX_REG.test(str);
	} // Cache the convert fn.


	var convertUnit = cached(function (value) {
	  return isRpx(value) ? calcRpxToVw(value) : value;
	});
	var isDimensionalProp = cached(function (prop) {
	  return !NON_DIMENSIONAL_REG.test(prop);
	});
	var isEventProp = cached(function (prop) {
	  return EVENT_PREFIX_REG.test(prop);
	});

	function setTagNamePrefix(prefix) {
	  tagNamePrefix = prefix;
	}

	function createBody() {
	  return document.body;
	}

	function createEmpty(component) {
	  var parent = component._parent;
	  var node;

	  if (isHydrating) {
	    var hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (hydrationChild.nodeType === COMMENT_NODE) {
	        return hydrationChild;
	      } else {
	        node = document[CREATE_COMMENT](EMPTY);
	        replaceChild(node, hydrationChild, parent);
	      }
	    } else {
	      node = document[CREATE_COMMENT](EMPTY);
	      node[HYDRATION_APPEND] = true;
	    }
	  } else {
	    node = document[CREATE_COMMENT](EMPTY);
	  }

	  return node;
	}

	function createText(text, component) {
	  var parent = component._parent;
	  var node;

	  if (isHydrating) {
	    var hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (hydrationChild.nodeType === TEXT_NODE) {
	        if (text !== hydrationChild[TEXT_CONTENT_ATTR]) {
	          hydrationChild[TEXT_CONTENT_ATTR] = text;
	        }

	        return hydrationChild;
	      } else {
	        node = document[CREATE_TEXT_NODE](text);
	        replaceChild(node, hydrationChild, parent);
	      }
	    } else {
	      node = document[CREATE_TEXT_NODE](text);
	      node[HYDRATION_APPEND] = true;
	    }
	  } else {
	    node = document[CREATE_TEXT_NODE](text);
	  }

	  return node;
	}

	function updateText(node, text) {
	  node[TEXT_CONTENT_ATTR] = text;
	}

	function findHydrationChild(parent) {
	  if (parent[HYDRATION_INDEX] == null) {
	    parent[HYDRATION_INDEX] = 0;
	  }

	  return parent.childNodes[parent[HYDRATION_INDEX]++];
	}
	/**
	 * @param {string} type node type
	 * @param {object} props elemement properties
	 * @param {object} component component instance
	 * @param {boolean} __shouldConvertUnitlessToRpx should add unit when missing
	 * @param {boolean} __shouldConvertRpxToVw should transfrom rpx to vw
	 */

	function createElement(type, props, component, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
	  if (__shouldConvertRpxToVw === void 0) {
	    __shouldConvertRpxToVw = true;
	  }

	  var parent = component._parent;
	  isSVGMode = type === 'svg' || parent && parent.namespaceURI === SVG_NS;
	  var node;
	  var hydrationChild = null;

	  function createNode() {
	    if (isSVGMode) {
	      node = document.createElementNS(SVG_NS, type);
	    } else if (tagNamePrefix) {
	      var _tagNamePrefix = typeof _tagNamePrefix === 'function' ? _tagNamePrefix(type) : _tagNamePrefix;

	      node = document[CREATE_ELEMENT](_tagNamePrefix + type);
	    } else {
	      node = document[CREATE_ELEMENT](type);
	    }
	  }

	  if (isHydrating) {
	    hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (type === hydrationChild.nodeName.toLowerCase()) {
	        for (var attributes = hydrationChild.attributes, i = attributes.length; i--;) {
	          var attribute = attributes[i];
	          var attributeName = attribute.name;
	          var propValue = props[attributeName];

	          if ( // The class or className prop all not in props
	          attributeName === CLASS && props[CLASS_NAME] == null && propValue == null || // The style prop is empty object or not in props
	          attributeName === STYLE && (propValue == null || Object.keys(propValue).length === 0) || // Remove rendered node attribute that not existed
	          attributeName !== CLASS && attributeName !== STYLE && propValue == null) {
	            hydrationChild[REMOVE_ATTRIBUTE](attributeName);
	            continue;
	          }

	          if (attributeName === STYLE) {
	            // Remove invalid style prop, and direct reset style to child avoid diff style
	            for (var _i = 0, l = hydrationChild.style.length; _i < l; _i++) {
	              var stylePropName = hydrationChild.style[_i];

	              if (!propValue[stylePropName]) {
	                hydrationChild.style[stylePropName] = EMPTY;
	              }
	            }
	          }
	        }

	        node = hydrationChild;
	      } else {
	        createNode();
	        replaceChild(node, hydrationChild, parent);

	        if (__DEV__) {
	          warnForReplacedHydratebleElement(parent, node, hydrationChild);
	        }
	      }
	    } else {
	      createNode();
	      node[HYDRATION_APPEND] = true;

	      if (__DEV__) {
	        warnForInsertedHydratedElement(parent, node);
	      }
	    }
	  } else {
	    createNode();
	  }

	  for (var prop in props) {
	    var value = props[prop];
	    if (prop === CHILDREN) continue;

	    if (value != null) {
	      if (prop === STYLE) {
	        setStyle(node, value, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw);
	      } else if (isEventProp(prop)) {
	        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
	      } else {
	        setAttribute(node, prop, value);
	      }
	    }
	  }

	  return node;
	}

	function appendChild(node, parent) {
	  if (!isHydrating || node[HYDRATION_APPEND]) {
	    return parent.appendChild(node);
	  }
	}

	function removeChild(node, parent) {
	  parent = parent || node.parentNode; // Maybe has been removed when remove child

	  if (parent) {
	    parent.removeChild(node);
	  }
	}

	function replaceChild(newChild, oldChild, parent) {
	  parent = parent || oldChild.parentNode;
	  parent.replaceChild(newChild, oldChild);
	}

	function insertAfter(node, after, parent) {
	  parent = parent || after.parentNode;
	  var nextSibling = after.nextSibling;

	  if (nextSibling) {
	    // Performance improve when node has been existed before nextSibling
	    if (nextSibling !== node) {
	      insertBefore(node, nextSibling, parent);
	    }
	  } else {
	    appendChild(node, parent);
	  }
	}

	function insertBefore(node, before, parent) {
	  parent = parent || before.parentNode;
	  parent.insertBefore(node, before);
	}

	function addEventListener(node, eventName, eventHandler) {
	  return node.addEventListener(eventName, eventHandler);
	}

	function removeEventListener(node, eventName, eventHandler) {
	  return node.removeEventListener(eventName, eventHandler);
	}

	function removeAttribute(node, propKey) {
	  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	    return node[INNER_HTML] = null;
	  }

	  if (propKey === CLASS_NAME) propKey = CLASS;

	  if (propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = null;
	    } catch (e) {}
	  }

	  node[REMOVE_ATTRIBUTE](propKey);
	}

	function setAttribute(node, propKey, propValue) {
	  // For reduce innerHTML operation to improve performance.
	  if (propKey === DANGEROUSLY_SET_INNER_HTML && node[INNER_HTML] !== propValue[HTML]) {
	    return node[INNER_HTML] = propValue[HTML];
	  }

	  if (propKey === CLASS_NAME) propKey = CLASS;

	  if (propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = propValue;
	    } catch (e) {
	      node[SET_ATTRIBUTE](propKey, propValue);
	    }
	  } else {
	    node[SET_ATTRIBUTE](propKey, propValue);
	  }
	}
	/**
	 * @param {object} node target node
	 * @param {object} style target node style value
	 * @param {boolean} __shouldConvertUnitlessToRpx
	 * @param {boolean} __shouldConvertRpxToVw should transfrom rpx to vw
	 */

	function setStyle(node, style, __shouldConvertUnitlessToRpx, __shouldConvertRpxToVw) {
	  if (__shouldConvertRpxToVw === void 0) {
	    __shouldConvertRpxToVw = true;
	  }

	  for (var prop in style) {
	    var value = style[prop];
	    var convertedValue = void 0;

	    if (typeof value === 'number' && isDimensionalProp(prop)) {
	      if (__shouldConvertUnitlessToRpx) {
	        convertedValue = value + 'rpx';

	        if (__shouldConvertRpxToVw) {
	          // Transfrom rpx to vw
	          convertedValue = convertUnit(convertedValue);
	        }
	      } else {
	        convertedValue = value + 'px';
	      }
	    } else {
	      convertedValue = __shouldConvertRpxToVw ? convertUnit(value) : value;
	    } // Support CSS custom properties (variables) like { --main-color: "black" }


	    if (prop[0] === '-' && prop[1] === '-') {
	      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
	      // style.setProperty do not support Camel-Case style properties.
	      node.style.setProperty(prop, convertedValue);
	    } else {
	      node.style[prop] = convertedValue;
	    }
	  }
	}

	function beforeRender(_ref) {
	  var hydrate = _ref.hydrate;
	  isHydrating = hydrate;
	}

	function recolectHydrationChild(hydrationParent) {
	  var nativeLength = hydrationParent.childNodes.length;
	  var vdomLength = hydrationParent[HYDRATION_INDEX] || 0;

	  if (nativeLength - vdomLength > 0) {
	    for (var i = nativeLength - 1; i >= vdomLength; i--) {
	      if (__DEV__) {
	        warnForDeletedHydratableElement(hydrationParent, hydrationParent.childNodes[i]);
	      }

	      hydrationParent.removeChild(hydrationParent.childNodes[i]);
	    }
	  }

	  for (var j = hydrationParent.childNodes.length - 1; j >= 0; j--) {
	    recolectHydrationChild(hydrationParent.childNodes[j]);
	  }
	}

	function afterRender(_ref2) {
	  var container = _ref2.container;

	  if (isHydrating) {
	    // Remove native node when more then vdom node
	    recolectHydrationChild(container);
	    isHydrating = false;
	  }
	}
	/**
	 * Remove all children from node.
	 * @NOTE: Optimization at web.
	 */

	function removeChildren(node) {
	  node.textContent = EMPTY;
	}

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.warnForReplacedHydratebleElement = warnForReplacedHydratebleElement;
	exports.warnForDeletedHydratableElement = warnForDeletedHydratableElement;
	exports.warnForInsertedHydratedElement = warnForInsertedHydratedElement;
	exports.warning = void 0;
	var didWarnInvalidHydration = false;

	var __DEV__ = ("production") !== 'production';

	function warnForReplacedHydratebleElement(parentNode, clientNode, serverNode) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    } // shoudd not warn for replace comment, bescause it may be a placeholder from server


	    if (serverNode.nodeType === 8) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Expected server HTML to contain a matching %s in %s, but got %s.', getNodeName(clientNode), getNodeName(parentNode), getNodeName(serverNode));
	  }
	}

	function warnForDeletedHydratableElement(parentNode, child) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Did not expect server HTML to contain a %s in %s.', getNodeName(child), getNodeName(parentNode));
	  }
	}

	function warnForInsertedHydratedElement(parentNode, node) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Expected server HTML to contain a matching %s in %s.', getNodeName(node), getNodeName(parentNode));
	  }
	}
	/**
	 * Concat tagName、 id and class info to help locate a node
	 * @param {*} node HTMLElement
	 * @returns {string} for example: <div#home.rax-view.home>
	 */

	function getNodeName(node) {
	  var name = node.tagName.toLowerCase();
	  var id = node.id ? '#' + node.id : '';
	  var classStr = node.className || '';
	  var classList = classStr.split(' ').map(function (className) {
	    return className ? '.' + className : '';
	  });
	  return "<" + name + id + classList.join('') + ">";
	}

	var warning = function () {};

	exports.warning = warning;

	if (false) {
	  exports.warning = warning = function (template) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (typeof console !== 'undefined') {
	      var argsWithFormat = args.map(function (item) {
	        return '' + item;
	      });
	      argsWithFormat.unshift('Warning: ' + template); // Don't use spread (or .apply) directly because it breaks IE9

	      Function.prototype.apply.call(console.error, console, argsWithFormat);
	    } // For works in DevTools when enable `Pause on caught exceptions`
	    // that can find the component where caused this warning


	    try {
	      var argIndex = 0;
	      var message = 'Warning: ' + template.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (e) {}
	  };
	}

/***/ },
/* 146 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// js类型判断方法
	function isArray(item) {
	  return Array.isArray(item);
	}

	function isObject(item) {
	  return Object.prototype.toString.call(item) === '[object Object]';
	}

	function isString(item) {
	  return Object.prototype.toString.call(item) === '[object String]';
	}

	function isNumber(item) {
	  return Object.prototype.toString.call(item) === '[object Number]';
	}

	exports.isArray = isArray;
	exports.isObject = isObject;
	exports.isString = isString;
	exports.isNumber = isNumber;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.default = void 0;

	var DriverDOM = _interopRequireWildcard(__webpack_require__(148));

	function _getRequireWildcardCache() {
	  if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {
	    return cache;
	  };return cache;
	}

	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  }if (obj === null || (typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object" && typeof obj !== "function") {
	    return { default: obj };
	  }var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {
	    return cache.get(obj);
	  }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
	    if (Object.prototype.hasOwnProperty.call(obj, key)) {
	      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
	        Object.defineProperty(newObj, key, desc);
	      } else {
	        newObj[key] = obj[key];
	      }
	    }
	  }newObj.default = obj;if (cache) {
	    cache.set(obj, newObj);
	  }return newObj;
	}

	function cached(fn) {
	  var cache = Object.create(null);
	  return function (str) {
	    return cache[str] || (cache[str] = fn(str));
	  };
	}

	var EVENT_PREFIX_REG = /^on[A-Z]/;
	var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
	var isDimensionalProp = cached(function (prop) {
	  return !NON_DIMENSIONAL_REG.test(prop);
	});

	var setStyle = function (node, style) {
	  for (var prop in style) {
	    var value = style[prop];
	    var convertedValue = void 0;

	    if (typeof value === 'number' && isDimensionalProp(prop)) {
	      convertedValue = value + 'rpx';
	    } else {
	      convertedValue = value;
	    } // Support CSS custom properties (variables) like { --main-color: "black" }


	    if (prop[0] === '-' && prop[1] === '-') {
	      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
	      // style.setProperty do not support Camel-Case style properties.
	      node.style.setProperty(prop, convertedValue);
	    } else {
	      node.style[prop] = convertedValue;
	    }
	  }
	};

	var isEventProp = cached(function (prop) {
	  return EVENT_PREFIX_REG.test(prop);
	}); // Convert Unitless To Rpx defaultly

	var _default = Object.assign({}, DriverDOM, {
	  createElement: function (type, props) {
	    var style;
	    var attrs = {};
	    var events = [];

	    for (var prop in props) {
	      var value = props[prop];
	      if (prop === 'children') continue;

	      if (value != null) {
	        if (prop === 'style') {
	          style = value;
	        } else if (isEventProp(prop)) {
	          events.push({
	            name: prop.slice(2).toLowerCase(),
	            handler: value
	          });
	        } else {
	          if (prop === 'className') {
	            prop = 'class';
	          }

	          attrs[prop] = value;
	        }
	      }
	    }

	    var node = document._createElement({
	      tagName: type,
	      document: document,
	      attrs: attrs
	    });

	    if (style) {
	      setStyle(node, style);
	    }

	    events.forEach(function (_ref) {
	      var name = _ref.name,
	          handler = _ref.handler;
	      node.addEventListener(name, handler);
	    });
	    return node;
	  },
	  setStyle: setStyle
	});

	exports.default = _default;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.setTagNamePrefix = setTagNamePrefix;
	exports.createBody = createBody;
	exports.createEmpty = createEmpty;
	exports.createText = createText;
	exports.updateText = updateText;
	exports.createElement = createElement;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.replaceChild = replaceChild;
	exports.insertAfter = insertAfter;
	exports.insertBefore = insertBefore;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.removeAttribute = removeAttribute;
	exports.setAttribute = setAttribute;
	exports.setStyle = setStyle;
	exports.beforeRender = beforeRender;
	exports.afterRender = afterRender;
	exports.removeChildren = removeChildren;

	var _styleUnit = __webpack_require__(149);

	exports.setViewportWidth = _styleUnit.setViewportWidth;
	exports.setUnitPrecision = _styleUnit.setUnitPrecision;

	var _warning = __webpack_require__(152);

	/**
	 * Driver for Web DOM
	 **/
	// opacity -> opa
	// fontWeight -> ntw
	// lineHeight|lineClamp -> ne[ch]
	// flex|flexGrow|flexPositive|flexShrink|flexNegative|boxFlex|boxFlexGroup|zIndex -> ex(?:s|g|n|p|$)
	// order -> ^ord
	// zoom -> zoo
	// gridArea|gridRow|gridRowEnd|gridRowSpan|gridRowStart|gridColumn|gridColumnEnd|gridColumnSpan|gridColumnStart -> grid
	// columnCount -> mnc
	// tabSize -> bs
	// orphans -> orp
	// windows -> ows
	// animationIterationCount -> onit
	// borderImageOutset|borderImageSlice|borderImageWidth -> erim
	var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
	var EVENT_PREFIX_REG = /^on[A-Z]/;
	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var HTML = '__html';
	var INNER_HTML = 'innerHTML';
	var CLASS_NAME = 'className';
	var CLASS = 'class';
	var STYLE = 'style';
	var CHILDREN = 'children';
	var TEXT_CONTENT_ATTR = 'textContent';
	var CREATE_ELEMENT = 'createElement';
	var CREATE_COMMENT = 'createComment';
	var CREATE_TEXT_NODE = 'createTextNode';
	var SET_ATTRIBUTE = 'setAttribute';
	var REMOVE_ATTRIBUTE = 'removeAttribute';
	var SVG_NS = 'http://www.w3.org/2000/svg';
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;
	var TEXT_SPLIT_COMMENT = '|';
	var EMPTY = '';
	var HYDRATION_INDEX = '__i';
	var HYDRATION_APPEND = '__a';
	var WITH_INNERHTML = '__h';

	var __DEV__ = ("production") !== 'production';

	var tagNamePrefix = EMPTY; // Flag indicating if the diff is currently within an SVG

	var isSVGMode = false;
	var isHydrating = false;
	/**
	 * Camelize CSS property.
	 * Vendor prefixes should begin with a capital letter.
	 * For example:
	 * background-color -> backgroundColor
	 * -webkit-transition -> webkitTransition
	 */

	var camelizeStyleName = (0, _styleUnit.cached)(function (name) {
	  return name.replace(/-([a-z])/gi, function (s, g) {
	    return g.toUpperCase();
	  });
	});
	var isDimensionalProp = (0, _styleUnit.cached)(function (prop) {
	  return !NON_DIMENSIONAL_REG.test(prop);
	});
	var isEventProp = (0, _styleUnit.cached)(function (prop) {
	  return EVENT_PREFIX_REG.test(prop);
	});

	function setTagNamePrefix(prefix) {
	  tagNamePrefix = prefix;
	}

	function createBody() {
	  return document.body;
	}

	function createEmpty(component) {
	  var parent = component._parent;
	  var node;

	  if (isHydrating) {
	    var hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (hydrationChild.nodeType === COMMENT_NODE) {
	        return hydrationChild;
	      } else {
	        node = document[CREATE_COMMENT](EMPTY);
	        replaceChild(node, hydrationChild, parent);
	      }
	    } else {
	      node = document[CREATE_COMMENT](EMPTY);
	      node[HYDRATION_APPEND] = true;
	    }
	  } else {
	    node = document[CREATE_COMMENT](EMPTY);
	  }

	  return node;
	}

	function createText(text, component) {
	  var parent = component._parent;
	  var node;

	  if (isHydrating) {
	    var hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (hydrationChild.nodeType === TEXT_NODE) {
	        if (text !== hydrationChild[TEXT_CONTENT_ATTR]) {
	          hydrationChild[TEXT_CONTENT_ATTR] = text;
	        }

	        return hydrationChild;
	      } else {
	        node = document[CREATE_TEXT_NODE](text);
	        replaceChild(node, hydrationChild, parent);
	      }
	    } else {
	      node = document[CREATE_TEXT_NODE](text);
	      node[HYDRATION_APPEND] = true;
	    }
	  } else {
	    node = document[CREATE_TEXT_NODE](text);
	  }

	  return node;
	}

	function updateText(node, text) {
	  node[TEXT_CONTENT_ATTR] = text;
	}

	function findHydrationChild(parent) {
	  var childNodes = parent.childNodes;

	  if (parent[HYDRATION_INDEX] == null) {
	    parent[HYDRATION_INDEX] = 0;
	  }

	  var child = childNodes[parent[HYDRATION_INDEX]++]; // If child is an comment node for spliting text node, use the next node.

	  if (child && child.nodeType === COMMENT_NODE && child.data === TEXT_SPLIT_COMMENT) {
	    return childNodes[parent[HYDRATION_INDEX]++];
	  } else {
	    return child;
	  }
	}
	/**
	 * @param {string} type node type
	 * @param {object} props elemement properties
	 * @param {object} component component instance
	 * @param {boolean} __shouldConvertUnitlessToRpx should add unit when missing
	 */

	function createElement(type, props, component, __shouldConvertUnitlessToRpx) {
	  var parent = component._parent;
	  isSVGMode = type === 'svg' || parent && parent.namespaceURI === SVG_NS;
	  var node;
	  var hydrationChild = null;

	  function createNode() {
	    if (isSVGMode) {
	      node = document.createElementNS(SVG_NS, type);
	    } else if (tagNamePrefix) {
	      var _tagNamePrefix = typeof _tagNamePrefix === 'function' ? _tagNamePrefix(type) : _tagNamePrefix;

	      node = document[CREATE_ELEMENT](_tagNamePrefix + type);
	    } else {
	      node = document[CREATE_ELEMENT](type);
	    }
	  }

	  if (isHydrating) {
	    hydrationChild = findHydrationChild(parent);

	    if (hydrationChild) {
	      if (type === hydrationChild.nodeName.toLowerCase()) {
	        for (var attributes = hydrationChild.attributes, i = attributes.length; i--;) {
	          var attribute = attributes[i];
	          var attributeName = attribute.name;
	          var propValue = props[attributeName];

	          if ( // The class or className prop all not in props
	          attributeName === CLASS && props[CLASS_NAME] == null && propValue == null || // The style prop is empty object or not in props
	          attributeName === STYLE && (propValue == null || Object.keys(propValue).length === 0) || // Remove rendered node attribute that not existed
	          attributeName !== CLASS && attributeName !== STYLE && propValue == null) {
	            hydrationChild[REMOVE_ATTRIBUTE](attributeName);
	            continue;
	          }

	          if (attributeName === STYLE) {
	            // Remove invalid style prop, and direct reset style to child avoid diff style
	            // Set style to empty will change the index of style, so here need to traverse style backwards
	            for (var l = hydrationChild.style.length; 0 < l; l--) {
	              // Prop name get from node style is hyphenated, eg: background-color
	              var stylePropName = hydrationChild.style[l - 1]; // Style with webkit prefix, will cause stylePropName be undefined in iOS 10.1 and 10.2.
	              // Eg. when set transition-timing-function to be empty, it will also delete -webkit-transition-timing-function.

	              if (stylePropName) {
	                var camelizedStyleName = camelizeStyleName(stylePropName);

	                if (propValue[camelizedStyleName] == null) {
	                  hydrationChild.style[camelizedStyleName] = EMPTY;
	                }
	              }
	            }
	          }
	        }

	        node = hydrationChild;
	      } else {
	        createNode();
	        replaceChild(node, hydrationChild, parent);

	        if (__DEV__) {
	          (0, _warning.warnForReplacedHydratebleElement)(parent, node, hydrationChild);
	        }
	      }
	    } else {
	      createNode();
	      node[HYDRATION_APPEND] = true;

	      if (__DEV__) {
	        (0, _warning.warnForInsertedHydratedElement)(parent, node);
	      }
	    }
	  } else {
	    createNode();
	  }

	  for (var prop in props) {
	    var value = props[prop];
	    if (prop === CHILDREN) continue;

	    if (value != null) {
	      if (prop === STYLE) {
	        setStyle(node, value, __shouldConvertUnitlessToRpx);
	      } else if (isEventProp(prop)) {
	        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
	      } else {
	        setAttribute(node, prop, value, isSVGMode);
	      }
	    }
	  }

	  return node;
	}

	function appendChild(node, parent) {
	  if (!isHydrating || node[HYDRATION_APPEND]) {
	    return parent.appendChild(node);
	  }
	}

	function removeChild(node, parent) {
	  parent = parent || node.parentNode; // Maybe has been removed when remove child

	  if (parent) {
	    parent.removeChild(node);
	  }
	}

	function replaceChild(newChild, oldChild, parent) {
	  parent = parent || oldChild.parentNode;
	  parent.replaceChild(newChild, oldChild);
	}

	function insertAfter(node, after, parent) {
	  parent = parent || after.parentNode;
	  var nextSibling = after.nextSibling;

	  if (nextSibling) {
	    // Performance improve when node has been existed before nextSibling
	    if (nextSibling !== node) {
	      insertBefore(node, nextSibling, parent);
	    }
	  } else {
	    appendChild(node, parent);
	  }
	}

	function insertBefore(node, before, parent) {
	  parent = parent || before.parentNode;
	  parent.insertBefore(node, before);
	}

	function addEventListener(node, eventName, eventHandler) {
	  return node.addEventListener(eventName, eventHandler);
	}

	function removeEventListener(node, eventName, eventHandler) {
	  return node.removeEventListener(eventName, eventHandler);
	}

	function removeAttribute(node, propKey) {
	  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	    return node[INNER_HTML] = null;
	  }

	  if (propKey === CLASS_NAME) propKey = CLASS;

	  if (propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = null;
	    } catch (e) {}
	  }

	  node[REMOVE_ATTRIBUTE](propKey);
	}

	function setAttribute(node, propKey, propValue, isSvg) {
	  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	    // For reduce innerHTML operation to improve performance.
	    if (node[INNER_HTML] !== propValue[HTML]) {
	      node[INNER_HTML] = propValue[HTML];
	    }

	    node[WITH_INNERHTML] = true;
	    return;
	  }

	  if (propKey === CLASS_NAME) propKey = CLASS; // Prop for svg can only be set by attribute

	  if (!isSvg && propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = propValue;
	    } catch (e) {
	      node[SET_ATTRIBUTE](propKey, propValue);
	    }
	  } else {
	    node[SET_ATTRIBUTE](propKey, propValue);
	  }
	}
	/**
	 * @param {object} node target node
	 * @param {object} style target node style value
	 * @param {boolean} __shouldConvertUnitlessToRpx
	 */

	function setStyle(node, style, __shouldConvertUnitlessToRpx) {
	  for (var prop in style) {
	    var value = style[prop];
	    var convertedValue = void 0;

	    if (typeof value === 'number' && isDimensionalProp(prop)) {
	      if (__shouldConvertUnitlessToRpx) {
	        convertedValue = value + 'rpx'; // Transfrom rpx to vw

	        convertedValue = (0, _styleUnit.convertUnit)(convertedValue);
	      } else {
	        convertedValue = value + 'px';
	      }
	    } else {
	      convertedValue = (0, _styleUnit.convertUnit)(value);
	    } // Support CSS custom properties (variables) like { --main-color: "black" }


	    if (prop[0] === '-' && prop[1] === '-') {
	      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
	      // style.setProperty do not support Camel-Case style properties.
	      node.style.setProperty(prop, convertedValue);
	    } else {
	      node.style[prop] = convertedValue;
	    }
	  }
	}

	function beforeRender(_ref) {
	  var hydrate = _ref.hydrate;

	  // Nested render may reset `isHydrating`, `recolectHydrationChild` will not work correctly after render.
	  if (isHydrating && !hydrate) {
	    if (__DEV__) {
	      throw new Error('Nested render is not allowed when hydrating. ' + 'If necessary, trigger render in useEffect.');
	    } else {
	      throw new Error('Nested render found.');
	    }
	  }

	  isHydrating = hydrate;
	}

	function recolectHydrationChild(hydrationParent) {
	  // Should not to compare node with dangerouslySetInnerHTML because vdomLength is alway 0
	  if (hydrationParent[WITH_INNERHTML]) {
	    return;
	  }

	  var nativeLength = hydrationParent.childNodes.length;
	  var vdomLength = hydrationParent[HYDRATION_INDEX] || 0;

	  if (nativeLength - vdomLength > 0) {
	    for (var i = nativeLength - 1; i >= vdomLength; i--) {
	      if (__DEV__) {
	        (0, _warning.warnForDeletedHydratableElement)(hydrationParent, hydrationParent.childNodes[i]);
	      }

	      hydrationParent.removeChild(hydrationParent.childNodes[i]);
	    }
	  }

	  for (var j = hydrationParent.childNodes.length - 1; j >= 0; j--) {
	    recolectHydrationChild(hydrationParent.childNodes[j]);
	  }
	}

	function afterRender(_ref2) {
	  var container = _ref2.container;

	  if (isHydrating) {
	    // Remove native node when more then vdom node
	    recolectHydrationChild(container);
	    isHydrating = false;
	  }
	}
	/**
	 * Remove all children from node.
	 * @NOTE: Optimization at web.
	 */

	function removeChildren(node) {
	  node.textContent = EMPTY;
	}

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _interopRequireDefault = __webpack_require__(150);

	exports.__esModule = true;
	exports.isRpx = isRpx;
	exports.calcRpx = calcRpx;
	exports.getRpx = getRpx;
	exports.setRpx = setRpx;
	exports.getViewportWidth = getViewportWidth;
	exports.setViewportWidth = setViewportWidth;
	exports.setDecimalPixelTransformer = setDecimalPixelTransformer;
	exports.setUnitPrecision = setUnitPrecision;
	exports.cached = cached;
	exports.setTargetPlatform = setTargetPlatform;
	exports.convertUnit = void 0;

	var _defineProperty2 = _interopRequireDefault(__webpack_require__(151));

	var _universalEnv = __webpack_require__(11);

	var RPX_REG = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)rpx/g;

	var __rpx_coefficient__;

	var __viewport_width__; // convertUnit method targetPlatform


	var targetPlatform = _universalEnv.isWeb ? 'web' : _universalEnv.isWeex ? 'weex' : ''; // Init toFixed method

	var unitPrecision = 4;

	var toFixed = function (number, precision) {
	  var multiplier = Math.pow(10, precision + 1);
	  var wholeNumber = Math.floor(number * multiplier);
	  return Math.round(wholeNumber / 10) * 10 / multiplier;
	}; // Dedault decimal px transformer.


	var decimalPixelTransformer = function (rpx, $1) {
	  return $1 ? parseFloat(rpx) * getRpx() + 'px' : rpx;
	}; // Default decimal vw transformer.


	var decimalVWTransformer = function (rpx, $1) {
	  return $1 ? toFixed(parseFloat(rpx) / (getViewportWidth() / 100), unitPrecision) + 'vw' : rpx;
	}; // Default 1 rpx to 1 px


	if (getRpx() === undefined) {
	  setRpx(1);
	} // Viewport width, default to 750.


	if (getViewportWidth() === undefined) {
	  setViewportWidth(750);
	}

	var CustomMap = /*#__PURE__*/function () {
	  function CustomMap() {
	    (0, _defineProperty2["default"])(this, "__store", {});
	  }

	  var _proto = CustomMap.prototype;

	  _proto.set = function (key, value) {
	    this.__store[key + "_" + (typeof key === "undefined" ? "undefined" : _typeof(key))] = value;
	  };

	  _proto.get = function (key) {
	    return this.__store[key + "_" + (typeof key === "undefined" ? "undefined" : _typeof(key))];
	  };

	  _proto.has = function (key) {
	    return Object.prototype.hasOwnProperty.call(this.__store, key + "_" + (typeof key === "undefined" ? "undefined" : _typeof(key)));
	  };

	  return CustomMap;
	}();
	/**
	 * Is string contains rpx
	 * note: rpx is an alias to rpx
	 * @param {String} str
	 * @returns {Boolean}
	 */

	function isRpx(str) {
	  return typeof str === 'string' && RPX_REG.test(str);
	}
	/**
	 * Calculate rpx
	 * @param {String} str
	 * @returns {String}
	 */

	function calcRpx(str) {
	  if (targetPlatform === 'web') {
	    // In Web convert rpx to 'vw', same as driver-dom and driver-universal
	    // '375rpx' => '50vw'
	    return str.replace(RPX_REG, decimalVWTransformer);
	  } else if (targetPlatform === 'weex') {
	    // In Weex convert rpx to 'px'
	    // '375rpx' => 375 * px
	    return str.replace(RPX_REG, decimalPixelTransformer);
	  } else {
	    // Other platform return original value, like Mini-App and WX Mini-Program ...
	    // '375rpx' => '375rpx'
	    return str;
	  }
	}

	function getRpx() {
	  return __rpx_coefficient__;
	}

	function setRpx(rpx) {
	  __rpx_coefficient__ = rpx;
	}

	function getViewportWidth() {
	  return __viewport_width__;
	}

	function setViewportWidth(viewport) {
	  __viewport_width__ = viewport;
	}
	/**
	 * Set a function to transform unit of pixel,
	 * default to passthrough.
	 * @param {Function} transformer function
	 */

	function setDecimalPixelTransformer(transformer) {
	  decimalPixelTransformer = transformer;
	}
	/**
	 * Set unit precision.
	 * @param n {Number} Unit precision, default to 4.
	 */

	function setUnitPrecision(n) {
	  unitPrecision = n;
	}
	/**
	 * Create a cached version of a pure function.
	 * Use the first params as cache key.
	 */

	function cached(fn) {
	  var cache = new CustomMap();
	  return function () {
	    var key = arguments.length <= 0 ? undefined : arguments[0];
	    if (!cache.has(key)) cache.set(key, fn.apply(void 0, arguments));
	    return cache.get(key);
	  };
	}

	function setTargetPlatform(platform) {
	  targetPlatform = platform;
	}
	/**
	 * Convert rpx.
	 * @param value
	 * @param prop
	 * @param platform
	 * @return {String} Transformed value.
	 */

	var convertUnit = cached(function (value, prop, platform) {
	  if (platform) {
	    setTargetPlatform(platform);
	  }

	  return isRpx(value) ? calcRpx(value) : value;
	});
	exports.convertUnit = convertUnit;

/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}

	module.exports = _interopRequireDefault;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ },
/* 151 */
/***/ function(module, exports) {

	"use strict";

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	module.exports = _defineProperty;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.warnForReplacedHydratebleElement = warnForReplacedHydratebleElement;
	exports.warnForDeletedHydratableElement = warnForDeletedHydratableElement;
	exports.warnForInsertedHydratedElement = warnForInsertedHydratedElement;
	exports.warning = void 0;
	var didWarnInvalidHydration = false;

	var __DEV__ = ("production") !== 'production';

	function warnForReplacedHydratebleElement(parentNode, clientNode, serverNode) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    } // should not warn for replace comment, bescause it may be a placeholder from server


	    if (serverNode.nodeType === 8) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Expected server HTML to contain a matching %s in %s, but got %s.', getNodeName(clientNode), getNodeName(parentNode), getNodeName(serverNode));
	  }
	}

	function warnForDeletedHydratableElement(parentNode, child) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Did not expect server HTML to contain a %s in %s.', getNodeName(child), getNodeName(parentNode));
	  }
	}

	function warnForInsertedHydratedElement(parentNode, node) {
	  if (__DEV__) {
	    if (didWarnInvalidHydration) {
	      return;
	    }

	    didWarnInvalidHydration = true;
	    warning('Expected server HTML to contain a matching %s in %s.', getNodeName(node), getNodeName(parentNode));
	  }
	}
	/**
	 * Concat tagName、 id and class info to help locate a node
	 * @param {*} node HTMLElement
	 * @returns {string} for example: <div#home.rax-view.home>
	 */

	function getNodeName(node) {
	  // text node don`t have tagName
	  if (!node.tagName) {
	    return node.nodeName;
	  }

	  var name = node.tagName.toLowerCase();
	  var id = node.id ? '#' + node.id : '';
	  var classStr = node.className || '';
	  var classList = classStr.split(' ').map(function (className) {
	    return className ? '.' + className : '';
	  });
	  return "<" + name + id + classList.join('') + ">";
	}

	var warning = function () {};

	exports.warning = warning;

	if (false) {
	  exports.warning = warning = function (template) {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (typeof console !== 'undefined') {
	      var argsWithFormat = args.map(function (item) {
	        return '' + item;
	      });
	      argsWithFormat.unshift('Warning: ' + template); // Don't use spread (or .apply) directly because it breaks IE9

	      Function.prototype.apply.call(console.error, console, argsWithFormat);
	    } // For works in DevTools when enable `Pause on caught exceptions`
	    // that can find the component where caused this warning


	    try {
	      var argIndex = 0;
	      var message = 'Warning: ' + template.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      throw new Error(message);
	    } catch (e) {}
	  };
	}

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.getElementById = getElementById;
	exports.createBody = createBody;
	exports.createComment = createComment;
	exports.createEmpty = createEmpty;
	exports.createText = createText;
	exports.updateText = updateText;
	exports.createElement = createElement;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.replaceChild = replaceChild;
	exports.insertAfter = insertAfter;
	exports.insertBefore = insertBefore;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.removeAttribute = removeAttribute;
	exports.setAttribute = setAttribute;
	exports.setStyle = setStyle;
	exports.beforeRender = beforeRender;
	exports.afterRender = afterRender;

	var _styleUnit = __webpack_require__(149);

	var STYLE = 'style';
	var ID = 'id';
	var TEXT = 'text';
	var CHILDREN = 'children';
	var EVENT_PREFIX_REGEXP = /^on[A-Z]/;
	var ARIA_PREFIX_REGEXP = /^aria-/;
	var HYPHEN_REGEXP = /\-(\w)/;
	var EMPTY = '';

	function updateWeexTextValue(node) {
	  var value = node.children.map(function (child) {
	    // Comment node type
	    return child.nodeType === 8 ? child.value : EMPTY;
	  }).join(EMPTY);
	  node.setAttr('value', value);
	}

	var nodeMaps = {};
	/* global __weex_document__ */

	var document = (typeof __weex_document__ === "undefined" ? "undefined" : _typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' ? document : null;

	function getElementById(id) {
	  return nodeMaps[id];
	}

	function createBody(type, props) {
	  if (document.body) {
	    return document.body;
	  }

	  var documentElement = document.documentElement;
	  var body = document.createBody(type, props);
	  documentElement.appendChild(body);
	  return body;
	}

	function createComment(content) {
	  return document.createComment(content);
	}

	function createEmpty() {
	  return createComment(EMPTY);
	}

	function createText(text) {
	  // Use comment node type mock text node
	  return createComment(text);
	}

	function updateText(node, text) {
	  node.value = text;
	  updateWeexTextValue(node.parentNode);
	}

	function createElement(type, props) {
	  if (props === void 0) {
	    props = {};
	  }

	  var style = {};
	  var originStyle = props.style;

	  if (originStyle) {
	    for (var prop in originStyle) {
	      style[prop] = (0, _styleUnit.convertUnit)(originStyle[prop], prop);
	    }
	  }

	  var node = document.createElement(type, {
	    style: style
	  });

	  for (var _prop in props) {
	    var value = props[_prop];

	    if (_prop === CHILDREN) {
	      continue;
	    }

	    if (value != null) {
	      if (_prop === STYLE) {
	        continue;
	      } else if (EVENT_PREFIX_REGEXP.test(_prop)) {
	        var eventName = _prop.slice(2).toLowerCase();

	        addEventListener(node, eventName, value, props);
	      } else {
	        setAttribute(node, _prop, value);
	      }
	    }
	  }

	  return node;
	}

	function appendChild(node, parent) {
	  parent.appendChild(node);

	  if (parent.type === TEXT) {
	    updateWeexTextValue(parent);
	  }
	}

	function removeChild(node, parent) {
	  parent = parent || node.parentNode;
	  var id = node.attr && node.attr[ID];

	  if (id != null) {
	    nodeMaps[id] = null;
	  }

	  parent.removeChild(node);

	  if (parent.type === TEXT) {
	    updateWeexTextValue(parent);
	  }
	}

	function replaceChild(newChild, oldChild, parent) {
	  parent = parent || oldChild.parentNode;
	  var previousSibling = oldChild.previousSibling;
	  var nextSibling = oldChild.nextSibling;
	  removeChild(oldChild, parent);

	  if (previousSibling) {
	    insertAfter(newChild, previousSibling, parent);
	  } else if (nextSibling) {
	    insertBefore(newChild, nextSibling, parent);
	  } else {
	    appendChild(newChild, parent);
	  }
	}

	function insertAfter(node, after, parent) {
	  parent = parent || after.parentNode;
	  parent.insertAfter(node, after);

	  if (parent.type === TEXT) {
	    updateWeexTextValue(parent);
	  }
	}

	function insertBefore(node, before, parent) {
	  parent = parent || before.parentNode;
	  parent.insertBefore(node, before);

	  if (parent.type === TEXT) {
	    updateWeexTextValue(parent);
	  }
	}

	function addEventListener(node, eventName, eventHandler, props) {
	  // https://github.com/apache/incubator-weex/blob/master/runtime/vdom/Element.js#L421
	  var params = props[eventName + 'EventParams'];
	  return node.addEvent(eventName, eventHandler, params);
	}

	function removeEventListener(node, eventName, eventHandler) {
	  return node.removeEvent(eventName, eventHandler);
	}

	function removeAttribute(node, propKey, propValue) {
	  if (propKey == ID) {
	    nodeMaps[propValue] = null;
	  } // Weex native will crash when pass null value


	  return node.setAttr(propKey, undefined, false);
	}

	function setAttribute(node, propKey, propValue) {
	  if (propKey == ID) {
	    nodeMaps[propValue] = node;
	  } // Weex only support `ariaLabel` format, convert `aria-label` format to camelcase


	  if (ARIA_PREFIX_REGEXP.test(propKey)) {
	    propKey = propKey.replace(HYPHEN_REGEXP, function (m, p) {
	      return p.toUpperCase();
	    });
	  }

	  return node.setAttr(propKey, propValue, false);
	}

	function setStyle(node, style) {
	  for (var prop in style) {
	    // Translate `rpx` to weex `px`
	    style[prop] = (0, _styleUnit.convertUnit)(style[prop], prop);
	  }

	  node.setStyles(style);
	}

	function beforeRender() {
	  // Turn off batched updates
	  document.open(); // Set `rpx` unit converter

	  (0, _styleUnit.setRpx)(1);
	}

	function afterRender() {
	  if (document.listener && document.listener.createFinish) {
	    document.listener.createFinish();
	  } // Turn on batched updates


	  document.close();
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.createBody = createBody;
	exports.createEmpty = createEmpty;
	exports.createText = createText;
	exports.updateText = updateText;
	exports.createElement = createElement;
	exports.appendChild = appendChild;
	exports.removeChild = removeChild;
	exports.replaceChild = replaceChild;
	exports.insertAfter = insertAfter;
	exports.insertBefore = insertBefore;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.removeAttribute = removeAttribute;
	exports.setAttribute = setAttribute;
	exports.setStyle = setStyle;

	var _styleUnit = __webpack_require__(149);

	/**
	 * Driver for Kraken
	 **/
	var NON_DIMENSIONAL_REG = /opa|ntw|ne[ch]|ex(?:s|g|n|p|$)|^ord|zoo|grid|orp|ows|mnc|^columns$|bs|erim|onit/i;
	var EVENT_PREFIX_REG = /^on[A-Z]/;
	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var CLASS_NAME = 'className';
	var CLASS = 'class';
	var STYLE = 'style';
	var CHILDREN = 'children';
	var TEXT_CONTENT_ATTR = 'textContent';
	var CREATE_ELEMENT = 'createElement';
	var CREATE_COMMENT = 'createComment';
	var CREATE_TEXT_NODE = 'createTextNode';
	var SET_ATTRIBUTE = 'setAttribute';
	var REMOVE_ATTRIBUTE = 'removeAttribute';
	var EMPTY = '';
	var isEventProp = (0, _styleUnit.cached)(function (prop) {
	  return EVENT_PREFIX_REG.test(prop);
	});

	function createBody() {
	  return document.body;
	}

	function createEmpty() {
	  return document[CREATE_COMMENT](EMPTY);
	}

	function createText(text) {
	  return document[CREATE_TEXT_NODE](text);
	}

	function updateText(node, text) {
	  node[TEXT_CONTENT_ATTR] = text;
	}

	function createElement(type, props, component, __shouldConvertUnitlessToRpx) {
	  var node = document[CREATE_ELEMENT](type);

	  for (var prop in props) {
	    var value = props[prop];
	    if (prop === CHILDREN) continue;

	    if (value != null) {
	      if (prop === STYLE) {
	        setStyle(node, value, __shouldConvertUnitlessToRpx);
	      } else if (isEventProp(prop)) {
	        addEventListener(node, prop.slice(2).toLowerCase(), value, component);
	      } else {
	        setAttribute(node, prop, value);
	      }
	    }
	  }

	  return node;
	}

	function appendChild(node, parent) {
	  return parent.appendChild(node);
	}

	function removeChild(node, parent) {
	  parent = parent || node.parentNode; // Maybe has been removed when remove child

	  if (parent) {
	    parent.removeChild(node);
	  }
	}

	function replaceChild(newChild, oldChild, parent) {
	  parent = parent || oldChild.parentNode;
	  parent.replaceChild(newChild, oldChild);
	}

	function insertAfter(node, after, parent) {
	  parent = parent || after.parentNode;
	  var nextSibling = after.nextSibling;

	  if (nextSibling) {
	    // Performance improve when node has been existed before nextSibling
	    if (nextSibling !== node) {
	      insertBefore(node, nextSibling, parent);
	    }
	  } else {
	    appendChild(node, parent);
	  }
	}

	function insertBefore(node, before, parent) {
	  parent = parent || before.parentNode;
	  parent.insertBefore(node, before);
	}

	function addEventListener(node, eventName, eventHandler) {
	  return node.addEventListener(eventName, eventHandler);
	}

	function removeEventListener(node, eventName, eventHandler) {
	  return node.removeEventListener(eventName, eventHandler);
	}

	function removeAttribute(node, propKey) {
	  if (propKey === DANGEROUSLY_SET_INNER_HTML) return;
	  if (propKey === CLASS_NAME) propKey = CLASS;

	  if (propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = null;
	    } catch (e) {}
	  }

	  node[REMOVE_ATTRIBUTE](propKey);
	}

	function setAttribute(node, propKey, propValue) {
	  // For reduce innerHTML operation to improve performance.
	  if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	    warnUnsupport(DANGEROUSLY_SET_INNER_HTML);
	    return;
	  }

	  if (propKey === CLASS_NAME) propKey = CLASS;

	  if (propKey in node) {
	    try {
	      // Some node property is readonly when in strict mode
	      node[propKey] = propValue;
	    } catch (e) {
	      node[SET_ATTRIBUTE](propKey, propValue);
	    }
	  } else {
	    node[SET_ATTRIBUTE](propKey, propValue);
	  }
	}

	var isDimensionalProp = (0, _styleUnit.cached)(function (prop) {
	  return !NON_DIMENSIONAL_REG.test(prop);
	});

	function setStyle(node, style, __shouldConvertUnitlessToRpx) {
	  for (var prop in style) {
	    var value = style[prop];
	    var convertedValue = void 0;

	    if (typeof value === 'number' && isDimensionalProp(prop)) {
	      if (__shouldConvertUnitlessToRpx) {
	        convertedValue = value + 'rpx'; // Transfrom rpx to vw

	        convertedValue = (0, _styleUnit.convertUnit)(convertedValue, prop);
	      } else {
	        convertedValue = value + 'px';
	      }
	    } else {
	      convertedValue = (0, _styleUnit.convertUnit)(value, prop);
	    } // Support CSS custom properties (variables) like { --main-color: "black" }


	    if (prop[0] === '-' && prop[1] === '-') {
	      // reference: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty.
	      // style.setProperty do not support Camel-Case style properties.
	      node.style.setProperty(prop, convertedValue);
	    } else {
	      node.style[prop] = convertedValue;
	    }
	  }
	}

	function warnUnsupport(message) {
	  console.warn("[DriverKraken]: " + message + " is not supported.");
	}

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(156);

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/** @jsx createElement */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-div@3.0.1@@ali/rax-div/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _raxView = __webpack_require__(8);

	var _raxView2 = _interopRequireDefault(_raxView);

	var _raxImg = __webpack_require__(157);

	var _raxImg2 = _interopRequireDefault(_raxImg);

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isInChannel = _raxBase2.default.pageInfo.isInChannel;

	// 坑位曝光依赖
	// 如果是大作页容器，默认false，等待触发active事件后再去进行坑位曝光。
	// 如果是普通容器，默认true，直接进行坑位曝光。

	var isPageActive = !isInChannel;
	_raxBase2.default.YoukuEvent.on('pageShow', function () {
	  isPageActive = true;
	});
	_raxBase2.default.YoukuEvent.on('pageHide', function () {
	  isPageActive = false;
	});

	var Division = function (_Component) {
	  _inherits(Division, _Component);

	  function Division() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Division);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Division.__proto__ || Object.getPrototypeOf(Division)).call.apply(_ref, [this].concat(args))), _this), _this.doUserTrack = function (type) {
	      if (type === 'click') {
	        _raxBase2.default.sendClickEvent(_this.props);
	      }
	      if (type === 'expose') {
	        _raxBase2.default.sendExposeEvent(_this.props);
	      }
	    }, _this.canExpose = function () {
	      // 判断是否可以执行坑位的曝光操作
	      var trackExpose = !_this.props.disableExposeTrack;
	      return !_this.exposed && isPageActive && _this.divVisible && trackExpose;
	    }, _this.doExpose = function () {
	      if (_this.exposeTimeout || !_this.canExpose()) {
	        return;
	      }
	      _this.exposeTimeout = setTimeout(function () {
	        _this.exposeTimeout = null;
	        if (!_this.canExpose()) {
	          return;
	        }
	        _this.doUserTrack('expose');
	        _this.props.repeatExpose || (_this.exposed = true);
	      }, 100);
	    }, _this.tryClearTimeout = function () {
	      if (_this.exposeTimeout && !_this.canExpose()) {
	        clearTimeout(_this.exposeTimeout);
	        _this.exposeTimeout = null;
	      }
	    }, _this.onClick = function (e) {
	      var _this2 = _this,
	          props = _this2.props;
	      // 执行开发定义的点击回调

	      props.onClick && props.onClick(e);
	      var trackClick = !props.exposeOnly && !props.disableClickTrack;
	      // 点击埋点，如果是禁用Click埋点则不上报
	      trackClick && _this.doUserTrack('click');
	      // 跳转
	      props.jumpType && _raxBase2.default.jumpTo(props);
	      try {
	        // 触发点击事件供全局监听
	        _raxBase2.default.YoukuEvent.fire('divClick', _extends({}, _this.props));
	      } catch (err) {
	        console.error('divClick 事件处理异常catch：');
	        console.error(JSON.stringify(err));
	      }
	    }, _this.onDivAppear = function (e) {
	      // 执行开发定义的点击回调
	      _this.props.onAppear && _this.props.onAppear(e);
	      _this.divVisible = true;
	      _this.doExpose();
	    }, _this.onDivDisappear = function (e) {
	      // 执行开发定义的点击回调
	      _this.props.onDisappear && _this.props.onDisappear(e);
	      _this.divVisible = false;
	      _this.tryClearTimeout();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Division, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this3 = this;

	      _raxBase2.default.YoukuEvent.on('pageShow', function () {
	        // 清空曝光id列表，返回页面时重复曝光
	        _this3.exposed = false;
	        _this3.doExpose();
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      // posId调整后进行一次曝光操作
	      if (nextProps.posId !== this.props.posId) {
	        this.exposed = false;
	        this.doExpose();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var nativeProps = _extends({}, props, {
	        onAppear: this.onDivAppear,
	        onDisappear: this.onDivDisappear
	      });
	      var trackClick = !props.exposeOnly && !props.disableClickTrack;
	      if (props.jumpType || props.jumpUrl || props.posId && trackClick) {
	        // 有需要的时候才能加click不然无法冒泡
	        nativeProps.onClick = this.onClick;
	      }

	      // 处理样式类型
	      var propsStyle = props.style || {};
	      if (propsStyle && Array.isArray(propsStyle) && _raxBase2.default.assignStyle) {
	        // 将数组类型转成对象
	        propsStyle = _raxBase2.default.assignStyle(propsStyle);
	      }
	      // div默认添加position:relative属性
	      if (propsStyle && !propsStyle.position) {
	        propsStyle.position = 'relative';
	      }
	      nativeProps.style = propsStyle;

	      // 处理背景图片
	      var hasBackgroundImage = props.backgroundImage && props.backgroundImage.uri;
	      var backgroundImg = null;
	      if (hasBackgroundImage) {
	        var _props$backgroundImag = props.backgroundImage,
	            uri = _props$backgroundImag.uri,
	            left = _props$backgroundImag.left,
	            top = _props$backgroundImag.top,
	            opacity = _props$backgroundImag.opacity,
	            right = _props$backgroundImag.right,
	            bottom = _props$backgroundImag.bottom,
	            etc = _objectWithoutProperties(_props$backgroundImag, ['uri', 'left', 'top', 'opacity', 'right', 'bottom']);

	        var _props$backgroundImag2 = props.backgroundImage,
	            width = _props$backgroundImag2.width,
	            height = _props$backgroundImag2.height;

	        if (!width && !height) {
	          // 如果宽高都未设定，按容器的宽高来设置背景大小
	          width = propsStyle.width;
	          height = propsStyle.height;
	        }
	        backgroundImg = (0, _rax.createElement)(_raxImg2.default, _extends({
	          key: uri,
	          source: { uri: uri },
	          style: {
	            position: 'absolute',
	            left: left,
	            top: top,
	            right: right,
	            bottom: bottom,
	            width: width,
	            height: height,
	            opacity: opacity === undefined ? 1 : opacity
	          },
	          lazyload: false
	        }, etc, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 152
	          }
	        }));
	      }

	      return (0, _rax.createElement)(
	        _raxView2.default,
	        _extends({}, nativeProps, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 172
	          }
	        }),
	        backgroundImg,
	        props.children
	      );
	    }
	  }]);

	  return Division;
	}(_rax.Component);

	exports.default = Division;
	module.exports = exports['default'];

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(158);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-img@3.0.5@@ali/rax-img/src/index.js';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _raxPicture = __webpack_require__(17);

	var _raxPicture2 = _interopRequireDefault(_raxPicture);

	var _raxImage = __webpack_require__(19);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	var _raxBase = __webpack_require__(159);

	var Base = _interopRequireWildcard(_raxBase);

	var _universalEnv = __webpack_require__(11);

	var _pictureWeex = __webpack_require__(219);

	var _pictureWeex2 = _interopRequireDefault(_pictureWeex);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultProps = {
	  lazyload: false,
	  autoWebp: false,
	  autoCompress: false,
	  autoReplaceDomain: false,
	  autoScaling: false,
	  highQuality: false
	};

	var Img = function (_Component) {
	  _inherits(Img, _Component);

	  function Img() {
	    _classCallCheck(this, Img);

	    return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
	  }

	  _createClass(Img, [{
	    key: 'render',
	    value: function render() {
	      var mergedProps = _extends({}, defaultProps, this.props);
	      var source = mergedProps.source,
	          style = mergedProps.style;
	      // 默认gif图才会original，如果没设置quality而且是gif图，那么设置quality为original

	      if (!mergedProps.quality && source && source.uri && source.uri.indexOf && source.uri.indexOf('.gif') !== -1) {
	        mergedProps.quality = 'original';
	      }

	      // 处理样式类型
	      var propsStyle = style || {};

	      // 处理样式
	      if (propsStyle && Array.isArray(propsStyle) && Base.assignStyle) {
	        // 将数组类型转成对象
	        propsStyle = Base.assignStyle(propsStyle);
	      }

	      // 默认添加position：relative
	      if (!propsStyle.position) {
	        propsStyle.position = 'relative';
	      }

	      mergedProps.style = propsStyle;

	      // 修复weex下切换图片url无效的bug
	      if (_universalEnv.isWeex) {
	        return (0, _rax.createElement)(_pictureWeex2.default, _extends({}, mergedProps, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 57
	          }
	        }));
	      }

	      // 解决手淘H5下r1.ykimg.com域名图片加载不了的问题，替换为m.ykimg.com
	      if (_universalEnv.isWeb && Base.isTaobao && source && source.uri && source.uri.indexOf && source.uri.indexOf('r1.ykimg.com') !== -1) {
	        source.uri = source.uri.replace('r1.ykimg.com', 'm.ykimg.com');
	      }

	      if (_universalEnv.isKraken) {
	        return (0, _rax.createElement)(_raxImage2.default, _extends({}, mergedProps, {
	          __source: {
	            fileName: _jsxFileName,
	            lineNumber: 73
	          }
	        }));
	      }

	      return (0, _rax.createElement)(_raxPicture2.default, _extends({}, mergedProps, {
	        __source: {
	          fileName: _jsxFileName,
	          lineNumber: 76
	        }
	      }));
	    }
	  }]);

	  return Img;
	}(_rax.Component);

	exports.default = Img;
	module.exports = exports['default'];

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(160);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _tracker = __webpack_require__(161);

	var _tracker2 = _interopRequireDefault(_tracker);

	var _img = __webpack_require__(170);

	var _img2 = _interopRequireDefault(_img);

	var _env = __webpack_require__(201);

	var _env2 = _interopRequireDefault(_env);

	var _event = __webpack_require__(210);

	var _event2 = _interopRequireDefault(_event);

	var _util = __webpack_require__(173);

	var _util2 = _interopRequireDefault(_util);

	var _jumper = __webpack_require__(211);

	var _jumper2 = _interopRequireDefault(_jumper);

	var _share = __webpack_require__(216);

	var _share2 = _interopRequireDefault(_share);

	var _youkuUser = __webpack_require__(217);

	var _youkuUser2 = _interopRequireDefault(_youkuUser);

	var _bind = __webpack_require__(218);

	var _bind2 = _interopRequireDefault(_bind);

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Base = _extends({}, _tracker2.default, _img2.default, _env2.default, _event2.default, _util2.default, _jumper2.default, _share2.default, _youkuUser2.default, _bind2.default, _windvane2.default);

	exports.default = Base;
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _addEvents = __webpack_require__(164);

	var _addEvents2 = _interopRequireDefault(_addEvents);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(11);

	var _hlwV1UniversalGoldlog = __webpack_require__(50);

	var _hlwV1UniversalGoldlog2 = _interopRequireDefault(_hlwV1UniversalGoldlog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var objToQueryString = _url2.default.objToQueryString,
	    urlSearchObj = _url2.default.urlSearchObj,
	    parsePlayUrl = _url2.default.parsePlayUrl,
	    checkIfPlayUrl = _url2.default.checkIfPlayUrl;


	var weexConfig = window.__weex_config__ && window.__weex_config__.weex && window.__weex_config__.weex.config || {};
	var isInChannel = !!(_universalEnv.isWeex && weexConfig && weexConfig.instanceId || _universalEnv.isKraken && window.device.app.scene.indexOf('dazuoye') >= 0);

	var isIOS = _browser2.default.isIOS,
	    isAndroid = _browser2.default.isAndroid;
	// 大作页万花筒容器pv埋点使用

	var KSData = null;
	// 普通weex容器pv埋点及点击曝光埋点使用
	var YoukuTracker = null;
	try {
	  if (_universalEnv.isWeex) {
	    YoukuTracker = __webpack_require__(70);
	    KSData = __webpack_require__(71);
	  }
	} catch (e) {}

	// ab测试坑位的utParam信息
	var abUtParam = {};
	function appendABUtParam() {
	  var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  for (var key in param) {
	    param[key] && (abUtParam[key] = param[key]);
	  }
	}

	var globalLogParam = {};

	// 自定义埋点参数，用于全局上报，支付宝小程序H5定制需求
	var extraTrackParam = {};

	function setExtraTrackParam(param) {
	  extraTrackParam = _extends({}, extraTrackParam, param);
	}

	function getExtraTrackParam() {
	  return extraTrackParam;
	}

	// 保存模块全局的trackInfo信息, key为模块实例ID，value为自定义添加到trackInfo的值（对象），主要用于玩法模块gameId的上报
	var moduleTrackInfo = {};
	// 设置模块全局的trackInfo信息，示例：setModuleTrackInfo(433859, 'gameId', 123)
	function setModuleTrackInfo(id) {
	  var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  moduleTrackInfo[id] = _extends({}, moduleTrackInfo[id], param);
	}

	// 大作页中的PV埋点处理
	function doChannelContainerPV(pvParam) {
	  var instanceId = weexConfig.instanceId || '';
	  // 大作页容器pv设置

	  if (_universalEnv.isKraken) {
	    kraken.methodChannel.invokeMethod('YoukuTracker', 'setPageInfo', pvParam);
	  } else if (_universalEnv.isWeex) {
	    if (isIOS) {
	      // IOS 大作页容器直接设置即可
	      KSData && KSData.setPageInfo(instanceId, pvParam);
	    } else {
	      // 安卓大作页容器需要在pageactive后设置
	      _YoukuEvent2.default.on('pageShow', function () {
	        setTimeout(function () {
	          KSData && KSData.setPageInfo(instanceId, pvParam);
	        }, 100);
	      });
	    }
	  }
	}

	// 普通容器上报PV的方法
	function reportPV(pvParam) {
	  var isInPlayPageHalf = urlSearchObj.isInPlayPageHalf === 'true';

	  if (_universalEnv.isKraken) {
	    kraken.methodChannel.invokeMethod('YoukuTracker', 'reportPV', pvParam.pageName || '', pvParam.spm || '', _extends({}, pvParam.extend, {
	      isReportPV: '1'
	    }));
	  } else if (isAndroid && isInPlayPageHalf) {
	    // reportPV在Android播放页半屏页面下（播放页挂角、播放页banner打开的半屏容器），不会上报PV埋点
	    // 跟容器的实现机制有关，不当做单页面处理，需补充一次半屏的埋点
	    // IOS没问题
	    YoukuTracker && YoukuTracker.utCustomEvent && YoukuTracker.utCustomEvent(pvParam.pageName, 2001, '', '', '', _extends({}, pvParam.extend, {
	      isUtCustomEvent: '1',
	      spm: pvParam.spm,
	      'spm-cnt': pvParam.spm
	    }));
	  } else {
	    YoukuTracker && YoukuTracker.reportPV && YoukuTracker.reportPV(pvParam.pageName || '', pvParam.spm || '', _extends({}, pvParam.extend, {
	      isReportPV: 1
	    }));
	  }
	  sendCustomEvent({
	    customId: 'pv.validate',
	    customText: '页面曝光.验证',
	    trackInfo: {
	      pageName2: pvParam.pageName,
	      spm2: pvParam.spm
	    }
	  });
	}

	// 普通容器PV埋点处理
	function doNormalContainerPV(pvParam) {
	  if (!(_YoukuEvent2.default && _YoukuEvent2.default.on)) {
	    return;
	  }

	  if (_universalEnv.isKraken) {
	    reportPV(pvParam);
	  } else {
	    _YoukuEvent2.default.on('pageShow', function () {
	      reportPV(pvParam);
	    });
	  }
	}

	function setPVParam(pvParam) {
	  pvParam = pvParam || {};
	  var extend = pvParam.extend || {};
	  urlSearchObj.spm && (extend['spm-url'] = urlSearchObj.spm);
	  pvParam.pageExtInfo = pvParam.extend = _extends({}, extend, {
	    pageurl: window.location.href
	  });
	  globalLogParam = pvParam;
	  // 兼容旧逻辑
	  window.globalLogParam = pvParam;
	}

	function sendPV() {
	  (0, _addEvents2.default)();
	  var pvParam = globalLogParam;
	  if (isInChannel) {
	    doChannelContainerPV(pvParam);
	  } else {
	    doNormalContainerPV(pvParam);
	  }
	}

	function doPV(pvParam) {
	  setPVParam(pvParam);
	  sendPV();
	}

	var trackTypeMap = {
	  click: 'reportClick',
	  expose: 'reportExpose',
	  custom: 'reportCustomEvent'
	};

	var goldlogTypeMap = {
	  click: 'CLK',
	  expose: 'EXP',
	  custom: 'OTHER'
	};

	var from = urlSearchObj.from,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	function doUserTrack(type, params) {
	  var _ref = params || {},
	      spmcd = _ref.spmcd,
	      posText = _ref.posText,
	      trackInfo = _ref.trackInfo,
	      scm = _ref.scm,
	      controltype = _ref.controltype,
	      descm = _ref.descm,
	      etc = _objectWithoutProperties(_ref, ['spmcd', 'posText', 'trackInfo', 'scm', 'controltype', 'descm']);

	  if (!spmcd) {
	    return;
	  }
	  var spmc = spmcd && spmcd.split ? spmcd.split('.')[0] : '';

	  var _ref2 = globalLogParam || {
	    pageName: 'hollywood_default_page'
	  },
	      pageName = _ref2.pageName,
	      spm = _ref2.spm,
	      extend = _ref2.extend;

	  var _ref3 = extend || { actid: '', actpage: '' },
	      actid = _ref3.actid,
	      actpage = _ref3.actpage;

	  var defaultTrackInfo = _extends({
	    postext: posText,
	    pageurl: window.location.href,
	    actid: actid,
	    actpage: actpage
	  }, moduleTrackInfo[spmc] && moduleTrackInfo[spmc]);
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (defaultTrackInfo['en_spm'] = enSpm || spm);
	  (enScm || scm) && (defaultTrackInfo['en_scm'] = enScm || scm);
	  enId && (defaultTrackInfo['en_id'] = enId);
	  var mergedTrackInfo = trackInfo ? _extends({}, trackInfo, defaultTrackInfo) : _extends({}, defaultTrackInfo);

	  var moduleABParam = spmc && abUtParam[spmc] ? abUtParam[spmc] : '';
	  var pageABParam = abUtParam.pageParam ? abUtParam.pageParam : '';
	  var yk_abtest = '';
	  if (moduleABParam && pageABParam) {
	    yk_abtest = [moduleABParam, pageABParam].join('#');
	  } else if (moduleABParam || pageABParam) {
	    yk_abtest = moduleABParam || pageABParam;
	  }
	  var utParam = {
	    yk_abtest: yk_abtest
	  };
	  var trackObject = _extends({
	    pageName: pageName,
	    controlName: spmcd,
	    spm: (spm || '') + '.' + spmcd,
	    scm: scm || '',
	    controltype: controltype || 'common',
	    descm: descm || '',
	    // trackInfo参数值不能时对象或者数组，JSON.stringify之后也不行，会导致埋点参数解析失败
	    trackInfo: JSON.stringify(mergedTrackInfo),
	    utParam: JSON.stringify(utParam),
	    // 添加自定义参数
	    extraTrackParam: JSON.stringify(extraTrackParam)
	  }, etc);
	  urlSearchObj.spm && (trackObject['spm-url'] = urlSearchObj.spm);
	  try {
	    if (_universalEnv.isKraken) {
	      if (type === 'click' || type === 'expose') {
	        kraken.methodChannel.invokeMethod('YoukuTracker', trackTypeMap[type], trackObject);
	      } else {
	        kraken.methodChannel.invokeMethod('YoukuTracker', 'reportCustomEvent', pageName, '19999', 'hollywood_custom_event', '-', '-', trackObject);
	      }
	    } else if (_universalEnv.isWeex) {
	      if (type === 'click' || type === 'expose') {
	        YoukuTracker[trackTypeMap[type]](trackObject);
	      } else {
	        YoukuTracker.reportCustomEvent(pageName, '19999', 'hollywood_custom_event', '-', '-', trackObject);
	      }
	    } else {
	      trackObject.expand = trackObject.trackInfo;
	      _hlwV1UniversalGoldlog2.default.record('/yt/youkuapph5.normalpage.control', goldlogTypeMap[type], objToQueryString(trackObject), 'POST');
	      _browser2.default.isTaobao && _hlwV1UniversalGoldlog2.default.record('/youkuapph5.normalpage.control', goldlogTypeMap[type], objToQueryString(trackObject), 'POST');
	    }
	  } catch (e) {}
	}

	// 发送点击事件
	function sendClickEvent(params) {
	  var _ref4 = params || {},
	      posId = _ref4.posId,
	      posText = _ref4.posText,
	      trackInfo = _ref4.trackInfo,
	      scm = _ref4.scm,
	      controltype = _ref4.controltype,
	      descm = _ref4.descm,
	      trackArgs = _ref4.trackArgs;
	  // 额外的埋点参数，属性会打平放置在跟spm同级（一级）的信息里


	  var args = trackArgs && (typeof trackArgs === 'undefined' ? 'undefined' : _typeof(trackArgs)) === 'object' ? trackArgs : {};
	  doUserTrack('click', _extends({
	    spmcd: posId,
	    posText: posText,
	    scm: scm || getSCM(params),
	    controltype: controltype,
	    descm: descm,
	    trackInfo: trackInfo
	  }, args));
	}

	// 发送曝光事件
	function sendExposeEvent(params) {
	  var _ref5 = params || {},
	      posId = _ref5.posId,
	      posText = _ref5.posText,
	      trackInfo = _ref5.trackInfo,
	      scm = _ref5.scm,
	      controltype = _ref5.controltype,
	      descm = _ref5.descm,
	      trackArgs = _ref5.trackArgs;
	  // 额外的埋点参数，属性会打平放置在跟spm同级（一级）的信息里


	  var args = trackArgs && (typeof trackArgs === 'undefined' ? 'undefined' : _typeof(trackArgs)) === 'object' ? trackArgs : {};
	  doUserTrack('expose', _extends({
	    spmcd: posId,
	    posText: posText,
	    scm: scm || getSCM(params),
	    controltype: controltype,
	    descm: descm,
	    trackInfo: trackInfo
	  }, args));
	}

	// 发送自定义事件
	function sendCustomEvent(params) {
	  var _ref6 = params || {},
	      customId = _ref6.customId,
	      customText = _ref6.customText,
	      trackInfo = _ref6.trackInfo;

	  doUserTrack('custom', { spmcd: customId, posText: customText, trackInfo: trackInfo });
	}

	function getSPM(spmcd) {
	  var _ref7 = globalLogParam || {},
	      spm = _ref7.spm;

	  if (!spmcd) {
	    return spm || '';
	  }
	  return (spm || '') + '.' + spmcd;
	}

	function getSCM(params) {
	  if (!params) {
	    return '20140670.manual.0.non_';
	  }
	  var contentId = '';
	  if (typeof params === 'string') {
	    // 兼容旧版接口传string'scmc.scmd'的方式
	    contentId = params;
	  }
	  var scm = '';
	  var isAlg = false;
	  if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
	    // 如果直接指定scm，则用指定的scm
	    scm = params.scm;
	    if (scm) {
	      return scm;
	    }
	    // 是否是算法推荐
	    isAlg = params.isAlg;
	    // 如果指定的是contentId（即scmc.scmd）或scmcd
	    contentId = params.contentId || params.scmcd;
	    if (!contentId && params.posId) {
	      // 如果没有定制scm的contentId，则根据跳转规则自动补充
	      var jumpType = params.jumpType,
	          jumpUrl = params.jumpUrl,
	          videoId = params.videoId,
	          showId = params.showId,
	          posId = params.posId;
	      // scmc等于spmc

	      var scmc = posId.split('.')[0];
	      if (jumpType === 'url' && jumpUrl) {
	        if (checkIfPlayUrl(jumpUrl)) {
	          // 是播放页的url
	          var _parsePlayUrl = parsePlayUrl(jumpUrl),
	              vid = _parsePlayUrl.vid,
	              showid = _parsePlayUrl.showid;
	          // 判断是视频还是节目补充响应的scmd位


	          vid && (contentId = scmc + '.video_' + vid);
	          showid && (contentId = scmc + '.show_' + showid);
	        } else {
	          contentId = scmc + '.url_' + encodeURIComponent(jumpUrl);
	        }
	      } else if (jumpType === 'video' && videoId) {
	        contentId = scmc + '.video_' + videoId;
	      } else if (jumpType === 'show' && showId) {
	        contentId = scmc + '.show_' + showId;
	      } else {
	        contentId = '0.non_';
	      }
	    }
	  }
	  // scma目前是固定写死的20140670

	  var scmb = isAlg ? 'rcmd' : 'manual';
	  return '20140670' + '.' + scmb + '.' + contentId;
	}

	exports.default = {
	  doPV: doPV,
	  setPVParam: setPVParam,
	  appendABUtParam: appendABUtParam,
	  sendPV: sendPV,
	  sendClickEvent: sendClickEvent,
	  sendExposeEvent: sendExposeEvent,
	  sendCustomEvent: sendCustomEvent,
	  getSPM: getSPM,
	  getSCM: getSCM,
	  setExtraTrackParam: setExtraTrackParam,
	  getExtraTrackParam: getExtraTrackParam,
	  setModuleTrackInfo: setModuleTrackInfo
	};
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Event = __webpack_require__(163);

	var _Event2 = _interopRequireDefault(_Event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YoukuEvent = null;

	if (!window._YoukuEvent_NoConflict) {
	  window._YoukuEvent_NoConflict = new _Event2.default();
	}
	YoukuEvent = window.YoukuEvent = window._YoukuEvent_NoConflict;
	exports.default = YoukuEvent;
	module.exports = exports['default'];

/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Event = function () {
	  function Event() {
	    _classCallCheck(this, Event);

	    this._eventMap = {};
	  }
	  /**
	   * 增加事件监听
	   * @param type 事件类型
	   * @param cb 回调函数
	   * @returns this
	   */


	  _createClass(Event, [{
	    key: 'on',
	    value: function on(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      if (this._eventMap[type]) {
	        this._eventMap[type].push(cb);
	      } else {
	        this._eventMap[type] = [cb];
	      }
	      return this;
	    }

	    /**
	     * 移除事件监听
	     * @param type 事件类型
	     * @param cb 回调函数
	     * @returns this
	     */

	  }, {
	    key: 'off',
	    value: function off(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          if (cb === list[i]) {
	            list.splice(i, 1);
	            i--;
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * 是否包含某事件类型
	     * @param type
	     * @returns this
	     */

	  }, {
	    key: 'hasEvent',
	    value: function hasEvent(type) {
	      return this._eventMap[type] && this._eventMap[type].length ? true : false;
	    }

	    /**
	     * 派发事件
	     * @param type 事件类型
	     * @param data 发送数据
	     * @returns this
	     */

	  }, {
	    key: 'fire',
	    value: function fire(type, data) {
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          var cb = list[i];
	          cb && cb(data);
	        }
	      }
	      return this;
	    }

	    /**
	     * 基于fire新增派发事件notify，回调函数添加try/catch，防止一个回调执行报错导致其他回调不执行，淘票票的需求
	     * @param type 事件类型
	     * @param data 发送数据
	     * @returns this
	     */

	  }, {
	    key: 'notify',
	    value: function notify(type, data) {
	      var list = this._eventMap[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          var cb = list[i];
	          try {
	            cb && cb(data);
	          } catch (error) {
	            console.error(error);
	          }
	        }
	      }
	      return this;
	    }

	    /**
	     * 销毁事件
	     * @returns this
	     */

	  }, {
	    key: 'destroyEvent',
	    value: function destroyEvent() {
	      this._eventMap = {};
	      return this;
	    }

	    /**
	     * 销毁所有
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.fire('destroy');
	      this.destroyEnd();
	    }
	  }, {
	    key: 'destroyEnd',
	    value: function destroyEnd() {
	      var _this = this;
	      setTimeout(function () {
	        _this.fire('destroyEnd');
	        _this.destroyEvent();
	      }, 0);
	    }

	    /**
	     * 获取全部绑定事件
	     * @returns 全部绑定事件
	     */

	  }, {
	    key: 'getEventMap',
	    value: function getEventMap() {
	      return this._eventMap;
	    }
	  }]);

	  return Event;
	}();

	exports.default = Event;
	module.exports = exports['default'];

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addEvents;

	var _addWeexEvents = __webpack_require__(165);

	var _addWeexEvents2 = _interopRequireDefault(_addWeexEvents);

	var _addWebEvents = __webpack_require__(167);

	var _addWebEvents2 = _interopRequireDefault(_addWebEvents);

	var _addKrakenEvents = __webpack_require__(168);

	var _addKrakenEvents2 = _interopRequireDefault(_addKrakenEvents);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addEvents() {
	  if (_universalEnv.isKraken) {
	    (0, _addKrakenEvents2.default)();
	  } else if (_universalEnv.isWeex) {
	    (0, _addWeexEvents2.default)();
	  } else if (_universalEnv.isWeb) {
	    (0, _addWebEvents2.default)();
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;

	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';

	var globalEvent = null;
	try {
	  globalEvent = __webpack_require__(47);
	} catch (e) {}

	function addDocumentEvent(type, callback) {
	  var body = window.__weex_document__ && window.__weex_document__.body && window.__weex_document__.body;

	  body && body.addEvent && body.addEvent(type, callback);
	}

	function globalAddEvent(type, callback) {
	  globalEvent && globalEvent.addEventListener && globalEvent.addEventListener(type, callback);
	}

	var isFirstActivate = true;
	// 由于weex某些事件多次添加后后面的事件会覆盖前面的事件，因此统一使用YoukuEvent管理
	function addWeexEvents() {
	  if (!_universalEnv.isWeex) {
	    return;
	  }
	  isInPlayerTab || addDocumentEvent('viewappear', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'viewappear' });
	  });
	  isInPlayerTab || addDocumentEvent('viewdisappear', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'viewdisappear' });
	  });
	  addDocumentEvent('pageActivate', function (param) {
	    if (param.state) {
	      _YoukuEvent2.default.fire('pageShow', { type: 'pageActivate' });
	    } else {
	      _YoukuEvent2.default.fire('pageHide', { type: 'pageActivate' });
	    }
	  });
	  // 兼容安卓播放页tab资源位的事件
	  isInPlayerTab && globalAddEvent('pageActivate', function (param) {
	    if (param.state) {
	      _YoukuEvent2.default.fire('pageShow', { type: 'pageActivate' });
	      isFirstActivate && isInPlayerTab && setTimeout(function () {
	        _YoukuEvent2.default.fire('mainViewScrollTo', { position: 1 });
	      }, 100);
	      isFirstActivate = false;
	    } else {
	      _YoukuEvent2.default.fire('pageHide', { type: 'pageActivate' });
	    }
	  });
	  addDocumentEvent('userInfoChanged', function () {
	    _YoukuEvent2.default.fire('userInfoChanged');
	  });
	  globalAddEvent('AppInFrontend', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'AppInFrontend' });
	  });
	  // ios通知栏遮挡收回页面出现时
	  globalAddEvent('UIApplicationDidBecomeActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'UIApplicationDidBecomeActiveNotification' });
	  });
	  globalAddEvent('AppInBackground', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'AppInBackground' });
	  });
	  // ios通知栏遮挡页面时
	  globalAddEvent('UIApplicationWillResignActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'UIApplicationWillResignActiveNotification' });
	  });
	  globalAddEvent('YKEventLogin', function () {
	    _YoukuEvent2.default.fire('userLogin', true);
	  });
	}

	exports.default = addWeexEvents;
	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	// 解析url参数
	function parseUrlParam(url) {
	  if (!url) {
	    return {};
	  }
	  var questionMarkPosition = url.indexOf('?') !== -1 ? url.indexOf('?') : url.length;
	  var urlParams = url ? url.substring(questionMarkPosition + 1).split('&') : [];
	  var params = {};
	  for (var i = 0; i < urlParams.length; i++) {
	    var kv = urlParams[i];
	    var equalPos = kv.indexOf('=');
	    if (equalPos === -1) {
	      continue;
	    }
	    var key = kv.substring(0, equalPos);
	    var value = kv.substring(equalPos + 1);
	    key && value && (params[key] = value);
	  }
	  return params;
	}

	// 解析当前地址url参数
	function getURLSearchObj() {
	  return parseUrlParam(window.location.href);
	}

	// 把一个url的参数跟新的对象参数merge到一起，重复的以新对象为准。
	function mergeUrlSearch(url, searchObj) {
	  if (!url || !url.split) {
	    return '';
	  }
	  // [\u200B-\u200D\uFEFF\uFFFC]是为了处理”zero width space“，中文下unicode是 FFFC
	  // 见：https://stackoverflow.com/questions/11305797/remove-zero-width-space-characters-from-a-javascript-string
	  var urlNoSpace = url.replace(/\s|[\u200B-\u200D\uFEFF\uFFFC]/g, '');
	  var questionMarkPosition = urlNoSpace.indexOf('?') !== -1 ? urlNoSpace.indexOf('?') : urlNoSpace.length;
	  var pureUrl = urlNoSpace.substring(0, questionMarkPosition);
	  var searchStr = urlNoSpace.substring(questionMarkPosition + 1);

	  // const [pureUrl, searchStr] = url
	  //   .replace(/\s|[\u200B-\u200D\uFEFF\uFFFC]/g, '')
	  //   .split('?');

	  var searches = searchStr ? searchStr.split('&') : [];
	  var oldSearchObj = {};
	  for (var i = 0; i < searches.length; i++) {
	    var kv = searches[i];
	    var equalPos = kv.indexOf('=');
	    if (equalPos === -1) {
	      continue;
	    }
	    var key = kv.substring(0, equalPos);
	    var value = kv.substring(equalPos + 1);
	    key && value && (oldSearchObj[key] = value);
	  }
	  // if (!searchObj.refer) {
	  //   delete searchObj.refer;
	  // }
	  // if (!searchObj.from) {
	  //   delete searchObj.from;
	  // }
	  for (var _key in searchObj) {
	    if (!searchObj[_key] && searchObj[_key] !== 0) {
	      delete searchObj[_key];
	    }
	  }
	  var mergedSearchObj = _extends({}, oldSearchObj, searchObj);
	  // refer和from不覆盖
	  oldSearchObj.from && (mergedSearchObj.from = oldSearchObj.from);
	  oldSearchObj.refer && (mergedSearchObj.refer = oldSearchObj.refer);
	  var newSearchString = Object.keys(mergedSearchObj).map(function (k) {
	    return k + '=' + mergedSearchObj[k];
	  }).join('&');
	  return pureUrl + '?' + newSearchString;
	}

	// 判断是否是http地址，否则是scheme地址
	function checkIfHttpUrl(url) {
	  return (/^http/.test(url)
	  );
	}

	// 判断是否是weex地址
	function checkIfWeexUrl(url) {
	  return checkIfHttpUrl(url) && /wh_weex|_wx_tpl|wxbundle/.test(url);
	}

	// 判断是否是纯weex地址
	function checkIfPureWeexUrl(url) {
	  return checkIfHttpUrl(url) && /wh_weex=true/.test(url) && !/_wx_tpl|wxbundle/.test(url);
	}

	// 判断是否是播放页地址或者直播地址
	function checkIfPlayUrl(url) {
	  var reg = /v.youku.com\/v_show|m.youku.com\/video/;
	  return checkIfHttpUrl(url) && reg.test(url);
	}

	// 判断是否是直播地址
	function checkIfLiveUrl(url) {
	  var reg = /vku.youku.com\/live\/ilproom/;
	  return checkIfHttpUrl(url) && reg.test(url);
	}

	// 根据videoId和playlistId生成视频播放页地址
	function genVideoUrl(videoId, playlistId) {
	  videoId = videoId.replace(/==|id_/gi, '');
	  var url = 'https://m.youku.com/video/id_' + videoId + '==.html';
	  if (playlistId) {
	    url += '?playlistId=' + playlistId + '&playlist_id=' + playlistId + '&f=' + playlistId;
	  }
	  return url;
	}

	// 根据showId播放页地址
	function genShowUrl(showId) {
	  return 'https://m.youku.com/video/id_' + showId + '.html';
	}

	// 根据url解析出视频id、节目id、播单id等
	// 视频：https://m.youku.com/video/id_XMzc4NDkwNTIzMg==.html
	// 视频：https://v.youku.com/v_show/id_XMzgwNTIyOTQ4MA==.html
	// 节目：https://m.youku.com/video/id_4956302985e1497394c5.html
	// 播单：https://m.youku.com/video/id_4956302985e1497394c5.html?f=123123
	function parsePlayUrl(url) {
	  // vid: '',
	  // showid: '',
	  // playlistid: '',
	  // playlist_id: '',
	  var res = {};
	  if (!checkIfPlayUrl(url)) {
	    return res;
	  }
	  var urlParam = parseUrlParam(url);
	  var playlistId = urlParam.playlistId || urlParam.playlistid || urlParam.playlist_id || urlParam.f;
	  if (playlistId) {
	    res.playlistid = playlistId;
	    res.playlist_id = playlistId;
	  }
	  // 解析出节目或者视频id，https://m.youku.com/video/id_{这里的内容}==.html
	  var showVideoId = url.match(/id_(\w+)=*\.html/)[1];
	  // 判断是否是视频id，视频id以X开头
	  var isVideo = /^X/.test(showVideoId);
	  if (isVideo) {
	    res.vid = showVideoId;
	  } else {
	    res.showid = showVideoId;
	  }
	  return res;
	}

	function objToQueryString(obj) {
	  return Object.keys(obj).map(function (k) {
	    return k + '=' + obj[k];
	  }).join('&');
	}

	exports.default = {
	  checkIfHttpUrl: checkIfHttpUrl,
	  checkIfWeexUrl: checkIfWeexUrl,
	  checkIfPureWeexUrl: checkIfPureWeexUrl,
	  checkIfPlayUrl: checkIfPlayUrl,
	  genVideoUrl: genVideoUrl,
	  genShowUrl: genShowUrl,
	  parsePlayUrl: parsePlayUrl,
	  checkIfLiveUrl: checkIfLiveUrl,
	  parseUrlParam: parseUrlParam,
	  mergeUrlSearch: mergeUrlSearch,
	  getURLSearchObj: getURLSearchObj,
	  objToQueryString: objToQueryString,
	  urlSearchObj: getURLSearchObj()
	};
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function addWebEvents() {
	  if (!_universalEnv.isWeb) {
	    return;
	  }
	  // 页面后台
	  document.addEventListener('WV.Event.APP.Background', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'WV.Event.APP.Background' });
	  });
	  // 大作页tab切出
	  document.addEventListener('WV.Event.APP.PageDeactivate', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'WV.Event.APP.PageDeactivate' });
	  });
	  // 页面前台
	  document.addEventListener('WV.Event.APP.Active', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'WV.Event.APP.Active' });
	  });
	  // 大作页tab切回
	  document.addEventListener('WV.Event.APP.PageActivate', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'WV.Event.APP.PageActivate' });
	  });

	  document.addEventListener('visibilitychange', function () {
	    if (document.visibilityState === 'visible') {
	      _YoukuEvent2.default.fire('pageShow', { type: 'visibilitychange' });
	    }
	    if (document.visibilityState === 'hidden') {
	      _YoukuEvent2.default.fire('pageHide', { type: 'visibilitychange' });
	    }
	  });
	}

	exports.default = addWebEvents;
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 由于weex某些事件多次添加后后面的事件会覆盖前面的事件，因此统一使用YoukuEvent管理
	function addKrakenEvents() {
	  if (!_universalEnv.isKraken) {
	    return;
	  }

	  // 页面切入
	  document.addEventListener('pageActivate', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'pageActivate' });
	  });

	  // 页面切出
	  document.addEventListener('pageDeactivate', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'pageDeactivate' });
	  });

	  // APP切入
	  document.addEventListener('AppInFrontend', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'AppInFrontend' });
	  });

	  // APP切出
	  document.addEventListener('AppInBackground', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'AppInBackground' });
	  });

	  // ios通知栏遮挡收回页面出现时
	  document.addEventListener('UIApplicationDidBecomeActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageShow', { type: 'UIApplicationDidBecomeActiveNotification' });
	  });

	  // ios通知栏遮挡页面时
	  document.addEventListener('UIApplicationWillResignActiveNotification', function () {
	    _YoukuEvent2.default.fire('pageHide', { type: 'UIApplicationWillResignActiveNotification' });
	  });

	  // 登出成功
	  document.addEventListener('YKEventLogout', function () {
	    _YoukuEvent2.default.fire('userInfoChanged', false);
	  });

	  // 登录成功
	  document.addEventListener('YKEventLogin', function () {
	    _YoukuEvent2.default.fire('userLogin', true);
	    _YoukuEvent2.default.fire('userInfoChanged', true);
	  });
	}

	exports.default = addKrakenEvents;
	module.exports = exports['default'];

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ua = navigator.userAgent.toLowerCase();
	// 当前设备是否是Retina屏幕
	var isRetinaDevice = false;
	var devicePixelRatio = window.devicePixelRatio;
	if (devicePixelRatio >= 2) {
	  isRetinaDevice = true;
	}

	// 阿里经济体终端UA(UserAgent)规范：https://yuque.antfin-inc.com/velocity_cross-end-web/docs/wiki_app-ua
	// 但是有些app没有按照集团标准，比如优酷（尤其是weex容器）、UC；
	// 有些app在安卓和iOS下的UA规范也不一致，比如UC；
	// 安卓下有些app浏览器内核用的是UC会误判为UC，所以UC的相关判断建议放在最后；
	// 是否是阿里app
	var isAliApp = /(aliapp)+[\s]*/.test(ua);

	exports.default = {
	  isYouku: /youku|yk/.test(ua),
	  isYoukuHD: /youku_hd|youkuhd/.test(ua),
	  isYoukuMini: /(aliapp)+[\s]*(\([yk]+\/[\d|\.]+\))+/.test(ua) && /InsidePlus/gi.test(ua),

	  isDingding: /dingtalk/.test(ua),
	  isTaobao: /(aliapp)+[\s]*(\([tb]+\/[\d|\.]+\))+/.test(ua),
	  isTaobaoMiniApp: /(aliapp)+[\s]*(\([tb]+\/[\d|\.]+\))+/.test(ua) && /Triver/gi.test(ua),
	  isAlipay: /alipay/.test(ua),
	  isAlipayMiniApp: /alipay/.test(ua) && /MiniProgram/gi.test(ua),
	  isUC: /ucbrowser/.test(ua),
	  isTmall: /(aliapp)+[\s]*(\([tm]+\/[\d|\.]+\))+/.test(ua),
	  isDamai: /(aliapp)+[\s]*(\([dm]+\/[\d|\.]+\))+/.test(ua),
	  isTaopiaopiao: /(aliapp)+[\s]*(\([dy]+\/[\d|\.]+\))+/.test(ua),
	  isXianyu: /(aliapp)+[\s]*(\([fm]+\/[\d|\.]+\))+/.test(ua),
	  isEleme: /(aliapp)+[\s]*(\([elmc]+\/[\d|\.]+\))+/.test(ua),

	  isWeixin: /micromessenger/.test(ua),
	  isWechat: /micromessenger/.test(ua),
	  isQQ: /qq/.test(ua),
	  isQZone: /qzone/.test(ua),
	  isQQBrowser: /qqbrowser/.test(ua),
	  isToutiaoMiniApp: /ToutiaoMicroApp/gi.test(ua),
	  isWeibo: /weibo/.test(ua),

	  isAndroid: /android/.test(ua),
	  isIOS: /ipad|iphone/.test(ua),
	  isIPhone: /iphone/.test(ua),
	  isIPad: /ipad/.test(ua),

	  isWindvane: /windvane/.test(ua),
	  isAliApp: isAliApp,
	  isRetinaDevice: isRetinaDevice
	};
	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseImgUrl = __webpack_require__(171);

	var _parseImgUrl2 = _interopRequireDefault(_parseImgUrl);

	var _checkWebp = __webpack_require__(172);

	var _checkWebp2 = _interopRequireDefault(_checkWebp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  checkWebp: _checkWebp2.default,
	  parseImgUrl: _parseImgUrl2.default
	};
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = parseImgUrl;

	var _checkWebp = __webpack_require__(172);

	var _checkWebp2 = _interopRequireDefault(_checkWebp);

	var _util = __webpack_require__(173);

	var _util2 = _interopRequireDefault(_util);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 确定设备宽像素
	var devicePix = 0;

	if (!window.isServer) {
	  // DEVICE_WIDTH是好莱坞搭建页定义的宽度
	  var deviceWidth = window.DEVICE_WIDTH ? window.DEVICE_WIDTH : window.screen.availWidth || window.screen.width || 750;
	  var devicePixelRatio = window.devicePixelRatio || 1;
	  // Weex下屏幕宽度为设备实际像素宽度，Kraken、H5下屏幕宽度为CSS像素宽度
	  devicePix = _universalEnv.isWeex ? deviceWidth : deviceWidth * devicePixelRatio;
	}

	// 占位图
	var placeholder = 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==';

	// 获取图片像素值，将rem换算到px
	function getPx(value) {
	  // 根据屏幕宽度缩放
	  var result = value / 750 * devicePix;
	  return Math.round(result);
	}

	// x-oss-process=image/resize,w_750/format,webp/quality,Q_75
	// 图片地址优化处理，文档：https://help.aliyun.com/document_detail/44705.html
	function parseImgUrl(input) {
	  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!input) {
	    return '';
	  }
	  if (window.isServer) {
	    // 服务端不做处理，返回占位图片
	    return placeholder;
	  }
	  var isObj = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  var option = isObj ? obj : {};
	  var maxWidth = option.maxWidth,
	      disableWebp = option.disableWebp,
	      format = option.format,
	      quality = option.quality,
	      width = option.width;
	  // 去掉前缀

	  var imgUrl = input.replace(/^http(s?):/, '');
	  // 设置oss参数
	  var ossValue = 'image';
	  // 图片最大宽度，默认是最大设备宽度，可以通过maxWidth（px值）来设置，和图片实际显示宽度width（rem值）来设置
	  if (maxWidth || devicePix) {
	    var mw = Math.ceil(maxWidth ? maxWidth : devicePix);
	    // oss参数限制宽度最大为4096，超出会无法访问
	    var w = width ? Math.min(4096, mw, getPx(width)) : Math.min(4096, mw);
	    ossValue += '/resize,w_' + w;
	  }
	  // 处理图片格式转换
	  if (format) {
	    // 强制格式化
	    ossValue += '/format,' + format;
	  } else if ((0, _checkWebp2.default)() && !disableWebp) {
	    // 支持webp而且没有禁用webp的情况下转换成webp
	    ossValue += '/format,webp';
	  } else {
	    // 如果不支持webp或者禁用webp，而且是webp图片，强制转换成png
	    imgUrl.indexOf('.webp') !== -1 && (ossValue += '/format,png');
	  }
	  // 渐进式展示，仅对jpg格式有效
	  ossValue += '/interlace,1';
	  // 质量调整为绝对75，对jpg和webp格式的图片有效
	  if (quality) {
	    ossValue += '/quality,Q_' + obj.quality;
	  }
	  return _util2.default.mergeUrlSearch(imgUrl, { 'x-oss-process': ossValue });
	}
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = checkWebp;

	var _universalEnv = __webpack_require__(11);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isSupportWebp = false;

	if (window.isServer) {
	  isSupportWebp = false;
	} else if (_universalEnv.isWeex) {
	  // 默认只有优酷weex支持webp
	  if (_browser2.default.isYouku) {
	    isSupportWebp = true;
	  } else {
	    isSupportWebp = false;
	  }
	} else if (_universalEnv.isKraken) {
	  isSupportWebp = true;
	} else {
	  try {
	    isSupportWebp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
	  } catch (e) {}
	}

	function checkWebp() {
	  return isSupportWebp;
	}
	module.exports = exports['default'];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _compareVersion = __webpack_require__(174);

	var _compareVersion2 = _interopRequireDefault(_compareVersion);

	var _requestMtop = __webpack_require__(175);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _requestHsf = __webpack_require__(183);

	var _requestHsf2 = _interopRequireDefault(_requestHsf);

	var _loadResource = __webpack_require__(186);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _closePage = __webpack_require__(187);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(190);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _pageStorage = __webpack_require__(182);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _getCookie = __webpack_require__(191);

	var _getCookie2 = _interopRequireDefault(_getCookie);

	var _read = __webpack_require__(192);

	var _read2 = _interopRequireDefault(_read);

	var _getComponentRect = __webpack_require__(193);

	var _getComponentRect2 = _interopRequireDefault(_getComponentRect);

	var _queryMedia = __webpack_require__(194);

	var _queryMedia2 = _interopRequireDefault(_queryMedia);

	var _unit = __webpack_require__(195);

	var _unit2 = _interopRequireDefault(_unit);

	var _theme = __webpack_require__(196);

	var _theme2 = _interopRequireDefault(_theme);

	var _getGeoLocation = __webpack_require__(197);

	var _getGeoLocation2 = _interopRequireDefault(_getGeoLocation);

	var _devtool = __webpack_require__(198);

	var _devtool2 = _interopRequireDefault(_devtool);

	var _isType = __webpack_require__(184);

	var _isType2 = _interopRequireDefault(_isType);

	var _getBuName = __webpack_require__(181);

	var _getBuName2 = _interopRequireDefault(_getBuName);

	var _font = __webpack_require__(199);

	var _font2 = _interopRequireDefault(_font);

	var _finishTask = __webpack_require__(200);

	var _finishTask2 = _interopRequireDefault(_finishTask);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _extends({}, _url2.default, _loadResource2.default, {
	  isAppInstalled: _isAppInstalled2.default,
	  pageStorage: _pageStorage2.default,
	  closePage: _closePage2.default,
	  compareVersion: _compareVersion2.default,
	  requestMtop: _requestMtop2.default,
	  requestHsf: _requestHsf2.default,
	  getCookie: _getCookie2.default,
	  read: _read2.default,
	  getComponentRect: _getComponentRect2.default
	}, _queryMedia2.default, _unit2.default, _getGeoLocation2.default, _devtool2.default, _isType2.default, {
	  getBuName: _getBuName2.default
	}, _font2.default, {
	  theme: _theme2.default
	}, _finishTask2.default);
	module.exports = exports['default'];

/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = compareVersion;
	// 比较两个version，ab相等返回0；a高于b返回1；a小于b返回-1；
	function compareVersion(versionA, versionB) {
	  if (versionA === versionB) {
	    return 0;
	  }
	  var versionAArr = versionA.split('.').map(function (v) {
	    return Number(v);
	  });
	  var versionBArr = versionB.split('.').map(function (v) {
	    return Number(v);
	  });
	  for (var i = 0; i < Math.max(versionBArr.length, versionAArr.length); i++) {
	    if (versionAArr[i] === undefined) {
	      return -1;
	    }
	    if (versionBArr[i] === undefined) {
	      return 1;
	    }
	    if (versionAArr[i] > versionBArr[i]) {
	      return 1;
	    }
	    if (versionAArr[i] < versionBArr[i]) {
	      return -1;
	    }
	  }
	  return 0;
	}
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _universalEnv = __webpack_require__(11);

	var _universalMtop = __webpack_require__(176);

	var _universalMtop2 = _interopRequireDefault(_universalMtop);

	var _getBuName = __webpack_require__(181);

	var _getBuName2 = _interopRequireDefault(_getBuName);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _requestHsf = __webpack_require__(183);

	var _requestHsf2 = _interopRequireDefault(_requestHsf);

	var _requestKraken = __webpack_require__(185);

	var _requestKraken2 = _interopRequireDefault(_requestKraken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var Mtop = _universalEnv.isKraken ? _requestKraken2.default : _universalMtop2.default;
	var urlSearchObj = _url2.default.urlSearchObj;


	var APP_KEYS = {
	  daily: 4272,
	  pre: 24679788,
	  release: 24679788
	};

	var DOMAIN_PREFIX = {
	  daily: 'daily-acs',
	  pre: 'pre-acs',
	  release: 'acs'
	};

	// 接口域名白名单，有些MTOP接口域名需要特殊处理，有的接口支持多域名但是只能固定BU，例如好莱坞页面获取页面数据的MTOP接口
	var API_BU_MAP = {
	  'mtop.youku.hollywood.api.page.get.v2': 'youku'
	};

	// 通用调用mtop接口方法
	function requestMtop() {
	  var _this = this;

	  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var ctx = arguments[1];

	  // 服务端渲染下使用
	  if (window.isServer) {
	    console.log('调用requestHsf方法!');
	    return new Promise(function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
	        var result, res;
	        return _regenerator2.default.wrap(function (_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	                _context.next = 3;
	                return (0, _requestHsf2.default)(args, ctx);

	              case 3:
	                result = _context.sent;
	                res = (0, _requestHsf.processResult)(result);

	                resolve(res);
	                _context.next = 11;
	                break;

	              case 8:
	                _context.prev = 8;
	                _context.t0 = _context['catch'](0);

	                reject(_context.t0);

	              case 11:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, _this, [[0, 8]]);
	      }));

	      return function () {
	        return _ref.apply(this, arguments);
	      };
	    }());
	  }
	  var data = {};
	  if (args.data) {
	    // 一般的mtop接口直接传data对象
	    data = args.data;
	  } else if (args.bizType && args.bizParam) {
	    // aplatform接口需要传bizType和bizParam参数，两个参数都是字符串形式
	    data = {
	      bizType: args.bizType,
	      bizParam: _typeof(args.bizParam) === 'object' ? JSON.stringify(args.bizParam) : args.bizParam
	    };
	  } else if (args.req) {
	    // GMP接口需要传req参数，req参数是字符串形式
	    data = {
	      req: _typeof(args.req) === 'object' ? JSON.stringify(args.req) : args.req
	    };
	  }

	  var env = urlSearchObj.env;
	  if (args.env) {
	    env = args.env;
	  }

	  var asac = data.asac || args.asac;

	  //判断是否需要安全码
	  if (asac) {
	    data.asac = data.asac || args.asac;
	  }

	  // 判断是否采集ua
	  if (data.ua || args.ua) {
	    data.ua = data.ua || args.ua;
	  }

	  var params = {
	    api: args.api, // 接口api
	    v: args.v || '1.0', // 接口版本
	    ecode: args.ecode || 0, // 0:不需要登录, 1:需要登录
	    appKey: APP_KEYS[env] || APP_KEYS.release, // appKey，h5下必须
	    type: args.type || 'GET', // 请求方式
	    isSec: args.isSec || 0, // 1:客户端请求启动WUA，一般调用需要安全码的接口需传1
	    dataType: args.dataType || 'jsonp', // 返回数据类型
	    timeout: args.timeout || 10000, // 超时时间
	    data: data
	  };

	  // 判断是否强制请求为客户端请求
	  if (args.WindVaneRequest) {
	    params.WindVaneRequest = true;
	  }

	  // 判断是否强制请求为H5请求
	  if (args.H5Request) {
	    params.H5Request = true;
	  }

	  // 更改服务端返回结果中的布尔和数字类型, 值为 'original' 或者 ‘string’
	  if (args.valueType) {
	    params.valueType = args.valueType;
	  }

	  // 添加安全码参数，https://yuque.antfin-inc.com/igp0om/yd98s2/ifb1if#IVJsy
	  if (asac) {
	    if (params.dataType.toLowerCase() === 'jsonp') {
	      params.ext_querys = {
	        asac: data.asac
	      };
	    } else {
	      params.ext_headers = {
	        asac: data.asac
	      };
	    }
	  }

	  // 判断是否需要添加项目标，用于淘票票调试日常环境
	  if (urlSearchObj.waptest_project_id) {
	    params.tb_eagleeyex_scm_project = urlSearchObj.waptest_project_id;
	  }

	  var buName = API_BU_MAP[args.api] || (0, _getBuName2.default)();

	  setMtopConfig(buName, env);

	  // 慢接口上报
	  var timer = setTimeout(function () {
	    console.info({
	      biz_type: 'apiTimeout', //接口错误
	      client_msg: {
	        api: args.api,
	        status: 'apiTimeout',
	        params: params
	      }
	    });
	  }, 5000);

	  // 调用Rax的mtop接口
	  return new Promise(function (resolve, reject) {
	    Mtop.request(params, function (res) {
	      timer && clearTimeout(timer);
	      resolve(res);
	    }, function (err) {
	      console.info({
	        biz_type: 'apiError', //接口错误
	        client_msg: {
	          api: args.api, //mtop接口名
	          method: args.type || 'GET', //请求类型
	          type: args.dataType || 'jsonp', //数据请求类型
	          status: 200, //错误状态码，如有
	          statusText: 'apiError', //错误状态，默认即可
	          params: params, //接口请求参数
	          response: err //接口返回，如有
	        }
	      });
	      reject(err);
	    });
	  });
	}

	// 设置Mtop
	function setMtopConfig(buName, env) {
	  if (buName === 'damai') {
	    var getEvn = function () {
	      var ret = 'm';
	      if (env === 'waptest' || location.host.indexOf('waptest') !== -1) {
	        ret = 'waptest';
	      } else if (env === 'wapa' || location.host.indexOf('wapa') !== -1) {
	        ret = 'wapa';
	      }
	      return MTOP_CONF[ret];
	    };

	    // 大麦
	    var MTOP_CONF = {
	      waptest: {
	        sub: 'mtop',
	        main: 'damai.test'
	      },
	      wapa: {
	        sub: 'pre-mtop',
	        main: 'damai.cn'
	      },
	      m: {
	        sub: 'mtop',
	        main: 'damai.cn'
	      }
	    };

	    if (!location.host.includes('taobao')) {
	      var envObj = getEvn();
	      Mtop.config('subDomain', envObj.sub); // mtop的子域
	      Mtop.config('mainDomain', envObj.main); // mtop的主域
	      Mtop.config('prefix', ''); // mtop的前缀
	      // fix 非法请求，保证 mtopDomain 和 pageDomain一致
	      if (location.host.indexOf('damai.cn') >= 0) {
	        Mtop.config('pageDomain', envObj.main);
	      }
	    }
	  } else if (buName === 'taopiaopiao' || buName === 'bendishenghuo') {
	    // 淘票票
	    var host = window.location.host;
	    var isTpp = host.search(/\btaopiaopiao\.com\b/i) > -1;
	    var isWaptest = env === 'waptest' || host.search(/\.waptest\./i) > -1;
	    var isWapa = env === 'wapa' || host.search(/\.wapa\.|\bpre-tpp-act\b/i) > -1;
	    Mtop.config('mainDomain', isTpp ? 'taopiaopiao.com' : 'taobao.com'); // mtop的主域
	    Mtop.config('subDomain', isWaptest ? 'waptest' : isWapa ? 'wapa' : 'm'); // mtop的子域
	    Mtop.config('prefix', DOMAIN_PREFIX[env] || DOMAIN_PREFIX.release); // mtop的前缀
	  } else {
	    // 优酷和其他情况
	    Mtop.config('subDomain', ''); // mtop的子域
	    Mtop.config('mainDomain', 'youku.com'); // mtop的主域
	    Mtop.config('prefix', DOMAIN_PREFIX[env] || DOMAIN_PREFIX.release); // mtop的前缀
	  }
	}

	exports.default = requestMtop;
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = void 0;

	var _universalEnv = __webpack_require__(11);

	var _universalTracker = _interopRequireDefault(__webpack_require__(177));

	var _help = __webpack_require__(179);

	var _alimp = _interopRequireDefault(__webpack_require__(180));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }return target;
	  };return _extends.apply(this, arguments);
	}

	var Mtop;
	var Windvane;

	if (_universalEnv.isWeex) {
	  try {
	    Mtop = __weex_require__('@weex-module/mtop'); // eslint-disable-line
	  } catch (e) {
	    console.warn('Mtop require error');
	  }

	  try {
	    Windvane = __weex_require__('@weex-module/windvane'); // eslint-disable-line
	  } catch (e) {
	    console.warn('Windvane require error');
	  }
	} else if (_universalEnv.isWeb) {
	  if (typeof lib == 'undefined' || !lib.mtop) {
	    __webpack_require__(86);
	  }
	}

	function requestByWindvane(params, successCallback, failureCallback) {
	  if (Windvane && Windvane.call) {
	    params.param = params.data || params.param;

	    if (params.type === 'POST') {
	      params.post = '1';
	    }

	    Windvane.call({
	      "class": 'MtopWVPlugin',
	      method: 'send',
	      data: params
	    }, function (retJson) {
	      if (typeof retJson === 'string') {
	        retJson = JSON.parse(retJson);
	      }

	      if (retJson.retType === _help.RESPONSE_TYPE.SUCCESS || retJson.ret && retJson.ret[0].indexOf('SUCCESS') > -1) {
	        successCallback && successCallback(retJson);
	      } else {
	        failureCallback && failureCallback(retJson);
	      }
	    });
	  }
	}

	function processRetType(result) {
	  var ret = result.ret || '';
	  var retType;

	  if (Array.isArray(ret)) {
	    ret = ret.join(',');
	  }

	  if (ret.indexOf('SUCCESS') > -1) {
	    retType = _help.RESPONSE_TYPE.SUCCESS;
	  } else if (ret.indexOf('TOKEN_EMPTY') > -1 || ret.indexOf('TOKEN_EXOIRED') > -1) {
	    retType = _help.RESPONSE_TYPE.TOKEN_EXPIRED;
	  } else if (ret.indexOf('SESSION_EXPIRED') > -1 || ret.indexOf('SID_INVALID') > -1 || ret.indexOf('AUTH_REJECT') > -1 || ret.indexOf('NEED_LOGIN') > -1) {
	    retType = _help.RESPONSE_TYPE.SESSION_EXPIRED;
	  } else {
	    retType = _help.RESPONSE_TYPE.ERROR;
	  }

	  return retType;
	}

	function requestByMtop(params, successCallback, failureCallback) {
	  if (Mtop.request) {
	    if (_universalEnv.isWeex && params.dataType && /^(original){0,1}jsonp$/.test(params.dataType)) {
	      params.dataType = params.dataType.replace('jsonp', 'json');
	    } // 兼容接口超时不返回问题


	    var timer = setTimeout(function () {
	      failureCallback({
	        ret: ['TIMEOUT::接口超时'],
	        retType: _help.RESPONSE_TYPE.ERROR
	      });
	    }, params.timeout || 20000);
	    Mtop.request(params, function (result) {
	      clearTimeout(timer);
	      result.retType = processRetType(result); // 兼容 iOS 端超时不走 error 问题，

	      if (result && result.MP_TIME_OUT) {
	        failureCallback({
	          ret: ['TIMEOUT::接口超时'],
	          retType: -1
	        });
	        return;
	      }

	      successCallback(result);
	    }, function (error) {
	      clearTimeout(timer);
	      error.retType = processRetType(error);
	      failureCallback(error);
	    });
	  }
	}

	function getReportUrl(mtopParams) {
	  var pageUrl = '';

	  if (_universalEnv.isMiniApp) {
	    pageUrl = mtopParams.miniAppID ? "UN_MINIAPP/" + mtopParams.miniAppID : 'UN_MINIAPP';
	  } else {
	    pageUrl = location.hostname + location.pathname;
	  }

	  pageUrl = "//tarzan/error/" + pageUrl + "/" + mtopParams.api + "/" + mtopParams.v;
	  return pageUrl;
	}
	/**
	 * @description 接口异常详细日志上报
	 * @param mtopParams {Object} mtop请求参数
	 * @param error {string} 错误日志
	 * @param errorCode {string} 错误编码
	 */

	function reportError(mtopParams, error, errorCode) {
	  if (mtopParams.disableTracker) {
	    return;
	  }

	  var pageUrl = getReportUrl(mtopParams);

	  _universalTracker["default"].report({
	    url: pageUrl,
	    message: JSON.stringify(error),
	    reverse1: errorCode,
	    type: 'mtop'
	  });
	}
	/**
	 * @description 上报接口性能
	 * @param mtopParams {Object} mtop请求参数
	 * @param time {string} 请求时间
	 * @param state {string} 接口状态
	 */

	function reportMopPerf(mtopParams, time, state) {
	  if (!mtopParams.disableTracker && _universalTracker["default"] && _universalTracker["default"].report) {
	    _universalTracker["default"].report({
	      url: getReportUrl(mtopParams),
	      success: state || '',
	      timing: time || '-1',
	      sampling: 100,
	      message: 'mtop调用',
	      type: 'mtop_perf'
	    });
	  }
	}
	/**
	 * @description 参数解析
	 * @param params {Object} 接口配置入参
	 * @param requires {Array} 用户配置的接口必须入参，可选参数，如不设置，则全部必选
	 * @returns {string} 解析结果
	 */

	function parseMtopParams(params, requires, encodeParam) {
	  var result;

	  if (params) {
	    result = [];

	    for (var key in params) {
	      if (params.hasOwnProperty(key)) {
	        if (!requires || requires.indexOf(key) > -1) {
	          if (params[key] !== undefined && params[key] !== '') {
	            result.push(key + '-' + (encodeParam ? encodeURIComponent(params[key]) : params[key]));
	          }
	        }
	      }
	    }

	    result.sort();
	  } else {
	    result = [];
	  }

	  return result.join('_');
	}
	/**
	 * @description mtop接口解析
	 * @param apiConfig {Object} 接口配置信息
	 * @param apiConfig.api {String} mtop接口名称（必须）
	 * @param apiConfig.version {String} mtop接口版本（非必须，默认1.0）
	 * @param apiConfig.data {Object} 接口入参（非必须）
	 * @param apiConfig.appId {Number} 接口所属应用ID（非必须）
	 * @param apiConfig.dirName {String} 接口目录（非必须，默认default）
	 * @param apiConfig.type {String} 接口类型
	 * @param apiConfig.requiredParams {Array} 接口必须入参 （可选，默认为空）
	 * @param apiConfig.encodeParam {Boolean} 是否对参数进行encode，默认false
	 * @returns {null | Object} 接口解析结果，如果接口配置无法解析，返回null
	 */

	function getCDNInfoFromMtopConfig(apiConfig) {
	  // const DEFAULT_APP_DIRNAME = 'default';
	  var api = apiConfig.api;
	  var paramsStr;

	  if (api) {
	    // params
	    paramsStr = parseMtopParams(apiConfig.data, apiConfig.requiredParams, apiConfig.encodeParam);
	  }

	  return "//fallback.alicdn.com/mtop/" + apiConfig.api + "_" + (apiConfig.v || '1.0') + "/" + paramsStr;
	}

	function requestFallback(config, error) {
	  return new Promise(function (resolve, reject) {
	    if (typeof config.data == 'string') config.data = JSON.parse(config.data);
	    var backup = getCDNInfoFromMtopConfig(config);
	    var xhr = new XMLHttpRequest();
	    xhr.open('get', backup, true);
	    xhr.send(null);

	    xhr.onreadystatechange = function () {
	      if (this.readyState == 4 && this.status == 200) {
	        try {
	          var data = JSON.parse(this.responseText); // 容灾请求成功，但是接口未备份

	          if (data && data.success && data.result && !data.result.backup) {
	            reportError(config, error, '0210');
	            reject(error);
	          } else {
	            resolve(data);
	          }
	        } catch (e) {
	          reportError(config, error, '0210');
	          reject(error);
	        }
	      } else if (this.readyState == 4) {
	        reportError(config, error, '0011');
	        reject(error);
	      }
	    };
	  });
	}

	var _default = {
	  /**
	   * mtop request
	   * @param {*} params request parameters
	   * @param {function} successCallback success callback function
	   * @param {function} failureCallback failure callback function
	   * @param {boolean} returnPromise return promise object if true
	   */
	  request: function (params, successCallback, failureCallback, returnPromise) {
	    if (returnPromise === void 0) {
	      returnPromise = true;
	    }

	    // 默认关闭容灾
	    if (params) {
	      if (typeof params.preventFallback === 'undefined') {
	        params.preventFallback = true;
	      }
	    }

	    function requestWithPromise() {
	      return new Promise(function (resolve, reject) {
	        if (_universalEnv.isWeex) {
	          if (Mtop) {
	            requestByMtop(params, resolve, reject);
	          } else if (Windvane && Windvane.call) {
	            requestByWindvane(params, resolve, reject);
	          } else {
	            reject('Windvane & Mtop require error');
	          }
	        } else if (_universalEnv.isWeb) {
	          lib.mtop.request(params, function (res) {
	            if (res && res.ret && res.ret.length && res.ret[0] === 'WV_ERR::PARAM_PARSE_ERROR') {
	              // 修复U4上安卓4.4下 WV_ERR::PARAM_PARSE_ERROR 错误问题
	              lib.mtop.H5Request(params, resolve, reject); // eslint-disable-line
	            } else {
	              resolve(res);
	            }
	          }, reject);
	        } else if (_universalEnv.isMiniApp) {
	          (0, _alimp["default"])(params).then(resolve)["catch"](reject);
	        }
	      });
	    }

	    var begin = Date.now();

	    var requestWrapper = function (resolve, reject) {
	      requestWithPromise().then(function (data) {
	        var successTime = Date.now() - begin;
	        reportMopPerf(params, successTime, 'true');
	        resolve && resolve(data);
	      })["catch"](function (error) {
	        var failureTime = Date.now() - begin;
	        var ERROR_RET_TYPE = -1; // 组装统一错误格式

	        if (!error || !error.api && !error.v) {
	          error = {
	            api: params.api,
	            v: params.v,
	            data: {},
	            ret: ["FAIL::" + (JSON.stringify(error) || '')],
	            retType: ERROR_RET_TYPE
	          };
	        }

	        if (error.retType === undefined) {
	          error.retType = ERROR_RET_TYPE;
	        } // 上报接口性能


	        reportMopPerf(params, failureTime, 'false'); // 上报错误

	        reportError(params, error, '0012');

	        if (params && (params.ecode == 1 || params.preventFallback || _universalEnv.isMiniApp)) {
	          return reject && reject(error);
	        } // TODO 小程序尚不支持容灾
	        // 尝试容灾


	        requestFallback(params, error).then(function (res) {
	          resolve && resolve(res);
	        })["catch"](function (err) {
	          reject && reject(err);
	        });
	      });
	    };

	    failureCallback = failureCallback || successCallback;

	    if (returnPromise) {
	      return new Promise(function (resolve, reject) {
	        requestWrapper(function (res) {
	          successCallback && successCallback(res);
	          resolve(res);
	        }, function (err) {
	          failureCallback && failureCallback(err);
	          reject(err);
	        });
	      });
	    } else if (typeof successCallback === 'function' || typeof failureCallback === 'function') {
	      return requestWrapper(successCallback, failureCallback);
	    }
	  },
	  config: function (confKey, confValue) {
	    if (_universalEnv.isWeex) {// Noop
	    } else if (typeof lib !== 'undefined' && lib.mtop) {
	      if (typeof confKey === 'string') {
	        lib.mtop.config[confKey] = confValue;
	      } else {
	        lib.mtop.config = _extends({}, lib.mtop.config, confKey);
	      }
	    }
	  },
	  RESPONSE_TYPE: _help.RESPONSE_TYPE
	};
	exports["default"] = _default;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.default = void 0;

	var _universalEnv = __webpack_require__(11);

	var _uri = _interopRequireDefault(__webpack_require__(178));

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// 用以标记发送的次数
	var count = 0;
	var defaultConfig = {
	  screen: typeof screen === 'undefined' ? '0x0' : (screen && screen.width) + "x" + (screen && screen.height),
	  sampling: 1,
	  version: 'rx-tracker/3.0.7',
	  native: _universalEnv.isWeex ? 1 : 0,
	  isInWindmill: 0
	};
	var logkey = '/jstracker.3';

	function report(userConfig) {
	  // 最多发送 20 次, 避免将 Web 通道搞挂
	  if (++count > 20 && _universalEnv.isWeb) {
	    return false;
	  }

	  var config = Object.assign({
	    url: _uri.default.format(userConfig)
	  }, defaultConfig, userConfig);
	  config.sampling = isDebug() ? 1 : config.sampling; // 走sdk上报通道

	  if (isUseSDK()) {
	    window.JSTracker2.push(config);
	  } else {
	    if (Math.random() * config.sampling < 1) {
	      if (_universalEnv.isWeex) {
	        var UserTrack;

	        try {
	          UserTrack = __weex_require__('@weex-module/userTrack');
	        } catch (e) {}

	        var weex = typeof __weex_options__ !== 'undefined' && __weex_options__.weex;
	        var isInWindmill = _universalEnv.isWeex && (typeof weex === "undefined" ? "undefined" : _typeof(weex)) === 'object' && weex.config.container === 'windmill' || false; // eslint-disable-line

	        var isThirdGroupAPI = false; // 判断是否是三期小程序 api

	        if (isInWindmill) {
	          try {
	            var keyboard = __weex_require__('@weex-module/keyboard');

	            if ((typeof keyboard === "undefined" ? "undefined" : _typeof(keyboard)) && typeof keyboard.hideKeyboard == 'function') {
	              // eslint-disable-line
	              isThirdGroupAPI = true;
	            }
	          } catch (e) {}
	        }

	        if (UserTrack.commitEvent) {
	          if (isInWindmill && isThirdGroupAPI) {
	            config.isInWindmill = 'weex';
	            UserTrack.commitEvent({
	              eventId: '19999',
	              eventid: '19999',
	              name: location.href,
	              pageName: location.href,
	              arg1: logkey,
	              arg2: '',
	              arg3: '',
	              param: config,
	              params: config
	            });
	          } else {
	            // UserTrack.commit('click', logkey, logkey, config);
	            UserTrack.commitEvent(location.href, '19999', logkey, '', '', config);
	          }
	        }
	      } else if (_universalEnv.isWeb && 'undefined' !== typeof goldlog) {
	        config.grey = getMetaByName('def-grey'); // 新版本aplus

	        if ('undefined' !== typeof aplus) {
	          config = serialize(config);
	        }

	        if (goldlog.send) {
	          goldlog.send("//gm.mmstat.com" + logkey, config);
	        }
	      } else if (isThirdWindmill()) {
	        config.isInWindmill = 'web';
	        sendLogByThirdWindmill(config);
	      }
	    }
	  }
	}

	function isThirdWindmill() {
	  if (typeof my !== 'undefined' && my.getSystemInfoSync && typeof my.getSystemInfoSync === 'function') {
	    // eslint-disable-line
	    if (my.getSystemInfoSync().app === 'TB' || my.getSystemInfoSync().app === 'alipay') {
	      // eslint-disable-line
	      return true;
	    }
	  }

	  return false;
	}
	/**
	 * 判断是不是引用SDK
	 */

	function isUseSDK() {
	  if (_universalEnv.isWeb && 'undefined' !== typeof goldlog && window.JSTracker2 && window.JSTracker2.push) {
	    return true;
	  }

	  return false;
	}

	function sendLogByThirdWindmill(config) {
	  if (my.request && typeof my.request === 'function') {
	    // eslint-disable-line
	    my.request({
	      // eslint-disable-line
	      url: "http://gm.mmstat.com" + logkey,
	      method: 'GET',
	      data: config,
	      dataType: 'text'
	    }).catch(function () {});
	  } else if (my.httpRequest && typeof my.httpRequest === 'function') {
	    // eslint-disable-line
	    my.httpRequest({
	      // eslint-disable-line
	      url: "//gm.mmstat.com" + logkey,
	      method: 'get',
	      data: config,
	      dataType: 'json'
	    });
	  }
	}
	/**
	 * 上报异常
	 * @params {Error} error 异常对象  必选，否则不会上报
	 * @params {String} moduleName 上报模块名称，可选
	 * @params {String} reverse1 额外上报内容，可选
	 */

	function reportError(error, moduleName, reverse1) {
	  var userConfig = {};

	  if (error && error instanceof Error) {
	    userConfig = {
	      stack: JSON.stringify(error.stack),
	      name: error.name,
	      message: error.message,
	      type: 'error',
	      module: moduleName
	    };

	    if (reverse1) {
	      userConfig.reverse1 = reverse1;
	    }

	    report(userConfig);
	  }
	}
	/**
	 * 接口调用情况统计
	 * @params {String} userConfig.url 接口请求地址
	 * @params {Boolean} userConfig.success 接口请求是否成功
	 * @params {Integer} userConfig.timing 请求用时，单位 ms
	 * @params {String} userConfig.message 消息说明
	 */

	function reportApi(userConfig, moduleName) {
	  if (userConfig && userConfig.url) {
	    userConfig.type = 'api';
	    userConfig.module = moduleName;
	    userConfig.sampling = userConfig.sampling || '100'; // 默认 1% 抽样

	    report(userConfig);
	  }
	}
	/**
	 * 获取meta标签字段值
	 * @params {String} name 标签名
	 */

	function getMetaByName(name) {
	  if (document && document.querySelector) {
	    var meta = document.querySelector('meta[name="' + name + '"]');

	    if (meta) {
	      return meta.getAttribute('content');
	    }
	  }

	  return '';
	}
	/**
	 * 序列化Object转为url参数
	 * @params {Object} obj 上报参数
	 */

	function serialize(obj) {
	  var str = '';

	  if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === 'object') {
	    for (var key in obj) {
	      if (str != '') {
	        str += '&';
	      }

	      str += key + '=' + encodeURIComponent(obj[key]);
	    }
	  } else {
	    str = obj;
	  }

	  return str;
	}
	/**
	 * 全局配置
	 */

	function setConfig(config) {
	  if (config && config.sampling) {
	    defaultConfig.sampling = config.sampling;
	  }

	  if (config && config.pid) {
	    defaultConfig.pid = config.pid;
	  }
	}

	function isDebug() {
	  var uri = _universalEnv.isNode || typeof location === 'undefined' ? '' : location.href;
	  return uri.indexOf('jt_debug=1') > -1;
	}

	var _default = {
	  report: report,
	  reportError: reportError,
	  reportApi: reportApi,
	  setConfig: setConfig
	};
	exports.default = _default;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.default = void 0;

	var _universalEnv = __webpack_require__(11);

	/**
	 * @fileoverview URI.
	 */
	var DEFAULT_ERROR_CODE = 'rx_user_define_err';
	var errorCodeHash = {
	  render: 'rx_render_err',
	  data: 'rx_data_fetch_err',
	  error: 'rax_error' // custom: 'rax_custom'

	};
	var _default = {
	  format: function (config) {
	    var uri = _universalEnv.isNode || typeof location === 'undefined' ? '' : location.href || '';
	    var errorCode = errorCodeHash[config.type] || (config.type ? config.type + '/' : '') + DEFAULT_ERROR_CODE; // remove slash and params

	    var pureURI = uri.replace(/[\?#].*$/, '').replace(/\/$/, '');
	    var url = [pureURI, config.module || '', errorCode].join('/').toLowerCase();

	    if (_universalEnv.isWeex) {
	      return encodeURIComponent(url);
	    } else {
	      // H5 下黄金令箭无需编码, 否则会导致请求无法接收
	      return url;
	    }
	  }
	};
	exports.default = _default;

/***/ },
/* 179 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.isObject = isObject;
	exports.getCommonError = getCommonError;
	exports.RESPONSE_TYPE = void 0;

	function isObject(obj) {
	  return {}.toString.call(obj) == '[object Object]';
	}

	var RESPONSE_TYPE = {
	  /**
	   * @description 请求出错
	   * @type {Number}
	   */
	  'ERROR': -1,

	  /**
	   * @description 请求成功
	   * @type {Number}
	   */
	  'SUCCESS': 0,

	  /**
	   * @description 请求token过期
	   * @type {Number}
	   */
	  'TOKEN_EXPIRED': 1,

	  /**
	   * @description 请求session过期
	   * @type {Number}
	   */
	  'SESSION_EXPIRED': 2
	};
	exports.RESPONSE_TYPE = RESPONSE_TYPE;

	function getCommonError(params, errorMessage) {
	  return {
	    api: params.api,
	    v: params.v,
	    data: {},
	    ret: ["FAIL::" + (errorMessage || '')],
	    retType: -1
	  };
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = _default;

	var _help = __webpack_require__(179);

	var systemInfo;

	function getSystemInfo() {
	  if (!systemInfo) {
	    systemInfo = my.getSystemInfoSync();
	  }

	  return systemInfo;
	}

	function _default(params) {
	  return new Promise(function (resolve, reject) {
	    var reqParams = Object.assign({}, params, {
	      apiName: params.api,
	      // my.call('mtop')
	      apiVersion: params.v,
	      // my.call('mtop')
	      needEcodeSign: String(params.ecode) === '1' // ecode 参数  my.call('mtop')

	    }); // data 必须是 object，否则会 Crash

	    if (!(0, _help.isObject)(params.data)) {
	      reqParams.data = JSON.parse(params.data);
	    }

	    function handler(result) {
	      if (Array.isArray(result.ret)) {
	        var isSuccess = true;

	        for (var index in result.ret) {
	          if (!/^SUCCESS::/.test(result.ret[index])) {
	            isSuccess = false;
	          }
	        }

	        if (isSuccess) {
	          resolve(result);
	        } else {
	          reject(result);
	        }
	      } else {
	        reject(result);
	      }
	    } // 给调用方空出设置客户端请求参数的空间


	    if (Object.assign && params.dangerouslySetAlipayParams) {
	      Object.assign(reqParams, params.dangerouslySetAlipayParams);
	    } // 使用 bridge 调用 MTOP


	    if (params.miniAppType === 'alipay' || getSystemInfo().app === 'alipay') {
	      if (params.type === 'POST') {
	        reqParams.usePost = true; // my.call('mtop')
	      } // 设定返回类型，默认返回字符串类型的数字和布尔。


	      if (!!params.originaljsonp || !!params.json) {
	        reqParams.type = 'originaljson';
	      } // 新增参数，可根据需要返回不同类型的参数 （布尔和数字是否转换成字符串）


	      if (typeof params.valueType !== 'undefined') {
	        if (params.valueType === 'original') {
	          // 返回 布尔和数字类型
	          reqParams.type = 'originaljson';
	        } else if (params.valueType === 'string') {
	          // 返回转换成字符串的布尔和数字
	          delete reqParams.type;
	        }
	      } // WJAS 下线切流，降低业务切换请求方式成本，可以允许只修改请求方式，不修改返回构造


	      if (params.useJsonpResultType === true) {
	        delete reqParams.type;
	      }

	      my.call('mtop', reqParams, handler); // eslint-disable-line
	    } else {
	      reqParams.method = params.type;

	      reqParams.success = function (result) {
	        resolve(result);
	      };

	      reqParams.fail = function (error) {
	        reject(error);
	      };

	      my.sendMtop(reqParams); // eslint-disable-line
	    }
	  });
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getBuName;

	var _pageStorage = __webpack_require__(182);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;
	// 获取页面BU属性，weex下不要在加载时获取，需要在调用时实时获取
	// 返回值有youku、damai和taopiaopiao，未识别到buName时返回空字符串

	function getBuName() {
	  var buName = '';
	  // 获取globalConfig，H5从window下取，weex从hollywoodPageData中取值
	  var globalConfig = window.globalConfig || {};
	  var hollywoodPageData = _pageStorage2.default.getItem('hollywoodPageData') || {};
	  var _hollywoodPageData$ba = hollywoodPageData.base,
	      base = _hollywoodPageData$ba === undefined ? {} : _hollywoodPageData$ba;

	  if (base.globalConfig) {
	    try {
	      globalConfig = typeof base.globalConfig === 'string' ? JSON.parse(base.globalConfig) : base.globalConfig;
	    } catch (error) {}
	  }

	  // 设置buName的值，优先级顺序：url->页面全局变量->域名
	  if (urlSearchObj.buName) {
	    // 优先从页面url中获取buName
	    buName = urlSearchObj.buName;
	  } else if (globalConfig.buName) {
	    // 从全局变量中取buName
	    buName = globalConfig.buName;
	  } else {
	    // 全局变量中没有时根据域名获取，兼容老页面
	    var host = location.host;
	    if (host.includes('youku.com')) {
	      buName = 'youku';
	    } else if (host.includes('damai.cn')) {
	      buName = 'damai';
	    } else if (host.includes('taopiaopiao.com')) {
	      buName = 'taopiaopiao';
	    }
	  }

	  return buName;
	}
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var storage = {};

	exports.default = {
	  setItem: function setItem(key, content) {
	    storage[key] = content;
	  },
	  getItem: function getItem(key) {
	    return storage[key];
	  },
	  removeItem: function removeItem(key) {
	    delete storage[key];
	  },
	  clear: function clear() {
	    storage = {};
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.processResult = undefined;

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// 在SSR的node环境下根据mtop接口参数调用HSF接口
	var requestHsf = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var ctx = arguments[1];

	    var data, v, apiMappingList, mtopConfig, _ctx$userInfo, _ctx$userInfo$userNum, userNumbId, _ctx$userInfo$usernic, usernick, mtopContext, hsfConfig, _hsfConfig$version, version, group, method, _hsfConfig$paramList, paramList, _hsfConfig$isYoukuEnv, isYoukuEnv, ver, id, parameterTypes, hsfArgs, params, res;

	    return _regenerator2.default.wrap(function (_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (!(!window.isServer || !ctx || !ctx.hsfClient)) {
	              _context.next = 2;
	              break;
	            }

	            return _context.abrupt('return', new Promise(function (resolve, reject) {
	              reject('The requestHsf method must be in sff runtime!');
	            }));

	          case 2:
	            // 保存mtop接口请求数据参数
	            data = getMtopData(args);
	            v = args.v || '1.0';
	            apiMappingList = ctx.apiMappingList || [];
	            mtopConfig = apiMappingList.find(function (one) {
	              return one.api === args.api && one.version === v;
	            });

	            if (mtopConfig) {
	              _context.next = 8;
	              break;
	            }

	            return _context.abrupt('return', new Promise(function (resolve, reject) {
	              reject('mtop config not find!');
	            }));

	          case 8:
	            _ctx$userInfo = ctx.userInfo, _ctx$userInfo$userNum = _ctx$userInfo.userNumbId, userNumbId = _ctx$userInfo$userNum === undefined ? 0 : _ctx$userInfo$userNum, _ctx$userInfo$usernic = _ctx$userInfo.usernick, usernick = _ctx$userInfo$usernic === undefined ? '' : _ctx$userInfo$usernic;
	            // Mtop接口上下文参数

	            mtopContext = {
	              userNumbId: userNumbId,
	              usernick: usernick
	            };
	            // mtop接口对应HSF接口的配置

	            hsfConfig = mtopConfig.hsfConfig || {};
	            _hsfConfig$version = hsfConfig.version, version = _hsfConfig$version === undefined ? {} : _hsfConfig$version, group = hsfConfig.group, method = hsfConfig.method, _hsfConfig$paramList = hsfConfig.paramList, paramList = _hsfConfig$paramList === undefined ? [] : _hsfConfig$paramList, _hsfConfig$isYoukuEnv = hsfConfig.isYoukuEnv, isYoukuEnv = _hsfConfig$isYoukuEnv === undefined ? true : _hsfConfig$isYoukuEnv;
	            // 获取当前环境下的版本

	            ver = version[ctx.env] || version.daily;
	            id = hsfConfig.api + ':' + ver;
	            parameterTypes = paramList.map(function (item) {
	              return item.paramType;
	            });
	            hsfArgs = getHsfArgs(hsfConfig, data, mtopContext);

	            // 调用HSF接口参数

	            params = {
	              id: id,
	              group: group,
	              method: method,
	              parameterTypes: parameterTypes,
	              args: hsfArgs,
	              isYoukuEnv: isYoukuEnv
	            };

	            console.log('requestHsf params:', params);
	            _context.next = 20;
	            return ctx.ykHsfInvoke(params);

	          case 20:
	            res = _context.sent;

	            console.log('requestHsf res:', res);
	            return _context.abrupt('return', res);

	          case 23:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function () {
	    return _ref.apply(this, arguments);
	  };
	}();

	// 根据MTOP和HSF映射关系获取hsf接口args参数


	var _isType = __webpack_require__(184);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function getHsfArgs() {
	  var hsfConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var mtopContext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var dataKeys = Object.keys(data);
	  var contextKeys = Object.keys(mtopContext);
	  var _hsfConfig$apiParam = hsfConfig.apiParam,
	      apiParam = _hsfConfig$apiParam === undefined ? {} : _hsfConfig$apiParam,
	      _hsfConfig$paramList2 = hsfConfig.paramList,
	      paramList = _hsfConfig$paramList2 === undefined ? [] : _hsfConfig$paramList2;

	  var obj = {};
	  loop(paramList, obj);
	  function loop(list, obj) {
	    list.forEach(function (elem) {
	      if (elem.mapType === 'api' && dataKeys.includes(elem.mapField)) {
	        // 如果是API请求参数
	        var value = data[elem.mapField];
	        // 如果是Map类型，则需要parse
	        if (apiParam[elem.mapField] && apiParam[elem.mapField].paramType === 'Map') {
	          try {
	            value = typeof value === 'string' ? JSON.parse(value) : value;
	          } catch (error) {}
	        }
	        obj[elem.paramName] = value;
	      } else if (elem.mapType === 'mtop' && contextKeys.includes(elem.mapField)) {
	        // 如果是mtop协议参数
	        obj[elem.paramName] = mtopContext[elem.mapField];
	      } else if (elem.children) {
	        obj[elem.paramName] = {};
	        loop(elem.children, obj[elem.paramName]);
	      }
	    });
	  }
	  var args = paramList.map(function (item) {
	    return obj[item.paramName];
	  });
	  return args;
	}

	// 获取mtop接口参数
	function getMtopData(args) {
	  var data = {};
	  if (args.data) {
	    // 一般的mtop接口直接传data对象
	    data = args.data;
	  } else if (args.bizType && args.bizParam) {
	    // aplatform接口需要传bizType和bizParam参数，两个参数都是字符串形式
	    data = {
	      bizType: args.bizType,
	      bizParam: _typeof(args.bizParam) === 'object' ? JSON.stringify(args.bizParam) : args.bizParam
	    };
	  } else if (args.req) {
	    // GMP接口需要传req参数，req参数是字符串形式
	    data = {
	      req: _typeof(args.req) === 'object' ? JSON.stringify(args.req) : args.req
	    };
	  }
	  return data;
	}

	// 处理HSF接口返回值，保持和MTOP接口一致
	// 参考文档：https://www.atatech.org/articles/10795
	function processResult(result) {
	  if (typeof result === 'string') {
	    try {
	      result = JSON.parse(result);
	    } catch (error) {}
	  }
	  // 调用HSF接口失败
	  if (!result.success) {
	    throw result.msgCode || result.msgInfo || 'HSF ERROR';
	  }

	  // 获取HSF接口数据，调用中心机房HSF接口时会再外面再包一层
	  var model = result.model || result.res && result.res.model || result;
	  var res = {};
	  if ((0, _isType.isObject)(model)) {
	    // 对于对象类型，调用成功data中直接返回model中数据，不会输出result字段。
	    res.data = model;
	  } else {
	    // 对应数组或者其他基本类型，需要添加result字段
	    res.data = {
	      result: model
	    };
	  }
	  console.log('processResult res:', res);
	  return res;
	}

	exports.default = requestHsf;
	exports.processResult = processResult;

/***/ },
/* 184 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// js类型判断方法
	function isArray(item) {
	  return Array.isArray(item);
	}

	function isObject(item) {
	  return Object.prototype.toString.call(item) === '[object Object]';
	}

	function isString(item) {
	  return Object.prototype.toString.call(item) === '[object String]';
	}

	function isNumber(item) {
	  return Object.prototype.toString.call(item) === '[object Number]';
	}

	exports.default = { isArray: isArray, isObject: isObject, isString: isString, isNumber: isNumber };
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	exports.default = {
	  request: function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(params, successCallback, failureCallback) {
	      var res, _JSON$parse, data;

	      return _regenerator2.default.wrap(function (_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.prev = 0;
	              _context.next = 3;
	              return kraken.methodChannel.invokeMethod('mtop', 'request', {
	                params: JSON.stringify(params)
	              });

	            case 3:
	              res = _context.sent;
	              _JSON$parse = JSON.parse(res), data = _JSON$parse.data;

	              if (data.ret && data.ret[0] && data.ret[0].indexOf('SUCCESS') < 0) {
	                failureCallback(data);
	              } else {
	                successCallback(data);
	              }
	              return _context.abrupt('return', data);

	            case 9:
	              _context.prev = 9;
	              _context.t0 = _context['catch'](0);

	              failureCallback(_context.t0);
	              return _context.abrupt('return', _context.t0);

	            case 13:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[0, 9]]);
	    }));

	    return function request() {
	      return _ref.apply(this, arguments);
	    };
	  }(),
	  config: function config() {}
	};
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(11);

	/**
	 * 加载单个脚本
	 * @Param {String} script 脚本url
	 * @Param {String} [charset = 'utf-8'] 脚本编码，默认utf-8
	 */

	// 记录脚本的加载历史
	// {
	//   'xxxxx.js?xxx=xxx': {
	//     status: 'loading/loaded',  loading：已经在加载中的脚本；loaded：已经加载过的脚本
	//     promise: Promise 加载中的Promise，status为1时记录
	//   }
	// }
	var scriptLoadHistoryMap = {};
	function loadScript(script) {
	  var charset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'utf-8';

	  if (_universalEnv.isWeex || _universalEnv.isKraken) {
	    // 如果是weex，则直接返回
	    return Promise.all([]);
	  }
	  var loadHistory = scriptLoadHistoryMap[script];
	  if (loadHistory) {
	    if (loadHistory.status === 'loaded') {
	      // 如果已经加载过，而且已经加载完成
	      return Promise.all([]);
	    }
	    if (loadHistory.status === 'loading') {
	      // 如果已经加载过，而且正在加载中
	      return loadHistory.promise;
	    }
	  } else {
	    // 新脚本执行加载
	    var promise = new Promise(function (resolve, reject) {
	      var scriptEle = document.createElement('script');
	      scriptEle.charset = charset;
	      scriptEle.src = script;
	      scriptEle.onload = function (e) {
	        scriptEle.onerror = null;
	        scriptEle.onload = null;
	        // 更改脚本加载历史已经加载
	        scriptLoadHistoryMap[script] = {
	          status: 'loaded'
	        };
	        resolve(e);
	      };
	      scriptEle.onerror = function (e) {
	        scriptEle.onerror = null;
	        scriptEle.onload = null;
	        // 删除脚本加载历史，以便重试
	        delete scriptLoadHistoryMap[script];
	        reject(e);
	      };
	      document.querySelector('head').appendChild(scriptEle);
	    });
	    // 记录脚本加载历史正在加载中
	    scriptLoadHistoryMap[script] = {
	      status: 'loading',
	      promise: promise
	    };
	    return promise;
	  }
	}

	/**
	 * 加载单个css资源
	 * @Param {String} script css url
	 */
	// 记录样式的加载历史
	// {
	//   'xxxxx.css?xxx=xxx': {
	//     status: 'loading/loaded',  loading：已经在加载中的样式；loaded：已经加载过的样式
	//     promise: Promise 加载中的Promise，status为1时记录
	//   }
	// }
	var cssLoadHistoryMap = {};
	function loadCss(href) {
	  if (_universalEnv.isWeex) {
	    // 如果是weex，则直接返回
	    return Promise.all([]);
	  }
	  var loadHistory = cssLoadHistoryMap[href];
	  if (loadHistory) {
	    if (loadHistory.status === 'loaded') {
	      // 如果已经加载过，而且已经加载完成
	      return Promise.all([]);
	    }
	    if (loadHistory.status === 'loading') {
	      // 如果已经加载过，而且正在加载中
	      return loadHistory.promise;
	    }
	  } else {
	    var promise = new Promise(function (resolve, reject) {
	      var styleElement = document.createElement('link');
	      styleElement.rel = 'stylesheet';
	      styleElement.type = 'text/css';
	      styleElement.href = href;
	      styleElement.onload = function (e) {
	        styleElement.onerror = null;
	        styleElement.onload = null;
	        // 更改样式加载历史已经加载
	        cssLoadHistoryMap[href] = {
	          status: 'loaded'
	        };
	        resolve(e);
	      };
	      styleElement.onerror = function (e) {
	        styleElement.onerror = null;
	        styleElement.onload = null;
	        // 删除样式加载历史，以便重试
	        delete cssLoadHistoryMap[href];
	        reject(e);
	      };
	      document.querySelector('head').appendChild(styleElement);
	    });
	    // 记录样式加载历史正在加载中
	    cssLoadHistoryMap[href] = {
	      status: 'loading',
	      promise: promise
	    };
	    return promise;
	  }
	}

	var playerResourceLoaded = false;
	var loadPlayerResourcePromise = null;
	function loadPlayerResource() {
	  if (playerResourceLoaded) {
	    return Promise.all([]);
	  }
	  if (loadPlayerResourcePromise) {
	    return loadPlayerResourcePromise;
	  }

	  loadPlayerResourcePromise = Promise.all([loadScript('https://g.alicdn.com/player/h5phoneplayer/1.8.0/js/h5phoneplayer.min.js'), loadCss('https://g.alicdn.com/player/h5phoneplayer/1.8.0/css/h5phoneplayer.min.css')]).then(function (res) {
	    playerResourceLoaded = true;
	    return res;
	  });
	  return loadPlayerResourcePromise;
	}

	exports.default = { loadScript: loadScript, loadCss: loadCss, loadPlayerResource: loadPlayerResource };
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = closePage;

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _universalEnv = __webpack_require__(11);

	var _krakenNav = __webpack_require__(189);

	var _krakenNav2 = _interopRequireDefault(_krakenNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var YoukuPage = null;
	try {
	  YoukuPage = __webpack_require__(95);
	} catch (e) {}

	function closePage() {
	  if (_universalEnv.isWeex) {
	    YoukuPage && YoukuPage.close && YoukuPage.close();
	  } else if (_universalEnv.isKraken) {
	    _krakenNav2.default.close();
	  } else {
	    _windvane2.default.call('WVActionJSBridge', 'close', {}, function () {}, function () {});
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _universalEnv = __webpack_require__(11);

	var _universalWindvane = __webpack_require__(93);

	var _universalWindvane2 = _interopRequireDefault(_universalWindvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	exports.default = {
	  call: function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(module, method, params, successCallback, failureCallback) {
	      var moduleMethod, res;
	      return _regenerator2.default.wrap(function (_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (!_universalEnv.isKraken) {
	                _context.next = 16;
	                break;
	              }

	              _context.prev = 1;
	              moduleMethod = module + '.' + method;
	              _context.next = 5;
	              return kraken.methodChannel.invokeMethod('windvane', 'call2', moduleMethod, params);

	            case 5:
	              res = _context.sent;

	              successCallback && successCallback(res);
	              return _context.abrupt('return', res);

	            case 10:
	              _context.prev = 10;
	              _context.t0 = _context['catch'](1);

	              failureCallback && failureCallback(_context.t0);
	              return _context.abrupt('return', _context.t0);

	            case 14:
	              _context.next = 17;
	              break;

	            case 16:
	              _universalWindvane2.default.call(module, method, params, function (success) {
	                return successCallback && successCallback(success);
	              }, function (failure) {
	                return failureCallback && failureCallback(failure);
	              });

	            case 17:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[1, 10]]);
	    }));

	    return function call() {
	      return _ref.apply(this, arguments);
	    };
	  }(),

	  call2: function () {
	    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(module_method, params, successCallback, failureCallback) {
	      var res;
	      return _regenerator2.default.wrap(function (_context2) {
	        while (1) {
	          switch (_context2.prev = _context2.next) {
	            case 0:
	              if (!_universalEnv.isKraken) {
	                _context2.next = 15;
	                break;
	              }

	              _context2.prev = 1;
	              _context2.next = 4;
	              return kraken.methodChannel.invokeMethod('windvane', 'call2', module_method, params);

	            case 4:
	              res = _context2.sent;

	              successCallback && successCallback(res);
	              return _context2.abrupt('return', res);

	            case 9:
	              _context2.prev = 9;
	              _context2.t0 = _context2['catch'](1);

	              failureCallback && failureCallback(_context2.t0);
	              return _context2.abrupt('return', _context2.t0);

	            case 13:
	              _context2.next = 16;
	              break;

	            case 15:
	              _universalWindvane2.default.call2(module_method, params, function (success) {
	                return successCallback && successCallback(success);
	              }, function (failure) {
	                return failureCallback && failureCallback(failure);
	              });

	            case 16:
	            case 'end':
	              return _context2.stop();
	          }
	        }
	      }, _callee2, undefined, [[1, 9]]);
	    }));

	    return function call2() {
	      return _ref2.apply(this, arguments);
	    };
	  }()
	};
	module.exports = exports['default'];

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var KrakenNav = function () {
	  function KrakenNav() {
	    _classCallCheck(this, KrakenNav);
	  }

	  _createClass(KrakenNav, null, [{
	    key: 'navToUri',

	    // 跳转
	    value: function () {
	      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(schema) {
	        var module, method, params, ret;
	        return _regenerator2.default.wrap(function (_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!(schema == null || schema == undefined || schema == '')) {
	                  _context.next = 2;
	                  break;
	                }

	                return _context.abrupt('return');

	              case 2:
	                if (_universalEnv.isKraken) {
	                  _context.next = 4;
	                  break;
	                }

	                return _context.abrupt('return');

	              case 4:
	                module = 'nav';
	                method = 'toUri';
	                params = { params: schema };
	                _context.next = 9;
	                return kraken.methodChannel.invokeMethod(module, method, params);

	              case 9:
	                ret = _context.sent;
	                return _context.abrupt('return', ret);

	              case 11:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function navToUri() {
	        return _ref.apply(this, arguments);
	      };
	    }()

	    // 关闭

	  }, {
	    key: 'close',
	    value: function () {
	      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	        var module, method, ret;
	        return _regenerator2.default.wrap(function (_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                if (_universalEnv.isKraken) {
	                  _context2.next = 2;
	                  break;
	                }

	                return _context2.abrupt('return');

	              case 2:
	                module = 'nav';
	                method = 'close';
	                _context2.next = 6;
	                return kraken.methodChannel.invokeMethod(module, method);

	              case 6:
	                ret = _context2.sent;
	                return _context2.abrupt('return', ret);

	              case 8:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      return function close() {
	        return _ref2.apply(this, arguments);
	      };
	    }()
	  }]);

	  return KrakenNav;
	}();

	exports.default = KrakenNav;
	module.exports = exports['default'];

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAppInstalled;

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _universalEnv = __webpack_require__(11);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isAppInstalled(params) {
	  return new Promise(function (resolve) {
	    _windvane2.default && _windvane2.default.call('Base', 'isInstall', params, function (e) {
	      if (_universalEnv.isWeb && !_universalEnv.isKraken) {
	        // web侧此处就算是已经安装
	        resolve('INSTALLED');
	      } else if (_browser2.default.isIOS) {
	        // IOS端跟安装端返回内容不一致，单独处理
	        try {
	          // weex侧需要解析返回参数进行判断
	          var obj = JSON.parse(e);
	          resolve(obj.status === 'SUCCESS' ? 'INSTALLED' : 'NOT_INSTALLED');
	        } catch (e) {
	          resolve('NOT_INSTALLED');
	        }
	      } else if (_browser2.default.isAndroid) {
	        // IOS端跟安装端返回内容不一致，单独处理
	        try {
	          // weex侧需要解析返回参数进行判断
	          var _obj = JSON.parse(e);
	          resolve(_obj.ret === 'HY_SUCCESS' ? 'INSTALLED' : 'NOT_INSTALLED');
	        } catch (e) {
	          resolve('NOT_INSTALLED');
	        }
	      }
	    }, function (e) {
	      if (e.ret && (e.ret === 'HY_FAILED' || e.ret[0] === 'HY_FAILED')) {
	        resolve('NOT_INSTALLED');
	      } else {
	        resolve('UNKNOWN');
	      }
	    });
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 191 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getCookie;
	function getCookie(cname) {
	  var name = cname + '=';
	  var decodedCookie = decodeURIComponent(document.cookie || '');
	  var ca = decodedCookie.split(';');
	  for (var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return '';
	}
	module.exports = exports['default'];

/***/ },
/* 192 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = read;

	/**
	 * 读取对象里面的值 防止出错
	 * @param {Object} obj {a:{b:{c:1}}}
	 * @param {String} key 'a.b.c'
	 */
	function read(obj, key) {
	  if (obj && key) {
	    var keys = key.split('.');
	    for (var i = 0; i < keys.length; i++) {
	      obj = obj[keys[i]];
	      if (!obj) {
	        if (i === keys.length - 1) {
	          return obj;
	        } else {
	          return undefined;
	        }
	      }
	    }
	  }
	  return obj;
	}
	module.exports = exports['default'];

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(11);

	var FULL_WIDTH = 750;

	// 将px转为rem
	function px2rem(dur) {
	  // 移动到函数内部防止在服务端报错
	  var clientWidth = document.documentElement.clientWidth;
	  return _universalEnv.isWeex ? dur : dur * FULL_WIDTH / clientWidth;
	}

	// 批量转换单位
	function transferObject2rem(obj) {
	  Object.keys(obj).forEach(function (key) {
	    obj[key] = px2rem(obj[key]);
	  });
	  return obj;
	}

	// 获取节点位置信息
	function getComponentRect(node, callback) {
	  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  // 是否是视口
	  var isViewport = node === 'viewport';
	  if (_universalEnv.isWeex && !isViewport && !node.ref || !_universalEnv.isWeex && !isViewport && !node.getBoundingClientRect) {
	    try {
	      console.log('node参数不合法！如果不是viewport需要使用findDOMNode获取真实DOM节点再传入！');
	    } catch (error) {}
	    callback && callback({});
	    return;
	  }
	  // 默认是rem单位
	  var isRem = option.isRem !== false;
	  if (_universalEnv.isWeex) {
	    var dom = __webpack_require__(100);
	    dom && dom.getComponentRect && dom.getComponentRect(isViewport ? node : node.ref, function (option) {
	      callback && callback(option.size);
	    });
	  } else {
	    var _document$documentEle = document.documentElement,
	        clientHeight = _document$documentEle.clientHeight,
	        clientWidth = _document$documentEle.clientWidth,
	        clientTop = _document$documentEle.clientTop,
	        clientLeft = _document$documentEle.clientLeft;

	    var viewportDOM = isViewport ? {} : node.getBoundingClientRect();
	    var size = isViewport ? {
	      height: clientHeight,
	      width: clientWidth,
	      top: clientTop,
	      left: clientLeft,
	      bottom: clientHeight + clientTop,
	      right: clientWidth + clientLeft
	    } : {
	      height: viewportDOM.height,
	      width: viewportDOM.width,
	      top: viewportDOM.top,
	      left: viewportDOM.left,
	      bottom: viewportDOM.bottom,
	      right: viewportDOM.right
	    };
	    // 单位转换，px转rem
	    if (isRem) {
	      size = transferObject2rem(size);
	    }
	    callback && callback(size);
	  }
	}

	exports.default = getComponentRect;
	module.exports = exports['default'];

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _universalEnv = __webpack_require__(11);

	var _isType = __webpack_require__(184);

	// PC 下单位相关方法
	var MEDIA_MAP = {
	  xs: {
	    mediaType: 'xs',
	    mediaName: 'pc-1024',
	    minWidth: 0,
	    maxWidth: 1280,
	    mainWidth: 912
	  },
	  sm: {
	    mediaType: 'sm',
	    mediaName: 'pc-1280',
	    minWidth: 1281,
	    maxWidth: 1550,
	    mainWidth: 1168
	  },
	  md: {
	    mediaType: 'md',
	    mediaName: 'pc-1344',
	    minWidth: 1551,
	    maxWidth: 1790,
	    mainWidth: 1438
	  },
	  lg: {
	    mediaType: 'lg',
	    mediaName: 'pc-1920',
	    minWidth: 1791,
	    maxWidth: 10000,
	    mainWidth: 1680
	  }
	};

	// 获取当前窗口宽度，单位px，返回数字类型
	function getClientWidth() {
	  if (_universalEnv.isWeex || _universalEnv.isKraken) {
	    return 750;
	  }
	  var clientWidth = document.documentElement.clientWidth;
	  // 页面最小宽度1024
	  if (clientWidth < 1024) {
	    clientWidth = 1024;
	  }
	  // 适配搭建页
	  if (window.DEVICE_WIDTH) {
	    clientWidth = window.DEVICE_WIDTH;
	  }
	  // 取整数，四舍五入
	  return Math.round(clientWidth);
	}

	// 获取当前窗口宽度对应的media
	function queryMedia() {
	  if (_universalEnv.isWeex || _universalEnv.isKraken) {
	    return {};
	  }
	  var clientWidth = getClientWidth();
	  var media = Object.values(MEDIA_MAP).find(function (one) {
	    return one.minWidth <= clientWidth && clientWidth <= one.maxWidth;
	  }) || {};
	  // 侧边宽度
	  var sideWidth = (clientWidth - media.mainWidth) / 2 || 0;
	  var result = _extends({}, media, {
	    sideWidth: sideWidth,
	    clientWidth: clientWidth
	  });
	  // 兼容搭建页预览，从页面最小宽度1024等比缩小到720，否则字体太小
	  if (window.DEVICE_WIDTH) {
	    result = {
	      mediaType: 'building',
	      mediaName: '搭建页',
	      minWidth: 0,
	      maxWidth: window.DEVICE_WIDTH,
	      mainWidth: 912 * window.DEVICE_WIDTH / 1024,
	      sideWidth: (clientWidth - 912 * window.DEVICE_WIDTH / 1024) / 2,
	      clientWidth: clientWidth
	    };
	  }
	  return result;
	}

	// 将rem值转为px，返回数字类型，根据内容实际主体宽度缩放
	function rem2px(value) {
	  if (_universalEnv.isWeex || !(0, _isType.isNumber)(value)) {
	    return value;
	  }
	  var media = queryMedia();
	  // 先还原图片在1790宽度下的高度

	  // 根据内容实际主体宽度缩放
	  var result = value * 1790 / 750 * media.mainWidth / 1438;
	  return Math.round(result);
	}

	exports.default = { queryMedia: queryMedia, getClientWidth: getClientWidth, rem2px: rem2px };
	module.exports = exports['default'];

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _isType = __webpack_require__(184);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// 给style属性批量添加单位
	function postUnit(style) {
	  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	    return style;
	  }
	  opts.unit = opts.unit || 'px';
	  opts.scale = opts.scale || 1;
	  opts.ignore = _extends({
	    columns: true,
	    columnCount: true,
	    fillOpacity: true,
	    fontWeight: true,
	    opacity: true,
	    orphans: true,
	    widows: true,
	    zIndex: true,
	    zoom: true,
	    flex: true,
	    order: true,
	    flexGrow: true,
	    flexShrink: true,
	    uri: true
	  }, opts.ignore);

	  function replacer(match) {
	    var is0 = parseInt(match) === 0,
	        hasTimeUnit = /^m?s$/.test(opts.unit);

	    if (is0 && !hasTimeUnit) {
	      return match;
	    } else {
	      return match.replace(/\d+/, function (num) {
	        return num * opts.scale + opts.unit;
	      });
	    }
	  }

	  function transformDecl(key, val) {
	    var res = val;
	    if (!opts.ignore[key]) {
	      if ((0, _isType.isString)(val)) {
	        var parts = val.split(' ').filter(function (item) {
	          return item !== '';
	        });

	        for (var i = 0; i < parts.length; i++) {
	          var isColor = /#[0-9a-fA-F]+/.test(parts[i]),
	              hasParenths = /\w\(.*\)/.test(parts[i]);

	          if (!hasParenths && !isColor) {
	            parts[i] = parts[i].replace(/\d+(\s|\/|,|$)/g, replacer);
	          }
	        }

	        res = parts.join(' ');
	      } else if ((0, _isType.isNumber)(val)) {
	        res = val * opts.scale + opts.unit;
	      }
	    }
	    return res;
	  }

	  function handleObject(style) {
	    var obj = {};
	    Object.entries(style).forEach(function (entry) {
	      var _entry = _slicedToArray(entry, 2),
	          key = _entry[0],
	          val = _entry[1];

	      obj[key] = transformDecl(key, val);
	    });
	    return obj;
	  }

	  function handleArray(style) {
	    var arr = [];
	    style.forEach(function (item, index) {
	      arr[index] = (0, _isType.isObject)(item) ? handleObject(item) : item;
	    });
	    return arr;
	  }

	  if ((0, _isType.isObject)(style)) {
	    return handleObject(style);
	  } else if ((0, _isType.isArray)(style)) {
	    return handleArray(style);
	  } else {
	    return style;
	  }
	}

	// 将style的值转为对象形式
	function assignStyle(style) {
	  if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
	    return style;
	  }
	  var result = {};
	  if ((0, _isType.isArray)(style)) {
	    var styleObjs = style.filter(function (item) {
	      return (0, _isType.isObject)(item);
	    });
	    result = Object.assign.apply(Object, [{}].concat(_toConsumableArray(styleObjs)));
	  } else if ((0, _isType.isObject)(style)) {
	    result = _extends({}, style);
	  }
	  return result;
	}

	exports.default = { postUnit: postUnit, assignStyle: assignStyle };
	module.exports = exports['default'];

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function theme(api, param, callback) {
	  try {
	    _windvane2.default && _windvane2.default.call2(api, param, function (e) {
	      if (e && typeof e === 'string') {
	        try {
	          e = JSON.parse(e);
	        } catch (error) {
	          callback && callback('');
	          return;
	        }
	      }
	      if (e.ret && e.ret.includes('HY_SUCCESS')) {
	        if (api.indexOf('ThemeID') > -1) {
	          callback && callback(e.themeid);
	        } else if (api.indexOf('Table') > -1) {
	          callback && callback(e.result);
	        } else {
	          callback && callback('');
	        }
	      } else {
	        callback && callback('');
	      }
	    }, function () {
	      callback && callback('');
	    });
	  } catch (error) {
	    callback && callback('');
	  }
	}
	function themeID(callback) {
	  theme('WVUIDarkModeBridge.getCurrentThemeID', {}, callback);
	}
	function themeTable(callback) {
	  theme('WVUIDarkModeBridge.getColorTokenTable', {}, callback);
	}
	exports.default = {
	  themeID: themeID,
	  themeTable: themeTable
	};
	module.exports = exports['default'];

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 本地存储经纬度信息
	var longitude = '';
	var latitude = '';

	// 获取地理位置
	// 返回Promise, 数据结构：{longitude: '', latitude: ''}
	function getGeoLocation() {
	  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var enableDegrade = option.enableDegrade || false; // 是否开启站外H5降级
	  var timeout = option.timeout || 0; // 超时时间
	  return new Promise(function (resolve, reject) {
	    // 优先取缓存数据
	    if (longitude && latitude) {
	      resolve({
	        longitude: longitude,
	        latitude: latitude
	      });
	      return;
	    }
	    if (_browser2.default.isYouku || _browser2.default.isWindvane) {
	      // 获取经纬度Windvane文档： http://h5.alibaba-inc.com/api/WindVane-API.html#WVLocation-getLocation
	      var params = _extends({
	        // 是否获取高精度的位置
	        enableHighAcuracy: true, // 不知道是不是Windvane文档拼写错误还是故意的
	        enableHighAccuracy: true,
	        // 是否获取地址描述
	        address: false
	      }, option);
	      Windvane.call('WVLocation', 'getLocation', params, function (e) {
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {
	            reject();
	            return;
	          }
	        }
	        if (e.ret && e.ret == 'HY_SUCCESS') {
	          var coords = e.coords || {};
	          // 把结果缓存下来
	          longitude = coords.longitude;
	          latitude = coords.latitude;
	          resolve({
	            longitude: coords.longitude,
	            latitude: coords.latitude
	          });
	        } else {
	          reject();
	        }
	      }, function () {
	        if (enableDegrade) {
	          getCurrentPosition().then(function (res) {
	            resolve(res);
	          }).catch(function () {
	            reject();
	          });
	        } else {
	          reject();
	        }
	      });
	    } else {
	      if (enableDegrade) {
	        getCurrentPosition().then(function (res) {
	          resolve(res);
	        }).catch(function () {
	          reject();
	        });
	      } else {
	        reject();
	      }
	    }
	    if (timeout) {
	      // 超时直接返回空
	      setTimeout(function () {
	        reject();
	      }, timeout);
	    }
	  });
	}

	// H5下根据geolocation获取坐标，https访问下有效，用于H5降级，但是打开页面都有询问获取地理位置权限弹窗提示
	function getCurrentPosition() {
	  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return new Promise(function (resolve, reject) {
	    // 只支持H5
	    if (_universalEnv.isWeex || _universalEnv.isKraken) {
	      reject();
	      return;
	    }
	    // 优先取缓存数据
	    if (longitude && latitude) {
	      resolve({
	        longitude: longitude,
	        latitude: latitude
	      });
	      return;
	    }
	    var navigator = window.navigator;
	    if (navigator && navigator.geolocation && navigator.geolocation.getCurrentPosition) {
	      navigator.geolocation.getCurrentPosition(function (e) {
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        var coords = e.coords || {};
	        longitude = coords.longitude;
	        latitude = coords.latitude;
	        resolve({
	          longitude: longitude,
	          latitude: latitude
	        });
	      }, function () {
	        reject();
	      }, _extends({
	        enableHighAccuracy: true
	      }, option));
	    } else {
	      reject();
	    }
	  });
	}

	exports.default = { getGeoLocation: getGeoLocation, getCurrentPosition: getCurrentPosition };
	module.exports = exports['default'];

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _loadResource = __webpack_require__(186);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;


	if (_universalEnv.isWeb && !_universalEnv.isKraken) {
	  if (urlSearchObj.devtool === 'vconsole') {
	    console.log('vconsole 开始加载！');
	    _loadResource2.default.loadScript('//g.alicdn.com/hollywood/hlw-assets/0.0.13/vconsole-3.3.4/vconsole.min.js').then(function () {
	      window.vConsole = new window.VConsole();
	      console.log('vconsole 加载完成！');
	    });
	  }
	  if (urlSearchObj.devtool === 'eruda') {
	    console.log('eruda 开始加载！');
	    _loadResource2.default.loadScript('//g.alicdn.com/hollywood/hlw-assets/0.0.13/eruda-2.1.0/eruda.min.js').then(function () {
	      window.eruda.init();
	      console.log('eruda 加载完成！');
	    });
	  }
	}

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(11);

	var dom = _universalEnv.isWeex ? __webpack_require__(100) : null;

	var fontUrlMap = {
	  Akrobat: 'https://g.alicdn.com/ykvip_rax/assets/0.0.1/Akrobat-Bold.ttf',
	  'Akrobat-Bold': 'https://g.alicdn.com/ykvip_rax/assets/0.0.1/Akrobat-Bold.ttf'
	};

	// 加载自定义字体
	function loadFont(fontFamily, fontUrl) {
	  var url = fontUrl || fontUrlMap[fontFamily];
	  if (!fontFamily || !url) {
	    return;
	  }
	  if (_universalEnv.isKraken) {
	    // TODO Kraken待实现
	  } else if (_universalEnv.isWeex) {
	    dom.addRule('fontFace', {
	      fontFamily: fontFamily,
	      src: 'url("' + url + '")'
	    });
	  } else {
	    var fnCssSheet = function () {
	      var style = document.createElement('style');
	      style.type = 'text/css';
	      document.head.appendChild(style);
	      return style.sheet;
	    }();

	    (function fnCssStyle(_selector, _rules) {
	      fnCssSheet && fnCssSheet.insertRule(_selector + '{' + _rules + '}', 0);
	    })('@font-face', 'font-family: "' + fontFamily + '"; src: url("' + url + '") format("truetype");');
	  }
	}

	function loadAkrobat() {
	  loadFont('Akrobat');
	}

	exports.default = { loadFont: loadFont, loadAkrobat: loadAkrobat };
	module.exports = exports['default'];

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _requestMtop = __webpack_require__(175);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _url = __webpack_require__(166);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 加锁，防止连续点击
	var isLocked = false;

	// 上报完成任务
	function finishTask(actId, taskId) {
	  if (!actId || !taskId) {
	    return;
	  }
	  if (isLocked) {
	    return;
	  }
	  isLocked = true;
	  var params = {
	    actId: actId,
	    taskId: taskId,
	    appPackageKey: _browser2.default.isAndroid ? 'com.youku.phone' : 'com.youku.YouKu'
	  };
	  (0, _requestMtop2.default)({
	    api: 'mtop.youku.ykinfinite.taskservice.finishTask',
	    data: params,
	    ecode: 1
	  }).then(function (res) {
	    isLocked = false;
	    console.log('finishTask res: ' + JSON.stringify(res));
	  }).catch(function (err) {
	    isLocked = false;
	    console.error('finishTask err: ' + JSON.stringify(err));
	  });
	}

	// 根据URL的参数检查是否需要上报任务
	function checkFinishTask(url) {
	  if (!url) {
	    return;
	  }

	  var _parseUrlParam = (0, _url.parseUrlParam)(url),
	      _parseUrlParam$actId = _parseUrlParam.actId,
	      actId = _parseUrlParam$actId === undefined ? '' : _parseUrlParam$actId,
	      _parseUrlParam$taskId = _parseUrlParam.taskId,
	      taskId = _parseUrlParam$taskId === undefined ? '' : _parseUrlParam$taskId;

	  if (actId && taskId) {
	    finishTask(actId, taskId);
	  }
	}

	exports.default = { checkFinishTask: checkFinishTask, finishTask: finishTask };
	module.exports = exports['default'];

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _getYoukuConfig = __webpack_require__(202);

	var _getYoukuConfig2 = _interopRequireDefault(_getYoukuConfig);

	var _getDeviceInfo = __webpack_require__(203);

	var _getDeviceInfo2 = _interopRequireDefault(_getDeviceInfo);

	var _pageInfo = __webpack_require__(204);

	var _pageInfo2 = _interopRequireDefault(_pageInfo);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _weexConfig = __webpack_require__(205);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _krakenConfig = __webpack_require__(206);

	var _krakenConfig2 = _interopRequireDefault(_krakenConfig);

	var _krakenInfo = __webpack_require__(207);

	var _krakenInfo2 = _interopRequireDefault(_krakenInfo);

	var _getPageVisibilityState = __webpack_require__(208);

	var _getPageVisibilityState2 = _interopRequireDefault(_getPageVisibilityState);

	var _getSystemInfo = __webpack_require__(209);

	var _getSystemInfo2 = _interopRequireDefault(_getSystemInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _extends({}, _browser2.default, {
	  weexConfig: _weexConfig2.default,
	  krakenConfig: _krakenConfig2.default,
	  krakenInfo: _krakenInfo2.default,
	  getPageVisibilityState: _getPageVisibilityState2.default,
	  pageInfo: _pageInfo2.default,
	  getYoukuConfig: _getYoukuConfig2.default,
	  getDeviceInfo: _getDeviceInfo2.default,
	  getSystemInfo: _getSystemInfo2.default
	});
	module.exports = exports['default'];

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var YoukuConfig = null;
	try {
	  YoukuConfig = __webpack_require__(110);
	} catch (e) {}

	// 将获取的优酷Config信息返回
	// Weex返回的信息，跟web之间兼容成本大，后续不推荐使用，使用统一的getDeviceInfo windvane接口。

	exports.default = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	    var area;
	    return _regenerator2.default.wrap(function (_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            _universalEnv.isWeb && console.log('===== getYoukuConfig不支持Web容器，推荐使用getDeviceInfo');

	            if (!_universalEnv.isWeex) {
	              _context.next = 3;
	              break;
	            }

	            return _context.abrupt('return', new Promise(function (resolve, reject) {
	              if (YoukuConfig && YoukuConfig.getConfig) {
	                YoukuConfig.getConfig(function (config) {
	                  resolve(config);
	                });
	              } else {
	                reject();
	              }
	            }));

	          case 3:
	            if (!_universalEnv.isKraken) {
	              _context.next = 14;
	              break;
	            }

	            _context.prev = 4;
	            _context.next = 7;
	            return kraken.methodChannel.invokeMethod('YoukuConfig', 'getConfig');

	          case 7:
	            area = _context.sent;
	            return _context.abrupt('return', Promise.resolve(JSON.parse(area)));

	          case 11:
	            _context.prev = 11;
	            _context.t0 = _context['catch'](4);
	            return _context.abrupt('return', Promise.reject(_context.t0));

	          case 14:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this, [[4, 11]]);
	  }));

	  return function () {
	    return _ref.apply(this, arguments);
	  };
	}();

	module.exports = exports['default'];

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDeviceInfo;

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDeviceInfo() {
	  return new Promise(function (resolve, reject) {
	    try {
	      _windvane2.default.call('DYKBaseJSBridge', 'getDeviceInfo', {}, function (e) {
	        if (typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (e) {}
	        }
	        resolve(e);
	      }, function (e) {
	        reject(e);
	      });
	    } catch (e) {
	      reject(e);
	    }
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(11);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _weexConfig = __webpack_require__(205);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _krakenConfig = __webpack_require__(206);

	var _krakenConfig2 = _interopRequireDefault(_krakenConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 当前设备是否是Retina屏幕
	var isRetinaDevice = false;
	var devicePixelRatio = window.devicePixelRatio;
	if (devicePixelRatio >= 2) {
	  isRetinaDevice = true;
	}

	var urlSearchObj = _url2.default.urlSearchObj;

	var env = _universalEnv.isWeex && _weexConfig2.default && _weexConfig2.default.env || _universalEnv.isKraken && _krakenConfig2.default && _krakenConfig2.default.env;

	var platform = env ? env.platform : 'android';
	var isIOS = platform.toLowerCase() === 'ios';
	var isAndroid = !isIOS;

	// 判断是否大作业
	var isInChannel = !!(_universalEnv.isWeex && _weexConfig2.default && _weexConfig2.default.instanceId || _universalEnv.isKraken && window.device.app.sceneInstanceId);
	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	var isVipTab = urlSearchObj.isVipTab === 'true';

	var appPackageKey = '';
	// appPackageKey值，参考文档：https://yuque.antfin-inc.com/cummcf/df93x3/henue5#br61zw
	if (_browser2.default.isYouku) {
	  if (_browser2.default.isIPad) {
	    appPackageKey = 'com.youku.hd';
	  } else if (_browser2.default.isAndroid) {
	    appPackageKey = 'com.youku.phone';
	  } else if (_browser2.default.isIOS) {
	    appPackageKey = 'com.youku.YouKu';
	  }
	}

	var pageInfo = {
	  isRetinaDevice: isRetinaDevice,
	  urlSearchObj: urlSearchObj,
	  isIOS: _universalEnv.isWeex ? isIOS : _browser2.default.isIOS,
	  isAndroid: _universalEnv.isWeex ? isAndroid : _browser2.default.isAndroid,
	  isInChannel: _universalEnv.isWeex || _universalEnv.isKraken ? isInChannel : false,
	  isInPlayerTab: isInPlayerTab,
	  isVipTab: isVipTab,
	  weexConfig: _universalEnv.isWeex ? _weexConfig2.default : _universalEnv.isKraken ? _krakenConfig2.default : {},
	  // 页面是否可见，大作页默认不可见，pageShow时切换为可见
	  isPageVisible: !(isInChannel || isInPlayerTab || isVipTab),
	  appPackageKey: appPackageKey
	};

	!window.isServer && _YoukuEvent2.default.on('pageShow', function () {
	  pageInfo.isPageVisible = true;
	});
	!window.isServer && _YoukuEvent2.default.on('pageHide', function () {
	  pageInfo.isPageVisible = false;
	});

	// pageInfo是为了兼容旧逻辑，不再推荐使用
	exports.default = pageInfo;
	module.exports = exports['default'];

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var weexConfig = window.__weex_config__ && window.__weex_config__.weex && window.__weex_config__.weex.config || {};

	exports.default = weexConfig;
	module.exports = exports["default"];

/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var krakenConfig = window.kraken_config || {};

	exports.default = krakenConfig;
	module.exports = exports["default"];

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	exports.default = {
	  // 获取内容安全距离
	  getSafeArea: function () {
	    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	      var area;
	      return _regenerator2.default.wrap(function (_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.prev = 0;
	              _context.next = 3;
	              return kraken.methodChannel.invokeMethod('MediaQuery', 'getSafeArea');

	            case 3:
	              area = _context.sent;
	              return _context.abrupt('return', Promise.resolve(area));

	            case 7:
	              _context.prev = 7;
	              _context.t0 = _context['catch'](0);
	              return _context.abrupt('return', Promise.reject(_context.t0));

	            case 10:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, undefined, [[0, 7]]);
	    }));

	    return function getSafeArea() {
	      return _ref.apply(this, arguments);
	    };
	  }()
	};
	module.exports = exports['default'];

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPageVisibilityState;

	var _universalEnv = __webpack_require__(11);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _weexConfig = __webpack_require__(205);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _krakenConfig = __webpack_require__(206);

	var _krakenConfig2 = _interopRequireDefault(_krakenConfig);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _url2.default.urlSearchObj;

	// 判断是否大作业

	var isInChannel = !!(_universalEnv.isWeex && _weexConfig2.default && _weexConfig2.default.instanceId || _universalEnv.isKraken && window.device.app.sceneInstanceId);

	var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	var isVipTab = urlSearchObj.isVipTab === 'true';

	// 这些投放场景下默认为不可见
	var isPageVisible = !(isInChannel || isInPlayerTab || isVipTab);
	!window.isServer && _YoukuEvent2.default.on('pageShow', function () {
	  isPageVisible = true;
	});
	!window.isServer && _YoukuEvent2.default.on('pageHide', function () {
	  isPageVisible = false;
	});

	function getPageVisibilityState() {
	  return isPageVisible;
	}
	module.exports = exports['default'];

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = getSystemInfo;

	var _weexConfig = __webpack_require__(205);

	var _weexConfig2 = _interopRequireDefault(_weexConfig);

	var _krakenConfig = __webpack_require__(206);

	var _krakenConfig2 = _interopRequireDefault(_krakenConfig);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _getYoukuConfig = __webpack_require__(202);

	var _getYoukuConfig2 = _interopRequireDefault(_getYoukuConfig);

	var _getDeviceInfo = __webpack_require__(203);

	var _getDeviceInfo2 = _interopRequireDefault(_getDeviceInfo);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * 获取系统信息
	 * systemInfo数据结构参考https://yuque.antfin-inc.com/ykarch/weex/youkuconfig
	 */
	function getSystemInfo() {
	  return new Promise(function (resolve, reject) {
	    // 优酷站内
	    if (_browser2.default.isYouku) {
	      // pad端暂无weex下getYoukuConfig方法只有H5的getDeviceInfo，需要单独处理
	      if (_browser2.default.isIPad) {
	        getFromDeviceInfo().then(function (res) {
	          return resolve(res);
	        }).catch(function (err) {
	          return reject(err);
	        });
	      } else {
	        // phone端weex容器
	        if (_universalEnv.isWeex || _universalEnv.isKraken) {
	          (0, _getYoukuConfig2.default)().then(function (youkuConfig) {
	            var systeminfo = youkuConfig.systeminfo,
	                etc = _objectWithoutProperties(youkuConfig, ['systeminfo']);

	            return resolve(_extends({}, etc, systeminfo, _browser2.default.isIOS ? { appPackageKey: getAppPackageKey() } : {}) // iOS下getYoukuConfig获取的appPackageKey值不对，覆盖为固定值
	            );
	          }).catch(function () {
	            getFromDeviceInfo().then(function (res) {
	              return resolve(res);
	            }).catch(function (err) {
	              return reject(err);
	            });
	          });
	        } else {
	          // H5容器
	          getFromDeviceInfo().then(function (res) {
	            return resolve(res);
	          }).catch(function (err) {
	            return reject(err);
	          });
	        }
	      }
	    } else {
	      // 不在优酷站内获取不到系统信息，返回空对象
	      return resolve({});
	    }
	  });
	}

	// 从DeviceInfo中获取systemInfo，用于降级
	function getFromDeviceInfo() {
	  return new Promise(function (resolve, reject) {
	    (0, _getDeviceInfo2.default)().then(function (deviceInfo) {
	      var _deviceInfo$ttid = deviceInfo.ttid,
	          ttid = _deviceInfo$ttid === undefined ? '' : _deviceInfo$ttid;
	      // 从ttid中获取应用版本

	      var _ttid$split = ttid.split('_'),
	          _ttid$split2 = _slicedToArray(_ttid$split, 3),
	          ver = _ttid$split2[2];

	      return resolve(_extends({}, deviceInfo, { os: _browser2.default.isIOS ? 'ios' : 'android' }, ver ? { ver: ver } : {}, getFromWeexConfig(), { appPackageKey: getAppPackageKey() // 包名
	      }));
	    }).catch(function () {
	      return reject({});
	    });
	  });
	}

	// 从weexConfig中获取部分systemInfo，weex容器下才有
	// 返回：btype、os、osVer、ver
	function getFromWeexConfig() {
	  // weex容器提供信息
	  var _ref = _universalEnv.isKraken ? _krakenConfig2.default : _universalEnv.isWeex ? _weexConfig2.default : {},
	      _ref$env = _ref.env,
	      env = _ref$env === undefined ? {} : _ref$env;

	  // 提取需要转换参数名的参数


	  var deviceModel = env.deviceModel,
	      osName = env.osName,
	      osVersion = env.osVersion,
	      appVersion = env.appVersion;


	  return _extends({}, deviceModel ? { btype: deviceModel } : {}, osName ? { os: osName.toLowerCase() } : {}, osVersion ? { osVer: osVersion } : {}, appVersion ? { ver: appVersion } : {});
	}

	// 获取appPackageKey，用于H5场景
	function getAppPackageKey() {
	  var appPackageKey = '';
	  // appPackageKey值，参考文档：https://yuque.antfin-inc.com/cummcf/df93x3/henue5#br61zw
	  if (_browser2.default.isYouku) {
	    if (_browser2.default.isIPad) {
	      appPackageKey = 'com.youku.hd';
	    } else if (_browser2.default.isAndroid) {
	      appPackageKey = 'com.youku.phone';
	    } else if (_browser2.default.isIOS) {
	      appPackageKey = 'com.youku.YouKu';
	    }
	  }
	  return appPackageKey;
	}
	module.exports = exports['default'];

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = { YoukuEvent: _YoukuEvent2.default };
	module.exports = exports['default'];

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _universalEnv = __webpack_require__(11);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _webJumpTo = __webpack_require__(212);

	var _webJumpTo2 = _interopRequireDefault(_webJumpTo);

	var _weexJumpTo = __webpack_require__(213);

	var _weexJumpTo2 = _interopRequireDefault(_weexJumpTo);

	var _krakenJumpTo = __webpack_require__(214);

	var _krakenJumpTo2 = _interopRequireDefault(_krakenJumpTo);

	var _openInYouku = __webpack_require__(215);

	var _openInYouku2 = _interopRequireDefault(_openInYouku);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  openInYouku: _openInYouku2.default,
	  setAfterJumpDownloadUrl: _webJumpTo2.default.setAfterJumpDownloadUrl,
	  jumpTo: _universalEnv.isWeex ? _weexJumpTo2.default : _universalEnv.isKraken ? _krakenJumpTo2.default : _webJumpTo2.default.jumpTo
	};
	module.exports = exports['default'];

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _util = __webpack_require__(173);

	var _util2 = _interopRequireDefault(_util);

	var _closePage = __webpack_require__(187);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(190);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _tracker = __webpack_require__(161);

	var _universalEnv = __webpack_require__(11);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _loadResource = __webpack_require__(186);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageStorage = __webpack_require__(182);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _finishTask = __webpack_require__(200);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var supportedJumpTypes = ['url', 'http', 'video', 'show', 'scheme'];
	var yingyongbaoLink = '//a.app.qq.com/o/simple.jsp?pkgname=com.youku.phone';
	var universalLink = '//m.youku.com/download';
	// const commonDownloadPage = 'https://h5.m.youku.com//ju/download.html?refer=' + refer;
	var commonDownloadPage = 'https://hudong.vip.youku.com/act/download.html';

	var isAliPayMiniApp = _browser2.default.isAlipayMiniApp || false;
	isAliPayMiniApp && (universalLink = '//m.youku.com/download');
	if (_universalEnv.isWeb && (_browser2.default.isAlipayMiniApp || _browser2.default.isTaobaoMiniApp || _browser2.default.isYoukuMini)) {
	  (0, _loadResource.loadScript)('https://appx/web-view.min.js');
	}

	var isWeixinMiniApp = false;
	if (_universalEnv.isWeb && _browser2.default.isWeixin) {
	  (0, _loadResource.loadScript)('https://res.wx.qq.com/open/js/jweixin-1.3.2.js').then(function () {
	    window.wx.miniProgram.getEnv(function (res) {
	      isWeixinMiniApp = res.miniprogram;
	      isWeixinMiniApp && (universalLink = '//m.youku.com/download');
	    });
	  });
	}

	if (_browser2.default.isToutiaoMiniApp) {
	  (0, _loadResource.loadScript)('https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js');
	}

	var checkIfHttpUrl = _util2.default.checkIfHttpUrl,
	    checkIfWeexUrl = _util2.default.checkIfWeexUrl,
	    checkIfPlayUrl = _util2.default.checkIfPlayUrl,
	    checkIfLiveUrl = _util2.default.checkIfLiveUrl,
	    parsePlayUrl = _util2.default.parsePlayUrl,
	    mergeUrlSearch = _util2.default.mergeUrlSearch,
	    genVideoUrl = _util2.default.genVideoUrl,
	    genShowUrl = _util2.default.genShowUrl,
	    parseUrlParam = _util2.default.parseUrlParam,
	    urlSearchObj = _util2.default.urlSearchObj,
	    getCookie = _util2.default.getCookie;


	function empty() {}

	// let spmab = '';
	// function getSPMAB() {
	//   if (spmab) {
	//     return spmab;
	//   }
	//   const spmMeta = document.querySelector('meta[name=spm-id]');
	//   if (spmMeta) {
	//     spmab = spmMeta.getAttribute('content');
	//   } else {
	//     const spmaMeta = document.querySelector('meta[name=data-spm]');
	//     const spmb =
	//       document.body && document.body.dataset && document.body.dataset.spm;
	//     if (spmaMeta && spmb) {
	//       const spma = spmaMeta.getAttribute('content');
	//       spmab = `${spma}.${spmb}`;
	//     }
	//   }
	//   return spmab;
	// }

	var from = urlSearchObj.from,
	    refer = urlSearchObj.refer,
	    sharekey = urlSearchObj.sharekey,
	    calltype = urlSearchObj.calltype,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm,
	    xft_meta_id = urlSearchObj.xft_meta_id,
	    bizfrom = urlSearchObj.bizfrom;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	/**
	  参数attrObj示例如下：
	  {
	    posId
	    posText
	    jumpType
	    jumpUrl
	    videoId
	    playlistId
	    callType
	  }
	 */
	function jumpTo(attrObj, autoOpen) {
	  if (supportedJumpTypes.indexOf(attrObj.jumpType) === -1) {
	    // 不支持的跳转类型
	    return;
	  }
	  var spm = (0, _tracker.getSPM)(attrObj.posId || 'unknown.unknown');
	  var scm = encodeURIComponent(attrObj && attrObj.scm || (0, _tracker.getSCM)(attrObj));
	  if (/http|scheme/.test(attrObj.jumpType)) {
	    attrObj.jumpType = 'url';
	  }
	  // 埋点相关的一些url参数
	  var trackParam = { spm: spm, scm: scm, from: from, refer: refer, sharekey: sharekey, xft_meta_id: xft_meta_id };
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (trackParam['en_spm'] = enSpm || spm);
	  (enScm || scm) && (trackParam['en_scm'] = enScm || scm);
	  enId && (trackParam['en_id'] = enId);
	  var finalUrl = '';
	  if (attrObj.jumpType === 'url' && attrObj.jumpUrl) {
	    // url添加埋点参数
	    finalUrl = mergeUrlSearch(attrObj.jumpUrl, _extends({}, trackParam, {
	      isNeedBaseImage: 1
	    }));
	  }
	  if ((attrObj.jumpType === 'video' || attrObj.jumpType === 'show') && attrObj.videoId) {
	    // 转成视频播放地址
	    var videoUrl = genVideoUrl(attrObj.videoId, attrObj.playlistId);
	    finalUrl = mergeUrlSearch(videoUrl, _extends({}, trackParam, { isNeedBaseImage: 1 }));
	  }
	  if (attrObj.jumpType === 'show' && attrObj.showId) {
	    // 转成节目播放地址
	    var showUrl = genShowUrl(attrObj.showId);
	    finalUrl = mergeUrlSearch(showUrl, _extends({}, trackParam, { isNeedBaseImage: 1 }));
	  }
	  if (!finalUrl) {
	    return;
	  }
	  // 根据跳转url的参数检查是否上报任务
	  (0, _finishTask.checkFinishTask)(finalUrl);

	  if (/^hollywood/.test(attrObj.jumpUrl)) {
	    // 好莱坞提供的跳转类型，通过url支持各种跳转类型
	    var questionMarkPosition = attrObj.jumpUrl.indexOf('?') !== -1 ? attrObj.jumpUrl.indexOf('?') : attrObj.jumpUrl.length;
	    var action = attrObj.jumpUrl.substring(12, questionMarkPosition);
	    if (action === 'scrollToModule') {
	      var _parseUrlParam = parseUrlParam(attrObj.jumpUrl),
	          moduleName = _parseUrlParam.moduleName;
	      // 获取沉浸式导航高度


	      var topBarHeight = _pageStorage2.default.getItem('topBarHeight') || 0;
	      // 滚动偏移量，减去沉浸式导航高度，向上偏移时weex下为负数，H5下为正数，值为750宽度下的大小

	      _YoukuEvent2.default.fire('mainViewScrollToModule', { moduleName: moduleName, offset: topBarHeight });
	    } else if (action === 'closePage') {
	      (0, _closePage2.default)();
	    } else if (action === 'sharePage') {
	      _YoukuEvent2.default.fire('doPageShare');
	    } else if (action === 'showCommonDialog') {
	      var _parseUrlParam2 = parseUrlParam(attrObj.jumpUrl),
	          _moduleName = _parseUrlParam2.moduleName;

	      _YoukuEvent2.default.fire('showCommonDialog', { moduleName: _moduleName });
	    } else if (action === 'hideCommonDialog') {
	      var _parseUrlParam3 = parseUrlParam(attrObj.jumpUrl),
	          _moduleName2 = _parseUrlParam3.moduleName;

	      _YoukuEvent2.default.fire('hideCommonDialog', { moduleName: _moduleName2 });
	    }
	    return;
	  }
	  // getGlobalCallType每次都执行而不是缓存，这样即使全局设置发生变化也能生效
	  var callType = attrObj.callType || +calltype || 3;
	  // IOS下是否强制使用scheme跳转，默认IOS是使用universallink跳转
	  var useScheme = _browser2.default.isUC || _browser2.default.isQQBrowser || attrObj.useScheme === 'true';
	  if (_browser2.default.isYoukuMini && /^youku:\/\/miniapp\/openMiniApp/.test(finalUrl)) {
	    var params = parseUrlParam(finalUrl);
	    var parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	    if (parentAppId == params.appId) {
	      // 跳转优酷小程序内部页面
	      var page = params.page && decodeURIComponent(params.page);
	      window.my && window.my.navigateTo({
	        url: '/' + (page || 'pages/home/index')
	      });
	    } else {
	      // 跳转到小程序外部页面
	      AlipayJSBridge && AlipayJSBridge.call('startApp', {
	        appId: '20000069',
	        param: {
	          url: finalUrl
	        }
	      });
	    }
	  } else if (_browser2.default.isYouku) {
	    var urlParams = parseUrlParam(attrObj.jumpUrl);
	    // 是否使用nativeOpen，从跳转url中获取useNativeOpen参数，为兼容ios播放页广告位页面location.href无法跳转的bug，正常情况下无需使用
	    var useNativeOpen = urlParams.useNativeOpen === 'true';
	    // removeStackTopPage作用是跳转时移除当前页面，调用nativeOpen传的参数，ios播放页广告位页面使用NativeOpen时还需要添加removeStackTopPage参数才能跳转
	    var removeStackTopPage = urlParams.removeStackTopPage === 'true';
	    // 优酷app内
	    if (checkIfWeexUrl(finalUrl)) {
	      // weex url转成scheme地址，不然安卓下统一路由经常出现跳源码的情况
	      finalUrl = 'youku://weex?url=' + encodeURIComponent(finalUrl);
	    }
	    if (+callType === 4 || !checkIfHttpUrl(finalUrl)) {
	      // callType=4 && weex地址 && scheme地址；用location.href打开
	      if (/^tbopen/.test(finalUrl)) {
	        // tbopen的url
	        (0, _isAppInstalled2.default)({
	          ios: 'taobao://',
	          android: 'com.taobao.taobao'
	        }).then(function (result) {
	          if (result === 'INSTALLED') {
	            // 如果已经安装，直接用scheme打开
	            window.location.href = finalUrl;
	          } else {
	            // 否则解析出tbopen里的h5Url并跳转
	            var _urlParams = parseUrlParam(attrObj.jumpUrl);
	            var h5Url = _urlParams.h5Url;

	            jumpTo(_extends({}, attrObj, {
	              jumpType: 'url',
	              jumpUrl: decodeURIComponent(h5Url)
	            }));
	          }
	        });
	      } else {
	        if (useNativeOpen) {
	          var _params = _extends({
	            url: finalUrl
	          }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	          // 使用nativeOpen接口跳转，如果跳转失败使用location.href兼容
	          nativeOpen(_params, empty, function () {
	            window.location.href = finalUrl;
	          });
	        } else {
	          window.location.href = finalUrl;
	        }
	      }
	    } else if (checkIfPlayUrl(finalUrl) || checkIfLiveUrl(finalUrl)) {
	      // 播放页或直播页走nativeOpen
	      // 其实也可走location.href，但是老版本的大作页没有走统一路由，会在当前打开，保险起见先用nativeOpen
	      var _params2 = _extends({
	        url: finalUrl
	      }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	      nativeOpen(_params2);
	    } else {
	      // 普通的http地址，转成scheme方式在新容器打开
	      // 安卓需要编码，不然参数会丢失，ios不能编码，编码会白页。。。。。。
	      _browser2.default.isAndroid && (finalUrl = encodeURIComponent(finalUrl));
	      finalUrl = 'youku://http?action=http&url=' + finalUrl;
	      if (useNativeOpen) {
	        var _params3 = _extends({
	          url: finalUrl
	        }, removeStackTopPage ? { removeStackTopPage: removeStackTopPage } : {});
	        // 使用nativeOpen接口跳转，如果跳转失败使用location.href兼容
	        nativeOpen(_params3, empty, function () {
	          window.location.href = finalUrl;
	        });
	      } else {
	        window.location.href = finalUrl;
	      }
	    }
	  } else if (_browser2.default.isTaobao && (checkIfPlayUrl(finalUrl) || _browser2.default.isTaobaoMiniApp)) {
	    var taobaoRealUrl = finalUrl;
	    var playerParams = '';

	    // 播放页需要修改url
	    if (checkIfPlayUrl(finalUrl)) {
	      var parseObj = parsePlayUrl(finalUrl);
	      var vid = parseObj.vid,
	          showid = parseObj.showid;

	      playerParams = getAlipayPlayParams({
	        jumpType: vid ? 'video' : 'show',
	        videoId: vid,
	        showId: showid
	      });
	      var playerUrl = 'https://m.duanqu.com?_ariver_appid=3000000002118703&page=' + encodeURIComponent('pages/youku-player/youku-player?' + playerParams);
	      taobaoRealUrl = playerUrl;
	      window.location.href = taobaoRealUrl;
	    }

	    if (_browser2.default.isTaobaoMiniApp) {
	      my.call('navigateToOutside', {
	        url: taobaoRealUrl
	      });
	    }
	  } else if (_browser2.default.isAlipay && !isAliPayMiniApp && checkIfPlayUrl(finalUrl)) {
	    // 支付宝h5页面跳转小程序播放页
	    var _parseObj = parsePlayUrl(finalUrl);
	    var _vid = _parseObj.vid,
	        _showid = _parseObj.showid;

	    jumpToAlipayPlayPage({
	      jumpType: _vid ? 'video' : 'show',
	      videoId: _vid,
	      showId: _showid
	    }, true);
	  } else if (_browser2.default.isAlipay && !isAliPayMiniApp && checkIfLiveUrl(finalUrl) && window.AlipayJSBridge) {
	    // 支付宝非小程序内跳转直播页面
	    // 暂时使用pushWindow方法并添加newProcessPool=YES参数解决webview中直播播放器播放的问题
	    // pushWindow使用文档：http://myjsapi.alipay.com/jsapi/context/push-window.html
	    window.AlipayJSBridge.call('pushWindow', {
	      url: mergeUrlSearch(finalUrl, { newProcessPool: 'YES' })
	    });
	  } else if (isAliPayMiniApp && (checkIfPlayUrl(finalUrl) || finalUrl.indexOf('alipays://platformapi/startapp') === 0)) {
	    if (checkIfPlayUrl(finalUrl)) {
	      // 支付宝小程序播放页调小程序播放页
	      var _parseObj2 = parsePlayUrl(finalUrl);
	      var _vid2 = _parseObj2.vid,
	          _showid2 = _parseObj2.showid;

	      jumpToAlipayPlayPage({
	        jumpType: _vid2 ? 'video' : 'show',
	        videoId: _vid2,
	        showId: _showid2
	      });
	    } else if (finalUrl.indexOf('alipays://platformapi/startapp' === 0)) {
	      var _params4 = parseUrlParam(finalUrl);

	      //跳转优酷视频支付宝小程序内部页面
	      //判断目标小程序和当前小程序是否一致
	      var _parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	      if (_parentAppId === '2018040402504128' && _params4.appId === '2018040402504128') {
	        //小程序Tab页面
	        var tabPageList = ['pages/home/index', 'pages/entire/entire', 'pages/program-list/program-list', 'pages/account/account'];
	        try {
	          var _page = _params4.page && decodeURIComponent(_params4.page);
	          var noParamsPage = _page && _page.split('?')[0];
	          if (!_page || tabPageList && tabPageList.indexOf(noParamsPage) > -1) {
	            //路径后不能带参数
	            window.my && window.my.switchTab({
	              url: '/' + (noParamsPage || 'pages/home/index')
	            });
	          } else {
	            //非Tab页面
	            window.my && window.my.navigateTo({
	              url: '/' + _page
	            });
	          }
	        } catch (err) {}
	      } else if (_parentAppId === _params4.appId) {
	        // 跳转到本身支付宝小程序
	        var _page2 = _params4.page && decodeURIComponent(_params4.page);
	        window.my && window.my.navigateTo({
	          url: '/' + _page2
	        });
	      } else {
	        // 跳转到其他支付宝小程序
	        AlipayJSBridge.call('startApp', {
	          appId: '20000067',
	          param: {
	            url: finalUrl
	          }
	        });
	      }
	    }
	  } else if (isWeixinMiniApp && checkIfPlayUrl(finalUrl)) {
	    // 微信小程序播放页调小程序播放页
	    var paramStr = getMiniAppPlayParams(finalUrl);
	    // 跳转小程序播放页
	    window.wx.miniProgram.navigateTo({
	      url: '../play/play?' + paramStr
	    });
	  } else if (_browser2.default.isToutiaoMiniApp && checkIfPlayUrl(finalUrl)) {
	    var _paramStr = getMiniAppPlayParams(finalUrl);
	    // 头条小程序播放页跳转小程序播放页
	    tt.miniProgram.navigateTo({
	      url: '/pages/play/index?' + _paramStr
	    });
	  } else {
	    if ((+callType === 3 || +callType === 5) && checkIfHttpUrl(finalUrl)) {
	      if (bizfrom && checkIfPlayUrl(finalUrl)) {
	        // 站外跳转到m站播放页时，透传页面bizfrom参数用于免广等配置
	        finalUrl = mergeUrlSearch(finalUrl, { bizfrom: bizfrom });
	      }
	      // m.youku.com/video/ 替换成 m.youku.com/alipay_video/ 防止自动换端
	      finalUrl = finalUrl.replace(/^https:\/\/m.youku.com\/video\//, 'https://m.youku.com/alipay_video/').replace('_wx_tpl', '_wx_share_tpl');
	      if (+callType === 3) {
	        window.location.href = finalUrl;
	      } else {
	        window.open(finalUrl);
	      }
	    } else {
	      var ucodeConfig = attrObj.ucodeConfig || {};
	      ucodeConfig.usecreturl && (ucodeConfig.usecreturl = encodeURIComponent(ucodeConfig.usecreturl));
	      ucodeConfig.usecretpicurl && (ucodeConfig.usecretpicurl = encodeURIComponent(ucodeConfig.usecretpicurl));
	      youkuOpen(finalUrl, useScheme,
	      // 不播放开屏广告，增加唤端落地率
	      _extends({}, trackParam, { adv: 'no' }), autoOpen, ucodeConfig);
	    }
	  }
	}

	// 优酷站内使用的跳转方法
	function nativeOpen(params) {
	  var successCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : empty;
	  var failureCallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : empty;

	  // 其他情况直接打开，播放页和直播页会走统一路由跳转到native地址
	  _browser2.default.isWindvane && _windvane2.default && _windvane2.default.call('DYKBaseJSBridge', 'nativeOpen', params, successCallback, failureCallBack);
	}

	// 站外唤端方法
	function youkuOpen(mergedUrl, useScheme, extraParam, autoOpen, ucodeConfig) {
	  var url = mergedUrl;
	  if (!url) {
	    return;
	  }
	  if (/^ykshortvideo/.test(url)) {
	    // 站外优酷
	    url = 'youku://ykshortvideo?url=' + encodeURIComponent(url);
	  }
	  var canYoukuOpen = /^http|^youku/.test(url);
	  if (!canYoukuOpen) {
	    // 不可优酷打开：非youku://开头的scheme地址
	    window.location.href = url;
	    return;
	  }
	  // 自动唤端强制使用scheme
	  if (_browser2.default.isIOS && !useScheme && !autoOpen) {
	    // ios默认用universallink打开
	    universalOpen(url, extraParam, ucodeConfig);
	  } else {
	    // 用schema打开
	    schemeOpen(url, extraParam, autoOpen, ucodeConfig);
	  }
	}

	// universallink打开方式
	function universalOpen(url, extraParam) {
	  var ucodeConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  if (_browser2.default.isAndroid) {
	    return;
	  }
	  if (checkIfHttpUrl(url)) {
	    if (checkIfPlayUrl(url)) {
	      // 播放页地址，需要解析出url内的videoid、showid、playlistid的信息，然后通过play的路由打开。
	      // 否则，使用http的方式打开IOS会有中间空白容器，安卓会在站内打开H5播放页。
	      window.location.href = mergeUrlSearch(universalLink, _extends({
	        action: 'play'
	      }, parsePlayUrl(url), extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }, ucodeConfig));
	    } else {
	      // 普通http地址或weex地址
	      window.location.href = mergeUrlSearch(universalLink, _extends({
	        action: checkIfWeexUrl(url) ? 'weex' : 'http',
	        url: encodeURIComponent(url)
	      }, extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }, ucodeConfig));
	    }
	  } else {
	    // scheme地址解析成为universallink地址后跳转
	    var questionMarkPosition = url.indexOf('?') !== -1 ? url.indexOf('?') : url.length;
	    var action = url ? url.substring(url.indexOf('youku://') + 8, questionMarkPosition) : '';
	    var params = parseUrlParam(url);
	    window.location.href = mergeUrlSearch(universalLink, _extends({
	      action: action
	    }, params, extraParam, {
	      cookieid: encodeURIComponent(getCookie('cna')),
	      refer_url: encodeURIComponent(window.location.href),
	      is_h5: 1,
	      callup_type: 'clk',
	      source: extraParam.spm,
	      ts: Date.now()
	    }, ucodeConfig));
	  }
	}

	// scheme打开方式
	function schemeOpen(originalUrl, extraParam, autoOpen, ucodeConfig) {
	  var url = originalUrl;
	  if (_browser2.default.isWeixin && _browser2.default.isIOS && !autoOpen) {
	    // ios微信强制用universallink的方式打开，因为scheme禁用了
	    // 自动唤端强制使用scheme
	    universalOpen(url, extraParam, ucodeConfig);
	    return;
	  }
	  if (checkIfHttpUrl(url)) {
	    if (checkIfPlayUrl(url)) {
	      // 播放页地址，需要解析出url内的videoid、showid、playlistid的信息，然后通过play的路由打开。
	      // 否则，使用http的方式打开IOS会有中间空白容器，安卓会在站内打开H5播放页。
	      url = mergeUrlSearch('youku://play', _extends({}, parsePlayUrl(url), extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: autoOpen ? 'auto' : 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }));
	    } else {
	      // 如果是普通http地址或者weex地址
	      var action = checkIfWeexUrl(url) ? 'weex' : 'http';
	      url = mergeUrlSearch('youku://' + action + '?action=' + action, _extends({
	        url: encodeURIComponent(url)
	      }, extraParam, {
	        cookieid: encodeURIComponent(getCookie('cna')),
	        refer_url: encodeURIComponent(window.location.href),
	        is_h5: 1,
	        callup_type: autoOpen ? 'auto' : 'clk',
	        source: extraParam.spm,
	        ts: Date.now()
	      }));
	    }
	  } else {
	    url = mergeUrlSearch(url, _extends({}, extraParam, {
	      cookieid: encodeURIComponent(getCookie('cna')),
	      refer_url: encodeURIComponent(window.location.href),
	      is_h5: 1,
	      callup_type: autoOpen ? 'auto' : 'clk',
	      source: extraParam.spm,
	      ts: Date.now()
	    }));
	  }
	  if (_browser2.default.isWeixin && _browser2.default.isAndroid && !autoOpen) {
	    // 安卓应用宝打开
	    window.location.href = yingyongbaoLink + '&android_schema=' + encodeURIComponent(url);
	    return;
	  }

	  _windvane2.default && _windvane2.default.call('Base', 'isInstall', {
	    ios: 'youku://',
	    android: 'com.youku.phone'
	  }, function () {
	    window.location.href = url;
	  }, function (e) {
	    if (e.ret && (e.ret === 'HY_FAILED' || e.ret[0] === 'HY_FAILED')) {
	      // 判断未安装，非自动唤端时立即执行拉起下载或者跳下载页的操作
	      autoOpen || afterJump(ucodeConfig);
	    } else {
	      // 其他异常（不在windvane环境下或者windvane接口不存在），执行跳转
	      if (shouldUseIframeOpen()) {
	        iframeOpen(url);
	      } else {
	        window.location.href = url;
	      }
	      // 非自动唤端延迟检查页面visibility状态来执行后续操作
	      autoOpen || afterJump(ucodeConfig);
	    }
	  });
	}

	var iframe = void 0;
	// 某些app在未安装优酷的情况下使用location.href跳schema会跳空白页，需要用iframe的方式
	function iframeOpen(url) {
	  if (!iframe) {
	    iframe = document.createElement('iframe');
	    iframe.id = 'hollywood_iframe_' + Date.now();
	    iframe.frameborder = '0';
	    iframe.style.cssText = 'display:none;border:0;width:0;height:0;';
	    document.body.appendChild(iframe);
	  }
	  iframe.src = url;
	}

	// 配置需要用iframe跳转的情况
	function shouldUseIframeOpen() {
	  if (_browser2.default.isWeibo && _browser2.default.isAndroid) {
	    return true;
	  }
	  return false;
	}

	var startDownloadTimeout = null;
	var afterJumpDownloadUrl = '';
	function afterJump() {
	  var ucodeConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  startDownloadTimeout = setTimeout(function () {
	    var downloadPage = mergeUrlSearch(commonDownloadPage, ucodeConfig);
	    startDownloadTimeout = null;
	    if (_browser2.default.isAndroid) {
	      window.location.href = afterJumpDownloadUrl || downloadPage;
	    } else {
	      window.location.href = downloadPage;
	    }
	  }, 1500);
	}

	_universalEnv.isWeb && !window.isServer && document.addEventListener('visibilitychange', function () {
	  if (document.visibilityState === 'hidden') {
	    startDownloadTimeout && clearTimeout(startDownloadTimeout);
	  }
	});
	function setAfterJumpDownloadUrl(url) {
	  afterJumpDownloadUrl = url;
	}

	// 支付宝小程序站播放页的跳转方法
	function jumpToAlipayPlayPage(attrObj) {
	  var isH5ToAliPayMiniApp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var params = getAlipayPlayParams(attrObj);
	  if (isH5ToAliPayMiniApp) {
	    // 支付宝h5页面跳转小程序播放页
	    location.href = 'alipays://platformapi/startapp?appId=2018040402504128&page=pages/native-player/native-player?' + encodeURIComponent(params);
	  } else {
	    // 小程序套壳h5页跳转小程序播放页
	    // 判断当前小程序，跳转优酷视频小程序播放页
	    var parentAppId = AlipayJSBridge && AlipayJSBridge.startupParams && AlipayJSBridge.startupParams.parentAppId;
	    if (parentAppId === '2018040402504128') {
	      // 原小程序套壳h5页跳转本身小程序的播放页
	      window.my && window.my.navigateTo({
	        url: '../native-player/native-player?' + params
	      });
	    } else {
	      // 其他小程序跳转到优酷视频小程序的播放页
	      window.AlipayJSBridge && window.AlipayJSBridge.call('startApp', {
	        appId: '20000067',
	        param: {
	          url: 'alipays://platformapi/startapp?appId=2018040402504128&page=pages/native-player/native-player?' + encodeURIComponent(params)
	        }
	      });
	    }
	  }
	}

	// 获取支付宝/淘宝播放页参数
	function getAlipayPlayParams(attrObj) {
	  var jumpType = attrObj.jumpType;

	  if (jumpType !== 'video' && jumpType !== 'show') {
	    return;
	  }
	  var obj = {}; // 播放参数

	  if (jumpType === 'video') {
	    obj.srcType = 0; // 会员鉴权类型 0是vid，1是showId
	    obj.videoId = attrObj.videoId; // videoId 和showId是并列情况 只传一种即可
	  }
	  if (jumpType === 'show') {
	    obj.srcType = 1; // 会员鉴权类型 0是vid，1是showId
	    obj.showId = attrObj.showId;
	  }

	  var params = '';
	  for (var key in obj) {
	    params += '&' + key + '=' + encodeURIComponent(obj[key]);
	  }
	  params = params.substring(1, params.length);
	  return params;
	}

	// 获取头条小程序和微信小程序播放页调小程序播放页的参数
	function getMiniAppPlayParams(finalUrl) {
	  var parseObj = parsePlayUrl(finalUrl);
	  var vid = parseObj.vid,
	      showid = parseObj.showid;

	  var obj = {}; // 播放参数
	  obj.title = ''; // 标题
	  obj.srcType = vid ? '0' : '1'; // 会员鉴权类型 0是vid，1是showId
	  vid && (obj.videoId = vid);
	  showid && (obj.showId = showid);
	  var params = [];
	  for (var key in obj) {
	    params.push(key + '=' + encodeURIComponent(obj[key]));
	  }
	  return params.join('&');
	}

	exports.default = { setAfterJumpDownloadUrl: setAfterJumpDownloadUrl, jumpTo: jumpTo };
	module.exports = exports['default'];

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _closePage = __webpack_require__(187);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(190);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _env = __webpack_require__(201);

	var _env2 = _interopRequireDefault(_env);

	var _tracker = __webpack_require__(161);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageStorage = __webpack_require__(182);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _finishTask = __webpack_require__(200);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mergeUrlSearch = _url2.default.mergeUrlSearch,
	    parseUrlParam = _url2.default.parseUrlParam,
	    checkIfPlayUrl = _url2.default.checkIfPlayUrl,
	    checkIfHttpUrl = _url2.default.checkIfHttpUrl,
	    urlSearchObj = _url2.default.urlSearchObj;


	var YoukuPage = null;
	try {
	  YoukuPage = __webpack_require__(95);
	} catch (e) {}
	var navigator = null;
	try {
	  navigator = __webpack_require__(120);
	} catch (e) {
	  navigator = null;
	}

	var pwNavigator = null;
	try {
	  pwNavigator = __webpack_require__(121);
	} catch (e) {
	  pwNavigator = null;
	}

	var VICWeexPluginModule = null;
	try {
	  VICWeexPluginModule = __webpack_require__(122);
	} catch (e) {}

	var from = urlSearchObj.from,
	    refer = urlSearchObj.refer,
	    sharekey = urlSearchObj.sharekey,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	var lastJumpTime = 0;
	function jumpTo(params) {
	  if (!(YoukuPage && YoukuPage.jumpTo) || !(params && params.jumpType)) {
	    // 跳转 module load 失败，或者没有跳转类型
	    return;
	  }
	  var currentJumpTime = Date.now();
	  if (currentJumpTime - lastJumpTime < 500) {
	    // 避免多次重复点击
	    return;
	  }
	  lastJumpTime = currentJumpTime;

	  var _ref = params || {},
	      jumpType = _ref.jumpType,
	      jumpUrl = _ref.jumpUrl,
	      videoId = _ref.videoId,
	      showId = _ref.showId,
	      playlistId = _ref.playlistId,
	      action = _ref.action,
	      posId = _ref.posId;

	  var spm = (0, _tracker.getSPM)(posId);
	  var scm = encodeURIComponent(params && params.scm || (0, _tracker.getSCM)(params));
	  // 埋点相关的一些url参数
	  var trackParam = { spm: spm, scm: scm, from: from, refer: refer, sharekey: sharekey };
	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (trackParam['en_spm'] = enSpm || spm);
	  (enScm || scm) && (trackParam['en_scm'] = enScm || scm);
	  enId && (trackParam['en_id'] = enId);

	  // 根据跳转url的参数检查是否上报任务
	  (0, _finishTask.checkFinishTask)(jumpUrl);

	  if ((jumpType === 'http' || jumpType === 'scheme' || jumpType === 'url') && jumpUrl) {
	    var value = jumpUrl.indexOf('youku://page/feed') === 0 ? mergeUrlSearch(jumpUrl, { spm: spm }) : mergeUrlSearch(jumpUrl, trackParam);
	    if (/^youku|^http|^ykshortvideo/.test(value)) {
	      var isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	      var isPlayerUrl = checkIfPlayUrl(value);
	      if (_env2.default.isIOS && isInPlayerTab && isPlayerUrl) {
	        // 播放页tab & IOS & 播放页地址，增加isNeedSmallCardRequest参数来实现小刷新
	        value = mergeUrlSearch(value, { isNeedSmallCardRequest: 1 });
	      }
	      // http地址
	      var isHttpUrl = checkIfHttpUrl(value);
	      // 使用半屏打开
	      var useHalfView = urlSearchObj.calltype == 6;
	      if (isHttpUrl && !isPlayerUrl && useHalfView) {
	        // ios播放页tab，如果设置calltype=6，非播放页的http地址，拉起半屏打开
	        VICWeexPluginModule && VICWeexPluginModule.showVerticalHalfWebview && VICWeexPluginModule.showVerticalHalfWebview(value);
	      } else {
	        // 优酷的scheme或者http地址
	        YoukuPage.jumpTo({
	          action: {
	            type: 'JUMP_TO_URL',
	            extra: { value: value }
	          }
	        });
	      }
	    } else if (/^shuqiyk/.test(value)) {
	      // 2019春节战役针对书旗优酷站内scheme的跳转兼容
	      // 理论上其他url也可以用，但为了影响最小只针对书旗处理
	      // 后续验证评估是否全切为下面某种方式
	      if (pwNavigator && pwNavigator.navigate) {
	        // 星球提供的跳转，播放页半屏或者播放页tab使用，通用容器也可用
	        pwNavigator.navigate(value);
	      } else if (navigator && navigator.push) {
	        // 站内跳转
	        navigator.push({ url: value, animated: false }, function () {});
	      }
	    } else if (/^hollywood/.test(value)) {
	      // 好莱坞提供的跳转类型，通过url支持各种跳转类型
	      var questionMarkPosition = jumpUrl.indexOf('?') !== -1 ? jumpUrl.indexOf('?') : jumpUrl.length;
	      var _action = jumpUrl.substring(12, questionMarkPosition);
	      if (_action === 'scrollToModule') {
	        var _parseUrlParam = parseUrlParam(jumpUrl),
	            moduleName = _parseUrlParam.moduleName;
	        // 获取沉浸式导航高度


	        var topBarHeight = _pageStorage2.default.getItem('topBarHeight') || 0;
	        // 滚动偏移量，减去沉浸式导航高度，向上偏移时weex下为负数，H5下为正数，值为750宽度下的大小

	        _YoukuEvent2.default.fire('mainViewScrollToModule', { moduleName: moduleName, offset: -topBarHeight });
	      } else if (_action === 'closePage') {
	        (0, _closePage2.default)();
	      } else if (_action === 'sharePage') {
	        _YoukuEvent2.default.fire('doPageShare');
	      } else if (_action === 'showCommonDialog') {
	        var _parseUrlParam2 = parseUrlParam(jumpUrl),
	            _moduleName = _parseUrlParam2.moduleName;

	        _YoukuEvent2.default.fire('showCommonDialog', { moduleName: _moduleName });
	      } else if (_action === 'hideCommonDialog') {
	        var _parseUrlParam3 = parseUrlParam(jumpUrl),
	            _moduleName2 = _parseUrlParam3.moduleName;

	        _YoukuEvent2.default.fire('hideCommonDialog', { moduleName: _moduleName2 });
	      }
	    } else if (/^tbopen/.test(value)) {
	      // tbopen的url
	      (0, _isAppInstalled2.default)({
	        ios: 'taobao://',
	        android: 'com.taobao.taobao'
	      }).then(function (result) {
	        if (result === 'INSTALLED') {
	          // 如果已经安装，直接用scheme打开
	          navigator && navigator.open && navigator.open({ url: value, animated: false }, function () {});
	        } else {
	          // 否则解析出tbopen里的h5Url并跳转
	          var urlParams = parseUrlParam(jumpUrl);
	          var h5Url = urlParams.h5Url;

	          lastJumpTime = 0;
	          jumpTo(_extends({}, params, {
	            jumpType: 'url',
	            jumpUrl: decodeURIComponent(h5Url)
	          }));
	        }
	      }).catch(function () {});
	    } else {
	      // 其他APP的地址
	      navigator && navigator.open && navigator.open({ url: value, animated: false }, function () {});
	    }
	  }
	  if (jumpType === 'video' && videoId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_VIDEO',
	        extra: { value: videoId }
	      }
	    });
	  }
	  if (jumpType === 'show' && showId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_SHOW',
	        extra: { value: showId, videoId: videoId || '' }
	      }
	    });
	  }
	  if (jumpType === 'playlist' && videoId && playlistId) {
	    YoukuPage.jumpTo({
	      action: {
	        type: 'JUMP_TO_PLAY_LIST',
	        extra: { value: playlistId, videoId: videoId }
	      }
	    });
	  }
	  if (jumpType === 'action' && action) {
	    if (action.type === 'JUMP_TO_URL' && action.extra && action.extra.value) {
	      var _value = action.extra.value.indexOf('youku://page/feed') === 0 ? mergeUrlSearch(action.extra.value, { spm: spm }) : mergeUrlSearch(action.extra.value, trackParam);
	      var newAction = _extends({}, action, {
	        extra: _extends({}, action.extra, {
	          value: _value
	        })
	      });
	      YoukuPage.jumpTo({ action: newAction });
	    } else {
	      YoukuPage.jumpTo({ action: action });
	    }
	  }
	}

	exports.default = jumpTo;
	module.exports = exports['default'];

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _url = __webpack_require__(166);

	var _url2 = _interopRequireDefault(_url);

	var _closePage = __webpack_require__(187);

	var _closePage2 = _interopRequireDefault(_closePage);

	var _isAppInstalled = __webpack_require__(190);

	var _isAppInstalled2 = _interopRequireDefault(_isAppInstalled);

	var _env = __webpack_require__(201);

	var _env2 = _interopRequireDefault(_env);

	var _tracker = __webpack_require__(161);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageStorage = __webpack_require__(182);

	var _pageStorage2 = _interopRequireDefault(_pageStorage);

	var _krakenNav = __webpack_require__(189);

	var _krakenNav2 = _interopRequireDefault(_krakenNav);

	var _finishTask = __webpack_require__(200);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mergeUrlSearch = _url2.default.mergeUrlSearch,
	    parseUrlParam = _url2.default.parseUrlParam,
	    checkIfPlayUrl = _url2.default.checkIfPlayUrl,
	    checkIfHttpUrl = _url2.default.checkIfHttpUrl,
	    urlSearchObj = _url2.default.urlSearchObj;
	var from = urlSearchObj.from,
	    refer = urlSearchObj.refer,
	    sharekey = urlSearchObj.sharekey,
	    spm = urlSearchObj.spm,
	    scm = urlSearchObj.scm;
	// 入口的埋点信息补充

	var enSpm = urlSearchObj['en_spm'] || spm;
	var enScm = urlSearchObj['en_scm'] || scm;
	var enId = urlSearchObj['en_id'] || from;

	var lastJumpTime = 0;
	function jumpTo(params) {
	  if (!params) {
	    return;
	  }

	  // 避免多次重复点击
	  var currentJumpTime = Date.now();
	  if (currentJumpTime - lastJumpTime < 500) {
	    return;
	  }
	  lastJumpTime = currentJumpTime;

	  // const { jumpType, jumpUrl, videoId, showId, playlistId, action, posId } = params || {};

	  var _ref = params || {},
	      jumpType = _ref.jumpType,
	      jumpUrl = _ref.jumpUrl,
	      videoId = _ref.videoId,
	      showId = _ref.showId,
	      playlistId = _ref.playlistId,
	      posId = _ref.posId;

	  var spm = (0, _tracker.getSPM)(posId);
	  var scm = encodeURIComponent(params && params.scm || (0, _tracker.getSCM)(params));

	  // 埋点相关的一些url参数
	  var trackParam = { spm: spm, scm: scm, from: from, refer: refer, sharekey: sharekey };

	  // en-类参数均是为了支付链路埋点打通所补充的参数，为入口的资源位信息
	  // en_spm为入口Url的spm，取值优先级为：url里的en_spm > url里的spm > 坑位本身的spm
	  // en_scm为入口Url的scm，取值优先级为：url里的en_scm > url里的scm > 坑位本身的scm
	  // en_id为入口Url的from值，取值优先级为：url里的en_id > url里的from
	  (enSpm || spm) && (trackParam['en_spm'] = enSpm || spm);
	  (enScm || scm) && (trackParam['en_scm'] = enScm || scm);
	  enId && (trackParam['en_id'] = enId);

	  // 根据跳转url的参数检查是否上报任务
	  (0, _finishTask.checkFinishTask)(jumpUrl);

	  if (jumpUrl) {
	    // mergeUrlSearch:把一个url的参数跟新的对象参数merge到一起，重复的以新对象为准
	    var value = jumpUrl.indexOf('youku://page/feed') === 0 ? mergeUrlSearch(jumpUrl, { spm: spm }) : mergeUrlSearch(jumpUrl, trackParam);

	    // if (/^youku|^http|^ykshortvideo/.test(value)) {
	    //   const isInPlayerTab = urlSearchObj.isInPlayerTab === 'true';
	    //   const isPlayerUrl = checkIfPlayUrl(value);

	    //   // 播放页tab & IOS & 播放页地址，增加isNeedSmallCardRequest参数来实现小刷新
	    //   if (env.isIOS && isInPlayerTab && isPlayerUrl) {
	    //     value = mergeUrlSearch(value, { isNeedSmallCardRequest: 1 });
	    //   }

	    //   const isHttpUrl = checkIfHttpUrl(value); // http地址
	    //   const useHalfView = urlSearchObj.calltype == 6; // 使用半屏打开

	    //   if (isHttpUrl && !isPlayerUrl && useHalfView) {
	    //     // ios播放页tab，如果设置calltype=6，非播放页的http地址，拉起半屏打开
	    //     VICWeexPluginModule &&
	    //       VICWeexPluginModule.showVerticalHalfWebview &&
	    //       VICWeexPluginModule.showVerticalHalfWebview(value);
	    //   } else {
	    //     KrakenNav.navToUri(value); // 优酷的scheme或者http地址
	    //   }
	    // } else

	    if (/^hollywood/.test(value)) {
	      // 好莱坞提供的跳转类型，通过url支持各种跳转类型
	      var questionMarkPosition = jumpUrl.indexOf('?') !== -1 ? jumpUrl.indexOf('?') : jumpUrl.length;
	      var action = jumpUrl.substring(12, questionMarkPosition);
	      if (action === 'scrollToModule') {
	        var _parseUrlParam = parseUrlParam(jumpUrl),
	            moduleName = _parseUrlParam.moduleName;
	        // 获取沉浸式导航高度


	        var topBarHeight = _pageStorage2.default.getItem('topBarHeight') || 0;
	        // 滚动偏移量，减去沉浸式导航高度，向上偏移时weex下为负数，H5下为正数，值为750宽度下的大小

	        _YoukuEvent2.default.fire('mainViewScrollToModule', { moduleName: moduleName, offset: -topBarHeight });
	      } else if (action === 'closePage') {
	        (0, _closePage2.default)();
	      } else if (action === 'sharePage') {
	        _YoukuEvent2.default.fire('doPageShare');
	      } else if (action === 'showCommonDialog') {
	        var _parseUrlParam2 = parseUrlParam(jumpUrl),
	            _moduleName = _parseUrlParam2.moduleName;

	        _YoukuEvent2.default.fire('showCommonDialog', { moduleName: _moduleName });
	      } else if (action === 'hideCommonDialog') {
	        var _parseUrlParam3 = parseUrlParam(jumpUrl),
	            _moduleName2 = _parseUrlParam3.moduleName;

	        _YoukuEvent2.default.fire('hideCommonDialog', { moduleName: _moduleName2 });
	      }
	    } else if (/^tbopen/.test(value)) {
	      // 淘宝open的url
	      (0, _isAppInstalled2.default)({
	        ios: 'taobao://',
	        android: 'com.taobao.taobao'
	      }).then(function (result) {
	        if (result === 'INSTALLED') {
	          _krakenNav2.default.navToUri(value); // 如果已经安装，直接用scheme打开
	        } else {
	          // 否则解析出tbopen里的h5Url并跳转
	          var urlParams = parseUrlParam(jumpUrl);
	          var h5Url = urlParams.h5Url;

	          lastJumpTime = 0;
	          _krakenNav2.default.navToUri(decodeURIComponent(h5Url));
	        }
	      }).catch(function () {});
	    } else {
	      _krakenNav2.default.navToUri(value); // 优酷的scheme或者http地址
	    }
	  }

	  if (jumpType === 'video' && videoId) {
	    _krakenNav2.default.navToUri('youku://play?source=hlw_' + spm + '&vid=' + videoId);
	  }

	  if (jumpType === 'show' && showId) {
	    _krakenNav2.default.navToUri('youku://play?source=hlw_' + spm + '&showid=' + showId);
	  }

	  if (jumpType === 'playlist' && videoId && playlistId) {
	    _krakenNav2.default.navToUri('youku://play?source=hlw_' + spm + '&id=' + playlistId);
	  }
	}

	exports.default = jumpTo;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = openInYouku;

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _webJumpTo = __webpack_require__(212);

	var _webJumpTo2 = _interopRequireDefault(_webJumpTo);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function openInYouku(url) {
	  if (_universalEnv.isWeex || _universalEnv.isKraken || _browser2.default.isYouku) {
	    return;
	  }
	  _webJumpTo2.default.jumpTo({
	    jumpType: 'url',
	    jumpUrl: url || window.location.href,
	    posId: 'auto.call',
	    posText: '自动.唤端',
	    callType: 2
	  }, true);
	}
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _loadResource = __webpack_require__(186);

	var _loadResource2 = _interopRequireDefault(_loadResource);

	var _getBuName = __webpack_require__(181);

	var _getBuName2 = _interopRequireDefault(_getBuName);

	var _universalEnv = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 通用分享面板
	function shareWithParams(params, callback) {
	  try {
	    _windvane2.default && _windvane2.default.call('WVBehavioursBridge', 'showShareView', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	// 调用直接分享接口
	function shareOpenPlatformWithParams(params, callback) {
	  try {
	    _windvane2.default && _windvane2.default.call('WVBehavioursBridge', 'shareSendContent', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	// 获取outputType支持的对应渠道接口
	function getSharePlatformListIds(params, callback) {
	  try {
	    _windvane2.default && _windvane2.default.call('WVBehavioursBridge', 'shareSupportedOpenPlatformIds', params, function (e) {
	      callback && callback(e);
	    }, function (e) {
	      callback && callback(e);
	    });
	  } catch (error) {}
	}

	function setPageShare(params) {
	  if (_universalEnv.isWeex || _universalEnv.isKraken || _browser2.default.isYouku) {
	    _windvane2.default && _windvane2.default.call('DYKBaseJSBridge', 'passShareInfoToNative', params, function () {}, function (e) {
	      console.log(JSON.stringify(e));
	    });
	  } else {
	    var config = {
	      title: params.titleText || document.title || '优酷-这世界很酷',
	      timelineTitle: params.titleText || document.title || '优酷-这世界很酷',
	      desc: params.descText || '优酷-这世界很酷',
	      link: params.url || window.location.href || '',
	      shareImage: params.thumbnailUrl || 'https://gw.alicdn.com/tfs/TB1HtifqAPoK1RjSZKbXXX1IXXa-200-200.png'
	    };
	    var buName = (0, _getBuName2.default)();
	    // 微信内只有优酷页面初始化SDK，防止和其他BU域名冲突
	    if (_browser2.default.isWechat && buName === 'youku') {
	      _loadResource2.default.loadScript('//res.wx.qq.com/open/js/jweixin-1.6.0.js').then(function () {
	        return _loadResource2.default.loadScript('//g.alicdn.com/ku/lib-share/0.0.11/index.js');
	      }).then(function () {
	        window.shareH5 && window.shareH5(config);
	      });
	    }
	    if (_browser2.default.isDingding) {
	      _loadResource2.default.loadScript('//g.alicdn.com/dingding/open-develop/1.6.9/dingtalk.js').then(function () {
	        return _loadResource2.default.loadScript('//g.alicdn.com/ku/lib-share/0.0.11/index.js');
	      }).then(function () {
	        window.shareH5 && window.shareH5(config);
	      });
	    }
	  }
	}

	exports.default = {
	  setPageShare: setPageShare,
	  shareWithParams: shareWithParams,
	  shareOpenPlatformWithParams: shareOpenPlatformWithParams,
	  getSharePlatformListIds: getSharePlatformListIds
	};
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _regenerator = __webpack_require__(78);

	var _regenerator2 = _interopRequireDefault(_regenerator);

	var getUser = function () {
	  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(callback) {
	    var ret, res;
	    return _regenerator2.default.wrap(function (_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            if (!_universalEnv.isWeex) {
	              _context.next = 4;
	              break;
	            }

	            YoukuUser && YoukuUser.getUser(function (data) {
	              callback && callback(data);
	            });
	            _context.next = 13;
	            break;

	          case 4:
	            if (!_universalEnv.isKraken) {
	              _context.next = 12;
	              break;
	            }

	            _context.next = 7;
	            return kraken.methodChannel.invokeMethod('YoukuUser', 'getUser');

	          case 7:
	            ret = _context.sent;
	            res = typeof ret === 'string' ? JSON.parse(ret) : ret;

	            callback && callback(res);
	            _context.next = 13;
	            break;

	          case 12:
	            if (_browser2.default.isYouku) {
	              // 站内windvane
	              _windvane2.default && _windvane2.default.call('DYKUserJSBridge', 'getUserInfo', {
	                from: 'hollywood-mods'
	              }, function (e) {
	                if (typeof e === 'string') {
	                  try {
	                    e = JSON.parse(e);
	                  } catch (e) {}
	                }
	                if (!e.ytid && !e.uid) {
	                  getUserMtop(callback);
	                } else {
	                  // 参数需要转换下
	                  var data = Object.assign({}, e, {
	                    isLogined: e.login, // 是否已登录
	                    userId: e.ytid, // 登录后用户的UID
	                    ytid: e.ytid, // 用户唯一标识
	                    isVip: e.isVip, // 是否vip
	                    userName: e.username, // 该字段废弃
	                    nickName: e.nickname, // 用户昵称
	                    userIcon: e.avatar, // 用户头像url
	                    ouid: '',
	                    accessToken: '',
	                    vipGrade: '',
	                    userNumberId: e.ytid
	                  });
	                  callback && callback(data);
	                }
	              }, function () {
	                getUserMtop(callback);
	              });
	            } else {
	              getUserMtop(callback);
	            }

	          case 13:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, this);
	  }));

	  return function () {
	    return _ref.apply(this, arguments);
	  };
	}();

	var doLogin = function () {
	  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	    var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hollywood-mods';
	    var params;
	    return _regenerator2.default.wrap(function (_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            if (!_universalEnv.isWeex) {
	              _context2.next = 4;
	              break;
	            }

	            // 大作业登录bug ios换成windvane方式
	            if (_pageInfo.isInChannel && _pageInfo.isIOS) {
	              _windvane2.default && _windvane2.default.call('WVYoukuAccountJSBridge', 'pullLoginDialog', { from: from }, function () {}, function () {});
	            } else {
	              try {
	                YoukuUser && YoukuUser.pullLoginDialog(from);
	              } catch (e) {
	                YoukuUser && YoukuUser.login(from);
	              }
	            }
	            _context2.next = 17;
	            break;

	          case 4:
	            if (!_universalEnv.isKraken) {
	              _context2.next = 16;
	              break;
	            }

	            _context2.prev = 5;
	            _context2.next = 8;
	            return kraken.methodChannel.invokeMethod('YoukuUser', 'pullLoginDialog', from);

	          case 8:
	            _context2.next = 14;
	            break;

	          case 10:
	            _context2.prev = 10;
	            _context2.t0 = _context2['catch'](5);
	            _context2.next = 14;
	            return kraken.methodChannel.invokeMethod('YoukuUser', 'login');

	          case 14:
	            _context2.next = 17;
	            break;

	          case 16:
	            if (_browser2.default.isYouku) {
	              params = {
	                link: window.location.href,
	                from: from
	              };

	              _windvane2.default && _windvane2.default.call('WVLoginJSBridge', 'showLoginView', params, function () {
	                if (_browser2.default.isAndroid) {
	                  location.reload();
	                }
	              }, function () {});
	            } else {
	              if (_browser2.default.isAlipay) {
	                (0, _loadResource.loadScript)('//appx/web-view.min.js').then(function () {
	                  my.getEnv(function (res) {
	                    if (res.miniprogram) {
	                      my.onMessage = function (e) {
	                        //e {'isAppxLogin': 'true'}
	                        if (e.isAppxLogin) {
	                          _YoukuEvent2.default.fire('userLogin', true);
	                        }
	                      };
	                      // true
	                      //H5传递信息给小程序
	                      my.postMessage({ isNeedAppxLogin: true });
	                    } else {
	                      doH5Login();
	                    }
	                  });
	                }).catch(function (err) {
	                  // js加载失败降级到H5登录
	                  doH5Login();
	                  console.error('appx/web-view.min.js加载失败', err);
	                });
	              } else {
	                doH5Login();
	              }
	            }

	          case 17:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, this, [[5, 10]]);
	  }));

	  return function () {
	    return _ref2.apply(this, arguments);
	  };
	}();

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	var _browser = __webpack_require__(169);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(11);

	var _requestMtop = __webpack_require__(175);

	var _requestMtop2 = _interopRequireDefault(_requestMtop);

	var _loadResource = __webpack_require__(186);

	var _YoukuEvent = __webpack_require__(162);

	var _YoukuEvent2 = _interopRequireDefault(_YoukuEvent);

	var _pageInfo = __webpack_require__(204);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var YoukuUser = null;
	try {
	  YoukuUser = __webpack_require__(126);
	} catch (e) {}

	function getUserMtop(callback) {
	  // mtop接口
	  (0, _requestMtop2.default)({
	    api: 'mtop.youku.hollywood.commonPlatform.userInfo.get',
	    valueType: 'original'
	  }).then(function (e) {
	    if (e.ret && e.ret[0] === 'SUCCESS::调用成功' && e.data && e.data.data) {
	      var data = e.data.data;
	      var _data$ytid = data.ytid,
	          ytid = _data$ytid === undefined ? 0 : _data$ytid,
	          isLogined = data.isLogined,
	          _data$nickName = data.nickName,
	          nickName = _data$nickName === undefined ? '' : _data$nickName,
	          _data$userName = data.userName,
	          userName = _data$userName === undefined ? '' : _data$userName,
	          userImg = data.userImg,
	          isVip = data.isVip,
	          vipGrade = data.vipGrade; // ytid

	      callback && callback({
	        isLogined: isLogined,
	        userId: ytid,
	        ytid: ytid,
	        userNumberId: ytid,
	        nickName: nickName,
	        userNick: userName,
	        userIcon: userImg,
	        isVip: isVip,
	        vipGrade: vipGrade
	      });
	    } else {
	      callback && callback({
	        isLogined: false
	      });
	    }
	  }).catch(function () {
	    callback && callback({
	      isLogined: false
	    });
	  });
	}

	function doH5Login() {
	  var url = encodeURIComponent(location.href);
	  window.location.href = 'https://account.youku.com/?callback=' + url;
	}

	exports.default = {
	  getUser: getUser,
	  doLogin: doLogin,
	  login: doLogin
	};
	module.exports = exports['default'];

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _windvane = __webpack_require__(188);

	var _windvane2 = _interopRequireDefault(_windvane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 检查是否绑定淘宝
	function queryBindingStatus() {
	  return new Promise(function (resolve, reject) {
	    try {
	      _windvane2.default.call('WVTaobaoYoukuAccountJSBridge', 'queryBindingStatus', {}, function (e) {
	        console.log('queryBindingStatus success: ' + JSON.stringify(e));
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        if (e.status === 'success' && e.data) {
	          // 返回是否绑定
	          resolve(!!e.data.bound);
	        } else {
	          reject();
	        }
	      }, function (e) {
	        console.log('queryBindingStatus error: ' + JSON.stringify(e));
	        reject();
	      });
	    } catch (error) {
	      reject();
	    }
	  });
	}

	// 唤起绑定淘宝账户流程
	// 参考文档：https://yuque.antfin-inc.com/hollywood/yyzyzc/emka2v
	function bindTaobao() {
	  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hollywood-mods';
	  var h5Only = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

	  return new Promise(function (resolve, reject) {
	    try {
	      // 该接口weex下不管成功或失败都会走到第一个callback
	      // 该接口H5下成功走第一个callback，失败走第二个callback
	      // 成功为绑定且登录淘宝成功，失败为绑定淘宝成功登录失败（异常case，很少见）、绑定失败
	      _windvane2.default.call('aluUccJSBridge', 'uccTrustLogin', {
	        site: 'taobao', // 绑淘宝写死taobao
	        scene: source, // 使用与login from相同的参数值 eg.2019_shouye_hongbao
	        h5Only: h5Only // 1 - 不拉native授权 ,0 - 拉native授权(0923不支持) 除猫晚外其他场景均为0
	      }, function (e) {
	        console.log('bindTaobao success: ' + JSON.stringify(e));
	        if (e && typeof e === 'string') {
	          try {
	            e = JSON.parse(e);
	          } catch (error) {}
	        }
	        if (e && e.ret && e.ret.indexOf('HY_SUCCESS') > -1) {
	          // 绑定成功
	          resolve();
	        } else {
	          // 绑定失败
	          reject();
	        }
	      }, function (e) {
	        // 绑定出错
	        console.log('bindTaobao error: ' + JSON.stringify(e));
	        reject();
	      });
	    } catch (e) {
	      reject();
	    }
	  });
	}

	exports.default = { queryBindingStatus: queryBindingStatus, bindTaobao: bindTaobao };
	module.exports = exports['default'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/node_modules/_@ali_rax-img@3.0.5@@ali/rax-img/src/picture.weex.js';

	var _rax = __webpack_require__(2);

	var _raxImage = __webpack_require__(19);

	var _raxImage2 = _interopRequireDefault(_raxImage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 因为rax-picture 1.x版本在weex下存在切换uri后图片不变的bug，但是2.0又没有cmd包，所以只能自己打包
	// 参考：http://gitlab.alibaba-inc.com/rax-pkg/rax-picture/blob/master/src/picture.weex.js
	function Picture(props, ref) {
	  var children = props.children,
	      _props$style = props.style,
	      style = _props$style === undefined ? {} : _props$style,
	      _props$source = props.source,
	      source = _props$source === undefined ? {} : _props$source,
	      resizeMode = props.resizeMode,
	      width = props.width,
	      height = props.height,
	      defaultHeight = props.defaultHeight;

	  var styleWidth = style.width; // style width of picture
	  var styleHeight = style.height; // style width of picture

	  // according to the original height and width of the picture
	  if (!styleHeight && styleWidth && width && height) {
	    var pScaling = width / parseInt(styleWidth, 10);
	    styleHeight = parseInt(height / pScaling, 10);
	  }

	  if (!styleHeight) {
	    styleHeight = defaultHeight;

	    if (!resizeMode) {
	      // ensure that the picture can be displayed
	      resizeMode = 'contain';
	    }
	  }

	  var newStyle = Object.assign({ height: styleHeight }, style);

	  if (resizeMode) {
	    newStyle.resizeMode = resizeMode;
	  }

	  return (0, _rax.createElement)(
	    _raxImage2.default,
	    _extends({ ref: ref }, this.props, { source: source, style: newStyle, __source: {
	        fileName: _jsxFileName,
	        lineNumber: 41
	      }
	    }),
	    children
	  );
	}

	Picture = (0, _rax.forwardRef)(Picture);

	exports.default = Picture;
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	(function () {

	  var buf,
	      bufIdx = 0,
	      hexBytes = [],
	      i;

	  // Pre-calculate toString(16) for speed
	  for (i = 0; i < 256; i++) {
	    hexBytes[i] = (i + 0x100).toString(16).substr(1);
	  }

	  // Buffer random numbers for speed
	  // Reduce memory usage by decreasing this number (min 16)
	  // or improve speed by increasing this number (try 16384)
	  uuid.BUFFER_SIZE = 4096;

	  // Binary uuids
	  uuid.bin = uuidBin;

	  // Clear buffer
	  uuid.clearBuffer = function () {
	    buf = null;
	    bufIdx = 0;
	  };

	  // Test for uuid
	  uuid.test = function (uuid) {
	    if (typeof uuid === 'string') {
	      return (/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid)
	      );
	    }
	    return false;
	  };

	  // Node & Browser support
	  var crypt0;
	  if (typeof crypto !== 'undefined') {
	    crypt0 = crypto;
	  } else if (typeof window !== 'undefined' && typeof window.msCrypto !== 'undefined') {
	    crypt0 = window.msCrypto; // IE11
	  }

	  if (true) {
	    crypt0 = crypt0 || __webpack_require__(221);
	    module.exports = uuid;
	  } else if (typeof window !== 'undefined') {
	    window.uuid = uuid;
	  }

	  // Use best available PRNG
	  // Also expose this so you can override it.
	  uuid.randomBytes = function () {
	    if (crypt0) {
	      if (crypt0.randomBytes) {
	        return crypt0.randomBytes;
	      }
	      if (crypt0.getRandomValues) {
	        if (typeof Uint8Array.prototype.slice !== 'function') {
	          return function (n) {
	            var bytes = new Uint8Array(n);
	            crypt0.getRandomValues(bytes);
	            return Array.from(bytes);
	          };
	        }
	        return function (n) {
	          var bytes = new Uint8Array(n);
	          crypt0.getRandomValues(bytes);
	          return bytes;
	        };
	      }
	    }
	    return function (n) {
	      var i,
	          r = [];
	      for (i = 0; i < n; i++) {
	        r.push(Math.floor(Math.random() * 256));
	      }
	      return r;
	    };
	  }();

	  // Buffer some random bytes for speed
	  function randomBytesBuffered(n) {
	    if (!buf || bufIdx + n > uuid.BUFFER_SIZE) {
	      bufIdx = 0;
	      buf = uuid.randomBytes(uuid.BUFFER_SIZE);
	    }
	    return buf.slice(bufIdx, bufIdx += n);
	  }

	  // uuid.bin
	  function uuidBin() {
	    var b = randomBytesBuffered(16);
	    b[6] = b[6] & 0x0f | 0x40;
	    b[8] = b[8] & 0x3f | 0x80;
	    return b;
	  }

	  // String UUIDv4 (Random)
	  function uuid() {
	    var b = uuidBin();
	    return hexBytes[b[0]] + hexBytes[b[1]] + hexBytes[b[2]] + hexBytes[b[3]] + '-' + hexBytes[b[4]] + hexBytes[b[5]] + '-' + hexBytes[b[6]] + hexBytes[b[7]] + '-' + hexBytes[b[8]] + hexBytes[b[9]] + '-' + hexBytes[b[10]] + hexBytes[b[11]] + hexBytes[b[12]] + hexBytes[b[13]] + hexBytes[b[14]] + hexBytes[b[15]];
	  }
	})();

/***/ },
/* 221 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx createElement */


	var ErrorBoundary = function (_Component) {
	  _inherits(ErrorBoundary, _Component);

	  function ErrorBoundary(props) {
	    _classCallCheck(this, ErrorBoundary);

	    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

	    _this.state = { hasError: false };
	    return _this;
	  }

	  // 子组件发生错误时触发


	  _createClass(ErrorBoundary, [{
	    key: 'componentDidCatch',
	    value: function componentDidCatch(error) {
	      var _props = this.props,
	          moduleIndex = _props.moduleIndex,
	          moduleKey = _props.moduleKey,
	          spmc = _props.spmc,
	          spmcText = _props.spmcText,
	          dataId = _props.dataId,
	          descm = _props.descm,
	          data = _props.data;
	      // Display fallback UI

	      this.setState({ hasError: true });
	      // You can also log the error to an error reporting service
	      console.error(spmcText + ' (' + moduleKey + ') \u51FA\u9519!!!', this.props, error);
	      console.info({
	        biz_type: 'hlw-pi-error',
	        client_code: -8005,
	        Error: error,
	        client_msg: {
	          msg: '页面模块渲染出错',
	          err: error,
	          props: {
	            moduleIndex: moduleIndex,
	            moduleKey: moduleKey,
	            spmc: spmc,
	            spmcText: spmcText,
	            dataId: dataId,
	            descm: descm
	          }
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.hasError) {
	        return null;
	      }
	      return this.props.children;
	    }
	  }]);

	  return ErrorBoundary;
	}(_rax.Component);

	exports.default = ErrorBoundary;
	module.exports = exports['default'];

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleConfig;

	var _universalEnv = __webpack_require__(11);

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _pageFrameConfig = __webpack_require__(224);

	var _weexModules = __webpack_require__(227);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var urlSearchObj = _raxBase2.default.urlSearchObj;
	function handleConfig(config, base) {
	  var _config$themeConfig = config.themeConfig,
	      themeConfig = _config$themeConfig === undefined ? {} : _config$themeConfig,
	      _config$outsideConfig = config.outsideConfig,
	      outsideConfig = _config$outsideConfig === undefined ? {} : _config$outsideConfig;

	  // 处理已下线

	  var isTimingOffline = themeConfig.isTimingOffline,
	      offlineTime = themeConfig.offlineTime,
	      offlineUrl = themeConfig.offlineUrl;

	  var isOffline = false; // 页面是否已下线
	  var jumpUrl = ''; // 下线跳转链接
	  // 如果页面开启定时下线
	  if (isTimingOffline === true) {
	    isOffline = offlineTime && offlineTime < Date.now() && !!offlineUrl;
	    jumpUrl = offlineUrl;
	  } else if (isTimingOffline === undefined) {
	    // 兼容旧页面
	    isOffline = !base.longtermOnline && base.offlineTime < Date.now() && !!base.offlineUrl;
	    jumpUrl = base.offlineUrl;
	  }
	  if (isOffline) {
	    if (_universalEnv.isWeex || _universalEnv.isKraken) {
	      if (_raxBase2.default.closePage) {
	        _raxBase2.default.closePage();
	      }
	      _raxBase2.default.jumpTo({
	        jumpType: 'url',
	        jumpUrl: jumpUrl
	      });
	    } else {
	      window.location.replace(jumpUrl);
	    }
	    return;
	  }

	  // TODO 设置Kraken页面标题
	  // 设置页面标题
	  if (_universalEnv.isWeb && !_universalEnv.isKraken) {
	    document.title = themeConfig.pageTitle || '';
	  }

	  if (_universalEnv.isWeex && _pageFrameConfig.shouldSetPageTitle) {
	    if (_weexModules.navigationBar && _weexModules.navigationBar.setTitle) {
	      _weexModules.navigationBar.setTitle({
	        title: themeConfig.pageTitle || ''
	      }, function () {}, function () {});
	    }

	    if (_weexModules.pandora && _weexModules.pandora.setTitle) {
	      _weexModules.pandora.setTitle({ title: themeConfig.pageTitle || '' });
	    }
	  }

	  // 站外H5的一些处理
	  if (_universalEnv.isWeb && !_raxBase2.default.isYouku) {
	    // 站外H5用的渠道list
	    var referPubArrAll = [];
	    referPubArrAll = referPubArrAll.concat(outsideConfig.referPubArr || []);
	    window.referPubLoadedCallback = function (arr) {
	      referPubArrAll = referPubArrAll.concat(arr);
	    };
	    var refer = urlSearchObj.refer;

	    var setDownloadUrl = function () {
	      var match = referPubArrAll.filter(function (v) {
	        return v.refer === refer;
	      })[0];
	      if (match && _raxBase2.default.setAfterJumpDownloadUrl) {
	        _raxBase2.default.setAfterJumpDownloadUrl('https://youku-cpms-cdn.youku.com/apk/' + match.pub + '/latest.apk');
	      }
	    };
	    if (refer) {
	      _raxBase2.default.loadScript('//youku-cpms-cdn.youku.com/hollywood/' + base.actpage + '.js').then(setDownloadUrl).catch(setDownloadUrl);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRootViewLayout = exports.setPageHeight = undefined;

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _universalEnv = __webpack_require__(11);

	var _getPageData = __webpack_require__(225);

	var _getPageData2 = _interopRequireDefault(_getPageData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Full_Width = 750; /* eslint-disable import/no-mutable-exports */
	// 有关页面结构的一些逻辑处理
	var weexConfig = _raxBase2.default.weexConfig,
	    isIOS = _raxBase2.default.isIOS,
	    isAndroid = _raxBase2.default.isAndroid,
	    urlSearchObj = _raxBase2.default.urlSearchObj;

	var defaultEnv = {
	  deviceWidth: 0,
	  deviceHeight: 0,
	  utdid: 123456789,
	  appVersion: '7.3.0',
	  deviceModel: ''
	};

	var _ref = weexConfig && weexConfig.env || defaultEnv,
	    deviceWidth = _ref.deviceWidth,
	    deviceHeight = _ref.deviceHeight,
	    appVersion = _ref.appVersion;

	var pageHeight = _universalEnv.isWeex ? Full_Width / deviceWidth * deviceHeight : document.documentElement.clientHeight / document.documentElement.clientWidth * Full_Width;

	var pageData = (0, _getPageData2.default)();
	var config = pageData.page.config;
	var themeConfig = config.themeConfig;

	var devConfig = themeConfig.devConfig || {};
	var rootHeight = urlSearchObj.rootHeight,
	    flexRootWidth = urlSearchObj.flexRootWidth;

	// 设置页面高度

	function setPageHeight(height) {
	  pageHeight = height;
	}

	// 获取最外层容器样式
	function getRootViewLayout() {
	  // 设置主容器的布局，主要涉及到大作页容器的上下tab高度的处理
	  var rootViewLayout = {
	    flex: 1,
	    overflowX: 'hidden',
	    width: Full_Width
	  };

	  rootViewLayout = {
	    overflow: 'hidden',
	    width: Full_Width,
	    height: pageHeight
	  };
	  // 通过页面URL里的参数或者通过页面开发配置来强制适配根View的宽高
	  // 适配某些特殊场景：万花筒 或者 全屏播放器的半屏容器
	  if (devConfig.setRootHeight && devConfig.rootHeight > 0) {
	    rootHeight = devConfig.rootHeight;
	  }
	  if (rootHeight) {
	    rootViewLayout = {
	      width: Full_Width,
	      height: +rootHeight
	    };
	  }
	  if (devConfig.flexRootWidth) {
	    flexRootWidth = 'true';
	  }
	  if (flexRootWidth === 'true') {
	    delete rootViewLayout.width;
	  }
	  return rootViewLayout;
	}

	exports.setPageHeight = setPageHeight;
	exports.getRootViewLayout = getRootViewLayout;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = getPageData;

	var _use = __webpack_require__(226);

	var _use2 = _interopRequireDefault(_use);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 从jsbundle或者页面静态信息里面获取@page/data静态数据
	var pageData = null;
	function getPageData() {
	  if (!pageData) {
	    try {
	      pageData = (0, _use2.default)('@page/data');
	    } catch (e) {
	      console.error('require "@page/data" failed: ', e);
	      pageData = {
	        page: {},
	        modules: []
	      };
	    } finally {
	      if (_typeof(pageData.page) !== 'object' || pageData.page === null) {
	        console.warn('"@page/data" should have an Object member named "page"');
	        pageData.page = {};
	      }
	    }
	  }
	  return pageData;
	}
	module.exports = exports['default'];

/***/ },
/* 226 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (moduleName) {
	  try {
	    // eslint-disable-next-line no-eval
	    return eval("require('" + moduleName + "')");
	  } catch (e) {
	    return null;
	  }
	};

	module.exports = exports["default"];

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var navigationBar = null;
	try {
	  exports.navigationBar = navigationBar = __webpack_require__(228);
	} catch (e) {
	  console.error('navigationBar not required!');
	}

	var navigator = null;
	try {
	  exports.navigator = navigator = __webpack_require__(120);
	} catch (e) {
	  console.error('navigator not required!');
	}

	var pandora = null;
	try {
	  exports.pandora = pandora = __webpack_require__(229);
	} catch (e) {
	  console.error('pandora not required!');
	}

	var KSEvent = null;
	try {
	  exports.KSEvent = KSEvent = __webpack_require__(230);
	} catch (e) {
	  console.error('KSEvent not required!');
	}

	var YoukuShare = null;
	try {
	  exports.YoukuShare = YoukuShare = __webpack_require__(231);
	} catch (e) {
	  console.error('YoukuShare not required!');
	}

	var YoukuPage = null;
	try {
	  exports.YoukuPage = YoukuPage = __webpack_require__(95);
	} catch (e) {
	  console.error('YoukuPage not required!');
	}

	var PopLayerTrackingEventModule = null;
	try {
	  exports.PopLayerTrackingEventModule = PopLayerTrackingEventModule = __webpack_require__(232);
	} catch (e) {
	  console.error('PopLayerTrackingEventModule not required!');
	}

	var dom = null;
	try {
	  exports.dom = dom = __webpack_require__(100);
	} catch (e) {
	  console.error('dom not required!');
	}

	exports.navigationBar = navigationBar;
	exports.navigator = navigator;
	exports.pandora = pandora;
	exports.KSEvent = KSEvent;
	exports.YoukuShare = YoukuShare;
	exports.YoukuPage = YoukuPage;
	exports.PopLayerTrackingEventModule = PopLayerTrackingEventModule;
	exports.dom = dom;

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/navigationBar");

/***/ },
/* 229 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/pandora");

/***/ },
/* 230 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/KSEvent");

/***/ },
/* 231 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/YoukuShare");

/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = require("@weex-module/PopLayerTrackingEventModule");

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getPageLayout;

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _filterStaticData = __webpack_require__(234);

	var _filterStaticData2 = _interopRequireDefault(_filterStaticData);

	var _getEnvironmentTypeFromUrl = __webpack_require__(238);

	var _getEnvironmentTypeFromUrl2 = _interopRequireDefault(_getEnvironmentTypeFromUrl);

	var _getDeviceTypeFromUrl = __webpack_require__(236);

	var _getDeviceTypeFromUrl2 = _interopRequireDefault(_getDeviceTypeFromUrl);

	var _parseJson = __webpack_require__(237);

	var _parseJson2 = _interopRequireDefault(_parseJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isYouku = _raxBase2.default.isYouku,
	    isIOS = _raxBase2.default.isIOS,
	    urlSearchObj = _raxBase2.default.urlSearchObj; // 通过接口或者cdn打底数据获取页面layout

	function getPageLayout(base) {
	  var actpage = base.actpage,
	      staticData = base.staticData;


	  if (window.useStaticData) {
	    // 如果是静态页面，直接从Base中取页面数据，不请求Mtop
	    try {
	      var layout = getBasePageLayout(staticData);
	      return layout;
	    } catch (error) {
	      // 不使用useStaticData，重新请求
	      window.useStaticData = false;
	      return getPageLayout(base);
	    }
	  }
	  return new Promise(function (resolve) {
	    // 以url中的参数优先，用于方便debug
	    if (window.useCdnData) {
	      getCdnPageLayout(actpage).then(function (layout) {
	        return resolve(layout);
	      });
	    } else if (window.useMtopData) {
	      getMtopPageLayout(actpage).then(function (layout) {
	        return resolve(layout);
	      });
	    } else {
	      getMtopPageLayout(actpage).then(function (layout) {
	        return resolve(layout);
	      }).catch(function () {
	        // Mtop接口请求失败，启用cdn容灾数据
	        getCdnPageLayout(actpage).then(function (layout) {
	          return resolve(layout);
	        });
	      });
	    }
	  });
	}

	// 请求返回的时间，如果为0，代表未返回
	var dataLoadedTime = 0;
	function getMtopPageLayout(actpage) {
	  return new Promise(function (resolve, reject) {
	    // 是否禁用Prefetch功能，Prefetch导致刷新页面后页面数据缓存问题，临时添加disablePrefetch=true参数禁用开关
	    var disablePrefetch = urlSearchObj.disablePrefetch === 'true';
	    // 如果未设置禁用Prefetch，才开启Prefetch
	    if (!disablePrefetch) {
	      var params = {
	        type: 'mtop',
	        param: {
	          mtopapi: 'mtop.youku.hollywood.api.page.get.v2',
	          version: '1.0',
	          url: window.location.href
	          // 'http://30.77.68.86:3333/demo/index.html?pageId=a8741ccfd9e8435bbd83af036f790c8d&refer=testRefer&from=testFrom'
	        }
	      };
	      _raxBase2.default.call && _raxBase2.default.call('PreloadWVPlugin', 'getPrefetchData', params, function (data) {
	        if (dataLoadedTime) {
	          var time = Date.now() - dataLoadedTime;
	          console.log('接口预请求.慢：' + time);
	          // 如果mtop请求快，预加载慢
	          _raxBase2.default.sendCustomEvent({
	            customId: 'preload.slow',
	            customText: '接口预请求.慢',
	            trackInfo: { time: time }
	          });
	          return;
	        }
	        try {
	          dataLoadedTime = Date.now();
	          var response = typeof data === 'string' ? (0, _parseJson2.default)(data, {}) : data;
	          response.data.abtest && _raxBase2.default.appendABUtParam && _raxBase2.default.appendABUtParam(response.data.abtest);
	          if (response.data.result && _raxBase2.default.isAndroid) {
	            resolve(response.data.result);
	            console.log('preload数据获取成功！');
	          } else {
	            dataLoadedTime = 0;
	          }
	        } catch (e) {
	          dataLoadedTime = 0;
	        }
	      }, function () {});
	    }

	    // 先获取系统信息再获取mtop接口数据
	    _raxBase2.default.getSystemInfo().then(function (systemInfo) {
	      // 获取systemInfo成功请求mtop接口
	      getMtopData(actpage, systemInfo).then(function (res) {
	        resolve(res);
	      }).catch(function () {
	        reject();
	      });
	    }).catch(function () {
	      // 获取systemInfo失败，也请求mtop接口
	      getMtopData(actpage).then(function (res) {
	        resolve(res);
	      }).catch(function () {
	        reject();
	      });
	    });
	  });
	}

	// 获取mtop接口数据，返回promise
	function getMtopData(actpage) {
	  var systemInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  return new Promise(function (resolve, reject) {
	    _raxBase2.default.requestMtop({
	      api: 'mtop.youku.hollywood.api.page.get.v2',
	      v: '1.0',
	      data: {
	        pageId: actpage,
	        isYouku: isYouku,
	        isIOS: isIOS,
	        refer: urlSearchObj.refer || '',
	        from: urlSearchObj.from || '',
	        debug: urlSearchObj.isDebug === 'true' ? 1 : 0,
	        environmentType: (0, _getEnvironmentTypeFromUrl2.default)(),
	        device: (0, _getDeviceTypeFromUrl2.default)(),
	        system_info: JSON.stringify(systemInfo)
	      },
	      dataType: 'json', // 方便跨域，必须是80端口
	      ecode: 0,
	      type: 'GET'
	    }).then(function (response) {
	      if (response && response.ret && response.ret[0] === 'SUCCESS::调用成功' && response.data) {
	        if (dataLoadedTime) {
	          // 如果预请求已返回
	          var time = Date.now() - dataLoadedTime;
	          console.log('接口预请求.快：' + time);
	          _raxBase2.default.sendCustomEvent({
	            customId: 'preload.fast',
	            customText: '接口预请求.快',
	            trackInfo: { time: time }
	          });
	          return;
	        }
	        dataLoadedTime = Date.now();
	        // 设置AB测试参数
	        response.data.abtest && _raxBase2.default.appendABUtParam && _raxBase2.default.appendABUtParam(response.data.abtest);
	        resolve(response.data.result);
	        try {
	          console.log('mtop数据获取成功！');
	        } catch (e) {}
	      } else {
	        reject();
	        try {
	          console.error('mtop接口请求错误：' + JSON.stringify(response));
	          console.info({
	            biz_type: 'hlw-pi-error',
	            client_code: -8001,
	            client_msg: {
	              msg: '页面mtop数据获取错误',
	              err: response
	            }
	          });
	        } catch (e) {}
	      }
	    }).catch(function (err) {
	      reject();
	      try {
	        console.error('mtop接口请求错误：' + JSON.stringify(err));
	        console.info({
	          biz_type: 'hlw-pi-error',
	          client_code: -8001,
	          client_msg: {
	            msg: '页面mtop数据获取错误',
	            err: err
	          }
	        });
	      } catch (e) {}
	    });
	  });
	}

	// 获取CDN页面数据（用于MTOP接口请求时候后容灾）
	function getCdnPageLayout(actpage) {
	  return new Promise(function (resolve) {
	    // 如果是预览页面，不获取CDN容灾数据
	    if ((0, _getEnvironmentTypeFromUrl2.default)() === 2) {
	      try {
	        console.error('预览页面没有CDN页面数据！');
	      } catch (error) {}
	      return resolve([]);
	    }
	    // 从cdn获取静态数据
	    fetch('https://cn-vmc-images.alicdn.com/hollywood/' + actpage + '.json', {
	      mode: 'cors',
	      dataType: 'json',
	      method: 'GET'
	    }).then(function (response) {
	      return response.json();
	    }).then(function (res) {
	      // 对数据进行策略过滤
	      var pageLayout = (0, _filterStaticData2.default)(res);
	      resolve(pageLayout);
	      try {
	        console.log('cdn数据获取成功！');
	      } catch (e) {}
	    }).catch(function (err) {
	      resolve([]);
	      try {
	        console.error('cdn数据获取错误：' + JSON.stringify(err));
	        console.info({
	          biz_type: 'hlw-pi-error',
	          client_code: -8002,
	          Error: err,
	          client_msg: {
	            msg: '页面cdn数据获取错误',
	            err: err
	          }
	        });
	      } catch (e) {}
	    });
	  });
	}

	// 获取Base静态数据（用于静态页面，减少MTOP接口QPS）
	function getBasePageLayout(data) {
	  // 获取Base中静态数据
	  try {
	    var staticData = typeof data === 'string' ? (0, _parseJson2.default)(data, {}) : data;
	    if (staticData && staticData.code === 0) {
	      console.log('base数据获取成功！');
	      var pageLayout = (0, _filterStaticData2.default)(staticData);
	      return pageLayout;
	    } else {
	      throw new Error('base数据获取错误');
	    }
	  } catch (error) {
	    console.info({
	      biz_type: 'hlw-pi-error',
	      client_code: -8003,
	      Error: error,
	      client_msg: {
	        msg: '页面base数据获取错误',
	        err: error
	      }
	    });
	    console.error('base数据获取错误！');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = filterStaticData;

	var _raxBase = __webpack_require__(159);

	var _raxBase2 = _interopRequireDefault(_raxBase);

	var _parseConfig = __webpack_require__(235);

	var _parseConfig2 = _interopRequireDefault(_parseConfig);

	var _getDeviceTypeFromUrl = __webpack_require__(236);

	var _getDeviceTypeFromUrl2 = _interopRequireDefault(_getDeviceTypeFromUrl);

	var _parseJson = __webpack_require__(237);

	var _parseJson2 = _interopRequireDefault(_parseJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // 通过接口或者cdn打底数据获取页面layout


	var isYouku = _raxBase2.default.isYouku,
	    isIOS = _raxBase2.default.isIOS,
	    urlSearchObj = _raxBase2.default.urlSearchObj;

	// 过滤页面数据

	function filterStaticData(staticData) {
	  var result = [];
	  var moduleList = staticData.moduleList || [];
	  // 添加布局信息
	  var layoutConfig = typeof staticData.layoutConfig === 'string' ? (0, _parseJson2.default)(staticData.layoutConfig, []) : staticData.layoutConfig || [];
	  for (var index = 0; index < moduleList.length; index++) {
	    var mod = moduleList[index];

	    var _mod$config = mod.config,
	        config = _mod$config === undefined ? [] : _mod$config,
	        _mod$data = mod.data,
	        data = _mod$data === undefined ? [] : _mod$data,
	        etc = _objectWithoutProperties(mod, ['config', 'data']);
	    // 兼容旧版策略数据结构，统一处理成新的数据结构包含deviceData


	    var configs = (0, _parseConfig2.default)(config).map(function (item, index) {
	      // 记录策略所在索引
	      return _extends({}, item, { configIndex: index });
	    });
	    // 获取有效策略
	    var validConfig = getValidConfig(configs);
	    if (validConfig) {
	      var configIndex = validConfig.configIndex;
	      var dataObj = data[configIndex] || {};
	      // 获取有效端数据
	      var validData = getValidData(validConfig, dataObj);
	      if (validData) {
	        result.push(_extends({}, etc, {
	          config: validConfig,
	          data: validData
	        }));
	      }
	    }
	  }
	  return {
	    layoutConfig: layoutConfig,
	    result: result
	  };
	}

	// 获取满足条件的第一个策略，没有则返回null
	function getValidConfig(config) {
	  var currentTime = new Date().getTime(); // 当前时间戳
	  var refer = urlSearchObj.refer || '';
	  var from = urlSearchObj.from || '';
	  var result = null;
	  if (config && Array.isArray(config) && config.length > 0) {
	    result = config.find(function (cfg) {
	      var deliveryRuleIds = cfg.deliveryRuleIds,
	          timing = cfg.timing,
	          startTime = cfg.startTime,
	          endTime = cfg.endTime,
	          filterReferOrFrom = cfg.filterReferOrFrom,
	          refers = cfg.refers,
	          froms = cfg.froms;
	      // 过滤万象圈投

	      if (deliveryRuleIds) {
	        return false;
	      }
	      // 过滤时间圈投
	      if (timing && startTime && endTime && (currentTime < startTime || currentTime > endTime)) {
	        return false;
	      }
	      // 过滤渠道定投
	      if (filterReferOrFrom) {
	        // refer和from都为空，则代表全部流量均不展示
	        if (refers === '' && froms === '') {
	          return false;
	        } else {
	          var referList = refers.split(',');
	          var fromList = froms.split(',');
	          var matchRefer = refer && referList.includes(refer); // 是否匹配refer
	          var matchFrom = from && fromList.includes(from); // 是否匹配from
	          if (!matchRefer && !matchFrom) {
	            return false;
	          }
	        }
	      }
	      // 剩下的都是满足条件的策略
	      return true;
	    });
	  }
	  return result ? result : null;
	}

	// 获取符合条件策略的端数据，没有则返回null
	function getValidData(validConfig, dataObj) {
	  var deviceData = validConfig.deviceData;

	  var validDeviceData = getValidDeviceData(deviceData);
	  if (validDeviceData) {
	    var type = validDeviceData.type;

	    return dataObj[type];
	  } else {
	    return null;
	  }
	}

	// 获取符合条件的端数据项，如果没有符合条件的端数据则返回null
	function getValidDeviceData() {
	  var deviceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  var deviceType = (0, _getDeviceTypeFromUrl2.default)();
	  // 默认是打底数据或者null
	  var validDeviceData = deviceData.find(function (item) {
	    return item.type === 'commonData' && item.visible;
	  }) || null;

	  // pc和tv无分端数据，只要匹配到端数据则使用，否则使用通用数据
	  if (deviceType === 'pc') {
	    // pc端 通用数据
	    var commonData = deviceData.find(function (item) {
	      return item.type === 'pcCommonData';
	    });
	    // 如果找到端数据并且可见则使用，否则使用打底数据
	    if (commonData) {
	      // 如果端数据不可见，则为null
	      validDeviceData = commonData.visible ? commonData : null;
	    }
	  }
	  // 处理同pc
	  if (deviceType === 'tv') {
	    //tv端 通用数据
	    var _commonData = deviceData.find(function (item) {
	      return item.type === 'tvCommonData';
	    });
	    // 如果找到端数据并且可见则使用，否则使用打底数据
	    if (_commonData) {
	      // 如果端数据不可见，则为null
	      validDeviceData = _commonData.visible ? _commonData : null;
	    }
	  }

	  if (deviceType === 'pad') {
	    // pad端 ios数据
	    var iosData = deviceData.find(function (item) {
	      return item.type === 'padIosData';
	    });
	    // pad端 通用数据
	    var _commonData2 = deviceData.find(function (item) {
	      return item.type === 'padCommonData';
	    });
	    // 如果有pad ios端数据并且是是站内ios，则使用pad ios端数据，否则使用pad通用数据
	    if (iosData && isYouku && isIOS) {
	      // 如果端数据不可见，则为null
	      validDeviceData = iosData.visible ? iosData : null;
	    } else if (_commonData2) {
	      // 如果端数据不可见，则为null
	      validDeviceData = _commonData2.visible ? _commonData2 : null;
	    }
	  }

	  // phone处理同pad
	  if (deviceType === 'phone') {
	    // phone端 ios数据
	    var _iosData = deviceData.find(function (item) {
	      return item.type === 'iosData';
	    });
	    // phone端 通用数据
	    var _commonData3 = deviceData.find(function (item) {
	      return item.type === 'commonData';
	    });
	    // 如果有phone ios端数据并且是是站内ios，则使用phone ios端数据，否则使用phone通用数据
	    if (_iosData && isYouku && isIOS) {
	      // 如果端数据不可见，则为null
	      validDeviceData = _iosData.visible ? _iosData : null;
	    } else if (_commonData3) {
	      // 如果端数据不可见，则为null
	      validDeviceData = _commonData3.visible ? _commonData3 : null;
	    }
	  }

	  return validDeviceData;
	}
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * 兼容旧config数据，将 distinguishIos commonIsVisiable iosIsVisiable 处理成 deviceData
	 * deviceData = [
		  {
		    type: "commonData",
		    visible: true
		  },
		  {
		    type: "iosData",
		    visible: false
		  }
		]
	 */
	function parseConfig() {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	  return config.map(function (item) {
	    if (!item.deviceData) {
	      var distinguishIos = item.distinguishIos,
	          commonIsVisiable = item.commonIsVisiable,
	          iosIsVisiable = item.iosIsVisiable;

	      var deviceData = [{
	        type: 'commonData', // 默认必有的字段
	        visible: commonIsVisiable !== false // 对应commonIsVisiable为true，默认为true
	      }];
	      if (distinguishIos) {
	        deviceData.push({
	          type: 'iosData', // 对应distinguishIos为true
	          visible: iosIsVisiable !== false // 对应iosIsVisiable为false
	        });
	      }
	      item.deviceData = deviceData;
	    }
	    return item;
	  });
	}

	exports.default = parseConfig;
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDeviceTypeFromUrl;
	/**
	 * 从URL获取设备类型
	 * 返回值为phone，pad，pc，tv
	 */
	function getDeviceTypeFromUrl() {
	  // 从pathname中判断
	  var url = window.location.pathname;
	  var deviceType = 'phone'; // 默认设备是phone，兼容其他url
	  if (url.indexOf('/m/') >= 0 || url.indexOf('/m_pre/') >= 0) {
	    deviceType = 'phone';
	  } else if (url.indexOf('/pad/') >= 0 || url.indexOf('/pad_pre/') >= 0) {
	    deviceType = 'pad';
	  } else if (url.indexOf('/pc/') >= 0 || url.indexOf('/pc_pre/') >= 0) {
	    deviceType = 'pc';
	  } else if (url.indexOf('/tv/') >= 0 || url.indexOf('/tv_pre/') >= 0) {
	    deviceType = 'tv';
	  }
	  return deviceType;
	}
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 用try/catch包裹的JSON.parse方法
	function parseJson(str) {
	  var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var obj = init;
	  if (typeof str === 'string' && str && str !== '') {
	    try {
	      obj = JSON.parse(str);
	    } catch (err) {
	      console.error('解析 json 字符串出错:', err);
	    }
	  }
	  return obj;
	}

	exports.default = parseJson;
	module.exports = exports['default'];

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getEnvironmentTypeFromUrl;
	/**
	 * 根据url判断当前环境类型
	 * 返回值：正式：1，预发：2
	 */
	function getEnvironmentTypeFromUrl() {
	  var url = location.pathname;
	  var env = 1; // 默认是正式环境
	  if (url.indexOf('/m_pre/') >= 0 || url.indexOf('/pad_pre/') >= 0 || url.indexOf('/pc_pre/') >= 0 || url.indexOf('/tv_pre/') >= 0) {
	    // 预发环境
	    env = 2;
	  }

	  return env;
	}
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = filterPageLayout;

	var _use = __webpack_require__(226);

	var _use2 = _interopRequireDefault(_use);

	var _getDeviceTypeFromUrl = __webpack_require__(236);

	var _getDeviceTypeFromUrl2 = _interopRequireDefault(_getDeviceTypeFromUrl);

	var _parseJson = __webpack_require__(237);

	var _parseJson2 = _interopRequireDefault(_parseJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Empty() {
	  return null;
	}

	function filterPageLayout() {
	  var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _res$result = res.result,
	      result = _res$result === undefined ? [] : _res$result,
	      _res$layoutConfig = res.layoutConfig,
	      layoutConfig = _res$layoutConfig === undefined ? [] : _res$layoutConfig;

	  var layoutMap = {};
	  // 布局信息数组转对象，方便按模块实例ID取值
	  layoutConfig.forEach(function (item) {
	    layoutMap[item.modInsId] = item;
	  });
	  if (result && result.length > 0) {
	    return result.map(function (value) {
	      // 由于mtop把json对象的值全转换成string类型了，所以数据需要已完成string的形式返回，前端parse。
	      // 可以用originaljsonp的方式，但是目前weex不支持，因此先使用该方案。
	      // 参考：https://www.atatech.org/articles/128159
	      var module = typeof value === 'string' ? (0, _parseJson2.default)(value, {}) : value;
	      var cmdKey = genCmdKey(module);
	      var layout = layoutMap[module.modInsId] || {};
	      var pos = layout.pos || {};
	      return _extends({}, module, {
	        pos: pos,
	        moduleClass: (0, _use2.default)(cmdKey) || Empty
	      });
	    })
	    // 服务端给的数据是无序的，需要处理下顺序
	    .sort(function (a, b) {
	      return a.order > b.order ? 1 : -1;
	    });
	  } else {
	    return [];
	  }
	}

	// 获取模块cmd包的key
	function genCmdKey(module) {
	  if (!module.group) {
	    module.group = module.key.indexOf('hlw-') === 0 ? 'hollywood-mod' : 'youku-mod';
	  }
	  var deviceType = (0, _getDeviceTypeFromUrl2.default)();
	  // phone的后缀是index，其他的后缀是设备名称
	  var suffix = deviceType === 'phone' ? 'index' : deviceType;
	  switch (module.group) {
	    case 'hollywood-mod':
	      return 'npm/@ali/' + module.key + '/' + suffix;
	    case 'youku-mod':
	      return 'upx/youku-mod/' + module.key + '/' + suffix;
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _scout_probe_kraken = __webpack_require__(241);

	var _scout_probe_kraken2 = _interopRequireDefault(_scout_probe_kraken);

	var _universalEnv = __webpack_require__(11);

	var _parseJson = __webpack_require__(237);

	var _parseJson2 = _interopRequireDefault(_parseJson);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 初始化探针
	var probeInit = function (config, base) {
	  try {
	    var actid = base.actid || '';
	    var globalConfig = (0, _parseJson2.default)(base.globalConfig, {});
	    var buName = globalConfig.buName || '';
	    var themeConfig = config.themeConfig || {};
	    var devConfig = themeConfig.devConfig || {};
	    var _devConfig$customProb = devConfig.customProbeParam,
	        customProbeParam = _devConfig$customProb === undefined ? false : _devConfig$customProb,
	        _devConfig$customSamp = devConfig.customSampleRate,
	        customSampleRate = _devConfig$customSamp === undefined ? 1 : _devConfig$customSamp,
	        _devConfig$customPage = devConfig.customPageBizType,
	        customPageBizType = _devConfig$customPage === undefined ? '' : _devConfig$customPage;
	    //  采样率默认为1

	    var sampleRate = 1;
	    // 自定义页面聚合标识，方便统计页面
	    var pageBizType = '';
	    if (customProbeParam) {
	      sampleRate = customSampleRate;
	      pageBizType = customPageBizType;
	    }
	    var pageType = actid;
	    // 标识页面所属BU
	    if (buName) {
	      pageType += '&' + buName;
	    }
	    // 标识页面所属业务
	    if (pageBizType) {
	      pageType += '&' + pageBizType;
	    }
	    // 标识是SSR页面
	    if (window.__USE_SSR__) {
	      pageType += '&USE_SSR';
	    }

	    // 初始化探针
	    // eslint-disable-next-line no-new
	    new _scout_probe_kraken2.default({
	      console: ['info'], // 托管console类型，用于上报
	      sampleRate: sampleRate, // 采样率，值区间：0~1
	      alarmExt: {
	        page_type: pageType
	      },
	      bu: 'youku',
	      code: 7001
	    });
	  } catch (error) {
	    console.error('初始化探针失败', error);
	  }
	}; /* eslint-disable no-underscore-dangle */


	if (_universalEnv.isKraken) {
	  document.addEventListener('KrakenJSEvaluateError', function (event) {
	    console.info({
	      biz_type: 'jsError', // 脚本错误
	      client_msg: {
	        message: event.detail
	      }
	    });
	  });
	}

	exports.default = probeInit;
	module.exports = exports['default'];

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _universalEnv = __webpack_require__(11);

	var _agent = __webpack_require__(242);

	var _agent2 = _interopRequireDefault(_agent);

	var _kit = __webpack_require__(243);

	var _kit2 = _interopRequireDefault(_kit);

	var _alarm_kraken = __webpack_require__(244);

	var _alarm_kraken2 = _interopRequireDefault(_alarm_kraken);

	var _config2 = __webpack_require__(246);

	var _config3 = _interopRequireDefault(_config2);

	var _xhr = __webpack_require__(255);

	var _xhr2 = _interopRequireDefault(_xhr);

	var _fetch = __webpack_require__(256);

	var _fetch2 = _interopRequireDefault(_fetch);

	var _loadTime = __webpack_require__(257);

	var _loadTime2 = _interopRequireDefault(_loadTime);

	var _fp = __webpack_require__(258);

	var _fp2 = _interopRequireDefault(_fp);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	var _getPageInfo = __webpack_require__(254);

	var _getPageInfo2 = _interopRequireDefault(_getPageInfo);

	var _es6Hack = __webpack_require__(259);

	var _es6Hack2 = _interopRequireDefault(_es6Hack);

	var _listen = __webpack_require__(260);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SDK = function () {
	  function SDK(_config) {
	    _classCallCheck(this, SDK);

	    try {
	      !window.__scout_probe_alarm__ && this.init(_config || {});
	    } catch (e) {
	      console.log("constructor catch");
	      console.log(e);
	    }
	  }

	  _createClass(SDK, [{
	    key: "init",
	    value: function init(_config) {
	      (0, _es6Hack2.default)();
	      var cfg = Object.assign(_config3.default.set, _config);
	      _config3.default.set.alarmHost = (_config.alarmHost || []).concat(_config3.default.base.alarmHost);
	      var is_ownHost = (0, _is_match2.default)(_getPageInfo2.default.page_url, "ownHost", true);
	      var sentType = (0, _alarm_kraken.getSentType)();
	      var sample = _getPageInfo2.default.sample;
	      cfg.sampleRate = sample && 1 || cfg.sampleRate;
	      if (!cfg.alarmEnable || !is_ownHost && !cfg.outEnable || _getPageInfo2.default.scout_disable || _getPageInfo2.default.dev || !!_getPageInfo2.default.port || sentType.api_type === "Mtop" && sentType.mtopInitCatch || cfg.sampleRate < Math.random()) {
	        return;
	      }
	      _config3.default.set.ignoreHost = (_config.ignoreHost || []).concat(_config3.default.base.ignoreHost);
	      _config3.default.set.ignorePath = (_config.ignorePath || []).concat(_config3.default.base.ignorePath);
	      _config3.default.set.jsonpHost = (_config.jsonpHost || []).concat(_config3.default.base.jsonpHost);
	      _config3.default.set.ignoreMtop = (_config.ignoreMtop || []).concat(_config3.default.base.ignoreMtop);
	      cfg.console.forEach(function (type) {
	        _agent2.default.console(_alarm_kraken2.default, type); //Override 实例化上报
	      });
	      window.__scout_probe_alarm__ = true;

	      _kit2.default.isArray(cfg.pathKeys) && cfg.pathKeys.length && (0, _getPageInfo.getSearchInfo)();

	      var alarmExt = _kit2.default.isPlainObject(cfg.alarmExt) ? cfg.alarmExt : {};
	      _config3.default.base.alarmExt.forEach(function (item) {
	        var is_page_type = item === "page_type";
	        is_page_type && _getPageInfo2.default.page_type && _config3.default.ext.pageTypes.push(_getPageInfo2.default.page_type);
	        is_page_type && alarmExt[item] && _config3.default.ext.pageTypes.push(alarmExt[item]);
	        var value = is_page_type ? _config3.default.ext.pageTypes.join("&") : alarmExt[item];
	        _config3.default.ext.alarm[item] = value || undefined;
	      });

	      _config3.default.ext.msg = _kit2.default.isPlainObject(cfg.msgExt) ? cfg.msgExt : cfg.msgExt ? { msgExt: cfg.msgExt } : {};
	      if (_universalEnv.isWeex || _universalEnv.isKraken || !cfg.autoEnable || _getPageInfo2.default.scout_auto_disable) {
	        return;
	      }

	      (0, _listen.onError)(_alarm_kraken2.default); //error监听执行
	      (0, _listen.onUnhandledrejection)(_alarm_kraken2.default); //onUnhandledrejection监听执行
	      (0, _listen.onDOMContentLoaded)(_alarm_kraken2.default); //onDOMContentLoaded监听执行，用以聚合DR前error
	      (0, _listen.onLoad)(_alarm_kraken2.default, _loadTime2.default, (0, _fp2.default)()); //性能数据上报
	      (0, _xhr2.default)(_alarm_kraken2.default); //托管Xhr
	      (0, _fetch2.default)(_alarm_kraken2.default); //托管Fetch
	      // config.ext.performance = typeof cfg.performanceExtSync === "object" ? cfg.performanceExtSync : {};
	      window.__scout_probe_existed__ = true;
	    }
	  }, {
	    key: "alarm",
	    value: function alarm(msg) {
	      (0, _alarm_kraken2.default)(msg, false);
	    }
	  }]);

	  return SDK;
	}();

	// module.exports = SDK;
	exports.default = SDK;
	module.exports = exports["default"];

/***/ },
/* 242 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var agent = {
	  //代理console
	  console: function (_console) {
	    function console() {
	      return _console.apply(this, arguments);
	    }

	    console.toString = function () {
	      return _console.toString();
	    };

	    return console;
	  }(function (fn) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "info";

	    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") {
	      window.console = window.console || {};
	    } else {
	      return;
	    }
	    var _original = console[type] || function () {};
	    console[type] = function () {
	      _original.apply(this, arguments);
	      try {
	        fn && fn(arguments[0], false);
	      } catch (e) {}
	    };
	  })
	};

	exports.default = agent;
	module.exports = exports["default"];

/***/ },
/* 243 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var kit = {
	  // noop : function () {},
	  // isRobot: function () {
	  //   var t = ["nuhk", "googlebot/", "googlebot-image", "yammybot", "openbot", "slurp", "msnbot", "ask jeeves/teoma", "ia_archiver", "baiduspider", "bingbot/", "adsbot"];
	  //   if (!navigator || "string" != typeof navigator.userAgent) return !1;
	  //   try {
	  //     for (var e = navigator.userAgent.toLowerCase(), r = 0; r < t.length; r++) {
	  //       var n = t[r];
	  //       if (e.lastIndexOf(n) >= 0) return !0;
	  //     }
	  //   } catch (o) {
	  //     util.warn("[arms] useragent parse error");
	  //   }
	  //   return !1;
	  // },
	  isFunction: function isFunction(t) {
	    return "function" == typeof t;
	  },
	  isPlainObject: function isPlainObject(t) {
	    return "[object Object]" === Object.prototype.toString.call(t);
	  },
	  isString: function isString(t) {
	    return "[object String]" === Object.prototype.toString.call(t);
	  },
	  isArray: function isArray(t) {
	    return "[object Array]" === Object.prototype.toString.call(t);
	  }
	  // joinRegExp: function (t) {
	  //   for (var e, r = [], n = 0, o = t.length; n < o; n++) e = t[n], this.isString(e) ? r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : e && e.source && r.push(e.source);
	  //   return new RegExp(r.join("|"), "i");
	  // }
	};

	exports.default = kit;
	module.exports = exports["default"];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSentType = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _universalEnv = __webpack_require__(11);

	var _constants = __webpack_require__(245);

	var _kit = __webpack_require__(243);

	var _kit2 = _interopRequireDefault(_kit);

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	var _mtop = __webpack_require__(247);

	var _mtop2 = _interopRequireDefault(_mtop);

	var _http = __webpack_require__(249);

	var _http2 = _interopRequireDefault(_http);

	var _kraken = __webpack_require__(252);

	var _kraken2 = _interopRequireDefault(_kraken);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	var _getPageInfo = __webpack_require__(254);

	var _getPageInfo2 = _interopRequireDefault(_getPageInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sent = function () {};
	var base = _config2.default.base,
	    set = _config2.default.set,
	    ext = _config2.default.ext,
	    state = _config2.default.state;

	var scene = _universalEnv.isWeex ? "weex" : _universalEnv.isKraken ? "kraken" : "web";
	var per_state_key = _constants.per_state.key;

	var getSentType = function () {
	  var is_ownHost = (0, _is_match2.default)(_getPageInfo2.default.page_url, "ownHost", true);
	  var api_type = set.apiType === "Mtop" || set.apiType === "Http" ? set.apiType : "Mtop";
	  api_type = _universalEnv.isWeex ? "Mtop" : !is_ownHost || !window.Promise ? "Http" : api_type;
	  api_type = _universalEnv.isKraken ? "Kraken" : api_type;
	  var mtopInitCatch = api_type === "Mtop" && (0, _mtop.mtopInit)();
	  sent = api_type === "Mtop" ? _mtop2.default : api_type === "Kraken" ? _kraken2.default : _http2.default;
	  return { mtopInitCatch: mtopInitCatch, api_type: api_type };
	};
	exports.getSentType = getSentType;


	var extHandle = function (msg) {
	  var store = {};
	  var page_type_arr = [];
	  base.alarmExt.forEach(function (item) {
	    var _value = msg[item];
	    var is_page_type = item === "page_type";
	    if (is_page_type && _value) {
	      var _split = _value.split("&");
	      ext.pageTypes.concat(_split).forEach(function (val) {
	        store[val || "-"] || val && page_type_arr.push(val);
	        store[val || "-"] = true;
	      });
	      ext.pageTypes = page_type_arr;
	    }
	    var value = is_page_type ? ext.pageTypes.join("&") : _value;
	    ext.alarm[item] = value || undefined;
	  });
	};

	var check = function (msg) {
	  return set.ignoreMtop.indexOf(msg.api || "") === -1;
	};

	var alarm = function (msg, type) {
	  var req = void 0;
	  var client_code = set.bu + "@" + set.code;
	  var _data = {
	    client_code: client_code
	  };
	  _data[per_state_key] = scene;
	  try {
	    // const is_obj_msg = typeof msg === "object";
	    var is_obj_msg = _kit2.default.isPlainObject(msg);
	    if (type) {
	      _data.biz_type = type;
	      _data[per_state_key] += !state[type] ? "&" + type : "";
	      state[type] = true;
	      _data[per_state_key] = type === _constants.alarm_keys.performance ? scene + "&" + msg[per_state_key] : _data[per_state_key];
	      type === _constants.alarm_keys.performance && delete msg[per_state_key];
	      _data.client_msg = type === _constants.alarm_keys.performance ? _extends({}, msg, ext.performance, ext.msg) : _extends({}, msg, ext.msg);
	    } else if (!is_obj_msg) {
	      return;
	    } else if ((_universalEnv.isWeex || _universalEnv.isKraken) && msg.biz_type && msg.client_msg && base.allowAlarmKeys.indexOf(msg.biz_type) > -1) {
	      check(msg.client_msg) && alarm(msg.client_msg, msg.biz_type);
	      return;
	    } else if (msg.biz_type === "calc" && _kit2.default.isArray(msg.client_msg)) {
	      var obj = {};
	      msg.client_msg.forEach(function (item, i) {
	        var key = _constants.calc_keys_list[i];
	        obj[key] = +item || 0;
	      });

	      _data.biz_type = _constants.alarm_keys.performance;
	      _data.client_code = client_code + "_calc";
	      _data.alarm_code = msg.biz_code;
	      _data.client_msg = _extends({}, _constants.calc_keys_map, obj);
	    } else if (msg.alarm_type || msg.biz_type) {
	      var _Error = msg.Error instanceof Error ? msg.Error.toString() : undefined;
	      var client_msg = !_Error && _typeof(msg.client_msg) === "object" ? _extends({}, msg.client_msg, ext.msg) : _extends({ msg: msg.client_msg }, ext.msg);
	      client_msg = _Error ? { client_msg: client_msg, _Error: _Error } : client_msg;
	      _data.client_msg = client_msg;
	      _data.biz_type = _constants.alarm_keys.alarm;
	      _data.alarm_type = msg.alarm_type || msg.biz_type;
	      _data.alarm_code = msg.alarm_code || msg.client_code || _data.alarm_type;
	      var _alarmExt = msg.alarmExt;
	      _alarmExt && _kit2.default.isPlainObject(_alarmExt) && extHandle(_alarmExt);
	    } else if (msg.extType === "performance") {
	      if (ext.performance.over) {
	        return;
	      }
	      base.performanceExt.forEach(function (item) {
	        ext.performance[item] = msg[item];
	      });
	      return;
	    } else if (msg.extType === "alarm") {
	      extHandle(msg);
	      return;
	    } else if (msg.extType === "msg") {
	      ext.msg = _extends({}, ext.msg, msg);
	      delete ext.msg.extType;
	      return;
	    } else {
	      return;
	    }
	    _data.client_msg = JSON.stringify(_data.client_msg);
	    _data.client_time = +new Date();
	    var _pageInfo = set.spa ? (0, _getPageInfo.getPageInfo)() : _getPageInfo2.default;
	    _data.page_name = _pageInfo.page_name; //url;
	    _data.page_url = _pageInfo.page_url; //url;
	    _data.page_title = _pageInfo.page_title; //url;
	    req = JSON.stringify(_extends({}, _data, ext.alarm));
	  } catch (e) {
	    req = JSON.stringify({
	      biz_type: _constants.alarm_keys.alarm,
	      client_code: client_code,
	      alarm_type: "alarmCatch",
	      client_time: +new Date(),
	      client_msg: e.toString(),
	      page_name: (set.spa ? (0, _getPageInfo.getPageInfo)() : _getPageInfo2.default).page_name,
	      page_url: (set.spa ? (0, _getPageInfo.getPageInfo)() : _getPageInfo2.default).page_url
	    });
	  }
	  return setTimeout(function () {
	    try {
	      sent(req);
	    } catch (e) {
	      console.log("run alarm sent");
	      console.log(e);
	    }
	  }, 0);
	};
	exports.default = alarm;

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var alarm_keys = {
	  performance: "performance_fe",
	  jsError: "jsError",
	  loadError: "loadError",
	  loadTimeout: "loadTimeout",
	  unhandledrejection: "unhandledrejection",
	  apiError: "apiError",
	  apiTimeout: "apiTimeout",
	  socketError: "socketError",
	  alarm: "alarm_fe"
	};

	var calc_keys_list = ["dns", "tcp", "ssl", "ttfb", "trans", "dom", "res", "firstbyte", "tti", "ready", "load", "fcp", "fmp"];
	var calc_keys_map = {};
	calc_keys_list.forEach(function (key) {
	  calc_keys_map[key] = 0;
	});

	var calc_keys = {
	  dns: ["domainLookupEnd", "domainLookupStart"],
	  tcp: ["connectEnd", "connectStart"],
	  ssl: ["connectEnd", "secureConnectionStart"],
	  ttfb: ["responseStart", "requestStart"],
	  trans: ["responseEnd", "responseStart"],
	  dom: ["domInteractive", "responseEnd"],
	  res: ["loadEventStart", "domContentLoadedEventEnd"],
	  firstbyte: ["responseStart", "domainLookupStart"],
	  // fpt: ['responseEnd', 'fetchStart'],
	  tti: ["domInteractive", "fetchStart"],
	  ready: ["domContentLoadedEventEnd", "fetchStart"],
	  load: ["loadEventStart", "fetchStart"]
	};

	var core_validate = {
	  keys: ["ttfb", "firstbyte", "dom", "ready", "res", "load", "fcp", "fmp"],
	  regex: /^(1|2)\d{4}$|^0$|^([1-9]\d{0,3})$/
	};

	var per_state = {
	  key: "performance_state",
	  dr_item: "ready",
	  dr_val: ["1s&2s&3s&4s&5s", "2s&3s&4s&5s", "3s&4s&5s", "4s&5s", "5s"],
	  fp_item: "fmp",
	  fp_val: ["1f&2f&3f&4f&5f", "2f&3f&4f&5f", "3f&4f&5f", "4f&5f", "5f"],
	  bad: "bad"
	};

	exports.alarm_keys = alarm_keys;
	exports.calc_keys = calc_keys;
	exports.core_validate = core_validate;
	exports.per_state = per_state;
	exports.calc_keys_list = calc_keys_list;
	exports.calc_keys_map = calc_keys_map;

/***/ },
/* 246 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {
	  base: {
	    // useFmp: false,
	    ignorePath: [/mtop\.youku.aio\.collector\.alarm/, /^\/alilog\//],
	    ignoreHost: [/\.baidu\.com$/, /^alarm\.youku\.com$/, /retcode\./, /\.mmstat\.com$/, /azhimalayanvh\.com$/, /\.aliapp\.org$/], //:/^([\w\-]+\.)*baidu\.com$/
	    ignoreMsg: [/^Script\serror\.$/, /^ResizeObserver\sloop\slimit\sexceeded$/],
	    jsonpHost: [/acs\.youku\.com$/, /heyi-acs\.cp31\.ott\.cibntv\.net$/, /heyi-acs\.cp12\.wasu\.tv$/, /acs\.m\.taobao\.com$/, /mtop\.damai\.cn$/],
	    ignoreMtop: ["mtop.youku.aio.collector.alarm"],
	    ownHost: [/\.youku\.com$/, /\.cibntv\.net$/, /\.wasu\.tv$/],
	    performanceExt: ["fmp"],
	    alarmExt: ["page_type", "third_uuid", "alarm_mark"],
	    urlKeys: ["scout_disable", "dev", "page_type", "sample", "scout_auto_disable"],
	    loadTimeout: 5000,
	    apiTimeout: 5000,
	    alarmGather: 200,
	    allowAlarmKeys: ["jsError", "apiError", "apiTimeout"]
	  },
	  set: {
	    console: ["info"],
	    sampleRate: 1,
	    bu: "youku",
	    code: "7001",
	    ignorePath: [],
	    ignoreHost: [],
	    ignoreMtop: [],
	    autoEnable: true,
	    alarmEnable: true,
	    outEnable: true,
	    spa: false,
	    loadTimeout: 5000,
	    apiTimeout: 5000,
	    alarmGather: 200,
	    pathKeys: []
	  },
	  ext: {
	    performance: {
	      // fmp: ""
	    },
	    alarm: {
	      // page_type: "",
	      // third_uuid: "",
	      // alarm_mark: ""
	    },
	    pageTypes: [],
	    msg: {}
	  },
	  state: {}
	};
	exports.default = config;
	module.exports = exports["default"];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mtopInit = undefined;

	var _universalEnv = __webpack_require__(11);

	var _universalMtop = __webpack_require__(176);

	var _universalMtop2 = _interopRequireDefault(_universalMtop);

	var _stream = __webpack_require__(248);

	var _stream2 = _interopRequireDefault(_stream);

	var _http = __webpack_require__(249);

	var _http2 = _interopRequireDefault(_http);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mtopRequest = void 0;
	var args = void 0;
	var mtopInitCatch = true;

	var getNetArgs = function () {
	  var _args = {
	    prefix: "acs",
	    mainDomain: "youku.com",
	    appKey: "24679788"
	  };
	  var host = window && window.location && window.location.host;
	  if (host.indexOf("cibn") > 0) {
	    _args.prefix = "heyi-acs";
	    _args.mainDomain = "cp31.ott.cibntv.net";
	  } else if (host.indexOf("wasu") > 0) {
	    _args.prefix = "heyi-acs";
	    _args.mainDomain = "cp12.wasu.tv";
	  }
	  return _args;
	};

	var setCfg = function (_args) {
	  if (_universalEnv.isWeex) {
	    _universalMtop2.default.config("prefix", _args.prefix); // mtop的前缀
	    _universalMtop2.default.config("subDomain", ""); // mtop的子域
	    _universalMtop2.default.config("mainDomain", _args.mainDomain); // mtop的主域
	    mtopRequest = _universalMtop2.default.request;
	  } else {
	    // h5用 lib.mtop
	    lib.mtop.config.prefix = _args.prefix;
	    lib.mtop.config.subDomain = "";
	    lib.mtop.config.mainDomain = _args.mainDomain;
	    mtopRequest = lib.mtop.request;
	  }
	};

	var mtopInit = function () {
	  try {
	    args = getNetArgs();
	    setCfg(args);
	    mtopInitCatch = false;
	  } catch (e) {
	    mtopInitCatch = true;
	  }
	  return mtopInitCatch;
	};

	exports.mtopInit = mtopInit;


	var sent = function (req) {
	  // let params;
	  // try {
	  //   params = JSON.stringify(req)
	  // } catch (e) {
	  // }
	  // if (!params) {
	  //   return;
	  // }
	  var method = req.length > 2048 ? "post" : "get";
	  var options = {
	    api: "mtop.youku.aio.collector.alarm",
	    v: "1.0",
	    type: method,
	    data: {
	      req: req
	    },
	    appKey: args.appKey,
	    ecode: 0
	    // dataType: 'jsonp',
	  };
	  mtopRequest(options).catch(function (e) {
	    _universalEnv.isWeex && (0, _stream2.default)(req);
	    _universalEnv.isWeb && (0, _http2.default)(req);
	    console.log("mtopRequest catch");
	    console.log(e);
	  });
	};
	exports.default = sent;

/***/ },
/* 248 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var stream = void 0;
	try {
	  stream = __weex_require__("@weex-module/stream");
	} catch (e) {}
	var request = function (req) {
	  stream && stream.fetch && stream.fetch({
	    url: "https://alarm.youku.com/api/sendAlarm?alarmInfo=" + encodeURIComponent(req),
	    method: "GET",
	    headers: {
	      "Cookie": "",
	      "origin": "https://stream.youku.com"
	    },
	    type: "json"
	  }, function () {});
	};
	exports.default = request;
	module.exports = exports["default"];

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _xhr = __webpack_require__(250);

	var _xhr2 = _interopRequireDefault(_xhr);

	var _fetch2 = __webpack_require__(251);

	var _fetch3 = _interopRequireDefault(_fetch2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var request = function (req) {
	  window.fetch ? (0, _fetch3.default)(req) : (0, _xhr2.default)(req);
	};
	exports.default = request;
	module.exports = exports["default"];

/***/ },
/* 250 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//xhr
	var isIE9 = function () {
	  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
	  // const isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
	  // const isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
	  var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	  reIE.test(userAgent);
	  var fIEVersion = parseFloat(RegExp["$1"]);
	  return isIE && fIEVersion === 9;
	  // if(isIE) {
	  //     const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
	  //     reIE.test(userAgent);
	  //     const fIEVersion = parseFloat(RegExp["$1"]);
	  //     if(fIEVersion == 7) {
	  //         return 7;
	  //     } else if(fIEVersion == 8) {
	  //         return 8;
	  //     } else if(fIEVersion == 9) {
	  //         return 9;
	  //     } else if(fIEVersion == 10) {
	  //         return 10;
	  //     } else {
	  //         return 6;//IE版本<=7
	  //     }
	  // } else if(isEdge) {
	  //     return 'edge';//edge
	  // } else if(isIE11) {
	  //     return 11; //IE11
	  // }else{
	  //     return -1;//不是ie浏览器
	  // }
	};

	var _isIE9 = 1;

	//创建ajax函数
	var sent = function (req) {

	  _isIE9 = _isIE9 === 1 ? isIE9() : _isIE9;

	  //创建-第一步
	  var xhr = {};
	  if (window.XMLHttpRequest) {
	    xhr = _isIE9 ? new XDomainRequest() : new XMLHttpRequest();
	    xhr.withCredentials = true;
	  } else {
	    xhr = ActiveXObject("Microsoft.XMLHTTP");
	  }
	  var method = req.length > 2048 ? "POST" : "GET";
	  //连接和发送-第二步
	  if (method == "GET") {
	    xhr.open("GET", "https://alarm.youku.com/api/sendAlarm?alarmInfo=" + encodeURIComponent(req), true);
	    //xhr.setRequestHeader("Accept-Encoding", "gzip");
	    xhr.send(null);
	  } else {
	    xhr.open("POST", "https://alarm.youku.com/api/sendAlarm", true);
	    //设置表单提交时的内容类型
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    xhr.send("alarmInfo=" + req);
	  }
	};
	exports.default = sent;
	module.exports = exports["default"];

/***/ },
/* 251 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var sent = function (req) {
	  var api = "https://alarm.youku.com/api/sendAlarm";
	  var method = req.length < 2048 && "GET" || "POST";
	  var isGet = method === "GET";
	  //过大拦截
	  if (!isGet && req.length > 6096) {
	    return;
	  }
	  var encodeStr = "alarmInfo=" + encodeURIComponent(req);
	  api += isGet ? "?" + encodeStr : "";
	  var option = {
	    method: method,
	    credentials: "include",
	    headers: {
	      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
	    },
	    body: encodeStr
	  };
	  isGet && delete option.body;
	  fetch(api, option).catch(function () {});
	};
	exports.default = sent;
	module.exports = exports["default"];

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = function (req) {
	  var method = req.length > 2048 ? "post" : "get";

	  (typeof kraken === "undefined" ? "undefined" : _typeof(kraken)) === "object" && kraken.methodChannel.invokeMethod("mtop", "request", {
	    params: JSON.stringify({
	      api: "mtop.youku.aio.collector.alarm",
	      v: "1.0",
	      type: method,
	      data: {
	        req: req
	      },
	      appKey: "24679788",
	      ecode: 0
	      // dataType: 'jsonp',
	    })
	  });
	};

	module.exports = exports["default"];

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._match = undefined;

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _match = function (list, str) {
	  return list.reduce(function (result, currentItem) {
	    return result || currentItem.test(str);
	  }, false);
	};

	var is_match = function (url, type, host) {
	  var list = _config2.default.set[type] || _config2.default.base[type];
	  var _hostname = void 0;
	  var _pathname = void 0;
	  try {
	    var urlObj = new URL(url);
	    _hostname = urlObj.hostname;
	    _pathname = urlObj.pathname;
	  } catch (e) {
	    var values = (url || "-").match(/^(http|https|\/\/):\/\/([^\/:]*):?(\d*)\/([^\?\#]*)/);
	    _hostname = values && values[2] || "-";
	    _pathname = values && values[4] || "-";
	  }

	  var str = host || type === "ignoreHost" || type === "jsonpHost" ? _hostname : _pathname;
	  return _match(list, str);
	};
	exports._match = _match;
	exports.default = is_match;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getSearchInfo = exports.getPageInfo = undefined;

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var parseQuery = function (query) {
	  var reg = /([^=&\s\?]+)[=\s]*([^&\s]*)/g;
	  var obj = {};
	  while (reg.exec(query)) {
	    obj[RegExp.$1] = RegExp.$2;
	  }
	  return obj;
	};

	var getPageInfo = function () {
	  var pageInfo = {};
	  var _location = window && window.location || {};
	  var page_url = _location.href || "https://error.com/url?get=false";
	  var origin = _location.origin || _location.protocol + "//" + _location.hostname + (_location.port ? ":" + _location.port : "");
	  pageInfo.page_url = page_url; //url;
	  pageInfo.port = _location.port;
	  pageInfo.page_title = document.title;
	  pageInfo.page_name = origin + _location.pathname;
	  try {
	    var _URL = new URL(page_url);
	    var searchParams = _URL.searchParams;
	    _config2.default.base.urlKeys.forEach(function (item) {
	      pageInfo[item] = searchParams.get(item);
	    });
	  } catch (e) {
	    var search = parseQuery(_location.search);
	    _config2.default.base.urlKeys.forEach(function (item) {
	      pageInfo[item] = search[item];
	    });
	  }
	  return pageInfo;
	};

	var pageInfo = getPageInfo();
	pageInfo.searchInfo = "";

	var getSearchInfo = function () {
	  var pathKeys = _config2.default.set.pathKeys;
	  if (!pathKeys.length) {
	    return "";
	  }
	  var searchInfo = [];
	  var _location = window && window.location || {};
	  var page_url = _location.href || "https://error.com/url?get=false";
	  try {
	    var _URL = new URL(page_url);
	    var searchParams = _URL.searchParams;
	    pathKeys.forEach(function (item) {
	      var val = searchParams.get(item);
	      val && searchInfo.push(item + "=" + val);
	    });
	  } catch (e) {
	    var search = parseQuery(_location.search);
	    pathKeys.forEach(function (item) {
	      var val = search[item];
	      val && searchInfo.push(item + "=" + val);
	    });
	  }
	  var info = searchInfo.length ? "?" + searchInfo.join("&") : "";
	  pageInfo.searchInfo = info;
	  return info;
	};

	exports.getPageInfo = getPageInfo;
	exports.getSearchInfo = getSearchInfo;
	exports.default = pageInfo;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constants = __webpack_require__(245);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var set = _config2.default.set,
	    base = _config2.default.base;


	var oldXHR = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.XMLHttpRequest;
	var hack = function () {
	  if (typeof window.CustomEvent != "function") {
	    var _CustomEvent = function (event, params) {
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };
	      var evt = document.createEvent("CustomEvent");
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    };
	    _CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = _CustomEvent;
	  }
	};

	function ajaxEventTrigger(event) {
	  var ajaxEvent = new CustomEvent(event, {
	    detail: this
	  });
	  window.dispatchEvent(ajaxEvent);
	}

	function newXHR() {

	  var realXHR = new oldXHR();

	  realXHR.addEventListener("abort", function () {
	    ajaxEventTrigger.call(this, "ajaxAbort");
	  }, false);

	  realXHR.addEventListener("error", function () {
	    ajaxEventTrigger.call(this, "ajaxError");
	  }, false);

	  realXHR.addEventListener("load", function () {
	    ajaxEventTrigger.call(this, "ajaxLoad");
	  }, false);

	  realXHR.addEventListener("loadstart", function () {
	    ajaxEventTrigger.call(this, "ajaxLoadStart");
	  }, false);

	  realXHR.addEventListener("progress", function () {
	    ajaxEventTrigger.call(this, "ajaxProgress");
	  }, false);

	  realXHR.addEventListener("timeout", function () {
	    ajaxEventTrigger.call(this, "ajaxTimeout");
	  }, false);

	  realXHR.addEventListener("loadend", function () {
	    ajaxEventTrigger.call(this, "ajaxLoadEnd");
	  }, false);

	  realXHR.addEventListener("readystatechange", function () {
	    ajaxEventTrigger.call(this, "ajaxReadyStateChange");
	  }, false);
	  return realXHR;
	}

	var Xhr = function (alarm) {
	  if (!oldXHR) {
	    return;
	  }
	  hack();
	  var timeRecordArray = [];
	  var methodArray = [];
	  var paramsArray = [];
	  var oldOpen = XMLHttpRequest.prototype.open;
	  XMLHttpRequest.prototype.open = function (method, url) {
	    try {
	      methodArray.push({
	        method: method,
	        url: url,
	        startTime: +new Date()
	      });
	    } catch (e) {}
	    oldOpen && oldOpen.apply(this, arguments);
	  };

	  var oldSend = XMLHttpRequest.prototype.send;
	  XMLHttpRequest.prototype.send = function (params) {
	    try {
	      paramsArray.push(params);
	    } catch (n) {}
	    oldSend && oldSend.apply(this, arguments);
	  };

	  window.XMLHttpRequest = newXHR;
	  window.addEventListener("ajaxLoadStart", function (e) {
	    var tempObj = {
	      timeStamp: +new Date(),
	      detail: e.detail
	    };
	    timeRecordArray.push(tempObj);
	  });
	  window.addEventListener("ajaxLoadEnd", function () {
	    for (var i = 0; i < timeRecordArray.length; i++) {
	      var thisItem = timeRecordArray[i];
	      if (thisItem.detail.status > 0) {
	        var currentTime = +new Date();
	        var cost = currentTime - thisItem.timeStamp;
	        var status = thisItem.detail.status;
	        var type = (status < 200 || status >= 300) && status != 304 ? _constants.alarm_keys.apiError : cost > (set.apiTimeout || base.apiTimeout) ? _constants.alarm_keys.apiTimeout : null;
	        var url = thisItem.detail.responseURL;
	        var is_ignorePath = !url || (0, _is_match2.default)(url, "ignorePath");
	        var is_ignoreHost = !url || (0, _is_match2.default)(url, "ignoreHost");
	        if (is_ignorePath || is_ignoreHost) {
	          return;
	        }
	        var data = {
	          cost: cost,
	          type: "Xhr",
	          method: methodArray[i] && methodArray[i].method || "GET",
	          status: status,
	          url: url,
	          statusText: thisItem.detail.statusText,
	          params: paramsArray[i]
	        };
	        methodArray.splice(i, 1);
	        timeRecordArray.splice(i, 1);
	        paramsArray.splice(i, 1);
	        alarm && alarm(data, type);
	        break;
	      }
	    }
	  });
	};
	exports.default = Xhr;
	module.exports = exports["default"];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constants = __webpack_require__(245);

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var set = _config2.default.set,
	    base = _config2.default.base;

	var middleFn = function (startTime, res, options, alarm) {
	  var url = res.url;
	  if (res.type === "opaque" || !url) {
	    return;
	  }
	  var is_ignorePath = (0, _is_match2.default)(url, "ignorePath");
	  var is_ignoreHost = (0, _is_match2.default)(url, "ignoreHost");
	  if (is_ignorePath || is_ignoreHost) {
	    return;
	  }
	  var cost = +new Date() - startTime;
	  var status = +res.status;
	  var type = (status < 200 || status >= 300) && status != 304 ? _constants.alarm_keys.apiError : cost > (set.apiTimeout || base.apiTimeout) ? _constants.alarm_keys.apiTimeout : null;
	  if (!type) {
	    return;
	  }
	  var data = {
	    cost: cost,
	    type: "fetch",
	    method: options && options.method || "GET",
	    status: status,
	    url: res.url,
	    statusText: res.statusText,
	    params: options && options.body || ""
	  };
	  alarm && alarm(data, type);
	};
	var Fetch = function (alarm) {
	  var _fetch = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.fetch;
	  if (!_fetch) {
	    return;
	  }
	  window.fetch = function (url, options) {
	    var startTime = +new Date();
	    return _fetch.apply(this, arguments).then(function (res) {
	      try {
	        middleFn(startTime, res, options, alarm);
	      } catch (e) {}
	      return res;
	    });
	  };
	};
	exports.default = Fetch;
	module.exports = exports["default"];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constants = __webpack_require__(245);

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var set = _config2.default.set,
	    base = _config2.default.base;

	var loadTimeCheck = function (alarm) {
	  var performance = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.performance || {};
	  var resource = performance.getEntriesByType && performance.getEntriesByType("resource") || [];
	  var loadTimeout = +set.loadTimeout || base.loadTimeout;
	  var apiTimeout = +set.apiTimeout || base.apiTimeout;
	  var loadTimeoutList = [];
	  var apiTimeoutList = [];

	  resource.forEach(function (item) {
	    var duration = item.duration,
	        nextHopProtocol = item.nextHopProtocol,
	        initiatorType = item.initiatorType,
	        name = item.name;


	    var is_ignore = (0, _is_match2.default)(name, "ignorePath") || (0, _is_match2.default)(name, "ignoreHost");
	    var is_jsonp_timeout = !is_ignore && initiatorType === "script" && duration > apiTimeout && (0, _is_match2.default)(name, "jsonpHost");

	    is_jsonp_timeout && apiTimeoutList.push({
	      url: name,
	      cost: duration,
	      type: "jsonp",
	      method: "GET",
	      params: "",
	      status: "",
	      statusText: "loadTimeout"
	    });

	    !is_ignore && !is_jsonp_timeout && duration > loadTimeout && loadTimeoutList.push({ duration: duration, initiatorType: initiatorType, name: name, nextHopProtocol: nextHopProtocol });
	  });
	  loadTimeoutList.length && alarm && alarm(loadTimeoutList, _constants.alarm_keys.loadTimeout);
	  apiTimeoutList.length && alarm && alarm(apiTimeoutList, _constants.alarm_keys.apiTimeout);
	};
	exports.default = loadTimeCheck;
	module.exports = exports["default"];

/***/ },
/* 258 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * get first-meaningful-paint
	 */
	var FMP = function () {
	  if (!window.performance || !window.performance.timing || !window.performance.getEntriesByType || !window.requestAnimationFrame || !window.MutationObserver) {
	    return {};
	  }

	  var timing = window.performance.timing;
	  var first = true;
	  var scoreFirst = 0;
	  var tFirst = +new Date();

	  var observedPoints = [{
	    score: 0,
	    t: tFirst
	  }];

	  var innerHeight = window.innerHeight;
	  function getDomMark(dom, level, _first) {
	    var children = dom.children;
	    var length = children && children.length || 0;
	    var sum = 0;
	    var tagName = dom.tagName;
	    if (tagName !== "SCRIPT" && tagName !== "STYLE" && tagName !== "META" && tagName !== "HEAD") {
	      if (dom.getBoundingClientRect && dom.getBoundingClientRect().top < innerHeight) {
	        sum += level * length;
	      }
	      if (length) {
	        for (var i = 0; i < length; i++) {
	          sum += getDomMark(children[i], level + 1, _first);
	        }
	      }
	    }
	    scoreFirst = _first ? sum : scoreFirst;
	    return sum;
	  }
	  var observer = new window.MutationObserver(function () {
	    window.requestAnimationFrame(function () {
	      var t = +new Date();
	      var score = getDomMark(document, 1, first);
	      first = false;
	      observedPoints.push({
	        score: score,
	        t: t
	      });
	    });
	  });
	  observer.observe(document, {
	    childList: true,
	    subtree: true
	  });

	  var getFP = function () {
	    observer.disconnect();
	    var rates = [];
	    for (var i = 1; i < observedPoints.length; i++) {
	      if (observedPoints[i].t !== observedPoints[i - 1].t) {
	        rates.push({
	          t: observedPoints[i].t,
	          rate: observedPoints[i].score - observedPoints[i - 1].score
	        });
	      }
	    }
	    rates.sort(function (a, b) {
	      return b.rate - a.rate;
	    });
	    var useFirst = scoreFirst > 300;
	    if (rates.length) {
	      var startTime = timing.navigationStart || timing.fetchStart;
	      var fcp = performance.getEntriesByType("paint") && performance.getEntriesByType("paint")[1] && performance.getEntriesByType("paint")[1].startTime || 0;
	      var fmp = useFirst ? tFirst - startTime : rates[0].t - startTime;
	      fmp = window.__USE_SSR_TIME__ || fmp;

	      if (!fcp) {
	        rates.forEach(function (item) {
	          fcp = item.rate > 0 ? item.t - startTime : 0;
	        });
	        fcp = fcp || rates[rates.length - 1].t - startTime;
	      }
	      return {
	        fcp: parseInt(fcp),
	        fmp: fcp > fmp ? parseInt(fcp) : fmp
	      };
	    } else {
	      return {};
	    }
	  };
	  return getFP;
	};

	exports.default = FMP;
	module.exports = exports["default"];

/***/ },
/* 259 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// import Promise from "babel-polyfill";
	var hack = function () {
	  if (typeof Object.assign != "function") {
	    Object.assign = function (target) {
	      "use strict";

	      if (!target) {
	        return {};
	      }
	      target = Object(target);
	      for (var index = 1; index < arguments.length; index++) {
	        var source = arguments[index];
	        if (source != null) {
	          for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	              target[key] = source[key];
	            }
	          }
	        }
	      }
	      return target;
	    };
	  }
	};

	exports.default = hack;

	// if (!Object.keys) {
	//   Object.keys = (function () {
	//     var hasOwnProperty = Object.prototype.hasOwnProperty,
	//         hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
	//         dontEnums = [
	//           'toString',
	//           'toLocaleString',
	//           'valueOf',
	//           'hasOwnProperty',
	//           'isPrototypeOf',
	//           'propertyIsEnumerable',
	//           'constructor'
	//         ],
	//         dontEnumsLength = dontEnums.length;

	//     return function (obj) {
	//       if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

	//       var result = [];

	//       for (var prop in obj) {
	//         if (hasOwnProperty.call(obj, prop)) result.push(prop);
	//       }

	//       if (hasDontEnumBug) {
	//         for (var i=0; i < dontEnumsLength; i++) {
	//           if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
	//         }
	//       }
	//       return result;
	//     }
	//   })()
	// };

	module.exports = exports["default"];

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.onLoad = exports.onDOMContentLoaded = exports.onUnhandledrejection = exports.onError = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _calc = __webpack_require__(261);

	var _calc2 = _interopRequireDefault(_calc);

	var _constants = __webpack_require__(245);

	var _is_match = __webpack_require__(253);

	var _is_match2 = _interopRequireDefault(_is_match);

	var _getPageInfo = __webpack_require__(254);

	var _getPageInfo2 = _interopRequireDefault(_getPageInfo);

	var _config = __webpack_require__(246);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var base = _config2.default.base,
	    set = _config2.default.set,
	    ext = _config2.default.ext;

	var is_support = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.addEventListener;
	var store = {};
	store[_constants.alarm_keys.loadError] = [];
	store[_constants.alarm_keys.apiError] = [];
	store[_constants.alarm_keys.jsError] = [];
	store[_constants.alarm_keys.unhandledrejection] = [];
	var DOMContentLoaded = false;
	var alarmGather = set.alarmGather;
	var alarmJsErrorDone = false;

	var throttle = function (data, errorType, alarm) {
	  store[errorType].push(data);
	  if (store[errorType + "_set"]) {
	    return;
	  }
	  store[errorType + "_set"] = true;
	  setTimeout(function () {
	    var _data = store[errorType];
	    var num = _data.length;
	    num && alarm(num === 1 ? _data[0] : _data, errorType);
	    store[errorType] = [];
	    store[errorType + "_set"] = false;
	  }, +alarmGather || base.alarmGather);
	};

	var onError = function (alarm) {
	  var onErrorFn = function (e) {
	    var errorType = void 0;
	    var data = {};
	    var typeName = e.target && e.target.localName;
	    if (typeName && (typeName === "link" || typeName === "script" || typeName === "img")) {
	      var url = e.target.href || e.target.src;
	      if (!url || url === _getPageInfo2.default.page_url) {
	        return;
	      }
	      errorType = _constants.alarm_keys.loadError;
	      var is_ignorePath = (0, _is_match2.default)(url, "ignorePath");
	      var is_ignoreHost = (0, _is_match2.default)(url, "ignoreHost");
	      var is_jsonpHost = (0, _is_match2.default)(url, "jsonpHost");
	      if (is_ignorePath || is_ignoreHost) {
	        return;
	      } else if (is_jsonpHost) {
	        errorType = _constants.alarm_keys.apiError;
	        data = {
	          url: url,
	          cost: 0,
	          type: "jsonp",
	          method: "GET",
	          params: "",
	          status: "",
	          statusText: "load error"
	        };
	      } else {
	        data = {
	          filename: url,
	          tag: typeName,
	          message: "load error"
	        };
	      }
	    } else if (typeName && typeName === "video") {
	      var _url = e.target.href || e.target.src;
	      errorType = _constants.alarm_keys.jsError;
	      data = {
	        filename: _url,
	        tag: typeName,
	        message: e.target.error
	      };
	    } else if (!typeName) {
	      if (alarmJsErrorDone && (0, _is_match._match)(base.ignoreMsg, e.message || "")) {
	        return;
	      }
	      errorType = _constants.alarm_keys.jsError;
	      data = {
	        filename: e.filename || "",
	        colno: e.colno,
	        lineno: e.lineno,
	        message: e.message,
	        stack: e.error && e.error.stack || ""
	      };
	    } else {
	      return;
	    }
	    !alarmGather && alarm(data, errorType);
	    alarmGather && !DOMContentLoaded && store[errorType].push(data);
	    alarmGather && DOMContentLoaded && throttle(data, errorType, alarm);
	    alarmJsErrorDone = true;
	  };
	  is_support && alarm && window.addEventListener("error", function (e) {
	    try {
	      onErrorFn(e);
	    } catch (e) {}
	  }, true);
	};

	var onUnhandledrejection = function (alarm) {
	  var onUnhandledrejectionFn = function (e) {
	    var errorType = _constants.alarm_keys.unhandledrejection;
	    var data = {
	      message: e.reason
	    };
	    !alarmGather && alarm(data, errorType);
	    alarmGather && !DOMContentLoaded && store[errorType].push(data);
	    alarmGather && DOMContentLoaded && throttle(data, errorType, alarm);
	  };
	  is_support && alarm && window.addEventListener("unhandledrejection", function (e) {
	    try {
	      onUnhandledrejectionFn(e);
	    } catch (e) {}
	  }, true);
	};

	var onDOMContentLoaded = function (alarm) {
	  var onDOMContentLoadedFn = function () {
	    DOMContentLoaded = true;
	    Object.keys(store).map(function (errorType) {
	      var data = store[errorType];
	      var num = data.length;
	      num && alarm(num === 1 ? data[0] : data, errorType);
	      store[errorType] = [];
	    });
	  };
	  is_support && alarm && alarmGather && window.addEventListener("DOMContentLoaded", function (e) {

	    try {
	      onDOMContentLoadedFn(e);
	    } catch (e) {
	      DOMContentLoaded = true;
	    }
	  }, true);
	};

	var onLoad = function (alarm, loadTimeout, getFP) {
	  var onLoadFn = function () {
	    DOMContentLoaded = true;
	    var type = _constants.alarm_keys.performance;
	    var data = (0, _calc2.default)(getFP);
	    data && alarm && alarm(data, type);
	    ext.performance.over = true;
	    loadTimeout && alarm && loadTimeout(alarm);
	  };
	  is_support && window.addEventListener("load", function (e) {
	    try {
	      onLoadFn(e);
	    } catch (e) {
	      DOMContentLoaded = true;
	    }
	  }, true);
	};

	// const onRejectionhandled = alarm => {
	//     window.addEventListener('rejectionhandled', function(e){
	//         const data = e.reason;
	//         console.log(data); // 打印"Unhandle Promise Error!"
	//         alarm && alarm(data);
	//     });
	// }

	exports.onError = onError;
	exports.onUnhandledrejection = onUnhandledrejection;
	exports.onDOMContentLoaded = onDOMContentLoaded;
	exports.onLoad = onLoad;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _constants = __webpack_require__(245);

	var calc = function (getFP) {
	  var performance = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.performance || {};
	  var timing = performance.timing;
	  if (!timing) {
	    return;
	  }
	  var result = getFP();
	  Object.keys(_constants.calc_keys).map(function (key) {
	    var item = _constants.calc_keys[key];
	    result[key] = timing[item[0]] - (timing[item[1]] || timing[item[0]]);
	  });
	  var checkResultErr = _constants.core_validate.keys.reduce(function (_result, currentItem) {
	    return _result || !_constants.core_validate.regex.test(result[currentItem]);
	  }, false);

	  var dr_item_val = result[_constants.per_state.dr_item] || 0;
	  var fp_item_val = result[_constants.per_state.fp_item] || 0;
	  var dr_index = parseInt(dr_item_val / 1000);
	  var fp_index = parseInt(fp_item_val / 1000);
	  result[_constants.per_state.key] = "dr&" + (_constants.per_state.dr_val[dr_index] || "dr" + _constants.per_state.bad) + (fp_item_val ? "&fp&" + (_constants.per_state.fp_val[fp_index] || "fp" + _constants.per_state.bad) : "");

	  return !checkResultErr && result || false;
	};
	exports.default = calc;
	module.exports = exports["default"];

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsxFileName = '/Users/tylorvan/hollywood_modes/hlw-v1-rax-play-pi-hollywood-cus/src/components/ModuleWrapper.js'; /** @jsx createElement */

	var _rax = __webpack_require__(2);

	// 播放器互动模块最外层容器，用于模块定位和标识点击穿透的区域
	var ModuleWrapper = function (props) {
	  return (0, _rax.createElement)('intersection-div', _extends({}, props, {
	    __source: {
	      fileName: _jsxFileName,
	      lineNumber: 5
	    }
	  }));
	};

	exports.default = ModuleWrapper;
	module.exports = exports['default'];

/***/ },
/* 263 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// 计算模块定位位置
	function getWrapperStyle() {
	  var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var viewportHeight = arguments[1];
	  var _pos$w = pos.w,
	      w = _pos$w === undefined ? 0 : _pos$w,
	      _pos$h = pos.h,
	      h = _pos$h === undefined ? 0 : _pos$h,
	      _pos$x = pos.x,
	      x = _pos$x === undefined ? 0 : _pos$x,
	      _pos$y = pos.y,
	      y = _pos$y === undefined ? 0 : _pos$y,
	      _pos$g = pos.g,
	      g = _pos$g === undefined ? 'nw' : _pos$g;

	  var centerX = (750 - w) / 2;
	  var centerY = (viewportHeight - h) / 2;
	  var style = {};
	  switch (g) {
	    case 'nw':
	      // 左上
	      style = {
	        left: x,
	        top: y
	      };
	      break;
	    case 'north':
	      // 中上
	      style = {
	        left: centerX,
	        top: y
	      };
	      break;
	    case 'ne':
	      // 右上
	      style = {
	        right: x,
	        top: y
	      };
	      break;
	    case 'west':
	      // 左中
	      style = {
	        left: x,
	        top: centerY
	      };
	      break;
	    case 'center':
	      // 中部
	      style = {
	        left: centerX,
	        top: centerY
	      };
	      break;
	    case 'east':
	      // 右中
	      style = {
	        right: x,
	        top: centerY
	      };
	      break;
	    case 'sw':
	      // 左下
	      style = {
	        left: x,
	        bottom: y
	      };
	      break;
	    case 'south':
	      // 中下
	      style = {
	        left: centerX,
	        bottom: y
	      };
	      break;
	    case 'se':
	      // 右下
	      style = {
	        right: x,
	        bottom: y
	      };
	      break;
	    default:
	      style = {
	        left: x,
	        top: y
	      };
	      break;
	  }
	  style.position = 'absolute';

	  return style;
	}

	exports.default = getWrapperStyle;
	module.exports = exports['default'];

/***/ }
/******/ ])}); require("demo.init");;
