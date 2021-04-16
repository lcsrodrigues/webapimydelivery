module.exports = app =>{
    app.get('/Clientes', (req, res) => {
        res.send('Listar todos os clientes');
    });
}