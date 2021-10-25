import express from 'express';
import { failed, itemDetail, main, payment, success } from '../controller/common';
const commonRouter = express.Router();

commonRouter.get("/items", main)
commonRouter.get("/payment", payment)
commonRouter.get("/success", success)
commonRouter.get("/failed", failed)
commonRouter.get("/itemdetail/:id", itemDetail)

export default commonRouter;