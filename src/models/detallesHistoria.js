const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let detallesHistoriaSchema = new Schema({
    temperatura: String,
    peso: Number,
    frecuencia_cardiaca: Number,
    freciencia_respiratoria: Number,
    fecha_hora:Date,
    alimentacion: String,
    historia:{
        type: Schema.Types.ObjectId,
        ref:"historia"
    },
    colaborador:{
        type: Schema.Types.ObjectId,
        ref:"colaborador"
    }
});

module.exports = mongoose("detalle", detallesHistoriaSchema);