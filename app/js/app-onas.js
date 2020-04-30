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

//CountUp.js
import {CountUp} from './countUp.min.js';
const options = {
    suffix: '+',
  };
window.onload = function() {
  var countUp1 = new CountUp('countUp1', 100, options);
  var countUp2 = new CountUp('countUp2', 250, options);
  var countUp3 = new CountUp('countUp3', 1500, options);
  var countUp4 = new CountUp('countUp4', 12);
  countUp1.start();
  countUp2.start();
  countUp3.start();
  countUp4.start();
}