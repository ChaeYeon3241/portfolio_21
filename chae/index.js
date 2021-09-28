$("a.blank").attr("target", "_blank");

$(document).ready(function () {
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
        $("header ul li a").removeClass("on_gray");
    });
    $(".about_btn").click(function () {
        $(".contents section.about_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.ptf_page").removeClass("active");
        $(".contents section.prc_page").removeClass("active");
        $("header ul li a").removeClass("on_gray");
        $("header ul li a").addClass("on");
    });
    $(".ptf_btn").click(function () {
        $(".contents section.ptf_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.about_page").removeClass("active");
        $(".contents section.prc_page").removeClass("active");
        $("header ul li a").removeClass("on_gray");
        $("header ul li a").addClass("on");
    });
    $(".prc_btn").click(function () {
        $(".contents section.prc_page").addClass("active");
        $(".contents section.home_page").removeClass("active");
        $(".contents section.about_page").removeClass("active");
        $(".contents section.ptf_page").removeClass("active");
        $("header ul li a").removeClass("on");
        $("header ul li a").addClass("on_gray");
    });
    /* 바로가기 버튼 */
    $(".baro_prc").click(function () {
        $(".contents section.home_page").removeClass("active");
        $(".contents section.prc_page").addClass("active");
        $("header li.home_btn").removeClass("active");
        $("header li.prc_btn").addClass("active");
        $("header ul li a").addClass("on_gray");
    });
});

/* 자격증 이미지 슬릭 */
function SliderBox1__init() {
    $(".slider-box-1 > .slick").slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        arrows: false
    });
}

SliderBox1__init();

/* 스크롤 이벤트 */
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll', check_if_in_view);