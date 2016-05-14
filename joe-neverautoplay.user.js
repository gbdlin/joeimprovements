// ==UserScript==
// @name NeverEverAutoplay for JoeMonster TV
// @description Wyłącza wkurzający autoplay w MonsterTV
// @include http://*joemonster.org/filmy/*
// ==/UserScript== 


window.autoplayYTMovie = function() {};
window.autoplayNextMovie = function() {};

$('.mtv-autoplay-switch').remove();
$('.mtv-autoplay-label').html('Autoodtwarzanie zablokowane przez NeverEverAutoplay');
