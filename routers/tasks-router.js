const express = require("express");
const tasksRouter = express.Router();

tasksRouter.get("/", (req, res) => {
  res.status(200).json("Tasks");
});

module.exports = tasksRouter;