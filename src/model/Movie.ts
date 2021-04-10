import { v4 as uuidV4 } from "uuid";

class Movie {
    id?: string;
    title: string;
    genre: string;
    description: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Movie };