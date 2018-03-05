

exports.up = function(knex, Promise) {
  return knex.schema.createTable('pennyworths', table => {
    table.increments('id')
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pennyworths')
};
