import { error } from "node:console";
import { createServer } from "node:http";

// const port = 3000;
// Uses variable inside enviroment file to set the port
process.loadEnvFile();
const port = process.env.PORT ?? 3000;

const users = [
  { id: 1, name: "midudev" },
  { id: 2, name: "mouredev" },
];

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

const server = createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET") {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.statusCode = 200;
      return res.end(`Hola mundo, estas en la root`);
    }
    if (req.url === "/users") {
      sendJson(res, 200, users);
    }
    if (req.url === "/health") {
      sendJson(res, 200, { status: "ok", uptime: process.uptime() });
    }
  }

  if (method === "POST") {
    if (url === "/users") {
      res.end("Crear nuevo usuario");
    }
  }

  //   if (method !== "GET") {
  //     return sendJson(res, 405, { error: "Method not allowed" });
  //   }

  sendJson(res, 404, { error: "Not Found" });
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/// NODEMON ALTERNATIVE: node --watch server.js
