(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5326:function(e,t,n){Promise.resolve().then(n.t.bind(n,1749,23)),Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,9646,23)),Promise.resolve().then(n.bind(n,8055)),Promise.resolve().then(n.t.bind(n,4162,23)),Promise.resolve().then(n.t.bind(n,4860,23))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return o},default:function(){return l}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:l}=n;return l?a.innerHTML=l.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function o(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let c=t.map(a).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(o(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(l-i.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return y},default:function(){return v}});let r=n(6921),a=n(1884),o=n(7437),l=r._(n(4887)),i=a._(n(2265)),s=n(7484),c=n(3313),u=n(2185),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},_=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:l="",strategy:i="afterInteractive",onError:s,stylesheets:u}=e,_=n||t;if(_&&f.has(_))return;if(d.has(t)){f.add(_),d.get(t).then(r,s);return}let m=()=>{a&&a(),f.add(_)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(o?(y.innerHTML=o.__html||"",m()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",m()):t&&(y.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===i&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",i),u&&h(u),document.body.appendChild(y)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>_(e))}):_(e)}function y(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:m,scripts:y,getIsSsr:b,appDir:v,nonce:g}=(0,i.useContext)(s.HeadManagerContext),E=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;E.current||(a&&e&&f.has(e)&&a(),E.current=!0)},[a,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===c?_(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>_(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>_(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...h}]),m(y)):b&&b()?f.add(t||n):b&&!b()&&_(e)),v){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,o.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4696:function(e,t,n){"use strict";var r=n(7437),a=n(1835),o=n.n(a),l=n(8792);t.Z=e=>{let{children:t,as:n,href:a="#",className:i,target:s}=e,c="".concat(o().btn," ").concat(i);return"a"===n?(0,r.jsx)(l.default,{href:a,className:c,target:s,children:t}):(0,r.jsx)("button",{type:"button",className:c,children:t})}},8055:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(7437),a=n(703),o=n(4696),l=n(6889),i=n.n(l),s=n(3672),c=JSON.parse('{"GI":[{"pc":"행사 소개","mobile":"소개"},{"pc":"찾아오시는 길","mobile":"위치"},{"pc":"FAQ"}],"bU":{"link":"https://weniv.link/E3rNEY","text":"연사 신청하기"}}'),u=n(8792),d=n(2265);let f=c.GI,p=c.bU;var h=e=>{let{}=e,[t,n]=(0,d.useState)("section1");return(0,s.Z)(n,".section"),(0,r.jsx)("header",{className:i().header,children:(0,r.jsxs)("div",{className:"max-wrap2",children:[(0,r.jsx)("h1",{className:i().pc,children:(0,r.jsx)("a",{href:"/",children:(0,r.jsx)(a.default,{src:"images/logo.svg",alt:"JEJU AI CONFERENCE",width:280,height:32})})}),(0,r.jsxs)("div",{className:i().links,children:[(0,r.jsx)(u.default,{href:"/",className:"".concat(i().mobile," ").concat("section1"===t?i().active:""),children:"홈"}),f.map((e,n)=>(0,r.jsxs)(u.default,{href:"#section".concat(n+2),className:t==="section".concat(n+2)?i().active:"",children:[(0,r.jsx)("span",{className:i().pc,children:e.pc}),(0,r.jsx)("span",{className:i().mobile,children:e.mobile?e.mobile:e.pc})]},n)),(0,r.jsx)(o.Z,{as:"a",href:p.link,className:i().pc,target:"_blank",children:p.text})]})]})})}},3672:function(e,t,n){"use strict";var r=n(2265);t.Z=(e,t)=>{let n=(0,r.useRef)({});(0,r.useEffect)(()=>{let r=new IntersectionObserver(t=>{var r;t.forEach(e=>{n.current[e.target.id]=e}),e(null===(r=Object.values(n.current).filter(e=>e.isIntersecting)[0])||void 0===r?void 0:r.target.id)},{rootMargin:"-180px 0px 0px -180px",threshold:[0,.5,1]});return[...document.querySelectorAll(t)].forEach(e=>r.observe(e)),()=>r.disconnect()},[e])}},4162:function(){},1835:function(e){e.exports={btn:"Button_btn__ufDb_"}},4860:function(e){e.exports={footer:"Footer_footer__qTy6d",logos:"Footer_logos__N6KZE"}},6889:function(e){e.exports={header:"Header_header__faUow",links:"Header_links__kP0q1",active:"Header_active__8zgYu",pc:"Header_pc__lmTj5",mobile:"Header_mobile__7KclR"}},9646:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[607,971,69,744],function(){return e(e.s=5326)}),_N_E=e.O()}]);