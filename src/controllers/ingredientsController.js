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
      name: ingredient.name.trim(),
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
    const { showDeleted } = req.query;
    const items = await getAllIngredient(showDeleted);
    return res.status(200).json(items);
  } catch (error) {
    logger(error);
    return res.status(500).json({ message: "Internal Server Error" });
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
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    if (data.name !== undefined && String(data.name).trim().length === 0) {
      return res.status(400).json({ message: "name cannot be empty" });
    }

    if (
      data.is_allergen !== undefined &&
      typeof data.is_allergen !== "boolean"
    ) {
      return res.status(400).json({ message: "is_allergen must be boolean" });
    }

    const updated = await updateIngredient(id, {
      ...(data.name !== undefined ? { name: String(data.name).trim() } : {}),
      ...(data.is_allergen !== undefined
        ? { is_allergen: data.is_allergen }
        : {}),
    });

    if (!updated) {
      return res.status(404).json({ message: "Ingredient not found" });
    }

    return res.status(200).json(updated);
  } catch (error) {
    logger(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteIngredients = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteIngredient(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Ingredient not found" });
    }
    return res.status(200).json(deletedItem);
  } catch (error) {
    logger(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
