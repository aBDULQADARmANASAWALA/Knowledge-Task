import express from "express";
import dotenv from "dotenv";

import issuesRoutes from "./routes/issuesRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/issues", issuesRoutes);

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Listening on PORT: 5001!");
    });
});