let express = require("express");
let path = require("path");
let app = express();

console.log("Hello world");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

absolutepath = module.exports = app;

// app.listen()
