let colaboradorModel = require("../models/colaborador.js");

let colaboradorController = {

    all: async(req,res) =>{
        let allColaborador = await colaboradorModel.find();
        res.json(allColaborador);
    },
    create: async(req,res) =>{
        let newColaborador = new colaboradorModel(req.body);
        let saveColaborador = await newColaborador.save();
        res.json(saveColaborador);
    },
    delete: async(req,res) =>{
        let {id} = req.params;
        await colaboradorModel.remove({_id:id});
        res.json("Ok");
    }
}

module.exports = colaboradorController;