import { randomUUID } from "node:crypto";
import { createServer } from "node:http";
import { json } from "node:stream/consumers";

// const port = 3000;
// Uses variable inside enviroment file to set the port
process.loadEnvFile();
const port = process.env.PORT ?? 3000;

const users = [
  {
    id: 1,
    name: "midudev",
  },
  {
    id: 2,
    name: "mouredev",
  },
  {
    name: "Mirko",
    id: "893b01e4-7763-4233-b43d-6d04d28f1599",
  },
  {
    name: "Ruhl",
    id: "69086a36-2adf-4c59-a299-fae315c91b10",
  },
  {
    name: "Joel",
    id: "1ccfe163-7050-4621-babd-b974fe0a6ce0",
  },
  {
    name: "Rogelio",
    id: "dd6d8100-abd5-4dab-9498-f9f09e7f007c",
  },
  {
    name: "Milena",
    id: "6d3a24c0-0d15-4e3a-8fbb-8cc840a8f532",
  },
];

function sendJson(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

const server = createServer(async (req, res) => {
  const { method, url } = req;
  const [pathname, queryString] = url.split("?");
  const searchParams = new URLSearchParams(queryString);

  if (method === "GET") {
    if (pathname === "/") {
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.statusCode = 200;
      return res.end(`Hola mundo, estas en la root`);
    }
    if (pathname === "/users") {
      const limit = searchParams.get("limit") || users.length;
      const offset = searchParams.get("offset") || 0;
      const paginatedUsers = users.slice(offset, offset + limit);
      return sendJson(res, 200, paginatedUsers);
    }
    if (pathname === "/health") {
      return sendJson(res, 200, { status: "ok", uptime: process.uptime() });
    }
  }

  if (method === "POST") {
    if (pathname === "/users") {
      // res.end("Crear nuevo usuario");
      const body = await json(req);

      if (!body || !body.name) {
        return sendJson(res, 400, { message: "Name is a required field" });
      }

      const newUser = {
        name: body.name,
        id: randomUUID(),
      };

      users.push(newUser);

      console.log(body);
      return sendJson(res, 201, { message: "Usuario creado", user: newUser });
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
