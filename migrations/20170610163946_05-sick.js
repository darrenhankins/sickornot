
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sick', table => {
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.integer('date_id').references('date.id').unsigned().onDelete('cascade');
    table.boolean('is_sick').defaultTo('false');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('sick');
};
