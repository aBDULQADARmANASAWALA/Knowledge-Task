import express from "express";
import issuesRoutes from "./routes/issuesRoutes.js";

const app = express();

app.use("/api/issues", issuesRoutes)

app.listen(5001, () => {
    console.log("Listening on PORT: 5001!");
})