const { Model, DataTypes } = require('sequelize');
const Pessoa = require('./pessoa');

class Funcionario extends Pessoa{
    static init(sequelize){
        super.init({
            cargo: DataTypes.STRING,
            salario: DataTypes.NUMBER,
            dataAdmissao: DataTypes.DATEONLY,
            dataDemissao: DataTypes.DATEONLY
        }, {sequelize})
    }
}

module.exports = Funcionario;