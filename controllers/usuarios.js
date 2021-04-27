const Usuarios = require('./../models/usuariosModel');

module.exports = app => {

    app.get('/Pessoas', (req, res) => {
        Usuarios.getAll(res);
    });

    app.post('/Pessoa', (req, res) => {
        Usuarios.create(req.body, res);
    });
}