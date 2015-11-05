var mongoose = require('mongoose');
var Equipment = mongoose.model('Equipment');
var Truck = Equipment.discriminator('Truck', new mongoose.Schema());
var Trailer = Equipment.discriminator('Trailer', new mongoose.Schema());

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
    var equip;
    switch (req.body.type) {
      case 'Truck':
        equip = new Truck(req.body);
        break;
      case 'Trailer':
        equip = new Trailer(req.body);
        break;
      // if not truck or trailer, make basic equipment!
      default:
        console.log('not a truck or trailer... making an equipment');
        equip = new Equipment(req.body);
        break;
      }
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