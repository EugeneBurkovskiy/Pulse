$(document).ready(function () {

    //swiper

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // autoplay
        autoplay: {
            delay: 3000,
            // остановить прокрутку после ручного вмешательства
            disableOnInteraction: false
        },
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //catalog

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay,#consultation,#thanks,#order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__description').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay,#order').fadeIn('slow');
        })
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                // simple rule, converted to {required:true}
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Будь ласка введіть ваше ім'я",
                phone: "Будь ласка введіть свій телефон",
                email: {
                    required: "Введіть свій email",
                    email: "Невірно введена адреса email"
                }
            }
        });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

});