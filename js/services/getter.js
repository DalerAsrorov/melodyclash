angular
  .module('app')
  .service('nameService', function() {
    var name = "";

     var setName = function(nName) {
         name = nName;
     };

     var getName = function(){
        return name;
     };

     return {
       setName: setName,
       getName: getName
     };
  });
