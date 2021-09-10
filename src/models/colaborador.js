const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let colaboradorSchema = new Schema({
    nombre: String,
    apellido: String,
    cargo: String,
    especialidad: String,
    tipo_documento: String,
    documento_identificacion: Number,
    detalle:{
        type: Schema.Types.ObjectId,
        ref:"detalle"
    }
});

module.exports = mongoose("colaborador", colaboradorSchema);