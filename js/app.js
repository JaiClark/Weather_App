$(document).ready(function() {

// Function that will get the location from the user

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var long = position.coords.longitude;

            var api = "https://fcc-weather-api.glitch.me/api/current?lat=" +lat+ '&lon=' +long;

            $.getJSON(api, function(data){
            var city = data.name;
            var cel = Math.round(data.main.temp);
            var far = Math.round(data.main.temp) * 9 / 5 + 32;
            var desc = data.weather[0].main;

            // Default for th weather is Farenheit
            $("#temp").html(far + " &#8457");

            // Shows the user the city and description
            $("#location").html("Location: " + city);

            $("#description").html("Area Description: " + desc)

            $("#fardegree").on("click", function(){
                $("#temp").html( far + " &#8457");
            });

            $("#celdegree").on("click", function(){
                $("#temp").html( cel + " &#8451");
            });

            console.log(data);
        });
    })
}
});
                







    

