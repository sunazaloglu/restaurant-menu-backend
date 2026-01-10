import { Router } from "express";
import { createItem, getAllItems, getItem} from "../controllers/categoryController.js";


const router = Router();

router.post("/", createItem);
router.get("/", getAllItems);
router.get("/:id", getItem);

export default router;
