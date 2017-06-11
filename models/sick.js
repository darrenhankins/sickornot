const Model = require('objection').Model;

class Sick extends Model {
  static get tableName() {
    return 'sick';
  }

  static get relationMappings() {
    return {
      // a sick can have 1 user
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/user',
        join: {
          from: 'user.id',
          to: 'sick.user_id'
        }
      },
      // a sick can have 1 date
      date: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/date',
        join: {
          from: 'date.id',
          to: 'sick.date_id'
        }
      }
    };
  }
}

module.exports = Sick;
