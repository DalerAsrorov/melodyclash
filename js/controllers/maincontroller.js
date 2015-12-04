angular
  .module('app')
  .controller('MainCtrl', ['$scope', '$mdSidenav', '$location', '$route', 'nameService', function($scope, $mdSidenav, $location, $route, nameService){
    $scope.user = {};
    $scope.user.name = "";
    $scope.user.genre = "";

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
      nameService.setName($scope.user.name);
      $location.path('/clash/' + $scope.user.genre.toLowerCase());
    }

 }]);
