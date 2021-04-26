'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('produtos', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco:{
        type: Sequelize.NUMBER,
        allowNull: false
      },
      quantidade:{
        type: Sequelize.NUMBER,
        allowNull: false
      },
      // ativo:{
      //   type: Sequelize.BOOLEAN,
      //   allowNull: false
      // },
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
   
    return queryInterface.dropTable('produtos');
  }
};
