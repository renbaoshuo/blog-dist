if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),d={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-72315087"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/561.d94ad0d0f72b5d30.js",revision:"d94ad0d0f72b5d30"},{url:"/_next/static/chunks/658-363041cef6305ea7.js",revision:"363041cef6305ea7"},{url:"/_next/static/chunks/780-fbd130ac8591e57d.js",revision:"fbd130ac8591e57d"},{url:"/_next/static/chunks/799.036f59a3b92ca994.js",revision:"036f59a3b92ca994"},{url:"/_next/static/chunks/870-7d7595af0b4d00ad.js",revision:"7d7595af0b4d00ad"},{url:"/_next/static/chunks/9-8de179a45cb633b6.js",revision:"8de179a45cb633b6"},{url:"/_next/static/chunks/979.dd99a5f5d0a9c0dd.js",revision:"dd99a5f5d0a9c0dd"},{url:"/_next/static/chunks/framework-57553dbed526be87.js",revision:"57553dbed526be87"},{url:"/_next/static/chunks/main-5aa01873689c7988.js",revision:"5aa01873689c7988"},{url:"/_next/static/chunks/pages/%5Bslug%5D-d3264a007c480750.js",revision:"d3264a007c480750"},{url:"/_next/static/chunks/pages/404-2af4ddc21304c153.js",revision:"2af4ddc21304c153"},{url:"/_next/static/chunks/pages/_app-3c0b8d766561bee4.js",revision:"3c0b8d766561bee4"},{url:"/_next/static/chunks/pages/_error-6e322d1c6d27a219.js",revision:"6e322d1c6d27a219"},{url:"/_next/static/chunks/pages/archives-d6f84b57048f3ab3.js",revision:"d6f84b57048f3ab3"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-84465a44a97e0ba2.js",revision:"84465a44a97e0ba2"},{url:"/_next/static/chunks/pages/categories-e02bf8d5117ba2c2.js",revision:"e02bf8d5117ba2c2"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-512d89a2e685c169.js",revision:"512d89a2e685c169"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-558ab018ddfe1b5a.js",revision:"558ab018ddfe1b5a"},{url:"/_next/static/chunks/pages/friends-d6201958f58266ec.js",revision:"d6201958f58266ec"},{url:"/_next/static/chunks/pages/index-ce224e7650f1b068.js",revision:"ce224e7650f1b068"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-eac3171adc1e98ac.js",revision:"eac3171adc1e98ac"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-f7e19863c2417a54.js",revision:"f7e19863c2417a54"},{url:"/_next/static/chunks/pages/search-d09776be99471cba.js",revision:"d09776be99471cba"},{url:"/_next/static/chunks/pages/tags-5fe91f0b8b8c762c.js",revision:"5fe91f0b8b8c762c"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D-0337524809576dc5.js",revision:"0337524809576dc5"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D/page/%5Bpage%5D-ee6e8ae7c6d21711.js",revision:"ee6e8ae7c6d21711"},{url:"/_next/static/chunks/webpack-a32812db4b877032.js",revision:"a32812db4b877032"},{url:"/_next/static/css/2d2bc4b196d5c9da.css",revision:"2d2bc4b196d5c9da"},{url:"/_next/static/css/79bb603d4a7bc956.css",revision:"79bb603d4a7bc956"},{url:"/_next/static/mgn__ODO-ITofpBmu_jxu/_buildManifest.js",revision:"5c9a4045cf212d47669096e7f27c97b0"},{url:"/_next/static/mgn__ODO-ITofpBmu_jxu/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/mgn__ODO-ITofpBmu_jxu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
