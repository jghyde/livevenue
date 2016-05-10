(function ($, Drupal, drupalSettings) {

    Drupal.behaviors.blaines = {
        attach: function (context, settings) {
            var w = $(window).width();
            var h = $(window).height();
            var useheight = h;
            var properheight = w * (9/16);
            if (h < properheight) {
                useheight = h;
            }
            else {
                useheight = properheight;
            }
            $('#block-views-block-ios-slider-iosslider').height(useheight);
            $('.iosslider').height(useheight);
            $('.slider').height(useheight);
            //$('.slide').height(useheight);
            $('.iosslider').iosSlider({
                snapToChildren: true,
                keyboardControls: true,
                responsiveSlideContainer: true,
                responsiveSlides: true,
                desktopClickDrag: true,
                infiniteSlider: true,
                autoSlide: true,
                sliderCSS: {
                    height: useheight,
                },
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
