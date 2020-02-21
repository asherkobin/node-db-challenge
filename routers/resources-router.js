const express = require("express");
const resourcesRouter = express.Router();
const resourcesModel = require("../models/resources-model");

resourcesRouter.get("/", async (req, res) => {
  try {
    const resources = await resourcesModel.find();
    
    res.status(200).json(resources);
  }
  catch(e) {
    res.status(500).json("Error reading resources: " + e);
  }
});

resourcesRouter.post("/", async (req, res) => {
  const resourceToAdd = req.body;
  
  if (!resourceToAdd.name) {
    res.status(400).json("Name is a required field");
  }
  else {
    try {
      const newResource = await resourcesModel.add(resourceToAdd);

      res.status(201).json(newResource);
    }
    catch(e) {
      if (e.code === "SQLITE_CONSTRAINT") {
        res.status(400).json("An existing resource contains that name");
      }
      else {
        res.status(500).json("Error creating resource: " + e);
      }
    }
  }
});

module.exports = resourcesRouter;