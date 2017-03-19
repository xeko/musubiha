jQuery(document).ready(function ($) {
    $('.collapse').on('shown.bs.collapse', function (e) {
        $('.collapse').not(this).removeClass('in');
    });
    
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