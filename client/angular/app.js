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
        .when('/addEquipment', {
            templateUrl: 'partials/addEquipment.html'
        })
        .when('/addLoad', {
            templateUrl: 'partials/addLoad.html'
        })
        .when('/test', {
            templateUrl: 'partials/test.html'
        })
        .when('/register', {
            templateUrl: 'partials/register.html'
        })
        .when('/login', {
            templateUrl: 'partials/login.html'
        })
        .when('/drivers', {
            templateUrl: 'partials/drivers.html'
        })
        .when('/addDriver', {
            templateUrl: 'partials/addDriver.html'
        })
        .when('/home', {
            templateUrl: 'partials/home.html',
            resolve: {
                loggedin: checkLoggedin
            }
        })
        .otherwise({
          redirectTo: '/'
        });
    });


    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user){

        if (user !== false) {
            // Authenticated
            deferred.resolve();
        } else {
            // Not authenticated
            deferred.reject();
            $location.url('/login');
        }
      });

      return deferred.promise;
    };
