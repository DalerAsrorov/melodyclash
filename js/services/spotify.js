angular
  .module('app')
  .factory('Spotify', function($http) {
    return {
      search: function(artist) {
        artist = removeThe(artist);

        var url = 'https://api.spotify.com/v1/search?q=' + artist + '&type=artist' + '&callback=JSON_CALLBACK';

        function removeThe(name) {
          name = name.trim();
          var withoutThe = name;
          if (name.substring(0, 4).toLowerCase() === "the ") {
             withoutThe = withoutThe.substring(4);
          }
          return withoutThe;
        }

        return $http({
            method: 'GET',
            url: url
          }).then(function successCallback(response) {
              return response.data.artists;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      },
      getRelatedArtists: function(artistId) {
        var url = "https://api.spotify.com/v1/artists/" + artistId + "/related-artists";

        return $http.get(url).then(function(response) {
          return response.data.artists;
        });
      },
      getAlbum: function(album) {
        var url = "https://api.spotify.com/v1/search?q=" + album + "&type=album";

        return $http.get(url).then(function(response) {
          return response.data.albums.items[0];
        });
      },
      getAlbumSongs: function(albumId) {
        var url = "https://api.spotify.com/v1/albums/" + albumId + "/tracks";

        return $http.get(url).then(function(response) {
          return response.data.items;
        });
      },
      getAlbumObject: function(albumId) {
        var url = "https://api.spotify.com/v1/albums/" + albumId;

        return $http.get(url).then(function(response) {
          return response.data;
        });
      }
    };
  });
