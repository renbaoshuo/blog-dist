/* Baoshuo's Blog | Build: 7e83974 | Baoshuo ( https://baoshuo.ren ) */
"use strict";var loadFriends=function(){fetch(friends_endpoint+"/links.json").then(function(n){return n.json()}).then(function(n){var e="";n.forEach(function(n){e+='<a href="'+n.link+'" class="friend card flex" target="_blank" rel="noopener nofollow"><img class="friend-logo" src="'+friends_endpoint+"/img/"+n.logo+'" loading="lazy"><div class="friend-info"><div class="friend-title" href="'+n.link+'" target="_blank" rel="noopener nofollow">'+n.name+"</div>"+(n.slogan&&'<span class="friend-description">'+n.slogan+"</span>")+"</div></div>"}),document.getElementById("friends").innerHTML=e}).catch(function(n){document.getElementById("friends").innerHTML='<p>加载失败，请尝试 <a href="javascript:loadFriends();">重新加载</a> 。</p>',console.log(n)})};loadFriends();