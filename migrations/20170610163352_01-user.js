
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments();
    table.text('username').notNullable();
    table.integer('age');
    table.text('sex');
    table.text('ethnic');
    table.integer('height');
    table.integer('weight');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user');
};
