import { Router } from "express";
import recommendedController from "../controllers/recommendedController.js";

const router = Router();

router.post('/', recommendedController.getRecommended);

export default router;