angular
  .module('app')
  .controller('SearchModalCtrl', function(genre, $location) {
    var vm = this;
    vm.genre = genre;
    vm.text= "";
    vm.notSubmitted = false;
    //console.log(vm.genre);

    vm.submit = function() {
      $location.path( "/clash/" + vm.genre + "/artists/" + vm.text); // direct to the page of the artist
    }

  });
