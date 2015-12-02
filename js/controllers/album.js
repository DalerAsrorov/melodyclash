angular
  .module('app')
  .controller('AlbumCtrl', function(album, genre, SearchGenre, Spotify, ngAudio) {
    var vm = this;
    vm.album = album;
    vm.albumObj = {};
    vm.genre = genre;
    vm.albumId;
    vm.songs = [];
    vm.sound = [];
    vm.linkToAlbum = "";

    Spotify.getAlbum(vm.album).then(function(album) {
        vm.albumObj = album;
        //console.log(album);
        vm.albumId = album.id;
        Spotify.getAlbumSongs(vm.albumId).then(function(songs){
          vm.artistName = songs[0].artists[0].name;
          vm.songs = songs;
          vm.songs.forEach(function(song) {
            vm.sound.push(ngAudio.load(song.preview_url));
          })

          for(var i = 0; i < vm.sound.length; i++) {
              vm.sound[i].name = vm.songs[i].name;
              vm.sound[i].songURL = vm.songs[i].external_urls.spotify;
          }

          Spotify.getAlbumObject(vm.albumId).then(function(data) {
            vm.releaseDate = data.release_date;
            vm.linkToAlbum = data.external_urls.spotify;
          });
        });
    });


  });
