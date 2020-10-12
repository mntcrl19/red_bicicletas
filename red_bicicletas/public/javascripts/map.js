/*var mymap = L.map('main-map').setView([-34.8203, -56.2267], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mymap);*/

var map = L.map('main-map', {
    center: [-34.8203, -56.2267],
    zoom: 13
});


L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
}).addTo(map)

//Marcadores en el mapa
//L.marker([-34.9041727, -56.197949]).addTo(map); //Centro - Montevideo
//L.marker([-34.9066979, -56.2120628]).addTo(map); //Ciudad Vieja - Montevideo
//L.marker([-34.894229, -56.1739111]).addTo(map); //Tres Cruces - Montevideo
//L.marker([-34.8971034, -56.1471212]).addTo(map); //Buceo - Montevideo

//Llamada AJAX
$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result) {
        console.log(result);
        result.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, { title: bici.id }).addTo(map);
        });
    }
})