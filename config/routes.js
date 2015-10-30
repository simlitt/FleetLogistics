var loads = require('../server/controllers/loads');
var users = require('../server/controllers/users');
var equips = require('../server/controllers/equipments');

module.exports = function(app) {
	app.get('/', function (req, res) {
    res.render('index.html');
  });

  app.route('/loads')
  .get( function (req, res) {
    loads.index(req, res);
  })
  .post( function (req, res) {
    loads.create(req, res);
  });

  app.route('/loads/:id')
  .get( function (req, res) {
    loads.show(req, res);
  })
  .put( function (req, res) {
    loads.update(req, res);
  })
  .delete( function (req, res) {
    loads.destroy(req, res);
  });

  app.route('/users')
  .get( function (req, res) {
    users.index(req, res);
  })
  .post( function (req, res) {
    users.create(req, res);
  });

  app.route('/users/:id')
  .get( function (req, res) {
    users.show(req, res);
  })
  .put( function (req, res) {
    users.update(req, res);
  })
  .delete( function (req, res) {
    users.destroy(req, res);
  });

  app.route('/equips')
  .get( function (req, res) {
    equips.index(req, res);
  })
  .post( function (req, res) {
    equips.create(req, res);
  });

  app.route('/equips/:id')
  .get( function (req, res) {
    equips.show(req, res);
  })
  // .put( function (req, res) {
  //   equips.update(req, res);
  // })
  .delete( function (req, res) {
    equips.destroy(req, res);
  });
}