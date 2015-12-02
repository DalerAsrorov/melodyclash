angular
  .module('app')
  .controller('AlbumsCtrl', function(genre, SearchGenre) {
    vm = this;
    vm.genre = genre;

    SearchGenre.listAll(vm.genre).then(function(listOfGenres) {
      listOfGenres.forEach(function(genre) {
        if(genre.name.toLowerCase().indexOf(vm.genre.toLowerCase()) > -1 ) {
           SearchGenre.listArtists(genre.id).then(function(topAlbumsList) {
               vm.topAlbums = topAlbumsList;
           });
        }
      });
    });

  });
