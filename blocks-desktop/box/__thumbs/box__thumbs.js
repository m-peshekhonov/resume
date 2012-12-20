$(function() {
        var thumbImg = $('.box__thumbs .image'),
            largeImg = $(".box__photo"),
            currentClass = 'box__thumbs-item_state_current',
            currentImg = $('.b-page').find('.'+currentClass);
            speedSlides = 500;

$(".box__thumbs .link").live("click", function(evenObject) {
    if (largeImg.attr('src') != $(this).attr('href')) {

        largeImg.hide().attr('src', $(this).attr('href'));
        largeImg.load(function() {
            $(this).fadeIn(speedSlides);
        });
    }
    evenObject.preventDefault();
});

$('.box__photo').live('click', function() {
    var currentImg = $('.b-page').find('.'+currentClass);

    currentImg.removeClass(currentClass).parent().next().find('.image').addClass(currentClass);
    if (!currentImg.parent().next().length)
    {
        currentImg.removeClass(currentClass);
        $('.box__thumbs .image').eq(0).addClass(currentClass);
    }
    if (currentImg.length)
    {
        $(this).hide().attr('src', $(this).parent().parent().find('.'+currentClass).parent().attr('href'));
        $(this).load(function() {
            $(this).fadeIn(speedSlides);
        });
    }
});

$('.box__close').live('click', function() {
    var thumbImgSrc = thumbImg.eq(0).parent().attr('href');

    if (largeImg.attr('src') != thumbImgSrc) {
        largeImg.hide().attr('src', thumbImgSrc);
        largeImg.load(function() {
            $(this).fadeIn(speedSlides);
        });
    }
    $('.box__thumbs-item').removeClass(currentClass);
    thumbImg.eq(0).addClass(currentClass);

});

    thumbImg.live("click", function() {
        thumbImg.removeClass(currentClass);
        $(this).addClass(currentClass);
    });
});

