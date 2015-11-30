fleetLogistics.controller('driversController', function($scope, $location, usersFactory){

  usersFactory.index( function (data) {
	$scope.drivers = [];
	for (var i=0; i<data.length; i++) {
		if (data[i].email == "driver@driver.com") {
			$scope.drivers.push(data[i]);
		}
	}
    console.log($scope.drivers);
  });

  $scope.create = function() {
    usersFactory.create($scope.newUser, function (data) {
      $scope.users.push(data);
      $scope.user = data;
    });
  }

  $scope.show = function (id) {
    usersFactory.show(id, function (data) {
      $scope.user = data;
    })
  }

  $scope.update = function() {
    usersFactory.update($scope.user, function (data) {
      $scope.users.push(data);
      $scope.user = data;
    });
  }

  $scope.destroy = function () {
    console.log('ng-controller destroy')
    usersFactory.destroy($scope.user._id, function () {
      $scope.user = undefined;
    })
  }

  $scope.createDriver = function() {
      $scope.newUser.email = "driver@driver.com";
      $scope.newUser.password = "password";
    usersFactory.create($scope.newUser, function (data) {
      $location.url('drivers')
    });
  }

})
