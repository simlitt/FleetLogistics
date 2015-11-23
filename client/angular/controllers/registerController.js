fleetLogistics.controller('registerController', function($scope, $location, usersFactory){

  $scope.create = function() {
    usersFactory.create($scope.newUser, function (data) {
      if(data) {
		  $location.url('/home');
	  }
    });
  }

})
