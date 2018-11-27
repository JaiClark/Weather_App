var x = document.getElementById("success");
var tempUnit = "&#8451";
var newTempUnit = "&#8457";

// Function that will get the location from the user
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Function that shows the position of the user
function showPosition(position) {

var lat = position.coords.latitude;
var long = position.coords.longitude;
var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(http.readyState === 4 && http.status === 200){
            var c = document.getElementById("city");
            var w = document.getElementById("weather");
            var d = document.getElementById("degrees");
            var i = document.getElementById("icon");
            var f = document.getElementById("farenheit");
           
            var json = JSON.parse((http.response));
            console.log(json);
            w.innerHTML = json.weather[0].main;
            c.innerHTML = json.name + ", " + json.sys.country;
            d.innerHTML = json.main.temp + " " + tempUnit;
            i.innerHTML = "<img src= ' " + json.weather[0].icon + " ' height='70' width='70' ></img>";
            var j = document.getElementById("change").onclick = function(){
                
                
            }
        } 
    }
    http.open('GET', "https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon="+ long, true);
    http.send();

}

function chess() {
    if(tempUnit == "&#8451") {
        z = Math.round(json.main.temp) * 9 / 5 + 32;
        j.innerHTML = z + " " + newTempUnit;
        console.log("beans");
    }
}







    

