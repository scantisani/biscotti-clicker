biscotti-clicker
================

A super-simple Cookie Clicker script to show the building with the best price/cps ratio. Mostly just a small thing to get me started learning JavaScript. By Biscotti! (Scott Cantisani)

If you'd like to use this with Tampermonkey/Greasemonkey, put this into a new scipt:
// ==UserScript==
// @name       Biscotti Clicker
// @namespace  http://mintdiscount.tumblr.com/
// @version    1.0
// @description  Biscotti messes around with Cookie Clicker
// @match      http://orteil.dashnet.org/cookieclicker/
// @copyright  2014, Biscotti (Scott Cantisani)
// ==/UserScript==

var init = Game.Init;
Game.Init = function() {
    init();
    (function () {
        var load = document.createElement('script');
        load.setAttribute('type', 'text/javascript');
        load.setAttribute('src', 'https://raw.githubusercontent.com/scantisani/biscotti-clicker/master/biscotticlicker.js');
        document.head.appendChild(load);
    }()); 
};

However, if you'd like to use a proper Cookie Clicker add-on, I wholeheartedly recommend Cookie Monster, since it does the same thing as Biscotti Clicker and has many, many more features besides.
