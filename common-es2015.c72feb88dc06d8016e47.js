(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6Hxr":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));class t{constructor(){}ngOnInit(){}}},"7MJf":function(n,l,e){"use strict";e.d(l,"a",(function(){return v})),e.d(l,"b",(function(){return k})),e.d(l,"c",(function(){return h})),e.d(l,"d",(function(){return w})),e.d(l,"e",(function(){return r}));var t=e("imtE"),i=e("kBU6");const r=n=>new Promise((l,e)=>{Object(t.l)(()=>{o(n),a(n).then(e=>{e.animation&&e.animation.destroy(),u(n),l(e)},l=>{u(n),e(l)})})}),o=n=>{const l=n.enteringEl,e=n.leavingEl;E(l,e,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),w(l,!1),e&&w(e,!1)},a=async n=>{const l=await s(n);return l?c(l,n):d(n)},u=n=>{const l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")},s=async n=>{if(n.leavingEl&&n.animated&&0!==n.duration)return n.animationBuilder?n.animationBuilder:"ios"===n.mode?(await e.e(97).then(e.bind(null,"pe/X"))).iosTransitionAnimation:(await e.e(98).then(e.bind(null,"KYEN"))).mdTransitionAnimation},c=async(n,l)=>{await m(l,!0);const e=n(l.baseEl,l);p(l.enteringEl,l.leavingEl);const t=await b(e,l);return l.progressCallback&&l.progressCallback(void 0),t&&g(l.enteringEl,l.leavingEl),{hasCompleted:t,animation:e}},d=async n=>{const l=n.enteringEl,e=n.leavingEl;return await m(n,!1),p(l,e),g(l,e),{hasCompleted:!0}},m=async(n,l)=>{const e=(void 0!==n.deepWait?n.deepWait:l)?[v(n.enteringEl),v(n.leavingEl)]:[y(n.enteringEl),y(n.leavingEl)];await Promise.all(e),await f(n.viewIsReady,n.enteringEl)},f=async(n,l)=>{n&&await n(l)},b=(n,l)=>{const e=l.progressCallback,t=new Promise(l=>{n.onFinish(n=>l(1===n))});return e?(n.progressStart(!0),e(n)):n.play(),t},p=(n,l)=>{h(l,i.c),h(n,i.a)},g=(n,l)=>{h(n,i.b),h(l,i.d)},h=(n,l)=>{if(n){const e=new CustomEvent(l,{bubbles:!1,cancelable:!1});n.dispatchEvent(e)}},y=n=>n&&n.componentOnReady?n.componentOnReady():Promise.resolve(),v=async n=>{const l=n;if(l){if(null!=l.componentOnReady&&null!=await l.componentOnReady())return;await Promise.all(Array.from(l.children).map(v))}},w=(n,l)=>{l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))},E=(n,l,e)=>{void 0!==n&&(n.style.zIndex="back"===e?"99":"101"),void 0!==l&&(l.style.zIndex="100")},k=n=>n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n},Ado8:function(n,l,e){"use strict";e.d(l,"a",(function(){return m}));var t=e("mrSG"),i=e("AytR"),r=e("IheW"),o=e("vkgz"),a=e("8Y7J"),u=e("sZkV");const s=i.a.apiKey,c=i.a.apiUrl,d=(new r.g).set("apiKey",s);let m=(()=>{class n{constructor(n,l){this.http=n,this.loadingController=l}showLoading(){return t.a(this,void 0,void 0,(function*(){return this.loading=yield this.loadingController.create({duration:2e3}),yield this.loading.present()}))}getData(n){return this.showLoading(),this.http.get(`${c}/${n}`,{params:d}).pipe(Object(o.a)(n=>{console.log("FETCHED ARTICLES:")}))}}return n.ngInjectableDef=a.Lb({factory:function(){return new n(a.Mb(r.c),a.Mb(u.Ab))},token:n,providedIn:"root"}),n})()},Dl6n:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return r})),e.d(l,"c",(function(){return t})),e.d(l,"d",(function(){return a}));const t=(n,l)=>null!==l.closest(n),i=n=>"string"==typeof n&&n.length>0?{"ion-color":!0,[`ion-color-${n}`]:!0}:void 0,r=n=>{const l={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(n=>null!=n).map(n=>n.trim()).filter(n=>""!==n):[])(n).forEach(n=>l[n]=!0),l},o=/^[a-z][a-z0-9+\-.]*:/,a=async(n,l,e)=>{if(null!=n&&"#"!==n[0]&&!o.test(n)){const t=document.querySelector("ion-router");if(t)return null!=l&&l.preventDefault(),t.push(n,e)}return!1}},TMBv:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));const t={bubbles:{dur:1e3,circles:9,fn:(n,l,e)=>{const t=`${n*l/e-n}ms`,i=2*Math.PI*l/e;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(n,l,e)=>{const t=l/e,i=`${n*t-n}ms`,r=2*Math.PI*t;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(n,l)=>({r:6,style:{left:`${9-9*l}px`,"animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:12,fn:(n,l,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":`${n*l/e-n}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(n,l,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":`${n*l/e-n}ms`}})}}},YtD4:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));const t=n=>{try{if("string"!=typeof n||""===n)return n;const l=document.createDocumentFragment(),e=document.createElement("div");l.appendChild(e),e.innerHTML=n,a.forEach(n=>{const e=l.querySelectorAll(n);for(let t=e.length-1;t>=0;t--){const n=e[t];n.parentNode?n.parentNode.removeChild(n):l.removeChild(n);const o=r(n);for(let l=0;l<o.length;l++)i(o[l])}});const t=r(l);for(let n=0;n<t.length;n++)i(t[n]);const o=document.createElement("div");o.appendChild(l);const u=o.querySelector("div");return null!==u?u.innerHTML:o.innerHTML}catch(l){return console.error(l),""}},i=n=>{if(n.nodeType&&1!==n.nodeType)return;for(let e=n.attributes.length-1;e>=0;e--){const l=n.attributes.item(e),t=l.name;if(!o.includes(t.toLowerCase())){n.removeAttribute(t);continue}const i=l.value;null!=i&&i.toLowerCase().includes("javascript:")&&n.removeAttribute(t)}const l=r(n);for(let e=0;e<l.length;e++)i(l[e])},r=n=>null!=n.children?n.children:n.childNodes,o=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(n,l,e){"use strict";e.d(l,"a",(function(){return t})),e.d(l,"b",(function(){return i}));const t=async(n,l,e,t,i)=>{if(n)return n.attachViewToDom(l,e,i,t);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const r="string"==typeof e?l.ownerDocument&&l.ownerDocument.createElement(e):e;return t&&t.forEach(n=>r.classList.add(n)),i&&Object.assign(r,i),l.appendChild(r),r.componentOnReady&&await r.componentOnReady(),r},i=(n,l)=>{if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}},opz7:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return r})),e.d(l,"c",(function(){return o})),e.d(l,"d",(function(){return t}));const t=()=>{const n=window.TapticEngine;n&&n.selection()},i=()=>{const n=window.TapticEngine;n&&n.gestureSelectionStart()},r=()=>{const n=window.TapticEngine;n&&n.gestureSelectionChanged()},o=()=>{const n=window.TapticEngine;n&&n.gestureSelectionEnd()}},qlXg:function(n,l,e){"use strict";var t=e("8Y7J"),i=e("MKJQ"),r=e("sZkV"),o=e("SVse");class a{constructor(){}ngOnInit(){}}var u=t.mb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{max-height:600px;overflow:scroll;min-width:100%}"]],data:{}});function s(n){return t.Hb(0,[(n()(),t.ob(0,0,null,null,0,"img",[["ion-img",""]],[[8,"src",4],[8,"alt",0]],null,null,null,null))],null,(function(n,l){var e=l.component;n(l,0,0,e.article.urlToImage,e.article.source.name)}))}function c(n){return t.Hb(0,[t.Bb(0,o.d,[t.s]),(n()(),t.ob(1,0,null,null,23,"ion-card",[["target","_blank"]],null,null,null,i.u,i.b)),t.nb(2,49152,null,0,r.j,[t.h,t.k,t.x],{href:[0,"href"],target:[1,"target"]},null),(n()(),t.db(16777216,null,0,1,null,s)),t.nb(4,16384,null,0,o.j,[t.L,t.I],{ngIf:[0,"ngIf"]},null),(n()(),t.ob(5,0,null,0,7,"ion-item",[],null,null,null,i.A,i.j)),t.nb(6,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(n()(),t.ob(7,0,null,0,1,"ion-icon",[["name","calendar"],["slot","start"]],null,null,null,i.z,i.i)),t.nb(8,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.ob(9,0,null,0,3,"ion-label",[],null,null,null,i.B,i.k)),t.nb(10,49152,null,0,r.K,[t.h,t.k,t.x],null,null),(n()(),t.Fb(11,0,[" "," "])),t.Cb(12,1),(n()(),t.ob(13,0,null,0,6,"ion-card-content",[],null,null,null,i.s,i.c)),t.nb(14,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(n()(),t.ob(15,0,null,0,2,"ion-card-title",[["rows","3"]],null,null,null,i.t,i.d)),t.nb(16,49152,null,0,r.n,[t.h,t.k,t.x],null,null),(n()(),t.Fb(17,0,[" "," "])),(n()(),t.ob(18,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Fb(19,null,["",""])),(n()(),t.ob(20,0,null,0,4,"ion-item",[["class","text-center"]],null,null,null,i.A,i.j)),t.nb(21,49152,null,0,r.E,[t.h,t.k,t.x],null,null),(n()(),t.ob(22,0,null,0,2,"i",[],null,null,null,null,null)),(n()(),t.ob(23,0,null,null,1,"small",[],null,null,null,null,null)),(n()(),t.Fb(24,null,[" "," "]))],(function(n,l){var e=l.component;n(l,2,0,t.sb(1,"",e.article.url,""),"_blank"),n(l,4,0,e.article.urlToImage),n(l,8,0,"calendar")}),(function(n,l){var e=l.component,i=t.Gb(l,11,0,n(l,12,0,t.Ab(l,0),e.article.publishedAt));n(l,11,0,i),n(l,17,0,e.article.title),n(l,19,0,e.article.description),n(l,24,0,e.article.author)}))}e("6Hxr"),e.d(l,"a",(function(){return d})),e.d(l,"b",(function(){return f}));var d=t.mb({encapsulation:0,styles:[[""]],data:{}});function m(n){return t.Hb(0,[(n()(),t.ob(0,0,null,null,3,"ion-col",[["size","12"],["size-lg","2"],["size-md","3"],["size-sm","6"],["size-xs","12"]],null,null,null,i.v,i.e)),t.nb(1,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(2,0,null,0,1,"app-article",[],null,null,null,c,u)),t.nb(3,114688,null,0,a,[],{article:[0,"article"]},null)],(function(n,l){n(l,1,0,"12"),n(l,3,0,l.context.$implicit)}),null)}function f(n){return t.Hb(0,[(n()(),t.ob(0,0,null,null,5,"ion-grid",[],null,null,null,i.x,i.g)),t.nb(1,49152,null,0,r.x,[t.h,t.k,t.x],null,null),(n()(),t.ob(2,0,null,0,3,"ion-row",[],null,null,null,i.C,i.l)),t.nb(3,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(n()(),t.db(16777216,null,0,1,null,m)),t.nb(5,278528,null,0,o.i,[t.L,t.I,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,5,0,null==e.news?null:e.news.articles)}),null)}}}]);