if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,t)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let c={};const r=s=>n(s,a),x={module:{uri:a},exports:c,require:r};e[a]=Promise.all(i.map((s=>x[s]||r(s)))).then((s=>(t(...s),c)))}}define(["./workbox-0a24f3d1"],(function(s){"use strict";importScripts(),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/_next/static/chunks/561.d94ad0d0f72b5d30.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/675.71e8f166fc7dc913.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/770-4ba632fb11607135.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/870-eaf118363958a2e1.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/9-8de179a45cb633b6.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/924-326ce044309a12fa.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/988.5d42b4f9b03d1088.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/framework-cdfd70a39b284f91.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/main-bb26a3a6c9892797.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/%5Bslug%5D-ed02cf585fdba4b0.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/404-33128ce5d3a022d4.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/_app-02c529064012d31a.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/_error-893bb23b91011950.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/archives-d9bc3852769ec5a6.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-5fdd720fd36b5de4.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/categories-309f2e080f688570.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-11ec5302d171faf9.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-7eba8a71e5a2547a.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/friends-12fad3ffa68f0d96.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/index-f642bd38292c1bad.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-536a1a07f613601e.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-593c83eb2eab1cfb.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/search-43b24dae8b87fdbe.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/tags-3d85f15a3c7ea250.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D-aa119d197e3f6d50.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D/page/%5Bpage%5D-c4fc5825fcd0987a.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/chunks/webpack-6856905d17f3b658.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/css/2e2e72cf8cab7d7f.css",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/css/3e906d29f48066cf.css",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/xinRvysENnzYxU1dD0DIT/_buildManifest.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/xinRvysENnzYxU1dD0DIT/_middlewareManifest.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/_next/static/xinRvysENnzYxU1dD0DIT/_ssgManifest.js",revision:"xinRvysENnzYxU1dD0DIT"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),s.cleanupOutdatedCaches(),s.registerRoute("/",new s.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:s,response:e,event:n,state:i})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),s.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new s.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new s.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),s.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new s.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/image\?url=.+$/i,new s.StaleWhileRevalidate({cacheName:"next-image",plugins:[new s.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:js)$/i,new s.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:css|less)$/i,new s.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new s.StaleWhileRevalidate({cacheName:"next-data",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute(/\.(?:json|xml|csv)$/i,new s.NetworkFirst({cacheName:"static-data-assets",plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!!s.origin.endsWith("loli.net")||(!!s.origin.endsWith("loli.io")||("s1.baoshuo.ren"===s.origin||"s1.u.sb"===s.origin))),new s.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new s.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),s.registerRoute((({url:s})=>{if(!(self.origin===s.origin))return!1;return!s.pathname.startsWith("/api/")}),new s.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),s.registerRoute((({url:s})=>!(self.origin===s.origin)),new s.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new s.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
