(function(){
   var modulo = angular.module('petclinicApp'); 
    
    modulo.controller('Controller', ctrl);
    
    function ctrl(Factory){
    var ctrller = this;
    ctrller.filtro='';
   
    ctrller.deleteOwners = function(index, owner){
        console.log(index)
        Factory.deleteOwners(index).then(function(res){
            ctrller.getOwners.splice(ctrller.getOwners.indexOf(owner), 1);
        },function(res){
            console.log("casca")
        });
    }
        
    Factory.getOwners().then(function(res){
        ctrller.getOwners = res.data;
    },function(res){
        console.log("casca")
    });
        
    ctrller.addOwner = function(){
        var owner = {
            "firstName": "Eduardo",
            "lastName": "Rodriquez",
            "address": "2693 Commerce St.",
            "city": "McFarland",
            "telephone": "6085558763",
            "pets": [],
            "new": false
            };
        
        Factory.pushOwners(owner).then(function(res){
                ctrller.getOwners.push(res.data)
            }, function(res){
                console.log("casca") 
            });
    }
    }
}())