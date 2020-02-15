const express = require("express");
var cors = require("cors");
const app = express();
const port = 8081; // updated from 3000
const path = require("path");
const db = require("../db/index.js");
//const db = require("../db/postgres.js");
//const db = require("./db.js");
const bodyParser = require("body-parser");
const Data = require("../db/data.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// This line is necessary to render React files
app.use(express.static(path.join(__dirname, "/../client/dist")));

// get request using sendProductTask
// app.get("/products/:productId", (req, res) => {
//   // const productId = req.params.productId;
//   // db.sendProductTask(productId, (err, results) => {
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     res.send(results);
//   //     res.end();
//   //   }
//   // });
//   console.log("hello");
// });

app.get("/description", (req, res) => {
  Data.findOne({ rating: 2 }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      console.log("data" + data);
      res.send(data);
    }
  });
});

// app.get("/description", (req, res) => {
//   db.getDescriptionInfo((err, data) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
