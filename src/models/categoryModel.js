import knex from "../config/database.js";
export const createCategory = async (category) => {
  const [newItem] = await knex("categories").insert(category).returning("*");
  return newItem;
};

export const getAllCategories = async () => {
  const query = knex("categories").select("id", "name");
  return query;
};

export const updateCategory = async (id, category) => {
  const [updateCategory] = await knex("categories")
    .where({ id })
    .update(category)
    .returning("*");
  return updateCategory;
};
export const getCategoryById = async (id) => {
  const category = await knex("categories").where({ id }).first();
  return category;
};
