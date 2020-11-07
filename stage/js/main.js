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