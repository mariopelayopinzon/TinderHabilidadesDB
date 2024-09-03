const Usuario = require('../models/users');

class UsuariosController {
  static async crearUsuario(req, res) {
    try {
      const id = await Usuario.crearUsuario(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async obtenerUsuarioPorId(req, res) {
    try {
      const usuario = await Usuario.obtenerUsuarioPorId(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async actualizarUsuario(req, res) {
    try {
      const id = req.params.id;
      const datosActualizados = req.body;
      const actualizado = await Usuario.actualizarUsuario(id, datosActualizados);
      if (actualizado) {
        res.json({ message: 'Usuario actualizado correctamente' });
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async eliminarUsuario(req, res) {
    try {
      const id = req.params.id;
      const eliminado = await Usuario.eliminarUsuario(id);
      if (eliminado) {
        res.json({ message: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async listarUsuarios(req, res) {
    try {
      const usuarios = await Usuario.listarUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsuariosController;
