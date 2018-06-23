# shake-your-weekend
App for finding upcoming events.

Title: Shake Your Weekend

Description:

Main features:
    1- Quiz that matches users with upcoming events
    2- Uses APIs:
        - Eventbrite - to search events
        - Leaflet - to map locations
    3- Have users make a username and password in order to store their results
        - each user has an record in firebase with their list of results
        - add a "save this event" button to the page to push it to firebase
        - put in username and password and press "get my events", gets user's list of events from firebase
    4- New Library Requirement - moment.js (since we're working with events)
        - use it to add timestamps to firebase saves
        - possible add-on feature - use it to add "event starts in" field to event listings
