var modulesDemo = require("./index.js");

console.log(modulesDemo.modulesDemoFun());

var fs = require("fs");

fs.readFile("File.txt", function(err) {
  if (err) throw err;
  console.log("Fs is the inbuilt function of Node.js ");
});
