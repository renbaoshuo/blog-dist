/* Baoshuo's Blog | Build: d3efa44 | Baoshuo ( https://baoshuo.ren ) */
"use strict";var updated;document.addEventListener("DOMContentLoaded",function(){document.getElementById("toc-btn").onclick=function(){document.getElementById("post-toc").classList.add("active")},document.getElementById("post-toc-close").onclick=function(){document.getElementById("post-toc").classList.remove("active")},Array.from(document.getElementsByClassName("toc-link")).forEach(function(e){e.addEventListener("click",function(){document.getElementById("post-toc").classList.remove("active")})})}),"undefined"==typeof updateTime||182<(updated=Math.floor(((new Date).getTime()-updateTime)/864e5))&&(document.getElementById("article-expire-day").textContent=updated,document.getElementById("article-expire").classList.remove("hidden"));