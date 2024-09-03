require('dotenv').config(); // Cargar las variables de entorno desde el .env
const express = require('express');
const UsuariosController = require('./controllers/userController');
const ProyectosController = require('./controllers/proyectsController');
const ContratosController = require('./controllers/contractsController');

const app = express();
app.use(express.json());

// Rutas para usuarios
app.post('/usuarios', UsuariosController.crearUsuario);
app.get('/usuarios/:id', UsuariosController.obtenerUsuarioPorId);
app.put('/usuarios/:id', UsuariosController.actualizarUsuario);
app.delete('/usuarios/:id', UsuariosController.eliminarUsuario);
app.get('/usuarios', UsuariosController.listarUsuarios);

// Rutas para proyectos
app.post('/proyectos', ProyectosController.crearProyecto);
app.get('/proyectos/:id', ProyectosController.obtenerProyectoPorId);
app.put('/proyectos/:id', ProyectosController.actualizarProyecto);
app.delete('/proyectos/:id', ProyectosController.eliminarProyecto);
app.get('/proyectos', ProyectosController.listarProyectos);

// Rutas para contratos
app.post('/contratos', ContratosController.crearContrato);
app.get('/contratos/:id', ContratosController.obtenerContratoPorId);
app.put('/contratos/:id', ContratosController.actualizarContrato);
app.delete('/contratos/:id', ContratosController.eliminarContrato);
app.get('/contratos', ContratosController.listarContratos);
app.get('/contratos/usuario/:usuarioId', ContratosController.listarContratosPorUsuarioId);
app.get('/contratos/proyecto/:proyectoId', ContratosController.listarContratosPorProyectoId);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
