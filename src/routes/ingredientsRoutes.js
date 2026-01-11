import { Router } from "express";
import {
  createIngredients,
  getAllIngredients,
  getIngredient,
} from "../controllers/ingredientsController.js";


const router = Router();

router.post("/", createIngredients);
router.get("/", getAllIngredients);
router.get("/:id", getIngredient);

export default router;
