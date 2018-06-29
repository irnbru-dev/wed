//Smooth scroll

$(function () {
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this).attr('href');

        if ($(target).length) {
            $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        }
        e.preventDefault();
    });
});