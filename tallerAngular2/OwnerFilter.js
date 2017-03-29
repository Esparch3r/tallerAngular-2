(function(){
  var modulo = angular.module('petclinicApp');
    
    modulo.filter('Telefono', telefonoFilter);
    
    function telefonoFilter(){
        return function(input){
            var array = [];
            for(var i=0; i<input.length; i+=3){
                array.push(input.substring(i,i+3));
            }
            return array.join(" ");
        }
    }
}())