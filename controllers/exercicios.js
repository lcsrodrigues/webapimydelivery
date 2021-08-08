const Exercicios = require('../models/exerciciosModel');

module.exports = app => {

    app.get('/_api/myfit/exercicios', (req, res) => {
        Exercicios.getAll(res);
    });

    app.post('/_api/myfit/exercicio', (req, res) => {
        Exercicios.create(req.body, res);
    });
}