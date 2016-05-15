// ==UserScript==
// @name NeverEverAutoplay for JoeMonster TV
// @version 1.1
// @updateURL https://github.com/gbdlin/joeimprovements/raw/master/joe-neverautoplay.user.js
// @description Wyłącza wkurzający autoplay w MonsterTV
// @include http://*joemonster.org/filmy/*
// ==/UserScript== 


window.autoplayYTMovie = function() {};
window.autoplayNextMovie = function() {};

$('.mtv-autoplay-switch').remove();
$('.mtv-autoplay-label').html('Autoodtwarzanie zablokowane przez NeverEverAutoplay');
$.cookie('autoplay_off', "true", {expires: new Date(2036, 1, 1)});
