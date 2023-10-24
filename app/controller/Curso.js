const ModeloCurso = require("../models/Curso");

/*
*   ###CONTROLADOR => AMNER A. SAUCEDO SOSA
*/

const create = (req, res) => {
    const { nombreCurso,idGrado,idCarrera,catedratico } = req.body;


    const {idCatedratico,nombreCatedratico} = catedratico[0];
    const nuevoEstudiante = {
        nombreCurso,idGrado,idCarrera,idCatedratico,nombreCatedratico
    };
    // console.log(nuevoEstudiante);
    ModeloCurso.create(nuevoEstudiante, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear el curso' });
        } else {
            res.json(resultado);
        }
        res.end();
        // res.send("Curso ingresado correctamente.")
    });
};


module.exports = {
    create, 
}