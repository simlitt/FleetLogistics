//this creates the angular application
//  inject the ngRoute dependency in the module.
    var fleetLogistics = angular.module('fleetLogistics', ['ngRoute']);
    //  use the config method to set up routing:
    fleetLogistics.config(function ($routeProvider) {

      $routeProvider
        .when('/',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/loads',{
            templateUrl: 'partials/loads.html'
        })
        .when('/equipment', {
            templateUrl: 'partials/equipment.html'
        })
        .when('/addLoad', {
            templateUrl: 'partials/addLoad.html'
        })
        
        .otherwise({
          redirectTo: '/'
        });
    });