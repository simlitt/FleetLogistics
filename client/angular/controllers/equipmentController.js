fleetLogistics.controller('equipmentController', function($scope, equipmentFactory){
	console.log('equipController loaded');

  equipmentFactory.index( function (data) {
    $scope.equips = data;
    console.log($scope.equips);
  });

  $scope.create = function() {
    // console.log($scope.newEquip);
    equipmentFactory.create($scope.newEquip, function (data) {
      console.log('back to equipController');
      $scope.equips.push(data);
    });
  }
})