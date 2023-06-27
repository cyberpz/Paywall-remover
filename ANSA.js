// ==UserScript==
// @name         Ansa PayWall
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove Cookie PayWall from ANSA.it
// @author       Cyber.Pz
// @match        https://www.ansa.it/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ansa.it
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(() => {
        document.getElementsByClassName("prompt-to-accept")[0].remove();
        document.getElementsByTagName('header')[0].remove();
        document.getElementsByTagName('footer')[0].remove();
        document.getElementsByTagName('footer')[0].remove();
        document.getElementsByClassName('breaking-news')[0].remove();
        document.getElementsByClassName('breaking-news')[0].remove();
        document.querySelector("body > div.extra-container.inner-section.news-detail > div.news-container > div > div > div.span8 > article > div.news-related > div > div.social-menu.hidden-phone").remove()
    }, 300)
})();