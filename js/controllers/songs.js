angular
  .module('app')
  .controller('SongsCtrl', function(genreId, genre, SearchGenre, Spotify, ngAudio) {
    var vm = this;
    vm.genre = genre;
    vm.genreId = genreId;
    vm.sound = [];

    SearchGenre.listSongs(vm.genreId).then(function(topSongsList) {
      vm.topSongs = topSongsList.data;
      console.log(vm.topSongs);

      vm.topSongs.forEach(function(song) {
        vm.sound.push(ngAudio.load(song.sample));
      });

      for(var i = 0; i < vm.sound.length; i++) {
          vm.sound[i].artist = vm.topSongs[i].artist.name;
          vm.sound[i].album = vm.topSongs[i].album.name;
          vm.sound[i].name = vm.topSongs[i].name;
      }
    });


  });
