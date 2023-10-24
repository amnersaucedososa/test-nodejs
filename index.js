const express = require("express");
const bodyParser = require('body-parser');

require("dotenv").config();


const app = express();
app.use(bodyParser.json());

const port = process.env.PUERTO;

const routerApi = require("./app/routers/router");
app.use("/api/",routerApi);

app.use("/",(req, res)=>{
    res.send("Bienvenido!!");
});

app.listen(port,()=>{
    console.log(`Servidor encendido en el puerto ${port}`)
});