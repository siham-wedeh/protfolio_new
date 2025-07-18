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
			slidesPerView: 1,
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
					slidesPerView: 1,
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
					slidesPerView: 1,
					spaceBetween: 20,
				},
				488:{
					slidesPerView: 2,
					spaceBetween: 20,
				
				},
				980: {
					slidesPerView: 3,
					spaceBetween: 5,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
			},
		});
	}

    // function initIsotope() {
    //     // Initialize Isotope
    //     var $container = $('.isotope-container').isotope({
    //         itemSelector: '.item',
    //         layoutMode: 'masonry'
    //     });

    //     // Active button class management
    //     $('.filter-button').on('click', function () {
    //         $('.filter-button').removeClass('active');
    //         $(this).addClass('active');
            
    //         var filterValue = $(this).attr('data-filter');
    //         $container.isotope({ filter: filterValue });
    //     });
    // }

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
            // initIsotope();
        });
    });


})(jQuery);
const navLinks = document.querySelectorAll('.nav__list-item a');
  const menuToggle = document.getElementById('menu-toggle');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-active');
      if (menuToggle.checked) {
        menuToggle.checked = false;
      }
    });
  });
  document.getElementById("subscribe-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.email.value;
    const loadingGif = document.getElementById("loading-gif");
    const messageBox = document.getElementById("form-message");

    loadingGif.style.display = "block";
    messageBox.innerText = "";

    // Replace with your actual deployed Google Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbx2XBvGKlYUE_1E1aWLgCRpUHpIWWYhAaZkGtC8vJEBXXkYz6CS8WC4DwO8SQ2Dh3FQ/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new URLSearchParams({ email })
    })
    .then(response => response.text())
    .then(responseText => {
      loadingGif.style.display = "none";
      messageBox.innerText = "Thank you for subscribing!";
      document.getElementById("subscribe-form").reset();
    })
    .catch(error => {
      loadingGif.style.display = "none";
      messageBox.innerText = "There was an error. Please try again.";
      console.error('Error!', error.message);
    });
  });

	document.addEventListener("DOMContentLoaded", function () {
		var maxChars = 50;
		var paragraphs = document.querySelectorAll("#testimonials .card-text.mb-2");

		paragraphs.forEach(function (para) {
			var fullText = para.textContent.trim();

			if (fullText.length > maxChars) {
				var shortText = fullText.substring(0, maxChars) + "... ";
				var viewMoreLink = document.createElement("a");
				viewMoreLink.href = "#";
				viewMoreLink.textContent = "View More";
				viewMoreLink.style.color = "#9d865c";
				viewMoreLink.style.fontWeight = "800";
				viewMoreLink.style.cursor = "pointer";
				viewMoreLink.setAttribute("aria-expanded", "false");

				let isExpanded = false;

				viewMoreLink.addEventListener("click", function (e) {
					e.preventDefault();
					if (isExpanded) {
						para.textContent = shortText;
						para.appendChild(viewMoreLink);
						viewMoreLink.textContent = "View More";
						viewMoreLink.setAttribute("aria-expanded", "false");
						isExpanded = false;
					} else {
						para.textContent = fullText;
						para.appendChild(viewMoreLink);
						viewMoreLink.textContent = "View Less";
						viewMoreLink.setAttribute("aria-expanded", "true");
						isExpanded = true;
					}
				});
				para.textContent = shortText;
				para.appendChild(viewMoreLink);
			}
		});
	});

