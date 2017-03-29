angular.module('petclinicApp',['ui.router']).config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise("/home");
    
    $stateProvider.state('home',{
        url:"/home", 
        templateUrl:"template/Home.html"
    })
    .state('owners',{
        url:"/owners", 
        templateUrl:"template/Owners.html",
        controller:'Controller',
        controllerAs:"ctrl"
    })
    .state('veterinarians',{
        url:"/veterinarians", 
        templateUrl:"template/Veterinarians.html",
        controller:"vetsController",
        controllerAs:"vc"
    })
})
