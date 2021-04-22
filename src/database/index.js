const Sequelize = require('sequelize');

const dbConfig = require('../config/database');
const produtoController = require('../controllers/produtoController');

const Produto = require('../models/produto');
const Cliente = require('../models/cliente');

const connection = new Sequelize(dbConfig);

Produto.init(connection);
Cliente.init(connection);


// try {
//     connection.authenticate();
//     console.log("Conectado com sucesso");
// } catch(error){
//     console.error('Algo deu errado ao conectar com o banco', error);
// }

module.exports = connection;