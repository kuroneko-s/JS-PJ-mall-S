import express from 'express';
const app = new express();

app.set('view engine', 'pug');
app.set("views", __dirname + "/views");

app.get("/", (req, res) => res.render("home"))

app.listen(4000, () => console.log("Running!"))