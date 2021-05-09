const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING
        }, {sequelize})
    }

    // static associate(models){
    //     this.belongsToMany(models.Cliente, { foreignKey: 'cliente_id', as: 'cliente'});
    // }
}

module.exports = Pedido;

