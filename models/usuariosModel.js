const conn = require('../config/connection');

class Usuarios {
    create(usuario, res) {
        const sql = "INSERT INTO Usuarios SET ?";

        conn.query(sql, usuario, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    };

    getAll(res) {
        const sql = "SELECT * FROM Usuarios";

        conn.query(sql, (err, result) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(200).json(result);
            }
        })
    }
}

module.exports = new Usuarios;