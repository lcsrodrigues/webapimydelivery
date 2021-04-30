const Refeicoes = require('../models/refeicoesModel');

module.exports = app => {

    app.get('/Refeicoes', (req, res) => {
        Refeicoes.getAll(res);
    });

    app.post('/Refeicao', (req, res) => {
        Refeicoes.create(req.body, res);
    });
}