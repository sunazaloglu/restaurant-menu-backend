import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/productsController.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);

export default router;
