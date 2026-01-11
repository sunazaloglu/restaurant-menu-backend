import { Router } from "express";
import {
  createIngredients,
  getAllIngredients,
} from "../controllers/ingredientsController.js";

const router = Router();

router.post("/", createIngredients);
router.get("/", getAllIngredients);
export default router;
