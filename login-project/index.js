import express from "express";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var userIsAuthorised = false;

function checkPassword(req, res, next){
    const password = req.body["password"];
    if(password === "quagh"){
        userIsAuthorised = true;
    }else{
        userIsAuthorised = false;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(checkPassword);

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.post("/check", (req,res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/index.html");
    }else{
        res.sendFile(__dirname + "/public/login.html");
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});