fleetLogistics.controller('loginController', function($scope, $location, loginFactory){

	$scope.login = function(){
		loginFactory.login($scope.user, function(data) {
			if(data.login){
				$location.url("/home");
			}
		})
	}

})
