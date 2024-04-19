import type { Movie } from '../types/movie.js';

export default function filterYear(year: number, movies: Movie[]): Movie[] {
  const results: Movie[] = movies.filter(movie => movie.year === year);
  return results;
}
