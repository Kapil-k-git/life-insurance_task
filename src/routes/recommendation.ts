import { Router } from "express";
import { getRecommendation } from "../controllers/recommendationController";
import { recommendationValidators } from "../validation/recommendationValidators";
import { validate } from "../middlewares/validators";

const router = Router();

router.post("/", recommendationValidators, validate, getRecommendation);

export default router; 