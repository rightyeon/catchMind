import express from "express";

const app   = express();
const PORT  = 4000;

const runServer = () => console.log(`✅server working..https://localhost:${PORT}`);

app.listen(PORT,runServer);