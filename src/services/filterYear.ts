import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

class FilterYear {

  public indexed(years: number[]): Movie[] {
    const yearIndex = Indexes.getYearIndex();
    const results: Movie[] = [];

    years.forEach(year => {
      results.push(...yearIndex[year]);
    })

    return results;
  }
  
}

export default new FilterYear();