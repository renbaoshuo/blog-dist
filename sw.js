/* Baoshuo's Blog | Build: d3efa44 | Baoshuo ( https://baoshuo.ren ) */
"use strict";importScripts("https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.3/workbox/"});var _workbox=workbox,core=_workbox.core,precaching=_workbox.precaching,routing=_workbox.routing,strategies=_workbox.strategies,expiration=_workbox.expiration,cacheableResponse=_workbox.cacheableResponse,backgroundSync=_workbox.backgroundSync,googleAnalytics=_workbox.googleAnalytics,CacheFirst=strategies.CacheFirst,NetworkFirst=strategies.NetworkFirst,NetworkOnly=strategies.NetworkOnly,StaleWhileRevalidate=strategies.StaleWhileRevalidate,ExpirationPlugin=expiration.ExpirationPlugin,CacheableResponsePlugin=cacheableResponse.CacheableResponsePlugin,cacheSuffixVersion="-210926";core.setCacheNameDetails({prefix:"baoshuo-blog",suffix:cacheSuffixVersion}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),precaching.precacheAndRoute([{url:"https://cdn.jsdelivr.net/npm/disqusjs@1.3.0/dist/disqus.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/instant.page@5.1.0/instantpage.min.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/@nishanths/zoom.js@3.1.0/dist/zoom.min.js",revision:null},{url:"https://cdn.jsdelivr.net/npm/bsi@0.0.4/favicon/64x64.png",revision:null},{url:"https://cdn.jsdelivr.net/npm/bsi@0.0.4/avatar/512x512.png",revision:null}]),routing.registerRoute(/^https?:\/\/cdn\.jsdelivr\.net/,new CacheFirst({cacheName:"static-immutable"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/^https?:\/\/(?:i|vip1|vip2)\.loli\.(?:io|net)/,new CacheFirst({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},plugins:[new ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]})),routing.registerRoute(/^https?:\/\/api.baoshuo.ren\/cfga\//,new NetworkOnly({plugins:[new backgroundSync.BackgroundSyncPlugin("Optical_Collect",{maxRetentionTime:720})]})),googleAnalytics.initialize(),routing.registerRoute(/^https?:\/\/api.baoshuo.ren\/disqus/,new NetworkFirst({cacheName:"dsqjs-api"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"},networkTimeoutSeconds:3})),routing.registerRoute(/^https?:\/\/[(.*)\.]?disqus.com/,new NetworkOnly),routing.registerRoute(/^https?:\/\/[(.*)\.]?disquscdn.com/,new NetworkOnly),routing.registerRoute(/^https?:\/\/friends.baoshuo.ren(.*)(png|jpg|jpeg|svg|gif)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion,fetchOptions:{mode:"cors",credentials:"omit"}})),routing.registerRoute(/^https?:\/\/friends.baoshuo.ren\/links.json/,new StaleWhileRevalidate),routing.registerRoute(/.*\.(?:png|jpg|jpeg|svg|gif|webp)/,new StaleWhileRevalidate({cacheName:"img-cache"+cacheSuffixVersion})),routing.registerRoute(/.*\.(css|js)/,new StaleWhileRevalidate({cacheName:"static-assets-cache"+cacheSuffixVersion})),routing.registerRoute("/sw.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));