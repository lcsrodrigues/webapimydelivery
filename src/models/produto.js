const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            numero: DataTypes.NUMBER,
            name: DataTypes.STRING,
            preco: DataTypes.NUMBER,
            descricao: DataTypes.TEXT,
            imgUrl: DataTypes.STRING
        }, {sequelize})
    }
}

module.exports = Produto;