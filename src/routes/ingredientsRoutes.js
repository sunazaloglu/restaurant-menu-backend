import { Router } from "express";
import {
  createIngredients,
  deleteIngredients,
  getAllIngredients,
  getIngredient,
  updateIngredients,
} from "../controllers/ingredientsController.js";

const router = Router();

router.post("/", createIngredients);
router.get("/", getAllIngredients);
router.get("/:id", getIngredient);
router.put("/:id", updateIngredients);
router.delete("/:id", deleteIngredients);

export default router;
