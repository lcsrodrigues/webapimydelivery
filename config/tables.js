class Tables {
    init(conn) {
        this.conn = conn;
        this.createProdutos();
    }
    createProdutos() {

        const sql = "CREATE TABLE IF NOT EXISTS Produtos (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, PRECO FLOAT NOT NULL, DESCRICAO TEXT, ATIVO BOOLEAN, IMAGEM VARCHAR(50), PRIMARY KEY(id))";

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Produtos OK.");
            }
        });
    }
}

module.exports = new Tables;