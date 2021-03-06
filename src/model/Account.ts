import { v4 as uuidV4 } from "uuid";

class Account {
    id?: string;
    email: string;
    password: string;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Account };