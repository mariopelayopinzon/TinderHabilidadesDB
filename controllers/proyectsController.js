const Proyecto = require('../models/proyects');

class ProyectosController {
  static async crearProyecto(req, res) {
    try {
      const id = await Proyecto.crearProyecto(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerProyectoPorId(req, res) {
    try {
      const proyecto = await Proyecto.obtenerProyectoPorId(req.params.id);
      if (proyecto) {
        res.json(proyecto);
      } else {
        res.status(404).json({ message: 'Proyecto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizarProyecto(req, res) {
    try {
      const id = req.params.id;
      const datosActualizados = req.body;
      const actualizado = await Proyecto.actualizarProyecto(id, datosActualizados);
      if (actualizado) {
        res.json({ message: 'Proyecto actualizado correctamente' });
      } else {
        res.status(404).json({ message: 'Proyecto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminarProyecto(req, res) {
    try {
      const id = req.params.id;
      const eliminado = await Proyecto.eliminarProyecto(id);
      if (eliminado) {
        res.json({ message: 'Proyecto eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Proyecto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarProyectos(req, res) {
    try {
      const proyectos = await Proyecto.listarProyectos();
      res.json(proyectos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ProyectosController;
