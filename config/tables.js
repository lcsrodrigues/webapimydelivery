class Tables {
    init(conn) {
        this.conn = conn;
        this.createProdutos();
    }
    createProdutos() {

        const sql = `CREATE TABLE IF NOT EXISTS Produtos (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, PRECO FLOAT NOT NULL, DESCRICAO TEXT, ATIVO BOOLEAN, IMAGEM VARCHAR(50), PRIMARY KEY(id))
                     CREATE TABLE IF NOT EXISTS Usuarios (id INT NOT NULL AUTO_INCREMENT, NOME VARCHAR(100) NOT NULL, IDADE INT, GENERO VARCHAR(1), FOTO VARCHAR(50), PRIMARY KEY(id))             
                     CREATE TABLE IF NOT EXISTS Exercicios (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, REPETICAO VARCHAR(100) NOT NULL, DESCRICAO TEXT, IMAGEM VARCHAR(50), PESSOA_ID INT NOT NULL, PRIMARY KEY(id))`;

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabelas criadas.");
            }
        });
    }
}

module.exports = new Tables;