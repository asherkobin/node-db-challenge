const DB = require("../data/dbConfig");

async function find() {
  return DB("Projects");
}

async function findById(id) {
  const projectInfo = await DB("Projects").where({ id }).first();
  const projectTasks = await DB("Tasks").where({ project_id: id });
  const projectResources = await DB.raw(
    "SELECT Resources.id, Resources.name, Resources.description FROM Projects \
     JOIN Projects_Resources_Relation ON Projects.id = Projects_Resources_Relation.project_id \
     JOIN Resources ON Projects_Resources_Relation.resource_id = Resources.id \
     WHERE Projects.id = " + id);

  return new Promise((resolve, reject) => {
    resolve({
      ...projectInfo,
      tasks: projectTasks,
      resources: projectResources
    });
  })
}

async function add(projectInfo) {
  const ids = await DB("Projects").insert(projectInfo);

  return findById(ids[0]);
}

module.exports = {
  find,
  findById,
  add
};