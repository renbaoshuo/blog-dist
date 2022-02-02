"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904],{2557:function(e,t){var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},n=function(e){return"IMG"===e.tagName},i=function(e){return e&&1===e.nodeType},r=function(e){return".svg"===(e.currentSrc||e.src).substr(-4).toLowerCase()},d=function(e){try{return Array.isArray(e)?e.filter(n):function(e){return NodeList.prototype.isPrototypeOf(e)}(e)?[].slice.call(e).filter(n):i(e)?[e].filter(n):"string"===typeof e?[].slice.call(document.querySelectorAll(e)).filter(n):[]}catch(t){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},a=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.background=e,t},s=function(e){var t=e.getBoundingClientRect(),o=t.top,n=t.left,i=t.width,r=t.height,d=e.cloneNode(),a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return d.removeAttribute("id"),d.style.position="absolute",d.style.top=o+a+"px",d.style.left=n+s+"px",d.style.width=i+"px",d.style.height=r+"px",d.style.transform="",d},l=function(e,t){var n=o({bubbles:!1,cancelable:!1,detail:void 0},t);if("function"===typeof window.CustomEvent)return new CustomEvent(e,n);var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),i};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!==typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),t.Z=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=window.Promise||function(e){function t(){}e(t,t)},m=function(e){var t=e.target;t!==I?-1!==L.indexOf(t)&&E({target:t}):w()},u=function(){if(!V&&A.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(N-e)>x.scrollOffset&&setTimeout(w,150)}},p=function(e){var t=e.key||e.keyCode;"Escape"!==t&&"Esc"!==t&&27!==t||w()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e;if(e.background&&(I.style.background=e.background),e.container&&e.container instanceof Object&&(t.container=o({},x.container,e.container)),e.template){var n=i(e.template)?e.template:document.querySelector(e.template);t.template=n}return x=o({},x,t),L.forEach((function(e){e.dispatchEvent(l("medium-zoom:update",{detail:{zoom:S}}))})),S},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(o({},x,t))},v=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var n=t.reduce((function(e,t){return[].concat(e,d(t))}),[]);return n.filter((function(e){return-1===L.indexOf(e)})).forEach((function(e){L.push(e),e.classList.add("medium-zoom-image")})),H.forEach((function(e){var t=e.type,o=e.listener,i=e.options;n.forEach((function(e){e.addEventListener(t,o,i)}))})),S},g=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];A.zoomed&&w();var n=t.length>0?t.reduce((function(e,t){return[].concat(e,d(t))}),[]):L;return n.forEach((function(e){e.classList.remove("medium-zoom-image"),e.dispatchEvent(l("medium-zoom:detach",{detail:{zoom:S}}))})),L=L.filter((function(e){return-1===n.indexOf(e)})),S},y=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return L.forEach((function(n){n.addEventListener("medium-zoom:"+e,t,o)})),H.push({type:"medium-zoom:"+e,listener:t,options:o}),S},b=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return L.forEach((function(n){n.removeEventListener("medium-zoom:"+e,t,o)})),H=H.filter((function(o){return!(o.type==="medium-zoom:"+e&&o.listener.toString()===t.toString())})),S},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target,n=function(){var e={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},t=void 0,n=void 0;if(x.container)if(x.container instanceof Object)t=(e=o({},e,x.container)).width-e.left-e.right-2*x.margin,n=e.height-e.top-e.bottom-2*x.margin;else{var d=(i(x.container)?x.container:document.querySelector(x.container)).getBoundingClientRect(),a=d.width,s=d.height,l=d.left,c=d.top;e=o({},e,{width:a,height:s,left:l,top:c})}t=t||e.width-2*x.margin,n=n||e.height-2*x.margin;var m=A.zoomedHd||A.original,u=r(m)?t:m.naturalWidth||t,p=r(m)?n:m.naturalHeight||n,f=m.getBoundingClientRect(),h=f.top,v=f.left,g=f.width,y=f.height,b=Math.min(u,t)/g,z=Math.min(p,n)/y,w=Math.min(b,z),E="scale("+w+") translate3d("+((t-g)/2-v+x.margin+e.left)/w+"px, "+((n-y)/2-h+x.margin+e.top)/w+"px, 0)";A.zoomed.style.transform=E,A.zoomedHd&&(A.zoomedHd.style.transform=E)};return new c((function(e){if(t&&-1===L.indexOf(t))e(S);else{if(A.zoomed)e(S);else{if(t)A.original=t;else{if(!(L.length>0))return void e(S);var o=L;A.original=o[0]}if(A.original.dispatchEvent(l("medium-zoom:open",{detail:{zoom:S}})),N=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,V=!0,A.zoomed=s(A.original),document.body.appendChild(I),x.template){var r=i(x.template)?x.template:document.querySelector(x.template);A.template=document.createElement("div"),A.template.appendChild(r.content.cloneNode(!0)),document.body.appendChild(A.template)}if(document.body.appendChild(A.zoomed),window.requestAnimationFrame((function(){document.body.classList.add("medium-zoom--opened")})),A.original.classList.add("medium-zoom-image--hidden"),A.zoomed.classList.add("medium-zoom-image--opened"),A.zoomed.addEventListener("click",w),A.zoomed.addEventListener("transitionend",(function t(){V=!1,A.zoomed.removeEventListener("transitionend",t),A.original.dispatchEvent(l("medium-zoom:opened",{detail:{zoom:S}})),e(S)})),A.original.getAttribute("data-zoom-src")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("srcset"),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.src=A.zoomed.getAttribute("data-zoom-src"),A.zoomedHd.onerror=function(){clearInterval(d),console.warn("Unable to reach the zoom image target "+A.zoomedHd.src),A.zoomedHd=null,n()};var d=setInterval((function(){A.zoomedHd.complete&&(clearInterval(d),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",w),document.body.appendChild(A.zoomedHd),n())}),10)}else if(A.original.hasAttribute("srcset")){A.zoomedHd=A.zoomed.cloneNode(),A.zoomedHd.removeAttribute("sizes"),A.zoomedHd.removeAttribute("loading");var a=A.zoomedHd.addEventListener("load",(function(){A.zoomedHd.removeEventListener("load",a),A.zoomedHd.classList.add("medium-zoom-image--opened"),A.zoomedHd.addEventListener("click",w),document.body.appendChild(A.zoomedHd),n()}))}else n()}}}))},w=function(){return new c((function(e){if(!V&&A.original){V=!0,document.body.classList.remove("medium-zoom--opened"),A.zoomed.style.transform="",A.zoomedHd&&(A.zoomedHd.style.transform=""),A.template&&(A.template.style.transition="opacity 150ms",A.template.style.opacity=0),A.original.dispatchEvent(l("medium-zoom:close",{detail:{zoom:S}})),A.zoomed.addEventListener("transitionend",(function t(){A.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(A.zoomed),A.zoomedHd&&document.body.removeChild(A.zoomedHd),document.body.removeChild(I),A.zoomed.classList.remove("medium-zoom-image--opened"),A.template&&document.body.removeChild(A.template),V=!1,A.zoomed.removeEventListener("transitionend",t),A.original.dispatchEvent(l("medium-zoom:closed",{detail:{zoom:S}})),A.original=null,A.zoomed=null,A.zoomedHd=null,A.template=null,e(S)}))}else e(S)}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.target;return A.original?w():z({target:t})},C=function(){return x},O=function(){return L},k=function(){return A.original},L=[],H=[],V=!1,N=0,x=n,A={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?x=t:(t||"string"===typeof t)&&v(t),x=o({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},x);var I=a(x.background);document.addEventListener("click",m),document.addEventListener("keyup",p),document.addEventListener("scroll",u),window.addEventListener("resize",w);var S={open:z,close:w,toggle:E,update:f,clone:h,attach:v,detach:g,on:y,off:b,getOptions:C,getImages:O,getZoomedImage:k};return S}},131:function(e,t,o){o.d(t,{df:function(){return f}});var n=o(7294);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=new Map,a=new WeakMap,s=0,l=void 0;function c(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(o=e.root)?(a.has(o)||(s+=1,a.set(o,s.toString())),a.get(o)):"0":e[t]);var o})).toString()}function m(e,t,o,n){if(void 0===o&&(o={}),void 0===n&&(n=l),"undefined"===typeof window.IntersectionObserver&&void 0!==n){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof o.threshold?o.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var r=function(e){var t=c(e),o=d.get(t);if(!o){var n,i=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var o,r=t.isIntersecting&&n.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=r),null==(o=i.get(t.target))||o.forEach((function(e){e(r,t)}))}))}),e);n=r.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),o={id:t,observer:r,elements:i},d.set(t,o)}return o}(o),a=r.id,s=r.observer,m=r.elements,u=m.get(e)||[];return m.has(e)||m.set(e,u),u.push(t),s.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(m.delete(e),s.unobserve(e)),0===m.size&&(s.disconnect(),d.delete(a))}}var u=["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function p(e){return"function"!==typeof e.children}var f=function(e){var t,o;function d(t){var o;return(o=e.call(this,t)||this).node=null,o._unobserveCb=null,o.handleNode=function(e){o.node&&(o.unobserve(),e||o.props.triggerOnce||o.props.skip||o.setState({inView:!!o.props.initialInView,entry:void 0})),o.node=e||null,o.observeNode()},o.handleChange=function(e,t){e&&o.props.triggerOnce&&o.unobserve(),p(o.props)||o.setState({inView:e,entry:t}),o.props.onChange&&o.props.onChange(e,t)},o.state={inView:!!t.initialInView,entry:void 0},o}o=e,(t=d).prototype=Object.create(o.prototype),t.prototype.constructor=t,r(t,o);var a=d.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,o=e.root,n=e.rootMargin,i=e.trackVisibility,r=e.delay,d=e.fallbackInView;this._unobserveCb=m(this.node,this.handleChange,{threshold:t,root:o,rootMargin:n,trackVisibility:i,delay:r},d)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,o=e.entry;return this.props.children({inView:t,entry:o,ref:this.handleNode})}var r=this.props,d=r.children,a=r.as,s=r.tag,l=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(r,u);return n.createElement(a||s||"div",i({ref:this.handleNode},l),d)},d}(n.Component);f.displayName="InView",f.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}}}]);