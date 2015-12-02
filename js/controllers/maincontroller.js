angular
  .module('app')
  .controller('MainCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location, $route){
    $scope.user = {};
    $scope.user.email = "";
    $scope.user.genre = "";

    $scope.emailIsEmpty = true;
    $scope.genreIsEmpty = true;

    $scope.switch = function() {
      if ($scope.user.email != "") {
          $scope.emailIsEmpty = false;
      }
      if($scope.user.genre != "") {
        $scope.genreIsEmpty = false;
      }
    }

    $scope.submit = function() {
      // check if correct
      // check if the user exists
      // if exists, show him previous searches & show him the stats page
      // if not, show him the page & store the user to the database

      console.log($scope.user); // store the user
    
      $location.path('/clash/' + $scope.user.genre.toLowerCase());

    }

 }]);
