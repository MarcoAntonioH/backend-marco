const { Router } = require("express");
const {
  createTecnologiaHandler,
  getAllTecnologiasHandler,
  getTecnologiaByIdHandler,
  updateTecnologiaHandler,
  deleteTecnologiaHandler,
} = require("../handlers/tecnologiaHandler");

const router = Router();

router.post("/", createTecnologiaHandler);
router.get("/", getAllTecnologiasHandler);
router.get("/:id", getTecnologiaByIdHandler);
router.put("/:id", updateTecnologiaHandler);
router.delete("/:id", deleteTecnologiaHandler);

module.exports = router;
