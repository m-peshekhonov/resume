$(function() {
    var menu = $('.menu'),
        content = $('.content');

function fixedMenu (top) {
    if($(this).scrollTop() > top) {
        menu.addClass('menu_state_fixed');
        content.addClass('content_state_fixed');
    } else {
        menu.removeClass('menu_state_fixed');
        content.removeClass('content_state_fixed');
    }
}

fixedMenu(25);

$(window).scroll(function () {
    fixedMenu(25);
});

$(".menu__item .link").click(function () {
    var link = $(this).attr("href"),
        block = $(link).offset().top,
        speed = 900;

    $.browser.safari ? $('body').animate( { scrollTop: block-40 }, speed ) : $('html').animate( { scrollTop: block-40 }, speed );
return false;
});

});