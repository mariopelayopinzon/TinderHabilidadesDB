const knex = require('knex')(require('../knexfile').development);

class Proyecto {
  static async crearProyecto(proyecto) {
    const [id] = await knex('proyectos').insert(proyecto).returning('id');
    return id;
  }

  static async obtenerProyectoPorId(id) {
    return await knex('proyectos').where({ id }).first();
  }

  static async actualizarProyecto(id, datosActualizados) {
    return await knex('proyectos').where({ id }).update(datosActualizados);
  }

  static async eliminarProyecto(id) {
    return await knex('proyectos').where({ id }).del();
  }

  static async listarProyectos() {
    return await knex('proyectos').select('*');
  }
}

module.exports = Proyecto;
