// contratosModel.js
const knex = require('knex')(require('../knexfile').development);

class Contrato {
  static async crearContrato(contrato) {
    const [id] = await knex('contratos').insert(contrato).returning('id');
    return id;
  }

  static async obtenerContratoPorId(id) {
    return await knex('contratos').where({ id }).first();
  }

  static async actualizarContrato(id, datosActualizados) {
    return await knex('contratos').where({ id }).update(datosActualizados);
  }

  static async eliminarContrato(id) {
    return await knex('contratos').where({ id }).del();
  }

  static async listarContratos() {
    return await knex('contratos').select('*');
  }

  static async listarContratosPorUsuarioId(usuarioId) {
    return await knex('contratos').where({ usuario_id: usuarioId });
  }

  static async listarContratosPorProyectoId(proyectoId) {
    return await knex('contratos').where({ proyecto_id: proyectoId });
  }
}

module.exports = Contrato;
