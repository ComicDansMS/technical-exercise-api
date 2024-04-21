import { Movie } from '../types/movie.js';
import { Index } from '../types/index.js';
import moviesData from '../../data/movies.json' assert { type: 'json' };
import createMovieId from '../utils/createMovieId.js';
import handleise from '../utils/handleise.js';

class Indexes {
	private movies: Movie[];
	private titleIndex: Index = {};
	private genreIndex: Index = {};
	private yearIndex: Index = {};
	private castIndex: Record<string, string[]> = {};

	constructor() {
		this.movies = moviesData as Movie[];
	}

	public init(): void {
		this.movies.forEach(movie => {
			this.titleIndexItem(movie);
			this.genreIndexItem(movie);
			this.yearIndexItem(movie);
			this.castIndexItem(movie);
		})
	}

	private titleIndexItem(movie: Movie): void {
		const id = createMovieId(movie);

		if (!this.titleIndex[id]) {
			this.titleIndex[id] = [];
		}
		this.titleIndex[id].push(movie);
	}

	private genreIndexItem(movie: Movie): void {
		movie.genres.forEach(genre => {
			const key = genre.toLowerCase();
			if (!this.genreIndex[key]) {
				this.genreIndex[key] = [];
			}
			this.genreIndex[key].push(movie);
		});
	}

	private yearIndexItem(movie: Movie): void {
		if (!this.yearIndex[movie.year]) {
			this.yearIndex[movie.year] = [];
		}
		this.yearIndex[movie.year].push(movie);
	}

	private castIndexItem(movie: Movie): void {
		const movieId = createMovieId(movie);

		movie.cast.forEach(member => {
			const memberHandle = handleise(member);

			if (!this.castIndex[memberHandle]) {
				this.castIndex[memberHandle] = [];
			}
			this.castIndex[memberHandle].push(movieId);
		})
	}

	get getGenreIndex(): Index {
		return this.genreIndex;
	}

	get getYearIndex(): Index {
		return this.yearIndex;
	}

	get getTitleIndex(): Index {
		return this.titleIndex;
	}

	get getCastIndex() {
		return this.castIndex;
	}
}

const generateIndexes = new Indexes();
export default generateIndexes;