import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

class FilterGenre {

  public nonIndexedFilter(genre: string, movies: Movie[]): Movie[] {
    const searchGenre = genre.toLowerCase();

    const results: Movie[] = movies.filter(movie => {
      return movie.genres.some(movieGenre => movieGenre.toLowerCase() === searchGenre);
    });
    return results;
  }

  public indexedFilter(genre: string): Movie[] {
    const genreIndex = Indexes.getGenreIndex();
    const genreKey = genre.toLowerCase();
    const results = genreIndex[genreKey] || [];
    return results;
  }

}

export default new FilterGenre();
