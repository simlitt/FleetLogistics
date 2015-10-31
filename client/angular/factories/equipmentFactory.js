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

	return equipmentFactory
})