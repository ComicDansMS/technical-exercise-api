import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import moviesData from '../../data/movies.json' assert { type: 'json' };
import filterGenre from "./filterGenre.js";
import filterTitle from "./filterTitle.js";
import filterYear from "./filterYear.js";

export default function searchMovies(query: SearchQuery) {
  const { title, genre, year } = query;
  let results: Movie[] = moviesData as Movie[];

  if (year) {
    results = filterYear.indexedFilter(year);
  }

  if (genre && !year) {
    results = filterGenre.indexedFilter(genre);
  } else if (genre) {
    results = filterGenre.nonIndexedFilter(genre, results);
  }

  if (title) {
    results = filterTitle.nonIndexedFilter(title, results);
  }

  return results;
}
