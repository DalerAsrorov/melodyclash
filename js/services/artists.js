angular
  .module('app')
  .factory('iTunes', function($http) {
    return {
      search: function(artist) {
        var url = 'https://itunes.apple.com/search?term='+ artist +'&callback=JSON_CALLBACK';
        return $http.jsonp(url).then(function(response) {
           return response.data.results;
        });
      },
      getAlbums: function(artist) {
        var url = 'https://itunes.apple.com/search?term=' + artist + '&entity=album&callback=JSON_CALLBACK';
        return $http.jsonp(url).then(function(response) {
           return response.data.results;
        });
      },
      getVideos: function(artist) {
        var url = 'https://itunes.apple.com/search?term=' + artist + '&entity=musicVideo&callback=JSON_CALLBACK';
        return $http.jsonp(url).then(function(response) {
           return response.data.results;
        });
      }
    };
  });
