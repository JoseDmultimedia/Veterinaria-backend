
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

app.use(require('./routes/veterinaria.js'));


//Start server

app.listen(app.get('port'), () =>{
    console.log("Servidor Funcionando")
})

