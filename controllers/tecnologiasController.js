const { Tecnologia } = require("../db_connection");


const createTecnologia = async (data) => {
  return await Tecnologia.create(data);
};

const getAllTecnologias = async () => {
  return await Tecnologia.findAll();
};


const getTecnologiaById = async (id) => {
  return await Tecnologia.findByPk(id);
};


const updateTecnologia = async (id, data) => {
  const tecnologia = await Tecnologia.findByPk(id);
  if (!tecnologia) return null;
  return await tecnologia.update(data);
};


const deleteTecnologia = async (id) => {
  const tecnologia = await Tecnologia.findByPk(id);
  if (!tecnologia) return null;
  await tecnologia.destroy();
  return tecnologia;
};

module.exports = {
  createTecnologia,
  getAllTecnologias,
  getTecnologiaById,
  updateTecnologia,
  deleteTecnologia,
};
