if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),f={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>f[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-290aa63d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/100.7ae210384b8fcf43.js",revision:"7ae210384b8fcf43"},{url:"/_next/static/chunks/56.8ae35ebc3ee4df41.js",revision:"8ae35ebc3ee4df41"},{url:"/_next/static/chunks/658-363041cef6305ea7.js",revision:"363041cef6305ea7"},{url:"/_next/static/chunks/780-58b786ca14bf88bb.js",revision:"58b786ca14bf88bb"},{url:"/_next/static/chunks/799.c27cd4d446f78706.js",revision:"c27cd4d446f78706"},{url:"/_next/static/chunks/924-d26ec1a8c07319c6.js",revision:"d26ec1a8c07319c6"},{url:"/_next/static/chunks/983-1a6d0f1b583b04b0.js",revision:"1a6d0f1b583b04b0"},{url:"/_next/static/chunks/framework-5f3ba888e079d94a.js",revision:"5f3ba888e079d94a"},{url:"/_next/static/chunks/main-26cfa02f06b2b9ee.js",revision:"26cfa02f06b2b9ee"},{url:"/_next/static/chunks/pages/%5Bslug%5D-9a46223033c9c1bb.js",revision:"9a46223033c9c1bb"},{url:"/_next/static/chunks/pages/404-e05f928a34725943.js",revision:"e05f928a34725943"},{url:"/_next/static/chunks/pages/_app-0b34d4291c22c24b.js",revision:"0b34d4291c22c24b"},{url:"/_next/static/chunks/pages/_error-bf4a2be04b94c3d1.js",revision:"bf4a2be04b94c3d1"},{url:"/_next/static/chunks/pages/archives-fc499885fb821d56.js",revision:"fc499885fb821d56"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-9586b058a45d556c.js",revision:"9586b058a45d556c"},{url:"/_next/static/chunks/pages/categories-f327a999ce6a58eb.js",revision:"f327a999ce6a58eb"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-f6184ac7f12eb05a.js",revision:"f6184ac7f12eb05a"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-f18c2987667c0155.js",revision:"f18c2987667c0155"},{url:"/_next/static/chunks/pages/friends-749e60ff8e191466.js",revision:"749e60ff8e191466"},{url:"/_next/static/chunks/pages/index-d85bf6abec1dabf4.js",revision:"d85bf6abec1dabf4"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-f127dbf6857f63ce.js",revision:"f127dbf6857f63ce"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-38fa3fe4ef292c64.js",revision:"38fa3fe4ef292c64"},{url:"/_next/static/chunks/pages/search-f6cbca35f2ebfbba.js",revision:"f6cbca35f2ebfbba"},{url:"/_next/static/chunks/pages/tags-05ebdeaf3890f6d2.js",revision:"05ebdeaf3890f6d2"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D-ba65d620ffcd5303.js",revision:"ba65d620ffcd5303"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D/page/%5Bpage%5D-4c5a967529e84ef7.js",revision:"4c5a967529e84ef7"},{url:"/_next/static/chunks/webpack-378e9f2b8ea96b47.js",revision:"378e9f2b8ea96b47"},{url:"/_next/static/css/79bb603d4a7bc956.css",revision:"79bb603d4a7bc956"},{url:"/_next/static/css/9f03af6dfd3705b3.css",revision:"9f03af6dfd3705b3"},{url:"/_next/static/css/fd717fa29c1378a7.css",revision:"fd717fa29c1378a7"},{url:"/_next/static/wFkI4Fzhvx9n30RmPkJ5k/_buildManifest.js",revision:"9e897e0ccc6be8e4b6e02965b7ce24d7"},{url:"/_next/static/wFkI4Fzhvx9n30RmPkJ5k/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/wFkI4Fzhvx9n30RmPkJ5k/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute((({url:e})=>["stat.xtom.com","stat.u.sb"].includes(e.origin)),new e.NetworkOnly({plugins:[new e.BackgroundSyncPlugin("Optical_Collect",{maxRetentionTime:1440})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
