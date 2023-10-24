const ModeloEstudiante = require("../models/Estudiante");

/*
*   ###CONTROLADOR => AMNER A. SAUCEDO SOSA
*/
const getAll = (req, res) => {
    ModeloEstudiante.getAll((error, resultados) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener todos los estudiantes' });
            
        }
        res.status(200).json(resultados);
        
        res.end();
    });
};

const create = (req, res) => {

    const { nombre, apellido, nivel, seccion } = req.body;
    const nuevoEstudiante = {
        nombre, apellido, nivel, seccion
    };
    ModeloEstudiante.create(nuevoEstudiante, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al crear al estudiante' });
            
        }
        res.status(200).json(resultado);
        
        res.end();
        // res.send("Estudiante ingresado correctamente.")
    });
};

const update = (req, res) => {
    // const idEstudiante = req.params.idEstudiante; 
    const { nombre,idEstudiante } = req.body; 
    const estudianteData = {nombre};
    console.log(estudianteData)
    ModeloEstudiante.update(idEstudiante, estudianteData, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al actualizar al estudiante' });
            
        }
        res.status(200).json(resultado);
        
        res.end();
        // res.send("Estudiante actualizado correctamente");
    });
};

const getById = (req, res) => {
    // const idEstudiante = req.params.idEstudiante; 
    const { idEstudiante } = req.body; 
    ModeloEstudiante.getById(idEstudiante, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al obtener un elemento el estudiante' });
            
        } 
        // else if (!resultado) {
        //     res.status(404).json({ error: 'Estudiante no encontrado' });
            
        // } 
        res.status(200).json(resultado);
        
        res.end();
    });
};

const deleteById = (req, res) => {
    // const idEstudiante = req.params.idEstudiante; 
    const { idEstudiante } = req.body; 
    ModeloEstudiante.deleteById(idEstudiante, (error, resultado) => {
        if (error) {
            res.status(500).json({ error: 'Error al eliminar al estudiante' });
            
        }
        res.status(200).json(resultado);
        
        res.end();
        // res.send("Estudiante eliminado correctamente...");
    });
};

module.exports = {
    getAll,
    create, 
    update,
    deleteById,
    getById
}