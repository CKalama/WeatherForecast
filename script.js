//Run this function when the document is ready. 
$(document).ready(function() {
    // Building query URL, added city name as a variable to be able to call later down in script.
    //Added a variable that user will pick
    var cityname= "chicago";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname  + "&units=imperial&appid=3fefd0d7d198dad398a6e3e02a1ee3b5"

    $.ajax({
        url: queryURL,
        method: "GET"
}).then(function(response) {
    //console.log(queryURL);

    console.log(response.main.temp);


    // Making Chicago weather appear on HTML. 
    var weatherDiv = $("<div class='storage'>");

    //Storing Weather, What it Feels Like, Wind Speed Humidity, Date, Icon Representation. Appending them all to weather-output Div.
    var weather = response.main.temp;
    var pOne = $('<p>').text("It is currently " + weather + " degrees outside.");
    weatherDiv.append(pOne);
    //console.log("It is currently " + weather);

    var weatherIcon = response.weather.icon;
    var image = $('<img>').attr('src', weatherIcon)
    weatherDiv.append(image);

    var feelsLike = response.main.feels_like;
    var pTwo = $('<p>').text("It feels like " + feelsLike + " right now");
    weatherDiv.append(pTwo);
    //console.log("it feels like" + feelsLike);

    var humidity = response.main.humidity;
    var pThree = $('<p>').text("The humidity is " + humidity);
    weatherDiv.append(pThree);

    var windSpeed = response.wind.speed;
    var pFour = $('<p>').text("The wind speed is at " + windSpeed);
    weatherDiv.append(pFour);

    //Need to add UV Index


    $("#weather-output").prepend(weatherDiv);
   
    //Need to add eventlistener onclick to Search bar that will intake user's input.
    // Need #weather-search id. 
    $("#weather-btn").on("click", function(){
        cityname=" "
        var x= $("weather-search").text(cityname);
        console.log(x);
        $("#weather-output").prepend(weatherDiv);

    })


    //var weather = $(this).attr("data-name");
});

});

 