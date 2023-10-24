const db = require('../../config/config'); 
const CursoEstudiante = require("../models/CursoEstudiante")

const Estudiante = {
    //FUNCION PARA CREAR UN CURSO
    create: (nuevoEstudiante, callback) => {
        db.query('INSERT INTO estudiante(nombre, apellido, nivel,seccion) VALUES (?,?,?,?)',
            [nuevoEstudiante.nombre, nuevoEstudiante.apellido, nuevoEstudiante.nivel, nuevoEstudiante.seccion],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },
    
    //ESTA FUNCION UNICAMENTE ACTUALIZA EL NOMBRE DEL ESTUDIANTE, MANDANDO SU ID
    update: (idEstudiante, estudianteData, callback) => {
        db.query('UPDATE estudiante SET nombre= ? WHERE idEstudiante=?',
            [estudianteData.nombre, idEstudiante],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },

    getById: (idEstudiante, callback) => {
        db.query('SELECT *  FROM estudiante WHERE idEstudiante = ?',
            [idEstudiante],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                if (results.length === 0) {
                    return callback(null, null); // No se encontraron resultados
                }

                // aca debo de agregar la consulta a los cursos para retornar toda la informacion del estudiante + cursos asignados
                
                let dataEstudiante;
                CursoEstudiante.getById(idEstudiante, (error, resultado) => {
                    if (error) {
                        res.status(500).json({ error: 'Error al obtener un cursos del estudiante' });
                        
                    } else if (!resultado) {
                        res.status(404).json({ error: 'Curso de estudiante no encontrado' });
                        
                    } 
                    console.log(resultado)
                    data = resultado;
                    dataEstudiante = {
                        "estudiante" : results[0], 
                        "cursos" : data
                    }

                    return callback(null,dataEstudiante);
                });

                
                
                
                // return callback(null, results[0]); // Devuelve el primer resultado (debería ser único)


            }
        );
    },

    // ESTA FUNCION ELIMINA UN ESTUDIANTE MANDANDO SU ID COMO PARAMETRO
    deleteById: (idEstudiante, callback) => {
        db.query('DELETE FROM estudiante WHERE idEstudiante = ?',
            [idEstudiante],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },

}



module.exports = Estudiante;