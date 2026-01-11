import { createProducts } from "../models/productsModel.js";
import { logger } from "../utils/logger.js";

export const createProduct = async (req, res) => {
  try {
    const products = req.body;
    const newProduct = await createProducts(products);
    res.status(201).json(newProduct);
  } catch (error) {
    logger(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
