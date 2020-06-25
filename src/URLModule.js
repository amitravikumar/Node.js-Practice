var url = require("url");
var fs = require("fs");
var address = "http://localhost:8080/winter1.html";

var obj = url.parse(address, true);

var path = obj.pathname;

var fileName = "." + path;

fs.readFile(fileName, function(err, data) {
  if (err) throw err;
  else console.log(data.toString());
});
