const Contrato = require('../models/contracts');

class ContratosController {
  static async crearContrato(req, res) {
    try {
      const id = await Contrato.crearContrato(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerContratoPorId(req, res) {
    try {
      const contrato = await Contrato.obtenerContratoPorId(req.params.id);
      if (contrato) {
        res.json(contrato);
      } else {
        res.status(404).json({ message: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizarContrato(req, res) {
    try {
      const id = req.params.id;
      const datosActualizados = req.body;
      const actualizado = await Contrato.actualizarContrato(id, datosActualizados);
      if (actualizado) {
        res.json({ message: 'Contrato actualizado correctamente' });
      } else {
        res.status(404).json({ message: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminarContrato(req, res) {
    try {
      const id = req.params.id;
      const eliminado = await Contrato.eliminarContrato(id);
      if (eliminado) {
        res.json({ message: 'Contrato eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Contrato no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarContratos(req, res) {
    try {
      const contratos = await Contrato.listarContratos();
      res.json(contratos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarContratosPorUsuarioId(req, res) {
    try {
      const contratos = await Contrato.listarContratosPorUsuarioId(req.params.usuarioId);
      res.json(contratos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarContratosPorProyectoId(req, res) {
    try {
      const contratos = await Contrato.listarContratosPorProyectoId(req.params.proyectoId);
      res.json(contratos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContratosController;
