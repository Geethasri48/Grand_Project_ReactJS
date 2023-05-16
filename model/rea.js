const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  num1: {
    type: Number,
    require: true,
  },
  dat: {
    type: String,
    require: true,
  },
  com: {
    type: String,
    require: true,
  },
  rem: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("reapair", bookSchema);