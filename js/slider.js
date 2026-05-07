document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.insurance-slider', {
        // Количество слайдов для показа
        slidesPerView: 1,
        spaceBetween: 20,

        // Навигация
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },

        // Адаптивность (настраиваем сколько карточек видно)
        breakpoints: {
            // от 768px - 2 карточки
            768: {
                slidesPerView: 2,
            },
            // от 1024px - 3 карточки
            1024: {
                slidesPerView: 3,
            }
        }
    });
});