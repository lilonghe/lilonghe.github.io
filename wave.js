/**
 * JParticles v2.0.1 (https://github.com/Barrior/JParticles)
 * Copyright 2016-present Barrior <Barrior@qq.com>
 * Licensed under the MIT (https://opensource.org/licenses/MIT)
 */
+function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e){return parseInt(e,10)}function n(e){return e.replace(N.trimAll,"")}function r(){return"#"+M().toString(16).slice(-6)}function o(e,t){return e===t?e:M()*(e-t)+t}function i(){var e=arguments,t=e[0]||{},n=!1,r=e.length,o=1,u=void 0,a=void 0,s=void 0;for(f(t)&&(n=t,t=e[1]||{},o++);o<r;o++)for(a in e[o])if(u=e[o][a],n&&(c(u)||(s=T(u)))){var l=t[a];s?(s=!1,l=T(l)?l:[]):l=c(l)?l:{},t[a]=i(n,l,u)}else t[a]=u;return t}function u(e,t){return Object.prototype.toString.call(e)===t}function a(e){return u(e,"[object Function]")}function c(e){return u(e,"[object Object]")}function s(e){return"string"==typeof e}function f(e){return"boolean"==typeof e}function l(e){return"undefined"==typeof e}function d(e){return null===e}function v(e){return!(!e||1!==e.nodeType)}function p(e,n){var r=q.getComputedStyle(e)[n];return N.styleValue.test(r)?t(r):r}function h(e){for(var t=e.offsetLeft||0,n=e.offsetTop||0;e=e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop;return{left:t,top:n}}function m(e,t,n){e.addEventListener(t,n)}function y(e,t,n){e.removeEventListener(t,n)}function b(e){e.cw=e.c.width=p(e.container,"width")||D,e.ch=e.c.height=p(e.container,"height")||I}function g(e,t){return e>0&&e<1?t*e:e}function O(e,t){return(o(e,t)||e)*(M()>.5?1:-1)}function w(e,t){if(e.set){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];for(var i=0;i<r.length;i++)a(r[i])&&t.push(r[i])}return e}function j(e){var t=!!T(e)&&e.length,n=function(){return e[S(M()*t)]};return s(e)?function(){return e}:t?n:r}function A(e,t){e.canvasRemoved||!e.set||e.paused||(a(t)&&t.call(e,"pause"),e.paused=!0)}function E(e,t){!e.canvasRemoved&&e.set&&e.paused&&(a(t)&&t.call(e,"open"),e.paused=!1,e.draw())}function z(e,t){e.set.resize&&(e._resizeHandler=function(){var n=e.cw,r=e.ch;b(e);var o=e.cw/n,i=e.ch/r;T(e.dots)&&e.dots.forEach(function(e){c(e)&&(e.x*=o,e.y*=i)}),a(t)&&t.call(e,o,i),e.paused&&e.draw()},m(q,"resize",e._resizeHandler))}function R(e,t,r){n(t).split(",").forEach(function(t){e[t]=function(){B[t](this,r)}})}function C(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K;Object.defineProperty(n,t,{value:e,writable:!1,enumerable:!0,configurable:!1})}var L=!0,P=/msie\s8.0/i.test(navigator.userAgent);Object.defineProperty&&!P||(L=!1,Object.defineProperty=function(e,t,n){e[t]=n.value}),"function"!=typeof Object.create&&(Object.create=function(){function e(){}var t=Object.prototype.hasOwnProperty;return function(n){if("object"!=typeof n)throw TypeError("Object prototype may only be an Object or null");e.prototype=n;var r=new e;if(e.prototype=null,arguments.length>1){var o=Object(arguments[1]);for(var i in o)t.call(o,i)&&(r[i]=o[i])}return r}}());var k=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F="2.0.1",q=window,x=document,M=Math.random,S=Math.floor,T=Array.isArray,H=!!q.DeviceOrientationEvent,D=485,I=300,N={trimAll:/\s/g,styleValue:/^\d+(\.\d+)?[a-z]+$/i},_=function(){function t(n,r,o){e(this,t),L&&(this.container=v(r)?r:x.querySelector(r))&&(this.set=i(!0,{},K.commonConfig,n.defaultConfig,o),this.c=x.createElement("canvas"),this.cxt=this.c.getContext("2d"),this.paused=!1,b(this),this.container.innerHTML="",this.container.appendChild(this.c),this.color=j(this.set.color),this.observeCanvasRemoved(),this.init(),this.resize())}return k(t,[{key:"requestAnimationFrame",value:function(){this.canvasRemoved||this.paused||q.requestAnimationFrame(this.draw.bind(this))}},{key:"observeCanvasRemoved",value:function(){var e=this;this.destructionListeners=[],V(this.c,function(){e.canvasRemoved=!0,e._resizeHandler&&y(q,"resize",e._resizeHandler),e.destructionListeners.forEach(function(e){e()})})}},{key:"onDestroy",value:function(){return w.apply(void 0,[this,this.destructionListeners].concat(Array.prototype.slice.call(arguments)))}},{key:"pause",value:function(){A(this)}},{key:"open",value:function(){E(this)}},{key:"resize",value:function(){z(this)}}]),t}();q.requestAnimationFrame=function(e){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)}}(q);var V=function(){var e=q.MutationObserver||q.WebKitMutationObserver,t=function o(e,t){if(e===t)return!0;if(v(e))for(var n=e.children,r=n.length;r--;)if(o(n[r],t))return!0;return!1},n=function(n,r){var o=new e(function(e,o){for(var i=e.length;i--;)for(var u=e[i].removedNodes,a=u.length;a--;)if(t(u[a],n))return o.disconnect(),r()});o.observe(document,{childList:!0,subtree:!0})},r=function(e,n){var r=function o(r){t(r.target,e)&&(document.removeEventListener("DOMNodeRemoved",o),n())};document.addEventListener("DOMNodeRemoved",r)};return e?n:r}(),B={orientationSupport:H,regExp:N,pInt:t,trimAll:n,randomColor:r,limitRandom:o,extend:i,typeChecking:u,isPlainObject:c,isFunction:a,isArray:T,isString:s,isBoolean:f,isUndefined:l,isNull:d,isElement:v,observeElementRemoved:V,getCss:p,offset:h,on:m,off:y,scaleValue:g,calcSpeed:O,pause:A,open:E,resize:z,modifyPrototype:R,defineReadOnlyProperty:C,registerListener:w},Q={opacity:1,color:[],resize:!0},J={linear:function(e,t,n,r,o){return n+(r-n)*e},swing:function(){return J.easeInOutQuad.apply(J,arguments)},easeInOutQuad:function(e,t,n,r,o){return(t/=o/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n}},K={version:F,utils:B,Base:_,easing:J};!function U(e){for(var t in e){var n=e[t];C(n,t,e),c(n)&&U(n)}}(K),K.commonConfig=Q,q.JParticles=K,"function"==typeof define&&define.amd?define(function(){return K}):"object"==typeof module&&module.exports&&(module.exports=K)}();

