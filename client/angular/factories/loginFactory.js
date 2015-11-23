fleetLogistics.factory('loginFactory', function($http){
	var loginFactory = {};

	loginFactory.login = function (user, callback) {
		$http.post('/login', user).then(function(response){
			callback(response.data);
		})
	}

	return loginFactory;
})
