import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

class FilterYear {

  public indexedFilter(year: number): Movie[] {
    const yearIndex = Indexes.getYearIndex();
    const results = yearIndex[year];
    return results;
  }
  
}

export default new FilterYear();