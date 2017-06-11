
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
    .then(function() {
      const users = [{
        username: 'Jim',
        age: 60,
        sex: 'male',
        ethnic: '',
        height: 68,
        weight: 150
      },{
        username: 'Betty',
        age: 45,
        sex: 'female',
        ethnic: '',
        height: 60,
        weight: 125
      },{
        username: 'Paul',
        age: 25,
        sex: 'male',
        ethnic: '',
        height: 74,
        weight: 180
      }];
      return knex('user').insert(users);
    });
};
