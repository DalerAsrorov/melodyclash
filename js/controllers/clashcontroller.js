angular
  .module('app')
  .controller('ClashCtrl', function(artists, genre, iTunes, Spotify, SearchGenre, $location, BandsInTown, $uibModal, $route, $firebaseArray, $firebaseObject, nameService) {
      var vm = this;
      var name = "";
      var sum = 0;
      vm.genre = genre;
      vm.topArtists = artists.artists;
      vm.topAlbums;
      vm.topSongs;
      vm.events;
      vm.loading = true;
      vm.popularityRate = 0;
      vm.description = "";
      vm.genreId;
      vm.feedNav = "Feed Live!";
      vm.searchArtistModalText = "Search Artist";
      vm.avgPopRateText = "Avg. Popularity Rate";
      vm.hottnessInfo = "This number indicates the average % of popularity rate taken from their performance in charts and social media. ";
      vm.mapInfoNotice = " Waiting for the map to load the events... ";
      vm.mapLoaded = false;
      vm.mapNav = "Map of Top Events Near You";
      vm.topPercent = "100";
      vm.aboutGenreText = "About Genre";
      vm.u = nameService.getName();
      vm.username = nameService.getName();
      var map;
      var lat = 30.141198;
      var lon = -38.787720;
      var center = new google.maps.LatLng(lat, lon);

      vm.username = localStorage.getItem('username');
      function setContent(artistObj) {
        var d = new Date(artistObj.on_sale_datetime);

        var contentStr = '<div class="map-artist">' + artistObj.artists[0].name + '</div>' + '<div class="map-venue"> ' + artistObj.venue.name +
        '</div> <div class="map-date">' + d.getMonth() + "/" + d.getDay() + "/" + d.getFullYear()  + '</div>' +
        '<div>' ;

        //console.log(contentStr);
        return contentStr;

      };

      function addEventToMap (artistObj, lat, lon, map) {
        var myLatLng = new google.maps.LatLng(parseFloat(lat), parseFloat(lon));
        var newCenter = new google.maps.LatLng(lat, lon);

        var contentStr = setContent(artistObj);

        var infowindow = new google.maps.InfoWindow({
          content: contentStr
        });

        //created the new marker with animation and custom icon
      	var marker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		animation: google.maps.Animation.DROP
      	});
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

        map.setCenter(new google.maps.LatLng(lat, lon));
      };


      vm.animationsEnabled = true;

        vm.open = function (size) {

          var modalInstance = $uibModal.open({
            animation: vm.animationsEnabled,
            templateUrl: '/templates/modal.html',
            controller: 'SearchModalCtrl',
            controllerAs: 'vm',
            size: size,
            resolve: {
              genre: function () {
                return vm.genre;
              },
              location: function($location) {
                return $location;
              }

            }
          });
        };

      vm.topArtists.forEach(function(selectedArtist) {
        sum += selectedArtist.hotttnesss;
        Spotify.search(selectedArtist.name).then(function(artist) {
          vm.artist = artist;
          vm.addArtistsSlide(vm.artist.items[0].images[0].url, vm.artist.items[0].name);
          vm.loading = false;
        });
      });

      vm.popularityRate = (sum / vm.topArtists.length) * 100; // popularity rate average

     SearchGenre.listAll(vm.genre).then(function(listOfGenres) {
       //console.log(listOfGenres);
       listOfGenres.forEach(function(genre) {
         if(genre.name.toLowerCase().indexOf(vm.genre.toLowerCase()) > -1 ) {
            SearchGenre.listArtists(genre.id).then(function(topAlbumsList) {
                vm.genreId = genre.id;
                vm.description = genre.description;
                vm.topAlbums = topAlbumsList;
                vm.topAlbums.forEach(function(album) {
                  vm.addAlbumsSlide (album.images[0].url, album.artist.name, album.name);
                });
            });
            SearchGenre.listSongs(genre.id).then(function(topSongsList) {
              vm.topSongs = topSongsList.data;
              vm.topSongs.forEach(function(song) {
                  Spotify.search(song.artist.name).then(function(artist) {
                      var imageURL = "";
                      vm.addEvents(song.artist.name);

                      if(artist.items[0] == undefined) {
                          imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else if(artist.items[0].images[0] == undefined) {
                        imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else {
                        imageURL = artist.items[0].images[0].url;
                      }
                      vm.addSongSlides(imageURL, song.artist.name, song.name);
                  });
              });
            });
         };
       });
     });

     var artistImageForEvent = "";
     vm.loaded = false;
     var aEvents = [];
     vm.addEvents = function(artist) {
       if(navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
            var bands = BandsInTown.findConcert(artist, pos);
            bands.then(function(response){
              if(response.length !== 0 && response !==null && response !== 'undefined') {
                response.forEach(function(artist) {

                  aEvents.push(artist);
                  //creating the map and setting it up to the given location: 3​0.141198, ­38.787720
                  map = new google.maps.Map(document.getElementById('map-canvas'), {
                    center: center,
                    zoom: 5
                  });
                  //console.log(artist);
                  // plot the points on Google Maps
                  addEventToMap(artist, artist.venue.latitude, artist.venue.longitude, map);
                  map.setZoom(11);

                  artist.artists.forEach(function(oneArtist) {
                    Spotify.search(oneArtist.name).then(function(element) {
                      if(element.items[0] == undefined) {
                          artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else if(element.items[0].images[0] == undefined) {
                        artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                      } else {
                        artistImageForEvent = element.items[0].images[0].url;
                      }

                      vm.loaded=true;

                      vm.addEventSlides(artistImageForEvent, element.items[0].name, artist.venue.name, artist.venue.region);
                      vm.mapLoaded = true;
                    });
                  })
                });
                aEvents = _.uniq(aEvents, 'id');;
                aEvents.forEach(function(event) {
                  addEventToMap(event, event.venue.latitude, event.venue.longitude, map);
                });
              };
            });
         });
       };
    };

     // switch the text when the
     // user hovers over the 'Popular (X)' box
     // where (X) is either artists, albums,
     // songs, or events
     vm.hover = false;
     vm.albumHover = false;
     vm.songHover = false;
     vm.eventHover = false;
     vm.infoHovered = false;
     vm.hoverAlbumIn = function() {
       vm.albumHover = true;
     };
     vm.hoverAlbumOut = function() {
      vm.albumHover= false;
    };
     vm.hoverIn = function() {
       vm.hover = true;
     };
     vm.hoverOut = function() {
       vm.hover = false;
     };
     vm.hoverSongIn = function() {
       vm.songHover = true;
     };
     vm.hoverSongOut = function() {
      vm.songHover= false;
    };
     vm.hoverEventIn = function() {
       vm.eventHover = true;
     };
     vm.hoverEventOut = function() {
      vm.eventHover= false;
    };
     vm.hoverInfoIn = function() {
       vm.infoHovered = true;
     };
     vm.hoverInfoOut = function() {
      vm.infoHovered= false;
    };

      // parameters essential for the sliders
      // to show up
      vm.myInterval = 4000;
      vm.noWrapSlides = false;
      var artistSlides = vm.artistsSlides = [];

      // add slide that contains the image and
      // name of the artist taken from API
      // call via Spotify service
      vm.addArtistsSlide = function(image, artistName) {
        artistSlides.push({
          image: image,
          name: artistName
        });
      };

      var albumSlides = vm.albumSlides = [];
      vm.addAlbumsSlide = function(image, artistName, albumName) {
        albumSlides.push({
          image: image,
          name: artistName,
          album: albumName
        });
      };

      var songSlides = vm.songSlides = [];
      vm.addSongSlides = function(image, artistName, songName) {
        songSlides.push({
          image: image,
          name: artistName,
          song: songName
        });
      };

      var eventSlides = vm.eventSlides = [];
      vm.addEventSlides = function(image, artistName, venueName, state) {
        eventSlides.push({
          image: image,
          name: artistName,
          venueName: venueName,
          state: state
        });
      };

      // implementing code for the feed
      var FIREBASE_URL = 'https://melodyclash.firebaseio.com/';
      var fireRef = new Firebase(FIREBASE_URL);

      vm.messages =  $firebaseArray(fireRef);
      vm.newMassage = '';

      vm.addMessage = function(){
        var newMessage = vm.newMessage.trim();
        if (!newMessage.length) {
            return;
        }
        // push to firebase
        vm.messages.$add({
            name: vm.username,
            message: newMessage
        });
        vm.newMessage = '';
    };


  });
