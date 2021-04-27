const Exercicios = require('../models/exerciciosModel');

module.exports = app => {

    app.get('/Exercicios', (req, res) => {
        Exercicios.getAll(res);
    });

    app.post('/Exercicio', (req, res) => {
        Exercicios.create(req.body, res);
    });
}