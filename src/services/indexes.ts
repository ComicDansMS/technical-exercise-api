import { Movie } from '../types/movie.js';
import { Index } from '../types/index.js';
import moviesData from '../../data/movies.json' assert { type: 'json' };

class Indexes {
	private movies: Movie[];
	private genreIndex: Index = {};
	private yearIndex: Index = {};

	constructor() {
		this.movies = moviesData as Movie[];
	}

	public init(): void {
		this.movies.forEach(movie => {
			this.genreIndexItem(movie);
			this.yearIndexItem(movie);
		})
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

	get getGenreIndex(): Index {
		return this.genreIndex;
	}

	get getYearIndex(): Index {
		return this.yearIndex;
	}
}

const generateIndexes = new Indexes();
export default generateIndexes;