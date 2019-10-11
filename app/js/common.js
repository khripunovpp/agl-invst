var Util = {
    randomInteger: function(min, max) {
        var rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    },
    scrollToEl: function(el, offset) {
        $("html,body").animate({ scrollTop: el.offset().top + (offset || 0) }, 500);
    },
    trimString: function(string) {
        return string.split(' ').join('');
    }
}

$(function() {

    $('[data-scroll-to]').on('click', function(event) {
        event.preventDefault();
        var to = $(this).attr('data-scroll-to')
        Util.scrollToEl($(to))
    });

    var header = $('.header')

    $('.hamburger').on('click', function(event) {
        event.preventDefault();
        _toggle()
    });

    function _toggle() {
        header.toggleClass('opened')
        $("body").toggleClass('fixed')
    }

    function _default() {
        header.removeClass('opened')
        $("body").removeClass('fixed')
    }

    $('.header__nav a').on('click', function(event) {
        event.preventDefault();
        var to = $(this).attr('href')
        Util.scrollToEl($(to))
        if ($(window).width() < 991) {
            _toggle()
        }
    });

    
    $(window).on('resize', function() {
        if ($(window).width() > 991) {
            _default()
        } else {

            $('.stages__item').removeAttr('style')
        }
    });

    $('.reviews__list').slick()

});