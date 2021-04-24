const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING,
            latitude: DataTypes.NUMBER,
            longitude: DataTypes.NUMBER,
            status: DataTypes.STRING,
            total: DataTypes.NUMBER
        }, {sequelize})
    }
}

module.exports = Pedido;

