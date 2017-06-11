const Model = require('objection').Model;

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    return {
      // a user can have many date
      date: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/date',
        join: {
          from: 'user.id',
          to: 'date.user_id'
        }
      },
      // a user can have many step
      step: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/step',
        join: {
          from: 'user.id',
          to: 'step.user_id'
        }
      },
      // a user can have many sick
      sick: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/sick',
        join: {
          from: 'user.id',
          to: 'sick.user_id'
        }
      },
      // a user can have many user_weather
      user_weather: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/user_weather',
        join: {
          from: 'user.id',
          to: 'user_weather.user_id'
        }
      }
    };
  }
}

module.exports = User;
