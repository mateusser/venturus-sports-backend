const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const knexConnection = Knex(connection)

Model.knex(knexConnection)

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['firstName', 'lastName'],

      properties: {
        id: {type: 'integer'},
        username: {type: 'string', minLength: 1, maxLength: 255},
        name: {type: 'string', minLength: 1, maxLength: 255},
        email: {type: 'string', minLength: 1, maxLength: 255},
        city: {type: 'string', minLength: 1, maxLength: 255},
        ridegroup: {type: 'integer', minimum: 1, maximum: 3},
        sun: {type: 'boolean'},
        mon: {type: 'boolean'},
        tue: {type: 'boolean'},
        wed: {type: 'boolean'},
        thu: {type: 'boolean'},
        fri: {type: 'boolean'},
        sat: {type: 'boolean'}
      }
    };
  }
}

module.exports = { User }