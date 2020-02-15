module.exports = {
  development: {
    client: "postgres",
    connection: "postgres://postgres:pizmak@localhost:5432/sdc-description",
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  }
};
