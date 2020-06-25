var fs = require("fs");

fs.readFile("summer.html", function(err, data) {
  if (err) console.log("There was an error reading the file");
  else {
    console.log("The data in the file is available");
    console.log(data.toString());
  }
});

// APPENDFILE METHOD

fs.appendFile(
  "File.txt",
  "The file has been created using the appendFile method",
  function(err) {
    if (err) throw err;
    console.log("File is created using appenFile method");
  }
);

//EMPTY FILE USING OPEN METHOD

fs.open("File1.txt", "w", function(err) {
  if (err) throw err;
  console.log("File 1 file is created using open metthod");
});
// New file using writeFile method

fs.writeFile(
  "File2.txt",
  "The File is created using the WriteFile Method",
  function(err) {
    if (err) throw err;
    console.log("File 2 is creted using writeFile method");
  }
);

//Updating the file using appendFile method

fs.appendFile(
  "File1.txt",
  "The text is appended to the file named File 1",
  function(err) {
    if (err) throw err;
    console.log("File1 is updated using appendFile Method");
  }
);

//replacing the content of demo file using writeFile method

fs.writeFile("File.txt", "The File has been overridden", function(err) {
  if (err) throw err;
  console.log("demo file is successfully overriden");
});

//deleting the files uing unlink method

fs.unlink("mumbai.html", function(err) {
  if (err) throw err;
  console.log("mumbai.html file has been deleted successfully");
});

//Renaming the file using rename method

fs.rename("Delhi.html", "Chennai.html", function(err) {
  if (err) throw err;
  console.log("Delhi.html file has been renamed to Chennai.html");
});
