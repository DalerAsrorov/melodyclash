angular
  .module('app')
  .factory('SearchGenre', function($http) {
    return {
      listAll: function (genreInput) {
        var url = 'http://api.rhapsody.com/v1/genres?apikey=FF3m3Ux0fES32FFvc08QMY1xRH6XGOgn&callback=JSON_CALLBACK';
        var arrayOfGenres = [];

        return $http({
            method: 'GET',
            url: url
          }).then(function (response) {
              return response.data;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      },
      listArtists: function(genreId) {
        var url = 'http://api.rhapsody.com/v1/genres/' + genreId + '/albums/top?apikey=FF3m3Ux0fES32FFvc08QMY1xRH6XGOgn&callback=JSON_CALLBACK';

        return $http({
            method: 'GET',
            url: url
          }).then(function (response) {
              return response.data;
            }, function errorCallback(response) {
              console.log("Error loading artists from spotify: " + response);
          });
      },
      listSongs: function(genreId) {
        var url = 'http://api.rhapsody.com/v1/genres/' + genreId + '/tracks/top?apikey=FF3m3Ux0fES32FFvc08QMY1xRH6XGOgn&callback=JSON_CALLBACK';

        return $http.get(url)
          .success(function(response) {
              return response.data;
          })
          .error(function(data, status, headers) {
              console.log("error loading the top tracks by genre");
          });

      }
    }
  });
