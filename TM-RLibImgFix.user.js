// ==UserScript==
// @name         TM-RLibImgFix
// @name:ru      Починка иллюстраций на ренобелибе
// @namespace    http://tampermonkey.net/
// @version      0.0.5
// @description:ru  Чинит отображение иллюстраций на ренобелибе и ссылки из закреплённых коментариев с помощью замены абсолютных ссылок на относительные, а также исправляет отображение панели переключения глав
// @author       TranslatorGen13
// @match        https://ranobelib.me/*
// @match        https://novelslib.me/*
// @match        https://*.novelslib.me/*
// @match        https://mangalib.me/*
// @match        https://hentailib.me/*
// @match        https://*.hentailib.org/*
// @match        https://*.hentailib.me/*
// @match        https://slashlib.me/*
// @match        https://anilib.me/*
// @match        https://*.animelib.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ranobelib.me
// @homepageURL    https://github.com/TranslatorGen13/TM-RLibImgFix
// @updateURL      https://raw.githubusercontent.com/TranslatorGen13/TM-RLibImgFix/refs/heads/main/TM-RLibImgFix.js
// @downloadURL    https://raw.githubusercontent.com/TranslatorGen13/TM-RLibImgFix/refs/heads/main/TM-RLibImgFix.js
// ==/UserScript==

(function() {

    const oldUrl = 'https://ranobelib.me';
    function killDoppelganger() {
        ///Удаление комментариев-дубликатов
        document.querySelectorAll('.comment').forEach(div => {let a = document.querySelectorAll('#' + div.id);
                                                              if (a.length>1) {
                                                                  for (let i=1; i<a.length;i++) {
                                                                      a[i].remove();
                                                                  };
                                                              };
                                                             });
    };
    function fixLayer() {
        ///Исправление отображения панели переключения глав
        if (document.querySelector('#app').children[1] != null & document.querySelector('#app').children[1].childNodes[7] != null) {
            let elem = document.querySelector('#app').children[1].childNodes[7];
            elem.insertAdjacentHTML('beforeBegin','<div id="BtnLayerFix"></div>');
            document.querySelector('#BtnLayerFix').appendChild(elem);
        };
    };
    function replaceUrl() {
        ///Исправление ссылок в закреплённых комментариях и источников изображений
        document.querySelectorAll('img[src^="' + oldUrl + '"]').forEach(img => {
            img.src = img.src.replace(oldUrl, '');
        });
        document.querySelectorAll('a[href^="' + oldUrl + '"]').forEach(a => {
            a.href = a.href.replace(oldUrl, '');
        });
    };

    const mutationObserver = new MutationObserver(function() {
        ///Отслеживание изменений страницы
        if ((document.URL.includes('novelslib') || document.URL.includes('ranobelib')) & document.URL.includes('/read')){
            if (document.querySelector('img[src^="' + oldUrl + '"]')!=null || document.querySelectorAll('a[href^="' + oldUrl + '"]').length>0){
                replaceUrl();
            };
            if (document.querySelector('#BtnLayerFix')==null){
                fixLayer();
            };
        };
        if (document.querySelector('.comments-list')!=null) {
            killDoppelganger();
        };
    });
    mutationObserver.observe(document.querySelector("#app"), {
        childList: true,
        subtree: true
    });
})();
