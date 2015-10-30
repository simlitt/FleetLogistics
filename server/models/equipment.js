var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EquipmentSchema = new Schema({
  number: Number,
  model: String,
  year: String
  // breakdowns: {type: Schema.Types.ObjectId, ref: 'Breakdown'}
});

var Equipment = mongoose.model('Equipment', EquipmentSchema);

var options = new Schema({ discriminatorKey: 'type'});
Equipment.discriminator('Truck', options);
Equipment.discriminator('Trailer', options);