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

            /*$('.view-events .view-content').masonry({
                columnWidth: '300',
                itemSelector: '.views-row',
            }); */
            var testWidth = $(window).width();
            if (testWidth > 769) {
                $('.col-md-7.iphone img').on('inview', function (event, isInView) {
                    var w = $('.col-md-7.iphone img').width();
                    var max = $('.col-md-7.iphone').width();
                    var growWidth = 0;
                    var wScroll = 0;
                    if (isInView) {

                        $(window).scroll(function () {
                            var wScroll = $(this).scrollTop();
                            growWidth = w * (1 + 2 * (wScroll / 10000));
                            var margin = wScroll / 2;
                            if (growWidth < max && margin < 400 &&
                                ($('.col-md-7.iphone img').width() < 530 && $('.col-md-7.iphone img').width() > 0)) {
                                $('.col-md-7.iphone img').width(growWidth).css('top', (-1) * margin + 'px');
                            }
                        });
                    } else {
                        $('.col-md-7.iphone img').css('width', 443 + 'px');
                        $('.col-md-7.iphone img').css('top', 0 + 'px');
                        growWidth = 0;
                        wScroll = 0;
                    }
                });
                $('.iphone-badge a img')
                    .mouseover(function() {
                        $(this).fadeTo(500, 0.5);
                    })
                    .mouseout(function() {
                        $(this).fadeTo(500, 1);
                    });
                $('.Android-badge a img')
                    .mouseover(function() {
                        $(this).fadeTo(500, 0.5);
                    })
                    .mouseout(function() {
                        $(this).fadeTo(500, 1);
                    });
                $('.view-display-id-block_1 .views-row a img')
                    .mouseover(function() {
                        $(this).fadeTo(200, 0.8);
                    })
                    .mouseout(function(){
                        $(this).fadeTo(200, 1);
                    })
            }
        }
    };
})(jQuery, Drupal, drupalSettings);
