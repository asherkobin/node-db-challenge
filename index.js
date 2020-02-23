const express = require("express");
const server = express();
const projectsRouter = require("./routers/projects-router");
const tasksRouter = require("./routers/tasks-router");
const resourcesRouter = require("./routers/resources-router");

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/tasks", tasksRouter);
server.use("/api/resources", resourcesRouter);

server.get("/", (req, res) => {
  res.status(200).json("RUNNING");
});

server.listen("5000", () => {
  console.log("Server Running on 5000");
});