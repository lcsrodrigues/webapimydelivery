const Eventos = require('../models/eventosModel');

module.exports = app => {
    
    app.get('/Eventos', (req, res) => {
        Eventos.getAll(res);
    });

    app.post('/Evento', (req, res) => {
        Eventos.create(req.body, res);
    });
}