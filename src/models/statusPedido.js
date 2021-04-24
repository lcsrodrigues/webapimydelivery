const { Model, DataTypes } = require('sequelize');

class statusPedido extends Model {
    static init(sequelize){
        super.init({
            pendente: DataTypes.ENUM,
            entregue: DataTypes.ENUM
        }, {sequelize})
    }
}

module.exports = statusPedido;