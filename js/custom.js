
$(function () {
    $(".main_visual_slide").slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: true,
        fade: true
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $(".main_visual_slide").slick('slickPrev');
    });
    $('.main_visual .arrows .next').on('click', function () {
        $(".main_visual_slide").slick('slickNext');
    });

    $(".main_product_slide").slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $(".main_product_slide").slick('slickPrev');
    });
    $('.main_product .arrows .next').on('click', function () {
        $(".main_product_slide").slick('slickNext');
    });
});


$(function () {
    $('.best .tap_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장하기
        console.log(idx)
        $('.best .tap_menu button').removeClass('on');
        $(this).addClass('on');


        $('.best .tap_content .con').removeClass('on');
        $('.best .tap_content .con').eq(idx).addClass('on');
    });
})


$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    })

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }

    })
})

$(function () {
    $('.footer #lnk').on('change', function () {
        let lnk = $(this).val();
        console.log(lnk)

        if (lnk) {
            window.open(lnk)
        }
    })
})

$(function () {
    AOS.init();
});

$(function () {
    const lenis = new Lenis({
        autoRaf: true,
        duration: 2,
    });
})