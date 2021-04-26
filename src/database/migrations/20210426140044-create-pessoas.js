'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('pessoas', {
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
      endereco:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      genero:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataAniversario:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.INTEGER,
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
   
    return queryInterface.dropTable('pessoas');
  }
};

