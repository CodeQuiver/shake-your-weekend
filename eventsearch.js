function searchEventBrite(category, subcategory, date, price, keyword) {
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
    var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Washington%2CDC%2CUSA&expand=venue&token=QOM53KU5KI63LIHHP4CR&page=1&sort_by=best&categories=" + category + "&subcategories=" + subcategory + "&start_date.keyword=" + date + "&price=" + price + "&q=" + keyword;
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

        //get each value and store in variable
        var eventName = thisEvent.name.text;
        console.log("name: " + eventName);

        var eventUrl = thisEvent.url;
        console.log("short url: " + eventUrl);
        
    }




        // call function to print these values to results section of page, should be linked on the index.html page

    });
};

// test call of function
searchEventBrite("104", "", "this_weekend", "free", "");