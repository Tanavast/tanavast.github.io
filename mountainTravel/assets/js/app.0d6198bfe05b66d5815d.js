!function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],f=0,d=[];f<s.length;f++)a=s[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(l&&l(e);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([10,1]),n()}([,function(t,e){document.addEventListener("mousemove",function(t){this.querySelectorAll(".layer").forEach(function(e){var n=e.getAttribute("data-speed");e.style.transform="translateX(".concat(t.clientX*n/1e3,"px)")})})},function(t,e){var n=document.getElementsByClassName("menu-btn"),r=document.getElementById("menu-btn"),o=document.getElementsByClassName("menu"),i=document.getElementsByClassName("content");r.addEventListener("click",function(){this.classList.contains("menu-btn_active")?(n[0].classList.remove("menu-btn_active"),o[0].classList.remove("menu_active"),i[0].classList.remove("content_active")):(n[0].classList.add("menu-btn_active"),o[0].classList.add("menu_active"),i[0].classList.add("content_active"))})},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},,function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(0)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(2),n(3),n(6),n(8)}]);