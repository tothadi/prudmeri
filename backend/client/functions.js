$(document).ready(function () {

  $('#call').mouseover(function () {
    $('#phone').fadeIn(1000);
  });

  $('#call').mouseout(function () {
    $('#phone').fadeOut(200).css('display', 'none');
  });

  $('#mailing').mouseover(function () {
    $('#address').fadeIn(1000);
  });

  $('#mailing').mouseout(function () {
    $('#address').fadeOut(200).css('display', 'none');
  });

  $('#intro-menu').mouseover(function () {
    $('#intro-popup').fadeIn(500);
  });

  $('#intro-menu').mouseout(function () {
    $('#intro-popup').fadeOut(200).css('display', 'none');
  });

  $('#music-menu').mouseover(function () {
    $('#music-popup').fadeIn(500);
  });

  $('#music-menu').mouseout(function () {
    $('#music-popup').fadeOut(200).css('display', 'none');
  });

  $('#gallery-menu').mouseover(function () {
    $('#gallery-popup').fadeIn(500);
  });

  $('#gallery-menu').mouseout(function () {
    $('#gallery-popup').fadeOut(200).css('display', 'none');
  });

  $('#info-menu').mouseover(function () {
    $('#info-popup').fadeIn(500);
  });

  $('#info-menu').mouseout(function () {
    $('#info-popup').fadeOut(200).css('display', 'none');
  });


});

