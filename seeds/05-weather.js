
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "weather"; ALTER SEQUENCE weather_id_seq RESTART WITH 1')
    .then(function() {
      const weathers = [{
        name: 'snow'
      },{
        name: 'rain'
      },{
        name: 'cloudy'
      },{
        name: 'foggy'
      }];
      return knex('weather').insert(weathers);
    });
};
