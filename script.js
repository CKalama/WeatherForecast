//Run this function when the document is ready. 
$(document).ready(function() {
   // var weatherDiv = $("<div class='storage'>");
    // console.log("first", weatherDiv);
    // Building query URL, added city name as a variable to be able to call later down in script.
    //Added a variable that user will pick
    //var cityname= "chicago";
    //var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname  + "&units=imperial&appid=3fefd0d7d198dad398a6e3e02a1ee3b5"
    getWeather("chicago");

    //Need Event Lsitener 
    
    //$("#weather-output").prepend(weatherDiv);
    $("#weather-btn").on("click", function(){
        cityname= $("#weather-search").val().trim();
        
        // console.log(cityname);
        getWeather(cityname);

        //$("cityname").append(weatherDiv);
        //var x= $("weather-search").text(cityname);
        
    
    })
function getWeather(cityName){
    var apiKey = "3fefd0d7d198dad398a6e3e02a1ee3b5"
    // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName  + "&units=imperial&appid=" + apiKey

    //Creating Template Literal
    var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`

    //Setting Item in Local Storage
    localStorage.setItem('cityHistory', JSON.stringify(cityName));
    

    


    $.ajax({
        url: queryURL,
        method: "GET"
}).then(function(response) {
    //console.log(queryURL);

    // var obj = JSON.parse(response);

    console.log(response.main.temp);




var weatherOutputs = {
    city: response.name,
    mainTemp:response.main.temp,
    weatherIcon: response.weather.icon,
    feelsLike: response.main.feels_like,
    humidity: response.main.humidity,
    windSpeed: response.wind.speed
    
}


displayWeather(weatherOutputs);
   
   


    //var weather = $(this).attr("data-name");
});
}
});


function displayWeather(weather){
    $("#weather-output").empty();

    var weatherDiv =$("<div class='storage'>")

        var pZero = $('<p>').text(weather.city)
            weatherDiv.append(pZero);

        var pOne = $('<p>').text("It is currently " + weather.mainTemp + " degrees outside.");
            weatherDiv.append(pOne);

        var image = $('<img>').attr('src', weather.weatherIcon)
            weatherDiv.append(image);

        var pTwo = $('<p>').text("It feels like " + weather.feelsLike + " right now");
            weatherDiv.append(pTwo);

        var pThree = $('<p>').text("The humidity is " + weather.humidity);
            weatherDiv.append(pThree);

        var pFour = $('<p>').text("The wind speed is at " + weather.windSpeed);
            weatherDiv.append(pFour);

        //Need to add UV Index

$("#weather-output").prepend(weatherDiv);
}

//Writing function to display Search Item into weather-history div
function getHistory(cityName) {
    if (localStorage.getItem(cityName) != null) {
        document.getElementById("weather-history").innerHTML = localStorage.getItem("cityName");
      }
    //document.getElementById("weather-history").append(JSON.parse(localStorage.getItem(cityHistory)));
    //var getCity = JSON.parse(localStorage.getItem(cityName))
    //getCity.append(document.getElementById("weather-history"));
    

}



  
  







