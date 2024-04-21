import { Movie } from "../types/movie.js";

export default function refineByGenre(movies: Movie[]): Movie[] {
  const genres = getTopGenres(movies, 1);
  const filteredMovies = filterMovies(movies, genres);
  return filteredMovies;
}

function filterMovies(movies: Movie[], genres: string[]): Movie[] {
  const filtered = movies.filter(movie => {
    return movie.genres.some(movie => genres.includes(movie));
  })
  return filtered;
}

function getTopGenres(movies: Movie[], count: number) {
  const genreMap = mapGenres(movies);
  const genresSorted = genreMap.sort((a, b) => b[1] - a[1]);
  const topGenres = genresSorted.slice(0, count).map(([genre, count]) => genre);
  return topGenres;
}

function mapGenres(movies: Movie[]) {
  const genreMap = new Map<string, number>();
  
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      if (genreMap.has(genre)) {
        genreMap.set(genre, genreMap.get(genre) + 1);
      } else {
        genreMap.set(genre, 1);
      }
    });
  });

  const genresArray = Array.from(genreMap.entries());
  return genresArray;
}