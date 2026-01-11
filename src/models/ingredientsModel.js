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

export const getAllIngredient = async () => {
  const query = await knex("ingredients").select("id", "name", "is_allergen");
  return query;
};

export const getIngredientById = async (id) => {
  const ingredient = await knex("ingredients")
    .where("id", id)
    .whereNull("deleted_at")
    .first();
  return ingredient;
};
