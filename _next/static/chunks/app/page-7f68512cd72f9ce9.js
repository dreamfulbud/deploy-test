(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7354:function(t,e,n){Promise.resolve().then(n.bind(n,4703)),Promise.resolve().then(n.bind(n,3163)),Promise.resolve().then(n.bind(n,4491)),Promise.resolve().then(n.t.bind(n,1445,23)),Promise.resolve().then(n.bind(n,7962)),Promise.resolve().then(n.bind(n,743)),Promise.resolve().then(n.t.bind(n,3489,23)),Promise.resolve().then(n.bind(n,3887))},3163:function(t,e,n){"use strict";n.r(e);var s=n(7437),i=n(8792),a=n(8825),c=n.n(a),l=n(2534);e.default=t=>{let{data:e}=t,n=t=>{var e;let n=t.currentTarget,s=n.nextElementSibling,i=null===(e=s.querySelector("div"))||void 0===e?void 0:e.offsetHeight;n.classList.contains("".concat(c().active))?s.style.height="0":s.style.height="".concat(i,"px"),n.classList.toggle("".concat(c().active))};return(0,s.jsx)("ul",{className:c().accordion,children:e.map((t,e)=>(0,s.jsxs)("li",{children:[(0,s.jsxs)("button",{type:"button",onClick:n,className:c().button,children:[(0,s.jsxs)("span",{className:c().title,children:[(0,s.jsxs)("strong",{children:["Q",e+1,"."]}),t.question]}),(0,s.jsx)("span",{className:c().icon,children:(0,s.jsx)(l.Z,{})})]}),(0,s.jsx)("div",{className:c().panel,children:(0,s.jsx)("div",{children:"string"==typeof t.answer?(0,s.jsx)(s.Fragment,{children:t.answer}):(0,s.jsxs)(s.Fragment,{children:[t.answer.string.map((t,e)=>(0,s.jsx)("p",{children:t},e)),t.answer.link&&(0,s.jsx)("div",{className:c().links,children:t.answer.link.map((t,e)=>(0,s.jsx)(i.default,{href:t.url,target:"_blank",className:c().link,children:t.text},e))})]})})})]},e))})}},2534:function(t,e,n){"use strict";var s=n(7437);e.Z=t=>{let{color:e="#8D9299"}=t;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:e,children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.97554 5.37569C3.20985 5.14137 3.58975 5.14137 3.82407 5.37569L8.19981 9.75142L12.5755 5.37569C12.8099 5.14137 13.1898 5.14137 13.4241 5.37569C13.6584 5.61 13.6584 5.9899 13.4241 6.22421L8.62407 11.0242C8.38975 11.2585 8.00986 11.2585 7.77554 11.0242L2.97554 6.22422C2.74123 5.9899 2.74123 5.61 2.97554 5.37569Z"})})}},9933:function(t,e,n){"use strict";n.d(e,{j:function(){return o}});var s=n(7437),i=n(8136),a=n.n(i),c=n(703),l=n(2265);let r=t=>{let e,n,{data:i,type:r="ai"}=t;switch(r){case"ai":e="/images/icon-ai.svg";break;case"ai2":e="/images/icon-ai2.svg";break;default:e="/images/icon-you.svg"}if("object"==typeof i)n=i.map((t,e)=>(0,s.jsxs)(l.Fragment,{children:[t.string&&(0,s.jsx)("p",{children:t.string}),t.link&&(0,s.jsx)("a",{href:t.link,target:"_blank",className:"link-btn",children:t.text}),t.ul&&(0,s.jsx)("ul",{children:t.ul.map((t,e)=>(0,s.jsx)("li",{className:"list",children:t},e))})]},e));else{var o;let t=null===(o=i.match(/([^<]*)<strong>([^<]*)<\/strong>([^<]*)/))||void 0===o?void 0:o.slice(1);n=(0,s.jsx)("p",{children:t?t.map((t,e)=>(0,s.jsx)(l.Fragment,{children:e%2==1?(0,s.jsxs)("strong",{children:[t," "]}):(0,s.jsx)(s.Fragment,{children:t})},e)):i})}return(0,s.jsxs)("div",{className:"".concat(a().chat," ").concat("ai"===r?a().ai:a().you),children:[(0,s.jsx)("div",{className:a().icon,children:(0,s.jsx)(c.default,{src:e,alt:"",width:40,height:40})}),(0,s.jsxs)("div",{className:a().content,children:[(0,s.jsx)("strong",{className:a().color,children:"ai"===r?"Conf AI":"You"}),n]})]})},o=t=>{let{data:e}=t;return(0,s.jsx)(s.Fragment,{children:e&&(0,s.jsx)("ul",{className:a().chatlist,children:e.map((t,e)=>(0,s.jsx)("li",{className:a().fadeIn,children:(0,s.jsx)(s.Fragment,{children:t.ai?(0,s.jsx)(r,{data:t.ai,type:"ai"}):(0,s.jsx)(r,{data:t.you,type:"you"})})},e))})})}},4943:function(t,e,n){"use strict";n.d(e,{I:function(){return _}});var s=n(7437),i=n(2265),a=n(8136),c=n.n(a),l=n(703),r=n(2014),o=n.n(r);let d=t=>{let e,n,{data:i,type:a="ai",last:r}=t;switch(a){case"ai":e="/images/icon-ai.svg";break;case"ai2":e="/images/icon-ai2.svg";break;default:e="/images/icon-you.svg"}let d=t=>(0,s.jsx)(o(),{options:{delay:30},onInit:e=>{e.typeString(t).start().callFunction(function(t){if(t.elements.cursor.style.display="none",r){var e,n;null===(n=t.elements.container.closest("ul"))||void 0===n||null===(e=n.nextElementSibling)||void 0===e||e.classList.add(c().fadeOut)}})}});if("object"==typeof i){var _,h;n=d("".concat(i[0].string,'<br/>\n        <span class="list">').concat(null===(_=i[1])||void 0===_?void 0:_.ul[0],'</span><br/>\n        <span class="list">').concat(null===(h=i[1])||void 0===h?void 0:h.ul[1],"</span><br/>\n        ").concat(i[2].string))}else n=d(i);return(0,s.jsxs)("div",{className:"".concat(c().chat," ").concat("ai"===a?c().ai:c().you),children:[(0,s.jsx)("div",{className:c().icon,children:(0,s.jsx)(l.default,{src:e,alt:"",width:40,height:40})}),(0,s.jsxs)("div",{className:c().content,children:[(0,s.jsx)("strong",{className:c().color,children:"ai"===a?"Conf AI":"You"}),n]})]})},_=t=>{let{data:e,times:n,onClickSkip:a}=t,[l,r]=(0,i.useState)(Array(e.length).fill(!1));return(0,i.useEffect)(()=>{let t=[];return e.forEach((e,s)=>{let i=setTimeout(()=>{r(t=>{let e=[...t];return e[s]=!0,e})},n[s]);t.push(i)}),()=>{t.forEach(t=>clearTimeout(t))}},[e]),(0,s.jsxs)("div",{className:c().wrap,children:[e&&(0,s.jsx)("ul",{className:c().chatlist,children:e.map((t,n)=>(0,s.jsx)(i.Fragment,{children:l[n]&&(0,s.jsx)("li",{className:c().fadeIn,children:(0,s.jsx)(s.Fragment,{children:t.ai?(0,s.jsx)(d,{data:t.ai,type:"ai",last:e.length===n+1}):(0,s.jsx)(d,{data:t.you,type:"you",last:e.length===n+1})})})},n))}),(0,s.jsx)("button",{id:"skip",type:"button",className:c().skipBtn,onClick:a,children:"대화 건너뛰기"})]})}},4491:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return o}});var s=n(7437),i=n(2265);function a(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"#2e6ff2",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.83333 4C5.07853 4 4 5.56178 4 7.03333V24.9667C4 26.4382 5.07853 28 6.83333 28H11.5V25H7.00193C7.00073 24.9901 7 24.979 7 24.9667V7.03333C7 7.02104 7.00073 7.00994 7.00193 7H23.9981C23.9993 7.00994 24 7.02104 24 7.03333V10.5H27V7.03333C27 5.56178 25.9215 4 24.1667 4H6.83333ZM16.8333 13C15.2004 13 14 14.3682 14 15.9V34.1C14 35.6318 15.2004 37 16.8333 37H34.1667C35.7996 37 37 35.6318 37 34.1V15.9C37 14.3682 35.7996 13 34.1667 13H16.8333ZM34 34H17V16H34V34ZM31 21.5C31 22.3284 30.3284 23 29.5 23H21.5C20.6716 23 20 22.3284 20 21.5C20 20.6716 20.6716 20 21.5 20H29.5C30.3284 20 31 20.6716 31 21.5ZM29.5 30C30.3284 30 31 29.3284 31 28.5C31 27.6716 30.3284 27 29.5 27H21.5C20.6716 27 20 27.6716 20 28.5C20 29.3284 20.6716 30 21.5 30H29.5Z"})})}function c(){return(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 40 40",fill:"#2e6ff2",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 5.5C11.9919 5.5 5.5 11.9919 5.5 20C5.5 28.0081 11.9919 34.5 20 34.5C28.0081 34.5 34.5 28.0081 34.5 20C34.5 11.9919 28.0081 5.5 20 5.5ZM2.5 20C2.5 10.335 10.335 2.5 20 2.5C29.665 2.5 37.5 10.335 37.5 20C37.5 29.665 29.665 37.5 20 37.5C10.335 37.5 2.5 29.665 2.5 20Z"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.9241 14.8184C27.5766 15.3288 27.6919 16.2715 27.1816 16.9241L20.1431 25.9241C19.8803 26.2601 19.4869 26.4683 19.0612 26.4967C18.6356 26.525 18.218 26.3708 17.913 26.0726L12.9514 21.2224C12.359 20.6433 12.3483 19.6936 12.9274 19.1012C13.5065 18.5088 14.4562 18.498 15.0486 19.0771L18.8121 22.7562L24.8184 15.076C25.3288 14.4234 26.2715 14.3081 26.9241 14.8184Z"})]})}var l=n(9173),r=n.n(l);function o(t){let{text:e}=t,[n,l]=(0,i.useState)(!1),o=async t=>{if(navigator.clipboard)try{await navigator.clipboard.writeText(e),l(!0),setTimeout(()=>{l(!1)},1500)}catch(t){alert("실패하였습니다. 다시 시도해주세요!")}else{let t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),l(!0),setTimeout(()=>{l(!1)},1500)}};return(0,s.jsxs)("button",{type:"button",onClick:o,className:"".concat(r().copy_button," ").concat(n?r().click:""),children:[n?(0,s.jsx)(c,{}):(0,s.jsx)(a,{}),(0,s.jsx)("span",{className:"a11y-hidden",children:n?"복사완료":"복사하기"})]})}},5454:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var s=n(7437),i=n(1445),a=n.n(i);function c(t){let{id:e,className:n,children:i}=t;return(0,s.jsx)("section",{id:e,className:"section ".concat(a().section," ").concat(n),children:i})}},7962:function(t,e,n){"use strict";n.r(e),n.d(e,{Info:function(){return d}});var s=n(7437),i=n(5454),a=n(9933),c=n(3730),l=n.n(c),r=n(4943),o=n(2265);let d=t=>{let{id:e,data:n}=t,[c,d]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{d(!!sessionStorage.getItem("isSkip2"))},[]),(0,s.jsx)(i.Z,{id:e,className:"max-wrap ".concat(l().info),children:(0,s.jsx)("div",{children:c?(0,s.jsx)(a.j,{data:n}):(0,s.jsx)(r.I,{data:n,onClickSkip:()=>{d(!0),sessionStorage.setItem("isSkip2","y")},times:[1e3,3500,10500,12500,18500,2e4,27500,29100]})})})}},743:function(t,e,n){"use strict";n.r(e),n.d(e,{Intro:function(){return m}});var s=n(7437),i=n(4650),a=n.n(i),c=n(5454),l=n(177),r=n.n(l);let o=()=>(0,s.jsxs)("div",{className:r().glitch,children:[(0,s.jsx)("div",{className:"".concat(r().distortion," ").concat(r().base)}),(0,s.jsx)("div",{className:"".concat(r().distortion," ").concat(r().red)}),(0,s.jsx)("div",{className:"".concat(r().distortion," ").concat(r().cyan)}),(0,s.jsx)("div",{className:"".concat(r().distortion," ").concat(r().transparent)})]});var d=n(2534),_=n(9933),h=n(4943),u=n(2265);let m=t=>{let{id:e,data:n,className:i}=t,[l,r]=(0,u.useState)(!1);return(0,u.useEffect)(()=>{r(!!sessionStorage.getItem("isSkip1"))},[]),(0,s.jsxs)(c.Z,{id:e,className:"".concat(i," ").concat(a().intro),children:[(0,s.jsxs)("div",{className:"max-wrap2 ".concat(a().introWrap),children:[(0,s.jsx)(o,{}),(0,s.jsx)("div",{className:a().grow,children:l?(0,s.jsx)(_.j,{data:n}):(0,s.jsx)(h.I,{data:n,onClickSkip:()=>{r(!0),sessionStorage.setItem("isSkip1","y")},times:[1e3,5e3,7e3]})})]}),(0,s.jsx)("a",{href:"#section2",className:a().arrow,children:(0,s.jsx)(d.Z,{})})]})}},3887:function(t,e,n){"use strict";n.r(e),n.d(e,{Program:function(){return p}});var s=n(7437),i=n(3986),a=n.n(i),c=n(5454),l=n(286),r=n.n(l);let o=t=>{let{onClickTab:e}=t;return(0,s.jsxs)("div",{className:r().tab,children:[(0,s.jsx)("button",{type:"button",onClick:e,children:"all"}),(0,s.jsx)("button",{type:"button",onClick:e,children:"day1"}),(0,s.jsx)("button",{type:"button",onClick:e,children:"day2"})]})};var d=n(2265),_=n(406),h=n.n(_);function u(t){let{item:e,index:n}=t,i=e.times>1?"".concat(n-2,"/").concat(n-2+e.times):null;return(0,s.jsxs)("li",{style:i?{gridRow:i}:{},children:[(0,s.jsxs)("div",{className:h().spaceTime,children:[(0,s.jsxs)("p",{className:"".concat(h().space," ").concat("나"===e.space&&h().space2),children:["ROOM ",(0,s.jsx)("strong",{children:e.space})]}),(0,s.jsx)("p",{className:h().time,children:e.time})]}),(0,s.jsxs)("h3",{className:h().title,children:[e.title,e.subtitle&&(0,s.jsx)("span",{children:e.subtitle})]}),(0,s.jsxs)("p",{className:h().speaker,children:[(0,s.jsx)("strong",{children:e.speaker}),e.affiliated&&(0,s.jsx)("span",{children:e.affiliated})]})]})}function m(t){let{data:e,day:n}=t;return(0,s.jsxs)("div",{className:h().fadeIn,children:[(0,s.jsxs)("h2",{className:h().tit,children:[n," ",(0,s.jsxs)("span",{children:["2024.04.","day1"===n?"12(금)":"13(토)"]})]}),(0,s.jsx)("ul",{className:h().section_cont,children:e.map((t,e)=>(0,s.jsx)(u,{item:t,index:e},e))})]})}let p=t=>{let{id:e,data:n}=t,[i,l]=(0,d.useState)("all");return(0,s.jsx)(c.Z,{id:e,className:a().program,children:(0,s.jsxs)("div",{className:"max-wrap2",children:[(0,s.jsx)("h3",{className:"section-title",children:"프로그램 안내"}),(0,s.jsx)(o,{onClickTab:t=>{let e=t.currentTarget.textContent;e&&l(e)}}),"all"===i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m,{data:n.day1,day:"day1"}),(0,s.jsx)(m,{data:n.day2,day:"day2"})]}):(0,s.jsx)(s.Fragment,{children:"day1"===i?(0,s.jsx)(m,{data:n.day1,day:"day1"}):(0,s.jsx)(m,{data:n.day2,day:"day2"})})]})})}},8825:function(t){t.exports={accordion:"Accordion_accordion__j4XtD",button:"Accordion_button__xTMZf",title:"Accordion_title__2Si2_",icon:"Accordion_icon__JFUFn",panel:"Accordion_panel__9EaG4",opacity:"Accordion_opacity__7Fv9R",active:"Accordion_active__dY_L_",links:"Accordion_links__7C1ZX",link:"Accordion_link__IqVMd"}},8136:function(t){t.exports={chatlist:"Chat_chatlist__tyDAi",wrap:"Chat_wrap__5tMWT",chat:"Chat_chat__y1mra",ai:"Chat_ai__uAFpU",you:"Chat_you__7WnvL",icon:"Chat_icon__BcbcM",content:"Chat_content__RV2eG",solidBtn:"Chat_solidBtn__mukFQ",fadeIn:"Chat_fadeIn__Fh0en",opacity:"Chat_opacity__5USvt",fadeOut:"Chat_fadeOut__5e56h",skipBtn:"Chat_skipBtn__NE1jo"}},9173:function(t){t.exports={copy_button:"CopyBtn_copy_button___YpQX",click:"CopyBtn_click__qIUvQ",rotate:"CopyBtn_rotate__tsuCl"}},177:function(t){t.exports={glitch:"Glitch_glitch__mHi3L",distortion:"Glitch_distortion__HFj_a",base:"Glitch_base__pQLK1","img-glitch-base":"Glitch_img-glitch-base__sQT7i",red:"Glitch_red__cO2OZ","img-glitch-red":"Glitch_img-glitch-red__g8ZbN",cyan:"Glitch_cyan__K_BPc","img-glitch-cyan":"Glitch_img-glitch-cyan__2jqbB",transparent:"Glitch_transparent__N5Fn7","img-glitch-transparent":"Glitch_img-glitch-transparent__KI8rS"}},1445:function(t){t.exports={section:"Section_section__xs1he"}},3730:function(t){t.exports={info:"Info_info__1jZqB"}},4650:function(t){t.exports={intro:"Intro_intro__Ipq1_",introWrap:"Intro_introWrap__6KF11",arrow:"Intro_arrow__SIEPt"}},3489:function(t){t.exports={mapWrap:"Location_mapWrap__6892g",map:"Location_map__nDMaE",address:"Location_address__gaM2Y",links:"Location_links__3uuO7"}},3986:function(t){t.exports={program:"Program_program__DTcja"}},286:function(t){t.exports={tab:"TabButton_tab__GCh8x"}},406:function(t){t.exports={tit:"Timetable_tit__a0uoQ",section_cont:"Timetable_section_cont__ot_J3",title:"Timetable_title__zzOeS",speaker:"Timetable_speaker__sJsgK",spaceTime:"Timetable_spaceTime__sH5rY",space:"Timetable_space__3R1LU",space2:"Timetable_space2__DGePz",time:"Timetable_time__Oaqg_",fadeIn:"Timetable_fadeIn__zloy2"}}},function(t){t.O(0,[607,532,971,69,744],function(){return t(t.s=7354)}),_N_E=t.O()}]);