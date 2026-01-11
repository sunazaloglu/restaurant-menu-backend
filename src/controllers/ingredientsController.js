import {
  createIngredient,
  deleteIngredient,
  getAllIngredient,
  getIngredientById,
  updateIngredient,
} from "../models/ingredientsModel.js";
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

export const getAllIngredients = async (req, res) => {
  try {
    const items = await getAllIngredient();
    res.status(200).json(items);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredient = await getIngredientById(id);
    if (!ingredient) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json(ingredient);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateIngredients = async (req, res) => {
  try {
    const { id } = req.params;
    const ingredientData = req.body;

    if (!ingredientData || Object.keys(ingredientData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }
    const ingredientDataValidated = await updateIngredient(id, ingredientData);
    if (!ingredientDataValidated) {
      res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json(ingredientDataValidated);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteIngredients = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteIngredient(id);
    if (!deletedItem) {
      res.status(404).json({ message: "Ingredient not found" });
    }
    res.status(200).json(deletedItem);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
