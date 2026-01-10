import { Router } from "express";
import { createItem, getAllItems } from "../controllers/categoryController.js";

const router = Router();

router.post("/", createItem);
router.get("/", getAllItems);

export default router;
