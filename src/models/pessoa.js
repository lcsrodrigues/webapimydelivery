const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            genero: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            dataAniversario: DataTypes.DATE,
            cpf: DataTypes.INTEGER
        }, {sequelize})
    }
}

module.exports = Pessoa;