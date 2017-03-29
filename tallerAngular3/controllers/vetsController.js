(function(){
    angular.module('petclinicApp').controller('vetsController', vetsController)
    
    function vetsController(vetsFactory){
        var vc = this;
        
        vc.vets = [];
        
        vetsFactory.getVets().then(function(res){
            console.log(res.data)
            vc.vets=res.data;
        },function(res){
            console.log('casca')
        })
    }
}())