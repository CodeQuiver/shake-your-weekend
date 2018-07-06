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

  var queryURL="https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longtitude + "&APPID=bc4a3d5136b4a9ebf72b912efcb3349a";
  $.ajax({
      url: queryURL,
      method: "GET"
     }).then(function(response) {
      console.log(response);
});