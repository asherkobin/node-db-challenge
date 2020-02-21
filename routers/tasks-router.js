const express = require("express");
const tasksRouter = express.Router();
const tasksModel = require("../models/tasks-model");

tasksRouter.get("/", async (req, res) => {
  try {
    const tasks = await tasksModel.find();
    
    res.status(200).json(tasks);
  }
  catch(e) {
    res.status(500).json("Error reading tasks" + e);
  }
});

tasksRouter.post("/", async (req, res) => {
  const tasksToAdd = req.body;
  
  if (!tasksToAdd.project_id || !tasksToAdd.description) {
    res.status(400).json("Description and project_id are required fields");
  }
  else {
    try {
      const newtasks = await tasksModel.add(tasksToAdd);

      res.status(201).json(newtasks);
    }
    catch(e) {
      res.status(500).json("Error creating task: " + e);
    }
  }
  
});

module.exports = tasksRouter;