const db = require('../../config/config'); 

const Curso = {
    //FUNCION PARA CREAR UN CURSO
    create: (nuevoCurso, callback) => {
        db.query('INSERT INTO curso(nombreCurso, idGrado, idCarrera,idCatedratico,nombreCatedratico) VALUES (?,?,?,?,?)',
            [nuevoCurso.nombreCurso, nuevoCurso.idGrado, nuevoCurso.idCarrera, nuevoCurso.idCatedratico, nuevoCurso.nombreCatedratico],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, results);
            }
        );
    },


    getById: (idCurso, callback) => {
        db.query('SELECT *  FROM curso WHERE idCurso = ?',
            [idCurso],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                if (results.length === 0) {
                    return callback(null, null); // No se encontraron resultados
                }
                return callback(null, results[0]); // Devuelve el primer resultado (debería ser único)

            }
        );
    },

};

module.exports = Curso;