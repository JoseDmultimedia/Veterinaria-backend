const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let mascotaSchema = new Schema({
    nombre: String,
    raza: String,
    sexo: String,
    usuario:{
        type: Schema.Types.ObjectId,
        ref: "usuario"
    },
    historia_clinica:{
        type: Schema.Types.ObjectId,
        ref:"historia_clinica"
    }
});

module.exports = mongoose("mascota", mascotaSchema);