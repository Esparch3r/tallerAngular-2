(function(){
  var modulo = angular.module('petclinicApp')
  
  modulo.factory('Factory', factory);
    
    function factory(){
        var owners=[{'name':'Propietario 1', 'address':'Cartuja', 'phone':'654789654','numPets':2},
                       {'name':'Propietario 2', 'address':'Cartuja', 'phone':'654789654','numPets':0},
                       {'name':'Propietario 3', 'address':'Cartuja', 'phone':'654789654','numPets':1}];
        var interfaz = {
            deleteOwners : function(index){
                owners.splice(index,1);
            },
            
            getOwners : function(){
                return owners;
            },
            
            pushOwners : function(name, address, phone, numpets){
                owners.push({'name':name, 'address':address,'phone':phone, 'numPets':numpets})
            }
        }
        
        return interfaz;
    }
}())