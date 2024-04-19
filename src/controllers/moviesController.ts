import { Request, Response } from "express";
import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import searchMovies from "../services/searchMovies.js";

// Not sure on best practice in handling query parameter types.
// I'm aware that this lacks error handling when casting the type.

class MoviesController {

  public getMovies(req: Request, res: Response): void  {
    try {
      const searchQuery: SearchQuery = {
        title: req.query.title as string,
        genre: req.query.genre as string,
        year: parseInt(req.query.year as string) as number,
      }
    
      const results: Movie[] = searchMovies(searchQuery);
      
      res.json(results);
    } catch (error) {
      res.status(500).send(`An error has occurred: ${error}`,)
    }
  }

}

export default new MoviesController();
