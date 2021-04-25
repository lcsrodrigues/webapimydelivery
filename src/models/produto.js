const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            preco: DataTypes.NUMBER,
            descricao: DataTypes.TEXT,
            quantidade: DataTypes.NUMBER,
            imgUrl: DataTypes.STRING,
            ativo: DataTypes.BOOLEAN 
        }, {sequelize})
    }
}

module.exports = Produto;