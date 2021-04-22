const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize){
        super.init({
            numero: DataTypes.INTEGER,
            descricao: DataTypes.STRING,
        }, {sequelize})
    }
}

module.exports = Pedido;

