var mongoose = require('mongoose');
var Load = mongoose.model('Load');
var User = mongoose.model('User');

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
    // create the load
    var load = new Load(req.body);
    load.done = false;
    load.billed = false;
    load.paid = false;
    load.save( function (err) {
      // find all drivers for this load
      User.find({_id: { $in: req.body.driver_ids} }, function (err, drivers) {
        for (var i = 0; i < drivers.length; i++) {
          drivers[i].loads.push(load);
          // save this load to each driver
          drivers[i].save( function (err) {
            if (err) {
              console.log(err);
            }
            console.log('driver saved');
          });
        }
        // process.nextTick( function () )
        console.log('sending response');
        res.json(load);
      });      
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
      _driver: req.body.driver_id,
      // _truck: req.body.truck_id,
      // _trailers: req.body.trailers,
      pickup_numbers: req.body.pickup_numbers,
      pickups: req.body.pickups,
      dropoffs: req.body.dropoffs,
      rate_confirmation: req.body.rate_confirmation,
      // Updates will be handled separately by the driver only?
      // updates: req.body.updates,
      billed: req.body.billed,
      paid: req.body.paid,
      updated_at: Date.now()
      // { new: true } passes the newly updated load info to the callback
    }, { new: true }, function (err, load) {
      res.json(load);
    });
  },
  destroy: function (req, res) {
    // find the load and remove it
    Load.findByIdAndRemove(req.params.id, function (err, load) {
      if (err) {
        console.log(err);
      }
      else {
        // if removing the load is successful, findthe drivers this load belongs to
        User.find({_id: { $in: load._driver } }, function (err, drivers) {
          if (err) {
            console.log(err);
          }
          else {
            // remove the load from each driver's loads
            for (var i = 0; i < drivers.length; i++) {
              driver.loads.id(load._id).remove();
              driver.save( function (err) {
                if (err) {
                  console.log(err);
                }
                console.log('driver saved');
              });        
            }
            // process.nextTick( function () )
            console.log('sending response');
            res.end();
          }
        });
      }
    });
  }
}