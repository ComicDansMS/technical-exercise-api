import { Request, Response } from "express";
import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import searchMovies from "../services/searchMovies.js";
import parseQueryParams from "../helpers/parseQueryParams.js";

class MoviesController {

  public getMovies(req: Request, res: Response): void  {
    try {
      const searchQuery: SearchQuery = parseQueryParams(req);
      const results: Movie[] = searchMovies(searchQuery);
      res.json(results);
    } catch (error) {
      res.status(500).send(`An error has occurred: ${error}`,)
    }
  }

}

export default new MoviesController();
