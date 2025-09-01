$(document).on('click', function (event) {
    const $sidebar = $('.right-list');
    const $svgIcon = $('.header_mobile img.icon');
    if (!$sidebar.is(event.target) && $sidebar.has(event.target).length === 0 &&
        !$svgIcon.is(event.target) && $svgIcon.has(event.target).length === 0) {
        if ($sidebar.css('right') === '0px') {
            $sidebar.css('right', '-30rem');
        }
    }
});

$('img.icon').on('click', function (event) {
    event.stopPropagation();
    const $sidebar = $('.right-list');

    if ($sidebar.css('right') === '0px') {
        $sidebar.css('right', '-30rem');
    } else {
        $sidebar.css('right', '0');
    }
});
var swiper_testimonials = new Swiper('.swiper_testimonials', {
    slidesPerView: 'auto',

    effect: 'slide',
    speed: 500,
   
    
   
});
var swiper_clients = new Swiper('.swiper_clients', {
    slidesPerView: 'auto',

    effect: 'slide',
    speed: 500,
    
   
});