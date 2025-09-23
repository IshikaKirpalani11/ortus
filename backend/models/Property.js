const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: String,
  type: String,        // "buy" or "rent"
  location: String,
  bedrooms: Number,
  bathrooms: Number,
  size: Number,
  description: String,
  images: [String]
});

module.exports = mongoose.model("Property", propertySchema);
