const {
  createProyecto,
  getAllProyectos,
  getProyectoById,
  updateProyecto,
  deleteProyecto,
} = require("../controllers/proyectosController");

// Crear
const createProyectoHandler = async (req, res) => {
  try {
    const { nombre, descripcion, link } = req.body;

    // Validaciones
    if (!nombre || !descripcion || !link) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(link)) {
      return res.status(400).json({ error: "El link debe ser una URL válida" });
    }

    const nuevo = await createProyecto({ nombre, descripcion, link });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos
const getAllProyectosHandler = async (req, res) => {
  try {
    const proyectos = await getAllProyectos();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener por ID
const getProyectoByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await getProyectoById(id);
    if (!proyecto) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
const updateProyectoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, link } = req.body;

    if (!nombre && !descripcion && !link) {
      return res.status(400).json({ error: "Debes enviar al menos un campo para actualizar" });
    }
    if (link) {
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!urlRegex.test(link)) {
        return res.status(400).json({ error: "El link debe ser una URL válida" });
      }
    }

    const actualizado = await updateProyecto(id, { nombre, descripcion, link });
    if (!actualizado) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar
const deleteProyectoHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await deleteProyecto(id);
    if (!eliminado) return res.status(404).json({ error: "Proyecto no encontrado" });
    res.json({ message: "Proyecto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProyectoHandler,
  getAllProyectosHandler,
  getProyectoByIdHandler,
  updateProyectoHandler,
  deleteProyectoHandler,
};
