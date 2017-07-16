(function () {

    var arrow = (function() {
        return {
            init: function() {
                const scrollHeight = $('.second-section').offset().top;

                $('.arrow').on('click', function() {

                    $('body').animate({
                        scrollTop: scrollHeight
                    }, 1800);

                    return false;
                });
            }
        }
    })();

    arrow.init();


})();