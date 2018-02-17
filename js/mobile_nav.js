$(function() {
    var menu_button = $('.header_menu').find('a');
    var main = $('main');
    var nav = $('.nav');
    var header = $('.header');

    $(menu_button).click( toggleNavButton );

    $(header).add(main).click( closeNavIfOpen );


    function toggleNavButton(e) {
        $(nav).toggleClass('nav_open');
        e.stopPropagation();
    }
    function closeNavIfOpen(e) {
        if($(nav).hasClass('nav_open')) {
            toggleNavButton(e);
        }
    }
});
