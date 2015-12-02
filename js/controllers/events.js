angular
  .module('app')
  .controller('EventsCtrl', function(genreId, genre, BandsInTown, SearchGenre, Spotify) {
    var vm = this;
    vm.genre = genre;
    vm.genreId = genreId;
    vm.arrayOfEvents = [];
    vm.eventsLoaded = false;

    var artistImageForEvent = "";
    vm.loaded = false;

    SearchGenre.listSongs(vm.genreId).then(function(topSongsList) {
      vm.topSongs = topSongsList.data;
      vm.topSongs.forEach(function(song) {
          Spotify.search(song.artist.name).then(function(artist) {
              vm.addEvents(song.artist.name);
          });
      });
    });


    var counter = 0;
    var arrayOfEvents =[];

    vm.addEvents = function(artist) {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
           var bands = BandsInTown.findConcert(artist, pos);
           bands.then(function(response){
             //console.log(response);
             if(response.length !== 0 && response !==null && response !== 'undefined') {
               response.forEach(function(artist) {
                   artist.artists.forEach(function(oneArtist) {
                     Spotify.search(oneArtist.name).then(function(element) {
                       if(element.items[0] == undefined) {
                           artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                       } else if(element.items[0].images[0] == undefined) {
                         artistImageForEvent = 'http://www.eibn.org/upload/company_directory/logos/default.png';
                       } else {
                         artistImageForEvent = element.items[0].images[0].url;
                       }
                      // console.log(artist.id);
                         arrayOfEvents.push(
                           {
                             id: artist.id,
                             artistImage: artistImageForEvent,
                             artistName: artist.artists[0].name,
                             city: artist.venue.city,
                             eventDate: artist.datetime,
                             ticketUrl: artist.ticket_url,
                             ticketStatus: artist.ticket_status,
                             venueName: artist.venue.name,
                             venueUrl: artist.venue.url,
                             state: artist.venue.region,
                           }
                         );
                     });
                   });

               });
               vm.eventsA = _.uniq(arrayOfEvents, 'id');
               vm.eventsLoaded = true;
             }
           });
        });

      }
   }

  });
