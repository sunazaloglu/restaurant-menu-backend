import knex from "../config/database.js";

export const createProducts = async (products) => {
  const [newItem] = await knex("products").insert(products).returning("*");
  return newItem;
};

export const getAllProducts = async () => {
  const query = await knex("products").select(
    "id",
    "name",
    "price",
    "category_id"
  );
  return query;
};

export const updateProducts = async (id, products) => {
  const [updateProduct] = await knex("products")
    .where({ id: id })
    .whereNull("deleted_at")
    .update(products)
    .returning("*");
  return updateProduct;
};

export const deleteProducts = async (id) => {
  const deletedProduct = await knex("products")
    .where("id", id)
    .update({ deleted_at: knex.fn.now() })
    .returning("*");
  return deletedProduct;
};

export const getProductById = async (id) => {
  const product = await knex("products")
    .where({ id })
    .whereNull("deleted_at")
    .first();
  return product;
};
