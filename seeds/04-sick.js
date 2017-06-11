
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "sick"; ALTER SEQUENCE sick_id_seq RESTART WITH 1')
    .then(function() {
      const sicks = [{
        user_id: 1,
        date_id: 1,
        is_sick: false
      },{
        user_id: 2,
        date_id: 2,
        is_sick: true
      },{
        user_id: 1,
        date_id: 3,
        is_sick: false
      },{
        user_id: 3,
        date_id: 4,
        is_sick: false
      }];
      return knex('sick').insert(sicks);
    });
};
