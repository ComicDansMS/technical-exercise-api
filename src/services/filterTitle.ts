import { Movie } from "../types/movie.js";

class FilterTitle {

  public nonIndexed(title: string, movies: Movie[]): Movie[] {
    const results = movies.filter(movie => {
      const searchTitle = title.toLowerCase();
      const movieTitle = movie.title.toLowerCase();
      return movieTitle.includes(searchTitle);
    });
    
    return results;
  }
  
}

export default new FilterTitle();
