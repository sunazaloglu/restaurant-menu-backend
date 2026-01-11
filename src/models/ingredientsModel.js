import knex from "../config/database.js";

export const createIngredient = async (ingredient) => {
  const [newIngredient] = await knex("ingredients")
    .insert({
      name: ingredient.name,
      is_allergen: ingredient.is_allergen,
    })
    .returning("*");
  return newIngredient;
};

export const getAllIngredient = async (showDeleted = "false") => {
  const query = knex("ingredients").select(
    "id",
    "name",
    "is_allergen",
    "deleted_at"
  );

  if (showDeleted === "true") {
  } else if (showDeleted === "onlyDeleted") {
    query.whereNotNull("deleted_at");
  } else {
    query.whereNull("deleted_at"); // default
  }

  return query.orderBy("id", "asc");
};

export const getIngredientById = async (id) => {
  const ingredient = await knex("ingredients")
    .where("id", id)
    .whereNull("deleted_at")
    .first();
  return ingredient;
};

export const updateIngredient = async (id, ingredient) => {
  const [updatedIngredient] = await knex("ingredients")
    .where({ id })
    .whereNull("deleted_at")
    .update({
      ...ingredient,
      updated_at: knex.fn.now(),
    })
    .returning("*");

  return updatedIngredient;
};

export const deleteIngredient = async (id) => {
  const [deleted] = await knex("ingredients")
    .where({ id })
    .whereNull("deleted_at")
    .update({ deleted_at: knex.fn.now(), updated_at: knex.fn.now() })
    .returning("*");

  return deleted ?? null;
};
