[![Build Status](https://travis-ci.org/DalerAsrorov/melodyclash.svg)](https://travis-ci.org/DalerAsrorov/melodyclash)


# MelodyClash

## Warning! 

The demo doesn't work currently because EchoNest API stopped its support of various services and suggested developers to use Spotify API instead. EchoNest provided very detailed information on popularity and trends of a particular artist, so it will take time to switch to Spotify API. I am planning to work on it soon and transition everything to Spotify API. I appologize for any inconvenience. :(

## Description
Web application that allows users to find top artists, albums, songs, and events near their location based on the genre entered
by the user. It shows all kinds of info about the best things happening near and has algorithms that solves the problem with
finding the top events.

## Link to the App
http://melodyclash.herokuapp.com/

## Main Technologies
The application will utilize the following tools:
 - Firebase
 - NodeJS
 - AngularJS
 - Angular Material Framework
 - Bootstrap UI
 - HTML5/CSS3/JQuery
 - Karma, Jasmine, and PhantomJS (for testing).

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

## Unit Testing

The tests were successfully deployed to Travis CL. The results are shown here: https://travis-ci.org/DalerAsrorov/melodyclash  
