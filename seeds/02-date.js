
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "date"; ALTER SEQUENCE date_id_seq RESTART WITH 1')
    .then(function() {
      const dates = [{
        user_id: 1,
        date_time: '2004-10-19 10:23:54'
      },{
        user_id: 2,
        date_time: '2004-10-20 10:23:54'
      },{
        user_id: 1,
        date_time: '2004-10-21 10:23:54'
      },{
        user_id: 3,
        date_time: '2004-10-23 10:23:54'
      }];
      return knex('date').insert(dates);
    });
};
