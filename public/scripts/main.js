'use strict';

// Skip Links ---------------------

window.onload = function () {
  document.getElementById("skip-link").focus();
};

// Mobile Menu --------------------

$(function () {
  var pull = $('#pull');
  var menu = $('.menu-items ul');
  var menuHeight = menu.height();
  var firstLink = $('#first-link');

  $(pull).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
    firstLink.focus();
  });
});

$(window).resize(function () {
  var windowWidth = $(window).width();
  if (windowWidth > 320 && menu.is(':hidden')) {
    menu.removeAttr('style');
  }
});