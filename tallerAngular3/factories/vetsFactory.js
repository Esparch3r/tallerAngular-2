(function(){
  angular.module('petclinicApp').factory('vetsFactory', vetsFactory)
  
  function vetsFactory($http){
      var interfaz = {
          getVets: function(){
              return $http.get('http://localhost:8080/vets');
          }
      }
      return interfaz;
  }
}())