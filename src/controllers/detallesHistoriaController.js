let detallesHistoriaModel = require("../models/detallesHistoria.js");

let detallesHistoriaController = {

    all: async(req,res) => {
        let allDetallesHistoria = await detallesHistoriaModel.find();
        res.json(allDetallesHistoria);
    },
    create: async(req,res) =>{
        let newDetallesHistoria = new detallesHistoriaModel(req.body);
        let saveDetallesHistoria = await newDetallesHistoria.save();
        res.json(saveDetallesHistoria)
    },
    delete: async(req,res) =>{
        let {id} = req.params;
        await detallesHistoriaModel.remove({_id:id});
        res.json("Ok");
    }
}

module.export = detallesHistoriaController;