$(document).on('pageinit', function () {

  var $gallerySlider = $('#gallery');
  var $gallerySlideCont = $gallerySlider.find('#thumbs');
  var $gallerySlides = $gallerySlideCont.find('.thumb');
  var gallerySlideCount = $gallerySlides.length;

  $gallerySlides.each(function (i) {
    $(this).css('order', i + 1);
  });


  function galleryStepRight() {

    $gallerySlides.each(function (i) {

      i = parseInt($(this).css('order'));

      $(this).css('order', i - 1);

    });

    $('.thumb[style="order: 0;"]').css('order', gallerySlideCount);

    var picNumber = parseInt($('#big-pic').attr('src').substr(-6, 2));
    var picFN = $('#big-pic').attr('src').substr(-6, 1);
    var picSN = $('#big-pic').attr('src').substr(-5, 1);
    var srcLength = $('#big-pic').attr('src').length;
    var srcStart = $('#big-pic').attr('src').substr(0, srcLength - 6);

    if (picNumber == gallerySlideCount) {
      $('#big-pic').attr('src', srcStart + '01' + '.jpg');
    } else if (picSN == 9) {
      $('#big-pic').attr('src', srcStart + (parseInt(picNumber) + 1) + '.jpg');
    } else if (picFN == 0) {
      $('#big-pic').attr('src', srcStart + '0' + (parseInt(picNumber) + 1) + '.jpg');
    } else {
      $('#big-pic').attr('src', srcStart + (parseInt(picNumber) + 1) + '.jpg');
    };
  };

  function galleryStepLeft() {

    $gallerySlides.each(function (i) {

      i = parseInt($(this).css('order'));

      $(this).css('order', i + 1);

    });

    var lastSlide = '.thumb[style="order: ' + (gallerySlideCount + 1) + ';"]';

    $(lastSlide).css('order', 1);

    var picNumber = $('#big-pic').attr('src').substr(-6, 2);
    var picFN = $('#big-pic').attr('src').substr(-6, 1);
    var picSN = $('#big-pic').attr('src').substr(-5, 1);
    var srcLength = $('#big-pic').attr('src').length;
    var srcStart = $('#big-pic').attr('src').substr(0, srcLength - 6);

    if (picNumber == 01) {
      $('#big-pic').attr('src', srcStart + gallerySlideCount + '.jpg');
    } else if (picNumber <= 10) {
      $('#big-pic').attr('src', srcStart + '0' + (parseInt(picNumber) - 1) + '.jpg');
    } else {
      $('#big-pic').attr('src', srcStart + (parseInt(picNumber) - 1) + '.jpg');
    };
  };

  function galleryReOrder() {

    var myArray = $gallerySlides;
    var count = 0;
    myArray.sort(function (a, b) {

      a = parseInt($(a).css('order'), 10);
      b = parseInt($(b).css('order'), 10);
      count += 2;
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    $gallerySlideCont.append(myArray);

  };

  $('.thumb').click(function () {

    var steps = $(this).index();
    for (i = 0; i < steps; i++) {
      galleryStepRight();
    }

    galleryReOrder();

  });


  $gallerySlider.on('mousewheel', function (event) {

    if (event.deltaY < 0) {
      galleryStepRight();
    } else {
      galleryStepLeft();
    };
    galleryReOrder();

  });

  $('#gallery-right').click(function () {

    galleryStepRight();
    galleryReOrder();

  });

  $('#gallery-left').click(function () {

    galleryStepLeft();
    galleryReOrder();

  });

  $('#big-pic').swiperight(function () {

    galleryStepLeft();
    galleryReOrder();
    stepRight();
    reOrder();

  });


  $('#big-pic').swipeleft(function () {

    galleryStepRight();
    galleryReOrder();
    stepLeft();
    reOrder();

  });


  var $slider = $('main');
  var $slideCont = $slider.find('#section-slider');
  var $slides = $slideCont.find('section');
  var slideCount = $slides.length;

  $slides.each(function (i) {
    $(this).css('order', i + 1);
  });


  function stepRight() {

    $slides.each(function (i) {

      i = parseInt($(this).css('order'));

      $(this).css('order', i - 1);

    });

    $('section[style="order: 0;"]').css('order', slideCount);

  };


  function stepLeft() {

    $slides.each(function (i) {

      i = parseInt($(this).css('order'));

      $(this).css('order', i + 1);

    });

    var lastSection = 'section[style="order: ' + (slideCount + 1) + ';"]';

    $(lastSection).css('order', 1);

  };


  function reOrder() {

    var myArray = $slides;
    var count = 0;
    myArray.sort(function (a, b) {

      a = parseInt($(a).css('order'), 10);
      b = parseInt($(b).css('order'), 10);
      count += 2;
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    $slideCont.append(myArray);

    if ($slides.first().attr('id') == 3) {
      $('#intro-back').css({ 'filter': 'blur(2px) grayscale(70%) opacity(20%) brightness(70%)' }, { '-webkit-filter': 'blur(1px) grayscale(60%) opacity(30%) brightness(80%)' });
    } else {
      $('#intro-back').css({ 'filter': 'blur(.7px) grayscale(40%) opacity(45%) brightness(90%)' }, { '-webkit-filter': 'blur(.7px) grayscale(40%) opacity(45%) brightness(90%)' });
    };

  };


  $('.icons').click(function () {

    var iconPosition = $(this).index() + 1;
    var currentPosition = parseInt($('[style="order: 1;"]').attr('id'));
    var steps = Math.abs(currentPosition - iconPosition);

    if (currentPosition < iconPosition) {
      for (i = 0; i < steps; i++) {
        stepRight();
      };
    } else if (currentPosition > iconPosition) {
      for (i = 0; i < steps; i++) {
        stepLeft();
      };
    };

    reOrder();

  });


  function sectionSlide(event) {

    if (event.deltaY < 0) {
      stepRight();
    } else {
      stepLeft();
    };
    reOrder();

  };

  $slides.on('mousewheel', sectionSlide);


  $('#big-pic').mouseover(function () {
    $slides.off('mousewheel', sectionSlide);
  }).mouseleave(function () {
    $slides.on('mousewheel', sectionSlide);
  });

  $('#thumbs').mouseover(function () {
    $slides.off('mousewheel', sectionSlide);
  }).mouseleave(function () {
    $slides.on('mousewheel', sectionSlide);
  });


  $('#right-arrow').click(function () {

    stepRight();
    reOrder();

  });

  $('#left-arrow').click(function () {

    stepLeft();
    reOrder();

  });

  $('main').swiperight(function () {

    stepLeft();
    reOrder();

  });


  $('main').swipeleft(function () {

    stepRight();
    reOrder();

  });

});