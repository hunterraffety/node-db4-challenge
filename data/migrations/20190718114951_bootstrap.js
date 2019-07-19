exports.up = function(knex) {
  //
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('recipe_name')
        .notNullable()
        .unique();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .string('ingredient_name')
        .notNullable()
        .unique();
      tbl.float('quantity').notNullable();
    })
    .createTable('instructions', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('recipe_instructions').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients');
};
