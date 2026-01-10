import {
  createCategory,
  getAllCategories,
  getCategoryById,
} from "../models/categoryModel.js";
import { logger } from "../utils/logger.js";

export const createItem = async (req, res) => {
  try {
    const item = req.body;
    const newItem = await createCategory(item);
    res.status(201).json(newItem);
  } catch (error) {
    logger(error, ERROR);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllItems = async (req, res) => {
  try {
    const items = await getAllCategories();
    res.status(200).json(items);
  } catch (error) {
    logger(error, ERROR);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryById(id);
    if (!category) {
      res.status(404).json({ message: "Category not  found" });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    logger(error, ERROR);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
