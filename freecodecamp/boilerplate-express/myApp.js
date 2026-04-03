require("dotenv").config();
let express = require("express");
let path = require("path");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/name", function (req, res) {
  res.json({
    name: req.query.first + " " + req.query.last,
  });
});

app.post("/name", function (req, res) {
  res.json({
    name: req.body.first + " " + req.body.last,
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  },
);

// JSON responses
// app.get("/:word/echo", function (req, res) {
//   res.json({ echo: req.params.word });
// });

// app.post("/name", function (req, res) {
//   // Access data from the body
//   var firstName = req.body.first;
//   var lastName = req.body.last;
//   // Use template literals to form the JSON response
//   res.json({ name: `${firstName} ${lastName}` });
// });
// app.get("/name", function (req, res) {
//   res.json({ name: req.query.first + " " + req.query.last });
// });
// app.route("/name").get(handleNamePost).post(handleNamePost);

// app.get("/json", function (req, res) {
//   const jsonResponse = {
//     message:
//       process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json",
//   };
//   res.json(jsonResponse);
// });

const publicDir = __dirname + "/public";
app.use("/public", express.static(publicDir));

absolutepath = module.exports = app;

// app.listen()
