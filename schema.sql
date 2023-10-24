create table estudiante(
    idEstudiante int not null primary key autoincrement, 
    nombre varchar(200) not null,
    apellido varchar(200) not null,
    nivel varchar(50) not null,
    seccion varchar(50) not null
);

create table curso(
    idCurso int not null primary key autoincrement,
    nombreCurso varchar(100) not null,
    idGrado varchar(25) not null,
    idCarrera varchar(50) not null,
    idCatedratico varchar(50) not null,
    nombreCatedratico varchar(200) not null
);



create table curso_estudiante(
    idCursoEstudiante int not null primary key autoincrement,
    idEstudiante int not null,
    idCurso int not null
);