var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BreakdownSchema = new Schema({
  cost: Number,
  description: String,
  equip: {type: Schema.Types.ObjectId, ref: 'Equipment'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

mongoose.model('Breakdown', BreakdownSchema);