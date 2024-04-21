import { Movie } from "../types/movie.js";

export default function createMovieId(movie: Movie) {
  const handle = movie.title
    .toLowerCase()
    .replace(/[.,']/g, '')
    .replace(/ /g, '-');

  return `${handle}-${movie.year}`;
}