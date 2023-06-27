// ==UserScript==
// @name         IlSole24Ore Paywall
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sole24Ore Paywall removal
// @author       Cyber.Pz
// @match        https://www.ilsole24ore.com/art/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ilsole24ore.com
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    setInterval(() => {
        document.querySelector("#onetrust-consent-sdk").remove();
        var data = document.querySelector("#pg-wrapper");
        var element = document.querySelector("#wrapper > div.styleguide-modal > div > div > div > div.modal-header > button > span");
        if (element) {
            element.click();
        }
        document.querySelector("body").removeAttribute("style");
    }, 500);
})();