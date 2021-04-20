const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING
        }, {sequelize})
    }
}

module.exports = Produto;