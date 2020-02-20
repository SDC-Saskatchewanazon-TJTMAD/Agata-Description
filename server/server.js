const express = require("express");
var cors = require("cors");
const app = express();
const port = 8081;
const path = require("path");
const db = require("../db/index.js"); //mongoDB
//const db = require("../db/postgres.js"); //postgres
//const db = require("./db.js");            //mysql
const bodyParser = require("body-parser");
const Data = require("../db/data.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../client/dist")));

//GET request for MongoDB
app.get("/description", (req, res) => {
  console.log(req.query.listing_id);
  Data.findOne({ _id: req.query.listing_id }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

//GET request for POSTGRESQL
// app.get("/description", (req, res) => {
//   console.log(req.query.listing_id);
//   const productId = req.query.listing_id;
//   db.getDescriptionInfo(productId, (err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       console.log(data);
//       res.send(data);
//     }
//   });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
