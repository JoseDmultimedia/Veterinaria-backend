let usuarioModel = require("../models/usuario.js");

let usuarioController = {

    find: async(req,res) =>{
        let found = await usuarioModel.find({
            nombre: req.params.nombre
        })
        res.json(found);
    },
    all: async(req, res) =>{
        let allUsuarios = await usuarioModel.find();
        res.json(allUsuarios);
    },
    create: async(req, res) =>{
        let newUsuario = new usuarioModel(req.body);
        let saveUsuario = await newUsuario.save();
        res.json(saveUsuario);
    },
    delete: async(req,res) =>{
        let {id} = req.params;
        await usuarioModel.remove({_id:id});
        res.json("Ok");
    }
}

module.exports = usuarioController;