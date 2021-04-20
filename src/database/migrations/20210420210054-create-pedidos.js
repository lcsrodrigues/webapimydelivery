'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('pedidos', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      numero:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descricao:{
         type: Sequelize.STRING,
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
   
    return queryInterface.dropTable('pedidos');
  }
};

