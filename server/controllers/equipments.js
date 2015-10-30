var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');

module.exports = {
  index: function (req, res) {
    Equipment.find({}, function (err, equips) {
      if (err) {
        console.log(err);
      }
      res.json(equips);
    });
  },
  create: function (req, res) {
    var equip = new Equipment(req.body);
    equip.save( function (err) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(equip);
      }
    });
  },
  show: function (req, res) {
    Equipment.findById(req.params.id, function (err, equip) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(equip);
      }
    });
  },
  destroy: function (req, res) {
    /* Do soft deletes for drivers (need to add an attribute to schema)
       Expect that shipments will not be deleted when driver is "destroyed" */
    // Equipment.remove({_id: req.params.id}, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     res.end();
    //   }
    // });
    res.end();
  }
}