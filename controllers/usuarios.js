const Usuarios = require('./../models/usuariosModel');

module.exports = app => {

    app.get('/Usuarios', (req, res) => {
        Usuarios.getAll(res);
    });

    app.post('/Usuario', (req, res) => {
        Usuarios.create(req.body, res);
    });
}