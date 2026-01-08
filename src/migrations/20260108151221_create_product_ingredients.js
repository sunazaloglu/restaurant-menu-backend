export const up = async (knex) => {
  await knex.schema.createTable("product_ingredients", (table) => {
    table
      .string("product_id")
      .references("id")
      .inTable("products")
      .onDelete("CASCADE");
  });
  table
    .string("ingredient_id")
    .references("id")
    .inTable("ingredients")
    .onDelete("CASCADE");
};

export const down = async (knex) => {
  await knex.schema.dropTable();
};
