/* Baoshuo's Blog | Build: 89996fc | Baoshuo ( https://baoshuo.ren ) */
"use strict";!function(e){function t(e){try{return localStorage.getItem(e)}catch(e){return null}}function r(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function n(){a.classList.remove(i),a.classList.remove(u[i]),f(s)}function o(e){(e=e||t(s))===r()?(n(),l.content=m[e]):d[e]?(a.classList.add(e),l.content=m[e],a.classList.remove(u[e])):n()}function c(){var e=t(s);if(d[e])e=u[e];else{if(null!==e)return;e=u[r()]}return function(e,t){try{localStorage.setItem(e,t)}catch(e){console.error(e)}}(s,e),e}var a=e.documentElement,l=e.getElementById("theme-color"),i="dark",s="user-color-scheme",d={dark:!0,light:!0},u={dark:"light",light:"dark"},m={dark:"#151617",light:"#fff"},f=function(e){try{localStorage.removeItem(e)}catch(e){console.error(e)}};o(),e.addEventListener("DOMContentLoaded",function(){e.getElementById("toggleDarkMode").addEventListener("click",function(){return o(c())})})}(document);