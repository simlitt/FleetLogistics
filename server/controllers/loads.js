var mongoose = require('mongoose');
var Load = mongoose.model('Load');
// var User = mongoose.model('User');

module.exports = {
  index: function (req, res) {
    Load.find({}, function (err, results) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(results);
      }
    });
  },
  create: function (req, res) {
    // User.findOne({_id: req.body.driver_id}, function (err, driver) {
    var load = new Load(req.body);
    // driver.loads.push(load);
    // driver.save( function (err) {
    load.save( function (err) {
      res.json(load);
    // });
    });
  },
  show: function (req, res) {
    Load.findById(req.params.id, function (err, load) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(load);
      }
    });
  },
  update: function (req, res) {
    Load.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      load: req.body.load,
      // _driver: req.body.driver_id,
      // _truck: req.body.truck_id,
      // _trailers: req.body.trailers,
      pickup_numbers: req.body.pickup_numbers,
      pickups: req.body.pickups,
      dropoffs: req.body.dropoffs,
      rate_confirmation: req.body.rate_confirmation,
      // updates: req.body.updates,
      billed: req.body.billed,
      paid: req.body.paid,
      updated_at: Date.now()
    }, function (err, load) {
      res.json(load);
    });
  },
  destroy: function (req, res) {
    Load.remove({_id: req.params.id}, function (err) {
      if (err) {
        console.log(err);
      }
      else {
        res.end();
      }
    })
  }
}