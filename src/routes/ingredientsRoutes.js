import { Router } from "express";
import {
  createIngredients,
  getAllIngredients,
  getIngredient,
  updateIngredients,
} from "../controllers/ingredientsController.js";

const router = Router();

router.post("/", createIngredients);
router.get("/", getAllIngredients);
router.get("/:id", getIngredient);
router.put("/:id", updateIngredients);

export default router;
