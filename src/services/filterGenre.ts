import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

class FilterGenre {

  public nonIndexed(genres: string[], movies: Movie[]): Movie[] {
    const results: Movie[] = [];

    genres.forEach(genre => {
      const searchGenre = genre.toLowerCase();

      const filtered: Movie[] = movies.filter(movie => {
        return movie.genres.some(movieGenre => movieGenre.toLowerCase() === searchGenre);
      });

      results.push(...filtered);
    })

    return results;
  }

  public indexed(genres: string[]): Movie[] {
    const genreIndex = Indexes.getGenreIndex();
    const results: Movie[] = [];

    genres.forEach(genre => {
      const genreKey = genre.toLowerCase();
      results.push(...genreIndex[genreKey])
    })

    return results;
  }

}

export default new FilterGenre();
