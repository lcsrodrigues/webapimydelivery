const Cliente = require('../models/cliente');
// const Produto = require('../models/produto');


module.exports = {

    async index(req,res){ // findAll

        const clientes = await Cliente.findAll();

        if (clientes == "" || clientes == null || clientes == undefined){
            return res.status(200).send({message: "Nenhum cliente cadastrado"});
        }else{
            return res.status(200).send({clientes});
        }

    },

    async store(req,res){ //Save

        const {name, email, password} = req.body;

        const cliente = await Cliente.create({name, email, password});

        return res.status(200).send({
            status: 1,
            message: 'Cliente cadastrado com sucesso', cliente
        });

    },

    async update(req,res){ //Atualizar

        const {name, email, password} = req.body;

        const {cliente_id} = req.params;

        await Cliente.update({
            name, email, password
        },{
            where:{
                id: cliente_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Cliente atualizado com secesso'
        });
    },

    async delete(req,res){

        const { cliente_id } = req.params;

        await Cliente.destroy({
            where:{
                id: cliente_id
            }
        });

        if (cliente_id == "" || cliente_id == null){
            return res.status(200).send({message: "Id de cliente não encontrado para ser deletado!"})
        } else{
            return res.status(200).send({
                status:1,
                message: 'Cliente deletado com sucesso!'
            });
        }

    },

    async findByPk(req,res){ //findById

        const { cliente_id } = req.params;

        const cliente = await Cliente.findByPk(cliente_id)

        if (cliente == null || cliente == ""){
            return res.status(200).send({message: "id vazio ou nulo, digite um id valido!"});
        }else{

            return res.status(200).send({
                status:1,
                message: 'cliente', cliente
            });
        }

    }

};

