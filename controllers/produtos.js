module.exports = app =>{
    app.get('/Produtos',(req,res)=>{
        res.status(200).send('Produtos');
    });
}