//Isotop grid
var iso = new Isotope( '.grid', {
layoutMode: 'fitRows',
itemSelector: '.grid-item',
fitRows: {
    gutter: '.gutter-sizer'
  }
})
// bind filter button click
var filtersElem = document.querySelector('.filter-button-group');

filtersElem.addEventListener( 'click', function( event ) {
// only work with buttons
if ( !matchesSelector( event.target, 'button' ) ) {
  return;
  }
filtersElem.querySelector('.is-checked').classList.remove('is-checked');
event.target.classList.add('is-checked');
var filterValue = event.target.getAttribute('data-filter');
iso.arrange({ filter: filterValue });
});

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

// var iso = new Isotope( '.grid', {
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows',
//     fitRows: {
//         gutter: '.gutter-sizer'
//         }
//         });
//     var filterFns = {
//         numberGreaterThan50: function( itemElem ) {
//           var number = itemElem.querySelector('.number').textContent;
//           return parseInt( number, 10 ) > 50;
//         },
//         ium: function( itemElem ) {
//           var name = itemElem.querySelector('.name').textContent;
//           return name.match( /ium$/ );
//         }
//       };
//       var filtersElem = document.querySelector('.portfolio-filer');
//       filtersElem.addEventListener( 'click', function( event ) {
//         // only work with buttons
//         if ( !matchesSelector( event.target, 'button' ) ) {
//           return;
//         }
//         var filterValue = event.target.getAttribute('data-filter');
//         // use matching filter function
//         filterValue = filterFns[ filterValue ] || filterValue;
//         iso.arrange({ filter: filterValue });
//       });
    
//       var buttonGroups = document.querySelectorAll('.portfolio-filer');
//       for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
//         var buttonGroup = buttonGroups[i];
//         radioButtonGroup( buttonGroup );
//       }
      
//       function radioButtonGroup( buttonGroup ) {
//         buttonGroup.addEventListener( 'click', function( event ) {
//           // only work with buttons
//           if ( !matchesSelector( event.target, 'button' ) ) {
//             return;
//           }
//           buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
//           event.target.classList.add('is-checked');
//         });
//       }

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

//Magnific Pop Up
$('.ling-img').magnificPopup({
  type: 'image',
  gallery:{enabled:true}
});

var burgerButton = document.getElementsByClassName("toggle-button");
var p;
for(p = 0; p < burgerButton.length; p++){
  burgerButton[p].onclick = function(){
    var menu = document.getElementById('nav-menu');
    if(menu.style.maxHeight){
       menu.style.maxHeight = null;
    }
    else{
      menu.style.maxHeight = menu.scrollHeight + "px";

    }
    if(menu.style.marginTop){
      menu.style.marginTop = null;
    }
    else{
      menu.style.marginTop = 10 + "px";
    }
  }
}

// var gridShow = document.getElementsByClassName("grid-button-show");
// var d;
// for(d = 0; d < gridShow.length; d++){
//   gridShow[d].onclick = function(){
//     var port = document.getElementById('portfolio');
//     if(port.style.maxHeight){
//       port.style.maxHeight = null;
//     }
//     else{
//       port.style.maxHeight = "3170px";
//       port.style.height = "3170px";
//     }
//   }
// }
// var show = document.getElementById('button-show')
// show.addEventListener('click', function(){
//   if(show.value === "Pokaż wszystko"){
//     show.value = "Pokaż mniej"
//   } else{
//     show.value = "Pokaż wszystko"
//   }
// })