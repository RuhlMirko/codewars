require("dotenv").config();
let express = require("express");
let path = require("path");
let app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", function (req, res) {
  const jsonResponse = {
    message:
      process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json",
  };
  res.json(jsonResponse);
});

const publicDir = __dirname + "/public";

app.use("/public", express.static(publicDir));

absolutepath = module.exports = app;

// app.listen()
