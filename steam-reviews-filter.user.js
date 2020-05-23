// ==UserScript==
// @name         steam reviews filter
// @description  remove some reviews contains key words
// @author       desc_inno
// @namespace    https://github.com/desc70865/steam-reviews-filter
// @supportURL   https://github.com/desc70865/steam-reviews-filter/issues
// @updateURL    https://github.com/desc70865/steam-reviews-filter/steam-reviews-filter.user.js
// @version      0.1
// @icon         https://store.steampowered.com/favicon.ico
// @match        https://steamcommunity.com/app/*/reviews/*
// @match        https://store.steampowered.com/app/*
// @grant        none
// ==/UserScript==

(function() {
    var domain = location.href.split('/')[2];
    if(domain == "steamcommunity.com"){
        window.setInterval(CheckForMoreContent, 3000);
    };
    remove(domain);
    window.setInterval(function(){ remove(domain); }, 3000); // 可按需设置刷新间隔

})();

function remove(domain){
    var reviews;
    var reg_filter = /我是傻逼/g; // 在此设置屏蔽关键字,多个用|隔开,形如: /我是傻A|我是傻B|我是傻C/g
    if(domain == "steamcommunity.com"){
        reviews = document.querySelectorAll('.apphub_CardTextContent');
    }else{
        reviews = document.querySelectorAll('.content');
    };
    reviews.forEach(x => {
        let t = x.innerText.match(reg_filter)!=null;
        if(t){
            x.hidden = true;
        }
    })
};
