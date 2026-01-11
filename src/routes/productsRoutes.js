import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
} from "../controllers/productsController.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getProduct);
export default router;
