$(document).ready(function() {
	//@prepros-append burger.js
	//@prepros-append slick.min.js
	//@prepros-append slider.js
	//@prepros-append anchors.js
	//@prepros-append map.js
	//@prepros-append tabs.js
	$('.main-drop__item').hover (
		function () {
			$('.main-drop').css('width', '720');
			if ( $(window).width() <= 1140 ) {
				$('.main-drop').css('width', '100%');
			}
			var doubleDropHeight = $(this).children('.main-doubledrop').height();
			var dropHeight = $(this).closest('.main-drop').height();
			if (dropHeight < doubleDropHeight) {
				$('.main-drop').css('height', doubleDropHeight);
			} else {
				$('.main-doubledrop').css('height', '100%');
			 	if ( $(window).width() <= 1140 ) {
				 	$('.main-doubledrop').css('height', 'auto');
				 }
			}
		}, function () {
			$('.main-drop').css('height', 'auto');
			$('.main-doubledrop').css('height', 'auto');
			if ( $(window).width() <= 1140 ) {
			 	$('.main-drop').css('width', '100%');
			} else {
				$('.main-drop').css('width', 'auto');
			}
		}
	);
	if ( $(window).width() <= 1140 ) {
	 	$('.main-nav__item').click(function(event) {
	 		$(this).toggleClass('active');
	 	})
	 	$('.main-drop__link').click(function(event) {
	 		$(this).toggleClass('active');
	 	})
	};
	$('.header-search__search').click(function(event) {
		$('.header-search__body').addClass('active');
	});
	$('.header-search__icon').click(function(event) {
		$('.header-search__body').removeClass('active');
	});
});