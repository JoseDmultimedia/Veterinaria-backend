let mascotaModel = require("../models/mascota.js");

let mascotaController = {
    
    all: async(req,res) =>{
        let allMascota = await mascotaModel.find();
        res.json(allMascota);
    },
    create: async(req,res) =>{
        let newMascota = new mascotaModel(req.body);
        let saveMascota = await newMascota.save();
        res.json(saveMascota);
    },
    delete: async(req,res) =>{
        let {id} = req.params;
        await mascotaModel.remove({_id:id});
        res.json("Ok");
    }
}

module.exports = mascotaController;