# Final Project -- MelodyClash

## Description
Web application that allows users to create stories with special features such as graphs of the most visited countries, cool stories to visit, favorite stories, and others.

## Link to the App

http://www.dummylink.com/ --- will update later

## Main Technologies
The application will utilize the following tools:
 - Firebase
 - NodeJS
 - AngularJS
 - Angular Material Framework
 - Bootstrap UI
 - HTML5/CSS3
 - Karma, Jasmine, and PhantomJS (for testing).

## How to run
*To run the application in your local machine, you should:*

1. Navigate to the directory you want to have the repository to be in using (e.g. cd ~/User/Docs/apps)
2. git clone https://github.com/DalerAsrorov/melodyclash.git
3. Run the server as a localhost.
   * If you are using Mac, it could be `php -S localhost:8000`  
4. Go to your browser and enter: `localhost:8000`
5. Here you go! The app should be up and running.

## APIs
*The APIs used to get and render data are the following:*
  - Google Maps API
  - Rhaspody API
  - Spotify API
  - EchoNest API
  - iTunes API
  - BandsInTown API

## Integration and intersection of multiple APIs
There are several instances where one API helps another one find specific information depending
on the input and route. For example, the Echonest API finds the artist and returns its contents,
and using some of the returned parameters (such as name), Spotify API makes another ajax call
to get the image of the artist. Or, for example, the when there is call to get the album from
the iTunes API, it will provide the required name and release date, and then given the name
of the album, I have another function call to Spotify API to get the track previews of
the required album. There are many other instances where APIs communicate to each other to
get specific type of information (songs, artists, albums, media content, events).   
