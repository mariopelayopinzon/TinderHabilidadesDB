const knex = require('knex')(require('../knexfile').development);

class Usuario {
  static async crearUsuario(usuario) {
    const [id] = await knex('usuarios').insert(usuario).returning('id');
    return id;
  }

  static async obtenerUsuarioPorId(id) {
    return await knex('usuarios').where({ id }).first();
  }

  static async actualizarUsuario(id, datosActualizados) {
    return await knex('usuarios').where({ id }).update(datosActualizados);
  }

  static async eliminarUsuario(id) {
    return await knex('usuarios').where({ id }).del();
  }

  static async listarUsuarios() {
    return await knex('usuarios').select('*');
  }
}

module.exports = Usuario;
