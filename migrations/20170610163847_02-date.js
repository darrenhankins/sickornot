
exports.up = function(knex, Promise) {
  return knex.schema.createTable('date', table => {
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.dateTime('date_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('date');
};
