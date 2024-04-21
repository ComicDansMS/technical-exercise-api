import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import moviesRoutes from './routes/moviesRoutes.js'
import generateIndexes from "./services/indexes.js";
import authenticate from "./middleware/authenticate.js";

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

generateIndexes.init();

app.use('/api/movies', authenticate, moviesRoutes);

app.listen(port, () => {
  console.log(`Movies API listening on port ${port}`);
})
