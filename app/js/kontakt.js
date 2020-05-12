mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug'; // replace this with your access token
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/ck9dycq8v1zrh1ipqhoa6pxev',
center: [22.568550, 51.246554], // starting position [lng, lat]
zoom: 14
 // starting zoom
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