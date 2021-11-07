import express from "express";
import {
  failed,
  itemDetail,
  items,
  login,
  payment,
  success,
} from "../controller/common";
const commonRouter = express.Router();

commonRouter.get("/items", items);
commonRouter.get("/login", login);
commonRouter.get("/payment", payment);
commonRouter.get("/success", success);
commonRouter.get("/failed", failed);
commonRouter.get("/itemdetail/:id", itemDetail);

export default commonRouter;
