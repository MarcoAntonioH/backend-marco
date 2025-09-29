const { Proyecto } = require("../db_connection");

// Crear un proyecto
const createProyecto = async (data) => {
  return await Proyecto.create(data);
};

// Obtener todos los proyectos
const getAllProyectos = async () => {
  return await Proyecto.findAll({
    order: [["createdAt", "DESC"]],
  });
};

// Obtener proyecto por ID
const getProyectoById = async (id) => {
  return await Proyecto.findByPk(id);
};

// Actualizar proyecto
const updateProyecto = async (id, data) => {
  const proyecto = await Proyecto.findByPk(id);
  if (!proyecto) return null;
  await proyecto.update(data);
  return proyecto;
};

// Eliminar proyecto
const deleteProyecto = async (id) => {
  const proyecto = await Proyecto.findByPk(id);
  if (!proyecto) return null;
  await proyecto.destroy();
  return proyecto;
};

module.exports = {
  createProyecto,
  getAllProyectos,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
};
