const Model = require('objection').Model;

class Date extends Model {
  static get tableName() {
    return 'date';
  }

  static get relationMappings() {
    return {
      // a date can have 1 user
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'user.id',
          to: 'date.user_id'
        }
      },
      // a date can have 1 step
      step: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/step',
        join: {
          from: 'date.id',
          to: 'step.date_id'
        }
      },
      // a user can have one date
      sick: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/sick',
        join: {
          from: 'date.id',
          to: 'sick.date_id'
        }
      },
      // a user can have many user_weather
      user_weather: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user_weather',
        join: {
          from: 'date.id',
          to: 'user_weather.date_id'
        }
      }
    };
  }
}

module.exports = Date;
