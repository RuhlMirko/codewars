import express from "express";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use((req, res, next) => {
  const timeString = new Date().toLocaleTimeString();
  console.log(`[${timeString}] ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/get-jobs", (req, res) => {
  return res.json({
    jobs: [
      { id: 1, title: "FrontEnd Developer" },
      { id: 1, title: "FullStack Developer" },
      { id: 1, title: "Backend Developer" },
    ],
    statusCode: 200,
  });
});

app.get("/get-job/:id", (req, res) => {
  const { id } = req.params;
  const intId = Number(id);
  return res.json({
    job: { id: intId, title: `Job with id ${id}` },
  });
});

// Opcional: puede ser job/jobs
app.get("/job{s}", (_, res) => {
  return res.send("This is a job posting");
});

//Comodin: puede existir cualquier cosa en la posicion del asterisco
// agentCHATGPTchat - agentAchat - agentLOREMIPSUMDOLORELOREMIPSUMDOLOREchat
app.get("/agent*chat", (_, res) => {
  return res.send("This is a chatbot");
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
