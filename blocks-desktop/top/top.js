$(function() {

function backTop(speed) {
    $('body,html').animate({
        scrollTop: 0
    }, speed);
    return false;
}

$(window).scroll(function () {
        ($(this).scrollTop() > 25) ? $('.top').addClass('top_visiblity_visible') : $('.top').removeClass('top_visiblity_visible');
    });

    $('.top').mousedown(function(){
        backTop(300);
    }); // Хоть и в данном случае можно было функцию backTop выполнять прямо здесь.
});