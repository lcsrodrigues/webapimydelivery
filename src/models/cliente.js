const { Model, DataTypes } = require('sequelize');
const Pessoa = require('./pessoa');


class Cliente extends Pessoa {
    static init(sequelize){
        super.init({
            dataCadastro: DataTypes.DATEONLY,
            ativo: DataTypes.BOOLEAN
        }, {sequelize})
    }

    static associate(models){
        this.belongsTo(models.Pedido, { foreignKey: 'pedido_id', as: 'pedido'});
    }
}

module.exports = Cliente;