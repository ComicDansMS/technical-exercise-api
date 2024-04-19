import type { Movie } from '../types/movie.js';

export default function filterGenre(genre: string, movies: Movie[]): Movie[] {
  const results: Movie[] = movies.filter(movie => movie.genres.includes(genre));
  return results;
}
