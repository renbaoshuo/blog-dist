if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-0a24f3d1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FYpgUDZzIfZQRx83h-6IG/_buildManifest.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/FYpgUDZzIfZQRx83h-6IG/_middlewareManifest.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/FYpgUDZzIfZQRx83h-6IG/_ssgManifest.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/218.9d71cf2db6227308.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/42.2ec97e199df57183.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/635-c631964d4b8662f0.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/65-30a4cbf0d21ba606.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/75fc9c18-4d2f0a9f494a9dad.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/890-8f1d2ac0121f9f17.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/framework-8957c350a55da097.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/main-8366d820392b3493.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/%5Bslug%5D-77f39dd1e071e3d7.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/_app-d8aa5572a8d54291.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/archives-e59ddec960a80fa1.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-b25be37805c181cf.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/categories-6872b72258881b24.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-12d4dce716905533.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-2f20c608b4d286c8.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/friends-95ce470a6b5cea03.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/index-83425b5a19777c52.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-5d10b6c370d88294.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-c9a52cbc1356fb84.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/search-7b68645b69027731.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/tags-2b55657df37b8ec3.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D-ecc1101d4edbd122.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D/page/%5Bpage%5D-afb2dd967c619d5f.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/chunks/webpack-50ebddde0dae8a5e.js",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/css/0263f46fd44190e6.css",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/_next/static/css/97ec87c639763c32.css",revision:"FYpgUDZzIfZQRx83h-6IG"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
