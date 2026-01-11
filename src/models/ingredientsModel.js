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
