const customExpress = require('./config/customExpress');
const app = customExpress();

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log('Servidor rodando na porta %s', PORT);
});