// ==UserScript==
// @name  Spiral knights forums responsive styles
// @author  Zeddy
// @description Make SK forums less horrible on phones
// @include http*://*.spiralknights.com/*
// @include http*://spiralknights.com/*
// @version 1.0.3
// ==/UserScript==

var meta = document.createElement('meta');
meta.textContent = '<meta name="viewport" content="width=device-width, initial-scale=1">';
document.head.appendChild(meta);

var styles = document.createElement('style');
styles.textContent = '
//REQUIRE ./sk-forums-mobile.css REQUIRE//
`;
document.head.appendChild(styles)
