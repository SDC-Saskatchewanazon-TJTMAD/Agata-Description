exports.up = async function(knex, Promise) {
  await knex.schema.createTable("descriptions", table => {
    table
      .increments("product_id")
      .unsigned()
      .primary();
    table.string("product_name").notNullable();
    table.string("product_description").notNullable();
    table.decimal("price").notNullable();
    table.integer("category_id").notNullable();
    table.integer("rating").notNullable();
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTable("descriptions");
};
