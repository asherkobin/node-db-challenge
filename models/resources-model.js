const DB = require("../data/dbConfig");

async function find() {
  return DB("Resources");
}

async function findById(id) {
  return DB("Resources")
    .where({ id })
    .first();
}

async function add(projectInfo) {
  const ids = await DB("Resources").insert(projectInfo);

  return findById(ids[0]);
}

module.exports = {
  find,
  add
};