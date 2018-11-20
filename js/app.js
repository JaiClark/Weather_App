var x = document.getElementById("success");



// Functiont that will get the location from the user
function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}




// FUnction that shows the position of the user
function showPosition(position) {


var lat = position.coords.latitude;
var long = position.coords.longitude;


    x.innerHTML = "Latitude: " + lat + 
    " Longitude: " + long;

    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState === 4 && http.status === 200){
            console.log(http.response);
        }
    }

   
    http.open('GET', "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon="+ long, true);
    http.send();


}
    

