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

    // Toggle Full Screen
    $(".toggle-fullscreen").on("click", function() {
        $(this).toggleClass('fullscreen');
        if($(this).hasClass("fullscreen")){
            openFullScreen();
        } else {
            exitFullScreen();
        }
    })

    // Toggle Setting Bar
    $('.toggle-settings').on('click', function () {
        $(this).find('i').toggleClass('fa-spin');
        $(this).parent().toggleClass('hide-settings');
    });

    // Switch Color Theme
    var themes = [];
    $(".colors-option li").each(function () {
        themes.push($(this).data("theme"));
    });
    $(".colors-option li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        $("body").removeClass(themes.join(" ")).addClass($(this).data("theme"));
    });
});

    /* View in fullscreen */
    var elem = document.documentElement;
    function openFullScreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
    }
    
  /* Close fullscreen */
    function exitFullScreen() {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
        }
    }
const myMap = new Map();
const mySet = new Set();