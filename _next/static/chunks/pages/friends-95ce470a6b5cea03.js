(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{5730:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/friends",function(){return n(6865)}])},3328:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](o):o instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var o,l;var s=r=a({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};o(n(7294));var i=o(n(4302));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},4302:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},l=n(7161),s=n(6319);var c=[],f=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var y=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,a;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),a&&r(t,a),e}();function h(e){return function(e,t){var n=function(){if(!a){var t=new y(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var a=null;if(!d&&!r.suspense){var o=r.webpack?r.webpack():r.modules;o&&f.push((function(e){var t=!0,r=!1,a=void 0;try{for(var i,u=o[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,a=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=u.default.useContext(s.LoadableContext),o=l.useSubscription(a);return u.default.useImperativeHandle(t,(function(){return{retry:a.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return o.loading||o.error?u.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:a.retry}):o.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(p,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var b=h;t.default=b},5491:function(e,t,n){"use strict";n.d(t,{$f:function(){return l},HU:function(){return s},My:function(){return c}});var r=n(3726),a=n.n(r);function i(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"};if("string"!==typeof e){if(null==e)return"";if(!e)return e+"";e=""+e}return/[&<>"'`=]/.test(e)?e.replace(/[&<>"'`=]/g,(function(e){return t[e]})):e}function o(){return{"@type":"Organization",name:i(a().title),url:a().baseUrl||null,logo:{"@type":"ImageObject",url:a().image}}}function u(e){var t={};return Object.keys(e).forEach((function(n){null!==e[n]&&"undefined"!==typeof e[n]&&(t[n]=e[n])})),t}function l(e){var t=e.excerpt?i(e.excerpt):null,n={"@context":"https://schema.org","@type":"Article",publisher:o(),author:{"@type":"Person",name:i(a().author.name),url:a().author.link,description:a().author.description?i(a().author.description):null},headline:i(e.title),url:e.url||new URL(e.path,a().baseUrl).toString()||null,datePublished:e.date||null,image:{"@type":"ImageObject",url:e.thumb||a().image},keywords:e.tags&&e.tags.length>0?e.tags.join(", "):null,description:t,mainEntityOfPage:{"@type":"WebPage","@id":a().baseUrl||null}};return n.author=u(n.author),JSON.stringify(u(n))}function s(e){var t={"@context":"https://schema.org","@type":"WebSite",publisher:o(),url:e.url||new URL(e.path,a().baseUrl).toString()||null,image:{"@type":"ImageObject",url:a().image},mainEntityOfPage:{"@type":"WebPage","@id":a().baseUrl||null},description:a().description?i(a().description):null};return JSON.stringify(u(t))}function c(e){var t={"@context":"https://schema.org","@type":"Series",publisher:o(),url:e.url||new URL(e.path,a().baseUrl).toString()||null,image:{"@type":"ImageObject",url:a().image},name:e.tag,mainEntityOfPage:{"@type":"WebPage","@id":a().baseUrl||null},description:a().description?i(a().description):null};return JSON.stringify(u(t))}},6865:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return d}});var r=n(5893),a=(n(7294),n(4275)),i=n(9008),o=n(5152),u=n(5491);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,u=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(l){u=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=(0,o.default)((function(){return n.e(218).then(n.bind(n,8218))}),{loadableGenerated:{webpack:function(){return[8218]}},ssr:!1,loading:function(){var e=s((0,a.hQ)(),1)[0];return(0,r.jsx)("div",{className:e({position:"absolute",top:"200px",bottom:0,left:0,right:0,textAlign:"center",userSelect:"none",opacity:0,zIndex:-1,animationDuration:"2.5s",animationIterationCount:"infinite",animationName:{"0%":{opacity:0},"50%":{opacity:.8},to:{opacity:0}}}),children:"\u52a0\u8f7d\u4e2d..."})}}),f=!0;function d(e){var t=e.title,n=e.url;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,r.jsx)("meta",{property:"og:url",content:n},"og:url"),(0,r.jsx)("link",{rel:"canonical",href:n},"canonical")]}),(0,r.jsx)(c,{}),(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:(0,u.HU)({url:n})}})]})}},5152:function(e,t,n){e.exports=n(3328)}},function(e){e.O(0,[774,888,179],(function(){return t=5730,e(e.s=t);var t}));var t=e.O();_N_E=t}]);