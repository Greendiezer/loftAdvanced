$(function(){
    var auth_btn = $('.auth__button'),
        main_btn = $('.auth__nav-item:first-child'),
        flipper = $('.flipper');
    
    auth_btn.on('click', function(e) {
        e.preventDefault();

        setTimeout(function() {
            flipper.toggleClass('flip');
        }, 400);
    });

    main_btn.on('click', function(e) {
        e.preventDefault();

        setTimeout(function () {
            flipper.toggleClass('flip');
        }, 400);

    });
});