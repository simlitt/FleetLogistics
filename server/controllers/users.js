var mongoose = require('mongoose');
var User = mongoose.model('User');
var Load = mongoose.model('Load');

module.exports = {
  index: function (req, res) {
    User.find({}, function (err, results) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(results);
      }
    });
  },
  create: function (req, res) {
    var user = new User(req.body);
    user.save( function (err) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(user);
      }
    });
  },
  show: function (req, res) {
    User.findById(req.params.id, function (err, user) {
      if (err) {
        console.log(err);
      }
      else {
        res.json(user);
      }
    });
  },
  update: function (req, res) {
    User.findByIdAndUpdate(req.params.id, {
      role: req.body.role,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      dob: req.body.dob,
      username: req.body.username,
      /* We probably need another mechanism for handling 
         email and password updates because they are sensitive */
      // email: req.body.email,
      // password: req.body.password,
      updated_at: Date.now()
    }, { new: true }, function (err, user) {
      res.json(user);
    });
  },
  destroy: function (req, res) {
    /* Do soft deletes for drivers (need to add an attribute to schema)
       Expect that shipments will not be deleted when driver is "destroyed" */
    // User.remove({_id: req.params.id}, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   else {
    //     res.end();
    //   }
    // });
    res.end()
  }
}