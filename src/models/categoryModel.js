import knex from "../config/database.js";

export const createCategory = async (category) => {
  const [newItem] = await knex("categories").insert(category).returning("*");
  return newItem;
};

export const getAllCategories = async (showDeleted = "false") => {
  const query = knex("categories").select(
    "id",
    "name",
    "description",
    "deleted_at"
  );

  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNotNull("deleted_at");
  } else {
    query.whereNull("deleted_at");
  }
  return query.orderBy("id", "asc");
};

export const updateCategory = async (id, category) => {
  const [updateCategory] = await knex("categories")
    .where({ id })
    .whereNull("deleted_at")
    .update({ ...category, updated_at: knex.fn.now() })
    .returning("*");
  return updateCategory;
};

export const deleteCategory = async (id) => {
  const [deleted] = await knex("categories")
    .where({ id })
    .whereNull("deleted_at")
    .update({ deleted_at: knex.fn.now(), updated_at: knex.fn.now() })
    .returning("*");
  return deleted ?? null;
};
export const getCategoryById = async (id) => {
  const category = await knex("categories")
    .where({ id })
    .whereNull("deleted_at")
    .first();
  return category;
};
