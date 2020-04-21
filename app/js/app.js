$('.slogan-carousel').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 600,
  fade: true,
  arrows: true,
  centerMode: true,
  centerPadding: '0px',
  prevArrow: '<img src="img/slider-arrow-left.svg" class="slider-arrows slider-arrow-left" alt="">',
  nextArrow: '<img src="img/slider-arrow-right.svg" class="slider-arrows slider-arrow-right" alt=""></img>'
})

$('.galeria-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 600,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  prevArrow: '<img src="img/slider-galeria-left.svg" class="galeria-slider-arrows galeria-arrow-left" alt="">',
  nextArrow: '<img src="img/slider-galeria-right.svg" class="galeria-slider-arrows galeria-arrow-right" alt=""></img>'
})