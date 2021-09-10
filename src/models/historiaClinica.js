const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let historiaClinicaSchema = new Schema({
    fecha_creacion: Date,
    mascota:{
        type: Schema.Types.ObjectId,
        ref: "mascota"
    },
    detalle_historia:[{
        type: Schema.Types.ObjectId,
        ref: "detalle"
    }]
});

module.exports = mongoose("historia", historiaClinicaSchema);