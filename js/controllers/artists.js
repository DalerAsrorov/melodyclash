angular
  .module('app')
  .controller('ArtistsCtrl', function(TopArtists, Spotify, genre, Locator) {
    var vm = this;
    vm.images = [];
    var imageURL = "";
    var genre = genre;
    vm.genre = genre.genre;

    var artists = TopArtists.getArtists(genre.genre);
    artists.then(function(response) {
        vm.artists = response;
        vm.artists.forEach(function(artist) {
          Spotify.search(artist.name).then(function(artistS) {
              if(artistS.items[0] == undefined) {
                  imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
              } else if(artistS.items[0].images[0] == undefined) {
                imageURL = 'http://www.eibn.org/upload/company_directory/logos/default.png';
              } else {
                imageURL = artistS.items[0].images[0].url;
              }
              artist.image = imageURL;
          });
        });
    });

  });
