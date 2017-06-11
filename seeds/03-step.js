
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "step"; ALTER SEQUENCE step_id_seq RESTART WITH 1')
    .then(function() {
      const steps = [{
        user_id: 1,
        date_id: 1,
        per_day: 1000
      },{
        user_id: 2,
        date_id: 2,
        per_day: 2000
      },{
        user_id: 1,
        date_id: 3,
        per_day: 800
      },{
        user_id: 3,
        date_id: 4,
        per_day: 6000
      }];
      return knex('step').insert(steps);
    });
};
