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