
//Se agrega los requires

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

//db connection

mongoose.connect('mongodb://localhost/crud-vet')
.then(db => console.log("db conectada"))
.catch(error => console.log(error));

//Settings

app.set('port', 3000);

//Ultilities

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
    //Controllers se traen aqui por cuestion de tiempo para ver la generacion de las rutas para los servicios
        const usuarioControl = require("./controllers/usuarioController.js");
        const mascotaControl = require("./controllers/mascotaController.js");
        const colaboradorControl = require("./controllers/colaboradorController.js");
        const historiaControl = require("./controllers/historiaClinicaController.js");
        const detallesControl = require("./controllers/detallesHistoriaController");


app.use(require('./routes/veterinaria.js'));
app.get("/usuarios", usuarioControl.all);
app.get("/mascota", mascotaControl.all);
app.get("/colaborador", colaboradorControl.all);
app.get("/historia", historiaControl.all);
app.get("/detalles", detallesControl.all);


//Start server

app.listen(app.get('port'), () =>{
    console.log("Servidor Funcionando")
})

