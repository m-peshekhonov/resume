$(function() {
        var thumbImg = $('.box__thumbs .image'),
            largeImg = $('.box__photo'),
            prev = $('.box__prev'),
            close = $('.box__close'),
            currentClass = 'box__thumbs-item_state_current',
            currentImg = $('.b-page').find('.'+currentClass),
            countThumbs = $('.box__thumbs .box__thumbs-item').length,
            mixEvents = $('.box__prev, .box__photo, .box__thumbs-item, .box__close'),
            box = $('.b-page').find('.box'),
            preview = $('.content__preview'),
            timeOut = null,
            speedSlides = 500;

$(window).load(function() {
    preview.fadeIn(800).addClass('content__preview_display_inline');
});

$('.box__thumbs .link').live('click', function(evenObject) {
    if (largeImg.attr('src') != $(this).attr('href')) {

        largeImg.hide().attr('src', $(this).attr('href'));
        largeImg.load(function() {
            $(this).fadeIn(speedSlides);
        });
    }
    evenObject.preventDefault();
});

if(box.hasClass('box_autoplay_yes')) {
    preview.live('click', function() {
        mixEvents.click(function(e,play){
            if(!play){
                clearTimeout(timeOut);
            }
        });
        (function autoPlay(){
            largeImg.trigger('click',[true]);
            timeOut = setTimeout(autoPlay, 3000);
        })();
    });
}

prev.live('click', function() {
    var currentImg = $('.b-page').find('.'+currentClass);
    currentImg.removeClass(currentClass).parent().prev().find('.image').addClass(currentClass);
    if (!currentImg.parent().prev().length)
    {
        currentImg.removeClass(currentClass);
        $('.box__thumbs .image').eq(countThumbs-1).addClass(currentClass);
    }
    if (currentImg.length)
    {
        $(largeImg).hide().attr('src', $('.b-page').find('.'+currentClass).parent().attr('href'));
        $(largeImg).load(function() {
            $(largeImg).fadeIn(speedSlides);
        });
    }
});

largeImg.live('click', function() {
    var currentImg = $('.b-page').find('.'+currentClass);
    currentImg.removeClass(currentClass).parent().next().find('.image').addClass(currentClass);
    if (!currentImg.parent().next().length)
    {
        currentImg.removeClass(currentClass);
        $('.box__thumbs .image').eq(0).addClass(currentClass);
    }
    if (currentImg.length)
    {
        $(this).hide().attr('src', $('.b-page').find('.'+currentClass).parent().attr('href'));
        $(this).load(function() {
            $(this).fadeIn(speedSlides);
        });
    }
});

close.live('click', function() {
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

    thumbImg.live('click', function() {
        thumbImg.removeClass(currentClass);
        $(this).addClass(currentClass);
    });
});

