function searchEventBrite(category, date, price, keyword) {
    //VARIABLE DEFINITIONS:
        
        // category = see eventbrite-ref file for all possible categories, enter only one in this case
        // subcategory = see eventbrite-ref file for all possible subcategories, enter only one in this case
        // date = keyword of date chosen from these options: “this_week”, “next_week”, “this_weekend”, “next_month”, “this_month”, “tomorrow”, “today”
        // price = "free" or "paid" or leave blank for either
        // keyword = from suggestion search

        //hard-coded variables:
            //location.address=Washington%2CDC%2CUSA - restricts search to DC region
            //expand=venue - expands the venue part of the response to allow us access to the address
            //token=QOM53KU5KI63LIHHP4CR - our access key
            //page=1 - limits results to the number that would fit on the first page of the search if done in the browser, meaning about 50
            //sort_by=best - sort the results by best match (options are “date”, “distance” and “best”)

    // Build the Eventbrite api query using the received parameters from the form as the inputs
    var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Washington%2CDC%2CUSA&expand=venue&token=QOM53KU5KI63LIHHP4CR&page=1&sort_by=best&categories=" + category + "&start_date.keyword=" + date + "&price=" + price + "&q=" + keyword;
    console.log(queryURL);

    //AJAX CALL
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
    
    // FOR loop- for each event result:
    for (let i = 0; i < response.events.length; i++) {
        const thisEvent = response.events[i];

        //===========get each value and store in variable================//

        // event name
        var eventName = thisEvent.name.text;
        console.log("name: " + eventName);

        // description in text only
        // if we want it in the html tags, comment out the text line and instead use:
        // var eventDescription = thisEvent.description.html;
        var eventDescription = thisEvent.description.text;
        console.log("description: " + eventDescription);

        // url for eventbrite listing
        var eventUrl = thisEvent.url;
        console.log("url: " + eventUrl);

        // event image- under "logo", may need to expand it
        var eventImg = "";
        console.log("picture: " + eventImg);

        // ticket price if applicable ("currency.display")
        var ticketPrice = thisEvent.currency.display;
        console.log("price: " + ticketPrice);

        // ticket availability

        
        // time and date

        // location- name and address
        var eventVenueName = thisEvent.venue.name;
        console.log("venue name: " + eventVenueName);

        var eventAddress = thisEvent.venue.address.localized_address_display;
        console.log("address: " + eventAddress);

        // latitude and longitude
        var eventLatitude = thisEvent.venue.latitude;
        var eventLongitude = thisEvent.venue.longitude;
        console.log("latitude, longitude: " + eventLatitude + ", " + eventLongitude);

        // call function to get weather and pass it date, lat and longitude values, or otherwise save the lat and long somewhere other functions can access
        
        // save return value of weather function as variable (this should be the text weather report for the date of event at its location)

    
        //============add each item to a new html element and name element as a variable=====================//


        //===================== create a div for the event =====//

            // class = event-div
            // id = event-[i]
            // data-latitude = eventLatitude
            // data-longitude = eventLongitude
        
        
        //============= append all elements to event div =========//


        //======================== append completed event div to #selections div ==================//


    }




        

    });
};

// test call of function
searchEventBrite("", "this_weekend", "", "festival");