import type { Movie } from '../types/movie.js';
import moviesData from '../../data/movies.json'

export default function genreSearch(query: string): Movie[] {
  const movies = moviesData as Movie[];
  const results: Movie[] = movies.filter(movie => movie.genres.includes(query));
  return results;
}
