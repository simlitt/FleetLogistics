var mongoose = require('mongoose');
var Breakdown = mongoose.model('Breakdown');
var Equipment = mongoose.model('Equipment');

module.exports = {
  create: function (req, res) {
    Equipment.findById(req.body.equip_id, function (err, equip) {
      if (err) {
        console.log(err);
      }
      else {
        var bd = new Breakdown(req.body);
        equip.breakdowns.push(bd);
        bd.save( function (err) {
          equip.save( function (err) {
            if (err) {
              console.log(err);
            }
            res.end();
          });
        });
      }
    });
  }
}