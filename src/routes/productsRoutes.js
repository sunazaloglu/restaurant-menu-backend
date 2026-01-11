import { Router } from "express";
import { createProduct, getAllProduct } from "../controllers/productsController.js";

const router = Router();

router.post("/", createProduct);
router.get("/", getAllProduct);

export default router;
