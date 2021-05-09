'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('clientes', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      dataCadastro:{
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      ativo:{
         type: Sequelize.DataTypes.BOOLEAN,
         allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
   
    return queryInterface.dropTable('clientes');
  }
};
