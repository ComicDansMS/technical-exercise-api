import express, { Express } from "express";
import dotenv from "dotenv";
import moviesRoutes from './routes/moviesRoutes.js'

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use('/api/movies', moviesRoutes);

app.listen(port, () => {
  console.log(`Movies API listening on port ${port}`);
})
