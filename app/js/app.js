window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}

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

//Map
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug'; // replace this with your access token
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/ck9dycq8v1zrh1ipqhoa6pxev',
center: [22.568550, 51.246554], // starting position [lng, lat]
zoom: 14
 // starting zoom
});
// Map PopUp
map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['map-nyc-new'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
    .addTo(map);
});

// var qual = document.getElementsByClassName("quality");
// qual.addEventListener("mouseover", function(event){
//   event.find('img').attr('src', '../img/qualityw.svg');
// })
$('.quality').on('mouseover', function() {
  $(this).find('img').attr('src', '../img/qualityw.svg');
});
$('.quality').on('mouseout', function() {
  $(this).find('img').attr('src', '../img/quality.svg');
});
$('.coordination').on('mouseover', function() {
  $(this).find('img').attr('src', '../img/coordinationw.svg');
});
$('.coordination').on('mouseout', function() {
  $(this).find('img').attr('src', '../img/coordination.svg');
});
$('.value').on('mouseover', function() {
  $(this).find('img').attr('src', '../img/valuew.svg');
});
$('.value').on('mouseout', function() {
  $(this).find('img').attr('src', '../img/value.svg');
});
$('.team').on('mouseover', function() {
  $(this).find('img').attr('src', '../img/teamw.svg');
});
$('.team').on('mouseout', function() {
  $(this).find('img').attr('src', '../img/team.svg');
});

