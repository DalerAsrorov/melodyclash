describe('ClashCtrl', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.submit()', function() {
    it('Sets the name of the artist ', function() {
       var $scope = {};
       vm = this;
       var genre = "rock";
       $location = "/clash/" + genre;
       var obj = {"name" : "LP"};
       $scope.name = "LP";
       var controller = $controller('SearchModalCtrl', { vm: vm, genre: genre, $location: $location });
       expect($scope.name).toEqual(obj.name);
    });
  });
});
