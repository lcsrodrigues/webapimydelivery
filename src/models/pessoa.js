const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            endereco: DataTypes.STRING,
            idade: DataTypes.NUMBER,
            genero: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            dataAniversario: DataTypes.DATEONLY,
            cpf: DataTypes.NUMBER
        }, {sequelize})
    }
}

module.exports = Pessoa;