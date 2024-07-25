# features
- Users can upload stories (like ig stories), with the venue and artist displayed
- Add friends
- Find raves near location (within specific radius)
    - Be able to mark the rave: "Going", "Contemplating" "Pass", and friends can see
- Todays mood (can be a song choice)
- Upload your favourite videos from raves on your feed

# Implement
- Sections
    - Home Section
        - Stories
        - Main Feed where it shows posted videos or status (e.g. Fred's going to _____ at ____ on __/__/__)
        - Mood/Song of the Day
    - Explore Section
        - Search Bar
        - List of results (artist, venue, genre, tickets)
            - Be able to save to different list
                - Going, Saved, 
        - Maybe a map widget to show where the venue is
    - Profile Section
        - Profile Pic
        - Username
        - Posted clips and status
        - Settings
        - Maybe a page that shows some info about you
            - Favourite edm genre, artist, festivals you been to, upcoming festival
            - Where you are from, age, ethnicity
    - Friends
        - Friend List
        - Search bar to find users via username

# Tech Stack - MERN
MongoDB
- used to store data of application
- e.g. friends, posts, status, account info

Express
- framework for back end requests

React Native
- Serve as the UI for mobile app (ideal since we are not designing for desktop; react)

Node
- env for backend

Vite
- used to build react

# Endpoints - User
getUser (get user)
postUser (create an account)
deleteUser (user may wish to delete account)
updateUser (user may want to update info)
