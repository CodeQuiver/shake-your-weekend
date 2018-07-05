function searchEventBrite(category, date, price, keyword) {
    //VARIABLE DEFINITIONS:
        
        // category = see eventbrite-ref file for all possible categories, enter only one in this case
        // date = keyword of date chosen from these options: “this_week”, “next_week”, “this_weekend”, “next_month”, “this_month”, “tomorrow”, “today”
        // price = "free" or "paid" or leave blank for either
        // keyword = from suggestion search

        //hard-coded variables:
            //location.address=Washington%2CDC%2CUSA - restricts search to DC region
            //expand=organizer,ticket_availability,venue - expands the venue part of the response to allow us access to the address, also the organizer and ticket parts for more of that information
            //token=QOM53KU5KI63LIHHP4CR - our access key
            //page=1 - limits results to the number that would fit on the first page of the search if done in the browser, meaning about 50
            //sort_by=best - sort the results by best match (options are “date”, “distance” and “best”)

    // Build the Eventbrite api query using the received parameters from the form as the inputs
    var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Washington%2CDC%2CUSA&expand=organizer,ticket_availability,venue&token=QOM53KU5KI63LIHHP4CR&page=1&sort_by=best&categories=" + category + "&start_date.keyword=" + date + "&price=" + price + "&q=" + keyword;
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

        // description in text or html depending which line we comment out
        // if we want it in the html tags, comment out the text line and instead use:
        var eventDescription = thisEvent.description.html;
        // var eventDescription = thisEvent.description.text;
        console.log("description: " + eventDescription);

        // url for eventbrite listing
        var eventUrl = thisEvent.url;
        console.log("url: " + eventUrl);

        // event image- under "logo"
        var eventImg = thisEvent.logo.url;
        console.log("picture url: " + eventImg);

        // ticket availability, true or false- TODO- INSERT "if" PART OF FUNCTION RESULT
        var ticketsLeft = thisEvent.ticket_availability.has_available_tickets;

            if (ticketsLeft === false) {
                continue; // if there are no tickets left to this event, skip the rest of loop entirely and move on to the next event in list.           
            } else if (ticketsLeft === true) {
                ticketsLeft = "Tickets are available";
            }

        // ticket price if applicable
        var ticketPrice = thisEvent.ticket_availability.minimum_ticket_price.display;
        console.log("tickets start at: " + ticketPrice);
        
        // time and date
            // get time and date of event in local timezone- ex. "2018-07-07T11:00:00"
            var dateStr = thisEvent.start.local;
            // translate to user-friendly format
            var dateTime = new Date(dateStr);
            console.log("Date and Time: " + dateTime);

        // location- name and address
        var eventVenueName = thisEvent.venue.name;
        console.log("venue name: " + eventVenueName);

        var eventAddress = thisEvent.venue.address.localized_address_display;
        console.log("address: " + eventAddress);

        // latitude and longitude
        var eventLatitude = thisEvent.venue.latitude;
        var eventLongitude = thisEvent.venue.longitude;
        console.log("latitude, longitude: " + eventLatitude + ", " + eventLongitude);

        
        //================== WEATHER FUNCTION GOES HERE! =========================//
                //TODO- ADD WEATHER API CALL HERE, (OR COMMAND CALLING IT AS SEPARATE FUNCTION)

                // call function to get weather and pass it date, lat and longitude values, or otherwise save the lat and long somewhere other functions can access
        //================== WEATHER FUNCTION ENDS HERE! =========================//
        
        // save return value of weather function as variable (this should be the text weather report for the date of event at its location)
        var eventWeather = "Placeholder Partly Cloudy, High of 73 degrees";
        console.log("Weather Report: " + eventWeather);

    
        //============add each item to a new html element and name element as a variable=====================//

            // TICKETS: this section only creates the ticket information variable if there are tickets, and only includes price if it's specified.
            if (ticketsLeft && ticketPrice && ticketPrice != "0.00") {
                    // if tickets are left and the price is specified
                    var ticketInfo = ticketsLeft + ", starting at $" + ticketPrice + ".";
                } 
            else if (ticketsLeft) {
                    var ticketInfo = ticketsLeft + "!";
                };

            // h2- event name
            var printName = $("<h2 class='event-name'>").text(eventName);

            // image - float left
            var printImg = $("<img>").attr('src',eventImg).attr('style','float:left; max-width:200px; height:auto;');

            // weather
            var printWeather = $("<h4>").text("Expected Weather: " + eventWeather);
            
            // date and time
            var printDateTime = $("<p>").attr('style','font-weight:bold;').text(dateTime);

            // venue name
            var printVenueName = $("<p>").attr('style','font-weight:bold;').text(eventVenueName);

            // address
            var printAddress = $("<p>").text(eventAddress);

            // ticket info
                // "full details" if not a ticketed event- url
                
                // or "get tickets" url

            // description
            var printDescription = $("<p>").append(eventDescription);

            

            


        //===================== create a div for the event ================================//

            // class = event-div
            // id = event-[i]
            // data-latitude = eventLatitude
            // data-longitude = eventLongitude
        
        
        //============= append all elements to event div ==================================//


        //======================== append completed event div to #selections div ==================//


    }




        

    });
};

// test call of function
searchEventBrite("", "this_weekend", "", "festival");