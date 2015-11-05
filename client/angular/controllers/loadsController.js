fleetLogistics.controller('loadsController', function($scope, loadsFactory, usersFactory, equipmentFactory){
	
  usersFactory.index( function (data) {
    $scope.drivers = data;
  });

  equipmentFactory.index( function (data) {
    $scope.trucks = data.filter( function (equip) {
      return equip.__t == "Truck";
    });
    $scope.trailers = data.filter( function (equip) {
      return equip.__t == "Trailer";
    });
  });

  loadsFactory.index( function (data) {
    $scope.loads = data;
  });

  $scope.newLoad = {
    _drivers: [],
    _trucks: [],
    _trailers: [],
    pickup_numbers: [],
    pickups: [],
    dropoffs: []
  }

  $scope.create = function() {
    console.log($scope.newLoad);
    loadsFactory.create($scope.newLoad, function (data) {
      $scope.loads.push(data);
      $scope.load = data;
    });
  }

  $scope.show = function (id) {
    loadsFactory.show(id, function (data) {
      $scope.load = data;
    })
  }
})