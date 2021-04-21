const express = require('express');
const clienteController = require('./controllers/clienteController');
const produtoController = require('./controllers/produtoController');

const router = express.Router();

router.get('/', (req,res)=>{
    return res.send("Bem vindo!")
});

router.get('/produtos', produtoController.index);

router.post('/produtos', produtoController.store);

router.put('/produtos/:produto_id', produtoController.update);

router.delete('/produtos/:produto_id', produtoController.delete);

router.get('/produtos/:produto_id', produtoController.findByPk);

router.get('/clientes', clienteController.index);

router.post('/clientes', clienteController.store);

router.put('/clientes/:cliente_id', clienteController.update);

router.delete('/clientes/:cliente_id', clienteController.delete);

router.get('/clientes/:cliente_id', clienteController.findByPk);





module.exports = router;

