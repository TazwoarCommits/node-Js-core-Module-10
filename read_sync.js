const fs = require("fs") ;

console.log("start reading the file");

const data = fs.readFileSync("./data/diary.txt" , "utf-8") ; 

console.log(data);