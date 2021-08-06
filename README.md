# Hear Me Out 

"Hear Me Out" is a minimal, dark theme music player made with React, Typescript, Express.js, and Axios that lets you search and play sample songs using Spotify's Web API.
The app can be accessed [here](https://hear-me-out-spotify-api.herokuapp.com/).

## Login

This app uses Spotify's OAuth for login. Simply click the login button on the homepage where you'll be redirected to Spotify to login and then redirected back to the app.

![Hear Me Out Login Gif](https://github.com/PaytonDev/Hear-Me-Out/blob/master/HearMeOutLogin.gif)


## Useage

After logging in, then you will be able to use the searchbar to search for an artist, album, or song. If you select an artist, all of their available albums and top 5 songs will be shown to you. If you select an album it will display the album's tracklist. When you click on a song title the app will play the 30 second preview of the song if it is available. After clicking on the song to play you can pause and play the sample using the player widget that appears at the bottom of the screen.

![Hear Me Out Search Gif](https://github.com/PaytonDev/Hear-Me-Out/blob/master/HearMeOutSearch.gif)

## The Technical Stuff

When making a call to the Search, Album, Artist, or Song endpoint all of the data available through the Spotify Web API is available in the returned response. This was to ensure that additional UI features would be less difficult to implement because all necessary data would be available in the current props.

An example of what is available in the Artist endpoint:  
![Artist Endpoint response object photo](https://github.com/PaytonDev/Hear-Me-Out/blob/master/Payload.png)

## Roadmap

The next features to be added are:
- Previous/next song functionality
- Creating, adding to, and removing from song queues
- "Recently played" sidebar
