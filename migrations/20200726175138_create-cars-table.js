
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.text('VIN', 128)
        .unique()
        .notNullable()
    tbl.text('Make', 128)
        .notNullable()
    tbl.text('Model', 128)
        .notNullable()
    tbl.text('Mileage')
        .notNullable()
    tbl.text('Exterior-Condition', 128)
    tbl.boolean('Salvage')
    tbl.text('Color', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
