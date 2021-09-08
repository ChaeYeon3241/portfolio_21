$("a.blank").attr("target", "_blank");

$(document).ready(function () {
    /* AOS */
    AOS.init({
        duration: 2000
    });
    /* 헤더 메뉴버튼 */
    $("header ul li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    /* 페이지 체인지 */
    $(".home_btn").click(function () {
        $(".contents section.home_page").addClass("active");
        $(".contents section.about_page").removeClass("active");
        $(".contents section.ptf_page").removeClass("active");
        $(".contents section.prc_page").removeClass("active");
        $("header ul li a").removeClass("on");
    });
    $(".about_btn").click(function () {
        $(".contents section.about_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.ptf_page").removeClass("active");
        $(".contents section.prc_page").removeClass("active");
        $("header ul li a").addClass("on");
    });
    $(".ptf_btn").click(function () {
        $(".contents section.ptf_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.about_page").removeClass("active");
        $(".contents section.prc_page").removeClass("active");
        $("header ul li a").addClass("on");
    });
    $(".prc_btn").click(function () {
        $(".contents section.prc_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.about_page").removeClass("active");
        $(".contents section.ptf_page").removeClass("active");
        $("header ul li a").removeClass("on");
    });
});

/* 자격증 이미지 슬릭 */
function SliderBox1__init() {
    $(".slider-box-1 > .slick").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        arrows: false
    });
}

SliderBox1__init();