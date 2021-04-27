const conn = require('../config/connection');

class Exercicios {
    create(exercicio, res) {
        const sql = "INSERT INTO Exercicios SET ?";

        conn.query(sql, exercicio, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    };

    getAll(res) {
        const sql = "SELECT * FROM Exercicios";

        conn.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Exercicios;