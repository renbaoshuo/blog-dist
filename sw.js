if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>t(e,a),u={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>u[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-0a24f3d1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/QuhpC5b6TitFfDObwEZTQ/_buildManifest.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/QuhpC5b6TitFfDObwEZTQ/_middlewareManifest.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/QuhpC5b6TitFfDObwEZTQ/_ssgManifest.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/218.fa1a0226518fbcc4.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/42.4dff9e6c4eee27c5.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/435-7cfc55f74eb46745.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/635-9a059f7f1fe2efe6.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/75fc9c18-c2ffd8d428a8879e.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/890-2695d301d49d7853.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/main-cceb3a9629a4224e.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/%5Bslug%5D-243d33f6e7a8c040.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/404-cca0ef3232f284dd.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/_app-cfd97ead2ab7dcdf.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/archives-e59ddec960a80fa1.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-b25be37805c181cf.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/categories-6872b72258881b24.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-12d4dce716905533.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-2f20c608b4d286c8.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/friends-25908cd5c1393567.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/index-83425b5a19777c52.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-5d10b6c370d88294.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-021233b76319ee9d.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/search-6302ab358d77ca0b.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/tags-754ec29a3c848167.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D-ecc1101d4edbd122.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D/page/%5Bpage%5D-afb2dd967c619d5f.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/chunks/webpack-c520b9772cab5279.js",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/css/0263f46fd44190e6.css",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/_next/static/css/2e2e72cf8cab7d7f.css",revision:"QuhpC5b6TitFfDObwEZTQ"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
