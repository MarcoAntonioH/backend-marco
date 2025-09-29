const { Router } = require("express");
const proyectosRouter = require("./proyectosRouter");
const tecnologiaRouter = require("./tecnologiaRouter");
const router = Router();

router.use("/proyectos", proyectosRouter);
router.use("/tecnologias", tecnologiaRouter);

module.exports = router;
