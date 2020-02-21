const express = require("express");
const projectsRouter = express.Router();
const projectsModel = require("../models/projects-model");

projectsRouter.get("/", async (req, res) => {
  try {
    const projects = await projectsModel.find();
    
    res.status(200).json(projects);
  }
  catch(e) {
    res.status(500).json("Error reading projects: " + e);
  }
});

projectsRouter.get("/:id", async (req, res) => {
  try {
    const project = await projectsModel.findById(req.params.id);
    
    res.status(200).json(project);
  }
  catch(e) {
    res.status(500).json("Error reading project" + e);
  }
});

projectsRouter.post("/", async (req, res) => {
  const projectToAdd = req.body;

  if (!projectToAdd.name) {
    res.status(400).json("Name is a required field");
  }
  else {
    try {
      const newproject = await projectsModel.add(projectToAdd);

      res.status(201).json(newproject);
    }
    catch(e) {
      if (e.code === "SQLITE_CONSTRAINT") {
        res.status(400).json("An existing project contains that name");
      }
      else {
        res.status(500).json("Error creating project: " + e);
      }
    }
  }
});

module.exports = projectsRouter;