import { Movie } from "../types/movie.js";

export default function filterTitle(title: string, movies: Movie[]): Movie[] {
  const results: Movie[] = movies.filter(movie => movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()));
  return results;
}