const DB = require("../data/dbConfig");

async function find() {
  return DB("Projects");
}

async function findById(id) {
  return DB("Projects")
    .where({ id })
    .first();
}

async function add(projectInfo) {
  const ids = await DB("Projects").insert(projectInfo);

  return findById(ids[0]);
}

module.exports = {
  find,
  add
};