import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use((req, res, next) => {
  const timeString = new Date().toLocaleDateString();
  console.log(`[${timeString}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
    statusCode: 200,
    uptime: process.uptime() + "s",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
