$('#myCarousel').carousel({
    interval: 0
});

$('.carousel .item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {

        next.next().children(':first-child').clone().appendTo($(this)).addClass('rightest');

    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));

    }
});

$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});