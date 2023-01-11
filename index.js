const fs = require("fs");

const input = process.argv;

fs.writeFileSync(input[2], input[3]);

// fs.writeFileSync("file.txt", "Hi how are you this file is make using node js");

// console.log(process.argv[2]); //cmd node index.js something //*It will print something
