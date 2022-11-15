import express from "express";
import livroRoutes from "./livroRoutes.js";
import autorRoutes from "./autorRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Olá, terráqueo!');
    })

    app.use(
        express.json(),
        autorRoutes
    );

    app.use(
        express.json(),
        livroRoutes
    );
};

export default routes;