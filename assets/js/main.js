/*******************************************************
    Template Name    : Bistro - Food & Resturant Landing Page Template
    Author           : Cute Themes
    Version          : 1.0
    Created          : 2021
*******************************************************/
(function ($) {
	"use strict";
	var wind = $(window);
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	
	//SUPER BG SLİDER
	$('#slides').superslides({
		animation: 'fade',
		play: 3000
	});
	
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 800,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

		// Menu of The Day Tab
		$('.menu-day-tab-list  li > a ').on('click', function (e) {
			e.preventDefault();
			var target = $(this).attr('href');
			$(this).closest('li').siblings('li').removeClass('active');
			$(this).closest('li').addClass('active');
			$(target).addClass('active');
			$(target).siblings('.menu-single-tab-content').removeClass('active');
		});

	// MagnificPopup 
	//  magnificPopup
	var magnifPopup = function() {
		$('.popup-img').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};
	// Call the functions
	magnifPopup();

	// WOW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 30, // Distance to the element when triggering the animation (default is 0)
				mobile: false, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
	// Preloader Area
	jQuery(window).on('load', function () {
	  jQuery('.preloader').delay(350).fadeOut('slow');
	});
		
	/*START CONTACT MAP JS*/
	if($('.map-canvas').length) {
		// Specify features and elements to define styles.
		var styles = [{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#fcfcfc"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#eeeeee"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [{
				"visibility": "simplified"
			}, {
				"color": "#dddddd"
			}]
		}];
		var mapOptions = {
			center: new google.maps.LatLng(40.7143528, -74.0059731),
			zoom: 12,
			scrollwheel: false,
			panControl: true,
			mapTypeControl: false,
			streetViewControl: false,
			disableDefaultUI: false,
			zoomControl: true,
			disableDoubleClickZoom: false,
			fullscreenControl: false,
			styles: styles
		};
		var initMap = function() {
			var contactdata = $('#contact-map').data('content');
			var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions);
			var bounds = new google.maps.LatLngBounds();
			var myIcon = new google.maps.MarkerImage("assets/img/map_pin.png", null, null, null, new google.maps.Size(50, 50));
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.7143528, -74.0059731),
				map: map,
				icon: myIcon
			});
		};
		initMap();
		google.maps.event.addDomListener(window, 'load resize', initMap);
	}
	/*END CONTACT MAP JS*/
})(jQuery);