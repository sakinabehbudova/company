(function ($) {

	$(document).ready(function($) {
		
		$('.service-item-js').click(function(event) {
			$('.service-item-js').removeClass('active');
			$(this).addClass('active');

			$('.service-description-wrapper-js').css('background', 'url(' + $(this).data('image') + ')');
			$('.service-description-js').text($(this).data('description'));
			
		});

		$('.focus-goal-wrapper .item').hover(function() {
			$('.focus-goal-wrapper .item').removeClass('active');
			$(this).addClass('active');
		}, function() {
			console.log('');
		});

		// $('.projects-category').click(function(event) {
		// 	$('.projects-category-list').hide();
		// 	$(this).find('.projects-category-list').css('display', 'flex');
		// });

		$('.cf-attach-btn').click(function(event) {
			// console.log($(this).parents('.cf-col').find('.wpcf7-form-control-wrap').html());
			$(this).parents('.cf-col').find('.wpcf7-form-control-wrap input').trigger('click');
		});

		$('.past-work-projects-item-wrap').click(function(event) {
			let href = $(this).data('href');
			window.location.href = href;
		});

	});

	// slider on first screen
	if($('.js-slider')) {
		$('.js-slider').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
		});
	};

	if($('.js-designlab-slider')) {
		$('.js-designlab-slider').slick({
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			dots: true,
		});
	};

	if($(".js-gallery-item").length > 0) {
		if($(".js-gallery-item").length > 3) {
			for (var i = 3; i < $(".js-gallery-item").length; i++) {
				$($(".js-gallery-item")[i]).hide();
			}
		}else if ($(".js-gallery-item").length = 2) {
			$(".js-gallery-item").addClass('full-width');
		}

		$('[data-fancybox="gallery-photos"]').fancybox({
			loop: true
		});
	}

	$('.processes-item').click(function(event) {
		if ( $(window).width() > 768 ) {
			el = $(this);
			if ( $(this).hasClass('opened') ) {
				$(this).removeClass('opened');
				$(this).parent('.processes-items-row').removeClass('row-with-opened-item');
			} else {
				$('.processes-item').removeClass('opened');
				$('.processes-items-row').removeClass('row-with-opened-item');
				$(this).addClass('opened');
				$(this).parent('.processes-items-row').addClass('row-with-opened-item');
			}
		}
	});

})(jQuery);