import knex from "../config/database.js";
export const createCategory = async (category) => {
  const [newItem] = await knex("categories").insert(category).returning("*");
  return newItem;
};

export const getAllCategories = async () => {
  const query = knex("categories").select("id", "name");
  return query;
};
