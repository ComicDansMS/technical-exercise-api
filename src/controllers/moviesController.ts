import { Request, Response } from "express";
import titleSearch from "../utils/titleSearch.js";
import genreSearch from "../utils/genreSearch.js";
import yearSearch from "../utils/yearSearch.js";
import { Movie } from "../types/movie.js";

// Not sure on best practice in handling query parameter types.
// I'm aware that this lacks error handling when casting the type.

export const getMovies = (req: Request, res: Response): void => {
  const title = req.query.title as string;
  const genre = req.query.genre as string;
  const year = parseInt(req.query.year as string) as number;

  const results: Movie[] = [];
  
  if (title) {
    const titleResults: Movie[] = titleSearch(title);
    results.push(...titleResults)
  }
  
  if (genre) {
    const genreResults: Movie[] = genreSearch(genre);
    results.push(...genreResults)
  }
  
  if (year) {
    const yearResults: Movie[] = yearSearch(year);
    results.push(...yearResults)
  }
  
  res.json(results);
}
