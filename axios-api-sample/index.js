import epxress from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = epxress();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true}));

app.post("/simple", async (req, res) => {
    try{
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${req.body["type"]}&participants${req.body["participants"]}`);
        var randomNumber = Math.floor(Math.random() * response.data.length + 1);
        console.log(randomNumber);
        res.send(response.data[randomNumber]);
    }catch(err){
        res.send(err.message);
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});