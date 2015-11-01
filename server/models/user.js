var mongoose = require('mongoose');
// var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  // role: String,
  first_name: String,
  last_name: String,
  dob: Date,
  username: String,
  email: String,
  password: String,
  loads: [{type: Schema.Types.ObjectId, ref: 'Load'}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

// UserSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(), null);
// };

// UserSchema.methods.authenticate = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

mongoose.model('User', UserSchema);