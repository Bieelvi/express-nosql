import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

export default router
    .get("/autores", AutorController.buscaTodos)
    .post("/autor", AutorController.novo)
    .put("/autor/:id", AutorController.atualiza)
    .delete("/autor/:id", AutorController.remove)
    .get("/autor/:id", AutorController.busca);
