fleetLogistics.controller('loadsController', function($scope, loadsFactory){
	
  loadsFactory.index( function (data) {
    $scope.loads = data;
    console.log(data);
  });

  $scope.create = function() {
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