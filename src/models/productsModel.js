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
