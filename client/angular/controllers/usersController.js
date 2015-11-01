fleetLogistics.controller('usersController', function($scope, usersFactory){
  
  usersFactory.index( function (data) {
    $scope.users = data;
    console.log(data);
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
})