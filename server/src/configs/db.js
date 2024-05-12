const mongoose = require("mongoose");

let connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/bus");
};

module.exports= connect;


