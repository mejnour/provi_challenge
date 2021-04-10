import { Account } from "../model/Account";

interface ICreateAccountDTO {
    email: string;
    password: string;
}

class AccountRepo {
    private accounts: Account[];

    constructor() {
        this.accounts = [];
    }

    create({ email, password }: ICreateAccountDTO): void {
        const account = new Account();

        Object.assign(account, {
            email,
            password,
        });

        this.accounts.push(account);
    }
}


export { AccountRepo };