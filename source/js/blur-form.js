
(function () {
    var blur = (function() {
        var wrapper = document.querySelector('.contact-me'),
            form = document.querySelector('.blur');

        return {
            set: function () {
                var imgWidth = document.querySelector('.connect__background-img').offsetWidth,
                    posLeft = -wrapper.offsetLeft,
                    posTop = -wrapper.offsetTop,
                    blurCSS = form.style;

                blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
                blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
            }
        }
    })();
    
    blur.set();

    window.onresize = function () {
        blur.set();
    }
})();

