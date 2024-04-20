import type { Movie } from '../types/movie.js';
import Indexes from "./../services/indexes.js";

export default function filterYear(year: number): Movie[] {
  const yearIndex = Indexes.getYearIndex();
  const results = yearIndex[year];
  return results;
}