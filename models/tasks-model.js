const DB = require("../data/dbConfig");

async function find() {
  return DB("Tasks")
    .select(
      "Tasks.id", 
      "Tasks.description as Task Description",
      "Tasks.notes as Task Notes", 
      "Tasks.completed as Task Completed", 
      "Projects.name as Project Name", 
      "Projects.description as Project Description")
    .join("Projects", "Tasks.project_id", "Projects.id");
}

async function findById(id) {
  return DB("Tasks")
    .select(
      "Tasks.id",
      "Tasks.description as Task Description",
      "Tasks.notes as Task Notes",
      "Tasks.completed as Task Completed",
      "Projects.name as Project Name",
      "Projects.description as Project Description")
    .join("Projects", "Tasks.project_id", "Projects.id")
    .where("Tasks.id", id)
    .first();
}

async function add(projectInfo) {
  const ids = await DB("Tasks").insert(projectInfo);

  return findById(ids[0]);
}

module.exports = {
  find,
  findById,
  add
};
