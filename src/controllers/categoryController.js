import { createCategory, getAllCategories } from "../models/categoryModel.js";
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
