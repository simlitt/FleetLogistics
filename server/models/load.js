var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* AddressSchema and CostSchema are plain objects because
   they are not used in an array in the parent schema */
var AddressSchema = {
  street1: String,
  street2: String,
  city: String,
  state: String,
  zip_code: String
};

var PickupSchema = new Schema({
  name: String,
  datetime: Date,
  address: AddressSchema,
  commodity_description: String,
  carrier_instructions: String
});

var DropoffSchema = new Schema({
  name: String,
  datetime: Date,
  address: AddressSchema
});

var CostSchema = {
  cost: Number,
  description: String
};

var UpdateSchema = new Schema({
  location: {
    longitude: Number,
    latitude: Number
  },
  lumper: CostSchema,
  layover: CostSchema,
  detention: CostSchema,
  t_check: CostSchema,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

var LoadSchema = new Schema({
  name: String,
  number: String,
  _drivers: [{type: Schema.Types.ObjectId, ref: 'User'}],
  _trucks: [{type: Schema.Types.ObjectId, ref: 'Truck'}],
  _trailers: [{type: Schema.Types.ObjectId, ref: 'Trailer'}],
  pickup_numbers: [Number],
  pickups: [PickupSchema],
  dropoffs: [DropoffSchema],
  rate_confirmation: Number,
  updates: [UpdateSchema],
  done: Boolean,
  billed: Boolean,
  paid: Boolean,
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Load', LoadSchema);