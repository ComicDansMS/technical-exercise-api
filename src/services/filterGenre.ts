import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

export default function filterGenre(genre: string): Movie[] {
  const genreIndex = Indexes.getGenreIndex();
  const genreKey = genre.toLowerCase();
  const results = genreIndex[genreKey];
  return results;
}