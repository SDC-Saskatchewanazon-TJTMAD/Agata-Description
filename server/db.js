// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "fec-product-description.c4pmomvbjj0u.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "password",
//   database: "FECDescription",
//   port: 3306
// });

// connection.connect(err => {
//   if (err) {
//     console.log("Connection error from the db.js file: ", err);
//   } else {
//     console.log("Connected to the Database!!!");
//   }
// });

// // This request sends all db data from productDescription
// const sendProductTask = (productId, callback) => {
//   connection.query(
//     `SELECT * FROM productDescription WHERE product_Id = ('${productId}');`,
//     (error, results) => {
//       console.log("This is from the db query: ", results);
//       if (error) {
//         callback(error);
//       } else {
//         callback(null, results);
//       }
//     }
//   );
// };

// module.exports = { sendProductTask };
