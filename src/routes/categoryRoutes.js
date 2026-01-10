import { Router } from "express";
import { createItem, getAllItems } from "../controllers/categoryController";

const router = Router();

router.post("/", createItem);
router.get("/", getAllItems);

export default router;
