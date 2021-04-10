import { Movie } from "../model/Movie";

interface ICreateMovieDTO {
    title: string;
    genre: string;
    description: string;
}

class MovieRepo {
    private movies: Movie[];

    constructor() {
        this.movies = [];
    }

    create({ title, genre, description }: ICreateMovieDTO): void {
        const movie = new Movie();

        Object.assign(movie, {
            title,
            genre,
            description,
        });

        this.movies.push(movie);
    }
}

export { MovieRepo };