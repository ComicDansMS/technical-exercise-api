import { Router } from "express";
import { getMovies } from "../controllers/moviesController.js";

const router = Router();

router.get('/', getMovies);

export default router;