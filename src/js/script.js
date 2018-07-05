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

// $(function () {
//     $("#bike").on('animationiteration', function () {
//         $(this).toggleClass('back');
//         console.log(1)
//     });
// });

$(function () {
    new WOW().init();
});