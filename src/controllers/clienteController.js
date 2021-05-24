const Cliente = require('../models/cliente');
// const Produto = require('../models/produto');
const Pedido = require('../models/pedido');


module.exports = {

    async index(req,res){ // findAll

        const { pedido_id } = req.params;

        const pedido = await Pedido.findByPk(pedido_id, {
            include: { association: 'cliente'}
        });

        if(!pedido){
            return res.status(400).send({
                status: 0,
                message: 'Pedido não encontrado!'
            });
        }

        return res.status(200).send(pedido.cliente);

        // const clientes = await Cliente.findAll();

        // if (clientes == "" || clientes == null || clientes == undefined){
        //     return res.status(200).send({message: "Nenhum cliente cadastrado"});
        // }else{
        //     return res.status(200).send({clientes});
        // }

    },

    async store(req, res){ //Save

        try{

            const { pedido_id } = req.params;
            const { dataCadastro, ativo } = req.body;

            const pedido = await Pedido.findByPk(pedido_id);

            if(!pedido) {
                return res.status(400).json({
                    status: 0,
                    message: 'Pedido não encontrado!'
                });
            }

            const cliente = await Cliente.create({
                dataCadastro,
                ativo,

            });

            return res.status(200).json({
                status: 1,
                message: "Cliente cadastrado com sucesso!",
                cliente
            });

        } catch (err){
            return res.status(400).json({ error: err });

        }

        // const {name, email, password} = req.body;

        // const cliente = await Cliente.create({name, email, password});

        // return res.status(200).send({
        //     status: 1,
        //     message: 'Cliente cadastrado com sucesso', cliente
        // });

    },

    async update(req,res){ //Atualizar

        const id = req.params.id;
        const {dataCadastro, ativo } = req.body;

        try{
            const cliente = await Cliente.findByPk(id);

            if(cliente){
                await Cliente.update({ dataCadastro, ativo}, {where: { id }});

                return res.status(200).json({
                    status: 1,
                    message: "Cliente atualizado com sucesso!"
                });
            }else {
                return res.status(400).json({
                    status:0,
                    message:"Clinte não encontrado!"
                });
            }
        }catch(err){
            return res.status(400).json({
                status:0,
                message: "erro ao atualizar cliente"
            });
        }

        // const {name, email, password} = req.body;

        // const {cliente_id} = req.params;

        // await Cliente.update({
        //     name, email, password
        // },{
        //     where:{
        //         id: cliente_id
        //     }
        // });

        // return res.status(200).send({
        //     status: 1,
        //     message: 'Cliente atualizado com sucesso'
        // });
    },

    async delete(req,res){

        const id = req.params.id;

        try{
            const cliente = await Cliente.findByPk(id);

            if(cliente) {
                await Cliente.destroy({ where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Cliente apagado com sucesso"
                });
            }else{
                return res.status(400).json({
                    status: 0,
                    message: "Cliente não encontrado!"
                });
            }
        }catch(err) {
            return res.status(400).json({ error: err});
        }

        // const { cliente_id } = req.params;

        // await Cliente.destroy({
        //     where:{
        //         id: cliente_id
        //     }
        // });

        // if (cliente_id == "" || cliente_id == null){
        //     return res.status(200).send({message: "Id de cliente não encontrado para ser deletado!"})
        // } else{
        //     return res.status(200).send({
        //         status:1,
        //         message: 'Cliente deletado com sucesso!'
        //     });
        // }

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

