/* Seleccionamos la base de datos */

USE db_CampusLand;

/* Insercion de data a la base de datos de las Area de CAMPUSLAND */
INSERT INTO Area (A_Id, A_Nombre, A_Descripcion) VALUES
    (1, 'Area Training', 'Area destinada al aprendizaje guiado de los campers'),
    (2, 'Area Review 1', 'Area destinada al aprendizaje autonomo de los campers'),
    (3, 'Area Review 2', 'Area destinada al aprendizaje autonomo de los campers');


/* Insercion de data a la base de datos de las categoria de insidencias de CAMPUSLAND */
INSERT INTO categoria_inc (Cat_Id, Cat_Nombre) VALUES
    (1, 'Hardware'),
    (2, 'Software');

/* Insercion de data a la base de datos de las tipos de insidencias de CAMPUSLAND */
INSERT INTO tipo_inc (Tip_Id, Tip_Nombre) VALUES
    (1, 'Leve'),
    (2, 'Moderada'),
    (3, 'Critica');