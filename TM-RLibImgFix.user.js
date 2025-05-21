// ==UserScript==
// @name         TM-RLibImgFix
// @name:ru      Починка иллюстраций на ренобелибе
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description:ru  Чинит отображение иллюстраций на ренобелибе и ссылки из закреплённых коментариев с помощью замены абсолютных ссылок на относительные
// @author       TranslatorGen13
// @match        https://*.novelslib.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ranobelib.me
// @homepageURL    https://github.com/TranslatorGen13/TM-RLibImgFix
// @updateURL      https://raw.githubusercontent.com/TranslatorGen13/TM-RLibImgFix/refs/heads/main/TM-RLibImgFix.js
// @downloadURL    https://raw.githubusercontent.com/TranslatorGen13/TM-RLibImgFix/refs/heads/main/TM-RLibImgFix.js
// ==/UserScript==

(function() {

    const oldUrl = 'https://ranobelib.me';
    function ReplaceUrl() {
        document.querySelectorAll('img[src^="' + oldUrl + '"]').forEach(img => {
            img.src = img.src.replace(oldUrl, '');
        });
        document.querySelectorAll('a[href^="' + oldUrl + '"]').forEach(a => {
            a.href = a.href.replace(oldUrl, '');
        });
    }
    setInterval(function() {
        if (document.querySelector('img[src^="' + oldUrl + '"]')!=null || document.querySelectorAll('a[href^="' + oldUrl + '"]')!=null){
            ReplaceUrl();
        }
    }, 1000)
})();

