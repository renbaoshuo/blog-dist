if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let i={};const r=e=>c(e,a),l={module:{uri:a},exports:i,require:r};s[a]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-0a24f3d1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bQltZBHckcHIdZQUPgynm/_buildManifest.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/bQltZBHckcHIdZQUPgynm/_middlewareManifest.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/bQltZBHckcHIdZQUPgynm/_ssgManifest.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/561.d94ad0d0f72b5d30.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/675.71e8f166fc7dc913.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/770-4ba632fb11607135.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/870-eaf118363958a2e1.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/9-8de179a45cb633b6.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/924-326ce044309a12fa.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/988.f018fdafe42d9995.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/framework-cdfd70a39b284f91.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/main-bb26a3a6c9892797.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/%5Bslug%5D-ed02cf585fdba4b0.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/404-33128ce5d3a022d4.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/_app-02c529064012d31a.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/_error-893bb23b91011950.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/archives-d9bc3852769ec5a6.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/archives/page/%5Bpage%5D-5fdd720fd36b5de4.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/categories-309f2e080f688570.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D-11ec5302d171faf9.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/categories/%5Bname%5D/page/%5Bpage%5D-7eba8a71e5a2547a.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/friends-cfcf8af460a7ace8.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/index-f642bd38292c1bad.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/page/%5Bpage%5D-536a1a07f613601e.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/post/%5Bslug%5D-593c83eb2eab1cfb.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/search-43b24dae8b87fdbe.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/tags-3d85f15a3c7ea250.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D-aa119d197e3f6d50.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/pages/tags/%5Bname%5D/page/%5Bpage%5D-c4fc5825fcd0987a.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/chunks/webpack-c7e35018fa9d7f37.js",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/css/2e2e72cf8cab7d7f.css",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/_next/static/css/3e906d29f48066cf.css",revision:"bQltZBHckcHIdZQUPgynm"},{url:"/favicon.ico",revision:"3f5ad3ddea317ff8012c4f7d04b95e7f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!!e.origin.endsWith("loli.net")||(!!e.origin.endsWith("loli.io")||("s1.baoshuo.ren"===e.origin||"s1.u.sb"===e.origin))),new e.CacheFirst({cacheName:"sm-ms-images",fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
