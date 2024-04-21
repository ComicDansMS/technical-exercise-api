import { Movie } from "../types/movie.js";
import { SearchQuery } from "../types/searchQuery.js";
import moviesData from '../../data/movies.json' assert { type: 'json' };
import filterGenre from "./filterGenre.js";
import filterTitle from "./filterTitle.js";
import filterYear from "./filterYear.js";

export default function searchMovies(query: SearchQuery) {
  const { title, genres, years } = query;
  let results: Movie[] = moviesData as Movie[];

  console.log({ title, genres, years })

  if (years.length) {
    results = filterYear.indexed(years);
  }

  if (genres.length && years.length === 0) {
    results = filterGenre.indexed(genres);
  } else if (genres.length) {
    results = filterGenre.nonIndexed(genres, results);
  }

  if (title) {
    results = filterTitle.nonIndexed(title, results);
  }

  return results;
}
