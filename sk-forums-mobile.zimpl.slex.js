// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http://forums.spiralknights.com/*
// @version 1.0.1
// ==/UserScript==

alert('before everything')
//REQUIRE ./insert-viewport-tag.js REQUIRE//

var css = "//REQUIRE ./sk-forums-mobile.css REQUIRE//"

var style = document.createElement('style')
document.head.appendChild('style')

alert('after everything')
