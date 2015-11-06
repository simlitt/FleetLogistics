fleetLogistics.factory('equipmentFactory', function($http){
	var equipmentFactory = {}

  equipmentFactory.index = function (callback) {
    $http.get('/equips').then( function (response) {
      callback(response.data);
    });
  }
	
  equipmentFactory.create = function (newEquip, callback) {
    $http.post('/equips', newEquip).then( function (response) {
      callback(response.data);
    });
  }

  equipmentFactory.show = function (id, callback) {
    $http.get('/equips/'+id).then( function (response) {
      callback(response.data);
    });
  }


	return equipmentFactory
})