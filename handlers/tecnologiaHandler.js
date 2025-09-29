const {
  createTecnologia,
  getAllTecnologias,
  getTecnologiaById,
  updateTecnologia,
  deleteTecnologia,
} = require("../controllers/tecnologiasController");


const createTecnologiaHandler = async (req, res) => {
  try {
    const { nombre, link } = req.body;

    if (!nombre || !link) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const urlRegex = /^(https?:\/\/)[\w.-]+(\.[\w\.-]+)+[/#?]?.*$/;
    if (!urlRegex.test(link)) {
      return res.status(400).json({ error: "El link debe ser una URL válida." });
    }

    const nueva = await createTecnologia({ nombre, link });
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllTecnologiasHandler = async (req, res) => {
  try {
    const tecnologias = await getAllTecnologias();
    res.json(tecnologias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTecnologiaByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) return res.status(400).json({ error: "El ID debe ser numérico." });

    const tecnologia = await getTecnologiaById(id);
    if (!tecnologia) return res.status(404).json({ error: "Tecnología no encontrada." });

    res.json(tecnologia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTecnologiaHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, link } = req.body;

    if (isNaN(id)) return res.status(400).json({ error: "El ID debe ser numérico." });
    if (!nombre && !link) return res.status(400).json({ error: "Debe enviar al menos un campo para actualizar." });

    if (link) {
      const urlRegex = /^(https?:\/\/)[\w.-]+(\.[\w\.-]+)+[/#?]?.*$/;
      if (!urlRegex.test(link)) {
        return res.status(400).json({ error: "El link debe ser una URL válida." });
      }
    }

    const updated = await updateTecnologia(id, { nombre, link });
    if (!updated) return res.status(404).json({ error: "Tecnología no encontrada." });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTecnologiaHandler = async (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(id)) return res.status(400).json({ error: "El ID debe ser numérico." });

    const deleted = await deleteTecnologia(id);
    if (!deleted) return res.status(404).json({ error: "Tecnología no encontrada." });

    res.json({ message: "Tecnología eliminada correctamente." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTecnologiaHandler,
  getAllTecnologiasHandler,
  getTecnologiaByIdHandler,
  updateTecnologiaHandler,
  deleteTecnologiaHandler,
};
