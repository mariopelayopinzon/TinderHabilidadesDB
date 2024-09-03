exports.up = function(knex) {
    return knex.schema.createTable('proyectos', function(table) {
      table.increments('id').primary();
      table.integer('empresa_id').unsigned().references('id').inTable('usuarios');
      table.string('titulo', 255);
      table.text('descripcion');
      table.string('habilidad_requerida', 100);
      table.integer('horas_estimada');
      table.timestamp('fecha_creacion').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('proyectos');
  };
  