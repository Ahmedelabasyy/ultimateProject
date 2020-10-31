$(function () {
    "use strict";
    $(".header .toggle").on('click',function () {
        $(".content-area, .sidebar").toggleClass('no-sidebar');
    });
    // Toggle Submenu Class
    $(".toggle-submenu").on("click", function () {
        $(this).find(".fa-angle-right").toggleClass("down");
        $(this).next(".childs-list").slideToggle();
    });
});
const myMap = new Map();
const mySet = new Set();