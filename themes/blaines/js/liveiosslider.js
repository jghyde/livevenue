(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.yourbehavior = {
        attach: function (context, settings) {
            var w = $(window).width();
            var h = $(window).height();
            function resizeslider(w,h) {
                var useheight = 0;
                var properheight = w * (9/16);
                if (h < properheight) {
                    useheight = h;
                }
                $('.iosslider').width(w).height(useheight);
                $('.slider').width(w).height(useheight);
                $('.slide').width(w).height(useheight);
                //$('.iosslider').height(w * (9/16));
            }
            resizeslider(w,h);
            $(window).resize(function() {
                resizeslider(w,h);
            });

            console.log('Loaded');

        }
    };
})(jQuery, Drupal, drupalSettings);
