import { createServer } from "node:http";

// const port = 3000;
const port = process.env.PORT ?? 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(`Hola desde node 🔥💯`);
});

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

/// NODEMON ALTERNATIVE: node --watch server.js
