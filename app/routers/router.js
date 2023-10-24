
const express = require('express');
const router = express.Router();
const session = require('express-session');
const bodyParser = require("body-parser");
router.use(bodyParser.json());


router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})


router.get('/', (req, res) => {
  
    const urlActual = req.url;
    const loggedin = req.session.loggedin || false;

    res.send("por favor autenticate para poder consumir esta api.");
});




const EstudianteController = require('../controller/Estudiante'); 
router.post('/estudiante/create', EstudianteController.create);
router.get('/estudiante/show', EstudianteController.getById);
router.post('/estudiante/update', EstudianteController.update);
router.post('/estudiante/delete', EstudianteController.deleteById);




const CursoController = require('../controller/Curso'); 
router.post('/curso/create', CursoController.create);

module.exports = router;