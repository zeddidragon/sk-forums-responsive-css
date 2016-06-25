// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http://forums.spiralknights.com/*
// @version 1.0.2
// @require jquery
// ==/UserScript==

try {
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">')
alert('viewport appended')
$('head').append(`
<style style="display: block">
//REQUIRE ./sk-forums-mobile.css REQUIRE//
</style>
`)
alert('stylesheet also appended')
} catch(e) {
  alert("This went wrong: " + e.stack)
}
