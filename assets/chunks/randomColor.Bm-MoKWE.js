import{c as _,g as D}from"./theme.CewpmPjo.js";var y={exports:{}};(function(k,x){(function(i,s){{var c=s();k&&k.exports&&(x=k.exports=c),x.randomColor=c}})(_,function(){var i=null,s={};B();var c=[],A=function(r){if(r=r||{},r.seed!==void 0&&r.seed!==null&&r.seed===parseInt(r.seed,10))i=r.seed;else if(typeof r.seed=="string")i=G(r.seed);else{if(r.seed!==void 0&&r.seed!==null)throw new TypeError("The seed value must be an integer or string");i=null}var e,a,n;if(r.count!==null&&r.count!==void 0){for(var t=r.count,u=[],f=0;f<r.count;f++)c.push(!1);for(r.count=null;t>u.length;){var v=A(r);i!==null&&(r.seed=i),u.push(v)}return r.count=t,u}return e=C(r),a=F(e,r),n=w(e,a,r),E([e,a,n],r)};function C(r){if(c.length>0){var e=N(r.hue),a=o(e),n=(e[1]-e[0])/c.length,t=parseInt((a-e[0])/n);c[t]===!0?t=(t+2)%c.length:c[t]=!0;var u=(e[0]+t*n)%359,f=(e[0]+(t+1)*n)%359;return e=[u,f],a=o(e),a<0&&(a=360+a),a}else{var e=H(r.hue);return a=o(e),a<0&&(a=360+a),a}}function F(r,e){if(e.hue==="monochrome")return 0;if(e.luminosity==="random")return o([0,100]);var a=I(r),n=a[0],t=a[1];switch(e.luminosity){case"bright":n=55;break;case"dark":n=t-10;break;case"light":t=55;break}return o([n,t])}function w(r,e,a){var n=T(r,e),t=100;switch(a.luminosity){case"dark":t=n+20;break;case"light":n=(t+n)/2;break;case"random":n=0,t=100;break}return o([n,t])}function E(r,e){switch(e.format){case"hsvArray":return r;case"hslArray":return R(r);case"hsl":var a=R(r);return"hsl("+a[0]+", "+a[1]+"%, "+a[2]+"%)";case"hsla":var n=R(r),f=e.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+f+")";case"rgbArray":return M(r);case"rgb":var t=M(r);return"rgb("+t.join(", ")+")";case"rgba":var u=M(r),f=e.alpha||Math.random();return"rgba("+u.join(", ")+", "+f+")";default:return $(r)}}function T(r,e){for(var a=m(r).lowerBounds,n=0;n<a.length-1;n++){var t=a[n][0],u=a[n][1],f=a[n+1][0],v=a[n+1][1];if(e>=t&&e<=f){var h=(v-u)/(f-t),l=u-h*t;return h*e+l}}return 0}function H(r){if(typeof parseInt(r)=="number"){var e=parseInt(r);if(e<360&&e>0)return[e,e]}if(typeof r=="string"){if(s[r]){var a=s[r];if(a.hueRange)return a.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var n=S(r)[0];return[n,n]}}return[0,360]}function I(r){return m(r).saturationRange}function m(r){r>=334&&r<=360&&(r-=360);for(var e in s){var a=s[e];if(a.hueRange&&r>=a.hueRange[0]&&r<=a.hueRange[1])return s[e]}return"Color not found"}function o(r){if(i===null){var e=.618033988749895,a=Math.random();return a+=e,a%=1,Math.floor(r[0]+a*(r[1]+1-r[0]))}else{var n=r[1]||1,t=r[0]||0;i=(i*9301+49297)%233280;var u=i/233280;return Math.floor(t+u*(n-t))}}function $(r){var e=M(r);function a(t){var u=t.toString(16);return u.length==1?"0"+u:u}var n="#"+a(e[0])+a(e[1])+a(e[2]);return n}function g(r,e,a){var n=a[0][0],t=a[a.length-1][0],u=a[a.length-1][1],f=a[0][1];s[r]={hueRange:e,lowerBounds:a,saturationRange:[n,t],brightnessRange:[u,f]}}function B(){g("monochrome",null,[[0,0],[100,0]]),g("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),g("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),g("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),g("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),g("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),g("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),g("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function M(r){var e=r[0];e===0&&(e=1),e===360&&(e=359),e=e/360;var a=r[1]/100,n=r[2]/100,t=Math.floor(e*6),u=e*6-t,f=n*(1-a),v=n*(1-u*a),h=n*(1-(1-u)*a),l=256,d=256,b=256;switch(t){case 0:l=n,d=h,b=f;break;case 1:l=v,d=n,b=f;break;case 2:l=f,d=n,b=h;break;case 3:l=f,d=v,b=n;break;case 4:l=h,d=f,b=n;break;case 5:l=n,d=f,b=v;break}var V=[Math.floor(l*255),Math.floor(d*255),Math.floor(b*255)];return V}function S(r){r=r.replace(/^#/,""),r=r.length===3?r.replace(/(.)/g,"$1$1"):r;var e=parseInt(r.substr(0,2),16)/255,a=parseInt(r.substr(2,2),16)/255,n=parseInt(r.substr(4,2),16)/255,t=Math.max(e,a,n),u=t-Math.min(e,a,n),f=t?u/t:0;switch(t){case e:return[60*((a-n)/u%6)||0,f,t];case a:return[60*((n-e)/u+2)||0,f,t];case n:return[60*((e-a)/u+4)||0,f,t]}}function R(r){var e=r[0],a=r[1]/100,n=r[2]/100,t=(2-a)*n;return[e,Math.round(a*n/(t<1?t:2-t)*1e4)/100,t/2*100]}function G(r){for(var e=0,a=0;a!==r.length&&!(e>=Number.MAX_SAFE_INTEGER);a++)e+=r.charCodeAt(a);return e}function N(r){if(isNaN(r)){if(typeof r=="string"){if(s[r]){var a=s[r];if(a.hueRange)return a.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var n=S(r)[0];return m(n).hueRange}}}else{var e=parseInt(r);if(e<360&&e>0)return m(r).hueRange}return[0,360]}return A})})(y,y.exports);var q=y.exports;const W=D(q);export{W as r};
