- Criação do Banco via sequelize:
    * npx sequelize db:create
-Criacao da migration produto:
    * npx sequelize migration:create --name=create-produto
-Criação da table com a migration:
    ele sempre cria no plural e sempre busca no plural
    * npx sequelize db:migrate
A sequelize meta registra as migrations que EU executei se outro desevolvedor executar outra ficara registrado

- Exluir uma tabela
    *npx sequelize db:migrate:undo


