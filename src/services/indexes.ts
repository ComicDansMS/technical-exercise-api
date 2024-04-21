import { Movie } from '../types/movie.js';
import { Index } from '../types/index.js';
import moviesData from '../../data/movies.json' assert { type: 'json' };
import createMovieId from '../utils/createMovieId.js';

class Indexes {
	private movies: Movie[];
	private titleIndex: Index = {};
	private genreIndex: Index = {};
	private yearIndex: Index = {};

	constructor() {
		this.movies = moviesData as Movie[];
	}

	public init(): void {
		this.movies.forEach(movie => {
			this.titleIndexItem(movie);
			this.genreIndexItem(movie);
			this.yearIndexItem(movie);
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

	public getGenreIndex(): Index {
		return this.genreIndex;
	}

	public getYearIndex(): Index {
		return this.yearIndex;
	}
}

const generateIndexes = new Indexes();
export default generateIndexes;