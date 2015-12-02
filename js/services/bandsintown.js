angular
  .module('app')
  .factory('BandsInTown', function($http) {
    return {
      findConcert: function(artist, loc) {
        //console.log(loc.lat + ", " + loc.lng);

        var url = 'http://api.bandsintown.com/events/recommended?artists[]=' +
          artist + '&location=' + loc.lat + "," + loc.lng + '&radius=15&format=json&app_id=melodyclash&callback=JSON_CALLBACK';
        return $http.jsonp(url).then(function(response) {
           return response.data;
        });
      }
    };
  });
