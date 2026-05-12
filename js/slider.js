document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.insurance-slider', {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },

        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});