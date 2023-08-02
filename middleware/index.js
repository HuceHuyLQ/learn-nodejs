import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function logger(req, res, next){
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

app.use(logger);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    morgan('combined',fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});