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
            var startDateStr = thisEvent.start.local;
            // translate to user-friendly format
            var startDateTime = new Date(startDateStr);

            var endDateStr = thisEvent.end.local;
            var endDateTime = new Date(endDateStr);

            var dateTime = "Starts: " + startDateTime + "\nEnds: " + endDateTime;
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

                // call function to get weather and pass it date (use "startDateTime" variable), lat and longitude values, or otherwise save the lat and long somewhere other functions can access
        //================== WEATHER FUNCTION ENDS HERE! =========================//
        
        // save return value of weather function as variable (this should be the text weather report for the date of event at its location)
        var eventWeather = "Placeholder Partly Cloudy, High of 73 degrees";
        console.log("Weather Report: " + eventWeather);

    
        //============add each item to a new html element and name element as a variable=====================//

            // TICKETS: this section only creates the ticket information variable if there are tickets, and only includes price if it's specified.
            if (ticketsLeft && ticketPrice && ticketPrice!="0.00") {
                    // if tickets are left and the price is specified
                    var ticketInfo = ticketsLeft + ", starting at $" + ticketPrice + ".";
                } 
            else if (ticketsLeft) {
                    var ticketInfo = ticketsLeft + "!";
                };

            var printName = $("<h2 class='card-title'>").text(eventName); // h2- event name

            var printImg = $("<img>").attr('src',eventImg).attr('alt','Cover image for' + eventName).attr('style','float:left; max-width:200px; height:auto;')// image - float left- TODO- pull real alt text from JSON if it's available
            var printImgDiv = $("<div>").attr('class','card-image').append(printImg); // divfor it to be a card image in materialize

            var printWeather = $("<h4>").text("Expected Weather: " + eventWeather); // weather
            var printDateTime = $("<p>").attr('style','font-weight:bold;').text(dateTime); // date and time
            var printVenueName = $("<p>").attr('style','font-weight:bold;').text(eventVenueName); // venue name
            var printAddress = $("<p>").text(eventAddress); // address

            // link to more info or ticket info- needs "if" statement
            var printLink = $("<a>").attr('href', eventUrl).attr('target','_blank');

                // "full details" if not a ticketed event- url
                
                // or "get tickets" url if it is a ticketed event

            var printDescription = $("<p>").append("<span style='font-weight:bold;'>").text("Description: ");
            printDescription.append(eventDescription); // description

        //===================== create a div for the event ================================//

            // class = event-div
            // materialize setup:
                // <div class="card medium horizontal">
                // <!-- Card Content -->
                    // <div class="card-image">
                    //     <img>
                    // </div>
                    // <div class="card-stacked">
                    //     <div class="card-content">
                    //     <p>I am a very simple card. I am good at containing small bits of information.</p>
                    //     </div>
                    //     <div class="card-action">
                    //     <a href="#">This is a link</a>
                    //     </div>
                    // </div>
                // </div>


            // id = event-[i]
            var eventCardDivId = "event-" + [i];
            // data-lat = eventLatitude
            // data-long = eventLongitude

        var eventCardDiv = $("<div class='event-div card medium horizontal'>").attr('id',eventCardDivId).attr('data-lat',eventLatitude).attr('data-long',eventLongitude);

        var eventCardStackedDiv = $("<div class='card-stacked'>");

        var eventCardContentDiv = $("<div class='card-content'>");

        var eventCardActionDiv = $("<div class='card-action'>");
        
        
        //============= append all elements to event div ==================================//


        //======================== append completed event div to #selections div ==================//
        $("#selections").append(eventCardDiv);

    }




        

    });
};

// test call of function
searchEventBrite("", "this_weekend", "", "festival");