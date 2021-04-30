const conn = require('../config/connection');

class Refeicoes {
    create(refeicao, res) {
        const sql = "INSERT INTO Refeicoes SET ?";

        conn.query(sql, refeicao, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    };

    getAll(res) {
        const sql = "SELECT * FROM Refeicoes";

        conn.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Refeicoes;