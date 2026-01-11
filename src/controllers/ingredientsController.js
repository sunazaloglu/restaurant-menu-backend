import { createIngredient } from "../models/ingredientsModel.js";
import { logger } from "../utils/logger.js";

export const createIngredients = async (req, res) => {
  try {
    const ingredient = req.body;
    if (!ingredient?.name || String(ingredient.name).trim().length === 0) {
      return res.status(400).json({ message: "Missing required field: name" });
    }

    if (ingredient.is_allergen == null) {
      return res
        .status(400)
        .json({ message: "Missing required field: is_allergen" });
    }

    if (typeof ingredient.is_allergen !== "boolean") {
      return res.status(400).json({ message: "is_allergen must be boolean" });
    }
    const newIngredient = await createIngredient({
      name: ingredient.name,
      is_allergen: ingredient.is_allergen,
    });

    return res.status(201).json(newIngredient);
  } catch (error) {
    logger(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
