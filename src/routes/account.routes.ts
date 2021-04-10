import { Router } from "express";
import { Account } from "../model/Account";
import { AccountRepo } from "../repos/AccountRepo";

const accountRoutes = Router();
const accountRepo = new AccountRepo();

function verifyAccountExistence(email) {
    return accountRepo.findByEmail(email);
}

accountRoutes.post("/create", (req, res) =>  {
    const { email, password } = req.body;
    const account = verifyAccountExistence(email);

    if(!account){
        accountRepo.create({ email, password });
        return res.status(201).send({ msg: "Succesfully created" });
    }

    return res.status(400).send({ error: "Email exists already" });
    
})

accountRoutes.delete("/delete", (req, res) =>  {
    const { email, password } = req.body;
    const account = accountRepo.findByEmail(email);
    
    if(account && (account.password === password)) {
        accountRepo.delete(account.id);
        return res.status(204).send({ msg: "Successfully deleted" });
    } 

    return res.status(404).send({ error: "Email and/or Password not matching or nonexistent" });
})

export { accountRoutes };