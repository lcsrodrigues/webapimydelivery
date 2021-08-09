const Recados = require('../models/recadosModel');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + "_" + file.originalname);
    }
});

const upload = multer({ storage: storage });
// const upload = multer({ dest: 'uploads/' });

module.exports = app => {

    app.get('/_api/comemoracao/recados', (req, res) => {
        Recados.getAll(res);
    });

    app.post('/_api/comemoracao/recado', upload.single('PERFIL'), (req, res) => {
        console.log(req.file);
        var data = {
            NOME: req.body.NOME,
            DESCRICAO: req.body.DESCRICAO,
            PERFIL: (typeof (req.file) != "undefined") ? req.file.path : null
        }

        console.log("data ======> ", data);

        Recados.create(data, res);
    });
}