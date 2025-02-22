//Load express module with `require` directive
var express = require("express");
var app = express();

//Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Hello World");
});

//Launch listening server on port 8080
app.listen(7000, function () {
  console.log("App listening on port 7000!");
});
