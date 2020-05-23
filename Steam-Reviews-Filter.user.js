// ==UserScript==
// @name         Steam Reviews Filter
// @description  remove some reviews contain(s) key words
// @author       desc_inno
// @namespace    https://github.com/desc70865/Steam-Reviews-Filter
// @supportURL   https://github.com/desc70865/Steam-Reviews-Filter/issues
// @updateURL    https://github.com/desc70865/Steam-Reviews-Filter/raw/master/Steam-Reviews-Filter.user.js
// @version      0.2.1
// @icon         https://store.steampowered.com/favicon.ico
// @match        https://steamcommunity.com/app/*/reviews*
// @match        https://store.steampowered.com/app/*
// @match        https://store.steampowered.com/
// @grant        none
// ==/UserScript==

(function() {
    var flag = location.href.split('/')[2] == "steamcommunity.com";
    if(flag){
        window.setInterval(CheckForMoreContent, 3000);
    };
    remove(flag);
    window.setInterval(function(){ remove(flag); }, 3000); // 可按需设置刷新间隔
})();

function remove(flag){
    var reviews;
    var reg_filter = /我是傻逼/g; // 在此设置屏蔽关键字,多个用|隔开,形如: /我是傻A|我是傻B|我是傻C/g
    if(flag){
        reviews = document.querySelectorAll('.apphub_CardTextContent');
    }else{
        reviews = document.querySelectorAll('.content');
    };
    reviews.forEach(x => {
        let t = x.innerText.match(reg_filter)!=null;
        if(t){
            x.hidden = true;
        };
    });
};
