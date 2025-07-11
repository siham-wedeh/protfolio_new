/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

(function ($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	var overlayMenu = function () {

		if (!$('.nav-overlay').length) {
			return false;
		}

		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-btn');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
		};
		init();
	}

	// init jarallax parallax
	var initJarallax = function () {
		jarallax(document.querySelectorAll(".jarallax"));

		jarallax(document.querySelectorAll(".jarallax-keep-img"), {
			keepImg: true,
		});
	}

	// init Chocolat light box
	var initChocolat = function () {
		Chocolat(document.querySelectorAll('.image-link'), {
			imageSize: 'contain',
			loop: true,
		})
	}

	var initSwiper = function () {

		var swiper = new Swiper(".portfolio-carousel", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			navigation: {
				nextEl: ".portfolio-carousel-next",
				prevEl: ".portfolio-carousel-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				599: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				980: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
			},
		});

		var testimonial_swiper = new Swiper(".testimonial-carousel", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				980: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
			},
		});

		var clients_swiper = new Swiper(".clients-carousel", {
			slidesPerView: 5,
			spaceBetween: 30,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {
				0: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				980: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
			},
		});
	}

    function initIsotope() {
        // Initialize Isotope
        var $container = $('.isotope-container').isotope({
            itemSelector: '.item',
            layoutMode: 'masonry'
        });

        // Active button class management
        $('.filter-button').on('click', function () {
            $('.filter-button').removeClass('active');
            $(this).addClass('active');
            
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
    }

    $(document).ready(function () {
        overlayMenu();
        initChocolat();
        initJarallax();
        initSwiper();

        AOS.init({
            duration: 1500,
            once: true,
        });

        // Initialize isotope after all images are loaded
        $(window).on('load', function() {
			
			// Fade out preloader
            $("#overlayer").fadeOut("slow");
            $('body').addClass('loaded');
            initIsotope();
        });
    });


})(jQuery);