fleetLogistics.controller('equipmentController', function($scope, $location, equipmentFactory){

  equipmentFactory.index( function (data) {
    $scope.equips = data;
    $scope.trucks = [];
    $scope.trailers = [];
    for (var i = 0; i<data.length; i++) {
        if (data[i].__t == "Truck") {
            $scope.trucks.push(data[i]);
        } else {
            $scope.trailers.push(data[i]);
        }
    }
    console.log("Trucks: ", $scope.trucks);
    console.log("Trailes: ", $scope.trailers);
  });

  $scope.newEquip = {
    type: "Truck"
  };

  $scope.create = function() {
    // console.log($scope.newEquip);
    equipmentFactory.create($scope.newEquip, function (data) {
    //   $scope.equips.push(data);
    //   $scope.equip = data;
     $location.url('/equipment');
    });
  }

  $scope.show = function (id) {
    equipmentFactory.show(id, function (data) {
      $scope.equip = data;
    })
  }

  $scope.select = function(equipment) {
      $scope.selected = equipment;
  }

})
