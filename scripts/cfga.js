/* Baoshuo's Blog | Build: ebdf39b | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(e,n,a){function o(t){return isNaN(t)||t==1/0||t<0?void 0:t}function r(t){return Math.random().toString(36).slice(-t)}function i(t){return Math.ceil(Math.random()*(t-1))+1}function c(t){return u.getEntriesByName(t)}function s(t){!function(t,e,n,a){t.GoogleAnalyticsObject=a,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=+new Date;a=e.createElement(n);first_element=e.getElementsByTagName(n)[0],a.async=!0,a.src="https://www.google-analytics.com/analytics.js",first_element.parentNode.insertBefore(a,first_element)}(e,n,"script","ga"),ga("create",t,"auto"),ga("send","pageview")}var t,d=e.screen,g=encodeURIComponent,l=Math.max,u=e.performance,m="getEntriesByType"in u&&"getEntriesByName"in u,p=m?(t="navigation",u.getEntriesByType(t)[0]):u.timing,f=m?p.startTime:p.navigationStart;function h(){var t=[r(i(4))+"="+r(i(6)),"ga="+e.ga_tid,"dt="+g(n.title),"de="+g(n.characterSet||n.charset),"dr="+g(n.referrer),"ul="+(a.language||a.browserLanguage||a.userLanguage),"sd="+d.colorDepth+"-bit","sr="+d.width+"x"+d.height,"vp="+l(n.documentElement.clientWidth,e.innerWidth||0)+"x"+l(n.documentElement.clientHeight,e.innerHeight||0),"plt="+o(p.loadEventStart-f||0),"dns="+o(p.domainLookupEnd-p.domainLookupStart||0),"pdt="+o(p.responseEnd-p.responseStart||0),"rrt="+o(p.redirectEnd-p.redirectStart||0),"tcp="+o(p.connectEnd-p.connectStart||0),"srt="+o(p.responseStart-p.requestStart||0),"dit="+o(p.domInteractive-p.domLoading||0),"clt="+o(p.domContentLoadedEventStart-f||0),"z="+Date.now()];m&&(t.push("fp="+o(c("first-paint")[0].startTime||0)),t.push("fcp="+o(c("first-contentful-paint")[0].startTime||0))),/(?:localhost|127\.0\.0\.1)/.test(location.hostname)?console.log("Disabled Google Analytics because in preview mode"):fetch(e.ga_api+"?"+t.join("&"),{mode:"no-cors",credentials:"include"}).catch(function(t){s(e.ga_tid),console.error("Failed to Connect Baoshuo's Google Analytics API:\n",t)})}e.cfga=h,"complete"===n.readyState?h():e.addEventListener("load",h)}(window,document,navigator);