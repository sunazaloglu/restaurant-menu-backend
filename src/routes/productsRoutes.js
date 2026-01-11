import { Router } from "express";
import { createProduct } from "../controllers/productsController.js";

const router = Router();

router.post("/", createProduct);

export default router;
