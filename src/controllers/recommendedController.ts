import { Request, Response } from "express";
import { Movie } from "../types/movie.js";
import relatedMoviesByCast from "../services/relatedMoviesByCast.js";
import refineByGenre from "../services/refineByGenre.js";

class RecommendedController {

  public getRecommended(req: Request, res: Response): void  {
    try {
      const recommended: Movie[] = [];
      const favourites: Movie[] = req.body;

      const relatedByCast: Movie[] = relatedMoviesByCast(favourites);
      const refinedByGenre = refineByGenre(relatedByCast)

      recommended.push(...refinedByGenre)
      res.json(recommended);
    } catch (error) {
      res.status(500).send(`An error has occurred: ${error}`,)
    }
  }

}

export default new RecommendedController();
