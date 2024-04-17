import { Request, Response } from "express";
import moviesData from '../../data/movies.json'

export const getMovies = (req: Request, res: Response): void => {
  res.json(moviesData);
}