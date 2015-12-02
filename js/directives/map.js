angular
  .module('app')
  .directive('map', function() {
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/map.html',
      // isolate scope
      scope: {
        map: '='
      },
      link: function($scope) {
      

        // var plotPoints = function(locObj) {
        // 	var myLatlng = new google.maps.LatLng(parseFloat(locObj.lat),parseFloat(locObj.lon));
        // 	//created the new marker with animation and custom icon
        // 	var marker = new google.maps.Marker({
        // 		position: myLatlng,
        // 		map: map,
        // 		animation: google.maps.Animation.DROP
        // 	});
        //
        // }; // end of plotPoints method
        //
        // $scope.listOfEvents.forEach(function(event) {
        //   $scope.locationObj = Location.getLocation(event); //getting the location object
        //   plotPoints($scope.locationObj);
        //   console.log(event.venue_address);
        //   map.setZoom(3);
        // });


      }
    };
  });
