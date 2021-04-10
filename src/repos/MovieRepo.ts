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

    list(): Movie[] {
        return this.movies;
    }

    listLatest(): Movie[] {
        return this.movies.slice(-5);
    }

    findByTitle(title: string): Movie {
        const movie = this.movies.find(movie => movie.title === title);
        return movie;
    }

    edit(movie: Movie) {
        this.delete(movie.id);
        this.movies.push(movie);
    }

    delete(movieId: string): void {
        this.movies = this.movies.filter(movie => movie.id !== movieId);
    }
}

export { MovieRepo };