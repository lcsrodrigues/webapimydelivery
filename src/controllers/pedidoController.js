const Cliente = require('../models/cliente');
const Pedido = require('../models/pedido');


module.exports = {

    async index(req,res){
        const { cliente_id } = req.params;

        const cliente = await Cliente.findByPk(cliente_id,{
            include: { association: 'pedido'}
        });

        if(!cliente){
            return res.status(400).send({
                status:0,
                message: 'Pedidos não encontrado!'
            });
        }

        return res.status(200).send(cliente.pedido);

        // const pedidos = await Pedido.findAll();

        // if(pedidos == "" || pedidos == null){
        //     return res.status(200).send({message: "Nenhum pedido localizado"});
        // }else{
        //     return res.status(200).send({pedidos});
        // }

    },

    async store(req,res){

        const {numero, descricao} = req.body;

        const pedido = await Pedido.create({numero, descricao});

        return res.status(200).send({
            status: 1,
            message: 'Pedido cadastrado com sucesso', pedido
        });

    },

    async update(req, res){

        const {numero, descricao} = req.body;

        const {pedido_id} = req.params;

        await Pedido.update({
            numero,descricao
        },{
            where:{
                id: pedido_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Pedido atualizado com sucesso'
        });
    },

    async delete(req,res){

        const { pedido_id } = req.params;

        await Pedido.destroy({
            where:{
                id: pedido_id
            }
        });

        if(pedido_id == "" || pedido_id == null){
            return res.status(200).send({message: "Id do pedido não encontrado!"});
        }else{
            return res.status(200).send({
                status:1,
                message:'Pedido deletado com sucesso'
            });
        }

    },

    async findByPk(req,res){

        const { pedido_id } = req.params;

        const pedido = await Pedido.findByPk(pedido_id)

        if(pedido == null || pedido == "" ){
            return res.status(200).send({message: "Id vazio ou nulo, digite um id valido!"});
        }else{
            return res.status(200).send({
              status: 1,
            message: 'Pedido', pedido
          });
        }
    }
    

};