import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import moviesData from '../../data/movies.json'
import filterTitle from "./filterTitle.js";
import filterGenre from "./filterGenre.js";
import filterYear from "./filterYear.js";

export default function searchMovies(query: SearchQuery) {
  const { title, genre, year } = query;
  const movies = moviesData as Movie[];
  const results: Movie[] = [];

  if (title && !genre && !year) {
    const titleResults: Movie[] = filterTitle(title, movies);
    results.push(...titleResults)
  }

  if (genre && !title && !year) {
    const genreResults: Movie[] = filterGenre(genre);
    results.push(...genreResults)
  }
  
  if (year && !title && !genre) {
    const yearResults: Movie[] = filterYear(year);
    results.push(...yearResults)
  }
  
  return results;
}
