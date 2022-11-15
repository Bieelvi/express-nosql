import express from "express";
import conn from "./config/dbConnect.js";
import routes from "./routes/index.js";

conn();

const app = express();

app.use(express.json());

routes(app);

export default app;