import express from "express";
import { accountFind, accountRegister } from "../controller/account";
const accountRouter = express.Router();

accountRouter.get("/find", accountFind);
accountRouter.get("/register", accountRegister);

export default accountRouter;
