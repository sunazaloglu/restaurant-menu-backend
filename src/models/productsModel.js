import knex from "../config/database.js";

export const createProducts = async (products) => {
  const [newItem] = await knex("products").insert(products).returning("*");
  return newItem;
};