exports.up = function(knex) {
  return knex.schema
    .createTable("Tasks", table => {
      table.increments();
      table.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.text("description").notNullable();
      table.text("notes");
      table.boolean("completed").notNullable().default(false);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Tasks")
};
