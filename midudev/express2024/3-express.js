const express = require("express");
const dittoJson = require("./pokemon/ditto.json");

const app = express();
const PORT = process.env.PORT ?? 1234
app.disable("x-powered-by"); // Deshabilita la cabecera 'X-Powered-By' para mejorar la seguridad de la aplicación

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes con formato JSON
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   if (req.method !== "POST") return next();
//   if (req.headers["content-type"] !== "application/json") return next();

//   let body = "";
//   // escuchar el evento data
//   req.on("data", (chunk) => {
//     body += chunk.toString();
//   });

//   req.on("end", () => {
//     const data = JSON.parse(body);
//     data.timestamp = Date.now();
//     // mutar la request y meter la información en el req.body
//     req.body = data;
//     next();
//   });
// });

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello world</h1>");
});

app.get("/pokemon/ditto", (req, res) => {
  res.status(200).json(dittoJson);
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
