fleetLogistics.factory('usersFactory', function($http){
  var usersFactory = {}

  usersFactory.index = function (callback) {
    $http.get('/users').then( function (response) {
      callback(response.data);
    });
  }
  
  usersFactory.create = function (newUser, callback) {
    $http.post('/users', newUser).then( function (response) {
      callback(response.data);
    });
  }  

  usersFactory.show = function (id, callback) {
    $http.get('/users/'+id).then( function (response) {
      callback(response.data);
    });
  }

  usersFactory.update = function (user, callback) {
    $http.put('/users/'+user._id, user).then( function (response) {
      callback(response.data);
    });
  }

  usersFactory.destroy = function (id, callback) {
    $http.delete('/users/'+id).then( function () {
      callback();
    });
  }

  return usersFactory
})

