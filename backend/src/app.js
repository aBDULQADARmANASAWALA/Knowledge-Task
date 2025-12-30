import express from "express";
import issuesRoutes from "./routes/issuesRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/issues", issuesRoutes);


connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Listening on PORT: 5001!");
    });
});