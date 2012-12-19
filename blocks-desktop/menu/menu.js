$(function() {

$(window).scroll(function () {
    var menu = $('.menu'),
        content = $('.content');

    if($(this).scrollTop() > 25) {
        menu.addClass('menu_state_fixed');
        content.addClass('content_state_fixed');
    } else {
        menu.removeClass('menu_state_fixed');
        content.removeClass('content_state_fixed');
    }
});

$(".menu__item .link").click(function () {
    var link = $(this).attr("href"),
        block = $(link).offset().top;

    $.browser.safari ? $('body').animate( { scrollTop: block-40 }, 900 ) : $('html').animate( { scrollTop: block-40 }, 900 );
return false;
});

});