// TESTIMONIALS CAROUSEL SLIDER SWIPERJS
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.5,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints : {
        767: {
            slidesPerView: 2.5,
            setWrapperSize: true
        }
    }
});
