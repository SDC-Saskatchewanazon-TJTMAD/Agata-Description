const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "sdc-description",
  password: "pizmak",
  port: 5432
});

client.connect();

const getDescriptionInfo = callback => {
  client.query("SELECT * FROM Description", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
    client.end();
  });
};

module.exports = { getDescriptionInfo };
