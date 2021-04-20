const Produto = require('../models/produto');

module.exports = {

    async index(req,res){ //findAll

        const produtos = await Produto.findAll();

        if (produtos == "" || produtos == null){
            return res.status(200).send({message: "Nenhum produdo cadastrado"});
        }else{
            return res.status(200).send({produtos});
        }

    },

    async store(req, res) { //save

        const {name} = req.body;

        const produto = await Produto.create({name});

        return res.status(200).send({
            status: 1,
            message: 'Produto cadastrado com sucesso',produto
            
        });

    },

    async update(req, res){ //atualiza

        const { name } = req.body;

        const { produto_id } = req.params;

        await Produto.update({
            name
        },{
            where:{
                id: produto_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Produto atualizado com sucesso'
        });
    },

    async delete(req,res){ //delete

        const { produto_id} = req.params;

        await Produto.destroy({
            where:{
                id: produto_id
            }
        });

        if (produto_id == "" || produto_id == null){
            return res.status(200).send({message: "Id de prosuto não encontrado para ser deletado"});
        }else{
            return res.status(200).send({
                status: 1,
                message: 'Produto deletado com sucesso'
            });
        }

    },

    async findByPk(req,res){ // findById

        const { produto_id} = req.params;

        const produto = await Produto.findByPk(produto_id)

        if (produto == null || produto == "") { 
            return res.status(200).send({message: "id vazio ou nulo, digite um id valido"}); 
        } else {

            return res.status(200).send({
                status: 1,
                message: 'produto',produto
                
            });
            
        }
    }

    
};