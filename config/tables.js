class Tables {
    init(conn) {
        this.conn = conn;
        this.createProdutos();
        this.createUsuarios();
        this.createExercicios();
        this.createRefeicoes();
        this.createEventos();
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

    //CRUD do MyFit
    createExercicios() {

        const sql = 'CREATE TABLE IF NOT EXISTS Exercicios (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, REPETICAO VARCHAR(100) NOT NULL, DESCRICAO TEXT, IMAGEM VARCHAR(50), SERIE VARCHAR(100), PESSOA_ID INT NOT NULL, PRIMARY KEY(id))';

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Exercicios criada com sucesso.");
            }
        });
    }

    createRefeicoes() {

        const sql = 'CREATE TABLE IF NOT EXISTS Refeicoes (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, HORARIO VARCHAR(100) NOT NULL, DESCRICAO TEXT, PESSOA_ID INT NOT NULL, PRIMARY KEY(id))';

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Refeicoes criada com sucesso.");
            }
        });
    }

    createEventos() {

        const sql = "CREATE TABLE IF NOT EXISTS Eventos (id INT NOT NULL AUTO_INCREMENT, TITULO VARCHAR(100) NOT NULL, DESCRICAO TEXT, DATA_CRIACAO DATETIME, CRIADOR VARCHAR(255), PRIMARY KEY(id))";

        this.conn.query(sql, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Tabela Eventos criada com sucesso.");
            }
        });
    }
}

module.exports = new Tables;