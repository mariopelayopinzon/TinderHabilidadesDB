exports.up = function(knex) {
    return knex.schema.createTable('contratos', function(table) {
      table.increments('id').primary();
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios');
      table.integer('proyecto_id').unsigned().references('id').inTable('proyectos');
      table.integer('horas_trabajadas');
      table.decimal('total_pago', 10, 2);
      table.decimal('anticipo_pago', 10, 2);
      table.timestamp('fecha_inicio');
      table.timestamp('fecha_fin');
      table.string('estado', 50).defaultTo('pendiente');
      table.integer('calificacion').checkBetween([1, 5]);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contratos');
  };
  