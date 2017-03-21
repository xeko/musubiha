jQuery(document).ready(function ($) {
    $('.dropdown').hover(
        function () {
//            $(this).children('.dropdown-menu').slideDown(300);
        },
        function () {
//            $(this).children('.dropdown-menu').slideUp(100);
        }
    );

    $('#main-slider').bxSlider({
        auto: true,
        speed: 1000,
        controls: false,
        pause: 10000,
        mode: 'fade',
        captions: false,
        pager: false,
        startSlide: 0
    });
});