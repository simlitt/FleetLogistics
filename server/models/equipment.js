var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
  number: String,
  model: String,
  year: String,
  breakdowns: [{type: Schema.Types.ObjectId, ref: 'Breakdown'}],
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var Equipment = mongoose.model('Equipment', EquipmentSchema);
Equipment.discriminator('Truck', new Schema());
Equipment.discriminator('Trailer', new Schema());