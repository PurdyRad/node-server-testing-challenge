
exports.up = function(knex) {
  return knex.schema
  .createTable('producers', table => {
      table.increments('producers_id')
      table.string('name', 44).unique().notNullable();
      table.string('genre', 30);
  });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('producers');
};
