angular
  .module('app')
  .controller('ArtistCtrl', function(genre, artist, iTunes, Spotify, ngAudio, TopArtists) {
    vm = this;
    vm.genre = genre;
    vm.artistName = artist;
    vm.arrayOfSongs = [];
    vm.artistImageURL;
    vm.noVideos = false;
    vm.songsCollection = [];
    vm.songsLoaded = false;
    vm.sound = [];
    vm.relatedAritsts = [];
    vm.bio = "";
    vm.bioMore = "";

    vm.isOpen = false;
    vm.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'right'
    };


    TopArtists.getBio(vm.artistName).then(function(response) {
      vm.bio = response.biographies[0].text;
      vm.bioMore = response.biographies[0].url;
    });

    Spotify.search(vm.artistName).then(function(artist) {
      vm.artist = artist;
      vm.artistImageURL = vm.artist.items[0].images[0].url;
      var artistID = vm.artist.items[0].id;
      Spotify.getRelatedArtists(artistID).then(function(relatedAritsts) {
        vm.relatedAritsts = relatedAritsts;
      })
    });

    iTunes.search(vm.artistName).then(function(response) {
      vm.arrayOfSongs = response;
      vm.arrayOfSongs.forEach(function(element) {
        //console.log(element);
        vm.songsCollection.push(element.previewUrl);
      });

      vm.songsCollection.forEach(function(song) {
        vm.sound.push( ngAudio.load(song));
      });

      for(var i = 0; i < vm.sound.length; i++) {
          vm.sound[i].songName = vm.arrayOfSongs[i].trackName;
          vm.sound[i].songURL = vm.arrayOfSongs[i].trackViewUrl;
      }
      vm.songsLoaded= true;
    });


    iTunes.getAlbums(vm.artistName).then(function(response){
      //console.log(response);
    });

    vm.example = "http://a894.phobos.apple.com/us/r30/Music/v4/99/50/68/99506859-ae4e-c907-fda8-72bd53287559/mzaf_3309707875668504896.aac.m4a";

    iTunes.getVideos(vm.artistName).then(function(response){
      if(response.length !== 0 && response !== 'undefined' && response !== null) {

      } else {
        vm.noVideos = true;
      }
    })

    /* JQuery for the arrows */

    // Right arrow
    $("#to-the-right").click(function() {
      var leftPos = $('.video-section').scrollLeft();
      $(".video-section").animate({scrollLeft: leftPos + 350}, 350);
    });

    //Left arrow
    $("#to-the-left").click(function() {
      var leftPos = $('.video-section').scrollLeft();
      $(".video-section").animate({scrollLeft: leftPos - 350}, 350);
    });
  });
