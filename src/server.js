import { join } from "path";
import express from "express";

const app   = express();
const PORT  = 4000;
app.set("view engine","pug");
app.set("views", join(__dirname, "views"));

app.get("/", (req,res) => res.render("home"))

const runServer = () => console.log(`✅server working..https://localhost:${PORT}`);

app.listen(PORT,runServer);