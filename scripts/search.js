/* Baoshuo's Blog | Build: 7e3d7eb | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(n){function r(e){return e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function o(e){var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","…":"&hellip;"};return e.replace(/[&<>"]/g,function(e){return n[e]||e})}function e(e){console.error(e),c.innerHTML='索引文章数据出错，请 <a id="redo-search">重试</a> 。<br><br>'+s(l),n.getElementById("redo-search").addEventListener("click",h)}var a,i,b,c=n.getElementById("search-result"),t=n.getElementById("search-input"),l=new URL(window.location).searchParams.get("s"),s=function(e){return'你也可以前往 <a href="https://www.google.com/search?q=site:blog.baoshuo.ren%20'+encodeURIComponent(e)+'" target="_blank" rel="nofollow noopener noreferrer">Google</a> 或 <a href="https://www.bing.com/search?q=site:blog.baoshuo.ren%20'+encodeURIComponent(e)+'" target="_blank" rel="nofollow noopener noreferrer">Bing</a> 搜索「<a href="https://www.google.com/search?q=site:blog.baoshuo.ren%20'+encodeURIComponent(e)+'" target="_blank" rel="nofollow noopener noreferrer">'+e+"</a>」。"},h=function(t){fetch("/search.json").then(function(e){return e.json()}).then(function(e){var m=[],p=(b=b.map(o)).map(function(e){return e.toLowerCase()}),w=new RegExp(b.map(r).join("|"),"gi");e.forEach(function(e){var n,t,r,o,a,i,c,l,s,h,u,f,g,d;null!==e.title&&null!==e.content&&(g=e.title,n=e.content,t=g.toLowerCase(),r=n.toLowerCase(),l=c=i=a=o=-1,h=s=0,u=function(e,n){var t=0;return e.replace(w,function(e){return h+=0<t?n*(1+t/10):+n,t++,"<mark>"+e+"</mark>"})},p.forEach(function(e){o=t.indexOf(e),(0<=(a=r.indexOf(e))||0<=o)&&s++,0<s&&(i=r.lastIndexOf(e),0<=a&&(c=c<0?a:Math.min(c,a)),0<=i&&(l=l<0?i:Math.max(l,i)))}),s!==b.length&&s<2||((f=0)<=c&&(f=Math.max(c-10,0)),(d=0<=l?Math.min(l+10,n.length):d)-f<50&&(d=f+300),g=u(g,4),d=u(n.substring(f,d),1),d='<a href="'+e.url.substring(1)+'" class="search-result-link"><div class="search-result-item"><strong class="search-result-title">'+g+'</strong><div class="search-result-content">'+d+"</div></div></a>",m.push({html:d,weight:h})))});var n=m.sort(function(e,n){return n.weight-e.weight}).reduce(function(e,n){return e+'<div class="divider"></div>'+n.html},"");i=(new Date).getTime();e="（用时 "+Number(i-a)+" 毫秒）";c.innerHTML=0<m.length?"<div>找到 "+m.length+" 条结果"+e+"</div>"+n:"没有找到任何结果，请尝试搜索其它关键字"+e+"<br><br>"+s(t)}).catch(e)};l?(c.innerHTML="搜索中...",t.value=l,b=l.trim().split(/[\s\-]+/),a=(new Date).getTime(),h(l)):((t=n.createElement("link")).href="/search.json",t.rel="prefetch",t.as="fetch",n.head.appendChild(t))}(document);