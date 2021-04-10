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

    findByEmail(email: string): Account {
        const account = this.accounts.find(account => account.email === email);
        return account;
    }

    delete(accountId: string): void {
        this.accounts = this.accounts.filter(account => account.id !== accountId);
    }
}


export { AccountRepo };