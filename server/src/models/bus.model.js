const { Schema, model } = require("mongoose");

const BusSchema = new Schema({
  companyname: String,
  from: String,
  to: String,
  price: Number,
  email: String,
  phone: Number,
  aminites: Array,
  rating: Number,
  arrival: String,
  departure: String,
  seats: Array,
});

const BusModel = model("bus", BusSchema);

module.exports = BusModel;
