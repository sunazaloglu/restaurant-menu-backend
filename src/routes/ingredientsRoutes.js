import { Router } from "express";
import { createIngredients } from "../controllers/ingredientsController.js";

const router = Router();

router.post("/", createIngredients);

export default router;
