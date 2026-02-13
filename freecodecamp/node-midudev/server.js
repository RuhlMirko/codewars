import { error } from "node:console";
import { createServer } from "node:http";

// const port = 3000;
// Uses variable inside enviroment file to set the port
process.loadEnvFile();
const port = process.env.PORT ?? 3000;

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

const server = createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.statusCode = 200;
  if (req.url === "/") {
    return res.end(`Hola mundo, estas en la root`);
  } else if (req.url === "/users") {
    sendJson(res, 200, [
      { id: 1, name: "midudev" },
      { id: 2, name: "mouredev" },
    ]);
  }

  sendJson(res, 404, { error: "Not Found" });
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/// NODEMON ALTERNATIVE: node --watch server.js
