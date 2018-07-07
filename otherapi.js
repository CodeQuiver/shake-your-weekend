
var latitude = "-77.070503";
var longtitude= "38.930176";
//var queryURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&latitude=" + latitude + "&longitude=" + longtitude + "&radius=1500apikey=eIDQKyYxq5OMvA4-3Hdhl3NnpAwn-X5PA7Fn90VKq6Ot1sy8r4-pd5naotAhmh2kBNFGj6kG9u4PUFAHCqKdULAwdrWx8YPOEzeKliWqcrBVcm55B4vUqt_FYxc8W3Yx";
//console.log(queryURL);

//AIzaSyBjI_Ho49PitFEFX3y4pLACIQNVWHsTxBQ


     //Ajax call to mapquest (returns place description not a map)
    //https://www.mapquestapi.com/search/v4/place?location=-77.070503%2C38.930176&sort=distance&feedback=false&key=GAY0YC1UGuluUUikoBN5Q0A6MFZzXXT8&q=%22metro%20station%22
    
    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    //   crossDomain: true,
    //   dataType: 'jsonp'
    //  }).then(function(response) {
    //   console.log(response);
    // });
   
    //yelp api
    // var queryURL = "https://api.yelp.com/v3/businesses/search?location=20001&term=restaurants"

    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    //   headers: {"Authorization": "6kIsQyTnzc0Dss6kX_MYF6mbShfjZAkRv9ssLhO7cHHr0pH5pkVdI8x_6cV9qtRjEX3cc0WqpZNBYew0qre0NEDv1qNMOqMcBC8KQG39NxgHAfBn0f9T0P1y8V8uW3Yx"}
    //   }).then(function(response) {
    //   console.log(response)
    //   }); 

    //Weather API-Key = bc4a3d5136b4a9ebf72b912efcb3349a

 
    // var queryURL = "https://samples.openweathermap.org/data/2.5/forecast/daily?lat=-77.070503&lon=38.930176&cnt=10&appid=bc4a3d5136b4a9ebf72b912efcb3349a";

    function searchArea(weather){
    // Delete the previous result prior to adding new entry
    $("#weather-div").empty();


     var queryURL="https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longtitude + "&APPID=bc4a3d5136b4a9ebf72b912efcb3349a";
     
     $.ajax({
         url: queryURL,
        method: "GET"
        // After data comes back from the request
        }).then(function(response) {
        // Printing the entire object to console
        console.log(response);


//get each value and store in variable
var weathDescrip = response.description;
console.log(weathDescrip);

var weathIcon = response.icon;
console.log(weathIcon);

var lowTemp = response.low;
console.log(lowTemp);

var highTemp = response.high;
console.log(highTemp);


//add each item to a new html element and name element as a variable
var description = $("<p>").text(description);

var icon = $("<img>").attr('src',icon);

var minTemp = $("<p>").text(lowTemp);

var maxTemp =  $("<p>").text(highTemp);

//append all elements to the #weather-div
$("#weather-div").append(description);
$("#weather-div").append(minTemp);
$("#weather-div").append(maxTemp);

  });
   
}

// Event handler for user clicking the weather button
$("#select-weather").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the weather
    var weather = $("#weather-input").val().trim();

    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchArea(weather);

    //empty search box
    $("#weather-input").val("");
  });

