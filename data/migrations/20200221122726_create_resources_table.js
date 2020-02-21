exports.up = function(knex) {
  return knex.schema
    .createTable("Resources", table => {
      table.increments();
      table.text("name").notNullable().unique();
      table.text("description");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Resources")
};
