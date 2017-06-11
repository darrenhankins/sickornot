
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_weather"; ALTER SEQUENCE user_weather_id_seq RESTART WITH 1')
    .then(function() {
      const user_weathers = [{
        user_id: 1,
        date_id: 1,
        weather_id: 1,
        state: 'CO',
        city: 'Denver',
        zip: '80202',
        temperature: 85
      },{
        user_id: 2,
        date_id: 2,
        weather_id: 2,
        state: 'CO',
        city: 'Denver',
        zip: '80202',
        temperature: 85
      },{
        user_id: 1,
        date_id: 3,
        weather_id: 3,
        state: 'CO',
        city: 'Denver',
        zip: '80202',
        temperature: 60
      },{
        user_id: 3,
        date_id: 4,
        weather_id: 4,
        state: 'CO',
        city: 'Denver',
        zip: '80202',
        temperature: 60
      }];
      return knex('user_weather').insert(user_weathers);
    });
};
