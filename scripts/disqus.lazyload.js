/* Baoshuo's Blog | Build: d3efa44 | Baoshuo ( https://baoshuo.ren ) */
"use strict";function callback(){window.disqus_config=function(){this.page.url=disqus_page_url,this.page.identifier=disqus_page_identifier},new DisqusJS(disqus_options)}function addStyle(n){var e=document.createElement("link");e.rel="stylesheet",e.href=n,document.head.appendChild(e)}function addScript(n){var e=document.createElement("script");e.src=n,e.async=!1,document.body.appendChild(e),e.onload=function(){callback()}}function loadDisqus(){addScript("https://cdn.jsdelivr.net/npm/disqusjs@1.3.0/dist/disqus.js"),addStyle("/styles/disqus.css")}var runningOnBrowser="undefined"!=typeof window,isBot=runningOnBrowser&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent),supportsIntersectionObserver=runningOnBrowser&&"IntersectionObserver"in window;setTimeout(function(){var e;!isBot&&supportsIntersectionObserver?(e=new IntersectionObserver(function(n){n[0].isIntersecting&&(loadDisqus(),e.disconnect())})).observe(document.getElementById("disqus_thread")):loadDisqus()},0);