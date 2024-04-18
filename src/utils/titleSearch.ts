import type { Movie } from '../types/movie.js';
import moviesData from '../../data/movies.json'

export default function titleSearch(query: string): Movie[] {
  const movies = moviesData as Movie[];
  const results: Movie[] = movies.filter(movie => movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  return results;
}
