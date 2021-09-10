let historiaClinicaModel = require("../models/historiaClinica.js");

let historiaClinicaController = {

    all: async(req,res) =>{
        let allHistoriaClinica = await historiaClinicaModel.find();
        res.json(allHistoriaClinica);
    },
    create: async(req,res) =>{
        let newHistoriaClinica = new historiaClinicaModel(req.body);
        let saveHistoriaClinica = await newHistoriaClinica.save();
        res.json(saveHistoriaClinica);
    },
    delete: async(req,res) =>{
        let {id} = req.params;
        await historiaClinicaModel.remove({_id:id});
        res.json("Ok");
    }
}

module.exports = historiaClinicaController;