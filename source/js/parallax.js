(function(){
    console.log("HELLO");

    var parallax = (function(){
        var bg = document.querySelector('.hero-background');
            user = document.querySelector('.hero__user-content');

            return {
                move: function (block, windowScroll, strafeAmount) {
                    var strafe = windowScroll / -strafeAmount + 'px';
                        style = block.style;
                        transformString = "translate3d(0, " + strafe + ", 0)";

                    style.transform = transformString;
                    style.webkitTransform = transformString;
                },

                init: function(wScroll) {
                    this.move(bg, wScroll, 10);
                    this.move(user, wScroll, 8);
                }
            }
            
    })();
    
    window.onscroll = function () {
            var wScroll = window.pageYOffset;

            parallax.init(wScroll);

        console.log(wScroll);
        }
})();