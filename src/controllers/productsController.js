import {
  createProducts,
  getAllProducts,
  getProductById,
  updateProducts,
} from "../models/productsModel.js";
import { logger } from "../utils/logger.js";
import knex from "../config/database.js";

export const createProduct = async (req, res) => {
  try {
    const products = req.body;
    if (
      !products?.name ||
      products.price == null ||
      products.category_id == null
    ) {
      return res.status(400).json({
        message: "Missing required fields: name, price, category_id˝",
      });
    }
    const category = await knex("categories")
      .where({ id: products.category_id })
      .whereNull("deleted_at")
      .first();

    if (!category) {
      return res.status(400).json({ message: "Invalid category_id" });
    }

    const newProduct = await createProducts(products);
    res.status(201).json(newProduct);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getAllProduct = async (req, res) => {
  try {
    const items = await getAllProducts();
    res.status(200).json(items);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: " Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (!updateData || Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }
    const updatedData = await updateProducts(id, updateData);
    if (!updatedData) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updateData);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
