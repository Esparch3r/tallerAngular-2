(function(){
   var modulo = angular.module('petclinicApp'); 
    
    modulo.controller('Controller', ctrl);
    
    function ctrl(Factory){
    var ctrller = this;
    ctrller.filtro='';
   
    ctrller.deleteOwners = function(index){
        Factory.deleteOwners(index);
    }
        
    ctrller.getOwners = Factory.getOwners();
        
    ctrller.addOwner = function(name, address, phone, numpets){
        Factory.pushOwners(name, address, phone, numpets);
    }
    }
}())