+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),r=JParticles,n=r.utils,s=r.Base,a=Math.random,f=(Math.abs,Math.PI),l=Math.sin,c=2*f,u=(n.pInt,n.limitRandom),h=(n.calcSpeed,n.scaleValue),p=n.randomColor,y=n.isArray,d=n.isPlainObject,v=n.isUndefined,b=n.resize,m=n.defineReadOnlyProperty,k=function(r){function n(i,o){return e(this,n),t(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,n,i,o))}return i(n,r),o(n,[{key:"version",get:function(){return"2.0.0"}}]),o(n,[{key:"init",value:function(){this.rippleLength=[],this.attrNormalize(),this.createDots(),this.draw()}},{key:"attrNormalize",value:function(){var e=this;["fill","fillColor","line","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","rippleNum","speed"].forEach(function(t){return e.attrProcessor(t)})}},{key:"attrProcessor",value:function(e){var t=this.set.num,i=this.set[e],o=i,r="offsetLeft"===e?this.cw:this.ch;for(y(i)||(o=this.set[e]=[]);t--;){var n=y(i)?i[t]:i;o[t]=v(n)?this.generateDefaultValue(e):this.scaleValue(e,n,r),"rippleNum"===e&&(this.rippleLength[t]=this.cw/o[t])}}},{key:"generateDefaultValue",value:function(e){var t=this.cw,i=this.ch;switch(e){case"lineColor":case"fillColor":e=p();break;case"lineWidth":e=u(2,.2);break;case"offsetLeft":e=a()*t;break;case"offsetTop":case"crestHeight":e=a()*i;break;case"rippleNum":e=u(t/2,1);break;case"speed":e=u(.4,.1);break;case"fill":e=!1;break;case"line":e=!0}return e}},{key:"scaleValue",value:function(e,t,i){return"offsetTop"===e||"offsetLeft"===e||"crestHeight"===e?h(t,i):t}},{key:"dynamicProcessor",value:function(e,t){var i=this,o="offsetLeft"===e?this.cw:this.ch,r=y(t);this.set[e].forEach(function(n,s,a){var f=r?t[s]:t;f=i.scaleValue(e,f,o),v(f)&&(f=n),a[s]=f})}},{key:"setOptions",value:function(e){if(this.set&&d(e))for(var t in e)"opacity"===t?this.set.opacity=e[t]:this.dynamicOptions.indexOf(t)!==-1&&this.dynamicProcessor(t,e[t])}},{key:"createDots",value:function(){for(var e=this.cw,t=this.rippleLength,i=this.set.num,o=this.dots=[];i--;)for(var r=o[i]=[],n=c/t[i],s=0;s<=e;s++)r.push({x:s,y:s*n})}},{key:"draw",value:function(){var e=this.cxt,t=this.cw,i=this.ch,o=this.paused,r=this.set,n=r.opacity;e.clearRect(0,0,t,i),e.globalAlpha=n,this.dots.forEach(function(n,s){var a=r.crestHeight[s],f=r.offsetLeft[s],c=r.offsetTop[s],u=r.speed[s];e.save(),e.beginPath(),n.forEach(function(t,i){e[i?"lineTo":"moveTo"](t.x,a*l(t.y+f)+c),!o&&(t.y-=u)}),r.fill[s]&&(e.lineTo(t,i),e.lineTo(0,i),e.closePath(),e.fillStyle=r.fillColor[s],e.fill()),r.line[s]&&(e.lineWidth=r.lineWidth[s],e.strokeStyle=r.lineColor[s],e.stroke()),e.restore()}),this.requestAnimationFrame()}},{key:"resize",value:function(){var e=this;b(this,function(t,i){["offsetLeft","offsetTop","crestHeight"].forEach(function(o){var r="offsetLeft"===o?t:i;e.set[o].forEach(function(e,t,i){i[t]=e*r})}),e.dots.forEach(function(e){e.forEach(function(e){e.x*=t,e.y*=i})})})}}]),n}(s);k.defaultConfig={num:3,fill:!1,fillColor:[],line:!0,lineColor:[],lineWidth:[],offsetLeft:[],offsetTop:[],crestHeight:[],rippleNum:[],speed:[]},k.prototype.dynamicOptions=["fill","fillColor","line","lineColor","lineWidth","offsetLeft","offsetTop","crestHeight","speed"],m(k,"wave")}();

let wave = new JParticles.wave('#wave', {
    num: 1,
    line: false,
    fill: true,
    fillColor: '#27C9E5',
    offsetTop: .75,
    crestHeight: parseInt(Math.random()*10)+1,
    rippleNum: 3,
    speed: .04
});