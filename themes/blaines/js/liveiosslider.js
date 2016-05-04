(function ($, Drupal, drupalSettings) {

    Drupal.behaviors.blaines = {
        attach: function (context, settings) {

/* Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing. https://davidwalsh.name/javascript-debounce-function */
            function debounce(func, wait, immediate) {
                var timeout;
                return function() {
                    var context = this, args = arguments;
                    var later = function() {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
            var myEfficientFn = debounce(function() {
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
                $('.iosslider').width(w).height(useheight);
                $('.slider').width(w).height(useheight);
                $('.slide').width(w).height(useheight).css('background-size', 'cover');
                //$('.iosslider').height(w * (9/16));
            }, 250);
            window.addEventListener('resize', myEfficientFn);
            $('.iosslider').iosSlider({
                snapToChildren: true,
                scrollbar: true,
                scrollbarHide: true,
                desktopClickDrag: true,
            });
        }
    };
})(jQuery, Drupal, drupalSettings);
