const fs = require("fs") ; 

fs.writeFileSync("./output/app.log" , "Application Started\n") ; 

const logEntry1 = `${new Date().toISOString()} user loggedIn\n` ;

fs.appendFileSync("./output/app.log", logEntry1)

const logEntry2 = `${new Date().toISOString()} user reading Data`

fs.appendFileSync("./output/app.log", logEntry2)

