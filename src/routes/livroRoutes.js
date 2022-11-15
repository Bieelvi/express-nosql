import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

export default router
    .get("/livros", LivroController.buscaTodos)
    .post("/livro", LivroController.novo)
    .get("/livros/busca", LivroController.buscaEspecifica)
    .put("/livro/:id", LivroController.atualiza)
    .delete("/livro/:id", LivroController.remove)
    .get("/livro/:id", LivroController.busca);
