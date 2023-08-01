import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

inquirer
    .prompt([{
        message:"Type in your URL:",
        name: "URL",
    }])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        fs.writeFile("userInput.txt",url, (error) => {
            if (error) throw error;
            console.log("The file has been save");
        })
    })
    .catch((error) => {
        if(error.isTtyError){

        }else{

        }
    });