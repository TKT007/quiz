$(document).ready(function () {
	$('.product-slider-nav__item').click(function (e) {
		e.preventDefault();
		let currentProduct = $(this);
		let currentProductName = currentProduct.attr('data-product-name')
		currentProduct.siblings().removeClass('active');
		currentProduct.addClass('active');
		$('.product-name-block__value').text(currentProductName);
		let currentProductIndex = currentProduct.index();
		$('.product-descript-list').find('.product-descript-list__item').removeClass('active');
		$('.product-descript-list').find('.product-descript-list__item').eq(currentProductIndex).addClass('active');
		$('.main-roduct-slider-for').find('.main-roduct-slider-for__item').removeClass('active');
		$('.main-roduct-slider-for').find('.main-roduct-slider-for__item').eq(currentProductIndex).addClass('active');

		currentProduct.closest('.parameters-list__item').siblings('.parameters-list__item').removeClass('active');
		currentProduct.closest('.parameters-list__item').addClass('active');
		var slideno = $(this).data('slide');
		$('.main-product-slider-nav').slick('slickGoTo', slideno - 1);

	});

	$('.size-list__item').click(function (e) {
		e.preventDefault();
		let currentSize = $(this);
		let currentSizeName = currentSize.attr('data-size')
		currentSize.siblings().removeClass('active');
		currentSize.addClass('active');
		$('.product-size-block__value').text(currentSizeName);


	});



	//Слайдер с продуктом
	$(".main-roduct-slider-for").on("init", function (event, slick) {
		$(this).css("visibility", "visible");
	});
	if ($(".main-roduct-slider-for").length > 0) {
		$(".main-roduct-slider-for").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			arrows: true,
			dots: false,
			infinite: true,
			fade: true,
			swipe: true,
			asNavFor: ".main-product-slider-nav",
		});
	}

	$(".main-product-slider-nav").on("init", function (event, slick) {
		$(this).css("visibility", "visible");
	});
	if ($(".main-product-slider-nav").length > 0) {
		$(".main-product-slider-nav").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500,
			arrows: false,
			dots: false,
			infinite: true,
			fade: false,
			swipe: true,
			swipeToSlide: true,
			focusOnSelect: true,
			asNavFor: ".main-roduct-slider-for",
		});
	}

	setTimeout(function () {
		$('.loader-wrp').fadeOut();
	}, 2000);
});
