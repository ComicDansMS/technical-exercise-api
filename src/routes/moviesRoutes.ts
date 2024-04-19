import { Router } from "express";
import MoviesController from "../controllers/moviesController.js";

const router = Router();

router.get('/', MoviesController.getMovies);

export default router;