const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "sdc-description",
  password: "pizmak",
  port: 5432
});

client.connect();

const getDescriptionInfo = (productId, callback) => {
  client.query(
    `SELECT product_name, product_description, price, rating FROM descriptions where product_id = '${productId}'`,
    (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
      client.end();
    }
  );
};

module.exports = { getDescriptionInfo };
