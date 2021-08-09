const Recados = require('../models/recadosModel');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

module.exports = app => {

    app.get('/_api/comemoracao/recados', (req, res) => {
        Recados.getAll(res);
    });

    app.post('/_api/comemoracao/recado', upload.single('PERFIL'), (req, res) => {
        console.log(req.file);
        console.log(req.body);

        var data = {
            NOME: req.body.NOME,
            DESCRICAO: req.body.DESCRICAO,
            PERFIL: req.file.path
        }

        console.log(data);

        Recados.create(data, res);
    });
}