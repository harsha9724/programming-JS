// Given a file name return the type of file

let file="index.html"
let extracts = file.split(".");
let extention = extracts[extracts.length-1].toLowerCase();

switch(extention){
    case "html":
        console.log("HTML FILE");
        break;
    case "css":
        console.log("CSS FILE");
        break;
    case "js":
        console.log("JavaScript FILE");
        break;
    default:
        console.log(`${extention} FILE`);          
}