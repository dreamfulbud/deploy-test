(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9477:function(t,n,e){Promise.resolve().then(e.bind(e,4703)),Promise.resolve().then(e.bind(e,3163)),Promise.resolve().then(e.t.bind(e,1445,23)),Promise.resolve().then(e.bind(e,7962)),Promise.resolve().then(e.bind(e,743)),Promise.resolve().then(e.t.bind(e,3986,23)),Promise.resolve().then(e.t.bind(e,3489,23))},3163:function(t,n,e){"use strict";e.r(n);var i=e(7437),s=e(8792),a=e(8825),c=e.n(a),r=e(2534);n.default=t=>{let{data:n}=t,e=t=>{var n;let e=t.currentTarget,i=e.nextElementSibling,s=null===(n=i.querySelector("div"))||void 0===n?void 0:n.offsetHeight;e.classList.contains("".concat(c().active))?i.style.height="0":i.style.height="".concat(s,"px"),e.classList.toggle("".concat(c().active))};return(0,i.jsx)("ul",{className:c().accordion,children:n.map((t,n)=>(0,i.jsxs)("li",{children:[(0,i.jsxs)("button",{type:"button",onClick:e,className:c().button,children:[(0,i.jsxs)("span",{className:c().title,children:[(0,i.jsxs)("strong",{children:["Q",n+1,"."]}),t.question]}),(0,i.jsx)("span",{className:c().icon,children:(0,i.jsx)(r.Z,{})})]}),(0,i.jsx)("div",{className:c().panel,children:(0,i.jsx)("div",{children:"string"==typeof t.answer?(0,i.jsx)(i.Fragment,{children:t.answer}):(0,i.jsxs)(i.Fragment,{children:[t.answer.string.map((t,n)=>(0,i.jsx)("p",{children:t},n)),t.answer.link&&(0,i.jsx)("div",{className:c().links,children:t.answer.link.map((t,n)=>(0,i.jsx)(s.default,{href:t.url,target:"_blank",className:c().link,children:t.text},n))})]})})})]},n))})}},2534:function(t,n,e){"use strict";var i=e(7437);n.Z=t=>{let{color:n="#8D9299"}=t;return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:n,children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.97554 5.37569C3.20985 5.14137 3.58975 5.14137 3.82407 5.37569L8.19981 9.75142L12.5755 5.37569C12.8099 5.14137 13.1898 5.14137 13.4241 5.37569C13.6584 5.61 13.6584 5.9899 13.4241 6.22421L8.62407 11.0242C8.38975 11.2585 8.00986 11.2585 7.77554 11.0242L2.97554 6.22422C2.74123 5.9899 2.74123 5.61 2.97554 5.37569Z"})})}},9933:function(t,n,e){"use strict";e.d(n,{j:function(){return o}});var i=e(7437),s=e(8136),a=e.n(s),c=e(703),r=e(2265);let l=t=>{let n,e,{data:s,type:l="ai"}=t;switch(l){case"ai":n="/images/icon-ai.svg";break;case"ai2":n="/images/icon-ai2.svg";break;default:n="/images/icon-you.svg"}if("object"==typeof s)e=s.map((t,n)=>(0,i.jsxs)(r.Fragment,{children:[t.string&&(0,i.jsx)("p",{children:t.string}),t.link&&(0,i.jsx)("a",{href:t.link,target:"_blank",className:"link-btn",children:t.text}),t.ul&&(0,i.jsx)("ul",{children:t.ul.map((t,n)=>(0,i.jsx)("li",{className:"list",children:t},n))})]},n));else{var o;let t=null===(o=s.match(/([^<]*)<strong>([^<]*)<\/strong>([^<]*)/))||void 0===o?void 0:o.slice(1);e=(0,i.jsx)("p",{children:t?t.map((t,n)=>(0,i.jsx)(r.Fragment,{children:n%2==1?(0,i.jsxs)("strong",{children:[t," "]}):(0,i.jsx)(i.Fragment,{children:t})},n)):s})}return(0,i.jsxs)("div",{className:"".concat(a().chat," ").concat("ai"===l?a().ai:a().you),children:[(0,i.jsx)("div",{className:a().icon,children:(0,i.jsx)(c.default,{src:n,alt:"",width:40,height:40})}),(0,i.jsxs)("div",{className:a().content,children:[(0,i.jsx)("strong",{className:a().color,children:"ai"===l?"Conf AI":"You"}),e]})]})},o=t=>{let{data:n}=t;return(0,i.jsx)(i.Fragment,{children:n&&(0,i.jsx)("ul",{className:a().chatlist,children:n.map((t,n)=>(0,i.jsx)("li",{className:a().fadeIn,children:(0,i.jsx)(i.Fragment,{children:t.ai?(0,i.jsx)(l,{data:t.ai,type:"ai"}):(0,i.jsx)(l,{data:t.you,type:"you"})})},n))})})}},4943:function(t,n,e){"use strict";e.d(n,{I:function(){return _}});var i=e(7437),s=e(2265),a=e(8136),c=e.n(a),r=e(703),l=e(2014),o=e.n(l);let d=t=>{let n,e,{data:s,type:a="ai",last:l}=t;switch(a){case"ai":n="/images/icon-ai.svg";break;case"ai2":n="/images/icon-ai2.svg";break;default:n="/images/icon-you.svg"}let d=t=>(0,i.jsx)(o(),{options:{delay:30},onInit:n=>{n.typeString(t).start().callFunction(function(t){if(t.elements.cursor.style.display="none",l){var n,e;null===(e=t.elements.container.closest("ul"))||void 0===e||null===(n=e.nextElementSibling)||void 0===n||n.classList.add(c().fadeOut)}})}});if("object"==typeof s){var _,h;e=d("".concat(s[0].string,'<br/>\n              <span class="list">').concat(null===(_=s[1])||void 0===_?void 0:_.ul[0],'</span><br/>\n              <span class="list">').concat(null===(h=s[1])||void 0===h?void 0:h.ul[1],"</span><br/>"))}else e=d(s);return(0,i.jsxs)("div",{className:"".concat(c().chat," ").concat("ai"===a?c().ai:c().you),children:[(0,i.jsx)("div",{className:c().icon,children:(0,i.jsx)(r.default,{src:n,alt:"",width:40,height:40})}),(0,i.jsxs)("div",{className:c().content,children:[(0,i.jsx)("strong",{className:c().color,children:"ai"===a?"Conf AI":"You"}),e]})]})},_=t=>{let{data:n,times:e,onClickSkip:a}=t,[r,l]=(0,s.useState)(Array(n.length).fill(!1));return(0,s.useEffect)(()=>{let t=[];return n.forEach((n,i)=>{let s=setTimeout(()=>{l(t=>{let n=[...t];return n[i]=!0,n})},e[i]);t.push(s)}),()=>{t.forEach(t=>clearTimeout(t))}},[n]),(0,i.jsxs)("div",{className:c().wrap,children:[n&&(0,i.jsx)("ul",{className:c().chatlist,children:n.map((t,e)=>(0,i.jsx)(s.Fragment,{children:r[e]&&(0,i.jsx)("li",{className:c().fadeIn,children:(0,i.jsx)(i.Fragment,{children:t.ai?(0,i.jsx)(d,{data:t.ai,type:"ai",last:n.length===e+1}):(0,i.jsx)(d,{data:t.you,type:"you",last:n.length===e+1})})})},e))}),(0,i.jsx)("button",{id:"skip",type:"button",className:c().skipBtn,onClick:a,children:"대화 건너뛰기"})]})}},5454:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var i=e(7437),s=e(1445),a=e.n(s);function c(t){let{id:n,className:e,children:s}=t;return(0,i.jsx)("section",{id:n,className:"".concat(a().section," ").concat(e),children:s})}},7962:function(t,n,e){"use strict";e.r(n),e.d(n,{Info:function(){return d}});var i=e(7437),s=e(5454),a=e(9933),c=e(3730),r=e.n(c),l=e(4943),o=e(2265);let d=t=>{let{id:n,data:e}=t,[c,d]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{d(!!sessionStorage.getItem("isSkip2"))},[]),(0,i.jsx)(s.Z,{id:n,className:"max-wrap ".concat(r().info),children:(0,i.jsx)("div",{children:c?(0,i.jsx)(a.j,{data:e}):(0,i.jsx)(l.I,{data:e,onClickSkip:()=>{d(!0),sessionStorage.setItem("isSkip2","y")},times:[1e3,3500,10500,12500,18500,2e4,27500,29100]})})})}},743:function(t,n,e){"use strict";e.r(n),e.d(n,{Intro:function(){return m}});var i=e(7437),s=e(4650),a=e.n(s),c=e(5454),r=e(177),l=e.n(r);let o=()=>(0,i.jsxs)("div",{className:l().glitch,children:[(0,i.jsx)("div",{className:"".concat(l().distortion," ").concat(l().base)}),(0,i.jsx)("div",{className:"".concat(l().distortion," ").concat(l().red)}),(0,i.jsx)("div",{className:"".concat(l().distortion," ").concat(l().cyan)}),(0,i.jsx)("div",{className:"".concat(l().distortion," ").concat(l().transparent)})]});var d=e(2534),_=e(9933),h=e(4943),u=e(2265);let m=t=>{let{id:n,data:e,className:s}=t,[r,l]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{l(!!sessionStorage.getItem("isSkip1"))},[]),(0,i.jsx)(c.Z,{id:n,className:"".concat(s," ").concat(a().intro),children:(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{}),r?(0,i.jsx)(_.j,{data:e}):(0,i.jsx)(h.I,{data:e,onClickSkip:()=>{l(!0),sessionStorage.setItem("isSkip1","y")},times:[1e3,5e3,7e3]}),(0,i.jsx)("a",{href:"#section2",className:a().arrow,children:(0,i.jsx)(d.Z,{})})]})})}},8825:function(t){t.exports={accordion:"Accordion_accordion__j4XtD",button:"Accordion_button__xTMZf",title:"Accordion_title__2Si2_",icon:"Accordion_icon__JFUFn",panel:"Accordion_panel__9EaG4",opacity:"Accordion_opacity__7Fv9R",active:"Accordion_active__dY_L_",links:"Accordion_links__7C1ZX",link:"Accordion_link__IqVMd"}},8136:function(t){t.exports={chatlist:"Chat_chatlist__tyDAi",wrap:"Chat_wrap__5tMWT",chat:"Chat_chat__y1mra",ai:"Chat_ai__uAFpU",you:"Chat_you__7WnvL",icon:"Chat_icon__BcbcM",content:"Chat_content__RV2eG",solidBtn:"Chat_solidBtn__mukFQ",fadeIn:"Chat_fadeIn__Fh0en",opacity:"Chat_opacity__5USvt",fadeOut:"Chat_fadeOut__5e56h",skipBtn:"Chat_skipBtn__NE1jo"}},177:function(t){t.exports={glitch:"Glitch_glitch__mHi3L",distortion:"Glitch_distortion__HFj_a",base:"Glitch_base__pQLK1","img-glitch-base":"Glitch_img-glitch-base__sQT7i",red:"Glitch_red__cO2OZ","img-glitch-red":"Glitch_img-glitch-red__g8ZbN",cyan:"Glitch_cyan__K_BPc","img-glitch-cyan":"Glitch_img-glitch-cyan__2jqbB",transparent:"Glitch_transparent__N5Fn7","img-glitch-transparent":"Glitch_img-glitch-transparent__KI8rS"}},1445:function(t){t.exports={section:"Section_section__xs1he"}},3730:function(t){t.exports={info:"Info_info__1jZqB"}},4650:function(t){t.exports={intro:"Intro_intro__Ipq1_",arrow:"Intro_arrow__SIEPt"}},3489:function(t){t.exports={mapWrap:"Location_mapWrap__6892g",map:"Location_map__nDMaE",address:"Location_address__gaM2Y",links:"Location_links__3uuO7"}},3986:function(){}},function(t){t.O(0,[607,532,971,69,744],function(){return t(t.s=9477)}),_N_E=t.O()}]);