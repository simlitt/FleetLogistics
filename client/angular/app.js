//this creates the angular application
//  inject the ngRoute dependency in the module.
    var fleetLogistics = angular.module('fleetLogistics', ['ngRoute']);
    //  use the config method to set up routing:
    fleetLogistics.config(function ($routeProvider) {

      $routeProvider
        .when('/', {
            templateUrl: 'partials/dashboard.html'
        })
        .when('/loads', {
            templateUrl: 'partials/loads.html'
        })
        .when('/equipment', {
            templateUrl: 'partials/equipment.html'
        })
<<<<<<< HEAD
        .when('/addLoad', {
            templateUrl: 'partials/addLoad.html'
        })
        
=======
        .when('/test', {
            templateUrl: 'partials/test.html'
        })
>>>>>>> 3de3b29258020e981862081e1d05c9402a42d8e4
        .otherwise({
          redirectTo: '/'
        });
    });