import dotenv from "dotenv";
dotenv.config();

import express, { Express, Response } from "express";
import cors from "cors";
import moviesRoutes from './routes/moviesRoutes.js'
import generateIndexes from "./services/indexes.js";
import authenticate from "./middleware/authenticate.js";

const app: Express = express();
const port: number = 3000;

app.use(cors());
app.use(express.json());

generateIndexes.init();

app.use('/api/movies', authenticate, moviesRoutes);

app.use((err: any, res: Response) => {
  console.error(err);

  res.status(err.status || 500).send({
    message: err.message || 'Internal Server Error',
  })
})

app.listen(port, () => {
  console.log(`Movies API listening on port ${port}`);
})
