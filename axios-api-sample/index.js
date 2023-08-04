import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/simple", async (req, res) => {
    try {
        const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${req.body["type"]}&participants=${req.body["participants"]}`);
        res.send(response.data);
    } catch (error) {
        console.log("ERROR: " + error.message);
        res.status(500).send("Error fetching activities.");
    }
});

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
