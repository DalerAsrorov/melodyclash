angular
  .module('app')
  .factory('TopArtists', function($http) {
    return {
      getArtists: function(genre) {
        var base = 'http://developer.echonest.com/api/v4/genre/artists?api_key=CHHHMSBTT8PT4XGSA&format=json&results=15&bucket=hotttnesss&name=';
        var url = base + genre + '&callback=JSON_CALLBACK';
        return $http.get(url).then(function(response){
          return response.data.response.artists;
        });
      },
      getBio: function(artist) {
        artist = removeThe(artist);

        var url = "http://developer.echonest.com/api/v4/artist/biographies?api_key=CHHHMSBTT8PT4XGSA&name="
         + artist + "&format=json&results=1&start=0&license=cc-by-sa";

        function removeThe(name) {
          name = name.trim();
          var withoutThe = name;
          if (name.substring(0, 4).toLowerCase() === "the ") {
             withoutThe = withoutThe.substring(4);
          }
          return withoutThe;
        }

        return $http.get(url).then(function(response) {
          return response.data.response;
        });
      }
    };
  });
