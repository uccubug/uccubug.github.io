var St=c=>{throw TypeError(c)};var Xt=(c,a,i)=>a.has(c)||St("Cannot "+i);var Ft=(c,a,i)=>a.has(c)?St("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(c):a.set(c,i);var ut=(c,a,i)=>(Xt(c,a,"access private method"),i);import{p as D,v as Et,x as Gt,_ as Wt,o as _t,c as Lt,a3 as Jt,q as Qt,j as b,n as Pt,N as nt,Y as It,Z as Rt,G as Kt,k as te,F as ee}from"./framework.BOdwdXAg.js";import{c as ae,g as re}from"./theme.CewpmPjo.js";const ie="/assets/we.f9yzZQNH.png";var ft={exports:{}};(function(c,a){(function(i,h){{var d=h();c&&c.exports&&(a=c.exports=d),a.randomColor=d}})(ae,function(){var i=null,h={};J();var d=[],m=function(r){if(r=r||{},r.seed!==void 0&&r.seed!==null&&r.seed===parseInt(r.seed,10))i=r.seed;else if(typeof r.seed=="string")i=tt(r.seed);else{if(r.seed!==void 0&&r.seed!==null)throw new TypeError("The seed value must be an integer or string");i=null}var l,o,n;if(r.count!==null&&r.count!==void 0){for(var s=r.count,p=[],F=0;F<r.count;F++)d.push(!1);for(r.count=null;s>p.length;){var z=m(r);i!==null&&(r.seed=i),p.push(z)}return r.count=s,p}return l=C(r),o=S(l,r),n=T(l,o,r),P([l,o,n],r)};function C(r){if(d.length>0){var l=rt(r.hue),o=_(l),n=(l[1]-l[0])/d.length,s=parseInt((o-l[0])/n);d[s]===!0?s=(s+2)%d.length:d[s]=!0;var p=(l[0]+s*n)%359,F=(l[0]+(s+1)*n)%359;return l=[p,F],o=_(l),o<0&&(o=360+o),o}else{var l=O(r.hue);return o=_(l),o<0&&(o=360+o),o}}function S(r,l){if(l.hue==="monochrome")return 0;if(l.luminosity==="random")return _([0,100]);var o=H(r),n=o[0],s=o[1];switch(l.luminosity){case"bright":n=55;break;case"dark":n=s-10;break;case"light":s=55;break}return _([n,s])}function T(r,l,o){var n=E(r,l),s=100;switch(o.luminosity){case"dark":s=n+20;break;case"light":n=(s+n)/2;break;case"random":n=0,s=100;break}return _([n,s])}function P(r,l){switch(l.format){case"hsvArray":return r;case"hslArray":return Q(r);case"hsl":var o=Q(r);return"hsl("+o[0]+", "+o[1]+"%, "+o[2]+"%)";case"hsla":var n=Q(r),F=l.alpha||Math.random();return"hsla("+n[0]+", "+n[1]+"%, "+n[2]+"%, "+F+")";case"rgbArray":return j(r);case"rgb":var s=j(r);return"rgb("+s.join(", ")+")";case"rgba":var p=j(r),F=l.alpha||Math.random();return"rgba("+p.join(", ")+", "+F+")";default:return at(r)}}function E(r,l){for(var o=W(r).lowerBounds,n=0;n<o.length-1;n++){var s=o[n][0],p=o[n][1],F=o[n+1][0],z=o[n+1][1];if(l>=s&&l<=F){var V=(z-p)/(F-s),N=p-V*s;return V*l+N}}return 0}function O(r){if(typeof parseInt(r)=="number"){var l=parseInt(r);if(l<360&&l>0)return[l,l]}if(typeof r=="string"){if(h[r]){var o=h[r];if(o.hueRange)return o.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var n=$(r)[0];return[n,n]}}return[0,360]}function H(r){return W(r).saturationRange}function W(r){r>=334&&r<=360&&(r-=360);for(var l in h){var o=h[l];if(o.hueRange&&r>=o.hueRange[0]&&r<=o.hueRange[1])return h[l]}return"Color not found"}function _(r){if(i===null){var l=.618033988749895,o=Math.random();return o+=l,o%=1,Math.floor(r[0]+o*(r[1]+1-r[0]))}else{var n=r[1]||1,s=r[0]||0;i=(i*9301+49297)%233280;var p=i/233280;return Math.floor(s+p*(n-s))}}function at(r){var l=j(r);function o(s){var p=s.toString(16);return p.length==1?"0"+p:p}var n="#"+o(l[0])+o(l[1])+o(l[2]);return n}function x(r,l,o){var n=o[0][0],s=o[o.length-1][0],p=o[o.length-1][1],F=o[0][1];h[r]={hueRange:l,lowerBounds:o,saturationRange:[n,s],brightnessRange:[p,F]}}function J(){x("monochrome",null,[[0,0],[100,0]]),x("red",[-26,18],[[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]),x("orange",[18,46],[[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]),x("yellow",[46,62],[[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]),x("green",[62,178],[[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]),x("blue",[178,257],[[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]),x("purple",[257,282],[[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]),x("pink",[282,334],[[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]])}function j(r){var l=r[0];l===0&&(l=1),l===360&&(l=359),l=l/360;var o=r[1]/100,n=r[2]/100,s=Math.floor(l*6),p=l*6-s,F=n*(1-o),z=n*(1-p*o),V=n*(1-(1-p)*o),N=256,Y=256,U=256;switch(s){case 0:N=n,Y=V,U=F;break;case 1:N=z,Y=n,U=F;break;case 2:N=F,Y=n,U=V;break;case 3:N=F,Y=z,U=n;break;case 4:N=V,Y=F,U=n;break;case 5:N=n,Y=F,U=z;break}var ct=[Math.floor(N*255),Math.floor(Y*255),Math.floor(U*255)];return ct}function $(r){r=r.replace(/^#/,""),r=r.length===3?r.replace(/(.)/g,"$1$1"):r;var l=parseInt(r.substr(0,2),16)/255,o=parseInt(r.substr(2,2),16)/255,n=parseInt(r.substr(4,2),16)/255,s=Math.max(l,o,n),p=s-Math.min(l,o,n),F=s?p/s:0;switch(s){case l:return[60*((o-n)/p%6)||0,F,s];case o:return[60*((n-l)/p+2)||0,F,s];case n:return[60*((l-o)/p+4)||0,F,s]}}function Q(r){var l=r[0],o=r[1]/100,n=r[2]/100,s=(2-o)*n;return[l,Math.round(o*n/(s<1?s:2-s)*1e4)/100,s/2*100]}function tt(r){for(var l=0,o=0;o!==r.length&&!(l>=Number.MAX_SAFE_INTEGER);o++)l+=r.charCodeAt(o);return l}function rt(r){if(isNaN(r)){if(typeof r=="string"){if(h[r]){var o=h[r];if(o.hueRange)return o.hueRange}else if(r.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)){var n=$(r)[0];return W(n).hueRange}}}else{var l=parseInt(r);if(l<360&&l>0)return W(r).hueRange}return[0,360]}return m})})(ft,ft.exports);var ne=ft.exports;const se=re(ne);var pt={};(function c(a,i,h,d){var m=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),C=typeof Path2D=="function"&&typeof DOMMatrix=="function",S=function(){if(!a.OffscreenCanvas)return!1;var e=new OffscreenCanvas(1,1),t=e.getContext("2d");t.fillRect(0,0,1,1);var u=e.transferToImageBitmap();try{t.createPattern(u,"no-repeat")}catch{return!1}return!0}();function T(){}function P(e){var t=i.exports.Promise,u=t!==void 0?t:a.Promise;return typeof u=="function"?new u(e):(e(T,T),null)}var E=function(e,t){return{transform:function(u){if(e)return u;if(t.has(u))return t.get(u);var v=new OffscreenCanvas(u.width,u.height),g=v.getContext("2d");return g.drawImage(u,0,0),t.set(u,v),v},clear:function(){t.clear()}}}(S,new Map),O=function(){var e=Math.floor(16.666666666666668),t,u,v={},g=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(w){var y=Math.random();return v[y]=requestAnimationFrame(function f(M){g===M||g+e-1<M?(g=M,delete v[y],w()):v[y]=requestAnimationFrame(f)}),y},u=function(w){v[w]&&cancelAnimationFrame(v[w])}):(t=function(w){return setTimeout(w,e)},u=function(w){return clearTimeout(w)}),{frame:t,cancel:u}}(),H=function(){var e,t,u={};function v(g){function w(y,f){g.postMessage({options:y||{},callback:f})}g.init=function(f){var M=f.transferControlToOffscreen();g.postMessage({canvas:M},[M])},g.fire=function(f,M,I){if(t)return w(f,null),t;var A=Math.random().toString(36).slice(2);return t=P(function(R){function B(L){L.data.callback===A&&(delete u[A],g.removeEventListener("message",B),t=null,E.clear(),I(),R())}g.addEventListener("message",B),w(f,A),u[A]=B.bind(null,{data:{callback:A}})}),t},g.reset=function(){g.postMessage({reset:!0});for(var f in u)u[f](),delete u[f]}}return function(){if(e)return e;if(!h&&m){var g=["var CONFETTI, SIZE = {}, module = {};","("+c.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{e=new Worker(URL.createObjectURL(new Blob([g])))}catch(w){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",w),null}v(e)}return e}}(),W={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(e,t){return t?t(e):e}function at(e){return e!=null}function x(e,t,u){return _(e&&at(e[t])?e[t]:W[t],u)}function J(e){return e<0?0:Math.floor(e)}function j(e,t){return Math.floor(Math.random()*(t-e))+e}function $(e){return parseInt(e,16)}function Q(e){return e.map(tt)}function tt(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:$(t.substring(0,2)),g:$(t.substring(2,4)),b:$(t.substring(4,6))}}function rt(e){var t=x(e,"origin",Object);return t.x=x(t,"x",Number),t.y=x(t,"y",Number),t}function r(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function l(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function o(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}function n(e,t,u,v,g,w,y,f,M){e.save(),e.translate(t,u),e.rotate(w),e.scale(v,g),e.arc(0,0,1,y,f,M),e.restore()}function s(e){var t=e.angle*(Math.PI/180),u=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*u-Math.random()*u),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function p(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var u=t.tick++/t.totalTicks,v=t.x+t.random*t.tiltCos,g=t.y+t.random*t.tiltSin,w=t.wobbleX+t.random*t.tiltCos,y=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-u)+")",e.beginPath(),C&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))e.fill(Y(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(w-v)*.1,Math.abs(y-g)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var f=Math.PI/10*t.wobble,M=Math.abs(w-v)*.1,I=Math.abs(y-g)*.1,A=t.shape.bitmap.width*t.scalar,R=t.shape.bitmap.height*t.scalar,B=new DOMMatrix([Math.cos(f)*M,Math.sin(f)*M,-Math.sin(f)*I,Math.cos(f)*I,t.x,t.y]);B.multiplySelf(new DOMMatrix(t.shape.matrix));var L=e.createPattern(E.transform(t.shape.bitmap),"no-repeat");L.setTransform(B),e.globalAlpha=1-u,e.fillStyle=L,e.fillRect(t.x-A/2,t.y-R/2,A,R),e.globalAlpha=1}else if(t.shape==="circle")e.ellipse?e.ellipse(t.x,t.y,Math.abs(w-v)*t.ovalScalar,Math.abs(y-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):n(e,t.x,t.y,Math.abs(w-v)*t.ovalScalar,Math.abs(y-g)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var k=Math.PI/2*3,q=4*t.scalar,Z=8*t.scalar,X=t.x,K=t.y,it=5,G=Math.PI/it;it--;)X=t.x+Math.cos(k)*Z,K=t.y+Math.sin(k)*Z,e.lineTo(X,K),k+=G,X=t.x+Math.cos(k)*q,K=t.y+Math.sin(k)*q,e.lineTo(X,K),k+=G;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(g)),e.lineTo(Math.floor(w),Math.floor(y)),e.lineTo(Math.floor(v),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function F(e,t,u,v,g){var w=t.slice(),y=e.getContext("2d"),f,M,I=P(function(A){function R(){f=M=null,y.clearRect(0,0,v.width,v.height),E.clear(),g(),A()}function B(){h&&!(v.width===d.width&&v.height===d.height)&&(v.width=e.width=d.width,v.height=e.height=d.height),!v.width&&!v.height&&(u(e),v.width=e.width,v.height=e.height),y.clearRect(0,0,v.width,v.height),w=w.filter(function(L){return p(y,L)}),w.length?f=O.frame(B):R()}f=O.frame(B),M=R});return{addFettis:function(A){return w=w.concat(A),I},canvas:e,promise:I,reset:function(){f&&O.cancel(f),M&&M()}}}function z(e,t){var u=!e,v=!!x(t||{},"resize"),g=!1,w=x(t,"disableForReducedMotion",Boolean),y=m&&!!x(t||{},"useWorker"),f=y?H():null,M=u?r:l,I=e&&f?!!e.__confetti_initialized:!1,A=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,R;function B(k,q,Z){for(var X=x(k,"particleCount",J),K=x(k,"angle",Number),it=x(k,"spread",Number),G=x(k,"startVelocity",Number),qt=x(k,"decay",Number),$t=x(k,"gravity",Number),zt=x(k,"drift",Number),xt=x(k,"colors",Q),Vt=x(k,"ticks",Number),bt=x(k,"shapes"),jt=x(k,"scalar"),Yt=!!x(k,"flat"),Ct=rt(k),kt=X,dt=[],Ut=e.width*Ct.x,Zt=e.height*Ct.y;kt--;)dt.push(s({x:Ut,y:Zt,angle:K,spread:it,startVelocity:G,color:xt[kt%xt.length],shape:bt[j(0,bt.length)],ticks:Vt,decay:qt,gravity:$t,drift:zt,scalar:jt,flat:Yt}));return R?R.addFettis(dt):(R=F(e,dt,M,q,Z),R.promise)}function L(k){var q=w||x(k,"disableForReducedMotion",Boolean),Z=x(k,"zIndex",Number);if(q&&A)return P(function(G){G()});u&&R?e=R.canvas:u&&!e&&(e=o(Z),document.body.appendChild(e)),v&&!I&&M(e);var X={width:e.width,height:e.height};f&&!I&&f.init(e),I=!0,f&&(e.__confetti_initialized=!0);function K(){if(f){var G={getBoundingClientRect:function(){if(!u)return e.getBoundingClientRect()}};M(G),f.postMessage({resize:{width:G.width,height:G.height}});return}X.width=X.height=null}function it(){R=null,v&&(g=!1,a.removeEventListener("resize",K)),u&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,I=!1)}return v&&!g&&(g=!0,a.addEventListener("resize",K,!1)),f?f.fire(k,X,it):B(k,X,it)}return L.reset=function(){f&&f.reset(),R&&R.reset()},L}var V;function N(){return V||(V=z(null,{useWorker:!0,resize:!0})),V}function Y(e,t,u,v,g,w,y){var f=new Path2D(e),M=new Path2D;M.addPath(f,new DOMMatrix(t));var I=new Path2D;return I.addPath(M,new DOMMatrix([Math.cos(y)*g,Math.sin(y)*g,-Math.sin(y)*w,Math.cos(y)*w,u,v])),I}function U(e){if(!C)throw new Error("path confetti are not supported in this browser");var t,u;typeof e=="string"?t=e:(t=e.path,u=e.matrix);var v=new Path2D(t),g=document.createElement("canvas"),w=g.getContext("2d");if(!u){for(var y=1e3,f=y,M=y,I=0,A=0,R,B,L=0;L<y;L+=2)for(var k=0;k<y;k+=2)w.isPointInPath(v,L,k,"nonzero")&&(f=Math.min(f,L),M=Math.min(M,k),I=Math.max(I,L),A=Math.max(A,k));R=I-f,B=A-M;var q=10,Z=Math.min(q/R,q/B);u=[Z,0,0,Z,-Math.round(R/2+f)*Z,-Math.round(B/2+M)*Z]}return{type:"path",path:t,matrix:u}}function ct(e){var t,u=1,v="#000000",g='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof e=="string"?t=e:(t=e.text,u="scalar"in e?e.scalar:u,g="fontFamily"in e?e.fontFamily:g,v="color"in e?e.color:v);var w=10*u,y=""+w+"px "+g,f=new OffscreenCanvas(w,w),M=f.getContext("2d");M.font=y;var I=M.measureText(t),A=Math.ceil(I.actualBoundingBoxRight+I.actualBoundingBoxLeft),R=Math.ceil(I.actualBoundingBoxAscent+I.actualBoundingBoxDescent),B=2,L=I.actualBoundingBoxLeft+B,k=I.actualBoundingBoxAscent+B;A+=B+B,R+=B+B,f=new OffscreenCanvas(A,R),M=f.getContext("2d"),M.font=y,M.fillStyle=v,M.fillText(t,L,k);var q=1/u;return{type:"bitmap",bitmap:f.transferToImageBitmap(),matrix:[q,0,0,q,-A*q/2,-R*q/2]}}i.exports=function(){return N().apply(this,arguments)},i.exports.reset=function(){N().reset()},i.exports.create=z,i.exports.shapeFromPath=U,i.exports.shapeFromText=ct})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),pt,!1);const oe=pt.exports;pt.exports.create;const le=[[78,0],[194,0],[278,88],[362,0],[478,0],[556,91],[552,234],[486,312],[278,432],[70,312],[4,234],[0,91]];class Tt{constructor({maxSpeed:a=50,fill:i="white",r:h=6,hearts:d,x:m,y:C,ctx:S,heartPath:T,randomcolor:P}){if(this.r=h,this.speedX=ht(-a,a)||10,this.speedY=ht(-a,a)||10,this.lastMoveTime=null,this.fill=i,P&&typeof P=="function"&&(this.fill=P()),this.hearts=d,this.heartPath=T,this.ctx=S,this.x=m,this.y=C,!m||!C){const E=this.randPointInHeart();this.x=E[0],this.y=E[1]}}randPointInHeart(){const a=Math.max(...this.hearts.map(d=>d[0])),i=Math.max(...this.hearts.map(d=>d[1]));let h=At(a,i);for(;!vt({x:h[0],y:h[1],ctx:this.ctx,path:this.heartPath});)h=At(a,i);return h}draw(a){if(this.lastMoveTime){const h=Date.now()-this.lastMoveTime,d=this.x+this.speedX*h/1e3,m=this.y+this.speedY*h/1e3;vt({x:d,y:m,ctx:this.ctx,path:this.heartPath})?(this.x=d,this.y=m):(this.speedX=-this.speedX,this.speedY=-this.speedY)}a.fillStyle=this.fill,a.beginPath(),a.arc(this.x,this.y,this.r,0,Math.PI*2),a.fill(),this.lastMoveTime=Date.now()}}class he{constructor({points:a=60,maxDis:i=200,linefill:h="#ffffff",bg:d="dark",hearts:m,maxSpeed:C=50,randomcolor:S,pointFill:T="white",pointR:P=6,hCtx:E,heartPath:O}){this.points=Array(a).fill(0).map(()=>new Tt({hearts:m,maxSpeed:C,heartPath:O,randomcolor:S,fill:T,r:P,ctx:E})),this.maxDis=i,this.maxPoints=Math.max(a+10,30),this.bg=d,this.randomcolor=S,this.linefill=h,this.addPoint=(H,W)=>{vt({x:H,y:W,ctx:E,path:O})&&(this.points.push(new Tt({hearts:m,heartPath:O,randomcolor:S,maxSpeed:C,x:H,y:W,fill:T,r:P,ctx:E})),this.points.length>this.maxPoints&&this.points.shift())}}draw({ctx:a,cvs:i}){a.clearRect(0,0,i.width,i.height),this.bg&&(a.fillStyle=this.bg,a.fillRect(0,0,i.width,i.height));for(const h in this.points){this.points[h].draw(a);for(let d=+h+1;d<this.points.length;d++){const m=Math.sqrt((this.points[h].x-this.points[d].x)**2+(this.points[h].y-this.points[d].y)**2);if(m>this.maxDis)continue;a.beginPath(),a.moveTo(this.points[h].x,this.points[h].y),a.lineTo(this.points[d].x,this.points[d].y),a.closePath();const C=Math.round((1-m/this.maxDis)*255).toString(16).padStart(2,"0");a.strokeStyle=this.linefill+C,a.stroke()}}}}function vt({x:c,y:a,ctx:i,path:h}){return i.isPointInPath(h,c,a)}function ht(c,a){return Math.floor(Math.random()*(a-c+1))+c}function At(c,a){return[ht(0,c),ht(0,a)]}var lt,gt;const Mt=class Mt{constructor(a){Ft(this,lt);const{cvsWidth:i=600,maxSpeed:h=50,points:d=40,pointR:m=6,pointsMaxDis:C=200,pointFill:S="#ffffff",graphBg:T=null,linefill:P="#ffffff",heartBg:E=null,heartStrokeWidth:O=0,heartBlur:H=10,heartShadow:W="#ffffffa0",heartStrokeCl:_="white",heartFill:at="#FFffff50",cvsPadding:x=10,hearts:J=le,wrapNodeClass:j=null,randomcolor:$}=a;this.stop=!1,this.options=a,this.heartFill=at,this.heartBg=E,this.heartStrokeCl=_,this.heartStrokeWidth=O,this.heartBlur=H,this.heartShadow=W;const{hearts:Q,ratio:tt}=this.fixedHearts(i,J);this.hearts=Q;const{gCvs:rt,gCtx:r,hCvs:l,hCtx:o,wrap:n}=this.genCanvas({cvsWidth:i,csvHeight:Math.ceil(i*tt),margin:x,wrapNodeClass:j});this.gCvs=rt,this.gCtx=r,this.hCvs=l,this.hCtx=o,this.wrap=n,this.points=d,this.pointR=m*devicePixelRatio,this.maxSpeed=h,this.pointFill=S,this.linefill=P,this.pointsMaxDis=C,this.randomcolor=$,this.graphBg=T,this.heartPath=void 0,this.graph=void 0,ut(this,lt,gt).call(this),this.addEventListener()}static getHeartElement(a){const i=new Mt(a||{});return{element:i.wrap,draw:i.startDrawLoop.bind(i),heart:i}}addEventListener(){!this.graph||!this.gCvs||this.gCvs.addEventListener("click",a=>{const i=this.gCvs.width/this.gCvs.clientWidth,h=a.offsetX*i,d=a.offsetY*i;this.graph.addPoint(h,d)})}update(){ut(this,lt,gt).call(this),this.draw()}startDrawLoop(){this.stop=!1,this.draw()}stopDrawLoop(){this.stop=!0}draw(){this.stop||requestAnimationFrame(this.draw.bind(this)),this.graph.draw({ctx:this.gCtx,cvs:this.gCvs})}drawHeart(){this.hCtx.clearRect(0,0,this.hCvs.width,this.hCvs.height),this.heartBg&&(this.hCtx.fillStyle=this.heartBg,this.hCtx.fillRect(0,0,this.hCvs.width,this.hCvs.height));const a=new Path2D;a.moveTo(...this.hearts[0]),this.hCtx.lineJoin="round",this.hCtx.lineCap="round";for(let i=1;i<this.hearts.length;i++)a.lineTo(...this.hearts[i]);return a.lineTo(...this.hearts[0]),this.heartBlur&&(this.hCtx.shadowBlur=this.heartBlur,this.hCtx.shadowColor=this.heartShadow),this.hCtx.fillStyle=this.heartFill,this.hCtx.fill(a),this.heartStrokeWidth&&(this.hCtx.strokeStyle=this.heartStrokeCl,this.hCtx.lineWidth=this.heartStrokeWidth,this.hCtx.stroke(a)),a}genCanvas({cvsWidth:a,csvHeight:i,margin:h,wrapNodeClass:d}){const m=document.createElement("canvas");a=a+2*this.heartStrokeWidth+2*this.heartBlur,i=i+2*this.heartStrokeWidth+2*this.heartBlur,m.width=a,m.height=i,m.style.position="absolute",m.style.width="100%",m.style.top="0",m.style.left="0";const C=m.getContext("2d"),S=document.createElement("canvas");S.width=a,S.height=i,S.style.margin="0",S.style.width="100%";const T=S.getContext("2d"),P=document.createElement("div");return P.style.position="relative",P.style.margin=`${h}px`,P.style.width=`calc(100% - ${h*2}px)`,d&&P.classList.add(d),P.appendChild(S),P.appendChild(m),{gCvs:m,gCtx:C,hCvs:S,hCtx:T,wrap:P}}fixedHearts(a,i){const h=Math.max(...i.map(C=>C[0])),d=Math.max(...i.map(C=>C[1])),m=a/h;return{hearts:i.map(C=>[Math.round(C[0]*m)+this.heartStrokeWidth+this.heartBlur,Math.round(C[1]*m)+this.heartStrokeWidth+this.heartBlur]),ratio:d/h}}};lt=new WeakSet,gt=function(){this.heartPath=this.drawHeart(),this.graph=new he({points:this.points,hearts:this.hearts,maxSpeed:this.maxSpeed,maxDis:this.pointsMaxDis,bg:this.graphBg,linefill:this.linefill,pointFill:this.pointFill,pointR:this.pointR,hCtx:this.hCtx,heartPath:this.heartPath,randomcolor:this.randomcolor})};let mt=Mt;function ce(c){const a=D(0),i=D(0);let h;function d(m){var C,S;a.value=((C=m==null?void 0:m.target)==null?void 0:C.scrollTop)||0,i.value=((S=m==null?void 0:m.target)==null?void 0:S.scrollLeft)||0}return Et(()=>{c.value.addEventListener("scroll",d),h=c.value,a.value=h.scrollTop,i.value=h.scrollLeft}),Gt(()=>{h.removeEventListener("scroll",d)}),{scrollX:i,scrollY:a}}function ot({startY:c,endY:a,startVal:i,endVal:h}){return function(d){return d<c?i:d>a?h:i+(h-i)*(d-c)/(a-c)}}class de{constructor(a){const{words:i="hello world",cvs:h,cvsWidth:d=600,cvsHeight:m=600,fontFamily:C="monospace",fontColor:S="gold",fontSize:T=20,cvsBg:P=null,mask:E="#0000001a",delay:O=200}=a;this.cvs=h,this.ctx=h.getContext("2d"),this.fontFamily=C,this.ctx.testBaseline="top",h.width=d,h.height=m;const H=Math.ceil(h.width/T);this.wordIndex=Array(H).fill(0).map(W=>Math.floor(Math.random()*(i.length-1))),this.paintIndex=Array(H).fill(0).map(W=>Math.floor(Math.random()*10)),this.words=i,this.fontColor=S,this.fontSize=T,this.cvsBg=P,this.delay=O,this.mask=E,this.stop=!1,this.lastPaint=void 0,this.cvsBg&&(this.ctx.fillStyle=P,this.ctx.fillRect(0,0,h.width,h.height))}draw(){this.ctx.fillStyle=this.mask,this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height);for(let a=0;a<this.wordIndex.length;a++){const i=this.words[this.wordIndex[a]];this.ctx.font=`${this.fontSize}px ${this.fontFamily}`,this.ctx.fillStyle=this.fontColor,this.ctx.fillText(i,a*this.fontSize,this.paintIndex[a]*this.fontSize),this.paintIndex[a]*this.fontSize>this.cvs.height&&Math.random()>.9&&(this.paintIndex[a]=0),this.wordIndex[a]=(this.wordIndex[a]+1)%this.words.length,this.paintIndex[a]++}}paint(a){this.stop||(this.lastPaint||(this.lastPaint=a,this.draw()),a-this.lastPaint>=this.delay&&(this.draw(),this.lastPaint=a),requestAnimationFrame(this.paint.bind(this)))}startLoop(){this.stop=!1,requestAnimationFrame(this.paint.bind(this))}stopLoop(){this.stop=!0}}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c){window.setTimeout(c,1e3/60)};var Bt,st,wt,yt,et=[],ue=.04,Dt,Ot;function fe(c){return Bt=c,wt=c.width,yt=c.height,st=Bt.getContext("2d"),()=>requestAnimationFrame(Ht)}function Ht(){ve(),me(),window.requestAnimationFrame(Ht)}function ve(){if(et.length<500&&Math.random()<ue)for(let i=0;i<4;i++)ge();for(var c=[],a=0;a<et.length;a++)et[a].move()&&c.push(et[a]);et=c}function me(){st.globalCompositeOperation="source-over",st.fillStyle="rgba(0,0,0,0.2)",st.fillRect(0,0,wt,yt),st.globalCompositeOperation="lighter";for(var c=0;c<et.length;c++)et[c].draw(st)}function ge(){Dt=Math.random()*(wt-200)+100,Ot=Math.random()*(yt-200)+100;for(var c=Math.random()*50+100,a="rgb("+~~(Math.random()*200+55)+","+~~(Math.random()*200+55)+","+~~(Math.random()*200+55)+")",i=0;i<c;i++){var h=new Nt;h.color=a;var d=Math.sqrt(25-h.vx*h.vx);Math.abs(h.vy)>d&&(h.vy=h.vy>0?d:-d),et.push(h)}}function Nt(){this.w=this.h=Math.random()*4+1,this.x=Dt-this.w/2,this.y=Ot-this.h/2,this.vx=(Math.random()-.5)*10,this.vy=(Math.random()-.5)*10,this.alpha=Math.random()*.5+.5,this.color}Nt.prototype={gravity:.05,move:function(){return this.x+=this.vx,this.vy+=this.gravity,this.y+=this.vy,this.alpha-=.01,!(this.x<=-this.w||this.x>=innerWidth.width||this.y>=innerHeight.height||this.alpha<=0)},draw:function(c){c.save(),c.beginPath(),c.translate(this.x+this.w/2,this.y+this.h/2),c.arc(0,0,this.w,0,Math.PI*2),c.fillStyle=this.color,c.globalAlpha=this.alpha,c.closePath(),c.fill(),c.restore()}};const pe="/assets/cake.Bu8awdjS.png",we={},ye={class:"bk-wrap"};function Me(c,a){return _t(),Lt("div",ye,a[0]||(a[0]=[Jt('<div class="cake-img-wrap"><div class="flame"><div class="light"></div><div class="light"></div><div class="light"></div><div class="light"></div></div><img src="'+pe+'" alt=""></div>',1)]))}const xe=Wt(we,[["render",Me]]),be={class:"cake-wrap show-box"},Ce={class:"cake-box sticky-box"},ke={class:"letter-wrap show-box"},Se={class:"sticky-box letter-sticky"},Fe={class:"letter-box"},Pe={class:"content"},Ie={class:"firework"},Re={class:"mask"},Te={__name:"index",setup(c){const a=D(),i=D(),h=D(),d=D(),m=D(),C=D(!1),S=D(),T=D(),P=D(),E=D({}),O=D(100),H=D(1),W=D(-100),_=D(0),at=D(1),x={heartAnimation:{animationF:ot({startY:60,endY:500,startVal:1,endVal:0}),update(n){O.value=n}},hTextAnimation:{animationF:ot({startY:0,endY:300,startVal:1,endVal:0}),update(n){H.value=n}},cakeMaskAnimation:{animationF:ot({startY:830,endY:1100,startVal:-100,endVal:100}),update(n){W.value=n}},letterAnimation:{animationF:ot({startY:2520,endY:3050,startVal:0,endVal:1}),update(n){_.value=n}},picAnimation:{animationF:ot({startY:60,endY:700,startVal:1,endVal:100}),update(n){at.value=n}}},{scrollY:J}=ce(h),j={points:80,pointsMaxDis:300,heartFill:"#FFffff50",pointR:6,heartStrokeWidth:8,maxSpeed:80,heartStrokeCl:"#ffffffff",heartBlur:40,wrapNodeClass:"wrap",heartShadow:"#ffffffa0",randomcolor:()=>se({luminosity:"light",format:"rgba"})},$={words:["生日快乐呀，我的宝儿~，要一直一直开心呀。","生日快乐！我们都要像对方一样勇敢~"," 生日快乐！快乐来的时候快乐就好呀~","想和你去很多很多地方，吃很多很多好吃的。","当然是希望你永远开心快乐呀。","生日快乐！纸短情长，我的思念不止于此。","无比期待下一次拥抱。其实，期待每一次拥抱哈哈哈。","还想一起去一次大理呀。","其实不止大理，天南海北，先跟你去看好多地方。","好好吃饭，好好睡觉哦。","期待每天抱着你睡觉的日子。"].join(""),fontColor:"#e21560",fontSize:14*devicePixelRatio,cvsBg:null,mask:"#00000019",delay:130},Q=()=>{C.value=!0,T.value.startDrawLoop(),tt(3e3,()=>{m.value.close()})};Qt(J,n=>{n<533?T.value.stop&&(T.value.startDrawLoop(),console.log("heart start")):T.value.stop||(T.value.stopDrawLoop(),console.log("heart stop")),n>=1100&&n<=2600?S.value.stop&&(S.value.startLoop(),console.log("code start")):S.value.stop||(S.value.stopLoop(),console.log("code stop"));for(const s in x){const p=x[s].animationF(J.value);x[s].update(p)}});const tt=(n=2e3,s)=>{let p;const F=[[-.9,.8,50],[1.9,.8,140],[-.9,.25,50],[1.9,.25,140]];requestAnimationFrame(z);function z(V){p||(p=V);for(const[N,Y,U]of F)oe({particleCount:9,spread:88,origin:{x:N,y:Y},angle:U,ticks:96,gravity:1.2,startVelocity:50});V-p<n?requestAnimationFrame(z):s==null||s()}},rt=n=>{j.cvsWidth=n;const{heart:s,element:p,draw:F}=mt.getHeartElement(j);d.value.appendChild(p),T.value=s},r=({cvsWidth:n,cakeHeight:s})=>{$.cvsWidth=n,$.cvsHeight=s,$.cvs=a.value,S.value=new de($)},l=()=>{i.value.width=600*devicePixelRatio,i.value.height=700*devicePixelRatio,P.value=fe(i.value),P.value()},o=()=>{E.value.widht=innerWidth,E.value.height=innerHeight,E.value.pixelR=devicePixelRatio;const n=400*devicePixelRatio,s=700*devicePixelRatio;rt(n),r({cvsWidth:n,cakeHeight:s}),l()};return Et(()=>{o()}),(n,s)=>(_t(),Lt(ee,null,[b("dialog",{class:Pt(["start-dog",{started:C.value}]),ref_key:"startDialog",ref:m,open:""},[b("div",{onClick:Q},"准备，开始~")],2),b("div",{ref_key:"mainWrap",ref:h,class:"main-wrap",onClick:s[1]||(s[1]=p=>console.log(te(J)))},[b("div",{class:"heart-wrap",style:nt({opacity:`${O.value}`})},[b("div",{id:"heart-box",class:Pt({show:C.value}),ref_key:"heartWrap",ref:d},null,2),It(b("div",{style:nt({scale:H.value,opacity:H.value})},s[2]||(s[2]=[b("div",{class:"text"},"给你比个小心心~",-1),b("div",{class:"info"},"可以点哦",-1)]),4),[[Rt,C.value]]),s[3]||(s[3]=b("div",{class:"heart-span empty-span",style:{height:"400px"}},null,-1))],4),b("div",be,[b("div",Ce,[b("canvas",{id:"word-rain",ref_key:"wordRain",ref:a},null,512),Kt(xe,{onClick:s[0]||(s[0]=p=>tt(500))}),s[4]||(s[4]=b("div",null,[b("div",{class:"ck-text"},"宝儿生日快乐呀"),b("div",{class:"ck-text"},"希望你一直开心~"),b("div",{class:"ck-text"},"嘎嘎吃饭，睡觉香香~")],-1)),It(b("div",{class:"cake-mask",style:nt({"--lighting":`${W.value}%`,"--alpha":1-(100+W.value)/800})},null,4),[[Rt,W.value!==100]])]),s[5]||(s[5]=b("div",{class:"cake-span empty-span"},null,-1))]),b("div",ke,[b("div",Se,[b("div",Fe,[b("div",Pe,[s[6]||(s[6]=b("div",{class:"img"},[b("img",{src:ie,alt:""})],-1)),s[7]||(s[7]=b("div",{class:"letter"},[b("p",null,"小雨莹，生日快乐呀"),b("p",null,"嘿嘿，请你看一场电子烟花~"),b("p",null,"想跟你一起放好多烟花，拍好多好多合照哇...")],-1)),b("div",Ie,[b("canvas",{class:"f-cvs",ref_key:"firework",ref:i},null,512)])]),b("div",Re,[b("span",{style:nt({"--curr":`${(1-_.value)*50}%`})},null,4),b("span",{style:nt({"--curr":`${(1-_.value)*48}%`,"--curr2":`${(1-_.value)*50}%`}),class:"part1"},null,4),b("span",{style:nt({"--curr":`${52+_.value*48}%`,"--curr2":`${50+_.value*50}%`}),class:"part2"},null,4)])])]),s[8]||(s[8]=b("div",{class:"empty-span"},null,-1))])],512)],64))}},We=Wt(Te,[["__scopeId","data-v-eca56395"]]);export{We as default};
