
$('.boxes .box').click(function (e) {
  e.preventDefault();
  let curentBox = $(this);
  if (curentBox.hasClass('active')) {
    console.log('has active');
  } else {
    curentBox.addClass('active');
    curentBox.addClass('noclick');
    curentBox.find('.box__front').css('background-image', "url('images/box-lid-ios.png')");
    setTimeout(function () {
      $('.two_modal_icon').fadeIn();
      $('.boxes .box').addClass('second-step');
      $('.boxes .box.active').removeClass('second-step');
    }, 1000);
  }
  if (curentBox.hasClass('second-step')) {
    curentBox.addClass('active');
    curentBox.addClass('noclick');
    curentBox.find('.box__inner').css('background-image', "url('images/box-inner-gift.png')");
    curentBox.find('.box__front').css('background-image', "url('images/box-lid-ios.png')");
    setTimeout(function () {
      $('.two_modal_icon_Two').fadeIn();
      $('.two_modal_icon').remove();
    }, 1000);
  }
});


$('.click_me_pidor').click(function (e) {
  e.preventDefault();
  $('.two_modal_icon').fadeOut();
});

$('.js-pickup').click(function (e) {
  e.preventDefault();
  $('.loader-wrp').fadeIn();
  $('#game').fadeOut();
  $('#comments_display_one').hide();
  $('#page_two').hide();
  setTimeout(function () {
    $('.order-data-wrp').removeClass('hidden');
    $('.order-data-wrp').show();
    $('.loader-wrp').fadeOut();
    $('.cart-content').css('z-index', '9');
  }, 2000);
});