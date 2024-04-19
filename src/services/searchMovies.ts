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
      
  if (title) {
    const titleResults: Movie[] = filterTitle(title, movies);
    results.push(...titleResults)
  }
  
  if (genre) {
    const genreResults: Movie[] = filterGenre(genre, movies);
    results.push(...genreResults)
  }
  
  if (year) {
    const yearResults: Movie[] = filterYear(year, movies);
    results.push(...yearResults)
  }

  return results;
}
