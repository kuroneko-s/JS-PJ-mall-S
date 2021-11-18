import express from "express";
import { globalMiddleware } from "../../middleware";
import {
  accountFind,
  accountGetRegister,
  accountPostRegister,
} from "../controller/account";
const accountRouter = express.Router();

accountRouter.get("/find", accountFind);

accountRouter
  .route("/register")
  .all(globalMiddleware)
  .get(accountGetRegister)
  .post(accountPostRegister);

export default accountRouter;
