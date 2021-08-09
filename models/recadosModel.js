const conn = require('../config/connection');

class Recados {
    create(recado, res) {
        const sql = "INSERT INTO Recados SET ?";

        conn.query(sql, recado, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    };

    getAll(res) {
        const sql = "SELECT * FROM Recados";

        conn.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Recados;