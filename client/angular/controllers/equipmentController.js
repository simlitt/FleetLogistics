fleetLogistics.controller('equipmentController', function($scope, equipmentFactory){

  equipmentFactory.index( function (data) {
    $scope.equips = data;
  });

  $scope.newEquip = {
    type: "Truck"
  };

  $scope.create = function() {
    // console.log($scope.newEquip);
    equipmentFactory.create($scope.newEquip, function (data) {
      $scope.equips.push(data);
      $scope.equip = data;
    });
  }

  $scope.show = function (id) {
    equipmentFactory.show(id, function (data) {
      $scope.equip = data;
    })
  }
})