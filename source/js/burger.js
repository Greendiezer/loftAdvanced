(function() {
    console.log('hello');
    var burger = $('.burger');
        nav = $('.navigation');
        menu = $('.navigation__list')


    burger.on('click', function(e){
        e.preventDefault();

        burger.toggleClass('burger_active');

        setTimeout(function() {
            menu.toggleClass('open');
        }, 500);

        nav.toggleClass('navigation_active');
        $('body').toggleClass('active');

        return false;
    })
})();