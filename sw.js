if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const c=e=>i(e,a),u={module:{uri:a},exports:r,require:c};s[a]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(t(...e),r)))}}define(["./workbox-100656aa"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/GfQvWuOkHirZ9bZpv0qbp/_buildManifest.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/GfQvWuOkHirZ9bZpv0qbp/_middlewareManifest.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/GfQvWuOkHirZ9bZpv0qbp/_ssgManifest.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/561.d94ad0d0f72b5d30.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/675.71e8f166fc7dc913.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/770-a64ccc4a675e4e1d.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/870-eaf118363958a2e1.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/9-8de179a45cb633b6.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/924-01182f1756b156aa.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/988.5d42b4f9b03d1088.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/framework-cdfd70a39b284f91.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/main-c6a3faad912db878.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/%5Bslug%5D-c836d2e57ed7fa92.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/404-33128ce5d3a022d4.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/_app-15e3b8b1734e6f39.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/_error-893bb23b91011950.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/archives-d9bc3852769ec5a6.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-5fdd720fd36b5de4.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/categories-31f53612a8535a44.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-11ec5302d171faf9.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-7eba8a71e5a2547a.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/friends-12fad3ffa68f0d96.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/index-f642bd38292c1bad.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-536a1a07f613601e.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-c5a3b4ab734aeb38.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/search-0c3b163c5a83e94c.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/tags-d02004f023dfcec2.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D-aa119d197e3f6d50.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D/page/%5Bpage%5D-c4fc5825fcd0987a.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/chunks/webpack-11a4903acae422ce.js",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/css/2d2bc4b196d5c9da.css",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/_next/static/css/2e2e72cf8cab7d7f.css",revision:"GfQvWuOkHirZ9bZpv0qbp"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
