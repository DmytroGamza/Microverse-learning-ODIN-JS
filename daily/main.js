(function ($) {
    'use strict';

    $(window).load(function () {
        $('#preloader-wrapper').fadeOut('slow');
    });

    $('.gallery-slider').owlCarousel(
        {
            pagination: true,
            autoPlay: 5000,
            itemsDesktop: [1500, 4],
            itemsDesktopSmall: [979, 3]
        }
    );

    $('.image-popup').magnificPopup({ type: 'image' });
})(jQuery);


function myFunc() {
    document.getElementById('demo7').style.alignContent = 'center';
    document.getElementById('demo7').style.color = 'green';
}