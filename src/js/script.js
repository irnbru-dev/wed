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

$(function () {
    function f() {
        $('.main .btn').addClass('vzhux');
    }

    function d() {
        $('.main .scrollDown').addClass('active')
    }

    setTimeout(f, 1000);
    setTimeout(d, 1500);
});

// $(function () {
//     var $scheduleSect = $('.schedule');
//
//     $(window).on('scroll', function () {
//         if ($(window).scrollTop() > ($scheduleSect.offset().top - $scheduleSect.outerHeight())) {
//             $('.border').addClass('active');
//         }
//     })
// });
