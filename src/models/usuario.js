const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    tipo_documento: String,
    documento_identificacion: Number,
    estado: String,
    sexo: String,
    mascota:[{
        type: Schema.Types.ObjectId,
        ref:"mascota"
    }]
});


module.exports = mongoose.model("usuario", usuarioSchema);