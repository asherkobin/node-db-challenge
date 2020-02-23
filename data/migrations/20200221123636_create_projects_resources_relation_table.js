exports.up = function(knex) {
  return knex.schema
    .createTable("Projects_Resources_Relation", table => {
      table.primary(["project_id", "resource_id"]);
      table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
      table.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Resources")
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Projects_Resources_Relation")
};
