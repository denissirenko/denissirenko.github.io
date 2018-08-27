;(function($) {
    // Init ion range slider
    if ($('#price-range').length) {
        $("#price-range").ionRangeSlider({
            type: "double",
            grid: false,
            min: 0,
            max: 1000,
            from: 200,
            to: 800,
            prefix: "$",
            hide_min_max: true
        });
    }
    // Init jQuery form styler
    if ($('.select-styler, .input-file-styler').length) {
        $('.select-styler, .input-file-styler').styler();
    }
    // Slick carousel
    if ($('.product-slider').length) {
        $('.product-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
    }
    // Slick nav
    if ($('.header-nav').length) {
        $('.header-nav').slicknav({
          appendTo: '.bottom-header .container',
          label: ''
        });
    }
    
})(jQuery);