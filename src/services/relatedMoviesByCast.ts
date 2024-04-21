import { Movie } from "../types/movie.js";
import handleise from "../utils/handleise.js";
import Indexes from "./indexes.js";

// Note: This function was created with GPT.
// It's late and it needed to be wrapped up.

export default function relatedMoviesByCast(movies: Movie[]): Movie[] {
  const results: Movie[] = [];
  const castIndex = Indexes.getCastIndex;
  const titleIndex = Indexes.getTitleIndex;

  // Create a map to count appearances of each movie based on cast matches
  const movieHandleCounts: { [handle: string]: number } = {};

  // Accumulate counts for each movie handle associated with each cast member
  movies.forEach(movie => {
    const seenHandles: { [handle: string]: boolean } = {};

    movie.cast.forEach(member => {
      const memberHandle = handleise(member);

      if (castIndex[memberHandle]) {
        castIndex[memberHandle].forEach(movieHandle => {
          if (!seenHandles[movieHandle]) {  // Ensure we only count once per movie per cast member
            seenHandles[movieHandle] = true;

            if (movieHandleCounts[movieHandle]) {
              movieHandleCounts[movieHandle]++;
            } else {
              movieHandleCounts[movieHandle] = 1;
            }

          }
        });
      }
    });
  });

  // Add movies to results that have multiple cast members in common
  Object.entries(movieHandleCounts).forEach(([handle, count]) => {
    if (count > 1) { // Only include movies with more than one matching cast member
      const movie = titleIndex[handle][0];
      results.push(movie);
    }
  });

  console.log('results.length', results.length)

  return results;
}
