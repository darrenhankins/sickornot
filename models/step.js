const Model = require('objection').Model;

class Step extends Model {
  static get tableName() {
    return 'step';
  }

  static get relationMappings() {
    return {
      // a step can have 1 user
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'user.id',
          to: 'step.user_id'
        }
      },
      // a date can have 1 step
      date: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/date',
        join: {
          from: 'date.id',
          to: 'step.date_id'
        }
      }
    };
  }
}

module.exports = Step;
