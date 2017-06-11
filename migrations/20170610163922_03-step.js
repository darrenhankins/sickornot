
exports.up = function(knex, Promise) {
  return knex.schema.createTable('step', table => {
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.integer('date_id').references('date.id').unsigned().onDelete('cascade');
    table.text('per_day').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('step');
};
