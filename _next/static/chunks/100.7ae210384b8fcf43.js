"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{100:function(e,s,t){t.r(s),t.d(s,{DisqusJS:function(){return V}});var n=t(4708);const r=e=>{let s;const t=new Set,n=(e,n)=>{const r="function"===typeof e?e(s):e;if(r!==s){const e=s;s=n?r:Object.assign({},s,r),t.forEach((t=>t(s,e)))}},r=()=>s,o={setState:n,getState:r,subscribe:e=>(t.add(e),()=>t.delete(e)),destroy:()=>t.clear()};return s=e(n,r,o),o};var o=t(7667),a=t(5308);const d=e=>{const s="function"===typeof e?(e=>e?r(e):r)(e):e,t=(e,t)=>function(e,s=e.getState,t){const n=(0,a.useSyncExternalStoreWithSelector)(e.subscribe,e.getState,e.getServerState||e.getState,s,t);return(0,o.useDebugValue)(n),n}(s,e,t);return Object.assign(t,s),t};var i=e=>e?d(e):d;const c="undefined"!==typeof window,l=e=>s=>{const t=e[(n=0,r=e.length-1,Math.random()*(r-n+1)+n|0)];var n,r;const o=new URL(s);return o.searchParams.set("api_key",t),fetch(o.toString()).then((e=>e.json()))},m=e=>(e=>new Date(e))(e).getTime(),u=e=>e.replace(/a\.disquscdn\.com/g,"c.disquscdn.com"),h=(new Date).getTimezoneOffset(),j=e=>String(e).padStart(2,"0"),f=e=>{const s=m(e),t=new Date(s-60*h*1e3);return`${t.getFullYear()}-${j(t.getMonth()+1)}-${j(t.getMonth()+1)} ${j(t.getHours())}:${j(t.getMinutes())}`},p=e=>new Promise(((s,t)=>{const n=new Image,r=setTimeout((()=>{n.onerror=null,n.onload=null,t()}),3e3);n.onerror=()=>{clearTimeout(r),t()},n.onload=()=>{clearTimeout(r),s()},n.src=`https://${e}/favicon.ico?${+new Date}=${+new Date}`})),q={mode:(()=>{if(c){const e=localStorage.getItem("dsqjs_mode");if("dsqjs"===e||"disqus"===e)return e}return null})(),sortType:(()=>{if(c){const e=localStorage.getItem("dsqjs_sort");if("popular"===e||"asc"===e||"desc"===e)return e}return null})(),error:!1,msg:null,thread:null,posts:[],loadingPosts:!1,morePostsError:!1},g=i(((e,s)=>({...q,setMode(s){e({mode:s}),c&&s&&localStorage.setItem("dsqjs_mode",s)},checkMode(s){e({msg:"\u6b63\u5728\u68c0\u67e5 Disqus \u80fd\u5426\u8bbf\u95ee..."}),Promise.all(["disqus.com",`${s}.disqus.com`].map(p)).then((()=>{e({mode:"disqus"}),localStorage.setItem("dsqjs_mode","disqus")}),(()=>{e({mode:"dsqjs"}),localStorage.setItem("dsqjs_mode","dsqjs")}))},setSortType(s){e({sortType:s}),c&&s&&localStorage.setItem("dsqjs_sort",s)},setError(s){e({error:s})},setMsg(s){e({msg:s})},async fetchThread(s,t,n,r="https://disqus.com/api/"){try{const o=await l(n)(`${r}3.0/threads/list.json?forum=${encodeURIComponent(s)}&thread=${encodeURIComponent(`ident:${t}`)}`);0===o.code?e({thread:o}):e({error:!0})}catch{e({error:!0})}},resetPosts(){e({posts:[],loadingPosts:!1,morePostsError:!1})},async fetchMorePosts(t,n,r,o="https://disqus.com/api/"){if(e({loadingPosts:!0,morePostsError:!1}),!n)return;const a=s().posts,d=s().sortType,i=a.at(-1);if(i&&!i.cursor.hasNext)return;const c=0===a.length?`${o}3.0/threads/listPostsThreaded?forum=${t}&thread=${n}&order=${d??"desc"}`:`${o}3.0/threads/listPostsThreaded?forum=${t}&thread=${n}${i?.cursor.next?`&cursor=${i.cursor.next}`:""}&order=${d??"desc"}`,m=()=>{0===a.length?e({error:!0,loadingPosts:!1}):e({morePostsError:!0,loadingPosts:!1})};try{const s=await l(r)(c);0===s.code?e((e=>({posts:e.posts.concat(s),loadingPosts:!1}))):m()}catch{m()}},reset(){e({...q})}}))),x=(0,o.memo)((e=>{const{isError:s,isLoading:t,...r}=e;return(0,n.jsx)("a",{...r,id:"dsqjs-load-more",className:"dsqjs-load-more "+(s?"is-error":""),role:"button",children:s?"\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5":t?"\u6b63\u5728\u52a0\u8f7d...":"\u52a0\u8f7d\u66f4\u591a\u8bc4\u8bba"})}));const v=(0,o.memo)((e=>{const s=g((e=>e.setMode)),t=(0,o.useCallback)((()=>{s("disqus"),localStorage.setItem("dsqjs_mode","disqus")}),[s]);return(0,n.jsx)("a",{id:"dsqjs-force-disqus",className:"dsqjs-msg-btn",onClick:t,children:e.children})}));const b=(0,o.memo)((e=>{const s=g((e=>e.setMode)),t=(0,o.useCallback)((()=>{s(null),localStorage.removeItem("dsqjs_mode")}),[s]);return(0,n.jsx)("a",{id:"dsqjs-test-disqus",className:"dsqjs-msg-btn",onClick:t,children:e.children})}));const y=(0,o.memo)((e=>{const s=g((e=>e.setMode)),t=(0,o.useCallback)((()=>{s("dsqjs"),localStorage.setItem("dsqjs_mode","dsqjs")}),[s]);return(0,n.jsx)("a",{id:"dsqjs-force-dsqjs",className:"dsqjs-msg-btn",onClick:t,children:e.children})}));const S=(0,o.memo)((e=>{const s=g((e=>e.setError)),t=(0,o.useCallback)((()=>{s(!1)}),[s]);return(0,n.jsx)("a",{id:"dsqjs-reload-dsqjs",className:"dsqjs-msg-btn",onClick:t,children:e.children})}));const N="disqus_thread",w="dsq-embed-scr",k=(0,o.memo)((e=>{const s=g((e=>e.setMsg)),[t,r]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{if(s(null),c){const s=()=>{if(c){window.disqus_config=void 0;const e=document.getElementById(w);e&&(document.head.removeChild(e),e.remove()),window.DISQUS?.reset({});try{delete window.DISQUS}catch{window.DISQUS=void 0}const s=document.getElementById(N);if(s)for(;s.hasChildNodes();)s.removeChild(s.firstChild);document.querySelectorAll('link[href*="disquscdn.com/next"], link[href*="disqus.com/next"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach((e=>{e.parentNode?.removeChild(e),e.parentElement?.removeChild(e),e.remove()}))}};window.disqus_shortname!==e.shortname&&s();const t=()=>function(){e.identifier&&(this.page.identifier=e.identifier),e.url&&(this.page.url=e.url),e.title&&(this.page.title=e.title),this.callbacks.onReady=[()=>{r(!0)}]};if(window.DISQUS&&document.getElementById(w))window.DISQUS.reset({reload:!0,config:t()});else{window.disqus_config=t(),window.disqus_shortname=e.shortname;const s=document.createElement("script");s.id=w,s.src=`https://${e.shortname}.disqus.com/embed.js`,s.async=!0,document.head.appendChild(s)}return s}}),[e.shortname,e.identifier,e.url,e.title,s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{id:N,children:["\u8bc4\u8bba\u5b8c\u6574\u6a21\u5f0f\u52a0\u8f7d\u4e2d... \u5982\u679c\u957f\u65f6\u95f4\u65e0\u6cd5\u52a0\u8f7d\uff0c\u8bf7\u9488\u5bf9 disq.us | disquscdn.com | disqus.com \u542f\u7528\u4ee3\u7406\uff0c\u6216\u5207\u6362\u81f3 ",(0,n.jsx)(y,{children:"\u8bc4\u8bba\u57fa\u7840\u6a21\u5f0f"})]}),!t&&(0,n.jsxs)("div",{id:"dsqjs-msg",children:["\u8bc4\u8bba\u5b8c\u6574\u6a21\u5f0f\u52a0\u8f7d\u4e2d... \u5982\u679c\u957f\u65f6\u95f4\u65e0\u6cd5\u52a0\u8f7d\uff0c\u8bf7\u9488\u5bf9 disq.us | disquscdn.com | disqus.com \u542f\u7528\u4ee3\u7406\uff0c\u6216\u5207\u6362\u81f3 ",(0,n.jsx)(y,{children:"\u8bc4\u8bba\u57fa\u7840\u6a21\u5f0f"})]})]})}));const E=(0,o.memo)((()=>(0,n.jsxs)("div",{id:"dsqjs-msg",children:["\u8bc4\u8bba\u57fa\u7840\u6a21\u5f0f\u52a0\u8f7d\u5931\u8d25\uff0c\u8bf7"," ",(0,n.jsx)(S,{children:"\u91cd\u8f7d"})," ","\u6216"," ",(0,n.jsx)(b,{children:"\u5c1d\u8bd5\u5b8c\u6574 Disqus \u6a21\u5f0f"})]}))),C=(0,o.memo)((()=>(0,n.jsxs)("div",{id:"dsqjs-msg",children:["\u5f53\u524d Thread \u5c1a\u672a\u521b\u5efa\u3002\u662f\u5426\u5207\u6362\u81f3"," ",(0,n.jsx)(v,{children:"\u5b8c\u6574 Disqus \u6a21\u5f0f"}),"\uff1f"]}))),_=(0,o.memo)((e=>(0,n.jsx)("p",{className:"dsqjs-no-comment",children:e.text})));function $(e){const s=e.comment.author.profileUrl,t=u(e.comment.author.avatar.cache);return(0,n.jsxs)("li",{id:`comment-${e.comment.id}`,children:[(0,n.jsxs)("div",{className:"dsqjs-post-item dsqjs-clearfix",children:[(0,n.jsx)("div",{className:"dsqjs-post-avatar",children:s?(0,n.jsx)("a",{href:s,target:"_blank",rel:"noreferrer noopenner nofollow external",children:(0,n.jsx)("img",{alt:e.username,src:t})}):(0,n.jsx)("img",{alt:e.username,src:t})}),(0,n.jsxs)("div",{className:"dsqjs-post-body",children:[(0,n.jsxs)("div",{className:"dsqjs-post-header",children:[s?(0,n.jsx)("span",{className:"dsqjs-post-author",children:(0,n.jsx)("a",{href:s,target:"_blank",rel:"noreferrer noopenner nofollow external",children:e.comment.author.name})}):(0,n.jsx)("span",{className:"dsqjs-post-author",children:e.comment.author.name}),e.admin===e.username&&(0,n.jsx)("span",{className:"dsqjs-admin-badge",children:e.adminLabel})," ",(0,n.jsx)("span",{className:"dsqjs-bullet"})," ",e.comment.createdAt&&(0,n.jsx)("span",{className:"dsqjs-meta",children:(0,n.jsx)("time",{children:f(e.comment.createdAt)})})]}),e.comment.isDeleted?(0,n.jsx)("div",{className:"dsqjs-post-content",children:(0,n.jsx)("small",{children:"\u6b64\u8bc4\u8bba\u5df2\u88ab\u5220\u9664"})}):(0,n.jsx)("div",{className:"dsqjs-post-content",dangerouslySetInnerHTML:{__html:(r=u(e.comment.message),r.replace(/https?:\/\/disq.us\/url\?url=(.+)%3A[\w-]+&amp;cuid=\d+/gm,((e,s)=>decodeURIComponent(s))))}})]})]}),(0,n.jsx)(D,{...e,currentNesting:e.nesting}),e.comment.hasMore&&(0,n.jsxs)("p",{className:"dsqjs-has-more",children:["\u5207\u6362\u81f3 ",(0,n.jsx)(v,{children:"\u5b8c\u6574 Disqus \u6a21\u5f0f"})," \u663e\u793a\u66f4\u591a\u56de\u590d"]})]});var r}function D(e){return e.children&&0!==e.children.length?(0,n.jsx)("ul",{className:"dsqjs-post-list "+((e.currentNesting??1)<(e.nestingSetting??4)?"dsqjs-children":""),children:e.children.map((s=>(0,o.createElement)($,{...s,admin:e.admin,adminLabel:e.adminLabel,key:s.comment.id})))}):null}function I(e,s,t){return{comment:e,username:e.author.username,author:e.author.name,children:P(s,Number(e.id),t+1),nesting:t+1}}function P(e,s,t){if(0===e.length)return null;const n=[];return e.forEach((r=>{r.parent===s&&n.unshift(I(r,e,t))})),n}const M=e=>{const s=(0,o.useMemo)((()=>{const s=e.comments.slice().sort(((e,s)=>e.parent&&s.parent?m(e.createdAt)-m(s.createdAt):0)),t=[],n=[];return s.forEach((e=>{e.parent?n.push(e):t.push(e)})),t.map((e=>I(e,n,0)))}),[e.comments]);return(0,n.jsx)("ul",{className:"dsqjs-post-list",id:"dsqjs-post-container",children:s.map((s=>(0,o.createElement)($,{...s,key:s.comment.id,admin:e.admin,adminLabel:e.adminLabel})))})},T=(0,o.memo)((()=>{const e=g((e=>e.sortType)),s=g((e=>e.setSortType)),t=(0,o.useCallback)((e=>()=>{s(e)}),[s]);return(0,n.jsxs)("div",{className:"dsqjs-order",children:[(0,n.jsx)("input",{className:"dsqjs-order-radio",id:"dsqjs-order-desc",type:"radio",name:"comment-order",value:"desc",onChange:t("desc"),checked:"desc"===e||null===e}),(0,n.jsx)("label",{className:"dsqjs-order-label",htmlFor:"dsqjs-order-desc",title:"\u6309\u4ece\u65b0\u5230\u65e7",children:"\u6700\u65b0"}),(0,n.jsx)("input",{className:"dsqjs-order-radio",id:"dsqjs-order-asc",type:"radio",name:"comment-order",value:"asc",onChange:t("asc"),checked:"asc"===e}),(0,n.jsx)("label",{className:"dsqjs-order-label",htmlFor:"dsqjs-order-asc",title:"\u6309\u4ece\u65e7\u5230\u65b0",children:"\u6700\u65e9"}),(0,n.jsx)("input",{className:"dsqjs-order-radio",id:"dsqjs-order-popular",type:"radio",name:"comment-order",value:"popular",onChange:t("popular"),checked:"popular"===e}),(0,n.jsx)("label",{className:"dsqjs-order-label",htmlFor:"dsqjs-order-popular",title:"\u6309\u8bc4\u5206\u4ece\u9ad8\u5230\u4f4e",children:"\u6700\u4f73"})]})}));const L=(0,o.memo)((e=>(0,n.jsx)("header",{className:"dsqjs-header",id:"dsqjs-header",children:(0,n.jsxs)("nav",{className:"dsqjs-nav dsqjs-clearfix",children:[(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{className:"dsqjs-nav-tab dsqjs-tab-active",children:(0,n.jsxs)("span",{children:[e.totalComments," Comments"]})}),(0,n.jsx)("li",{className:"dsqjs-nav-tab",children:e.siteName})]}),(0,n.jsx)(T,{})]})})));const F=e=>{const s=(0,o.useMemo)((()=>Array.isArray(e.apikey)?e.apikey:[e.apikey]),[e.apikey]),t=g((e=>e.posts)),r=g((e=>e.resetPosts)),a=g((e=>e.morePostsError)),d=g((e=>e.loadingPosts)),i=g((e=>e.fetchMorePosts)),c=(0,o.useRef)(null),l=(0,o.useCallback)((()=>i(e.shortname,e.id,s,e.api)),[s,i,e.api,e.id,e.shortname]);(0,o.useEffect)((()=>{c.current!==e.id&&(r(),c.current=e.id,l())}),[t,l,e.id,r]);const m=(0,o.useCallback)((()=>{l()}),[l]);return t.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(M,{comments:t.filter(Boolean).map((e=>e.response)).flat(),admin:e.admin,adminLabel:e.adminLabel}),t.at(-1)?.cursor.hasNext&&(0,n.jsx)(x,{isLoading:d,isError:a,onClick:d?void 0:m})]}):null},A=e=>{const s=(0,o.useMemo)((()=>Array.isArray(e.apikey)?e.apikey:[e.apikey]),[e.apikey]),t=g((e=>e.thread)),r=g((e=>e.fetchThread)),a=g((e=>e.setMsg)),d=(0,o.useRef)(null),i=e.identifier??document.location.origin+document.location.pathname+document.location.search;return(0,o.useEffect)((()=>{d.current!==i?(a((0,n.jsxs)(n.Fragment,{children:["\u8bc4\u8bba\u57fa\u7840\u6a21\u5f0f\u52a0\u8f7d\u4e2d... \u5982\u9700\u5b8c\u6574\u4f53\u9a8c\u8bf7\u9488\u5bf9 disq.us | disquscdn.com | disqus.com \u542f\u7528\u4ee3\u7406\u5e76 ",(0,n.jsx)(b,{children:"\u5c1d\u8bd5\u5b8c\u6574 Disqus \u6a21\u5f0f"})," | ",(0,n.jsx)(v,{children:"\u5f3a\u5236\u5b8c\u6574 Disqus \u6a21\u5f0f"})]})),d.current=i,r(e.shortname,i,s,e.api)):a((0,n.jsxs)(n.Fragment,{children:["\u4f60\u53ef\u80fd\u65e0\u6cd5\u8bbf\u95ee Disqus\uff0c\u5df2\u542f\u7528\u8bc4\u8bba\u57fa\u7840\u6a21\u5f0f\u3002\u5982\u9700\u5b8c\u6574\u4f53\u9a8c\u8bf7\u9488\u5bf9 disq.us | disquscdn.com | disqus.com \u542f\u7528\u4ee3\u7406\u5e76 ",(0,n.jsx)(b,{children:"\u5c1d\u8bd5\u5b8c\u6574 Disqus \u6a21\u5f0f"})," | ",(0,n.jsx)(v,{children:"\u5f3a\u5236\u5b8c\u6574 Disqus \u6a21\u5f0f"})]}))}),[t,r,i,a,e.shortname,e.api,s]),t?1===t.response.length?0===t.response[0].posts?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{totalComments:0,siteName:e.siteName??""}),(0,n.jsx)(_,{text:e.nocomment??"\u8fd9\u91cc\u7a7a\u8361\u8361\u7684\uff0c\u4e00\u4e2a\u4eba\u90fd\u6ca1\u6709"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L,{totalComments:t.response[0].posts,siteName:e.siteName??""}),(0,n.jsx)(F,{...e,id:t.response[0].id})]}):(0,n.jsx)(C,{}):null},U=(0,o.memo)((()=>(0,n.jsx)("footer",{children:(0,n.jsxs)("p",{className:"dsqjs-footer",children:["Powered by"," ",(0,n.jsx)("a",{className:"dsqjs-disqus-logo",href:"https://disqus.com",target:"_blank",rel:"external nofollow noopener noreferrer"})," ","&"," ",(0,n.jsx)("a",{href:"https://disqusjs.skk.moe",target:"_blank",rel:"noreferrer",children:"DisqusJS"})]})})));var R="__dsqjs_vqkml8";const O=e=>{const s=g((e=>e.mode)),t=g((e=>e.checkMode));return(0,o.useEffect)((()=>{"disqus"!==s&&"dsqjs"!==s&&t(e.shortname)}),[t,s,e.shortname]),"disqus"===s?(0,n.jsx)(k,{shortname:e.shortname,identifier:e.identifier,url:e.url,title:e.title}):"dsqjs"===s?(0,n.jsx)(A,{...e}):null},V=(0,o.forwardRef)(((e,s)=>{const t=g((e=>e.msg)),r=g((e=>e.error)),{shortname:a,siteName:d,identifier:i,url:c,title:l,api:m,apikey:u,nesting:h,nocomment:j,admin:f,adminLabel:p,className:q,...x}=e,v={shortname:a,siteName:d,identifier:i,url:c,title:l,api:m,apikey:u,nesting:h,nocomment:j,admin:f,adminLabel:p},[b,y]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{y(!0)}),[]),b?(0,n.jsx)("div",{ref:s,...x,className:`${R} ${q??""}`,children:(0,n.jsxs)("section",{id:"dsqjs",children:[r?(0,n.jsx)(E,{}):(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)("div",{id:"dsqjs-msg",children:t}),(0,n.jsx)(O,{...v})]}),(0,n.jsx)(U,{})]})}):null}))},3697:function(e,s,t){var n=t(7667);var r="function"===typeof Object.is?Object.is:function(e,s){return e===s&&(0!==e||1/e===1/s)||e!==e&&s!==s},o=n.useState,a=n.useEffect,d=n.useLayoutEffect,i=n.useDebugValue;function c(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!r(e,t)}catch(n){return!0}}var l="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,s){return s()}:function(e,s){var t=s(),n=o({inst:{value:t,getSnapshot:s}}),r=n[0].inst,l=n[1];return d((function(){r.value=t,r.getSnapshot=s,c(r)&&l({inst:r})}),[e,t,s]),a((function(){return c(r)&&l({inst:r}),e((function(){c(r)&&l({inst:r})}))}),[e]),i(t),t};s.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},2075:function(e,s,t){var n=t(7667),r=t(4262);var o="function"===typeof Object.is?Object.is:function(e,s){return e===s&&(0!==e||1/e===1/s)||e!==e&&s!==s},a=r.useSyncExternalStore,d=n.useRef,i=n.useEffect,c=n.useMemo,l=n.useDebugValue;s.useSyncExternalStoreWithSelector=function(e,s,t,n,r){var m=d(null);if(null===m.current){var u={hasValue:!1,value:null};m.current=u}else u=m.current;m=c((function(){function e(e){if(!i){if(i=!0,a=e,e=n(e),void 0!==r&&u.hasValue){var s=u.value;if(r(s,e))return d=s}return d=e}if(s=d,o(a,e))return s;var t=n(e);return void 0!==r&&r(s,t)?s:(a=e,d=t)}var a,d,i=!1,c=void 0===t?null:t;return[function(){return e(s())},null===c?void 0:function(){return e(c())}]}),[s,t,n,r]);var h=a(e,m[0],m[1]);return i((function(){u.hasValue=!0,u.value=h}),[h]),l(h),h}},4262:function(e,s,t){e.exports=t(3697)},5308:function(e,s,t){e.exports=t(2075)}}]);