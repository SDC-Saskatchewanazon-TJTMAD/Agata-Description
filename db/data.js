const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    productName: String,
    productDescription: String,
    price: Number,
    category_id: Number,
    rating: Number
  },
  { collection: "description" }
);

module.exports = mongoose.model("Data", DataSchema);
