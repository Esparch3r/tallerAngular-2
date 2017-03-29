(function(){
  var modulo = angular.module('petclinicApp')
  
  modulo.factory('Factory', factory);
    
    function factory($http){
        var owners=[{'name':'Propietario 1', 'address':'Cartuja', 'phone':'654789654','numPets':2},
                       {'name':'Propietario 2', 'address':'Cartuja', 'phone':'654789654','numPets':0},
                       {'name':'Propietario 3', 'address':'Cartuja', 'phone':'654789654','numPets':1}];
        var interfaz = {
            deleteOwners : function(index){
                return $http.delete("http://localhost:8080/owner/"+index);
            },
            
            getOwners : function(){
                return $http.get("http://localhost:8080/owner/list");
            },
            
            pushOwners : function(owner){
                return $http.post("http://localhost:8080/owner", owner)
            }
        }
        
        return interfaz;
    }
}())