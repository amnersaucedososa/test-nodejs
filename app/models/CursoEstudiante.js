const db = require('../../config/config'); 

const CursoEstudiante = {
    getAll: (callback) => {
        db.query('SELECT * FROM curso_estudiante', (error, results) => {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    },


    getById: (idEstudiante, callback) => {
        db.query('SELECT *  FROM curso_estudiante WHERE idEstudiante = ?',
            [idEstudiante],
            (error, results) => {
                if (error) {
                    return callback(error, null);
                }
                if (results.length === 0) {
                    return callback(null, null); 
                }
                return callback(null, results[0]); 

            }
        );
    },



}

module.exports = CursoEstudiante;