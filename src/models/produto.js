const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.NUMBER,
            quantidade: DataTypes.NUMBER
            // ativo: DataTypes.BOOLEAN 
        }, {sequelize})
    }
}

module.exports = Produto;