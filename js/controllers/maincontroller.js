angular
  .module('app')
  .controller('MainCtrl', ['$scope', '$mdSidenav', '$location', '$route', 'nameService', function($scope, $mdSidenav, $location, $route, nameService){
    $scope.user = {};
    $scope.user.name = "";
    $scope.user.genre = "";
    $scope.website = "http://www-scf.usc.edu/~asrorov/";
    $scope.nameIsEmpty = true;
    $scope.genreIsEmpty = true;

    $scope.switch = function() {
      if ($scope.user.name != "") {
          $scope.nameIsEmpty = false;
      }
      if($scope.user.genre != "") {
        $scope.genreIsEmpty = false;
      }
    }

    $scope.submit = function() {
      localStorage.clear(); // removing all the previous user names
      nameService.setName($scope.user.name);
      localStorage.setItem('username', $scope.user.name);
      $location.path('/clash/' + $scope.user.genre.toLowerCase());
    }

 }]);
