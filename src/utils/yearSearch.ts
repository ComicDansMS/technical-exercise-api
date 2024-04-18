import type { Movie } from '../types/movie.js';
import moviesData from '../../data/movies.json'

export default function yearSearch(query: number): Movie[] {
  const movies = moviesData as Movie[];
  const results: Movie[] = movies.filter(movie => movie.year === query);
  return results;
}
