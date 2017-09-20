var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;
    
    var request = new XMLHttpRequest();
    var api_url = "http://api.openweathermap.org/data/2.5/weather?lat="+`${crd.latitude}`+"&lon="+`${crd.longitude}`+"&appid=1f90b8470f659713e3bc24581a6236dc";
    request.open("GET", api_url, false);
    request.send();
    request = JSON.stringify(request.responseText);
    document.getElementById("location").innerHTML = request;
}

navigator.geolocation.getCurrentPosition(success);
/*
//weather app stuff
var request = new XMLHttpRequest();
var api_url = "http://api.openweathermap.org/data/2.5/weather?lat=32.68&lon=-97.029&appid=1f90b8470f659713e3bc24581a6236dc"
request.open("GET", api_url, false);
request.send();
request = JSON.parse(request.responseText);
//console.log(request);
*/