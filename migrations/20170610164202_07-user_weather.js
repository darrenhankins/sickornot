
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_weather', table => {
    table.increments();
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.integer('date_id').references('date.id').unsigned().onDelete('cascade');
    table.integer('weather_id').references('weather.id').unsigned().onDelete('cascade');
    table.text('state');
    table.text('city');
    table.text('zip');
    table.integer('temperature');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_weather');
};
