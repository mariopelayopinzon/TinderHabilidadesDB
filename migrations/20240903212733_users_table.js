exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
      table.increments('id').primary();
      table.string('nombre', 100);
      table.string('email', 100).unique().notNullable();
      table.string('password_hash', 255).notNullable();
      table.text('habilidades');
      table.decimal('tarifa_hora', 10, 2);
      table.boolean('es_empresa').defaultTo(false);
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
  };
  