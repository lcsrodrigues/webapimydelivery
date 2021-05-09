const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.INTEGER,
            quantidade: DataTypes.INTEGER,
            ativo: DataTypes.BOOLEAN 
        }, {sequelize})
    }
}

module.exports = Produto;