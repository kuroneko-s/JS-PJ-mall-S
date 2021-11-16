import express from "express";
import commonRouter from "./routers/common";
import helmet from "helmet";
import morgan from "morgan";
import { main } from "./controller/common";
import accountRouter from "./routers/account";

const app = new express();
const PORT = 4000;

// default setting
app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/static", express.static(__dirname));

//middle ware
app.use(helmet());
app.use(morgan("dev"));

// routing
app.get("/", main);
app.use("/", commonRouter);
app.use("/account", accountRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
