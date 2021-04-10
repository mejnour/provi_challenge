import { Router } from "express";
import { Movie } from "../model/Movie";
import { MovieRepo } from "../repos/MovieRepo";

const movieRoutes = Router();
const movieRepo = new MovieRepo();

const movies: Movie[] = [];

function verifyMovieExistence(title) {
    return movieRepo.findByTitle(title);
}

movieRoutes.post("/create", (req, res) => {
    const { title, genre, description } = req.body;

    const movie = verifyMovieExistence(title);

    if(movie) {
        return res.status(400).send({ error: "Movie exists already" });
    }

    movieRepo.create({ title, genre, description });

    return res.status(201).send({ msg: "Succesfully created" });
})

movieRoutes.put("/edit", (req, res) => {
    const { title, genre, description } = req.body;
    
    const movie = verifyMovieExistence(title);

    if(!movie) {
        return res.status(404).send({ error: "Title not found" });
    }
    
    if(genre) {
        movie.genre = genre;
    }

    if(description) {
        movie.description = description;
    }

    movieRepo.edit(movie);

    return res.status(201).send({ msg: "Succesfully altered" });
});

movieRoutes.get("/latest", (req, res) => {
    const latest = movieRepo.listLatest();

    latest.reverse();

    return res.json({ latest }).send();
})

movieRoutes.get("/catalog", (req, res) => {
    const catalog = movieRepo.list();

    return res.json({ catalog }).send();
})

movieRoutes.get("/catalog/name", (req, res) => {
    const catalog = movieRepo.list();

    catalog.sort(function(a, b) {
        (a.title < b.title) ? -1 : 1;
    });

    return res.json({ catalog }).send();
})

export { movieRoutes };