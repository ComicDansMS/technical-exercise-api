import { NextFunction, Request, Response } from "express";
import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import searchMovies from "../services/searchMovies.js";
import parseQueryParams from "../helpers/parseQueryParams.js";

class MoviesController {

  public getMovies(req: Request, res: Response, next: NextFunction): void  {
    try {
      const searchQuery: SearchQuery = parseQueryParams(req);
      const results: Movie[] = searchMovies(searchQuery);
      res.json(results);
    } catch (error) {
      next(error);
    }
  }

}

export default new MoviesController();
