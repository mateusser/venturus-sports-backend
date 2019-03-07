exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user', table => {
      table.increments('id').primary()
      table.string('username')
      table.string('name')
      table.string('email')
      table.string('city')
      table.integer('ridegroup')
      table.boolean('sun')
      table.boolean('mon')
      table.boolean('tue')
      table.boolean('wed')
      table.boolean('thu')
      table.boolean('fri')
      table.boolean('sat')
      table.boolean('isActive')
      table.unique(['username', 'email'])
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user')
  ])
}
