$(document).ready(function () {


    // 상단 팝업
    $('.popup_close').click(function () {
        $('#popup').slideUp();
    });


    // sitemap
    $('.all_wrap').hide();
    $('.all_menu').click(function () {
        $('.all_wrap').fadeIn();
    });
    $('.all_close').click(function () {
        $('.all_wrap').fadeOut();
    });



    // gnb 
    $('.depth2,.depth2_bg').hide();

    $('.gnb > li').mouseenter(function () {
        $('.depth2,.depth2_bg').stop().fadeIn();
    });
    
    $('.gnb > li').mouseleave(function () {
        $('.depth2,.depth2_bg').stop().fadeOut();
    });



    //m_depth2
    $('.m_depth2').hide();
    $('.m_gnb > li').click(function () {
        $(this).children('.m_depth2').stop().slideToggle();
        $(this).siblings().children('.m_depth2').stop().slideUp();
    });


    // mgnb
    $('.gnb_icon').click(function () {
        $('.mgnb_wrap').animate({
            'left': '0'
        });

    });
    $('.mgnb_close').click(function () {
        $('.mgnb_wrap').animate({
            'left': '100%'
        });
    });



    // 컬렉션(m) 슬라이드
    const collection_m = new Swiper('.collection_m', {
        autoplay: {
            delay: 3000,
        },
        slidesPerView: '2',
        centeredSlides: true,
        spaceBetween: 0,
        loop: true,
        speed: 2000,

        pagination: {
            el: ".swiper-pagination",
          },
    });



    // 제품 슬라이드
    const review = new Swiper('.review', {
        autoplay: {
            delay: 0,
        },
        slidesPerView: '2',
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        speed: 3000,

        breakpoints: {
            550: {  // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {  // 가로해상도가 1024px 이상일 경우
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1400: {  // 가로해상도가 1400px 이상일 경우
                slidesPerView: 6,
                spaceBetween: 10,
            },
            
        },

    });

    


    // .brand_list li에 클릭했을 때
    // 클릭한 요소에 active라는 클래스를 추가
    // 클릭한 요소에 형제요소들에는 active라는 클래스를 제거
    $('.collection_list li:first-child').addClass('active');
    $('.collection_list li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });


    // 탑버튼
    $('.gotop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    })

    $('.gotop').click(function () {
        $('html,body').animate({
            scrollTop: '0'
        }, 1500);
    });

}); //문서준비 이벤트