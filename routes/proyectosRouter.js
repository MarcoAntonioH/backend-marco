const { Router } = require("express");
const {
  createProyectoHandler,
  getAllProyectosHandler,
  getProyectoByIdHandler,
  updateProyectoHandler,
  deleteProyectoHandler,
} = require("../handlers/proyectosHandler");

const proyectosRouter = Router();

proyectosRouter.post("/", createProyectoHandler);
proyectosRouter.get("/", getAllProyectosHandler);
proyectosRouter.get("/:id", getProyectoByIdHandler);
proyectosRouter.patch("/:id", updateProyectoHandler);
proyectosRouter.delete("/:id", deleteProyectoHandler);

module.exports = proyectosRouter;
