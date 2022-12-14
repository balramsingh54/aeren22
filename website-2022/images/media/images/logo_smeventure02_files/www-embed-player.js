(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=ca(this);function n(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ka});
var na="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=na(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function t(a,b){a.prototype=na(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype}
function va(){this.C=!1;this.m=null;this.j=void 0;this.i=1;this.o=this.s=0;this.v=this.l=null}
function wa(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
va.prototype.N=function(a){this.j=a};
function xa(a,b){a.l={ac:b,jc:!0};a.i=a.s||a.o}
va.prototype.return=function(a){this.l={return:a};this.i=this.o};
function v(a,b,c){a.i=c;return{value:b}}
va.prototype.u=function(a){this.i=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.o=c)}
function za(a,b){a.i=b;a.s=0}
function Aa(a){a.s=0;var b=a.l.ac;a.l=null;return b}
function Ba(a){a.v=[a.l];a.s=0;a.o=0}
function Ca(a){var b=a.v.splice(0)[0];(b=a.l=a.l||b)?b.jc?a.i=a.s||a.o:void 0!=b.u&&a.o<b.u?(a.i=b.u,a.l=null):a.i=a.o:a.i=0}
function Da(a){this.i=new va;this.j=a}
function Ea(a,b){wa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.C=!1,e;var f=e.value}catch(g){return a.i.m=null,xa(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.C=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,xa(a.i,c)}a.i.C=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.jc)throw b.ac;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.N):(a.i.N(b),b=Ga(a));return b};
this.throw=function(b){wa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.N):(xa(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return pa});
n("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.C=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.o()})}this.i.push(g)};
var e=ea.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.o=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.K),reject:g(this.o)}};
b.prototype.K=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.R(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.J(g):this.s(g)}};
b.prototype.J=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.U(h,g):this.s(g)};
b.prototype.o=function(g){this.N(2,g)};
b.prototype.s=function(g){this.N(1,g)};
b.prototype.N=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.P();this.v()};
b.prototype.P=function(){var g=this;e(function(){if(g.G()){var h=ea.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.G=function(){if(this.C)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.v=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.R=function(g){var h=this.m();g.bb(h.resolve,h.reject)};
b.prototype.U=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(w,u){return"function"==typeof w?function(A){try{m(w(A))}catch(E){q(E)}}:u}
var m,q,r=new b(function(w,u){m=w;q=u});
this.bb(k(g,m),k(h,q));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.bb=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).bb(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function r(A){return function(E){w[A]=E;u--;0==u&&m(w)}}
var w=[],u=0;do w.push(void 0),u++,d(k.value).bb(r(w.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ja(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ha(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ja(h.data_,m))for(h=0;h<q.length;h++){var r=q[h];if(k!==k&&r.key!==r.key||k===r.key)return{id:m,list:q,index:h,entry:r}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||ua});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||ea});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Ma=Ma||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){a.Ab=void 0;a.getInstance=function(){return a.Ab?a.Ab:a.Ab=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Y=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Zq=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},jb=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.l=a===Cb&&b||""}
Bb.prototype.j=!0;Bb.prototype.i=function(){return this.l};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a){this.l=Eb===Eb?a:"";this.j=!0}
Fb.prototype.toString=function(){return this.l.toString()};
Fb.prototype.i=function(){return this.l.toString()};function Gb(a,b){this.l=b===Hb?a:""}
Gb.prototype.toString=function(){return this.l+""};
Gb.prototype.j=!0;Gb.prototype.i=function(){return this.l.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Lb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.l=b===Pb?a:""}
Ob.prototype.toString=function(){return this.l.toString()};
Ob.prototype.j=!0;Ob.prototype.i=function(){return this.l.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.l;Oa(a);return"type_error:SafeUrl"}
var Rb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Pb={},Sb=new Ob("about:invalid#zClosurez",Pb);function Tb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function C(a){return-1!=Tb().indexOf(a)}
;function Ub(){return C("Trident")||C("MSIE")}
function Vb(){return C("Firefox")||C("FxiOS")}
function Wb(){return C("Safari")&&!(Xb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Vb()||C("Silk")||C("Android"))}
function Xb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")||C("Silk")}
function Yb(){return C("Android")&&!(Xb()||Vb()||C("Opera")||C("Silk"))}
function Zb(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function $b(a){var b=Tb();if("Internet Explorer"===a){if(Ub())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=Zb(c);
switch(a){case "Opera":if(C("Opera"))return b(["Version","Opera"]);if(C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(C("Edge"))return b(["Edge"]);if(C("Edg/"))return b(["Edg"]);break;case "Chromium":if(Xb())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&Vb()||"Safari"===a&&Wb()||"Android Browser"===a&&Yb()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function ac(a){a=$b(a);if(""===a)return NaN;a=a.split(".");return 0===a.length?NaN:Number(a[0])}
;var bc={};function ec(a){this.l=bc===bc?a:"";this.j=!0}
ec.prototype.i=function(){return this.l.toString()};
ec.prototype.toString=function(){return this.l.toString()};function fc(a,b){b instanceof Ob||b instanceof Ob||(b="object"==typeof b&&b.j?b.i():String(b),Rb.test(b)||(b="about:invalid#zClosurez"),b=new Ob(b,Pb));a.href=Qb(b)}
function gc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=hc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function ic(){return hc("script[nonce]")}
var jc=/^[\w+/_-]+[=]{0,2}$/;function hc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&jc.test(a)?a:"":""}
;function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function sc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)rc(a[b],a[b+1],c);return c.join("&")}
function tc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function uc(a,b){var c=2==arguments.length?sc(arguments[1],0):sc(arguments,1);return qc(a,c)}
function vc(a,b){b=tc(b);return qc(a,b)}
function wc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return qc(a,b+c)}
function xc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var yc=/#|$/,zc=/[?&]($|#)/;function Ac(a,b){for(var c=a.search(yc),d=0,e,f=[];0<=(e=xc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(zc,"$1")}
;function Bc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Cc(){var a=Tb();if(C("Windows")){var b=/Windows (?:NT|Phone) ([0-9.]+)/;b.exec(a)}else Bc()||C("iPad")||C("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):C("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,(a=b.exec(a))&&a[1].replace(/_/g,".")):-1!=Tb().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b.exec(a)):C("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b.exec(a)):C("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b.exec(a))}
;function Gc(a){Gc[" "](a);return a}
Gc[" "]=function(){};
function Hc(a){var b=Ic;return Object.prototype.hasOwnProperty.call(b,9)?b[9]:b[9]=a(9)}
;var Jc=C("Opera"),Kc=Ub(),Lc=C("Edge"),Mc=C("Gecko")&&!(-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Nc=-1!=Tb().toLowerCase().indexOf("webkit")&&!C("Edge"),Oc=C("Android");function Pc(){var a=y.document;return a?a.documentMode:void 0}
var Qc;a:{var Rc="",Sc=function(){var a=Tb();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lc)return/Edge\/([\d\.]+)/.exec(a);if(Kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nc)return/WebKit\/(\S+)/.exec(a);if(Jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Sc&&(Rc=Sc?Sc[1]:"");if(Kc){var Tc=Pc();if(null!=Tc&&Tc>parseFloat(Rc)){Qc=String(Tc);break a}}Qc=Rc}var Uc=Qc,Ic={};
function Vc(){return Hc(function(){for(var a=0,b=Mb(String(Uc)).split("."),c=Mb("9").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return 0<=a})}
var Wc;if(y.document&&Kc){var Xc=Pc();Wc=Xc?Xc:parseInt(Uc,10)||void 0}else Wc=void 0;var Yc=Wc;var Zc=Bc()||C("iPod"),$c=C("iPad");Yb();Xb();var ad=Wb()&&!(Bc()||C("iPad")||C("iPod"));var bd={},cd=null;
function dd(a,b){Pa(a);void 0===b&&(b=0);if(!cd){cd={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));bd[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===cd[h]&&(cd[h]=g)}}}b=bd[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var ed="undefined"!==typeof Uint8Array;function fd(a){return ed&&null!=a&&a instanceof Uint8Array}
var gd={};var hd;function id(a,b){if(b!==gd)throw Error("illegal external caller");this.ka=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
function jd(){return hd||(hd=new id(null,gd))}
id.prototype.isEmpty=function(){return null==this.ka};var kd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function ld(a,b){Object.isFrozen(a)||(kd?a[kd]|=b:void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function md(a,b){Object.isExtensible(a)&&(kd?a[kd]&&(a[kd]&=~b):void 0!==a.ga&&(a.ga&=~b))}
function nd(a){var b;kd?b=a[kd]:b=a.ga;return null==b?0:b}
function od(a,b){kd?a[kd]=b:void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function pd(a){ld(a,1);return a}
function qd(a){ld(a,17);return a}
function rd(a){return a?!!(nd(a)&2):!1}
function sd(a){ld(a,16);return a}
function td(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");md(a,16)}
function ud(a,b){od(b,(nd(a)|0)&-51)}
;var vd={};function Ad(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Bd,Cd=Object.freeze(pd([]));function Dd(a){if(rd(a.A))throw Error("Cannot mutate an immutable Message");}
;function Ed(a){return a.displayName||a.name||"unknown type name"}
function Fd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ed(b)+" but got "+(a&&Ed(a.constructor)));return a}
;function Gd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(fd(a))return dd(a);if(a instanceof id){var b=a.ka;return null==b?"":"string"===typeof b?b:a.ka=dd(b)}}}return a}
;function Hd(a,b,c){if(null!=a){if(Array.isArray(a))a=Id(a,b,c);else if(Ad(a)){var d={},e;for(e in a)d[e]=Hd(a[e],b,c);a=d}else a=b(a);return a}}
function Id(a,b,c){var d=Array.prototype.slice.call(a);c(a,d);for(a=0;a<d.length;a++)d[a]=Hd(d[a],b,c);return d}
function Jd(a){if(a.Db===vd)return a.toJSON();a=Gd(a);return Array.isArray(a)?Id(a,Jd,Kd):a}
function Ld(a){if(!a)return a;if("object"===typeof a){if(fd(a))return new Uint8Array(a);if(a.Db===vd)return a.clone()}return a}
function Kd(){}
;function Md(a,b,c){return-1===b?null:b>=a.qa?a.S?a.S[b]:void 0:(void 0===c?0:c)&&a.S&&(c=a.S[b],null!=c)?c:a.A[b+a.ma]}
function D(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Dd(a);a.ic&&(a.ic=void 0);if(b>=a.qa||d)return(a.S||(a.S=a.A[a.qa+a.ma]={}))[b]=c,a;void 0!==a.S&&a.qa>=a.A.length?(d=a.A.length-1,e=b+a.ma,e>=d?(a.A[d]=void 0,a.A[e]=c,a.A.push(a.S)):a.A[e]=c):a.A[b+a.ma]=c;void 0!==a.S&&b in a.S&&delete a.S[b];return a}
function Nd(a,b,c,d){var e=Md(a,b,d);Array.isArray(e)||(e=Cd);var f=nd(e);f&1||pd(e);rd(a.A)?c&1||(ld(e,2),Object.freeze(e)):e===Cd||f&2?(e=pd(Array.prototype.slice.call(e)),D(a,b,e,d)):!(c&2)&&f&16&&td(e);return e}
function Od(a,b,c,d){Dd(a);(c=Pd(a,c))&&c!==b&&null!=d&&D(a,c,void 0,!1);return D(a,b,d)}
function Pd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Md(a,e)&&(0!==c&&D(a,c,void 0,!1,!0),c=e)}return c}
function Qd(a,b,c,d){var e=d=void 0===d?!1:d,f=Md(a,c,e);var g=!1;var h=null==f||"object"!==typeof f||(g=Array.isArray(f))||f.Db!==vd?g?new b(f):void 0:f;h!==f&&null!=h&&(D(a,c,h,e,!0),ld(h.A,nd(a.A)&-33));b=h;if(null==b)return b;rd(b.A)&&!rd(a.A)&&(b=Rd(b),D(a,c,b,d));return b}
function Sd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=a.i[c];d=Nd(a,c,2,d);var g=!!(nd(a.A)&16),h=rd(d);h=rd(a.A)||h;if(!f){f=[];for(var k=h,m=0;m<d.length;m++){var q=d[m];k=k||rd(q);var r=b,w=g,u=!1;u=void 0===u?!1:u;w=void 0===w?!1:w;q=Array.isArray(q)?new r(w?sd(q):q):u?new r:void 0;void 0!==q&&(f.push(q),h&&ld(q.A,2))}a.i[c]=f;b=!k;Object.isFrozen(d)||(g=nd(d)|33,od(d,b?g|8:g&-9))}e=h||e;d=rd(f);e&&!d&&(Object.isFrozen(f)&&(a.i[c]=f=f.slice()),ld(f,2),Object.freeze(f));!e&&d&&(a.i[c]=f=
f.slice());return f}
function Td(a,b,c,d){d=void 0===d?!1:d;var e=rd(a.A);b=Sd(a,b,c,d,e);a=Nd(a,c,3,d);if(!(c=e)&&(c=a)){if(!a)throw Error("cannot check mutability state of non-array");c=!(nd(a)&8)}if(c){for(c=0;c<b.length;c++)if((d=b[c])&&rd(d.A)&&!e){d=c;var f=Rd(b[c]);b[d]=f;a[c]=b[c].A}ld(a,8)}return b}
function G(a,b,c,d){Dd(a);null!=d?Fd(d,b):d=void 0;return D(a,c,d)}
function Ud(a,b,c,d,e){Dd(a);null!=e?Fd(e,b):e=void 0;Od(a,c,d,e)}
function Vd(a,b,c,d){Dd(a);if(null!=d){var e=pd([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Fd(d[g],b).A,f=f||rd(e[g]);a.i||(a.i={});a.i[c]=d;b=e;f?md(b,8):ld(b,8)}else a.i&&(a.i[c]=void 0),e=Cd;return D(a,c,e)}
function Wd(a,b,c,d){Dd(a);var e=Sd(a,c,b,void 0,!1);c=null!=d?Fd(d,c):new c;a=Nd(a,b,2);e.push(c);a.push(c.A);rd(c.A)&&md(a,8)}
function Xd(a,b){return Md(a,b)}
function Yd(a,b){return null==a?b:a}
;function Zd(a,b,c,d,e,f){(a=a.i&&a.i[c])?(e=f.rb?pd(a.slice()):a,Vd(b,0<e.length?e[0].constructor:void 0,c,e)):(ed&&d instanceof Uint8Array?e=d.length?new id(new Uint8Array(d),gd):jd():(Array.isArray(d)&&(e?ld(d,2):d&&nd(d)&1&&f.rb?(e=Array.prototype.slice.call(d),od(e,(nd(d)|0)&-51),d=e):td(d)),e=d),D(b,c,e))}
;function Rd(a){if(!rd(a.A))return a;var b={rb:!0},c=rd(a.A);if(c&&!b.rb)throw Error("copyRepeatedFields must be true for frozen messages");c||td(a.A);var d=new a.constructor;a.La&&(d.La=a.La.slice());for(var e=a.A,f=0;f<e.length;f++){var g=e[f];if(f===e.length-1&&Ad(g))for(var h in g){var k=+h;Number.isNaN(k)?(d.S||(d.S=d.A[d.qa+d.ma]={}))[h]=g[h]:Zd(a,d,k,g[h],c,b)}else Zd(a,d,f-a.ma,g,c,b)}d.ic=a;return d}
;function I(a,b,c){a||(a=$d);$d=null;var d=this.constructor.i||0,e=0<d,f=this.constructor.j,g=!1;if(!a){var h=f?[f]:[];ld(h,48);a=h;h=!0}else if(h=!!(nd(a)&16))g=nd(a),od(a,g|32),g=!!(g&32);e&&0<a.length&&Ad(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.ma=(f?0:-1)-d;this.i=void 0;this.A=a;a:{f=this.A.length;d=f-1;if(f&&(f=this.A[d],Ad(f))){this.S=f;b=Object.keys(f);0<b.length&&jb(b,isNaN)?this.qa=Number.MAX_VALUE:this.qa=d-this.ma;break a}void 0!==b&&-1<b?(this.qa=Math.max(b,d+1-this.ma),this.S=
void 0):this.qa=Number.MAX_VALUE}if(!e&&this.S&&"g"in this.S)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=h&&!g?qd:pd,b=0;b<c.length;b++)h=c[b],(g=Md(this,h))?Array.isArray(g)&&e(g):D(this,h,Cd,!1,!0)}
l=I.prototype;l.toJSON=function(){var a=this.A;return Bd?a:Id(a,Jd,Kd)};
function ae(a){Bd=!0;try{return JSON.stringify(a.toJSON(),be)}finally{Bd=!1}}
l.clone=function(){var a=Id(this.A,Ld,ud);sd(a);$d=a;a=new this.constructor(a);$d=null;ce(a,this);return a};
l.isMutable=function(){return!rd(this.A)};
l.Db=vd;l.toString=function(){return this.A.toString()};
function be(a,b){return Gd(b)}
function ce(a,b){b.La&&(a.La=b.La.slice());var c=b.i;if(c){b=b.S;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=Td(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)ce(f[g],e[g])}else throw Error("unexpected object: type: "+Oa(e)+": "+e);}}}}
var $d;function de(a){var b=this.i,c=this.j;return this.isRepeated?Td(a,b,c,!0):Qd(a,b,c,!0)}
;function ee(a){this.Ub=a}
;function fe(a,b,c){this.j=a;this.m=b;this.i=c||[];this.Ba=new Map}
l=fe.prototype;l.Gc=function(a){var b=Ja.apply(1,arguments),c=this.ub(b);c?c.push(new ee(a)):this.vc(a,b)};
l.vc=function(a){this.Ba.set(this.cc(Ja.apply(1,arguments)),[new ee(a)])};
l.ub=function(){var a=this.cc(Ja.apply(0,arguments));return this.Ba.has(a)?this.Ba.get(a):void 0};
l.Tc=function(){var a=this.ub(Ja.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.Ba.clear()};
l.cc=function(){var a=Ja.apply(0,arguments);return a?a.join(","):"key"};function ge(a,b){fe.call(this,a,3,b)}
t(ge,fe);ge.prototype.l=function(a){var b=Ja.apply(1,arguments),c=0,d=this.Tc(b);d&&(c=d.Ub);this.vc(c+a,b)};function he(a,b){fe.call(this,a,2,b)}
t(he,fe);he.prototype.l=function(a){this.Gc(a,Ja.apply(1,arguments))};function ie(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function je(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?je.apply(null,d):ie(d)}}
;function J(){this.N=this.N;this.C=this.C}
J.prototype.N=!1;J.prototype.i=function(){return this.N};
J.prototype.dispose=function(){this.N||(this.N=!0,this.D())};
function ke(a,b){le(a,Xa(ie,b))}
function le(a,b){a.N?b():(a.C||(a.C=[]),a.C.push(b))}
J.prototype.D=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
me.prototype.stopPropagation=function(){this.l=!0};
me.prototype.preventDefault=function(){this.defaultPrevented=!0};function ne(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=oe(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,pe[c])c=pe[c];else{c=String(c);if(!pe[c]){var f=/function\s+([^\(]+)/m.exec(c);pe[c]=f?f[1]:"[Anonymous]"}c=pe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function oe(a,b){b||(b={});b[qe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[qe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=oe(a,b));return c}
function qe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var pe={};var re=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function se(a,b){me.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Za(se,me);var te={2:"touch",3:"pen",4:"mouse"};
se.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(Mc){a:{try{Gc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:te[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&se.Y.preventDefault.call(this)};
se.prototype.stopPropagation=function(){se.Y.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
se.prototype.preventDefault=function(){se.Y.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ue="closure_listenable_"+(1E6*Math.random()|0);var ve=0;function we(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.gb=e;this.key=++ve;this.Na=this.ab=!1}
function xe(a){a.Na=!0;a.listener=null;a.proxy=null;a.src=null;a.gb=null}
;function ye(a){this.src=a;this.listeners={};this.i=0}
ye.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=Ee(a,b,d,e);-1<g?(b=a[g],c||(b.ab=!1)):(b=new we(b,this.src,f,!!d,e),b.ab=c,a.push(b));return b};
ye.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ee(e,b,c,d);return-1<b?(xe(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Fe(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(xe(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function Ee(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Na&&f.listener==b&&f.capture==!!c&&f.gb==d)return e}return-1}
;var Ge="closure_lm_"+(1E6*Math.random()|0),He={},Ie=0;function Je(a,b,c,d,e){if(d&&d.once)Ke(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Le(c),a&&a[ue]?a.aa(b,c,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!1,d,e)}
function Me(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Ne(a);h||(a[Ge]=h=new ye(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Oe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)re||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Pe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ie++}}
function Oe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Qe;return a}
function Ke(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ke(a,b[f],c,d,e);else c=Le(c),a&&a[ue]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Me(a,b,c,!0,d,e)}
function Re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Re(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Le(c),a&&a[ue])?a.m.remove(String(b),c,d,e):a&&(a=Ne(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ee(b,c,d,e)),(c=-1<a?b[a]:null)&&Se(c))}
function Se(a){if("number"!==typeof a&&a&&!a.Na){var b=a.src;if(b&&b[ue])Fe(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Pe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ie--;(c=Ne(b))?(Fe(c,a),0==c.i&&(c.src=null,b[Ge]=null)):xe(a)}}}
function Pe(a){return a in He?He[a]:He[a]="on"+a}
function Qe(a,b){if(a.Na)a=!0;else{b=new se(b,this);var c=a.listener,d=a.gb||a.src;a.ab&&Se(a);a=c.call(d,b)}return a}
function Ne(a){a=a[Ge];return a instanceof ye?a:null}
var Te="__closure_events_fn_"+(1E9*Math.random()>>>0);function Le(a){if("function"===typeof a)return a;a[Te]||(a[Te]=function(b){return a.handleEvent(b)});
return a[Te]}
;function Ue(){J.call(this);this.m=new ye(this);this.Dc=this;this.la=null}
Za(Ue,J);Ue.prototype[ue]=!0;Ue.prototype.addEventListener=function(a,b,c,d){Je(this,a,b,c,d)};
Ue.prototype.removeEventListener=function(a,b,c,d){Re(this,a,b,c,d)};
function Ve(a,b){var c=a.la;if(c){var d=[];for(var e=1;c;c=c.la)d.push(c),++e}a=a.Dc;c=b.type||b;"string"===typeof b?b=new me(b,a):b instanceof me?b.target=b.target||a:(e=b,b=new me(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=We(g,c,!0,b)&&e}b.l||(g=b.i=a,e=We(g,c,!0,b)&&e,b.l||(e=We(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=We(g,c,!1,b)&&e}
Ue.prototype.D=function(){Ue.Y.D.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,xe(d[e]);delete a.listeners[c];a.i--}}this.la=null};
Ue.prototype.aa=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function We(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Na&&g.capture==c){var h=g.listener,k=g.gb||g.src;g.ab&&Fe(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Xe(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
Xe.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function Ye(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;function Ze(a,b){return a+Math.random()*(b-a)}
;function $e(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=$e.prototype;l.clone=function(){return new $e(this.x,this.y)};
l.equals=function(a){return a instanceof $e&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function af(a,b){this.width=a;this.height=b}
l=af.prototype;l.clone=function(){return new af(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function bf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function cf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function df(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var ef;function ff(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=cf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Tb;c.Tb=null;e()}};
return function(e){d.next={Tb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function gf(a){y.setTimeout(function(){throw a;},0)}
;function hf(){this.j=this.i=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
hf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var jf=new Xe(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.i=null}
kf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.i=null};var lf,mf=!1,nf=new hf;function of(a,b){lf||pf();mf||(lf(),mf=!0);nf.add(a,b)}
function pf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);lf=function(){a.then(qf)}}else lf=function(){var b=qf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!C("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(ef||(ef=ff()),ef(b)):y.setImmediate(b)}}
function qf(){for(var a;a=nf.remove();){try{a.i.call(a.scope)}catch(b){gf(b)}Ye(jf,a)}mf=!1}
;function rf(a){this.i=0;this.C=void 0;this.m=this.j=this.l=null;this.o=this.s=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){sf(b,2,c)},function(c){sf(b,3,c)})}catch(c){sf(this,3,c)}}
function tf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
tf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var uf=new Xe(function(){return new tf},function(a){a.reset()});
function vf(a,b,c){var d=uf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function wf(a){return new rf(function(b,c){c(a)})}
rf.prototype.then=function(a,b,c){return xf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
rf.prototype.$goog_Thenable=!0;l=rf.prototype;l.nb=function(a,b){return xf(this,null,a,b)};
l.catch=rf.prototype.nb;l.cancel=function(a){if(0==this.i){var b=new yf(a);of(function(){zf(this,b)},this)}};
function zf(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?zf(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):Af(c),Bf(c,e,3,b)))}a.l=null}else sf(a,3,b)}
function Cf(a,b){a.j||2!=a.i&&3!=a.i||Df(a);a.m?a.m.next=b:a.j=b;a.m=b}
function xf(a,b,c,d){var e=vf(null,null,null);e.i=new rf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof yf?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;Cf(a,e);return e.i}
l.Cd=function(a){this.i=0;sf(this,2,a)};
l.Dd=function(a){this.i=0;sf(this,3,a)};
function sf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.Cd,f=a.Dd;if(d instanceof rf){Cf(d,vf(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Ef(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.C=c,a.i=b,a.l=null,Df(a),3!=b||c instanceof yf||Ff(a,c))}}
function Ef(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Df(a){a.s||(a.s=!0,of(a.Rc,a))}
function Af(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
l.Rc=function(){for(var a;a=Af(this);)Bf(this,a,this.i,this.C);this.s=!1};
function Bf(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.o;a=a.l)a.o=!1;if(b.i)b.i.l=null,Gf(b,c,d);else try{b.l?b.j.call(b.context):Gf(b,c,d)}catch(e){Hf.call(null,e)}Ye(uf,b)}
function Gf(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ff(a,b){a.o=!0;of(function(){a.o&&Hf.call(null,b)})}
var Hf=gf;function yf(a){ab.call(this,a)}
Za(yf,ab);yf.prototype.name="cancel";function If(a,b){Ue.call(this);this.l=a||1;this.j=b||y;this.o=Wa(this.Ad,this);this.s=Date.now()}
Za(If,Ue);l=If.prototype;l.enabled=!1;l.ca=null;function Jf(a,b){a.l=b;a.ca&&a.enabled?(a.stop(),a.start()):a.ca&&a.stop()}
l.Ad=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.l?this.ca=this.j.setTimeout(this.o,this.l-a):(this.ca&&(this.j.clearTimeout(this.ca),this.ca=null),Ve(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.ca||(this.ca=this.j.setTimeout(this.o,this.l),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.ca&&(this.j.clearTimeout(this.ca),this.ca=null)};
l.D=function(){If.Y.D.call(this);this.stop();delete this.j};
function Kf(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function Lf(a){this.C=a;this.i=new Map;this.s=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.j=new If(this.flushInterval);this.j.aa("tick",this.pb,!1,this);this.o=!1}
l=Lf.prototype;l.tc=function(a){this.o=a;this.m=1};
function Mf(a){a.j.enabled||a.j.start();a.l++;a.l>=a.m&&a.pb()}
l.pb=function(){var a=this.i.values();a=[].concat(ia(a)).filter(function(b){return b.Ba.size});
a.length&&this.C.flush(a,this.o);Nf(a);this.l=0;this.j.enabled&&this.j.stop()};
l.Hc=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new ge(a,b))};
l.Rb=function(a){var b=Ja.apply(1,arguments);this.i.has(a)||this.i.set(a,new he(a,b))};
function Of(a,b){return a.s.has(b)?void 0:a.i.get(b)}
l.Lb=function(a){this.Bc.apply(this,[a,1].concat(ia(Ja.apply(1,arguments))))};
l.Bc=function(a,b){var c=Ja.apply(2,arguments),d=Of(this,a);d&&d instanceof ge&&(d.l(b,c),Mf(this))};
l.ob=function(a,b){var c=Ja.apply(2,arguments),d=Of(this,a);d&&d instanceof he&&(d.l(b,c),Mf(this))};
function Nf(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Pf(a){this.i=a;this.i.Rb("/client_streamz/bg/fil",{tb:3,sb:"rk"})}
function Qf(a){this.i=a;this.i.Hc("/client_streamz/bg/fsc",{tb:3,sb:"rk"})}
function Rf(a){this.i=a;this.i.Rb("/client_streamz/bg/fsl",{tb:3,sb:"rk"})}
;function Sf(a){I.call(this,a,-1,Tf)}
t(Sf,I);function Uf(a){I.call(this,a,-1,Vf)}
t(Uf,I);function Wf(a){I.call(this,a)}
t(Wf,I);function Xf(a){I.call(this,a)}
t(Xf,I);var Tf=[3,6,4],Vf=[1],Yf=[1,2,3],Zf=[1,2,3];function $f(a){I.call(this,a,-1,ag)}
t($f,I);var ag=[1];function bg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function cg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(r){for(var w=g,u=0;64>u;u+=4)w[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=w[u-3]^w[u-8]^w[u-14]^w[u-16],w[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],E=e[2],F=e[3],O=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var N=F^A&(E^F);var R=1518500249}else N=A^E^F,R=1859775393;else 60>u?(N=A&E|F&(A|E),R=2400959708):(N=A^E^F,R=3395469782);N=((r<<5|r>>>27)&4294967295)+N+O+R+w[u]&4294967295;O=F;F=E;E=(A<<30|A>>>2)&4294967295;A=r;r=N}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+E&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+O&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,E=r.length;A<E;++A)u.push(r.charCodeAt(A));r=u}w||(w=r.length);u=0;if(0==m)for(;u+64<w;)b(r.slice(u,u+64)),u+=64,q+=64;for(;u<w;)if(f[m++]=r[u++],q++,64==m)for(m=0,b(f);u+64<w;)b(r.slice(u,u+64)),u+=64,q+=64}
function d(){var r=[],w=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=w&255,w>>>=8;b(f);for(u=w=0;5>u;u++)for(var A=24;0<=A;A-=8)r[w++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Nc:function(){for(var r=d(),w="",u=0;u<r.length;u++)w+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return w}}}
;function dg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,eg(bg(d),a,c||null)].join(" "):null}
function eg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),fg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=fg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function fg(a){var b=cg();b.update(a);return b.Nc().toLowerCase()}
;var gg={};function hg(a){this.i=a||{cookie:""}}
l=hg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.tr;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ib}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ib:0,path:b,domain:c});return d};
l.xb=function(){return ig(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=ig(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ig(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var jg=new hg("undefined"==typeof document?null:document);function kg(a){return!!gg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function lg(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;kg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new hg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");kg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function mg(a,b,c,d){(a=y[a])||(a=(new hg(document)).get(b));return a?dg(a,c,d):null}
function ng(a,b){b=void 0===b?!1:b;var c=bg(String(y.location.href)),d=[];if(lg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new hg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?dg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&kg(b)&&((b=mg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=mg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function og(a){I.call(this,a,-1,pg)}
t(og,I);var pg=[2];function qg(a){this.i=this.j=this.l=a}
qg.prototype.reset=function(){this.i=this.j=this.l};
qg.prototype.getValue=function(){return this.j};function rg(a){var b=[];sg(new tg,a,b);return b.join("")}
function tg(){}
function sg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),sg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ug(d,c),c.push(":"),sg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ug(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var vg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},wg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ug(a,b){b.push('"',a.replace(wg,function(c){var d=vg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),vg[c]=d);return d}),'"')}
;function xg(){}
xg.prototype.i=null;xg.prototype.getOptions=function(){var a;(a=this.i)||(a={},yg(this)&&(a[0]=!0,a[1]=!0),a=this.i=a);return a};var zg;function Ag(){}
Za(Ag,xg);function Bg(a){return(a=yg(a))?new ActiveXObject(a):new XMLHttpRequest}
function yg(a){if(!a.j&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.j=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.j}
zg=new Ag;function Cg(a){Ue.call(this);this.headers=new Map;this.K=a||null;this.j=!1;this.J=this.B=null;this.o=this.U="";this.l=this.R=this.v=this.P=!1;this.s=0;this.G=null;this.da="";this.W=this.X=!1}
Za(Cg,Ue);var Dg=/^https?$/i,Eg=["POST","PUT"],Fg=[];function Gg(a,b,c,d,e,f,g){var h=new Cg;Fg.push(h);b&&h.aa("complete",b);h.m.add("ready",h.Lc,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.X=g);h.send(a,c,d,e)}
l=Cg.prototype;l.Lc=function(){this.dispose();lb(Fg,this)};
l.send=function(a,b,c,d){if(this.B)throw Error("[goog.net.XhrIo] Object is active with another request="+this.U+"; newUri="+a);b=b?b.toUpperCase():"GET";this.U=a;this.o="";this.P=!1;this.j=!0;this.B=this.K?Bg(this.K):Bg(zg);this.J=this.K?this.K.getOptions():zg.getOptions();this.B.onreadystatechange=Wa(this.lc,this);try{this.getStatus(),this.R=!0,this.B.open(b,String(a),!0),this.R=!1}catch(g){this.getStatus();Hg(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=p(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=eb(Eg,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=p(c);for(d=b.next();!d.done;d=b.next())c=p(d.value),d=c.next().value,c=c.next().value,this.B.setRequestHeader(d,c);this.da&&(this.B.responseType=this.da);"withCredentials"in this.B&&this.B.withCredentials!==this.X&&(this.B.withCredentials=this.X);try{Ig(this),0<this.s&&(this.W=Jg(this.B),this.getStatus(),this.W?(this.B.timeout=this.s,this.B.ontimeout=Wa(this.xc,this)):
this.G=Kf(this.xc,this.s,this)),this.getStatus(),this.v=!0,this.B.send(a),this.v=!1}catch(g){this.getStatus(),Hg(this,g)}};
function Jg(a){return Kc&&Vc()&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.xc=function(){"undefined"!=typeof Ma&&this.B&&(this.o="Timed out after "+this.s+"ms, aborting",this.getStatus(),Ve(this,"timeout"),this.abort(8))};
function Hg(a,b){a.j=!1;a.B&&(a.l=!0,a.B.abort(),a.l=!1);a.o=b;Kg(a);Lg(a)}
function Kg(a){a.P||(a.P=!0,Ve(a,"complete"),Ve(a,"error"))}
l.abort=function(){this.B&&this.j&&(this.getStatus(),this.j=!1,this.l=!0,this.B.abort(),this.l=!1,Ve(this,"complete"),Ve(this,"abort"),Lg(this))};
l.D=function(){this.B&&(this.j&&(this.j=!1,this.l=!0,this.B.abort(),this.l=!1),Lg(this,!0));Cg.Y.D.call(this)};
l.lc=function(){this.i()||(this.R||this.v||this.l?Mg(this):this.dd())};
l.dd=function(){Mg(this)};
function Mg(a){if(a.j&&"undefined"!=typeof Ma)if(a.J[1]&&4==Ng(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Ng(a))Kf(a.lc,0,a);else if(Ve(a,"readystatechange"),a.isComplete()){a.getStatus();a.j=!1;try{if(Og(a))Ve(a,"complete"),Ve(a,"success");else{try{var b=2<Ng(a)?a.B.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Kg(a)}}finally{Lg(a)}}}
function Lg(a,b){if(a.B){Ig(a);var c=a.B,d=a.J[0]?function(){}:null;
a.B=null;a.J=null;b||Ve(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function Ig(a){a.B&&a.W&&(a.B.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
l.isActive=function(){return!!this.B};
l.isComplete=function(){return 4==Ng(this)};
function Og(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=nc(1,String(a.U)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!Dg.test(a?a.toLowerCase():"");c=b}return c}
function Ng(a){return a.B?a.B.readyState:0}
l.getStatus=function(){try{return 2<Ng(this)?this.B.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.o?this.o:String(this.o)};function Pg(a){I.call(this,a)}
t(Pg,I);function Qg(a){I.call(this,a,-1,Rg)}
t(Qg,I);var Rg=[1];var Sg=["platform","platformVersion","architecture","model","uaFullVersion"];new Qg;function Vg(a){I.call(this,a)}
t(Vg,I);function Wg(a){I.call(this,a,31,Xg)}
t(Wg,I);var Xg=[3,20,27];function Yg(a){I.call(this,a,17,Zg)}
t(Yg,I);var Zg=[3,5];function $g(a){I.call(this,a,6,ah)}
t($g,I);var ah=[5];function bh(a){I.call(this,a)}
t(bh,I);var ch;ch=new function(a,b,c){this.j=a;this.fieldName=b;this.i=c;this.isRepeated=0;this.l=de}(175237375,{hr:0},bh);function dh(a,b,c,d,e,f,g,h,k,m,q){Ue.call(this);var r=this;this.P="";this.l=[];this.Pb="";this.Qb=this.va=-1;this.Xa=!1;this.J=this.o=null;this.G=0;this.Ec=1;this.timeoutMillis=0;this.da=!1;Ue.call(this);this.Ob=b||function(){};
this.v=new eh(a,f);this.Cc=d;this.Wa=q;this.Fc=Xa(Ze,0,1);this.U=e||null;this.K=c||null;this.W=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Ia=f||!1;!this.Ia&&(65<=ac("Chromium")||45<=ac("Firefox")||12<=ac("Safari")||(Bc()||C("iPad")||C("iPod"))&&Cc());a=D(new Vg,1,1);fh(this.v,a);this.s=new qg(1E4);this.j=new If(this.s.getValue());ke(this,this.j);m=gh(this,m);Je(this.j,"tick",m,!1,this);this.R=new If(6E5);ke(this,this.R);Je(this.R,"tick",m,!1,this);this.W||this.R.start();
this.Ia||(Je(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.X()}),Je(document,"pagehide",this.X,!1,this))}
t(dh,Ue);function gh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
dh.prototype.D=function(){this.X();Ue.prototype.D.call(this)};
function hh(a){a.U||(a.U=.01>a.Fc()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.U}
function ih(a,b){a.s=new qg(1>b?1:b);Jf(a.j,a.s.getValue())}
dh.prototype.log=function(a){a=a.clone();var b=this.Ec++;D(a,21,b);this.P&&D(a,26,this.P);if(!Md(a,1)){b=a;var c=Date.now().toString();D(b,1,c)}null!=Md(a,15,!1)||D(a,15,60*(new Date).getTimezoneOffset());this.o&&(b=this.o.clone(),G(a,og,16,b));for(;1E3<=this.l.length;)this.l.shift(),++this.G;this.l.push(a);Ve(this,new jh(a));this.W||this.j.enabled||this.j.start()};
dh.prototype.flush=function(a,b){var c=this;if(0===this.l.length)a&&a();else if(this.da)kh(this);else{var d=Date.now();if(this.Qb>d&&this.va<d)b&&b("throttled");else{var e=lh(this.v,this.l,this.G);d={};var f=this.Ob();f&&(d.Authorization=f);var g=hh(this);this.K&&(d["X-Goog-AuthUser"]=this.K,g=wc(g,"authuser",this.K));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=wc(g,"pageId",this.pageId));if(f&&this.Pb===f)b&&b("stale-auth-token");else{this.l=[];this.j.enabled&&this.j.stop();this.G=0;var h=ae(e),
k;this.J&&this.J.isSupported(h.length)&&(k=this.J.compress(h));var m={url:g,body:h,Jc:1,Hb:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},q=function(u){c.s.reset();Jf(c.j,c.s.getValue());if(u){var A=null;try{var E=JSON.parse(u.replace(")]}'\n",""));A=new $g(E)}catch(F){}A&&(u=Number(Yd(Md(A,1),"-1")),0<u&&(c.va=Date.now(),c.Qb=c.va+u),A=ch.l(A))&&(A=Yd(Md(A,1),-1),-1!=A&&(c.Xa||ih(c,A)))}a&&a()},r=function(u,A){var E=Td(e,Wg,3),F=c.s;
F.i=Math.min(3E5,2*F.i);F.j=Math.min(3E5,F.i+Math.round(.2*(Math.random()-.5)*F.i));Jf(c.j,c.s.getValue());401===u&&f&&(c.Pb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.l=E.concat(c.l),c.W||c.j.enabled||c.j.start());b&&b("net-send-failed",u)},w=function(){c.Wa?c.Wa.send(m,q,r):c.Cc(m,q,r)};
k?k.then(function(u){m.Hb["Content-Encoding"]="gzip";m.Hb["Content-Type"]="application/binary";m.body=u;m.Jc=2;w()},function(){w()}):w()}}}};
dh.prototype.X=function(){this.flush()};
function kh(a){mh(a,function(b,c){b=wc(b,"format","json");b=window.navigator.sendBeacon(b,ae(c));a.da&&!b&&(a.da=!1);return b})}
function mh(a,b){if(0!==a.l.length){var c=Ac(hh(a),"format");c=uc(c,"auth",a.Ob(),"authuser",a.K||"0");for(var d=0;10>d&&a.l.length;++d){var e=a.l.slice(0,32),f=lh(a.v,e,a.G);if(!b(c,f))break;a.G=0;a.l=a.l.slice(e.length)}a.j.enabled&&a.j.stop()}}
function jh(){me.call(this,"event-logged",void 0)}
t(jh,me);function eh(a,b){this.j=b=void 0===b?!1:b;this.uach=this.locale=null;this.i=new Yg;D(this.i,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));fh(this,new Vg)}
function fh(a,b){G(a.i,Vg,1,b);Md(b,1)||D(b,1,1);a.j||(b=nh(a),Md(b,5)||D(b,5,a.locale));a.uach&&(b=nh(a),Qd(b,Qg,9)||G(b,Qg,9,a.uach))}
function oh(a,b){var c=void 0===c?Sg:c;b(window,c).then(function(d){a.uach=d;d=nh(a);G(d,Qg,9,a.uach);return!0}).catch(function(){return!1})}
function nh(a){a=Qd(a.i,Vg,1);var b=Qd(a,Pg,11);b||(b=new Pg,G(a,Pg,11,b));return b}
function lh(a,b,c){c=void 0===c?0:c;a=a.i.clone();var d=Date.now().toString();a=D(a,4,d);b=Vd(a,Wg,3,b);c&&D(b,14,c);return b}
;function ph(a,b,c){Gg(a.url,function(d){d=d.target;if(Og(d)){try{var e=d.B?d.B.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Hb,a.timeoutMillis,a.withCredentials)}
;function qh(){this.l="https://play.google.com/log?format=json&hasfast=true";this.v=!1;this.o=ph;this.i=""}
;function rh(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new qh;c.i="";""!=a&&(c.l=a);b&&(c.j=b);a=new dh(1828,c.J?c.J:ng,"0",c.o,c.l,c.v,!1,c.R,void 0,void 0,c.s?c.s:void 0);c.N&&fh(a.v,c.N);if(c.j){b=c.j;var d=nh(a.v);D(d,7,b)}c.m&&(a.J=c.m);c.i&&(a.P=c.i);c.C&&((b=c.C)?(a.o||(a.o=new og),b=ae(b),D(a.o,4,b)):a.o&&D(a.o,4,void 0,!1));c.K&&(d=c.K,a.o||(a.o=new og),b=a.o,null==d?d=Cd:pd(d),D(b,2,d));c.G&&(b=c.G,a.Xa=!0,ih(a,b));c.P&&oh(a.v,c.P);this.i=a}
rh.prototype.flush=function(a){var b=a||[];if(b.length){a=new $f;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Sf;var h=D(g,1,f.j);var k=f;g=[];for(var m=0;m<k.i.length;m++)g.push(k.i[m].sb);if(null==g)g=Cd;else{for(k=0;k<g.length;k++);ld(g,5)}g=D(h,3,g);h=[];k=[];m=p(f.Ba.keys());for(var q=m.next();!q.done;q=m.next())k.push(q.value.split(","));for(m=0;m<k.length;m++){q=k[m];var r=f.m;for(var w=f.ub(q)||[],u=[],A=0;A<w.length;A++){var E=w[A];E=E&&E.Ub;var F=new Xf;switch(r){case 3:Od(F,1,
Zf,Number(E));break;case 2:Od(F,2,Zf,Number(E))}u.push(F)}r=u;for(w=0;w<r.length;w++){u=r[w];A=new Uf;u=G(A,Xf,2,u);A=q;E=[];F=f;for(var O=[],N=0;N<F.i.length;N++)O.push(F.i[N].tb);F=O;for(O=0;O<F.length;O++){N=F[O];var R=A[O],da=new Wf;switch(N){case 3:Od(da,1,Yf,String(R));break;case 2:Od(da,2,Yf,Number(R));break;case 1:Od(da,3,Yf,"true"==R)}E.push(da)}Vd(u,Wf,1,E);h.push(u)}}Vd(g,Uf,4,h);c.push(g);e.clear()}Vd(a,Sf,1,c);b=this.i;a instanceof Wg?b.log(a):(c=new Wg,a=ae(a),a=D(c,8,a),b.log(a));this.i.flush()}};function sh(){this.s=th();this.m=new rh;this.i=new Lf(this.m);this.o=new Pf(this.i);this.j=new Qf(this.i);this.l=new Rf(this.i);this.Ea=window.document.location.hostname}
function th(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function uh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function vh(a){var b=this;this.eb=!1;if(a.hd){var c;this.wa=null!=(c=a.wa)?c:new sh}c=a.program;a=a.globalName;var d=new uh;this.j=d.promise;this.yd=p((0,y[a].a)(c,function(e,f){Promise.resolve().then(function(){var g;if(null!=(g=b.wa)){var h=th()-g.s;g.o.i.ob("/client_streamz/bg/fil",h,g.Ea)}d.resolve({Ic:e,vd:f})})},!0)).next().value;
this.ud=d.promise.then(function(){})}
vh.prototype.snapshot=function(a){var b=this;if(this.eb)throw Error("Already disposed");var c=th(),d;null!=(d=this.wa)&&d.j.i.Lb("/client_streamz/bg/fsc",d.Ea);return this.j.then(function(e){var f=e.Ic;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.wa)){var m=th()-c;k.l.i.ob("/client_streamz/bg/fsl",m,k.Ea)}g(h)},[a.Wb,
a.wd])})})};
vh.prototype.dispose=function(){var a;null!=(a=this.wa)&&a.i.pb();this.eb=!0;this.j.then(function(b){(b=b.vd)&&b()})};
vh.prototype.i=function(){return this.eb};var wh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var xh;try{new URL("s://g"),xh=!0}catch(a){xh=!1}var yh=xh;function zh(a,b){a.src=Ib(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Ah(a){var b=Bh;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ch(){var a=[];Ah(function(b){a.push(b)});
return a}
var Bh={Rd:"allow-forms",Sd:"allow-modals",Td:"allow-orientation-lock",Ud:"allow-pointer-lock",Vd:"allow-popups",Wd:"allow-popups-to-escape-sandbox",Xd:"allow-presentation",Yd:"allow-same-origin",Zd:"allow-scripts",ae:"allow-top-navigation",be:"allow-top-navigation-by-user-activation"},Dh=db(function(){return Ch()});
function Eh(){var a=Fh(),b={};fb(Dh(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fh(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Gh(a){this.isValid=a}
function Hh(a){return new Gh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ih=[Hh("data"),Hh("http"),Hh("https"),Hh("mailto"),Hh("ftp"),new Gh(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Jh(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Kh=(new Date).getTime();var Lh="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Lh);function Mh(a){Ue.call(this);var b=this;this.v=this.l=0;this.Z=null!=a?a:{T:function(e,f){return setTimeout(e,f)},
fa:function(e){clearTimeout(e)}};
var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return x(function(e){return v(e,Nh(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.v||Oh(this)}
t(Mh,Ue);function Ph(){var a=Qh;Mh.i||(Mh.i=new Mh(a));return Mh.i}
Mh.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Z.fa(this.v);delete Mh.i};
Mh.prototype.L=function(){return this.j};
function Oh(a){a.v=a.Z.T(function(){var b;return x(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):v(c,Nh(a),3):v(c,Nh(a),3);Oh(a);c.i=0})},3E4)}
function Nh(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.l=a.Z.T(function(){d.abort()},b||2E4)),v(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ba(h);a.s=void 0;a.l&&(a.Z.fa(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ve(a,"networkstatus-online"):Ve(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Aa(h),g=!1,h.u(3)}})})}
;var Rh={Eq:"WEB_DISPLAY_MODE_UNKNOWN",Aq:"WEB_DISPLAY_MODE_BROWSER",Cq:"WEB_DISPLAY_MODE_MINIMAL_UI",Dq:"WEB_DISPLAY_MODE_STANDALONE",Bq:"WEB_DISPLAY_MODE_FULLSCREEN"};function Sh(){this.data_=[];this.i=-1}
Sh.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Sh.prototype.get=function(a){return!!this.data_[a]};
function Th(a){-1===a.i&&(a.i=ib(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Uh(a,b){this.i=a[y.Symbol.iterator]();this.j=b}
Uh.prototype[Symbol.iterator]=function(){return this};
Uh.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function Vh(a,b){return new Uh(a,b)}
;function Wh(){this.blockSize=-1}
;function Xh(){this.blockSize=-1;this.blockSize=64;this.i=[];this.o=[];this.s=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Za(Xh,Wh);Xh.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function Yh(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
Xh.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.j;d<b;){if(0==f)for(;d<=c;)Yh(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Yh(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Yh(this,e);f=0;break}}this.j=f;this.m+=b}};
Xh.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Yh(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function Zh(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function $h(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ai(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Zh(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function bi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ai(a,"inverted-hdpi")&&$h(a,Array.prototype.filter.call(a.classList?a.classList:Zh(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function ci(){}
ci.prototype.next=function(){return di};
var di={done:!0,value:void 0};function ei(a){return{value:a,done:!1}}
ci.prototype.ea=function(){return this};function fi(a){if(a instanceof gi||a instanceof hi||a instanceof ii)return a;if("function"==typeof a.next)return new gi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new gi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ea)return new gi(function(){return a.ea()});
throw Error("Not an iterator or iterable.");}
function gi(a){this.j=a}
gi.prototype.ea=function(){return new hi(this.j())};
gi.prototype[Symbol.iterator]=function(){return new ii(this.j())};
gi.prototype.i=function(){return new ii(this.j())};
function hi(a){this.j=a}
t(hi,ci);hi.prototype.next=function(){return this.j.next()};
hi.prototype[Symbol.iterator]=function(){return new ii(this.j)};
hi.prototype.i=function(){return new ii(this.j)};
function ii(a){gi.call(this,function(){return a});
this.l=a}
t(ii,gi);ii.prototype.next=function(){return this.l.next()};function ji(a,b){this.j={};this.i=[];this.ra=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ji)for(c=a.xb(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=ji.prototype;l.xb=function(){ki(this);return this.i.concat()};
l.has=function(a){return li(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||mi;ki(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function mi(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.ra=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return li(this.j,a)?(delete this.j[a],--this.size,this.ra++,this.i.length>2*this.size&&ki(this),!0):!1};
function ki(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];li(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],li(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return li(this.j,a)?this.j[a]:b};
l.set=function(a,b){li(this.j,a)||(this.size+=1,this.i.push(a),this.ra++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.xb(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new ji(this)};
l.keys=function(){return fi(this.ea(!0)).i()};
l.values=function(){return fi(this.ea(!1)).i()};
l.entries=function(){var a=this;return Vh(this.keys(),function(b){return[b,a.get(b)]})};
l.ea=function(a){ki(this);var b=0,c=this.ra,d=this,e=new ci;e.next=function(){if(c!=d.ra)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return di;var f=d.i[b++];return ei(a?f:d.j[f])};
return e};
function li(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function K(a){J.call(this);this.s=1;this.m=[];this.o=0;this.j=[];this.l={};this.v=!!a}
Za(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.s=e+3;d.push(e);return e};
function ni(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Ha(b)}}
l.Ha=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&lb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ta=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];oi(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.Ha(c)}}return 0!=e}return!1};
function oi(a,b,c){of(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Ha,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.D=function(){K.Y.D.call(this);this.clear();this.m.length=0};function pi(a){this.i=a}
pi.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,rg(b))};
pi.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pi.prototype.remove=function(a){this.i.remove(a)};function qi(a){this.i=a}
Za(qi,pi);function ri(a){this.data=a}
function si(a){return void 0===a||a instanceof ri?a:new ri(a)}
qi.prototype.set=function(a,b){qi.Y.set.call(this,a,si(b))};
qi.prototype.j=function(a){a=qi.Y.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qi.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ti(a){this.i=a}
Za(ti,qi);ti.prototype.set=function(a,b,c){if(b=si(b)){if(c){if(c<Date.now()){ti.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}ti.Y.set.call(this,a,b)};
ti.prototype.j=function(a){var b=ti.Y.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())ti.prototype.remove.call(this,a);else return b}};function ui(){}
;function vi(){}
Za(vi,ui);vi.prototype[Symbol.iterator]=function(){return fi(this.ea(!0)).i()};
vi.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function wi(a){this.i=a}
Za(wi,vi);l=wi.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.ea=function(a){var b=0,c=this.i,d=new ci;d.next=function(){if(b>=c.length)return di;var e=c.key(b++);if(a)return ei(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ei(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function xi(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Za(xi,wi);function yi(a,b){this.j=a;this.i=null;var c;if(c=Kc)c=!(9<=Number(Yc));if(c){zi||(zi=new ji);this.i=zi.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),zi.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Za(yi,vi);var Ai={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zi=null;function Bi(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ai[b]})}
l=yi.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(Bi(a),b);Ci(this)};
l.get=function(a){a=this.i.getAttribute(Bi(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(Bi(a));Ci(this)};
l.ea=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new ci;d.next=function(){if(b>=c.length)return di;var e=c[b++];if(a)return ei(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return ei(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ci(this)};
function Ci(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Di(a,b){this.j=a;this.i=b+"::"}
Za(Di,vi);Di.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Di.prototype.get=function(a){return this.j.get(this.i+a)};
Di.prototype.remove=function(a){this.j.remove(this.i+a)};
Di.prototype.ea=function(a){var b=this.j[Symbol.iterator](),c=this,d=new ci;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return ei(a?e.slice(c.i.length):c.j.get(e))};
return d};function Ei(a){I.call(this,a)}
t(Ei,I);function Fi(a){I.call(this,a)}
t(Fi,I);Fi.prototype.getKey=function(){return Md(this,1)};
Fi.prototype.getValue=function(){return Xd(this,2===Pd(this,Gi)?2:-1)};
Fi.prototype.setValue=function(a){return Od(this,2,Gi,a)};
var Gi=[2,3,4,5,6];function Hi(a){I.call(this,a)}
t(Hi,I);function Ii(a){I.call(this,a)}
t(Ii,I);function Ji(a){I.call(this,a,-1,Ki)}
t(Ji,I);var Ki=[2];function Li(a){I.call(this,a,-1,Mi)}
t(Li,I);Li.prototype.getPlayerType=function(){return Md(this,36)};
Li.prototype.setHomeGroupInfo=function(a){return G(this,Ji,81,a)};
Li.prototype.clearLocationPlayabilityToken=function(){return D(this,89,void 0,!1)};
var Mi=[9,66,24,32,86,100,101];function Ni(a){I.call(this,a,-1,Oi)}
t(Ni,I);var Oi=[15,26,28];function Pi(a){I.call(this,a)}
t(Pi,I);Pi.prototype.setToken=function(a){return D(this,2,a)};function Qi(a){I.call(this,a,-1,Ri)}
t(Qi,I);Qi.prototype.setSafetyMode=function(a){return D(this,5,a)};
var Ri=[12];function Si(a){I.call(this,a,-1,Ti)}
t(Si,I);Si.prototype.s=function(a){G(this,Li,1,a)};
var Ti=[12];function Ui(a){this.name=a}
;var Vi=new Ui("continuationCommand");var Wi=new Ui("webCommandMetadata");var Xi=new Ui("signalServiceEndpoint");var Yi={oi:"EMBEDDED_PLAYER_MODE_UNKNOWN",li:"EMBEDDED_PLAYER_MODE_DEFAULT",ni:"EMBEDDED_PLAYER_MODE_PFP",mi:"EMBEDDED_PLAYER_MODE_PFL"};var Zi=new Ui("feedbackEndpoint");function $i(a){I.call(this,a,-1,aj)}
t($i,I);function bj(a){I.call(this,a)}
t(bj,I);bj.prototype.getKey=function(){return Yd(Md(this,1),"")};
bj.prototype.getValue=function(){return Yd(Md(this,2),"")};
bj.prototype.setValue=function(a){return D(this,2,a)};
var aj=[4,5];function cj(a){I.call(this,a)}
t(cj,I);function dj(a){I.call(this,a)}
t(dj,I);var ej=[2,3,4];function fj(a){I.call(this,a)}
t(fj,I);fj.prototype.getMessage=function(){return Yd(Md(this,1),"")};function gj(a){I.call(this,a)}
t(gj,I);function hj(a){I.call(this,a)}
t(hj,I);function ij(a){I.call(this,a,-1,jj)}
t(ij,I);var jj=[10,17];function kj(a){I.call(this,a)}
t(kj,I);function lj(a){I.call(this,a)}
t(lj,I);function mj(a){I.call(this,a)}
t(mj,I);function nj(a){I.call(this,a)}
t(nj,I);function oj(a){I.call(this,a)}
t(oj,I);function pj(a,b){G(a,mj,1,b)}
oj.prototype.j=function(a){D(this,2,a)};
function qj(a){I.call(this,a)}
t(qj,I);function rj(a,b){G(a,mj,1,b)}
;function sj(a){I.call(this,a,-1,tj)}
t(sj,I);sj.prototype.j=function(a){D(this,1,a)};
function uj(a,b){G(a,mj,2,b)}
var tj=[3];function vj(a){I.call(this,a)}
t(vj,I);vj.prototype.j=function(a){D(this,1,a)};function wj(a){I.call(this,a)}
t(wj,I);wj.prototype.j=function(a){D(this,1,a)};function xj(a){I.call(this,a)}
t(xj,I);xj.prototype.j=function(a){D(this,1,a)};function yj(a){I.call(this,a)}
t(yj,I);yj.prototype.j=function(a){D(this,1,a)};function zj(a){I.call(this,a)}
t(zj,I);function Aj(a){I.call(this,a)}
t(Aj,I);function Bj(a){I.call(this,a,-1,Cj)}
t(Bj,I);Bj.prototype.getPlayerType=function(){var a=Md(this,7);return null==a?0:a};
Bj.prototype.setVideoId=function(a){return D(this,19,a)};
function Dj(a,b){Wd(a,68,Ej,b)}
function Ej(a){I.call(this,a)}
t(Ej,I);Ej.prototype.getId=function(){return Yd(Md(this,2),"")};
var Cj=[83,68];function Fj(a){I.call(this,a)}
t(Fj,I);function Gj(a){I.call(this,a)}
t(Gj,I);function Hj(a){I.call(this,a)}
t(Hj,I);function Ij(a){I.call(this,a,442)}
t(Ij,I);
var Jj=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];var Kj={pj:0,aj:1,gj:2,hj:4,mj:8,ij:16,jj:32,oj:64,nj:128,cj:256,ej:512,lj:1024,dj:2048,fj:4096,bj:8192,kj:16384};function Lj(a){I.call(this,a)}
t(Lj,I);function Mj(a){I.call(this,a)}
t(Mj,I);Mj.prototype.setVideoId=function(a){return Od(this,1,Nj,a)};
Mj.prototype.getPlaylistId=function(){return Xd(this,2===Pd(this,Nj)?2:-1)};
var Nj=[1,2];function Oj(a){I.call(this,a,-1,Pj)}
t(Oj,I);var Pj=[3];var Qj=new Ui("webPlayerShareEntityServiceEndpoint");var Rj=new Ui("playlistEditEndpoint");var Sj=new Ui("modifyChannelNotificationPreferenceEndpoint");var Tj=new Ui("unsubscribeEndpoint");var Uj=new Ui("subscribeEndpoint");function Vj(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Wj=y.window,Xj,sk,tk=(null==Wj?void 0:null==(Xj=Wj.yt)?void 0:Xj.config_)||(null==Wj?void 0:null==(sk=Wj.ytcfg)?void 0:sk.data_)||{};z("yt.config_",tk);function uk(){Vj(tk,arguments)}
function L(a,b){return a in tk?tk[a]:b}
function vk(){var a=tk.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=wk(a);return"string"===typeof a&&"false"===a?!1:!!a}
function xk(a,b){a=wk(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function yk(){return L("EXPERIMENTS_TOKEN","")}
function wk(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function zk(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Ak=[];function Bk(a){Ak.forEach(function(b){return b(a)})}
function Ck(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Dk(b)}}:a}
function Dk(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),uk("ERRORS",e));Bk(a)}
function Ek(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),uk("ERRORS",e))}
;function Fk(){var a=Gk;B("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Hk(a){z("yt.ads.biscotti.lastId_",a)}
;var Ik=/^[\w.]*$/,Jk={q:!0,search_query:!0};function Kk(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Lk(f[0]||""),h=Lk(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var k=r,m=f[0],q=String(Kk);k.args=[{key:m,value:f[1],query:a,method:Mk==q?"unchanged":q}];Jk.hasOwnProperty(m)||Ek(k)}}return c}
var Mk=String(Kk);function Nk(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];fb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Ok(a){"?"==a.charAt(0)&&(a=a.substr(1));return Kk(a,"&")}
function Pk(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Ok(1<a.length?a[1]:a[0])):{}}
function Qk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ok(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return vc(a,e)+d}
function Rk(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(nc(4,b))||null)==(Number(nc(4,a))||null):!0;return a}
function Lk(a){return a&&a.match(Ik)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Sk(a){var b=Tk;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Kh;e.flash="0";a:{try{var f=b.i.top.location.href}catch(fa){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?wh:g;try{var h=g.history.length}catch(fa){h=0}e.u_his=h;var k;e.u_h=null==(k=wh.screen)?void 0:k.height;var m;e.u_w=null==(m=wh.screen)?void 0:m.width;var q;e.u_ah=null==(q=wh.screen)?void 0:q.availHeight;var r;e.u_aw=
null==(r=wh.screen)?void 0:r.availWidth;var w;e.u_cd=null==(w=wh.screen)?void 0:w.colorDepth}catch(fa){}h=b.i;try{var u=h.screenX;var A=h.screenY}catch(fa){}try{var E=h.outerWidth;var F=h.outerHeight}catch(fa){}try{var O=h.innerWidth;var N=h.innerHeight}catch(fa){}try{var R=h.screenLeft;var da=h.screenTop}catch(fa){}try{O=h.innerWidth,N=h.innerHeight}catch(fa){}try{var W=h.screen.availWidth;var pb=h.screen.availTop}catch(fa){}u=[R,da,u,A,W,pb,E,F,O,N];try{var Ya=(b.i.top||window).document,ma="CSS1Compat"==
Ya.compatMode?Ya.documentElement:Ya.body;var H=(new af(ma.clientWidth,ma.clientHeight)).round()}catch(fa){H=new af(-12245933,-12245933)}Ya=H;H={};var la=void 0===la?y:la;ma=new Sh;la.SVGElement&&la.document.createElementNS&&ma.set(0);A=Eh();A["allow-top-navigation-by-user-activation"]&&ma.set(1);A["allow-popups-to-escape-sandbox"]&&ma.set(2);la.crypto&&la.crypto.subtle&&ma.set(3);la.TextDecoder&&la.TextEncoder&&ma.set(4);la=Th(ma);H.bc=la;H.bih=Ya.height;H.biw=Ya.width;H.brdim=u.join();b=b.j;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!wh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Tk=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Nk(Sk(a))});Date.now();var Uk="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function Vk(){if(!Uk)return null;var a=Uk();return"open"in a?a:null}
function Wk(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Xk(a,b){"function"===typeof a&&(a=Ck(a));return window.setTimeout(a,b)}
function Yk(a){window.clearTimeout(a)}
;var Zk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},$k="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Lh)),al=!1;
function bl(a,b){b=void 0===b?{}:b;var c=Rk(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in Zk){var f=L(Zk[e]);"X-Goog-Visitor-Id"!==e||f||(f=L("VISITOR_DATA"));!f||!c&&oc(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!oc(a))b["X-YouTube-Ad-Signals"]=Nk(Sk());return b}
function cl(a){var b=window.location.search,c=oc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!Rk(a)||(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ok(b),f={};fb($k,function(g){e[g]&&(f[g]=e[g])});
return Qk(a,f||{},!1)}
function dl(a,b){var c=b.format||"JSON";a=el(a,b);var d=fl(a,b),e=!1,f=gl(a,function(k){if(!e){e=!0;h&&Yk(h);var m=Wk(k),q=null,r=400<=k.status&&500>k.status,w=500<=k.status&&600>k.status;if(m||r||w)q=hl(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};r=b.context||y;m?b.onSuccess&&b.onSuccess.call(r,k,q):b.onError&&b.onError.call(r,k,q);b.onFinish&&b.onFinish.call(r,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Xk(function(){e||(e=!0,f.abort(),Yk(h),g.call(b.context||y,f))},d)}return f}
function el(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Qk(a,b||{},!0);return a}
function fl(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(M("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Ok(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):tc(e));f=e||f&&!rb(f);!al&&f&&"POST"!=b.method&&(al=!0,Dk(Error("AJAX request with postData should use POST")));return e}
function hl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ek(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?il(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=jl(g)})}d&&kl(e);
return e}
function kl(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Db("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new ec(d)}else kl(a[b])}}
function il(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function jl(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function gl(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ck(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Vk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=cl(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=bl(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function ll(a){var b=this;this.j=void 0;this.i=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.j=c});
a.addEventListener("appinstalled",function(){b.i=!0},{once:!0})}
function ml(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function nl(a,b,c,d,e){jg.set(""+a,b,{ib:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function ol(a,b,c){jg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function pl(){if(!jg.isEnabled())return!1;if(!jg.isEmpty())return!0;jg.set("TESTCOOKIESENABLED","1",{ib:60});if("1"!==jg.get("TESTCOOKIESENABLED"))return!1;jg.remove("TESTCOOKIESENABLED");return!0}
;var ql=B("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",ql);function rl(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=jg.get(""+this.i,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ql[d]=c.toString())}}}
rl.prototype.get=function(a,b){sl(a);tl(a);a=void 0!==ql[a]?ql[a].toString():null;return null!=a?a:b?b:""};
rl.prototype.set=function(a,b){sl(a);tl(a);if(null==b)throw Error("ExpectedNotNull");ql[a]=b.toString()};
function ul(a){return!!((vl("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
rl.prototype.remove=function(a){sl(a);tl(a);delete ql[a]};
rl.prototype.clear=function(){for(var a in ql)delete ql[a]};
function tl(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function sl(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function vl(a){a=void 0!==ql[a]?ql[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Na(rl);var wl={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},xl={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},yl={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},zl={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Al(){var a=y.navigator;return a?a.connection:void 0}
function Bl(){var a=Al();if(a){var b=wl[a.type||"unknown"]||"CONN_UNKNOWN";a=wl[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function Cl(){var a=Al();if(null!=a&&a.effectiveType)return zl.hasOwnProperty(a.effectiveType)?zl[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function Dl(){return"INNERTUBE_API_KEY"in tk&&"INNERTUBE_API_VERSION"in tk}
function El(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),zb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ec:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Vc:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),hc:L("INNERTUBE_CONTEXT_HL"),fc:L("INNERTUBE_CONTEXT_GL"),Wc:L("INNERTUBE_HOST_OVERRIDE")||"",Yc:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Xc:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fl(a){var b={client:{hl:a.hc,gl:a.fc,clientName:a.ec,clientVersion:a.innertubeContextClientVersion,configInfo:a.zb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=yk();""!==c&&(b.client.experimentsToken=c);c=zk();0<c.length&&(b.request={internalExperimentFlags:c});Gl(a,void 0,b);Hl(void 0,b);Il(a,void 0,b);Jl(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(Ok(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Kl(a){var b=new Si,c=new Li;D(c,1,a.hc);D(c,2,a.fc);D(c,16,a.Vc);D(c,17,a.innertubeContextClientVersion);if(a.zb){var d=a.zb,e=new Hi;d.coldConfigData&&D(e,1,d.coldConfigData);d.appInstallData&&D(e,6,d.appInstallData);d.coldHashData&&D(e,3,d.coldHashData);d.hotHashData&&D(e,5,d.hotHashData);G(c,Hi,62,e)}(d=y.devicePixelRatio)&&1!=d&&D(c,65,d);d=yk();""!==d&&D(c,54,d);d=zk();if(0<d.length){e=new Ni;for(var f=0;f<d.length;f++){var g=new Fi;D(g,1,d[f].key);g.setValue(d[f].value);Wd(e,15,Fi,
g)}G(b,Ni,5,e)}Gl(a,c);Hl(c);Il(a,c);Jl(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Qi,D(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(Ok(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?D(c,12,e):"cmodel"===d?D(c,13,e):"cbr"===d?D(c,87,e):"cbrver"===d?D(c,88,e):"cos"===d?D(c,18,e):"cosver"===d?D(c,19,e):"cplatform"===d&&D(c,42,e);b.s(c);return b}
function Gl(a,b,c){a=a.ec;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Qd(b,Ii,96)||new Ii;var d=ml();d=Object.keys(Rh).indexOf(d);d=-1===d?null:d;null!==d&&D(c,3,d);G(b,Ii,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=ml())}
function Hl(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?D(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Il(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Qd(b,Hi,62))?d:new Hi;D(c,6,a.appInstallData);G(b,Hi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Jl(a,b){var c=Bl();c&&(a?D(a,61,xl[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=Cl())&&(a?D(a,94,yl[c]):b&&(b.client.effectiveConnectionType=c))}
function Ll(a,b,c){c=void 0===c?{}:c;var d={};L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Yq||L("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Xq:b=ng([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function Ml(a){a=Object.assign({},a);delete a.Authorization;var b=ng();if(b){var c=new Xh;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=dd(c.digest(),3)}return a}
;function Nl(a){var b=new xi;(b=b.isAvailable()?a?new Di(b,a):b:null)||(a=new yi(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new ti(a):null;this.j=document.domain||window.location.hostname}
Nl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(rg(b))}catch(f){return}else e=escape(b);nl(a,e,c,this.j)};
Nl.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=jg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Nl.prototype.remove=function(a){this.i&&this.i.remove(a);ol(a,"/",this.j)};var Ol=window,P=Ol.ytcsi&&Ol.ytcsi.now?Ol.ytcsi.now:Ol.performance&&Ol.performance.timing&&Ol.performance.now&&Ol.performance.timing.navigationStart?function(){return Ol.performance.timing.navigationStart+Ol.performance.now()}:function(){return(new Date).getTime()};var Pl;function Ql(){Pl||(Pl=new Nl("yt.innertube"));return Pl}
function Rl(a,b,c,d){if(d)return null;d=Ql().get("nextId",!0)||1;var e=Ql().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ml(c),requestTime:Math.round(P())};Ql().set("nextId",d+1,86400,!0);Ql().set("requests",e,86400,!0);return d}
function Sl(a){var b=Ql().get("requests",!0)||{};delete b[a];Ql().set("requests",b,86400,!0)}
function Tl(a){var b=Ql().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=Ml(Ll(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Ul(a,d.method,e,{}));delete b[c]}}Ql().set("requests",b,86400,!0)}}
;function Vl(){}
Vl.prototype.T=function(a,b){return Wl(a,1,b)};
function Xl(a,b){Wl(a,2,b)}
function Yl(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Zl(){Vl.apply(this,arguments)}
t(Zl,Vl);function $l(){Zl.i||(Zl.i=new Zl);return Zl.i}
function Wl(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Xk(a,c||0)}
Zl.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):Yk(a)}};
Zl.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Zl.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};var Qh=$l();var am=Zc||$c;function bm(a){var b=Tb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var cm=function(){var a;return function(){a||(a=new Nl("ytidb"));return a}}();
function dm(){var a;return null==(a=cm())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var em=[],fm,gm=!1;function hm(){var a={};for(fm=new im(void 0===a.handleError?jm:a.handleError,void 0===a.logEvent?km:a.logEvent);0<em.length;)switch(a=em.shift(),a.type){case "ERROR":fm.handleError(a.payload);break;case "EVENT":fm.logEvent(a.eventType,a.payload)}}
function lm(a){gm||(fm?fm.handleError(a):(em.push({type:"ERROR",payload:a}),10<em.length&&em.shift()))}
function mm(a,b){gm||(fm?fm.logEvent(a,b):(em.push({type:"EVENT",eventType:a,payload:b}),10<em.length&&em.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
t(Q,Error);function nm(){try{return om(),!0}catch(a){return!1}}
function om(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function pm(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qm(a){return a.substr(0,a.indexOf(":"))||a}
;var rm={},sm=(rm.AUTH_INVALID="No user identifier specified.",rm.EXPLICIT_ABORT="Transaction was explicitly aborted.",rm.IDB_NOT_SUPPORTED="IndexedDB is not supported.",rm.MISSING_INDEX="Index not created.",rm.MISSING_OBJECT_STORES="Object stores not created.",rm.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",rm.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",rm.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
rm.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",rm.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",rm.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",rm.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",rm),tm={},um=(tm.AUTH_INVALID="ERROR",tm.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",tm.EXPLICIT_ABORT="IGNORED",tm.IDB_NOT_SUPPORTED="ERROR",tm.MISSING_INDEX=
"WARNING",tm.MISSING_OBJECT_STORES="ERROR",tm.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",tm.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",tm.QUOTA_EXCEEDED="WARNING",tm.QUOTA_MAYBE_EXCEEDED="WARNING",tm.UNKNOWN_ABORT="WARNING",tm.INCOMPATIBLE_DB_VERSION="WARNING",tm),vm={},wm=(vm.AUTH_INVALID=!1,vm.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,vm.EXPLICIT_ABORT=!1,vm.IDB_NOT_SUPPORTED=!1,vm.MISSING_INDEX=!1,vm.MISSING_OBJECT_STORES=!1,vm.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,vm.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,vm.QUOTA_EXCEEDED=!1,vm.QUOTA_MAYBE_EXCEEDED=!0,vm.UNKNOWN_ABORT=!0,vm.INCOMPATIBLE_DB_VERSION=!1,vm);function xm(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?sm[a]:c;d=void 0===d?um[a]:d;e=void 0===e?wm[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,xm.prototype)}
t(xm,Q);function ym(a,b){xm.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},sm.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ym.prototype)}
t(ym,xm);function zm(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,zm.prototype)}
t(zm,Error);var Am=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Bm(a,b,c,d){b=qm(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof xm)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new xm("QUOTA_EXCEEDED",a);if(ad&&"UnknownError"===e.name)return new xm("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof zm)return new xm("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Am.some(function(f){return e.message.includes(f)}))return new xm("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new xm("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",mc:e.name})];e.level="WARNING";return e}
function Cm(a,b,c){var d=dm();return new xm("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Dm(a){if(!a)throw Error();throw a;}
function Em(a){return a}
function Fm(a){this.i=a}
function Gm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
Gm.all=function(a){return new Gm(new Fm(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={Aa:0};f.Aa<a.length;f={Aa:f.Aa},++f.Aa)Gm.resolve(a[f.Aa]).then(function(g){return function(h){d[g.Aa]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Gm.resolve=function(a){return new Gm(new Fm(function(b,c){a instanceof Gm?a.then(b,c):b(a)}))};
Gm.reject=function(a){return new Gm(new Fm(function(b,c){c(a)}))};
Gm.prototype.then=function(a,b){var c=this,d=null!=a?a:Em,e=null!=b?b:Dm;return new Gm(new Fm(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Hm(c,c,d,f,g)}),c.onRejected.push(function(){Im(c,c,e,f,g)})):"FULFILLED"===c.state.status?Hm(c,c,d,f,g):"REJECTED"===c.state.status&&Im(c,c,e,f,g)}))};
Gm.prototype.catch=function(a){return this.then(void 0,a)};
function Hm(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Gm?Jm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Im(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Gm?Jm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Jm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Gm?Jm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Km(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Lm(a){return new Promise(function(b,c){Km(a,b,c)})}
function Mm(a){return new Gm(new Fm(function(b,c){Km(a,b,c)}))}
;function Nm(a,b){return new Gm(new Fm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Om(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Om.prototype;l.add=function(a,b,c){return Pm(this,[a],{mode:"readwrite",V:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Pm(this,[a],{mode:"readwrite",V:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Pm(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).count(b)})};
function Qm(a,b,c){a=a.i.createObjectStore(b,c);return new Rm(a)}
l.delete=function(a,b){return Pm(this,[a],{mode:"readwrite",V:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Pm(this,[a],{mode:"readonly",V:!0},function(c){return c.objectStore(a).get(b)})};
function Sm(a,b){return Pm(a,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(c){c=c.objectStore("LogsRequestsStore");return Mm(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Pm(a,b,c,d){var e,f,g,h,k,m,q,r,w,u,A,E;return x(function(F){switch(F.i){case 1:var O={mode:"readonly",V:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?O.mode=c:Object.assign(O,c);e=O;a.transactionCount++;f=e.V?3:1;g=0;case 2:if(h){F.u(3);break}g++;k=Math.round(P());ya(F,4);m=a.i.transaction(b,e.mode);O=new Tm(m);O=Um(O,d);return v(F,O,6);case 6:return q=F.j,r=Math.round(P()),Vm(a,k,r,g,void 0,b.join(),e),F.return(q);case 4:w=Aa(F);u=Math.round(P());A=Bm(w,a.i.name,b.join(),a.i.version);
if((E=A instanceof xm&&!A.i)||g>=f)Vm(a,k,u,g,A,b.join(),e),h=A;F.u(2);break;case 3:return F.return(Promise.reject(h))}})}
function Vm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof xm&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&mm("QUOTA_EXCEEDED",{dbName:qm(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof xm&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),mm("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Wm(a,!1,d,f,b,g.tag),lm(e)):Wm(a,!0,d,f,b,g.tag)}
function Wm(a,b,c,d,e,f){mm("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Rm(a){this.i=a}
l=Rm.prototype;l.add=function(a,b){return Mm(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Mm(this.i.clear()).then(function(){})};
l.count=function(a){return Mm(this.i.count(a))};
function Xm(a,b){return Ym(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Xm(this,a):Mm(this.i.delete(a))};
l.get=function(a){return Mm(this.i.get(a))};
l.index=function(a){try{return new Zm(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new zm(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Ym(a,b,c){a=a.i.openCursor(b.query,b.direction);return $m(a).then(function(d){return Nm(d,c)})}
function Tm(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=xm;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Um(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Tm.prototype.abort=function(){this.i.abort();this.j=!0;throw new xm("EXPLICIT_ABORT");};
Tm.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Rm(a),this.l.set(a,b));return b};
function Zm(a){this.i=a}
l=Zm.prototype;l.count=function(a){return Mm(this.i.count(a))};
l.delete=function(a){return an(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Mm(this.i.get(a))};
l.getKey=function(a){return Mm(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function an(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return $m(a).then(function(d){return Nm(d,c)})}
function bn(a,b){this.request=a;this.cursor=b}
function $m(a){return Mm(a).then(function(b){return b?new bn(a,b):null})}
l=bn.prototype;l.advance=function(a){this.cursor.advance(a);return $m(this.request)};
l.continue=function(a){this.cursor.continue(a);return $m(this.request)};
l.delete=function(){return Mm(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Mm(this.cursor.update(a))};function cn(a,b,c){return new Promise(function(d,e){function f(){w||(w=new Om(g.result,{closed:r}));return w}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.zd,q=c.upgrade,r=c.closed,w;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&mm("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:qm(a)});var A=f(),E=new Tm(g.transaction);
q&&q(A,function(F){return u.oldVersion<F&&u.newVersion>=F},E);
E.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var u=g.result;k&&u.addEventListener("versionchange",function(){k(f())});
u.addEventListener("close",function(){mm("IDB_UNEXPECTEDLY_CLOSED",{dbName:qm(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function dn(a,b,c){c=void 0===c?{}:c;return cn(a,b,c)}
function en(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),v(g,Lm(c),4);
if(2!=g.i)return za(g,0);f=Aa(g);throw Bm(f,a,"",-1);})}
;function fn(a){return new Promise(function(b){Xl(function(){b()},a)})}
function gn(a,b){this.name=a;this.options=b;this.m=!0;this.s=this.o=0;this.j=500}
gn.prototype.l=function(a,b,c){c=void 0===c?{}:c;return dn(a,b,c)};
gn.prototype.delete=function(a){a=void 0===a?{}:a;return en(this.name,a)};
function hn(a,b){return new xm("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function jn(a,b){if(!b)throw Cm("openWithToken",qm(a.name));return kn(a)}
function kn(a){function b(){var f,g,h,k,m,q,r,w,u,A;return x(function(E){switch(E.i){case 1:return g=null!=(f=Error().stack)?f:"",ya(E,2),v(E,a.l(a.name,a.options.version,d),4);case 4:h=E.j;for(var F=a.options,O=[],N=p(Object.keys(F.Ma)),R=N.next();!R.done;R=N.next()){R=R.value;var da=F.Ma[R],W=void 0===da.jd?Number.MAX_VALUE:da.jd;!(h.i.version>=da.qb)||h.i.version>=W||h.i.objectStoreNames.contains(R)||O.push(R)}k=O;if(0===k.length){E.u(5);break}m=Object.keys(a.options.Ma);q=h.objectStoreNames();
if(a.s<xk("ytidb_reopen_db_retries",0))return a.s++,h.close(),lm(new xm("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());if(!(a.o<xk("ytidb_remake_db_retries",1))){E.u(6);break}a.o++;if(!M("ytidb_remake_db_enable_backoff_delay")){E.u(7);break}return v(E,fn(a.j),8);case 8:a.j*=2;case 7:return v(E,a.delete(),9);case 9:return lm(new xm("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),E.return(b());
case 6:throw new ym(q,m);case 5:return E.return(h);case 2:r=Aa(E);if(r instanceof DOMException?"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){E.u(10);break}return v(E,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:w=E.j;u=w.i.version;if(void 0!==a.options.version&&u>a.options.version+1)throw w.close(),
a.m=!1,hn(a,u);return E.return(w);case 10:throw c(),r instanceof Error&&!M("ytidb_async_stack_killswitch")&&(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),Bm(r,a.name,"",null!=(A=a.options.version)?A:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw hn(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,zd:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var ln=new gn("YtIdbMeta",{Ma:{databases:{qb:1}},upgrade:function(a,b){b(1)&&Qm(a,"databases",{keyPath:"actualName"})}});
function mn(a,b){var c;return x(function(d){if(1==d.i)return v(d,jn(ln,b),2);c=d.j;return d.return(Pm(c,["databases"],{V:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Mm(f.i.put(a,void 0)).then(function(){})})}))})}
function nn(a,b){var c;return x(function(d){if(1==d.i)return a?v(d,jn(ln,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function on(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],v(e,jn(ln,b),2)):3!=e.i?(d=e.j,v(e,Pm(d,["databases"],{V:!0,mode:"readonly"},function(f){c.length=0;return Ym(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function pn(a){return on(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function qn(a,b,c){return on(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function rn(a){var b,c;return x(function(d){if(1==d.i)return b=om("YtIdbMeta hasAnyMeta other"),v(d,on(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var sn,tn=new function(){}(new function(){});
function un(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=dm();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=am)f=/WebKit\/([0-9]+)/.exec(Tb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Tb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return v(e,mn(d,tn),4);case 4:return v(e,nn("yt-idb-test-do-not-use",tn),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function vn(){if(void 0!==sn)return sn;gm=!0;return sn=un().then(function(a){gm=!1;var b;if(null!=(b=cm())&&b.i){var c;b={hasSucceededOnce:(null==(c=dm())?void 0:c.hasSucceededOnce)||a};var d;null==(d=cm())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function wn(){return B("ytglobal.idbToken_")||void 0}
function xn(){var a=wn();return a?Promise.resolve(a):vn().then(function(b){(b=b?tn:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var yn=0;function zn(a,b){yn||(yn=Qh.T(function(){var c,d,e,f,g;return x(function(h){switch(h.i){case 1:return v(h,xn(),2);case 2:c=h.j;if(!c)return h.return();d=!0;ya(h,3);return v(h,qn(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return v(h,en(f.actualName),7);case 7:return v(h,nn(f.actualName,c),6);case 6:za(h,4);break;case 3:g=Aa(h),lm(g),d=!1;case 4:Qh.fa(yn),yn=0,d&&zn(a,b),h.i=0}})}))}
function An(){var a;return x(function(b){return 1==b.i?v(b,xn(),2):(a=b.j)?b.return(rn(a)):b.return(!1)})}
new uh;function Bn(a){if(!nm())throw a=new xm("AUTH_INVALID",{dbName:a}),lm(a),a;var b=om();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Cn(a,b,c,d){var e,f,g,h,k,m;return x(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",v(q,xn(),2);case 2:g=q.j;if(!g)throw h=Cm("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),lm(h),h;pm(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Bn(a);ya(q,3);return v(q,mn(k,g),5);case 5:return v(q,dn(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=Aa(q),ya(q,7),v(q,nn(k.actualName,g),9);case 9:za(q,
8);break;case 7:Aa(q);case 8:throw m;}})}
function Dn(a,b,c){c=void 0===c?{}:c;return Cn(a,b,!1,c)}
function En(a,b,c){c=void 0===c?{}:c;return Cn(a,b,!0,c)}
function Fn(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return v(e,xn(),2);if(3!=e.i){c=e.j;if(!c)return e.return();pm(a);d=Bn(a);return v(e,en(d.actualName,b),3)}return v(e,nn(d.actualName,c),0)})}
function Gn(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?v(e,en(d.actualName,b),2):v(e,nn(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Hn(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return v(d,xn(),2);if(3!=d.i){b=d.j;if(!b)return d.return();pm("LogsDatabaseV2");return v(d,pn(b),3)}c=d.j;return v(d,Gn(c,a,b),0)})}
function In(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return v(d,xn(),2);if(3!=d.i){c=d.j;if(!c)return d.return();pm(a);return v(d,en(a,b),3)}return v(d,nn(a,c),0)})}
;function Jn(a){this.Za=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.Da=function(){};
this.now=Date.now;this.Ka=!1;var b;this.wc=null!=(b=a.wc)?b:100;var c;this.sc=null!=(c=a.sc)?c:1;var d;this.pc=null!=(d=a.pc)?d:2592E6;var e;this.nc=null!=(e=a.nc)?e:12E4;var f;this.qc=null!=(f=a.qc)?f:5E3;var g;this.H=null!=(g=a.H)?g:void 0;this.fb=!!a.fb;var h;this.cb=null!=(h=a.cb)?h:.1;var k;this.kb=null!=(k=a.kb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Da&&(this.Da=a.Da);a.Ka&&(this.Ka=a.Ka);a.Za&&(this.Za=a.Za);this.I=a.I;this.Z=a.Z;this.O=a.O;this.M=a.M;this.ja=a.ja;this.Fb=
a.Fb;this.Eb=a.Eb;Kn(this)&&(!this.I||this.I("networkless_logging"))&&Ln(this)}
function Ln(a){Kn(a)&&!a.Ka&&(a.i=!0,a.fb&&Math.random()<=a.cb&&a.O.Kc(a.H),Mn(a),a.M.L()&&a.Qa(),a.M.aa(a.Fb,a.Qa.bind(a)),a.M.aa(a.Eb,a.Sb.bind(a)))}
l=Jn.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Kn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O.set(d,this.H).then(function(e){d.id=e;c.M.L()&&Nn(c,d)}).catch(function(e){Nn(c,d);
On(c,e)})}else this.ja(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Kn(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.I&&this.I("nwl_skip_retry")&&(e.skipRetry=c);if(this.M.L()||this.I&&this.I("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return v(k,d.O.set(e,d.H).catch(function(m){On(d,m)}),2);
f(g,h);k.i=0})}}this.ja(a,b,e.skipRetry)}else this.O.set(e,this.H).catch(function(g){d.ja(a,b,e.skipRetry);
On(d,g)})}else this.ja(a,b,this.I&&this.I("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Kn(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.O.Ca(d.id,c.H):e=!0;c.M.ia&&c.I&&c.I("vss_network_hint")&&c.M.ia(!0);f(g,h)};
this.ja(d.url,d.options);this.O.set(d,this.H).then(function(g){d.id=g;e&&c.O.Ca(d.id,c.H)}).catch(function(g){On(c,g)})}else this.ja(a,b)};
l.Qa=function(){var a=this;if(!Kn(this))throw Cm("throttleSend");this.j||(this.j=this.Z.T(function(){var b;return x(function(c){if(1==c.i)return v(c,a.O.dc("NEW",a.H),2);if(3!=c.i)return b=c.j,b?v(c,Nn(a,b),3):(a.Sb(),c.return());a.j&&(a.j=0,a.Qa());c.i=0})},this.wc))};
l.Sb=function(){this.Z.fa(this.j);this.j=0};
function Nn(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!Kn(a))throw c=Cm("immediateSend"),c;if(void 0===b.id){e.u(2);break}return v(e,a.O.bd(b.id,a.H),3);case 3:(d=e.j)?b=d:a.Da(Error("The request cannot be found in the database."));case 2:if(Pn(a,b,a.pc)){e.u(4);break}a.Da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return v(e,a.O.Ca(b.id,a.H),5);case 5:return e.return();case 4:b.skipRetry||(b=Qn(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return v(e,a.O.Ca(b.id,a.H),8);case 8:a.ja(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Qn(a,b){if(!Kn(a))throw Cm("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:g=Rn(f);if(!(a.I&&a.I("nwl_consider_error_code")&&g||a.I&&!a.I("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.kb)){m.u(2);break}if(!a.M.Oa){m.u(3);break}return v(m,a.M.Oa(),3);case 3:if(a.M.L()){m.u(2);break}c(e,f);if(!a.I||!a.I("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return v(m,a.O.Ib(b.id,a.H,!1),6);case 6:return m.return();case 2:if(a.I&&a.I("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.kb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.sc?v(m,a.O.Ib(b.id,a.H),12):v(m,a.O.Ca(b.id,a.H),8);case 12:a.Z.T(function(){a.M.L()&&a.Qa()},a.qc);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):v(h,a.O.Ca(b.id,a.H),2);a.M.ia&&a.I&&a.I("vss_network_hint")&&a.M.ia(!0);d(e,f);h.i=0})};
return b}
function Pn(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Mn(a){if(!Kn(a))throw Cm("retryQueuedRequests");a.O.dc("QUEUED",a.H).then(function(b){b&&!Pn(a,b,a.nc)?a.Z.T(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,a.O.Ib(b.id,a.H),2);Mn(a);c.i=0})}):a.M.L()&&a.Qa()})}
function On(a,b){a.Ac&&!a.M.L()?a.Ac(b):a.handleError(b)}
function Kn(a){return!!a.H||a.Za}
function Rn(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function Sn(a,b){this.version=a;this.args=b}
;function Tn(a,b){this.topic=a;this.i=b}
Tn.prototype.toString=function(){return this.topic};var Un=B("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ha;K.prototype.publish=K.prototype.ta;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Un);var Vn=B("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Vn);var Wn=B("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Wn);var Xn=B("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Xn);
z("ytPubsub2Pubsub2SkipSubKey",null);function Yn(a,b){var c=Zn();c&&c.publish.call(c,a.toString(),a,b)}
function $n(a){var b=ao,c=Zn();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Vn[d])try{if(f&&b instanceof Tn&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ra){var m=new h;h.ra=m.version}var q=h.ra}catch(F){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var r=q.construct;
var w=k.args,u=w.length;if(0<u){var A=Array(u);for(k=0;k<u;k++)A[k]=w[k];var E=A}else E=[];f=r.call(q,h,E)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Dk(F)}},Xn[b.toString()]?B("yt.scheduler.instance")?Qh.T(g):Xk(g,0):g())});
Vn[d]=!0;Wn[b.toString()]||(Wn[b.toString()]=[]);Wn[b.toString()].push(d);return d}
function bo(){var a=co,b=$n(function(c){a.apply(void 0,arguments);eo(b)});
return b}
function eo(a){var b=Zn();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete Vn[c]}))}
function Zn(){return B("ytPubsub2Pubsub2Instance")}
;function fo(a,b){gn.call(this,a,b);this.options=b;pm(a)}
t(fo,gn);function go(a,b){var c;return function(){c||(c=new fo(a,b));return c}}
fo.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Kb?En:Dn)(a,b,Object.assign({},c))};
fo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Kb?In:Fn)(this.name,a)};
function ho(a,b){return go(a,b)}
;var io;
function jo(){if(io)return io();var a={};io=ho("LogsDatabaseV2",{Ma:(a.LogsRequestsStore={qb:2},a),Kb:!1,upgrade:function(b,c,d){c(2)&&Qm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return io()}
;function ko(a){return jn(jo(),a)}
function lo(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},v(g,ko(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),v(g,Sm(d,e),3);f=g.j;c.Bd=P();mo(c);return g.return(f)})}
function no(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},v(m,ko(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,v(m,Pm(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(q){return an(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(k=r.getValue(),"NEW"===a&&(k.status="QUEUED",
r.update(k)))})}),3);
c.Bd=P();mo(c);return m.return(k)})}
function oo(a,b){var c;return x(function(d){if(1==d.i)return v(d,ko(b),2);c=d.j;return d.return(Pm(c,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Mm(f.i.put(g,void 0)).then(function(){return g})})}))})}
function po(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return v(e,ko(b),2);d=e.j;return e.return(Pm(d,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Mm(g.i.put(h,void 0)).then(function(){return h})):Gm.resolve(void 0)})}))})}
function qo(a,b){var c;return x(function(d){if(1==d.i)return v(d,ko(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function ro(a){var b,c;return x(function(d){if(1==d.i)return v(d,ko(a),2);b=d.j;c=P()-2592E6;return v(d,Pm(b,["LogsRequestsStore"],{mode:"readwrite",V:!0},function(e){return Ym(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function so(){return x(function(a){return v(a,Hn(),0)})}
function mo(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Yn("nwl_transaction_latency_payload",a)}
;var to={},uo=ho("ServiceWorkerLogsDatabase",{Ma:(to.SWHealthLog={qb:1},to),Kb:!0,upgrade:function(a,b){b(1)&&Qm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function vo(a){return jn(uo(),a)}
function wo(a){var b,c;return x(function(d){if(1==d.i)return v(d,vo(a),2);b=d.j;c=P()-2592E6;return v(d,Pm(b,["SWHealthLog"],{mode:"readwrite",V:!0},function(e){return Ym(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function xo(a){var b;return x(function(c){if(1==c.i)return v(c,vo(a),2);b=c.j;return v(c,b.clear("SWHealthLog"),0)})}
;var yo={},zo=0;
function Ao(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)gl(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))gl(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new bb({url:a});if(d.l&&d.j||d.m){var e=mc(nc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(yc),h=xc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(w){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var r=!0;break b}}catch(w){}r=!1}b=r?!0:!1}else b=!1;b||Bo(a)}}
function Bo(a){var b=new Image,c=""+zo++;yo[c]=b;b.onload=b.onerror=function(){delete yo[c]};
b.src=a}
;function Co(){this.i=new Map;this.j=!1}
function Do(){if(!Co.i){var a=B("yt.networkRequestMonitor.instance")||new Co;z("yt.networkRequestMonitor.instance",a);Co.i=a}return Co.i}
Co.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
Co.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
Co.prototype.removeParams=function(a){return a.split("?")[0]};
Co.prototype.removeParams=Co.prototype.removeParams;Co.prototype.isEndpointCFR=Co.prototype.isEndpointCFR;Co.prototype.requestComplete=Co.prototype.requestComplete;Co.getInstance=Do;var Eo;function Fo(){Eo||(Eo=new Nl("yt.offline"));return Eo}
function Go(a){if(M("offline_error_handling")){var b=Fo().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Fo().set("errors",b,2592E3,!0)}}
;function Ho(){Ue.call(this);var a=this;this.l=!1;this.j=Ph();this.j.aa("networkstatus-online",function(){if(a.l&&M("offline_error_handling")){var b=Fo().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Q(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Dk(d)}Fo().set("errors",{},2592E3,!0)}}})}
t(Ho,Ue);function Io(){if(!Ho.i){var a=B("yt.networkStatusManager.instance")||new Ho;z("yt.networkStatusManager.instance",a);Ho.i=a}return Ho.i}
l=Ho.prototype;l.L=function(){return this.j.L()};
l.ia=function(a){this.j.j=a};
l.Uc=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Oc=function(){this.l=!0};
l.aa=function(a,b){return this.j.aa(a,b)};
l.Oa=function(a){a=Nh(this.j,a);a.then(function(b){M("use_cfr_monitor")&&Do().requestComplete("generate_204",b)});
return a};
Ho.prototype.sendNetworkCheckRequest=Ho.prototype.Oa;Ho.prototype.listen=Ho.prototype.aa;Ho.prototype.enableErrorFlushing=Ho.prototype.Oc;Ho.prototype.getWindowStatus=Ho.prototype.Uc;Ho.prototype.networkStatusHint=Ho.prototype.ia;Ho.prototype.isNetworkAvailable=Ho.prototype.L;Ho.getInstance=Io;function Jo(a){a=void 0===a?{}:a;Ue.call(this);var b=this;this.j=this.s=0;this.l=Io();var c=B("yt.networkStatusManager.instance.listen").bind(this.l);c&&(a.mb?(this.mb=a.mb,c("networkstatus-online",function(){Ko(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ko(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ve(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ve(b,"publicytnetworkstatus-offline")})))}
t(Jo,Ue);Jo.prototype.L=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.l)():!0};
Jo.prototype.ia=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.l);b&&b(a)};
Jo.prototype.Oa=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.l);return M("skip_network_check_if_cfr")&&Do().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ia((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.L())})):c?d.return(c(a)):d.return(!0)})};
function Ko(a,b){a.mb?a.j?(Qh.fa(a.s),a.s=Qh.T(function(){a.o!==b&&(Ve(a,b),a.o=b,a.j=P())},a.mb-(P()-a.j))):(Ve(a,b),a.o=b,a.j=P()):Ve(a,b)}
;var Lo;function Mo(){var a=Jn.call;Lo||(Lo=new Jo({Zc:!0,Pc:!0}));a.call(Jn,this,{O:{Kc:ro,Ca:qo,dc:no,bd:oo,Ib:po,set:lo},M:Lo,handleError:Dk,Da:Ek,ja:No,now:P,Ac:Go,Z:$l(),Fb:"publicytnetworkstatus-online",Eb:"publicytnetworkstatus-offline",fb:!0,cb:.1,kb:xk("potential_esf_error_limit",10),I:M,Ka:!(nm()&&Oo())});this.l=new uh;M("networkless_immediately_drop_all_requests")&&so();In("LogsDatabaseV2")}
t(Mo,Jn);function Po(){var a=B("yt.networklessRequestController.instance");a||(a=new Mo,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&xn().then(function(b){a.H=b;Ln(a);a.l.resolve();a.fb&&Math.random()<=a.cb&&a.H&&wo(a.H);M("networkless_immediately_drop_sw_health_store")&&Qo(a)}));
return a}
Mo.prototype.writeThenSend=function(a,b){b||(b={});nm()||(this.i=!1);Jn.prototype.writeThenSend.call(this,a,b)};
Mo.prototype.sendThenWrite=function(a,b,c){b||(b={});nm()||(this.i=!1);Jn.prototype.sendThenWrite.call(this,a,b,c)};
Mo.prototype.sendAndWrite=function(a,b){b||(b={});nm()||(this.i=!1);Jn.prototype.sendAndWrite.call(this,a,b)};
Mo.prototype.awaitInitialization=function(){return this.l.promise};
function Qo(a){var b;x(function(c){if(!a.H)throw b=Cm("clearSWHealthLogsDb"),b;return c.return(xo(a.H).catch(function(d){a.handleError(d)}))})}
function No(a,b,c){M("use_cfr_monitor")&&Ro(a,b);if(M("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P())}c&&0===Object.keys(b).length?Ao(a):dl(a,b)}
function Ro(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Do().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Do().requestComplete(a,!0);d(e,f)}}
function Oo(){return"www.youtube-nocookie.com"!==oc(document.location.toString())}
;var So=!1,To=0,Uo=0,Vo,Wo=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:So,potentialEsfErrorCounter:Uo};z("ytNetworklessLoggingInitializationOptions",Wo);
function Xo(){var a;x(function(b){switch(b.i){case 1:return v(b,xn(),2);case 2:a=b.j;if(!a||!nm()&&!M("nwl_init_require_datasync_id_killswitch")||!Oo()){b.u(0);break}So=!0;Wo.isNwlInitialized=So;if(!M("use_new_nwl_initialization")){b.u(4);break}return v(b,Po().awaitInitialization(),5);case 5:return b.return();case 4:return v(b,In("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return v(b,ro(a),8);case 8:return v(b,wo(a),7);case 7:Yo();Zo().L()&&$o();Zo().aa("publicytnetworkstatus-online",
$o);Zo().aa("publicytnetworkstatus-offline",ap);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return v(b,bp(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return v(b,so(),0);b.u(0)}})}
function cp(a,b){function c(d){var e=Zo().L();if(!dp()||!d||e&&M("vss_networkless_bypass_write"))ep(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};lo(f,d).then(function(g){f.id=g;Zo().L()&&fp(f)}).catch(function(g){fp(f);
Zo().L()?Dk(g):Go(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?xn().then(function(d){c(d)}):c(wn())}
function gp(a,b){function c(d){if(dp()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&Do().requestComplete(e.url,!0);void 0!==e.id?qo(e.id,d):f=!0;M("vss_network_hint")&&Zo().ia(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){Do().requestComplete(e.url,!1);h(k,m)}}ep(e.url,e.options);
lo(e,d).then(function(k){e.id=k;f&&qo(e.id,d)}).catch(function(k){Zo().L()?Dk(k):Go(k)})}else ep(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?xn().then(function(d){c(d)}):c(wn())}
function $o(){var a=wn();if(!a)throw Cm("throttleSend");To||(To=Qh.T(function(){var b;return x(function(c){if(1==c.i)return v(c,no("NEW",a),2);if(3!=c.i)return b=c.j,b?v(c,fp(b),3):(ap(),c.return());To&&(To=0,$o());c.i=0})},100))}
function ap(){Qh.fa(To);To=0}
function fp(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=wn();if(!b)throw c=Cm("immediateSend"),c;if(void 0===a.id){e.u(2);break}return v(e,oo(a.id,b),3);case 3:(d=e.j)?a=d:Ek(Error("The request cannot be found in the database."));case 2:if(hp(a,2592E6)){e.u(4);break}Ek(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return v(e,qo(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=ip(a));var f=a;if(M("use_request_time_ms_header")){var g;
if(null==f?0:null==(g=f.options)?0:g.headers)f.options.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P()))}else{var h,k;if(null==f?0:null==(h=f.options)?0:null==(k=h.postParams)?0:k.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P())}a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return v(e,qo(a.id,b),8);case 8:ep(a.url,a.options,!!a.skipRetry),e.i=0}})}
function ip(a){var b=wn();if(!b)throw Cm("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&Do().requestComplete(a.url,!1);g=Rn(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&jp()<=xk("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||Do().isEndpointCFR(a.url))){m.u(3);break}return v(m,Zo().Oa(),3);case 3:if(Zo().L()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return v(m,po(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&jp()>xk("potential_esf_error_limit",10))return m.return();B("ytNetworklessLoggingInitializationOptions")&&Wo.potentialEsfErrorCounter++;Uo++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?v(m,po(a.id,b),12):v(m,qo(a.id,b),8);case 12:Qh.T(function(){Zo().L()&&$o()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return M("use_cfr_monitor")&&Do().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):v(h,qo(a.id,b),2);M("vss_network_hint")&&Zo().ia(!0);d(e,f);h.i=0})};
return a}
function hp(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Yo(){var a=wn();if(!a)throw Cm("retryQueuedRequests");no("QUEUED",a).then(function(b){b&&!hp(b,12E4)?Qh.T(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.u(2):v(c,po(b.id,a),2);Yo();c.i=0})}):Zo().L()&&$o()})}
function bp(){var a,b;return x(function(c){a=wn();if(!a)throw b=Cm("clearSWHealthLogsDb"),b;return c.return(xo(a).catch(function(d){Dk(d)}))})}
function Zo(){Vo||(Vo=new Jo({Zc:!0,Pc:!0}));return Vo}
function ep(a,b,c){c&&0===Object.keys(b).length?Ao(a):dl(a,b)}
function dp(){return B("ytNetworklessLoggingInitializationOptions")?Wo.isNwlInitialized:So}
function jp(){return B("ytNetworklessLoggingInitializationOptions")?Wo.potentialEsfErrorCounter:Uo}
;function kp(a){var b=this;this.config_=null;a?this.config_=a:Dl()&&(this.config_=El());Wl(function(){Tl(b)},0,5E3)}
kp.prototype.isReady=function(){!this.config_&&Dl()&&(this.config_=El());return!!this.config_};
function Ul(a,b,c,d){function e(A){A=void 0===A?!1:A;var E;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(E=Rl(b,c,m,k)),E)){var F=g.onSuccess,O=g.onFetchSuccess;g.onSuccess=function(N,R){Sl(E);F(N,R)};
c.onFetchSuccess=function(N,R){Sl(E);O(N,R)}}try{A&&d.retry&&!d.kc.bypassNetworkless?(g.method="POST",d.kc.writeThenSend?M("use_new_nwl_wts")?Po().writeThenSend(u,g):cp(u,g):M("use_new_nwl_saw")?Po().sendAndWrite(u,g):gp(u,g)):M("web_all_payloads_via_jspb")?dl(u,g):(g.method="POST",g.postParams||(g.postParams={}),dl(u,g))}catch(N){if("InvalidAccessError"==N.name)E&&(Sl(E),E=0),Ek(Error("An extension is blocking network request."));
else throw N;}E&&Wl(function(){Tl(a)},0,5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ek(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Dk(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,E){if(d.onSuccess)d.onSuccess(E)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,E){if(d.onError)d.onError(E)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Wc)&&(h=f);var k=a.config_.Yc||!1,m=Ll(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},w=a.config_.Xc&&f;w=w&&f.startsWith("Bearer");w||(r.key=a.config_.innertubeApiKey);var u=Qk(""+h+q,r||{},!0);dp()?vn().then(function(A){e(A)}):e(!1)}
;var lp=0,mp=Nc?"webkit":Mc?"moz":Kc?"ms":Jc?"o":"";z("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++lp});var np={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Bp(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in np||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function $p(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
Bp.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Bp.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Bp.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",qb);var aq=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",aq);
function bq(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var cq=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function dq(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=bq(a,b,c,d);if(e)return e;e=++aq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Bp(h);if(!df(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Bp(h);
h.currentTarget=a;return c.call(a,h)};
g=Ck(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),cq()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function eq(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?cq()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;var fq=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function gq(a){this.G=a;this.j=null;this.o=0;this.v=null;this.s=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.K=dq(window,"mousemove",Wa(this.P,this));a=Wa(this.J,this);"function"===typeof a&&(a=Ck(a));this.R=window.setInterval(a,25)}
Za(gq,J);gq.prototype.P=function(a){void 0===a.i&&$p(a);var b=a.i;void 0===a.j&&$p(a);this.j=new $e(b,a.j)};
gq.prototype.J=function(){if(this.j){var a=fq();if(0!=this.o){var b=this.v,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.G();this.s=d}this.o=a;this.v=this.j;this.m=(this.m+1)%4}};
gq.prototype.D=function(){window.clearInterval(this.R);eq(this.K)};var hq={};
function iq(a){var b=void 0===a?{}:a;a=void 0===b.fd?!1:b.fd;b=void 0===b.Qc?!0:b.Qc;if(null==B("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&jq();dq(document,"keydown",jq);dq(document,"keyup",jq);dq(document,"mousedown",jq);dq(document,"mouseup",jq);a?dq(window,"touchmove",function(){kq("touchmove",200)},{passive:!0}):(dq(window,"resize",function(){kq("resize",200)}),b&&dq(window,"scroll",function(){kq("scroll",200)}));
new gq(function(){kq("mouse",100)});
dq(document,"touchstart",jq,{passive:!0});dq(document,"touchend",jq,{passive:!0})}}
function kq(a,b){hq[a]||(hq[a]=!0,Qh.T(function(){jq();hq[a]=!1},b))}
function jq(){null==B("_lact",window)&&iq();var a=Date.now();z("_lact",a,window);-1==B("_fact",window)&&z("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function lq(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var mq=y.ytPubsubPubsubInstance||new K,nq=y.ytPubsubPubsubSubscribedKeys||{},oq=y.ytPubsubPubsubTopicToKeys||{},pq=y.ytPubsubPubsubIsSynchronous||{};function qq(a,b){var c=rq();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){nq[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{pq[a]?f():Xk(f,0)}catch(g){Dk(g)}},void 0);
nq[d]=!0;oq[a]||(oq[a]=[]);oq[a].push(d);return d}return 0}
function sq(a){var b=rq();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete nq[c]}))}
function tq(a,b){var c=rq();c&&c.publish.apply(c,arguments)}
function uq(a){var b=rq();if(b)if(b.clear(a),a)vq(a);else for(var c in oq)vq(c)}
function rq(){return y.ytPubsubPubsubInstance}
function vq(a){oq[a]&&(a=oq[a],fb(a,function(b){nq[b]&&delete nq[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.Ha;K.prototype.publish=K.prototype.ta;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",mq);z("ytPubsubPubsubTopicToKeys",oq);z("ytPubsubPubsubIsSynchronous",pq);z("ytPubsubPubsubSubscribedKeys",nq);function wq(){this.store=[];this.i={}}
wq.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=xq(a);this.i[a]?this.i[a]++:this.i[a]=1;return a};
wq.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=p(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=p(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.i[xq(e.keys)]--):c.push(e)}this.store=c;a=yq(this,a);a=p(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.i[c]&&Ek(new Q("Transport IMS did not fully extract entries for key:",{sequence:c,mr:b.length,lr:this.i[c]}));return b};
wq.prototype.getSequenceCount=function(a){var b=yq(this,a);a=0;b=p(b);for(var c=b.next();!c.done;c=b.next())a+=this.i[c.value];return a};
function yq(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=p(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=zq(b.auth):"isJspb"===g?e=JSON.stringify(b.isJspb):"cttAuthInfo"===g&&(f=zq(b.cttAuthInfo));b=[];d=[d,e,f];a=p(Object.keys(a.i));for(e=a.next();!e.done;e=a.next()){e=e.value;f=e.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==f[g]){c=!1;break}c&&b.push(e)}return b}
wq.prototype.getSequenceCount=wq.prototype.getSequenceCount;wq.prototype.extractMatchingEntries=wq.prototype.extractMatchingEntries;wq.prototype.storePayload=wq.prototype.storePayload;function xq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function zq(a){return void 0===a?"undefined":a}
;var Aq=xk("initial_gel_batch_timeout",2E3),Bq=Math.pow(2,16)-1,Cq=void 0;function Dq(){this.l=this.i=this.j=0}
var Eq=new Dq,Fq=new Dq,Gq,Hq=!0,Iq=y.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Iq);var Jq=y.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Jq);var Kq=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Kq);var Lq=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Lq);var Mq={};function Nq(){var a=B("yt.logging.ims");a||(a=new wq,z("yt.logging.ims",a));return a}
function Oq(a,b){M("web_all_payloads_via_jspb")&&Ek(new Q("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Pq(a);var c=Qq(a);if(M("use_new_in_memory_storage")){Mq[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Nq().storePayload(d,a.payload);Rq(b,[],c,!1,d)}else d=Iq.get(c)||[],Iq.set(c,d),d.push(a.payload),Rq(b,d,c)}}
function Sq(a,b){if("log_event"===a.endpoint){Pq(void 0,a);var c=Qq(a,!0);if(M("use_new_in_memory_storage")){Mq[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Nq().storePayload(d,a.payload.toJSON());Rq(b,[],c,!0,d)}else d=Jq.get(c)||[],Jq.set(c,d),a=a.payload.toJSON(),d.push(a),Rq(b,d,c,!0)}}
function Rq(a,b,c,d,e){d=void 0===d?!1:d;a&&(Cq=new a);a=xk("tvhtml5_logging_max_batch")||xk("web_logging_max_batch")||100;var f=P(),g=d?Fq.l:Eq.l;b=b.length;e&&(b=Nq().getSequenceCount(e));b>=a?M("background_thread_flush_logs_due_to_batch_limit")?Gq||(Gq=Xk(function(){Tq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d);Gq=void 0},0)):Tq({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=f-g&&(Uq(d),d?Fq.l=f:Eq.l=f)}
function Vq(a,b){M("web_all_payloads_via_jspb")&&Ek(new Q("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Pq(a);var c=Qq(a),d=new Map;d.set(c,[a.payload]);b&&(Cq=new b);return new rf(function(e,f){Cq&&Cq.isReady()?Wq(d,Cq,e,f,{bypassNetworkless:!0},!0):e()})}}
function Xq(a,b){if("log_event"===a.endpoint){Pq(void 0,a);var c=Qq(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Cq=new b);return new rf(function(e){Cq&&Cq.isReady()?Yq(d,Cq,e,{bypassNetworkless:!0},!0):e()})}}
function Qq(a,b){var c="";if(a.Ja)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Mj;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Od(d,2,Nj,c.playlistId);Lq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Kq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Tq(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&M("web_all_payloads_via_jspb")&&Ek(new Q("transport.flushLogs called for JSON in JSPB only experiment"));new rf(function(d,e){c?(Yk(Fq.j),Yk(Fq.i),Fq.i=0):(Yk(Eq.j),Yk(Eq.i),Eq.i=0);if(Cq&&Cq.isReady())if(M("use_new_in_memory_storage")){var f=a,g=c,h=Cq;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Nq().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),Yq(k,h,d,f)):(k=Nq().extractMatchingEntries({isJspb:g,
cttAuthInfo:b}),m.set(b,k),Wq(m,h,d,e,f));else if(g){e=p(Object.keys(Mq));for(g=e.next();!g.done;g=e.next())m=g.value,g=Nq().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Mq[m];Yq(k,h,d,f)}else{k=p(Object.keys(Mq));for(g=k.next();!g.done;g=k.next()){g=g.value;var q=Nq().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<q.length&&m.set(g,q);delete Mq[g]}Wq(m,h,d,e,f)}}else f=a,k=c,h=Cq,f=void 0===f?{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Jq.get(b)||[],e.set(b,
k),Yq(e,h,d,f),Jq.delete(b)):(k=new Map,m=Iq.get(b)||[],k.set(b,m),Wq(k,h,d,e,f),Iq.delete(b)):k?(Yq(Jq,h,d,f),Jq.clear()):(Wq(Iq,h,d,e,f),Iq.clear());else Uq(c),d()})}
function Uq(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Eq.i||a&&!Fq.i)){var b=Xk(function(){Tq({writeThenSend:!0},void 0,a)},6E4);
a?Fq.i=b:Eq.i=b}Yk(a?Fq.j:Eq.j);b=L("LOGGING_BATCH_TIMEOUT",xk("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Hq&&(b=Aq);b=Xk(function(){Tq({writeThenSend:!0},void 0,a)},b);
a?Fq.j=b:Eq.j=b}
function Wq(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(P()),h=a.size,k={};a=p(a);for(var m=a.next();!m.done;k={Ta:k.Ta,sa:k.sa,Fa:k.Fa,Va:k.Va,Ua:k.Ua},m=a.next()){var q=p(m.value);m=q.next().value;q=q.next().value;k.sa=wb({context:Fl(b.config_||El())});if(!Pa(q)&&!M("throw_err_when_logevent_malformed_killswitch")){d();break}k.sa.events=q;(q=Kq[m])&&Zq(k.sa,m,q);delete Kq[m];k.Fa="visitorOnlyApprovedKey"===m;$q(k.sa,g,k.Fa);ar(e);k.Va=function(){h--;h||c()};
k.Ta=0;k.Ua=function(r){return function(){r.Ta++;if(e.bypassNetworkless&&M("log_errors_through_nwl_on_retry")&&1===r.Ta)try{Ul(b,"log_event",r.sa,br({writeThenSend:!0},r.Fa,r.Va,r.Ua,f)),Hq=!1}catch(w){Dk(w),d()}h--;h||c()}}(k);
try{Ul(b,"log_event",k.sa,br(e,k.Fa,k.Va,k.Ua,f)),Hq=!1}catch(r){Dk(r),d()}}}
function Yq(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(P()),g=a.size,h=new Map([].concat(ia(a)));h=p(h);for(var k=h.next();!k.done;k=h.next()){var m=p(k.value).next().value,q=a.get(m);k=new Oj;var r=Kl(b.config_||El());G(k,Si,1,r);q=q?cr(q):[];q=p(q);for(r=q.next();!r.done;r=q.next())Wd(k,3,Ij,r.value);(q=Lq[m])&&dr(k,m,q);delete Lq[m];m="visitorOnlyApprovedKey"===m;er(k,f,m);ar(d);k=ae(k);m=br(d,m,function(){g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;Ul(b,"log_event","",m);Hq=!1}}
function ar(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function br(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,kc:a,Ja:b,br:!!e,headers:{},postBodyFormat:"",postBody:""};fr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(P())));return a}
function $q(a,b,c){fr()||(a.requestTimeMs=String(b));M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=gr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function er(a,b,c){fr()||D(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=gr();var d=new Lj;D(d,1,b);D(d,2,c);G(a,Lj,5,d)}}
function gr(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Bq/2));a++;a>Bq&&(a=1);uk("BATCH_CLIENT_COUNTER",a);return a}
function Zq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function dr(a,b,c){if(Xd(c,1===Pd(c,Nj)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;G(a,Mj,4,c);a=Qd(a,Si,1)||new Si;c=Qd(a,Qi,3)||new Qi;var e=new Pi;e.setToken(b);D(e,1,d);Wd(c,12,Pi,e);G(a,Qi,3,c)}
function cr(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Ij(a[c]))}catch(d){Dk(new Q("Transport failed to deserialize "+String(a[c])))}return b}
function Pq(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function fr(){return M("use_request_time_ms_header")||M("lr_use_request_time_ms_header")}
;var hr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",hr);
function ir(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;M("enable_unknown_lact_fix_on_html5")&&iq();a=lq();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.ba&&(a=e.context,b=d.ba,b={index:jr(b),groupKey:b},a.sequence=b,d.Zb&&delete hr[d.ba]);(d.tc?Vq:Oq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,Ja:d.Ja},c)}
function kr(a){Tq(void 0,void 0,void 0===a?!1:a)}
function jr(a){hr[a]=a in hr?hr[a]+1:0;return hr[a]}
;var lr=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",lr);function mr(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());D(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=lq();d=new Hj;D(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.ba){e=c.ba;var f=jr(e),g=new Gj;D(g,2,f);D(g,1,e);G(d,Gj,3,g);c.Zb&&delete lr[c.ba]}G(a,Hj,33,d);(c.tc?Xq:Sq)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,Ja:c.Ja},b)}
;function nr(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);mr(a,c?null:kp,b)}
;function or(a,b){var c=new Ij;Ud(c,xj,72,Jj,a);nr(c,b)}
function pr(a,b,c){var d=new Ij;Ud(d,wj,73,Jj,a);c?mr(d,c,b):nr(d,b)}
function qr(a,b,c){var d=new Ij;Ud(d,vj,78,Jj,a);c?mr(d,c,b):nr(d,b)}
function rr(a,b,c){var d=new Ij;Ud(d,yj,208,Jj,a);c?mr(d,c,b):nr(d,b)}
function sr(a,b,c){var d=new Ij;Ud(d,oj,156,Jj,a);c?mr(d,c,b):nr(d,b)}
function tr(a,b,c){var d=new Ij;Ud(d,sj,215,Jj,a);c?mr(d,c,b):nr(d,b)}
function ur(a,b,c){var d=new Ij;Ud(d,nj,111,Jj,a);c?mr(d,c,b):nr(d,b)}
;function km(a,b,c){c=void 0===c?{}:c;if(M("migrate_events_to_ts")){c=void 0===c?{}:c;var d=kp;L("ytLoggingEventsDefaultDisabled",!1)&&kp===kp&&(d=null);M("web_all_payloads_via_jspb")&&Ek(new Q("Logs should be translated to JSPB but are sent as JSON instead",a));ir(a,b,d,c)}else d=kp,L("ytLoggingEventsDefaultDisabled",!1)&&kp==kp&&(d=null),ir(a,b,d,c)}
;var vr=[{Cb:function(a){return"Cannot read property '"+a.key+"'"},
jb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Cb:function(a){return"Cannot call '"+a.key+"'"},
jb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Cb:function(a){return a.key+" is not defined"},
jb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xr={oa:[],na:[{callback:wr,weight:500}]};function wr(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yr(){this.na=[];this.oa=[]}
var zr;function Ar(){if(!zr){var a=zr=new yr;a.oa.length=0;a.na.length=0;xr.oa&&a.oa.push.apply(a.oa,xr.oa);xr.na&&a.na.push.apply(a.na,xr.na)}return zr}
;var Br=new K;function Cr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dr(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dr(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dr(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dr(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Er(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fr(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Cr(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Fr(e+".ve",f,g,h):0;d+=g;d+=Fr(e,a[e],b,c);if(500<d)break}}else c[b]=Gr(a),d+=c[b].length;else c[b]=Gr(a),d+=c[b].length;return d}
function Fr(a,b,c,d){c+="."+a;a=Gr(b);d[c]=a;return c.length+a.length}
function Gr(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Hr=new Set,Ir=0,Jr=0,Kr=0,Lr=[],Mr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function jm(a){Nr(a)}
function Or(a){Nr(a,"WARNING")}
function Nr(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=Ir)){var m=Lr,q=ne(a),r=q.message||"Unknown Error",w=q.name||"UnknownError",u=q.stack||a.j||"Not available";if(u.startsWith(w+": "+r)){var A=u.split("\n");A.shift();u=A.join("\n")}var E=q.lineNumber||"Not available",F=q.fileName||"Not available",O=u,N=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var R=0;R<a.args.length&&!(N=Er(a.args[R],"params."+R,g,N),500<=N);R++);else if(a.hasOwnProperty("params")&&
a.params){var da=a.params;if("object"===typeof a.params)for(var W in da){if(da[W]){var pb="params."+W,Ya=Gr(da[W]);g[pb]=Ya;N+=pb.length+Ya.length;if(500<N)break}}else g.params=Gr(da)}if(m.length)for(var ma=0;ma<m.length&&!(N=Er(m[ma],"params.context."+ma,g,N),500<=N);ma++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:r,name:w,lineNumber:E,fileName:F,stack:O,params:g,sampleWeight:1},la=Number(a.columnNumber);isNaN(la)||(H.lineNumber=H.lineNumber+
":"+la);if("IGNORED"===a.level)var fa=0;else a:{for(var ze=Ar(),Ae=p(ze.oa),wd=Ae.next();!wd.done;wd=Ae.next()){var oa=wd.value;if(H.message&&H.message.match(oa.kr)){fa=oa.weight;break a}}for(var op=p(ze.na),Yj=op.next();!Yj.done;Yj=op.next()){var pp=Yj.value;if(pp.callback(H)){fa=pp.weight;break a}}fa=1}H.sampleWeight=fa;for(var qp=p(vr),Zj=qp.next();!Zj.done;Zj=qp.next()){var ak=Zj.value;if(ak.jb[H.name])for(var rp=p(ak.jb[H.name]),bk=rp.next();!bk.done;bk=rp.next()){var sp=bk.value,Tg=H.message.match(sp.regexp);
if(Tg){H.params["params.error.original"]=Tg[0];for(var ck=sp.groups,tp={},xd=0;xd<ck.length;xd++)tp[ck[xd]]=Tg[xd+1],H.params["params.error."+ck[xd]]=Tg[xd+1];H.message=ak.Cb(tp);break}}}H.params||(H.params={});var up=Ar();H.params["params.errorServiceSignature"]="msg="+up.oa.length+"&cb="+up.na.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!Hr.has(H.message)){if("ERROR"===h){Br.ta("handleError",H);if(M("record_app_crashed_web")&&0===Kr&&1===H.sampleWeight)if(Kr++,M("errors_via_jspb")){var dk=new kj;D(dk,1,1);if(!M("report_client_error_with_app_crash_ks")){var vp=new fj;D(vp,1,H.message);var wp=new gj;G(wp,fj,3,vp);var xp=new hj;G(xp,gj,5,wp);var yp=new ij;G(yp,hj,9,xp);G(dk,ij,4,yp)}var zp=new Ij;Ud(zp,kj,20,
Jj,dk);nr(zp)}else{var Ap={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Ap.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});km("appCrashed",Ap)}Jr++}else"WARNING"===h&&Br.ta("handleWarning",H);if(M("kevlar_gel_error_routing"))a:{var Be=h;if(M("errors_via_jspb")){if(Pr())var Cp=void 0;else{var yd=new cj;D(yd,1,H.stack);H.fileName&&D(yd,4,H.fileName);var Jb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Jb.length&&(1!==
Jb.length||isNaN(Number(Jb[0]))?2!==Jb.length||isNaN(Number(Jb[0]))||isNaN(Number(Jb[1]))||(D(yd,2,Number(Jb[0])),D(yd,3,Number(Jb[1]))):D(yd,2,Number(Jb[0])));var Dc=new fj;D(Dc,1,H.message);D(Dc,3,H.name);D(Dc,6,H.sampleWeight);"ERROR"===Be?D(Dc,2,2):"WARNING"===Be?D(Dc,2,1):D(Dc,2,0);var ek=new dj;D(ek,1,!0);Ud(ek,cj,3,ej,yd);var cc=new $i;D(cc,3,window.location.href);for(var Dp=L("FEXP_EXPERIMENTS",[]),fk=0;fk<Dp.length;fk++){var Iv=Dp[fk];Dd(cc);Nd(cc,5,2,!1).push(Iv)}var gk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!vk()&&gk)for(var Ep=p(Object.keys(gk)),Ec=Ep.next();!Ec.done;Ec=Ep.next()){var Fp=Ec.value,hk=new bj;D(hk,1,Fp);hk.setValue(String(gk[Fp]));Wd(cc,4,bj,hk)}var ik=H.params;if(ik){var Gp=p(Object.keys(ik));for(Ec=Gp.next();!Ec.done;Ec=Gp.next()){var Hp=Ec.value,jk=new bj;D(jk,1,"client."+Hp);jk.setValue(String(ik[Hp]));Wd(cc,4,bj,jk)}}var Ip=L("SERVER_NAME"),Jp=L("SERVER_VERSION");if(Ip&&Jp){var kk=new bj;D(kk,1,"server.name");kk.setValue(Ip);Wd(cc,4,bj,kk);var lk=new bj;D(lk,1,"server.version");
lk.setValue(Jp);Wd(cc,4,bj,lk)}var Ug=new gj;G(Ug,$i,1,cc);G(Ug,dj,2,ek);G(Ug,fj,3,Dc);Cp=Ug}var Kp=Cp;if(!Kp)break a;var Lp=new Ij;Ud(Lp,gj,163,Jj,Kp);nr(Lp)}else{if(Pr())var Mp=void 0;else{var Ce={stackTrace:H.stack};H.fileName&&(Ce.filename=H.fileName);var Kb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Kb.length&&(1!==Kb.length||isNaN(Number(Kb[0]))?2!==Kb.length||isNaN(Number(Kb[0]))||isNaN(Number(Kb[1]))||(Ce.lineNumber=Number(Kb[0]),Ce.columnNumber=Number(Kb[1])):Ce.lineNumber=
Number(Kb[0]));var mk={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===Be?mk.level="ERROR_LEVEL_ERROR":"WARNING"===Be&&(mk.level="ERROR_LEVEL_WARNNING");var Jv={isObfuscated:!0,browserStackInfo:Ce},zd={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(zd.experimentIds=L("FEXP_EXPERIMENTS"));var nk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!vk()&&nk)for(var Np=p(Object.keys(nk)),Fc=Np.next();!Fc.done;Fc=Np.next()){var Op=
Fc.value;zd.kvPairs.push({key:Op,value:String(nk[Op])})}var ok=H.params;if(ok){var Pp=p(Object.keys(ok));for(Fc=Pp.next();!Fc.done;Fc=Pp.next()){var Qp=Fc.value;zd.kvPairs.push({key:"client."+Qp,value:String(ok[Qp])})}}var Rp=L("SERVER_NAME"),Sp=L("SERVER_VERSION");Rp&&Sp&&(zd.kvPairs.push({key:"server.name",value:Rp}),zd.kvPairs.push({key:"server.version",value:Sp}));Mp={errorMetadata:zd,stackTrace:Jv,logMessage:mk}}var Tp=Mp;if(!Tp)break a;km("clientError",Tp)}if("ERROR"===Be||M("errors_flush_gel_always_killswitch"))b:if(M("migrate_events_to_ts"))c:{if(M("web_fp_via_jspb")&&
(kr(!0),!M("web_fp_via_jspb_and_json")))break c;kr()}else{if(M("web_fp_via_jspb")&&(kr(!0),!M("web_fp_via_jspb_and_json")))break b;kr()}}if(!M("suppress_error_204_logging")){var De=H.params||{},dc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":De.name},postParams:{url:L("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};De.version&&(dc["client.version"]=De.version);if(dc.postParams){H.stack&&(dc.postParams.stack=
H.stack);for(var Up=p(Object.keys(De)),pk=Up.next();!pk.done;pk=Up.next()){var Vp=pk.value;dc.postParams["client."+Vp]=De[Vp]}var qk=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(qk)for(var Wp=p(Object.keys(qk)),rk=Wp.next();!rk.done;rk=Wp.next()){var Xp=rk.value;dc.postParams[Xp]=qk[Xp]}var Yp=L("SERVER_NAME"),Zp=L("SERVER_VERSION");Yp&&Zp&&(dc.postParams["server.name"]=Yp,dc.postParams["server.version"]=Zp)}dl(L("ECATCHER_REPORT_HOST","")+"/error_204",dc)}try{Hr.add(H.message)}catch(mx){}Ir++}}}}
function Pr(){for(var a=p(Mr),b=a.next();!b.done;b=a.next())if(bm(b.value.toLowerCase()))return!0;return!1}
function Qr(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Rr(){this.register=new Map}
function Sr(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.rr("ABORTED")}
Rr.prototype.clear=function(){Sr(this);this.register.clear()};
var Tr=new Rr;var Ur=Date.now().toString();
function Vr(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ur)for(a=1,b=0;b<Ur.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ur.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Wr=y.ytLoggingDocDocumentNonce_;Wr||(Wr=Vr(),z("ytLoggingDocDocumentNonce_",Wr));var Xr=Wr;var Yr={Zh:0,we:1,Ge:2,Vl:3,bi:4,qq:5,Lm:6,yo:7,Rn:8,mo:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Zr(a){this.i=a}
function $r(a){return new Zr({trackingParams:a})}
Zr.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
Zr.prototype.getAsJspb=function(){var a=new mj;if(void 0!==this.i.trackingParams){var b=this.i.trackingParams;if(null!=b)if("string"===typeof b)b=b?new id(b,gd):jd();else if(b.constructor!==id)if(fd(b))b=b.length?new id(new Uint8Array(b),gd):jd();else throw Error();D(a,1,b)}else void 0!==this.i.veType&&D(a,2,this.i.veType),void 0!==this.i.veCounter&&D(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&D(a,3,this.i.elementIndex);void 0!==this.i.dataElement&&(b=this.i.dataElement.getAsJspb(),G(a,mj,
7,b));void 0!==this.i.youtubeData&&G(a,Ei,8,this.i.jspbYoutubeData);return a};
Zr.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Zr.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function as(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function bs(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function cs(a){return L(bs(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",cs);function ds(a){return(a=cs(void 0===a?0:a))?new Zr({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function es(){var a=L("csn-to-ctt-auth-info");a||(a={},uk("csn-to-ctt-auth-info",a));return a}
function fs(a){a=L(as(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",fs);function gs(a,b,c){var d=es();(c=fs(c))&&delete d[c];b&&(d[a]=b)}
function hs(a){return es()[a]}
z("yt_logging_screen.getCttAuthInfo",hs);
function is(a,b,c,d){c=void 0===c?0:c;if(a!==L(as(c))||b!==L(bs(c)))if(gs(a,d,c),uk(as(c),a),uk(bs(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new nj;D(e,1,Xr);D(e,2,a);M("use_default_heartbeat_client")?ur(e):ur(e,void 0,kp)}else e={clientDocumentNonce:Xr,clientScreenNonce:a},M("use_default_heartbeat_client")?km("foregroundHeartbeatScreenAssociated",e):ir("foregroundHeartbeatScreenAssociated",e,kp)},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",is);var js=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",js);function ks(a){Vj(js,arguments)}
;var ls={ue:3611,Fd:27686,Gd:85013,Hd:23462,Jd:157557,Kd:42016,Ld:62407,Md:26926,Id:43781,Nd:51236,Od:79148,Pd:50160,Qd:77504,ce:153587,de:87907,ee:18630,ge:54445,he:80935,ie:152172,je:105675,ke:150723,le:37521,me:147285,ne:47786,oe:98349,pe:123695,qe:6827,re:29434,se:7282,te:124448,ye:32276,xe:76278,ze:147868,Ae:147869,Be:93911,Ce:106531,De:27259,Ee:27262,Fe:27263,He:21759,Ie:27107,Je:62936,Ke:160866,Le:49568,Me:160789,Ne:38408,Oe:80637,Pe:68727,Qe:68728,Re:80353,Se:80356,Te:74610,Ue:45707,Ve:83962,
We:83970,Xe:46713,Ye:89711,Ze:74612,af:155792,bf:93265,cf:74611,df:131380,ff:128979,gf:139311,hf:128978,ef:131391,jf:105350,lf:139312,mf:134800,kf:131392,pf:113533,qf:93252,rf:99357,tf:94521,uf:114252,vf:113532,wf:94522,sf:94583,xf:88E3,yf:139580,zf:93253,Af:93254,Bf:94387,Cf:94388,Df:93255,Ef:97424,nf:72502,Ff:110111,Gf:76019,If:117092,Jf:117093,Hf:89431,Kf:110466,Lf:77240,Mf:60508,Nf:148123,Of:148124,Pf:137401,Qf:137402,Rf:137046,Sf:73393,Tf:113534,Uf:92098,Vf:131381,Wf:84517,Xf:83759,Yf:80357,
Zf:86113,ag:72598,cg:72733,dg:107349,eg:124275,fg:118203,gg:133275,hg:160157,ig:152569,jg:156651,kg:133274,lg:160159,mg:160158,ng:133272,og:133273,pg:133276,qg:144507,rg:143247,sg:156652,tg:143248,ug:143249,vg:143250,wg:143251,xg:156653,yg:144401,Ag:117431,zg:133797,Bg:153964,Cg:128572,Dg:133405,Eg:117429,Fg:117430,Gg:117432,Hg:120080,Ig:117259,Jg:156655,Kg:156654,Lg:121692,Mg:145656,Ng:156656,Og:145655,Pg:145653,Qg:145654,Rg:145657,Sg:132972,Tg:133051,Ug:133658,Vg:132971,Wg:97615,Yg:143359,Xg:143356,
ah:143361,Zg:143358,dh:143360,bh:143357,eh:142303,fh:143353,gh:143354,hh:144479,ih:143355,jh:31402,lh:133624,mh:146477,nh:133623,oh:133622,kh:133621,ph:84774,rh:160801,qh:95117,sh:150497,th:98930,uh:98931,vh:98932,wh:153320,xh:153321,yh:43347,zh:129889,Ah:149123,Bh:45474,Ch:100352,Dh:84758,Eh:98443,Fh:117985,Gh:74613,Hh:155911,Ih:74614,Jh:64502,Kh:136032,Lh:74615,Mh:74616,Nh:122224,Oh:74617,Ph:77820,Qh:74618,Rh:93278,Sh:93274,Th:93275,Uh:93276,Vh:22110,Wh:29433,Xh:133798,Yh:132295,ai:120541,ci:82047,
di:113550,fi:75836,gi:75837,hi:42352,ii:84512,ji:76065,ki:75989,ri:16623,si:32594,ti:27240,vi:32633,wi:74858,xi:156999,zi:3945,yi:16989,Ai:45520,Bi:25488,Ci:25492,Di:25494,Ei:55760,Fi:14057,Gi:18451,Hi:57204,Ii:57203,Ji:17897,Ki:57205,Li:18198,Mi:17898,Ni:17909,Oi:43980,Pi:46220,Qi:11721,Ri:147994,Si:49954,Ti:96369,Ui:3854,Vi:151633,Wi:56251,Xi:159108,Yi:25624,Zi:152036,qj:16906,rj:99999,sj:68172,tj:27068,uj:47973,vj:72773,wj:26970,xj:26971,yj:96805,zj:17752,Aj:73233,Bj:109512,Cj:22256,Dj:14115,Ej:22696,
Fj:89278,Gj:89277,Hj:109513,Ij:43278,Jj:43459,Kj:43464,Lj:89279,Mj:43717,Nj:55764,Oj:22255,Pj:147912,Qj:89281,Rj:40963,Sj:43277,Tj:43442,Uj:91824,Vj:120137,Wj:96367,Xj:36850,Yj:72694,Zj:37414,ak:36851,ck:124863,bk:121343,dk:73491,ek:54473,fk:43375,gk:46674,hk:143815,ik:139095,jk:144402,kk:149968,lk:149969,mk:32473,nk:72901,pk:72906,qk:50947,rk:50612,sk:50613,tk:50942,uk:84938,vk:84943,wk:84939,xk:84941,yk:84944,zk:84940,Ak:84942,Bk:35585,Ck:51926,Dk:79983,Ek:63238,Fk:18921,Gk:63241,Hk:57893,Ik:41182,
Jk:135732,Kk:33424,Lk:22207,Mk:42993,Nk:36229,Ok:22206,Pk:22205,Qk:18993,Rk:19001,Sk:18990,Tk:18991,Uk:18997,Vk:18725,Wk:19003,Xk:36874,Yk:44763,Zk:33427,al:67793,bl:22182,dl:37091,fl:34650,il:50617,jl:47261,kl:22287,ll:25144,ml:97917,nl:62397,ol:150871,pl:150874,ql:125598,rl:137935,sl:36961,ul:108035,vl:27426,wl:27857,xl:27846,yl:27854,zl:69692,Al:61411,Bl:39299,Cl:38696,Dl:62520,El:36382,Fl:108701,Gl:50663,Hl:36387,Il:14908,Jl:37533,Kl:105443,Ll:61635,Ml:62274,Nl:161670,Ol:133818,Pl:65702,Ql:65703,
Rl:65701,Sl:76256,Tl:37671,Ul:49953,Wl:36216,Xl:28237,Yl:39553,Zl:29222,am:26107,bm:38050,cm:26108,em:120745,dm:26109,fm:26110,gm:66881,hm:28236,im:14586,jm:160598,km:57929,lm:74723,mm:44098,nm:44099,qm:23528,rm:61699,om:134104,pm:134103,sm:59149,tm:101951,um:97346,vm:118051,wm:95102,xm:64882,ym:119505,zm:63595,Am:63349,Bm:95101,Cm:75240,Dm:27039,Em:68823,Fm:21537,Gm:83464,Hm:75707,Im:83113,Jm:101952,Km:101953,Mm:79610,Nm:125755,Om:24402,Pm:24400,Qm:32925,Sm:57173,Rm:156421,Tm:122502,Um:145268,Vm:138480,
Wm:64423,Xm:64424,Ym:33986,Zm:100828,an:129089,bn:21409,fn:135155,gn:135156,hn:135157,jn:135158,kn:158225,ln:135159,mn:135160,nn:135161,qn:135162,rn:135163,pn:158226,sn:158227,tn:135164,un:135165,vn:135166,cn:11070,dn:11074,en:17880,wn:14001,yn:30709,zn:30707,An:30711,Bn:30710,Cn:30708,xn:26984,Dn:146143,En:63648,Fn:63649,Gn:51879,Hn:111059,In:5754,Jn:20445,Kn:151308,Ln:151152,Nn:130975,Mn:130976,On:110386,Pn:113746,Qn:66557,Sn:17310,Tn:28631,Un:21589,Vn:154946,Wn:68012,Xn:60480,Yn:138664,Zn:141121,
ao:31571,bo:141978,co:150105,eo:150106,fo:150107,ho:150108,jo:76980,ko:41577,lo:45469,no:38669,oo:13768,po:13777,qo:141842,ro:62985,so:4724,to:59369,uo:43927,vo:43928,wo:12924,xo:100355,Ao:56219,Bo:27669,Co:10337,zo:47896,Do:122629,Fo:139723,Eo:139722,Go:121258,Ho:107598,Io:127991,Jo:96639,Ko:107536,Lo:130169,Mo:96661,No:145188,Oo:96658,Po:116646,Qo:159428,Ro:121122,So:96660,To:127738,Uo:127083,Vo:155281,Wo:147842,Xo:104443,Yo:96659,Zo:147595,ap:106442,bp:134840,cp:63667,ep:63668,fp:63669,gp:130686,
hp:147036,ip:78314,jp:147799,kp:148649,lp:55761,mp:127098,np:134841,qp:96368,rp:67374,sp:48992,tp:146176,up:49956,vp:31961,wp:26388,xp:23811,yp:5E4,zp:126250,Ap:96370,Bp:47355,Cp:47356,Dp:37935,Ep:45521,Fp:21760,Gp:83769,Hp:49977,Ip:49974,Jp:93497,Kp:93498,Lp:34325,Mp:140759,Np:115803,Op:123707,Pp:100081,Qp:35309,Rp:68314,Sp:25602,Tp:100339,Up:143516,Vp:59018,Wp:18248,Xp:50625,Yp:9729,Zp:37168,aq:37169,bq:21667,cq:16749,fq:18635,gq:39305,hq:18046,iq:53969,jq:8213,kq:93926,lq:102852,mq:110099,nq:22678,
oq:69076,pq:137575,rq:139224,sq:100856,tq:154430,uq:17736,wq:3832,xq:147111,yq:55759,zq:64031,Fq:93044,Gq:93045,Hq:34388,Iq:17657,Jq:17655,Kq:39579,Lq:39578,Mq:77448,Nq:8196,Oq:11357,Pq:69877,Qq:8197,Rq:156512,Sq:161613,Tq:156509,Uq:161612,Vq:161614,Wq:82039};function ms(){var a=vb(ns),b;return(new rf(function(c,d){a.onSuccess=function(e){Wk(e)?c(new os(e)):d(new ps("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ps("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new ps("Request timed out","net.timeout",e))};
b=dl("//googleads.g.doubleclick.net/pagead/id",a)})).nb(function(c){c instanceof yf&&b.abort();
return wf(c)})}
function ps(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
t(ps,ab);function os(a){this.xhr=a}
;function qs(){this.i=0;this.ka=null}
qs.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.ka))&&"function"===typeof a.then?a:rs(a):2===this.i&&b?(a=b.call(c,this.ka))&&"function"===typeof a.then?a:ss(a):this};
qs.prototype.getValue=function(){return this.ka};
qs.prototype.$goog_Thenable=!0;function ss(a){var b=new qs;a=void 0===a?null:a;b.i=2;b.ka=void 0===a?null:a;return b}
function rs(a){var b=new qs;a=void 0===a?null:a;b.i=1;b.ka=void 0===a?null:a;return b}
;function ts(a,b){if(a)return a[b.name]}
;function us(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Rk(a)?"same-origin":"cors",credentials:Rk(a)?"same-origin":"include"};b={};for(var d=p(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function vs(){return lg()||am&&bm("applewebkit")&&!bm("version")&&(!bm("safari")||bm("gsa/"))||Oc&&bm("version/")?!0:L("EOM_VISITOR_DATA")?!1:!0}
;function ws(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in Yi)if(Yi[c]==b.embeddedPlayerMode){b=Yi[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function xs(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof ys;this.isTimeout=a instanceof ps&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof yf}
t(xs,ab);xs.prototype.name="BiscottiError";function ys(){ab.call(this,"Biscotti ID is missing from server")}
t(ys,ab);ys.prototype.name="BiscottiMissingError";var ns={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zs=null;function As(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!vs())return Error("User has not consented - not fetching biscotti id.");var a=L("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(ws(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Gk(){var a=As();if(void 0!==a)return wf(a);zs||(zs=ms().then(Bs).nb(function(b){return Cs(2,b)}));
return zs}
function Bs(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ys;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new ys;a=a.id;Hk(a);zs=rs(a);Ds(18E5,2);return a}
function Cs(a,b){b=new xs(b);Hk("");zs=ss(b);0<a&&Ds(12E4,a-1);throw b;}
function Ds(a,b){Xk(function(){ms().then(Bs,function(c){return Cs(b,c)}).nb(cb)},a)}
function Es(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Gk()}catch(b){return wf(b)}}
;function Fs(a){if("1"!=tb(L("PLAYER_VARS",{}))){a&&Fk();try{Es().then(function(){},function(){}),Xk(Fs,18E5)}catch(b){Dk(b)}}}
;function Gs(){this.xd=!0}
function Hs(a){var b={},c=ng([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in tk||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in tk&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var Is={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Js=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ks(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Pk(a).theme;return Js.get(b)||null}catch(c){}return null}
;function Ls(){this.i={};if(this.j=pl()){var a=jg.get("CONSISTENCY",void 0);a&&Ms(this,{encryptedTokenJarContents:a})}}
Ls.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.ha.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Ms(this,a)}};
function Ms(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&nl("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Ns=window.location.hostname.split(".").slice(-2).join(".");function Os(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Ps(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Qs;Os.getInstance=function(){Qs=B("yt.clientLocationService.instance");Qs||(Qs=new Os,z("yt.clientLocationService.instance",Qs));return Qs};
l=Os.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Ps(this))&&this.i.set("yt-location-playability-token",a,15552E3):nl("YT_CL",JSON.stringify({loctok:a}),15552E3,Ns,!0))};
function Ps(a){return void 0===a.i?new Nl("yt-client-location"):a.i}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.i=Ps(this))&&this.i.remove("yt-location-playability-token"):ol("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===L("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Rs(a,b){var c,d=null==(c=ts(a,Xi))?void 0:c.signal;if(d&&b.Pa&&(c=b.Pa[d]))return c();var e;if((c=null==(e=ts(a,Vi))?void 0:e.request)&&b.Mc&&(e=b.Mc[c]))return e();for(var f in a)if(b.Vb[f]&&(a=b.Vb[f]))return a()}
;var Ss=Symbol("injectionDeps");function Ts(a){this.name=a}
Ts.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Us(){this.key=Vs}
function Ws(){this.providers=new Map;this.i=new Map}
Ws.prototype.resolve=function(a){return a instanceof Us?Xs(this,a.key,[],!0):Xs(this,a,[])};
function Xs(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.zc)var e=d.zc;else if(d.Ed)e=d[Ss]?Ys(a,d[Ss],c):[],e=d.Ed.apply(d,ia(e));else if(d.yc){e=d.yc;var f=e[Ss]?Ys(a,e[Ss],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.wr||a.i.set(b,e);
return e}
function Ys(a,b,c){return b?b.map(function(d){return d instanceof Us?Xs(a,d.key,c,!0):Xs(a,d,c)}):[]}
;var Zs;function $s(){Zs||(Zs=new Ws);return Zs}
;function at(a){return function(){return new a}}
;var bt={},ct=(bt.WEB_UNPLUGGED="^unplugged/",bt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",bt.WEB_UNPLUGGED_OPS="^unplugged/",bt.WEB_UNPLUGGED_PUBLIC="^unplugged/",bt.WEB_CREATOR="^creator/",bt.WEB_KIDS="^kids/",bt.WEB_EXPERIMENTS="^experiments/",bt.WEB_MUSIC="^music/",bt.WEB_REMIX="^music/",bt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",bt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",bt);
function dt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=ct[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(ct).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function et(){}
et.prototype.o=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Is:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=wb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;rl.getInstance();var m="USER_INTERFACE_THEME_LIGHT";ul(165)?m="USER_INTERFACE_THEME_DARK":ul(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Ks()||m;h.userInterfaceTheme=k;if(!f){if(k=
Bl())h.connectionType=k;M("web_log_effective_connection_type")&&(k=Cl())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=y.navigator)?0:q.deviceMemory)){var r;q=null==(r=y.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}r=Pk(y.location.href);!M("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},M("kevlar_woffle")&&
ll.i&&(r=ll.i,h.mainAppWebInfo.pwaInstallabilityStatus=!r.i&&r.j?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=ml(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(r=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||
{},{certificationScope:r}));if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var w=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(pb){}w=void 0}w&&(h.timeZone=w)}(w=yk())?h.experimentsToken=w:delete h.experimentsToken;w=zk();Ls.i||(Ls.i=new Ls);h=Ls.i.i;r=[];q=0;for(var u in h)r[q++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:w,consistencyTokenJars:r});!M("web_prequest_context_killswitch")&&(u=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&
(g.request.externalPrequestContext=u);w=rl.getInstance();u=ul(58);w=w.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);w&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=fs())&&(g.clientScreenNonce=f):!f&&(f=fs())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Os.getInstance().setLocationOnInnerTubeContext(g);try{var A=Sk(),E=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:E};var F=
p(Object.entries(A));for(var O=F.next();!O.done;O=F.next()){var N=p(O.value),R=N.next().value,da=N.next().value;A=R;E=da;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+E})}}catch(pb){Nr(pb)}F=g}else Nr(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(O=this.i(a)){this.j(F,O,b);var W;b="/youtubei/v1/"+dt(this.l());(O=null==(W=ts(a.commandMetadata,Wi))?void 0:W.apiUrl)&&(b=O);W=b;(b=L("INNERTUBE_HOST_OVERRIDE"))&&(W=String(b)+String(pc(W)));b=
{};b.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(b.prettyPrint="false");W=Qk(W,b||{},!1);a=M("kevlar_response_command_processor_page")?Object.assign({},{command:a},void 0):Object.assign({},void 0);a={input:W,ya:us(W),ha:F,config:a};a.config.Ya?a.config.Ya.identity=c:a.config.Ya={identity:c};return a}Nr(new Q("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(et.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function ft(){}
t(ft,et);ft.prototype.o=function(){return{input:"/getDatasyncIdsEndpoint",ya:us("/getDatasyncIdsEndpoint","GET"),ha:{}}};
ft.prototype.l=function(){return[]};
ft.prototype.i=function(){};
ft.prototype.j=function(){};var gt={},ht=(gt.GET_DATASYNC_IDS=at(ft),gt);function jt(a){var b=Ja.apply(1,arguments);if(!kt(a)||b.some(function(d){return!kt(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())lt(a,c.value);return a}
function lt(a,b){for(var c in b)if(kt(b[c])){if(c in a&&!kt(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});lt(a[c],b[c])}else if(mt(b[c])){if(c in a&&!mt(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);nt(a[c],b[c])}else a[c]=b[c];return a}
function nt(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,kt(c)?a.push(lt({},c)):mt(c)?a.push(nt([],c)):a.push(c);return a}
function kt(a){return"object"===typeof a&&!Array.isArray(a)}
function mt(a){return"object"===typeof a&&Array.isArray(a)}
;function ot(a,b){Sn.call(this,1,arguments);this.timer=b}
t(ot,Sn);var pt=new Tn("aft-recorded",ot);var qt=window;function rt(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var S=qt.performance||qt.mozPerformance||qt.msPerformance||qt.webkitPerformance||new rt;var st=!1,tt={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(S.clearResourceTimings||S.webkitClearResourceTimings||S.mozClearResourceTimings||S.msClearResourceTimings||S.oClearResourceTimings||cb,S);function ut(a){var b=vt(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function wt(){var a;if(M("csi_use_performance_navigation_timing")||M("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==S?void 0:null==(a=S.getEntriesByType)?void 0:null==(b=a.call(S,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=xt(e.requestStart),e.responseEnd=xt(e.responseEnd),e.redirectStart=xt(e.redirectStart),e.redirectEnd=xt(e.redirectEnd),e.domainLookupEnd=xt(e.domainLookupEnd),e.connectStart=xt(e.connectStart),e.connectEnd=
xt(e.connectEnd),e.responseStart=xt(e.responseStart),e.secureConnectionStart=xt(e.secureConnectionStart),e.domainLookupStart=xt(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=S.timing}else a=S.timing;return a}
function zt(){return(M("csi_use_time_origin")||M("csi_use_time_origin_tvhtml5"))&&S.timeOrigin?Math.floor(S.timeOrigin):S.timing.navigationStart}
function xt(a){return Math.round(zt()+a)}
function At(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Bt(a){a=At(a);a.info||(a.info={});return a.info}
function Ct(a){a=At(a);a.metadata||(a.metadata={});return a.metadata}
function vt(a){a=At(a);a.tick||(a.tick={});return a.tick}
function Dt(a){a=At(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Et(a){a=Dt(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ft(a){a=Dt(a);a.jspbInfos||(a.jspbInfos=[]);return a.jspbInfos}
function Gt(a){var b=At(a).nonce;b||(b=Vr(),At(a).nonce=b);return b}
function Ht(a){var b=vt(a||""),c=ut(a);c&&!st&&(Yn(pt,new ot(Math.round(c-b._start),a)),st=!0)}
function It(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!It(a[d],b[d]))return!1;return!0}
;function Jt(){if(S.getEntriesByType){var a=S.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return xt(a.startTime)}a=S.timing;
return a.cd?Math.max(0,a.cd):0}
;function Kt(){var a=B("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Lt(a){a=a||"";var b=B("ytcsi.reference");b||(Kt(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Kt(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var T={},Mt=(T.auto_search="LATENCY_ACTION_AUTO_SEARCH",T.ad_to_ad="LATENCY_ACTION_AD_TO_AD",T.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",T["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",T.app_startup="LATENCY_ACTION_APP_STARTUP",T["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",T["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",T["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",T["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",T.browse="LATENCY_ACTION_BROWSE",
T.cast_splash="LATENCY_ACTION_CAST_SPLASH",T.channels="LATENCY_ACTION_CHANNELS",T.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",T["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",T["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",T["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",T["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",T["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",T["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",
T["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",T["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",T["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",T["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",T["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",T["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",T["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",T.chips="LATENCY_ACTION_CHIPS",
T["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",T["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",T["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",T.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",T.embed="LATENCY_ACTION_EMBED",T.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",T.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",T.explore="LATENCY_ACTION_EXPLORE",T.home=
"LATENCY_ACTION_HOME",T.library="LATENCY_ACTION_LIBRARY",T.live="LATENCY_ACTION_LIVE",T.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",T.onboarding="LATENCY_ACTION_ONBOARDING",T.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",T.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",T.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",T.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",T["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",T["post.edit"]=
"LATENCY_ACTION_CREATOR_POST_EDIT",T.prebuffer="LATENCY_ACTION_PREBUFFER",T.prefetch="LATENCY_ACTION_PREFETCH",T.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",T.profile_switcher="LATENCY_ACTION_LOGIN",T.reel_watch="LATENCY_ACTION_REEL_WATCH",T.results="LATENCY_ACTION_RESULTS",T["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",T.search_ui="LATENCY_ACTION_SEARCH_UI",T.search_suggest="LATENCY_ACTION_SUGGEST",T.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",T.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",
T.seek="LATENCY_ACTION_PLAYER_SEEK",T.settings="LATENCY_ACTION_SETTINGS",T.store="LATENCY_ACTION_STORE",T.tenx="LATENCY_ACTION_TENX",T.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",T.watch="LATENCY_ACTION_WATCH",T.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",T["watch,watch7"]="LATENCY_ACTION_WATCH",T["watch,watch7_html5"]="LATENCY_ACTION_WATCH",T["watch,watch7ad"]="LATENCY_ACTION_WATCH",T["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",T.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",T.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",
T["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",T["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",T["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",T["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",T["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",T["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",T["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",T["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",
T["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",T.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",T.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",T.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",T),U={},Nt=(U.ad_allowed="adTypesAllowed",U.yt_abt="adBreakType",U.ad_cpn="adClientPlaybackNonce",U.ad_docid="adVideoId",U.yt_ad_an="adNetworks",U.ad_at="adType",U.aida="appInstallDataAgeMs",U.browse_id="browseId",U.p="httpProtocol",U.t="transportProtocol",
U.cs="commandSource",U.cpn="clientPlaybackNonce",U.ccs="creatorInfo.creatorCanaryState",U.ctop="creatorInfo.topEntityType",U.csn="clientScreenNonce",U.docid="videoId",U.GetHome_rid="requestIds",U.GetSearch_rid="requestIds",U.GetPlayer_rid="requestIds",U.GetWatchNext_rid="requestIds",U.GetBrowse_rid="requestIds",U.GetLibrary_rid="requestIds",U.is_continuation="isContinuation",U.is_nav="isNavigation",U.b_p="kabukiInfo.browseParams",U.is_prefetch="kabukiInfo.isPrefetch",U.is_secondary_nav="kabukiInfo.isSecondaryNav",
U.nav_type="kabukiInfo.navigationType",U.prev_browse_id="kabukiInfo.prevBrowseId",U.query_source="kabukiInfo.querySource",U.voz_type="kabukiInfo.vozType",U.yt_lt="loadType",U.mver="creatorInfo.measurementVersion",U.yt_ad="isMonetized",U.nr="webInfo.navigationReason",U.nrsu="navigationRequestedSameUrl",U.pnt="performanceNavigationTiming",U.prt="playbackRequiresTap",U.plt="playerInfo.playbackType",U.pis="playerInfo.playerInitializedState",U.paused="playerInfo.isPausedOnLoad",U.yt_pt="playerType",U.fmt=
"playerInfo.itag",U.yt_pl="watchInfo.isPlaylist",U.yt_pre="playerInfo.preloadType",U.yt_ad_pr="prerollAllowed",U.pa="previousAction",U.yt_red="isRedSubscriber",U.rce="mwebInfo.responseContentEncoding",U.rc="resourceInfo.resourceCache",U.scrh="screenHeight",U.scrw="screenWidth",U.st="serverTimeMs",U.ssdm="shellStartupDurationMs",U.br_trs="tvInfo.bedrockTriggerState",U.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",U.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",U.label="tvInfo.label",
U.is_mdx="tvInfo.isMdx",U.preloaded="tvInfo.isPreloaded",U.aac_type="tvInfo.authAccessCredentialType",U.upg_player_vis="playerInfo.visibilityState",U.query="unpluggedInfo.query",U.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",U.yt_vst="videoStreamType",U.vph="viewportHeight",U.vpw="viewportWidth",U.yt_vis="isVisible",U.rcl="mwebInfo.responseContentLength",U.GetSettings_rid="requestIds",U.GetTrending_rid="requestIds",U.GetMusicSearchSuggestions_rid="requestIds",U.REQUEST_ID="requestIds",U),
Ot="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Pt={},Qt=(Pt.ccs="CANARY_STATE_",Pt.mver="MEASUREMENT_VERSION_",Pt.pis="PLAYER_INITIALIZED_STATE_",Pt.yt_pt="LATENCY_PLAYER_",Pt.pa="LATENCY_ACTION_",Pt.ctop="TOP_ENTITY_TYPE_",
Pt.yt_vst="VIDEO_STREAM_TYPE_",Pt),Rt="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function St(a){return Mt[a]||"LATENCY_ACTION_UNKNOWN"}
function Tt(a,b,c){c=Dt(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Nt){c=Nt[a];0<=eb(Ot,c)&&(b=!!b);a in Qt&&"string"===typeof b&&(b=Qt[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return jt({},d)}0<=eb(Rt,a)||Or(new Q("Unknown label logged with GEL CSI",a))}
;var V={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,
LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,
LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,
LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,
LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,
LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,
LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,
LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,
LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,
LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,
LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,
LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";V[V.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";
V[V.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";V[V.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";V[V.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";V[V.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";
V[V.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";V[V.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";V[V.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";V[V.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";V[V.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";V[V.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";
V[V.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";V[V.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";V[V.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";V[V.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";V[V.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";
V[V.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";V[V.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";V[V.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";V[V.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";V[V.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";
V[V.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";V[V.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";V[V.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";V[V.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";V[V.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";V[V.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";
V[V.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";V[V.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";V[V.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";V[V.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";V[V.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";V[V.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";V[V.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";
V[V.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";V[V.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";V[V.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";V[V.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";V[V.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
V[V.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";V[V.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";V[V.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";V[V.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";V[V.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";V[V.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";V[V.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
V[V.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";V[V.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";V[V.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";V[V.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";V[V.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";V[V.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
V[V.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";V[V.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";V[V.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";V[V.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";V[V.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";V[V.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
V[V.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";V[V.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";V[V.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";V[V.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";V[V.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";V[V.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";V[V.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
V[V.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";V[V.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";V[V.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";V[V.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";V[V.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";V[V.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";V[V.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";V[V.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";
V[V.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";V[V.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";V[V.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";V[V.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";V[V.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";V[V.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";
V[V.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";V[V.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";V[V.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";V[V.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";V[V.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";V[V.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";V[V.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";
V[V.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";V[V.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";V[V.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";V[V.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";V[V.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";
V[V.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";V[V.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";V[V.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";V[V.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";V[V.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";V[V.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";V[V.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";V[V.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";
V[V.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";V[V.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";V[V.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";V[V.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";V[V.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";V[V.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";
V[V.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";V[V.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";V[V.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
V[V.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";V[V.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";V[V.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";V[V.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";
V[V.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";V[V.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";V[V.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";V[V.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";V[V.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";
V[V.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";V[V.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";V[V.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";V[V.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";V[V.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";V[V.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";V[V.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
V[V.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";V[V.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";V[V.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";V[V.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";V[V.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
V[V.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";V[V.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";V[V.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";V[V.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";V[V.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";V[V.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";V[V.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";
V[V.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";V[V.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";V[V.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";V[V.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";V[V.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";V[V.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";V[V.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";V[V.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";
V[V.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";V[V.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";V[V.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";V[V.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";V[V.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";V[V.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";V[V.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";V[V.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
V[V.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";V[V.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";V[V.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";V[V.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";V[V.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";V[V.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";V[V.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";V[V.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
V[V.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";V[V.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";V[V.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";V[V.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";V[V.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";V[V.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";V[V.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";V[V.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";V[V.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
V[V.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Ut={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Ut[Ut.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Ut[Ut.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Ut[Ut.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Vt={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Vt[Vt.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Vt[Vt.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Vt[Vt.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Vt[Vt.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Vt[Vt.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Vt[Vt.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Vt[Vt.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Vt[Vt.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Wt={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Wt[Wt.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Wt[Wt.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Wt[Wt.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Wt[Wt.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Xt={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Xt[Xt.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Xt[Xt.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Yt={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Yt[Yt.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Yt[Yt.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Yt[Yt.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Yt[Yt.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Yt[Yt.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Yt[Yt.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Zt={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Zt[Zt.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Zt[Zt.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Zt[Zt.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Zt[Zt.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var $t={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};$t[$t.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";$t[$t.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";$t[$t.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var au={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};au[au.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
au[au.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";au[au.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var bu="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var cu=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",cu);function du(){this.i=0}
function eu(){du.i||(du.i=new du);return du.i}
du.prototype.tick=function(a,b,c,d){fu(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Fj,D(d,1,a),D(d,2,b),a=new Ij,Ud(a,Fj,5,Jj,d),nr(a,c)):km("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
du.prototype.info=function(a,b,c){var d=Object.keys(a).join("");fu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,km("latencyActionInfo",a,{cttAuthInfo:c}))};
du.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));fu(this,"info_"+d+"_"+b)||(D(a,2,b),b={cttAuthInfo:c},c=new Ij,Ud(c,Bj,7,Jj,a),nr(c,b))};
du.prototype.span=function(a,b,c){var d=Object.keys(a).join("");fu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,km("latencyActionSpan",a,{cttAuthInfo:c}))};
function fu(a,b){cu[b]=cu[b]||{count:0};var c=cu[b];c.count++;c.time=P();a.i||(a.i=Wl(function(){var d=P(),e;for(e in cu)cu[e]&&6E4<d-cu[e].time&&delete cu[e];a&&(a.i=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Or(c)),!0):!1}
;function gu(){var a=["ol"];Lt("").info.actionType="embed";a&&uk("TIMING_AFT_KEYS",a);uk("TIMING_ACTION","embed");if(M("web_csi_via_jspb")){a=L("TIMING_INFO",{});var b=new Bj;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetGuide_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetHome_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);
break;case "GetPlayer_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetSearch_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetSettings_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetTrending_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "GetWatchNext_rid":e=new Ej;D(e,1,c);D(e,2,String(d));Dj(b,e);break;case "yt_red":D(b,14,!!d);break;case "yt_ad":D(b,9,!!d)}}hu(b);b=new Bj;b=D(b,25,!0);b=D(b,1,V[St(L("TIMING_ACTION"))]);(a=L("PREVIOUS_ACTION"))&&
D(b,13,V[St(a)]);(a=L("CLIENT_PROTOCOL"))&&D(b,33,a);(a=L("CLIENT_TRANSPORT"))&&D(b,34,a);(a=fs())&&"UNDEFINED_CSN"!==a&&D(b,4,a);a=iu();1!==a&&-1!==a||D(b,6,!0);a=Bt();if(M("skip_setting_info_in_csi_data_object"))Ct();else{d=Ft();c=[];for(e=0;e<d.length;e++){var f=c,g=f.push;var h=d[e];var k=Bj;if(null==h||""==h)k=new k;else{h=JSON.parse(h);if(!Array.isArray(h))throw Error(void 0);$d=h=sd(h);k=new k(h);$d=null}g.call(f,k)}for(d=0;d<c.length&&"cold"!==Yd(Md(c[d],3),"");d++);}D(b,3,"cold");ju(a);a=
ku();if(0<a.length)for(a=p(a),c=a.next();!c.done;c=a.next())c=c.value,d=new Aj,D(d,1,c),Wd(b,83,Aj,d);hu(b)}else{a=L("TIMING_INFO",{});for(b in a)a.hasOwnProperty(b)&&lu(b,a[b]);b={isNavigation:!0,actionType:St(L("TIMING_ACTION"))};if(a=L("PREVIOUS_ACTION"))b.previousAction=St(a);if(a=L("CLIENT_PROTOCOL"))b.httpProtocol=a;if(a=L("CLIENT_TRANSPORT"))b.transportProtocol=a;(a=fs())&&"UNDEFINED_CSN"!==a&&(b.clientScreenNonce=a);a=iu();if(1===a||-1===a)b.isVisible=!0;M("skip_setting_info_in_csi_data_object")?
Ct():Bt();b.loadType="cold";ju(Bt());a=ku();if(0<a.length)for(b.resourceInfo=[],a=p(a),c=a.next();!c.done;c=a.next())b.resourceInfo.push({resourceCache:c.value});mu(b)}b=Bt();a=Et();if(!(M("skip_setting_info_in_csi_data_object")&&"cold"!==Ct().loadType||"cold"!==b.yt_lt&&"cold"!==a.loadType)){c=vt();d=Dt();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var m in c)m in d||"number"!==typeof c[m]||Z(m,c[m]);m={};c=!1;d=p(Object.keys(b));for(e=d.next();!e.done;e=d.next())e=e.value,(e=Tt(e,b[e]))&&!It(Et(),
e)&&(jt(a,e),jt(m,e),c=!0);c&&mu(m)}z("ytglobal.timingready_",!0);m=L("TIMING_ACTION");B("ytglobal.timingready_")&&m&&"_start"in vt()&&ut()&&Ht()}
function lu(a,b,c,d){null!==b&&(Bt(c)[a]=b,(a=Tt(a,b,c))&&mu(a,c,d))}
function mu(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=Lt(b||""),jt(c.info,a),M("skip_setting_info_in_csi_data_object")&&a.loadType&&(c=a.loadType,Ct(b).loadType=c),jt(Et(b),a),c=Gt(b),b=At(b).cttAuthInfo,eu().info(a,c,b);else{c=new Bj;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":D(c,1,V[a[e]]);break;case "clientActionNonce":D(c,2,a[e]);break;case "clientScreenNonce":D(c,4,a[e]);break;case "loadType":D(c,3,a[e]);break;case "isPrewarmedLaunch":D(c,
92,a[e]);break;case "isFirstInstall":D(c,55,a[e]);break;case "networkType":D(c,5,Ut[a[e]]);break;case "connectionType":D(c,26,X[a[e]]);break;case "detailedConnectionType":D(c,27,Y[a[e]]);break;case "isVisible":D(c,6,a[e]);break;case "playerType":D(c,7,Vt[a[e]]);break;case "clientPlaybackNonce":D(c,8,a[e]);break;case "adClientPlaybackNonce":D(c,28,a[e]);break;case "previousCpn":D(c,77,a[e]);break;case "targetCpn":D(c,76,a[e]);break;case "isMonetized":D(c,9,a[e]);break;case "isPrerollAllowed":D(c,16,
a[e]);break;case "isPrerollShown":D(c,17,a[e]);break;case "adType":D(c,12,a[e]);break;case "adTypesAllowed":D(c,36,a[e]);break;case "adNetworks":D(c,37,a[e]);break;case "previousAction":D(c,13,V[a[e]]);break;case "isRedSubscriber":D(c,14,a[e]);break;case "serverTimeMs":D(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":D(c,20,a[e]);break;case "targetVideoId":D(c,78,a[e]);break;case "adBreakType":D(c,21,Wt[a[e]]);break;case "isNavigation":D(c,25,a[e]);break;case "viewportHeight":D(c,
29,a[e]);break;case "viewportWidth":D(c,30,a[e]);break;case "screenHeight":D(c,84,a[e]);break;case "screenWidth":D(c,85,a[e]);break;case "browseId":D(c,31,a[e]);break;case "isCacheHit":D(c,32,a[e]);break;case "httpProtocol":D(c,33,a[e]);break;case "transportProtocol":D(c,34,a[e]);break;case "searchQuery":D(c,41,a[e]);break;case "isContinuation":D(c,42,a[e]);break;case "availableProcessors":D(c,43,a[e]);break;case "sdk":D(c,44,a[e]);break;case "isLocalStream":D(c,45,a[e]);break;case "navigationRequestedSameUrl":D(c,
64,a[e]);break;case "shellStartupDurationMs":D(c,70,a[e]);break;case "appInstallDataAgeMs":D(c,73,a[e]);break;case "latencyActionError":D(c,71,Xt[a[e]]);break;case "actionStep":D(c,79,a[e]);break;case "jsHeapSizeLimit":D(c,80,a[e]);break;case "totalJsHeapSize":D(c,81,a[e]);break;case "usedJsHeapSize":D(c,82,a[e]);break;case "sourceVideoDurationMs":D(c,90,a[e]);break;case "videoOutputFrames":D(c,93,a[e]);break;case "isResume":D(c,104,a[e]);break;case "adPrebufferedTimeSecs":D(c,39,a[e]);break;case "isLivestream":D(c,
47,a[e]);break;case "liveStreamMode":D(c,91,Yt[a[e]]);break;case "adCpn2":D(c,48,a[e]);break;case "adDaiDriftMillis":D(c,49,a[e]);break;case "videoStreamType":D(c,53,Zt[a[e]]);break;case "playbackRequiresTap":D(c,56,a[e]);break;case "performanceNavigationTiming":D(c,67,a[e]);break;case "transactionType":D(c,74,$t[a[e]]);break;case "playerRotationType":D(c,101,au[a[e]]);break;case "allowedPreroll":D(c,10,a[e]);break;case "shownPreroll":D(c,11,a[e]);break;case "getHomeRequestId":D(c,57,a[e]);break;
case "getSearchRequestId":D(c,60,a[e]);break;case "getPlayerRequestId":D(c,61,a[e]);break;case "getWatchNextRequestId":D(c,62,a[e]);break;case "getBrowseRequestId":D(c,63,a[e]);break;case "getLibraryRequestId":D(c,66,a[e]);break;default:bu.includes(f)&&Dk(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Dk(Error("Codegen laipb translator failed to set "+f))}}hu(c,b)}}
function hu(a,b){if(M("skip_setting_info_in_csi_data_object")){var c=Yd(Md(a,3),"");c&&(Ct(b).loadType=c)}else Ft(b).push(ae(a));Lt(b||"").jspbInfo.push(a);c=Gt(b);b=At(b).cttAuthInfo;eu().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;S.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),S.mark(d))}d=Lt(c||"");d.tick[a]=b||P();if(d.callback&&d.callback[a]){d=p(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Dt(c);d.gelTicks&&(d.gelTicks[a]=!0);d=vt(c);e=b||P();d[a]=e;e=Gt(c);var f=At(c).cttAuthInfo;if("_start"===a){var g=eu();fu(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new zj,D(f,1,e),e=new Ij,Ud(e,zj,6,Jj,f),nr(e,
b)):km("latencyActionBaselined",{clientActionNonce:e},b))}else eu().tick(a,e,b,f);Ht(c);return d[a]}
function nu(){var a=Gt();requestAnimationFrame(function(){setTimeout(function(){a===Gt()&&Z("ol",void 0,void 0)},0)})}
function iu(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=mp+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function ju(a){var b=wt(),c=zt(),d=L("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!M("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Z("srt",b.responseStart),1!==a.prerender&&Z("_start",c,void 0));a=Jt();0<a&&Z("fpt",a);a=wt();a.isPerformanceNavigationTiming&&mu({performanceNavigationTiming:!0});Z("nreqs",a.requestStart,void 0);Z("nress",a.responseStart,void 0);Z("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Z("nrs",a.redirectStart,void 0),Z("nre",a.redirectEnd,void 0));0<
a.domainLookupEnd-a.domainLookupStart&&(Z("ndnss",a.domainLookupStart,void 0),Z("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Z("ntcps",a.connectStart,void 0),Z("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=zt()&&0<a.connectEnd-a.secureConnectionStart&&(Z("nstcps",a.secureConnectionStart,void 0),Z("ntcpe",a.connectEnd,void 0));S&&"getEntriesByType"in S&&ou()}
function pu(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);ic()&&a.setAttribute("nonce",ic());return c?(a=S.getEntriesByName(c))&&a[0]&&(a=a[0],c=zt(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function ku(){var a=[];if(document.querySelector&&S&&S.getEntriesByName)for(var b in tt)if(tt.hasOwnProperty(b)){var c=tt[b];pu(b,c)&&a.push(c)}return a}
function ou(){var a=window.location.protocol,b=S.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",xt(b.startTime)),Z("wffe",xt(b.responseEnd)))}
var qu=window;qu.ytcsi&&(qu.ytcsi.info=lu,qu.ytcsi.tick=Z);var ru="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),su=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function tu(a,b,c,d){this.o=a;this.M=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Pa||(a.Pa={});a.Pa=Object.assign({},ht,a.Pa)}
function uu(a,b,c,d){if(void 0!==tu.i){if(d=tu.i,a=[a!==d.o,b!==d.M,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else tu.i=new tu(a,b,c,d)}
function vu(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Is:c;var d=Rs(b,a.o);if(!d)return wf(new Q("Error: No request builder found for command.",b));var e=d.o(b,void 0,c);return e?new rf(function(f){var g,h,k;return x(function(m){if(1==m.i){h="cors"===(null==(g=e.ya)?void 0:g.mode)?"cors":void 0;if(a.m.xd){var q=e.config,r;q=null==q?void 0:null==(r=q.Ya)?void 0:r.sessionIndex;r=Hs({sessionIndex:q});k=Object.assign({},wu(h),r);return m.u(2)}return v(m,xu(e.config,
h),3)}2!=m.i&&(k=m.j);f(yu(a,e,k));m.i=0})}):wf(new Q("Error: Failed to build request for command.",b))}
function zu(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.ur)?0:d.xr)&&a.l){d=p(ru);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function yu(a,b,c){var d,e,f,g,h,k,m,q,r,w,u,A,E,F,O,N,R,da,W,pb,Ya,ma,H,la,fa,ze,Ae,wd;return x(function(oa){switch(oa.i){case 1:oa.u(2);break;case 3:if((d=oa.j)&&!d.isExpired())return oa.return(Promise.resolve(d.i()));case 2:if(null==(e=b)?0:null==(f=e.ha)?0:f.context)for(g=p([]),h=g.next();!h.done;h=g.next())k=h.value,k.qr(b.ha.context);if(null==(m=a.j)||!m.vr(b.input,b.ha)){oa.u(4);break}return v(oa,a.j.jr(b.input,b.ha),5);case 5:return q=oa.j,M("kevlar_process_local_innertube_responses_killswitch")||
zu(a,q,b),oa.return(q);case 4:return(u=null==(w=b.config)?void 0:w.Ea)&&a.i.has(u)&&M("web_memoize_inflight_requests")?r=a.i.get(u):(A=JSON.stringify(b.ha),O=null!=(F=null==(E=b.ya)?void 0:E.headers)?F:{},b.ya=Object.assign({},b.ya,{headers:Object.assign({},O,c)}),N=Object.assign({},b.ya),"POST"===b.ya.method&&(N=Object.assign({},N,{body:A})),(null==(R=b.config)?0:R.kd)&&Z(b.config.kd),da=function(){return a.M.fetch(b.input,N,b.config)},r=da(),u&&a.i.set(u,r)),v(oa,r,6);
case 6:W=oa.j;if(M("web_one_platform_error_handling")&&(null==(pb=W)?0:null==(Ya=pb.error)?0:Ya.details))for(ma=W.error.details,H=p(ma),la=H.next();!la.done;la=H.next())fa=la.value,(ze=fa["@type"])&&-1<su.indexOf(ze)&&(delete fa["@type"],W=fa);u&&a.i.has(u)&&a.i.delete(u);(null==(Ae=b.config)?0:Ae.ld)&&Z(b.config.ld);if(W||null==(wd=a.j)||!wd.dr(b.input,b.ha)){oa.u(7);break}return v(oa,a.j.ir(b.input,b.ha),8);case 8:W=oa.j;case 7:return zu(a,W,b),oa.return(W)}})}
function xu(a,b){var c,d,e,f;return x(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ya)?void 0:d.sessionIndex;var h=Hs({sessionIndex:e});if(!(h instanceof rf)){var k=new rf(cb);sf(k,2,h);h=k}return v(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},wu(b),f)))})}
function wu(a){var b={"Content-Type":"application/json"};L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=
a),(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Au=new Ts("INNERTUBE_TRANSPORT_TOKEN");var Bu=["share/get_web_player_share_panel"],Cu=["feedback"],Du=["notification/modify_channel_preference"],Eu=["browse/edit_playlist"],Fu=["subscription/subscribe"],Gu=["subscription/unsubscribe"];function Hu(){}
t(Hu,et);Hu.prototype.l=function(){return Fu};
Hu.prototype.i=function(a){return ts(a,Uj)||void 0};
Hu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(Hu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Iu(){}
t(Iu,et);Iu.prototype.l=function(){return Gu};
Iu.prototype.i=function(a){return ts(a,Tj)||void 0};
Iu.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(Iu.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ju(){}
t(Ju,et);Ju.prototype.l=function(){return Cu};
Ju.prototype.i=function(a){return ts(a,Zi)||void 0};
Ju.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Ju.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ku(){}
t(Ku,et);Ku.prototype.l=function(){return Du};
Ku.prototype.i=function(a){return ts(a,Sj)||void 0};
Ku.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Lu(){}
t(Lu,et);Lu.prototype.l=function(){return Eu};
Lu.prototype.i=function(a){return ts(a,Rj)||void 0};
Lu.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Mu(){}
t(Mu,et);Mu.prototype.l=function(){return Bu};
Mu.prototype.i=function(a){return ts(a,Qj)};
Mu.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Vs=new Ts("NETWORK_SLI_TOKEN");function Nu(a){this.i=a}
Nu.prototype.fetch=function(a,b){var c=this,d,e;return x(function(f){c.i&&(d=mc(nc(5,Ac(a,"key")))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Or(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Or(g)}))})};
Nu.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Or(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Nu[Ss]=[new Us];var Ou=new Ts("NETWORK_MANAGER_TOKEN");var Pu;function Qu(a){Sn.call(this,1,arguments);this.csn=a}
t(Qu,Sn);var ao=new Tn("screen-created",Qu),Ru=[],Tu=Su,Uu=0;function Vu(a,b,c,d,e,f,g){function h(){Or(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=Tu(),m=new Zr({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={ba:k};e&&(f.cttAuthInfo=e);M("il_via_jspb")?(e=new oj,e.j(k),pj(e,m.getAsJspb()),c&&c.visualElement?(m=new qj,c.clientScreenNonce&&D(m,2,c.clientScreenNonce),rj(m,c.visualElement.getAsJspb()),g&&D(m,4,Kj[g]),G(e,qj,5,m)):c&&h(),d&&D(e,3,d),sr(e,f,a)):(e={csn:k,pageVe:m.getAsJson()},c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):
c&&h(),d&&(e.cloneCsn=d),a?ir("screenCreated",e,a,f):km("screenCreated",e,f));Yn(ao,new Qu(k));return k}
function Wu(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:hs(b)||void 0,
ba:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Or(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new sj;h.j(b);uj(h,c.getAsJspb());hb(e,function(k){k=k.getAsJspb();Wd(h,3,mj,k)});
"UNDEFINED_CSN"===b?Xu("visualElementAttached",f,void 0,h):tr(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:hb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?Xu("visualElementAttached",f,c):a?ir("visualElementAttached",c,a,f):km("visualElementAttached",c,f)}
function Su(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return dd(b,3)}
function Xu(a,b,c,d){Ru.push({payloadName:a,payload:c,xa:d,options:b});Uu||(Uu=bo())}
function co(a){if(Ru){for(var b=p(Ru),c=b.next();!c.done;c=b.next())if(c=c.value,c.payload)if(M("il_via_jspb"))switch(c.xa.j(a.csn),c.payloadName){case "screenCreated":sr(c.xa,c.options);break;case "visualElementAttached":tr(c.xa,c.options);break;case "visualElementShown":or(c.xa,c.options);break;case "visualElementHidden":pr(c.xa,c.options);break;case "visualElementGestured":qr(c.xa,c.options);break;case "visualElementStateChanged":rr(c.xa,c.options);break;default:Or(new Q("flushQueue unable to map payloadName to JSPB setter"))}else c.payload.csn=
a.csn,ir(c.payloadName,c.payload,null,c.options);Ru.length=0}Uu=0}
;function Yu(){this.j=new Set;this.i=new Set;this.l=new Map}
Yu.prototype.s=function(){};
Yu.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Na(Yu);function Zu(){this.o=[];this.N=[];this.i=[];this.m=[];this.C=[];this.j=new Set;this.v=new Map}
Zu.prototype.s=function(a){this.client=a};
function $u(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=fs(c),f=ds(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Wu(a.client,e,f,[$r(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Wu(a.client,e,f,[$r(d.playerResponse.trackingParams)])}})}
function av(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.o.push([b,c]);else{var e=fs(d);c=c||ds(d);e&&c&&Wu(a.client,e,c,[b])}}
Zu.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=fs(void 0===c?0:c)){a=this.client;var e=$r(d);d={cttAuthInfo:hs(c)||void 0,ba:c};M("il_via_jspb")?(b=new vj,b.j(c),e=e.getAsJspb(),G(b,mj,2,e),D(b,4,Kj.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Xu("visualElementGestured",d,void 0,b):qr(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===c?Xu("visualElementGestured",
d,e):a?ir("visualElementGestured",e,a,d):km("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
function bv(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){cv(a,b,c);var f=ds(c.layer);if(f){for(var g=p(a.o),h=g.next();!h.done;h=g.next())h=h.value,av(a,h[0],h[1]||f,c.layer);f=p(a.N);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=fs(g);var m=k[0]||ds(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:hs(h)||void 0,ba:h};M("il_via_jspb")?(q=new yj,q.j(h),m=m.getAsJspb(),G(q,mj,2,m),"UNDEFINED_CSN"===h?Xu("visualElementStateChanged",k,void 0,q):rr(q,k,g)):
(m={csn:h,ve:m.getAsJson(),clientData:q},"UNDEFINED_CSN"===h?Xu("visualElementStateChanged",k,m):g?ir("visualElementStateChanged",m,g,k):km("visualElementStateChanged",m,k))}}}};
fs(c.layer)||a.l();if(c.Yb)for(var d=p(c.Yb),e=d.next();!e.done;e=d.next())$u(a,e.value,c.layer);else Nr(Error("Delayed screen needs a data promise."))}
function cv(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ed?c.ed:c.layer;var e=fs(d);d=ds(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Vu(a.client,b,f,c.Xb,c.cttAuthInfo,g,c.gr)}catch(m){Qr(m,{sr:b,rootVe:d,parentVisualElement:void 0,er:e,pr:f,Xb:c.Xb});Nr(m);return}is(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Yr));for(f=b.next();!f.done;f=b.next())if(fs(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:hs(e)||void 0,ba:e,Zb:g},M("il_via_jspb")?(h=new wj,h.j(e),d=d.getAsJspb(),G(h,mj,2,d),D(h,4,g?16:8),"UNDEFINED_CSN"===e?Xu("visualElementHidden",f,void 0,h):pr(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"===e?Xu("visualElementHidden",f,d):b?ir("visualElementHidden",
d,b,f):km("visualElementHidden",d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");mu({clientScreenNonce:k});Yu.getInstance().clear();d=ds(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e=k,k={cttAuthInfo:hs(e)||void 0,ba:e},M("il_via_jspb")?(b=new xj,b.j(e),f=d.getAsJspb(),G(b,mj,2,f),D(b,4,1),"UNDEFINED_CSN"===e?Xu("visualElementShown",k,void 0,b):or(b,k)):(b={csn:e,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"===
e?Xu("visualElementShown",k,b):km("visualElementShown",b,k)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&av(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Nr(m)}}for(c=a.m.length=0;c<a.C.length;c++){e=a.C[c];try{e()}catch(m){Nr(m)}}}
;function dv(){var a,b;return x(function(c){if(1==c.i)return a=$s().resolve(Au),a?v(c,vu(a),2):(Or(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Or(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.fr);Or(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var ev=y.caches,fv;function gv(a){var b=a.indexOf(":");return-1===b?{mc:a}:{mc:a.substring(0,b),datasyncId:a.substring(b+1)}}
function hv(){return x(function(a){if(void 0!==fv)return a.return(fv);fv=new Promise(function(b){var c;return x(function(d){switch(d.i){case 1:return ya(d,2),v(d,ev.open("test-only"),4);case 4:return v(d,ev.delete("test-only"),5);case 5:za(d,3);break;case 2:if(c=Aa(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(fv)})}
function iv(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.i)return v(k,hv(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return v(k,ev.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=gv(f),h=g.datasyncId,!h||a.includes(h)||b.push(ev.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function jv(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.i)return v(h,hv(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=om("cache contains other");return v(h,ev.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=gv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function kv(){try{return!!self.localStorage}catch(a){return!1}}
;function lv(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function mv(a){if(kv()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=lv(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function nv(){if(!kv())return!1;var a=om(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=lv(c.value),void 0!==c&&c!==a)return!0;return!1}
;function ov(){dv().then(function(a){a&&(zn(a),iv(a),mv(a))})}
function pv(){var a=new Jo;Qh.T(function(){var b,c,d,e;return x(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=om("clear");if(b.startsWith("V")){var g=[b];zn(g);iv(g);mv(g);return f.return()}c=nv();return v(f,jv(),3);case 3:return d=f.j,v(f,An(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.L()?ov():a.m.add("publicytnetworkstatus-online",ov,!0,void 0,void 0),f.i=0}})})}
;function qv(a){a&&(a.dataset?a.dataset[rv("loaded")]="true":a.setAttribute("data-loaded","true"))}
function sv(a,b){return a?a.dataset?a.dataset[rv(b)]:a.getAttribute("data-"+b):null}
var tv={};function rv(a){return tv[a]||(tv[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var uv=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,vv=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function wv(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(uv,""),c=c.replace(vv,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else xv(a,b,c)}
function xv(a,b,c){c=void 0===c?null:c;var d=yv(a),e=document.getElementById(d),f=e&&sv(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=qq(d,b),b=""+Ra(b),zv[b]=f),g||(e=Av(a,d,function(){sv(e,"loaded")||(qv(e),tq(d),Xk(Xa(uq,d),0))},c)))}
function Av(a,b,c,d){d=void 0===d?null:d;var e=cf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);zh(e,Lb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Bv(a){a=yv(a);var b=document.getElementById(a);b&&(uq(a),b.parentNode.removeChild(b))}
function Cv(a,b){a&&b&&(a=""+Ra(b),(a=zv[a])&&sq(a))}
function yv(a){var b=document.createElement("a");fc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var zv={};var Dv=[],Ev=!1;function Fv(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&vs()){var a=L("PLAYER_VARS",{});if("1"!=tb(a)&&!ws(a)){var b=function(){Ev=!0;"google_ad_status"in window?uk("DCLKSTAT",1):uk("DCLKSTAT",2)};
try{wv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Dv.push(Qh.T(function(){if(!(Ev||"google_ad_status"in window)){try{Cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ev=!0;uk("DCLKSTAT",3)}},5E3))}}}
function Gv(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function Hv(){this.state=1;this.i=null}
l=Hv.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Db("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=Ab())?f.createScript(e):e,e=(new Fb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Db("From proto message. b/166824318"),d=Lb(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Kv(this,e,
d,a.program,b,c)}else Or(Error("Cannot initialize botguard without program"))};
function Kv(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,wv(c,function(){window[g]?Lv(a,d,g,e):(a.state=3,Bv(c),Or(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=cf("SCRIPT"),f.textContent=b,f.nonce=ic(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Lv(a,d,g,e):(a.state=4,Or(new Q("Unable to load Botguard from JS")))):Or(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.yb()};
function Lv(a,b,c,d){a.state=5;try{var e=new vh({program:b,globalName:c,hd:M("att_web_record_metrics")});e.ud.then(function(){a.state=6;d&&d(b)});
a.Jb(e)}catch(f){a.state=7,f instanceof Error&&Or(f)}}
l.invoke=function(a){a=void 0===a?{}:a;var b=this.yb();if(b){var c={Wb:a};if(b.eb)throw Error("Already disposed");a=th();var d;null!=(d=b.wa)&&d.j.i.Lb("/client_streamz/bg/fsc",d.Ea);d=b.yd([c.Wb,c.wd]);null!=(b=b.wa)&&(a=th()-a,b.l.i.ob("/client_streamz/bg/fsl",a,b.Ea));b=d}else b=null;return b};
l.dispose=function(){this.Mb()};
l.Mb=function(){this.Jb(null);this.state=8};
l.yb=function(){return this.i};
l.Jb=function(a){ie(this.i);this.i=a};function Mv(){Hv.apply(this,arguments)}
t(Mv,Hv);Mv.prototype.Mb=function(){this.state=8};
Mv.prototype.yb=function(){return B("yt.abuse.playerAttLoader")};
Mv.prototype.Jb=function(a){ie(B("yt.abuse.playerAttLoader"));z("yt.abuse.playerAttLoader",a);a&&z("yt.abuse.playerAttLoaderRun",function(b){return a.snapshot(b)})};var Nv=new Mv;var Ov=new Hv;function Pv(){return M("use_player_abuse_bg_library")?Nv.isInitialized():Ov.isInitialized()}
function Qv(a){a=void 0===a?{}:a;M("use_player_abuse_bg_library")?(a=void 0===a?{}:a,a=Nv.invoke(a)):a=Ov.invoke(a);return a}
;function Rv(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?$l():d;this.m=c;this.l=d;this.j=new uh;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={Ga:a.Ga,Ra:a.Ra},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ra=d;a.Ga=e;d=function(f){return function(){f.Ga.Bb();b.i[f.Ra].lb=!0;b.i.every(function(g){return!0===g.lb})&&b.j.resolve()}}(a);
e=Wl(d,Sv(this,a.Ga));this.i[a.Ra]=Object.assign({},a.Ga,{Bb:d,hb:e})}}
function Tv(a){var b=Array.from(a.i.keys()).sort(function(d,e){return Sv(a,a.i[e])-Sv(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.hb||c.lb||(a.l.fa(c.hb),Wl(c.Bb,10))}
Rv.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.hb||b.lb||this.l.fa(b.hb),b.lb=!0;this.j.resolve()};
function Sv(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function Uv(a){this.state=a;this.plugins=[];this.s=void 0}
Uv.prototype.install=function(){this.plugins.push.apply(this.plugins,ia(Ja.apply(0,arguments)))};
Uv.prototype.uninstall=function(){var a=this;Ja.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
Uv.prototype.transition=function(a,b){var c=this,d=this.C.find(function(f){return f.from===c.state&&f.F===a});
if(d){this.l&&(Tv(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Vv(this,e,this.s),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Vv(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
$l();var g={};e=p(e);for(var h=e.next();!h.done;g={Sa:g.Sa},h=e.next())g.Sa=h.value,Yl(function(k){return function(){k.Sa.callback.apply(k.Sa,ia(d))}}(g));
f=f.map(function(k){var m;return{Bb:function(){k.callback.apply(k,ia(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new Rv(f))}}
ea.Object.defineProperties(Uv.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Wv(a){Uv.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.i=new Map;this.C=[{from:"document_active",F:"document_disposed_preventable",action:this.N},{from:"document_active",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"document_disposed",action:this.m},{from:"document_disposed_preventable",F:"flush_logs",action:this.o},{from:"document_disposed_preventable",F:"document_active",action:this.j},{from:"document_disposed",F:"flush_logs",action:this.o},
{from:"document_disposed",F:"document_active",action:this.j},{from:"document_disposed",F:"document_disposed",action:function(){}},
{from:"flush_logs",F:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
t(Wv,Uv);Wv.prototype.N=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Wv.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Wv.prototype.o=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Wv.prototype.j=function(){this.i=new Map};function Xv(a){Uv.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.C=[{from:"document_visibility_unknown",F:"document_visible",action:this.j},{from:"document_visibility_unknown",F:"document_hidden",action:this.i},{from:"document_visibility_unknown",F:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",F:"document_backgrounded",action:this.m},{from:"document_visible",F:"document_hidden",action:this.i},{from:"document_visible",F:"document_foregrounded",action:this.o},
{from:"document_visible",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_visible",action:this.j},{from:"document_foregrounded",F:"document_hidden",action:this.i},{from:"document_foregrounded",F:"document_foregrounded",action:this.o},{from:"document_hidden",F:"document_visible",action:this.j},{from:"document_hidden",F:"document_backgrounded",action:this.m},{from:"document_hidden",F:"document_hidden",action:this.i},{from:"document_backgrounded",F:"document_hidden",action:this.i},
{from:"document_backgrounded",F:"document_backgrounded",action:this.m},{from:"document_backgrounded",F:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
t(Xv,Uv);Xv.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Xv.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Xv.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Xv.prototype.o=function(a,b){a(null==b?void 0:b.event)};function Yv(){this.i=new Wv;this.j=new Xv}
Yv.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,ia(a));this.j.install.apply(this.j,ia(a))};function Zv(){Yv.call(this);var a={};this.install((a.document_disposed={callback:this.l},a));a={};this.install((a.flush_logs={callback:this.m},a))}
var $v;t(Zv,Yv);Zv.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new lj,b=fs();b&&D(a,1,b);b=new Ij;Ud(b,lj,380,Jj,a);nr(b);M("web_fp_via_jspb_and_json")&&km("finalPayload",{csn:fs()})}else km("finalPayload",{csn:fs()})};
Zv.prototype.l=function(){Sr(Tr)};function aw(){}
aw.getInstance=function(){var a=B("ytglobal.storage_");a||(a=new aw,z("ytglobal.storage_",a));return a};
aw.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(bw()):d.return()})};
function bw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",aw);function im(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=xk("ytidb_transaction_ended_event_rate_limit",.02)}
im.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":cw(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function cw(a,b){aw.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:dw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:dw(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function dw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function ew(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.channel="widget";this.G=!!a;this.v=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.G&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.s||0<=eb(d.s,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.s=this.j=this.o=null;window.addEventListener("message",this.v)}
t(ew,J);ew.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Ek(d)}}};
ew.prototype.D=function(){window.removeEventListener("message",this.v);J.prototype.D.call(this)};function fw(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new ew(!!L("WIDGET_ID_ENFORCE")),b=this.gd.bind(this);a.o=b;a.s=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=fw.prototype;l.gd=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,gw(this,a)),this.l[a]=!0)):this.Nb(a,b,c)};
l.Nb=function(){};
function gw(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Sc=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.wb());this.sendMessage("onReady");fb(this.j,this.uc,this);this.j=[]};
l.wb=function(){return null};
function hw(a,b){a.sendMessage("infoDelivery",b)}
l.uc=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.uc({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};var iw={},jw=(iw["api.invalidparam"]=2,iw.auth=150,iw["drm.auth"]=150,iw["heartbeat.net"]=150,iw["heartbeat.servererror"]=150,iw["heartbeat.stop"]=150,iw["html5.unsupportedads"]=5,iw["fmt.noneavailable"]=5,iw["fmt.decode"]=5,iw["fmt.unplayable"]=5,iw["html5.missingapi"]=5,iw["html5.unsupportedlive"]=5,iw["drm.unavailable"]=5,iw["mrm.blocked"]=151,iw);var kw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function lw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function mw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=p(kw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function nw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function ow(a){fw.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.rd.bind(this));this.addEventListener("onVolumeChange",this.sd.bind(this));this.addEventListener("onApiChange",this.md.bind(this));this.addEventListener("onPlaybackQualityChange",this.od.bind(this));this.addEventListener("onPlaybackRateChange",this.pd.bind(this));this.addEventListener("onStateChange",this.qd.bind(this));this.addEventListener("onWebglSettingsChanged",
this.td.bind(this))}
t(ow,fw);l=ow.prototype;
l.Nb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&lw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=mw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=mw(e);break;case "loadPlaylist":case "cuePlaylist":e=nw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);lw(a)&&hw(this,this.wb())}};
l.onReady=function(){var a=this.Sc.bind(this);this.i.j=a;a=this.api.getVideoData();if(!a.isPlayable){a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?jw[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.wb=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.qd=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());hw(this,a)};
l.od=function(a){hw(this,{playbackQuality:a})};
l.pd=function(a){hw(this,{playbackRate:a})};
l.md=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.sd=function(){hw(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.rd=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());hw(this,a)};
l.td=function(){var a={sphericalProperties:this.api.getSphericalProperties()};hw(this,a)};
l.dispose=function(){fw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function pw(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.oc,this)}
t(pw,J);l=pw.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.za("RECEIVING"))};
l.za=function(a,b){this.started&&!this.i()&&this.connection.za(a,b)};
l.oc=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=qw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=rw(a,c))&&this.za(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.nd.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.nd=function(a,b){this.started&&!this.i()&&this.connection.za(a,this.vb(a,b))};
l.vb=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.D=function(){var a=this.connection;a.i()||ni(a.j,"command",this.oc,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function sw(a,b){pw.call(this,b);this.api=a;this.start()}
t(sw,pw);sw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
sw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function qw(a,b){switch(a){case "loadVideoById":return a=mw(b),[a];case "cueVideoById":return a=mw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=nw(b),[a];case "cuePlaylist":return a=nw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function rw(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
sw.prototype.vb=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return pw.prototype.vb.call(this,a,b)};
sw.prototype.D=function(){pw.prototype.D.call(this);delete this.api};function tw(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);ke(this,this.j)}
Za(tw,J);tw.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
tw.prototype.m=function(a,b){this.i()||this.j.ta.apply(this.j,arguments)};function uw(a,b,c){tw.call(this);this.l=a;this.destination=b;this.id=c}
t(uw,tw);uw.prototype.za=function(a,b){this.i()||this.l.za(this.destination,this.id,a,b)};
uw.prototype.D=function(){this.destination=this.l=null;tw.prototype.D.call(this)};function vw(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=dq(window,"message",this.l.bind(this));this.connection=new uw(this,a,b);ke(this,this.connection)}
t(vw,J);vw.prototype.za=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(JSON.stringify(a),this.origin))};
vw.prototype.l=function(a){if(!this.i()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.i()||c.m("command",b.command,b.data,a.origin)}}}};
vw.prototype.D=function(){eq(this.j);this.destination=null;J.prototype.D.call(this)};function ww(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ww.prototype.clone=function(){var a=new ww,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=vb(c):a[b]=c}return a};var xw=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function yw(a){a=a||"";if(window.spf){var b=a.match(xw);spf.style.load(a,b?b[1]:"",void 0)}else zw(a)}
function zw(a){var b=Aw(a),c=document.getElementById(b),d=c&&sv(c,"loaded");d||c&&!d||(c=Bw(a,b,function(){sv(c,"loaded")||(qv(c),tq(b),Xk(Xa(uq,b),0))}))}
function Bw(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Lb(a);gc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Aw(a){var b=cf("A");Db("This URL is never added to the DOM");fc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Cw(){J.call(this);this.j=[]}
t(Cw,J);Cw.prototype.D=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.D.call(this)};function Dw(){Cw.apply(this,arguments)}
t(Dw,Cw);function Ew(a,b,c,d){J.call(this);var e=this;this.v=b;this.webPlayerContextConfig=d;this.da=!1;this.api={};this.W=this.s=null;this.K=new K;this.j={};this.R=this.X=this.elementId=this.va=this.config=null;this.P=!1;this.m=this.G=null;this.la={};this.Wa=["onReady"];this.lastError=null;this.Ia=NaN;this.J={};this.Xa=new Dw(this);this.U=0;this.l=this.o=a;ke(this,this.K);Fw(this);Gw(this);ke(this,this.Xa);c?this.U=Xk(function(){e.loadNewVideoConfig(c)},0):d&&(Hw(this),Iw(this))}
t(Ew,J);l=Ew.prototype;l.getId=function(){return this.v};
l.loadNewVideoConfig=function(a){if(!this.i()){this.U&&(Yk(this.U),this.U=0);var b=a||{};b instanceof ww||(b=new ww(b));this.config=b;this.setConfig(a);Iw(this);this.isReady()&&Jw(this)}};
function Hw(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.va=a;this.config=Kw(a);Hw(this);if(!this.X){var b;this.X=Lw(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Jh(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Jh(Number(a)||a))};
function Jw(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Mw(a){var b=!0,c=Nw(a);c&&a.config&&(a=Ow(a),b=sv(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Iw(a){if(!a.i()&&!a.P){var b=Mw(a);if(b&&"html5"===(Nw(a)?"html5":null))a.R="html5",a.isReady()||Pw(a);else if(Qw(a),a.R="html5",b&&a.m&&a.o)a.o.appendChild(a.m),Pw(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Rw(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Kw(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);Pw(a)};
a.P=!0;b?a.G():(wv(Ow(a),a.G),(b=Sw(a))&&yw(b),Tw(a)&&!c&&z("yt.player.Application.create",null))}}}
function Nw(a){var b=bf(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function Pw(a){if(!a.i()){var b=Nw(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.P=!1;if(!Rw(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Uw(a)}else a.Ia=Xk(function(){Pw(a)},50)}}
function Uw(a){Fw(a);a.da=!0;var b=Nw(a);if(b){a.s=Vw(a,b,"addEventListener");a.W=Vw(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Vw(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.s&&a.s(g,a.j[g]);Jw(a);a.X&&a.X(a.api);a.K.ta("onReady",a.api)}
function Vw(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Or(f))}}}
function Fw(a){a.da=!1;if(a.W)for(var b in a.j)a.j.hasOwnProperty(b)&&a.W(b,a.j[b]);for(var c in a.J)a.J.hasOwnProperty(c)&&Yk(Number(c));a.J={};a.s=null;a.W=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.va};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.da};
function Gw(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){tq("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){tq("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Lw(this,b);d&&(0<=eb(this.Wa,a)||this.j[a]||(b=Ww(this,a),this.s&&this.s(a,b)),this.K.subscribe(a,d),"onReady"===a&&this.isReady()&&Xk(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=Lw(this,b))&&ni(this.K,a,b)};
function Lw(a,b){var c=b;if("string"===typeof b){if(a.la[b])return a.la[b];c=function(){var d=Ja.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){Nr(f)}};
a.la[b]=c}return c?c:null}
function Ww(a,b){var c="ytPlayer"+b+a.v;a.j[b]=c;y[c]=function(d){var e=Xk(function(){if(!a.i()){try{a.K.ta(b,null!=d?d:void 0)}catch(h){Or(new Q("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.J,g=String(e);g in f&&delete f[g]}},0);
sb(a.J,String(e))};
return c}
l.getPlayerType=function(){return this.R||(Nw(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Qw(a){a.cancel();Fw(a);a.R=null;a.config&&(a.config.loaded=!1);var b=Nw(a);b&&(Mw(a)||!Tw(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.G&&Cv(Ow(this),this.G);Yk(this.Ia);this.P=!1};
l.D=function(){Qw(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Nr(b)}this.la=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(y[this.j[a]]=null);this.va=this.config=this.api=null;delete this.o;delete this.l;J.prototype.D.call(this)};
function Tw(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Ow(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Sw(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Rw(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Kk(c||"","&")[b]}
function Kw(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var Xw={},Yw="player_uid_"+(1E9*Math.random()>>>0);function Zw(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?bf(c):c;var e=Yw+"_"+Ra(c),f=Xw[e];if(f&&d)return $w(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Ew(c,e,a,b);Xw[e]=f;tq("player-added",f.api);le(f,function(){delete Xw[f.getId()]});
return f.api}
function $w(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var ax=null,bx=null,cx=null;function dx(){ex()}
function fx(){ex()}
function ex(){var a=ax.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function gx(){ax&&ax.sendAbandonmentPing&&ax.sendAbandonmentPing();L("PL_ATT")&&(M("use_player_abuse_bg_library")?Nv.dispose():Ov.dispose());for(var a=Qh,b=0,c=Dv.length;b<c;b++)a.fa(Dv[b]);Dv.length=0;Bv("//static.doubleclick.net/instream/ad_status.js");Ev=!1;uk("DCLKSTAT",0);je(cx,bx);ax&&(ax.removeEventListener("onVideoDataChange",dx),ax.destroy())}
;function hx(a,b,c){a="ST-"+kc(a).toString(36);b=b?tc(b):"";c=c||5;vs()&&nl(a,b,c)}
;function ix(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=oc(window.location.href);g&&f.push(g);g=oc(d);if(0<=eb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),fc(f,d),d=f.href),d&&(d=pc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:fs()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
hx(d,b,h)}else hx(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=vc(a,k)+m;var r=void 0===r?Ih:r;a:{r=void 0===r?Ih:r;for(k=0;k<r.length;++k)if(m=r[k],m instanceof Gh&&m.isValid(a)){r=new Ob(a,Pb);break a}r=void 0}r=r||Sb;if(r instanceof Ob)var w=Qb(r);else{b:if(yh){try{w=new URL(r)}catch(u){w="https:";break b}w=w.protocol}else c:{w=document.createElement("a");try{w.href=r}catch(u){w=void 0;
break c}w=w.protocol;w=":"===w||""===w?"https:":w}w="javascript:"!==w?r:void 0}void 0!==w&&(c.href=w)}return!0}
;z("yt.setConfig",uk);z("yt.config.set",uk);z("yt.setMsg",ks);z("yt.msgs.set",ks);z("yt.logging.errors.log",Nr);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}Fs(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=Pk(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));gu();c=L("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;
if(!c.serializedForcedExperimentIds){var d=Pk(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}ax=Zw(a,c);ax.addEventListener("onVideoDataChange",dx);ax.addEventListener("onReady",fx);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?cx=new ow(ax):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(bx=new vw(window.parent,a,b),cx=new sw(ax,bx.connection));Fv();M("ytidb_create_logger_embed_killswitch")||hm();a={};$v||($v=new Zv);$v.install((a.flush_logs=
{callback:function(){Tq()}},a));
M("embeds_web_enable_new_nwl")?Po():Xo();M("ytidb_clear_embedded_player")&&Qh.T(function(){var e;if(!Pu){var f=$s(),g={Gb:Ou,yc:Nu};f.providers.set(g.Gb,g);g={Vb:{feedbackEndpoint:at(Ju),modifyChannelNotificationPreferenceEndpoint:at(Ku),playlistEditEndpoint:at(Lu),subscribeEndpoint:at(Hu),unsubscribeEndpoint:at(Iu),webPlayerShareEntityServiceEndpoint:at(Mu)}};var h=Os.getInstance(),k={};h&&(k.client_location=h);if(void 0===m){Gs.i||(Gs.i=new Gs);var m=Gs.i}void 0===e&&(e=f.resolve(Ou));uu(g,e,m,
k);m={Gb:Au,zc:tu.i};f.providers.set(m.Gb,m);Pu=f.resolve(Au)}pv()})});
var jx=Ck(function(){nu();var a=rl.getInstance(),b=ul(119),c=1<window.devicePixelRatio;if(document.body&&ai(document.body,"exp-invert-logo"))if(c&&!ai(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ai(d,"inverted-hdpi")){var e=Zh(d);$h(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ai(document.body,"inverted-hdpi")&&bi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=vl(b)||0;d=c?d|67108864:d&-67108865;0==d?delete ql[b]:(c=d.toString(16),
ql[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in ql)d.push(f+"="+encodeURIComponent(String(ql[f])));nl(b,d.join("&"),63072E3,a.j,c)}Zu.i||(Zu.i=new Zu);a=Zu.i;f=16623;var g=void 0===g?{}:g;Object.values(ls).includes(f)||(Or(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.o=[];a.N=[];g.Yb?bv(a,f,g):cv(a,f,g)}),kx=Ck(function(a){M("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?
gx():a.persisted||gx()}),lx=Ck(gx);
window.addEventListener?(window.addEventListener("load",jx),window.addEventListener("pagehide",kx)):window.attachEvent&&(window.attachEvent("onload",jx),window.attachEvent("onunload",lx));z("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Pv);z("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Qv);z("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||Gv);z("yt.player.exports.navigate",B("yt.player.exports.navigate")||ix);
z("yt.util.activity.init",B("yt.util.activity.init")||iq);z("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||lq);z("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||jq);}).call(this);
