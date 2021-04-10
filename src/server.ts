import express from "express";
import { accountRoutes } from "./routes/account.routes"
import { movieRoutes } from "./routes/movie.routes";

const app = express();

app.use(express.json());

app.use("/account", accountRoutes);
app.use("/movie", movieRoutes);

app.get("/", (req, res) => {
    return res.json({ message: "Hello!" })
})

app.listen(8080, () => console.log("Server UP"));