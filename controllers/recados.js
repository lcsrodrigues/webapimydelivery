const Recados = require('../models/recadosModel');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports = app => {

    app.get('/_api/comemoracao/recados', (req, res) => {
        Recados.getAll(res);
    });

    app.post('/_api/comemoracao/recado', upload.single('perfil'), (req, res) => {
        console.log(req.file);
        Recados.create(req.body, res);
    });
}