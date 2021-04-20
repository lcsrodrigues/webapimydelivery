const express = require('express');
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


module.exports = router;

