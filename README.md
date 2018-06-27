# shake-your-weekend
App for finding upcoming events.

Title: Shake Your Weekend

Description:

Main features:
    1- Quiz that matches users with upcoming events
    2- Uses APIs:
        - Eventbrite - to search events
        - Metro - to map nearest Metro Station to event locations
    3- Have users make a username and password in order to store their results
        - each user has a record in firebase with their list of results
        - add a "save this event" button to the page to push it to firebase
        - put in username and password and press "get my events", gets user's list of events from firebase
    4- New Library/Tech Requirement - Leaflet - to map locations
    
    5- Possible additions later
        - search gives you a random result or two rather than all the results to make decision-making easier, and if yu
        - add randomize feature "Shake things up!"
        - add restaurants near event
        - add other event APIs (like park services, ticketfly) for variety or results (would need to handle duplication)
        - add welcome/intro explaining the page or an about us pop-up blurb or page if user wants to know more ("what is this?" "Why should I take your quiz?" etc.)

Planning Questions:

Who is your target audience?
Singles in the DC Metro Area looking for exciting activities.

What is the problem that the product will address?
Bored and last minute planning.

What is the primary goal of the product?
Making cool events faster and easier to find.

Identify and prioritize essential user stories (limit this to 3 or fewer)?
1- As a user, I want to take a quick quiz and see all the choices to help me decide on the event that I chose to go to.

2- As a user, I want to view all the important information about each event in one place so I can decide and be prepared when I get there.

3- As a Metro area resident, I want to know how to get there using metro.


Starter Task List:

    Front-End Work (View):
    - Wireframe (done)
    - Write HTML content
        - Create a form
        - Implement validation
    - Style HTML Content
        - Create a layout
        - CSS
    - Pick framework

    Back-End Work (Ctrl & Database):
    - Form processing
    - AJAX Call to EventBrite
    - AJAX Call to Metro
    - Output Top Event Choices to Results Section
    - Interface with FireBase Database
    - Save Username & password data
    - Save/Load event data
    - Leaflet

    Infrastructure & Project Mgmt:
    - Set up GITHUB & Branching
    - Set up directory structure