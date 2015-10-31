fleetLogistics.factory('loadsFactory', function($http){
	var loadsFactory = {}

  loadsFactory.index = function (callback) {
    $http.get('/loads').then( function (response) {
      callback(response.data);
    });
  }
  
  loadsFactory.create = function (newLoad, callback) {
    $http.post('/loads', newLoad).then( function (response) {
      callback(response.data);
    });
  }

  loadsFactory.show = function (id, callback) {
    $http.get('/loads/'+id).then( function (response) {
      callback(response.data);
    });
  }

	return loadsFactory
})

