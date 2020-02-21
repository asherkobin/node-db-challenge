const express = require("express");
const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.status(200).json("Projects");
});

module.exports = projectsRouter;