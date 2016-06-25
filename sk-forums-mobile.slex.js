// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http://forums.spiralknights.com/*
// @version 1.0.3
// @require jquery
// ==/UserScript==
alert('trying to append viewport')
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">')
alert('viewport appended')
