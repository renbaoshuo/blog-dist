/* Baoshuo's Blog | Build: 58ab9f8 | Baoshuo ( https://baoshuo.ren ) */
"use strict";importScripts("https://unpkg.zhimg.com/workbox-cdn@5.1.4/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://unpkg.zhimg.com/workbox-cdn@5.1.4/workbox/"});var _workbox=workbox,core=_workbox.core,precaching=_workbox.precaching,routing=_workbox.routing,strategies=_workbox.strategies,expiration=_workbox.expiration,cacheableResponse=_workbox.cacheableResponse,backgroundSync=_workbox.backgroundSync,googleAnalytics=_workbox.googleAnalytics,CacheFirst=strategies.CacheFirst,NetworkFirst=strategies.NetworkFirst,NetworkOnly=strategies.NetworkOnly,StaleWhileRevalidate=strategies.StaleWhileRevalidate,ExpirationPlugin=expiration.ExpirationPlugin,CacheableResponsePlugin=cacheableResponse.CacheableResponsePlugin,cacheSuffixVersion="-211215";core.setCacheNameDetails({prefix:"baoshuo-blog",suffix:cacheSuffixVersion}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),precaching.precacheAndRoute([{url:"https://unpkg.zhimg.com/disqusjs@1.3.0/dist/disqus.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/instant.page@5.1.0",revision:null},{url:"https://unpkg.zhimg.com/medium-zoom@1.0.6/dist/medium-zoom.min.js",revision:null},{url:"https://unpkg.zhimg.com/bsi@0.0.6/favicon/16x16.png",revision:null},{url:"https://unpkg.zhimg.com/bsi@0.0.6/favicon/32x32.png",revision:null},{url:"https://unpkg.zhimg.com/bsi@0.0.6/favicon/64x64.png",revision:null}]),routing.registerRoute(/^https?:\/\/cdn\.jsdelivr\.net/,new CacheFirst({cacheName:"static-immutable"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/^https?:\/\/(?:(?:i|vip[1-2]|s[1-2])\.loli\.(?:io|net)|arina\.loli\.net|s1\.(?:baoshuo\.ren|u\.sb))/,new CacheFirst({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/^https?:\/\/api\.baoshuo\.ren\/cfga/,new NetworkOnly({plugins:[new backgroundSync.BackgroundSyncPlugin("Optical_Collect",{maxRetentionTime:720})]})),googleAnalytics.initialize(),routing.registerRoute(/^https?:\/\/disqus-proxy-bs\.vercel\.app/,new NetworkFirst({cacheName:"dsqjs-api"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},networkTimeoutSeconds:3})),routing.registerRoute(/^https?:\/\/[(.*)\.]?disqus\.com/,new NetworkOnly),routing.registerRoute(/^https?:\/\/[(.*)\.]?disquscdn\.com/,new NetworkOnly),routing.registerRoute(/^https?:\/\/friends\.baoshuo\.ren(.*)(png|jpg|jpeg|svg|gif)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"}})),routing.registerRoute(/^https?:\/\/friends\.baoshuo\.ren\/links\.json/,new StaleWhileRevalidate),routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion})),routing.registerRoute(/.*\.(css|js)/,new StaleWhileRevalidate({cacheName:"static-assets-cache"+cacheSuffixVersion})),routing.registerRoute("/sw.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));