const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/sdc-description", {
  useNewUrlParser: true
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database!"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
