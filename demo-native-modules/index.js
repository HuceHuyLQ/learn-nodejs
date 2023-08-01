//declare variable
const fs = require("fs");

//create file
fs.writeFile("message.txt", "Hello NodeJS", (err) => {
    if (err) throw err;
    console.log("The file has been created!");
});

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});