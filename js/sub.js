$(document).ready(function () {


    //찜버튼
    $('.list_txt img').click(function () {
        $(this).toggleClass('active');
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