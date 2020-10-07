//Run this function when the document is ready. 
$(document).ready(function() {
    // Building query URL, added city name as a variable to be able to call later down in script.
    var cityname = "chicago";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname  + "&units=imperial&appid=3fefd0d7d198dad398a6e3e02a1ee3b5"

    $.ajax({
        url: queryURL,
        method: "GET"
}).then(function(response) {
    console.log(queryURL);

    console.log(response.weather.icon);

    // Making Chicago weather appear on HTML. 
    var weatherDiv = $("#weather-ouput");

    //Storing Weather, What it Feels Like, Wind Speed Humidity, Date, Icon Representation
    var weather = response.main.temp;
    var pOne = $('<p>').text("It is currently " + weather);
    weatherDiv.append(pOne);
    console.log("It is currently " + weather);


    var weatherIcon = response.weather.icon;
    var image = $('<img>').attr('src', weatherIcon)
    weatherDiv.append(image);

   



    //var weather = $(this).attr("data-name");
});

});