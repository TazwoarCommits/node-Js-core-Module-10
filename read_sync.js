const fs = require("fs");

console.log("start reading the file");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log("file-content", data);
} catch (error) {
  console.error(error.message);
}

console.log("finishd");
