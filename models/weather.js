const Model = require('objection').Model;

class Weather extends Model {
  static get tableName() {
    return 'weather';
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
      user_weather: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user_weather',
        join: {
          from: 'weather.id',
          to: 'user_weather.weather_id'
        }
      }
    };
  }
}

module.exports = Weather;
