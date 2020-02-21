exports.up = function(knex) {
  return knex.schema
    .createTable("Projects", table => {
      table.increments();
      table.text("name").notNullable();
      table.text("description");
      table.boolean("completed").notNullable().default(false);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Projects")
};
