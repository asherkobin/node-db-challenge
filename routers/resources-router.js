const express = require("express");
const resourcesRouter = express.Router();

resourcesRouter.get("/", (req, res) => {
  res.status(200).json("Resources");
});

module.exports = resourcesRouter;