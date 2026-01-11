import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/productsController.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
