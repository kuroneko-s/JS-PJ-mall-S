import express from 'express';
import commonRouter from './routers/common';
import helmet from 'helmet';
import morgan from 'morgan';

const app = new express();

// default setting
app.set('view engine', 'pug');
app.set("views", __dirname + "/views");
app.use('/static', express.static(__dirname))

//middle ware
app.use(helmet())
app.use(morgan('dev'))

// routing
app.get("/", (req, res) => res.render("main"))
app.use("/", commonRouter)

app.listen(4000, () => console.log("Running!"))