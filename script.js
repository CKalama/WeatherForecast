//Run this function when the document is ready. 
$(document).ready(function() {

    var cityname = "chicago";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname  + "&units=imperial&appid=3fefd0d7d198dad398a6e3e02a1ee3b5"

    $.ajax({
        url: queryURL,
        method: "GET"
}).then(function(response) {
    console.log(queryURL);

    console.log(response);

    //var weather = $(this).attr("data-name");
});

});