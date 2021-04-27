class Tables {
    init(conn) {
        this.conn = conn;
        this.createProdutos();
        this.createUsuarios();
        this.createExercicios();
    }
    createProdutos() {

        const sql = 'CREATE TABLE IF NOT EXISTS Produtos (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, PRECO FLOAT NOT NULL, DESCRICAO TEXT, ATIVO BOOLEAN, IMAGEM VARCHAR(50), PRIMARY KEY(id))';

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Produtos criada com sucesso.");
            }
        });
    }

    createUsuarios() {

        const sql = 'CREATE TABLE IF NOT EXISTS Usuarios (id INT NOT NULL AUTO_INCREMENT, NOME VARCHAR(100) NOT NULL, IDADE INT, GENERO VARCHAR(1), FOTO VARCHAR(50), PRIMARY KEY(id))';

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Usuarios criada com sucesso.");
            }
        });
    }

    createExercicios() {

        const sql = 'CREATE TABLE IF NOT EXISTS Exercicios (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, REPETICAO VARCHAR(100) NOT NULL, DESCRICAO TEXT, IMAGEM VARCHAR(50), PESSOA_ID INT NOT NULL, PRIMARY KEY(id))';

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Exercicios criada com sucesso.");
            }
        });
    }
}

module.exports = new Tables;