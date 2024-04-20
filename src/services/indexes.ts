import { Movie } from '../types/movie.js';
import { Index } from '../types/index.js';
import moviesData from '../../data/movies.json';

class Indexes {
	private movies: Movie[];
	private genreIndex: Index = {};
	private yearIndex: Index = {};

	constructor() {
		this.movies = moviesData as Movie[];
	}

	public init(): void {
		this.generateGenreIndex();
		this.generateYearIndex();
	}

	private generateGenreIndex(): void {
		this.movies.forEach(movie => {
			movie.genres.forEach(genre => {
				const key = genre.toLowerCase();
				if (!this.genreIndex[key]) {
					this.genreIndex[key] = [];
				}
				this.genreIndex[key].push(movie);
			});
		});
	}

	private generateYearIndex(): void {
		this.movies.forEach(movie => {
				if (!this.yearIndex[movie.year]) {
					this.yearIndex[movie.year] = [];
				}
				this.yearIndex[movie.year].push(movie);
		});
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