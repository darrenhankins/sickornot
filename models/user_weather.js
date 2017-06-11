const Model = require('objection').Model;

class User_weather extends Model {
  static get tableName() {
    return 'user_weather';
  }

  static get relationMappings() {
    return {
      // a user_weather can have 1 user
      // user: {
      //   relation: Model.BelongsToOneRelation,
      //   modelClass: __dirname + '/user',
      //   join: {
      //     from: 'user.id',
      //     to: 'user_weather.user_id'
      //   }
      // },
      // a userweather can have 1 date
      date: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/date',
        join: {
          from: 'date.id',
          to: 'user_weather.date_id'
        }
      },
      weather: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/weather',
        join: {
          from: 'user_weather.weather_id',
          to: 'weather.id'
        }
      }
    };
  }
}

module.exports = User_weather;
