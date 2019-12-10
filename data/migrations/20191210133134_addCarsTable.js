
exports.up = function(knex) {
  return knex.schema.createTable("cars",tbl=>{
      tbl.increments();

      tbl.string("VIN", 255)
        .notNullable()
        .unique();

      tbl.string("Make", 255)
        .notNullable();

      tbl.string("Model", 255)
        .notNullable();

      tbl.integer("Mileage")
        .notNullable();

      tbl.string("Transmission", 255);

      tbl.string("Status", 255);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
