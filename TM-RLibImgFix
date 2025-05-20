// ==UserScript==
// @name         TM-RLibImgFix
// @name:ru      Починка иллюстраций на ренобелибе
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description:ru  Чинит отображение иллюстраций на ренобелибе с помощью замены абсолютных ссылок на относительные
// @author       TranslatorGen13
// @match        https://*.novelslib.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ranobelib.me
// @grant        none
// ==/UserScript==

(function() {

    const oldUrl = 'https://ranobelib.me';
    function ReplaceUrl() {
        document.querySelectorAll('img[src^="' + oldUrl + '"]').forEach(img => {
            img.src = img.src.replace(oldUrl, '');
        });
    }
    setInterval(function() {
        if (document.querySelector('img[src^="' + oldUrl + '"]')!=null){
            ReplaceUrl();
        }
    }, 1000)
})();
