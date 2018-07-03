function searchEventBrite(date, keyword, price, category, subcategory) {
    //VARIABLE DEFINITIONS:
        // date = keyword of date chosen from these options: “this_week”, “next_week”, “this_weekend”, “next_month”, “this_month”, “tomorrow”, “today”
        // keyword = from suggestion search
        // price = "free" or "paid" or leave blank for either
        // category = see eventbrite-ref file for all possible categories, enter only one in this case
        // subcategory = see eventbrite-ref file for all possible subcategories, enter only one in this case

        //hard-coded variables: 
            //location.address=Washington%2CDC%2CUSA - restricts search to DC region
            //expand=venue - expands the venue part of the response to allow us access to the address
            //token=QOM53KU5KI63LIHHP4CR - our access key
            //page=1 - limits results to the number that would fit on the first page of the search if done in the browser, meaning about 50
            //sort_by=best - sort the results by best match (options are “date”, “distance” and “best”)

    // Build the Eventbrite api query using the received parameters from the form as the inputs
    var queryURL = "https://www.eventbriteapi.com/v3/events/search/?location.address=Washington%2CDC%2CUSA&expand=venue&token=QOM53KU5KI63LIHHP4CR&page=1&sort_by=best&start_date.keyword=" + date + "&q=" + keyword + "&price=" + price + "&categories=" + category + "&subcategories=" + subcategory + "";
    console.log(queryURL);

    //AJAX CALL
    $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);

    //get each value and store in variable

    // example:
    // var artistName = response.name;
    // console.log(artistName);



        });
};