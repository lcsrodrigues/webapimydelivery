const customExpress = require('./config/customExpress');
const conn = require('./config/connection');
const tables = require('./config/tables');

const PORT = process.env.PORT || 3000;
//Em caso de erro ao testar a conexão com o banco de dados, usar o seguinte script no mysql workbench
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha'
// flush privileges
// conn.connect(err => {
//     if (err) {
//         console.log(err);
//     } else {
//     }
// });

console.log("conectado ao banco de dados com sucesso");
tables.init(conn);

const app = customExpress();

app.get('/', (req, res) => {
    res.status(200).send("Web api online");
});

app.listen(PORT, () => {
    console.log("servidor rodando na porta %s,", PORT);
});