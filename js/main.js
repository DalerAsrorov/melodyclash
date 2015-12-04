angular
  .module('app', ['ngRoute','ngMaterial', 'ngMdIcons', 'ui.bootstrap',  'ngAnimate', 'ngAudio', 'firebase'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html',
        controller: 'MainCtrl'
      })
      .when('/clash/:genre', {
        templateUrl: '/templates/clash.html',
        controller: 'ClashCtrl',
        controllerAs: 'vm',
        resolve: {
          artists: function($route, $http, $location) {
            var genre = $route.current.pathParams.genre;
            var base = 'http://developer.echonest.com/api/v4/genre/artists?api_key=CHHHMSBTT8PT4XGSA&format=json&results=15&bucket=hotttnesss&name=';
            var url = base + genre + '&callback=JSON_CALLBACK';

            return $http.get(url).then(function(response){
              return response.data.response;
            }, function() {
              $location.path('/search');
            });
          },
          genre: function($route, $http, $location) {
            var genre = $route.current.pathParams.genre;
            return genre;
          },
          iTunes: function(iTunes) {
            return iTunes;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          },
          location: function($location) {
            return $location;
          },
          BandsInTown: function(BandsInTown) {
            return BandsInTown;
          }
        }
      })
      .when('/clash/:genre/artists', {
          templateUrl: '/templates/artists.html',
          controller: 'ArtistsCtrl',
          controllerAs: 'vm',
          resolve: {
            TopArtists: function(TopArtists) {
              return TopArtists;
            },
            Spotify: function(Spotify) {
              return Spotify;
            },
            genre: function($route, $http, $location) {
              return $route.current.pathParams;
            },
            Locator: function(Locator) {
              return Locator;
            }
          }
      })
      .when ('/clash/:genre/artists/:artist', {
        templateUrl: '/templates/artist.html',
        controller: 'ArtistCtrl',
        controllerAs: 'vm',
        resolve: {
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          artist: function($route, $http, $location) {
            return $route.current.pathParams.artist;
          },
          iTunes: function(iTunes) {
            return iTunes;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          ngAudio: function(ngAudio) {
            return ngAudio;
          },
          TopArtists: function(TopArtists) {
            return TopArtists;
          }
        }
      })
      .when('/clash/:genre/albums', {
        templateUrl: '/templates/albums.html',
        controller: 'AlbumsCtrl',
        controllerAs: 'vm',
        resolve: {
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          }
        }
      })
      .when('/clash/:genre/albums/:album', {
        templateUrl: '/templates/album.html',
        controller: 'AlbumCtrl',
        controllerAs: 'vm',
        resolve: {
          album: function($route, $http, $location) {
            return $route.current.pathParams.album;
          },
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          ngAudio: function(ngAudio) {
            return ngAudio;
          }
        }
      })
      .when('/clash/:genre/songs/:genreId', {
        templateUrl: '/templates/songs.html',
        controller: 'SongsCtrl',
        controllerAs: 'vm',
        resolve: {
          genreId: function($route, $http, $location) {
            return $route.current.pathParams.genreId;
          },
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          },
          Spotify: function(Spotify) {
            return Spotify;
          },
          ngAudio: function(ngAudio) {
            return ngAudio;
          }
        }
      })
      .when('/clash/:genre/events/:genreId', {
        templateUrl: '/templates/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'vm',
        resolve: {
          genreId: function($route, $http, $location) {
            return $route.current.pathParams.genreId;
          },
          genre: function($route, $http, $location) {
            return $route.current.pathParams.genre;
          },
          BandsInTown: function(BandsInTown) {
            return BandsInTown;
          },
          SearchGenre: function(SearchGenre) {
            return SearchGenre;
          },
          Spotify: function(Spotify) {
            return Spotify;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
