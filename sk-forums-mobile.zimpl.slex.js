// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http://forums.spiralknights.com/*
// @version 1.1.0
// @require jquery
// ==/UserScript==

$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
$('head').append(`
<style>
//REQUIRE ./sk-forums-mobile.css REQUIRE//
</style>
`);
