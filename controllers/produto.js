const Produtos = require('./../models/produtosModel');

module.exports = app => {

    app.get('/Cardapio', (req, res) => {
        Produtos.getAll(res);
    });

    app.post('/Produtos', (req, res) => {
        Produtos.create(req.body, res);
    });
}