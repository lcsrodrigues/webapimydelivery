const conn = require('../config/connection');

class Pessoas {
    create(pessoa, res) {
        const sql = "INSERT INTO Produtos SET ?";

        conn.query(sql, pessoa, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    };

    getAll(res) {
        const sql = "SELECT * FROM Produtos";

        conn.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Pessoas;