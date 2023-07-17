/* Creacion de la base de datos */

CREATE DATABASE db_CampusLand;

/* Seleccionamos la base de datos */

USE db_CampusLand;

/* creacion de la tabla de Area */

CREATE TABLE Area(
    A_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada area general',
    A_Nombre VARCHAR(45) NOT NULL COMMENT'Nombre del area',
    A_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca del area'
);

/* creacion de la tabla de Categoria_Inc */

CREATE TABLE Categoria_Inc(
    Cat_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada categoria de las incidencias',
    Cat_Nombre VARCHAR(45) NOT NULL COMMENT'Nombre de la categoria'
);

/* creacion de la tabla de Tipo_Inc */

CREATE TABLE Tipo_Inc(
    Tip_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada tipo de las incidencias',
    Tip_Nombre VARCHAR(45) NOT NULL COMMENT'Nombre del tipo de incidencia'
);

/* creacion de la tabla de Trainers */

CREATE TABLE Trainers(
    Tr_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador del usuario',
    Tr_Nombre VARCHAR(100) NOT NULL COMMENT'Nombre del usuario',
    Tr_Email_Pers VARCHAR(255) NOT NULL COMMENT'Correo personal del usuario',
    Tr_Email_Corp VARCHAR(255) NOT NULL COMMENT'Correo corporativo del usuario',
    Tr_Tel_Movil VARCHAR(50) NOT NULL COMMENT'Telefono movil del usuario',
    Tr_Tel_Res VARCHAR(50) NOT NULL COMMENT'Telefono residencial del usuario',
    Tr_Tel_Emp VARCHAR(50) NOT NULL COMMENT'Telefono empresarial del usuario',
    Tr_Tel_Movil_Emp VARCHAR(50) NOT NULL COMMENT'Telefono Residencial del usuario'
);

/* creacion de la tabla de Salon */

CREATE TABLE Salon(
    Sln_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada salon',
    Sln_Nombre VARCHAR(45) NOT NULL COMMENT'Nombre del salon',
    Sln_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca del salon',
    Sln_Areas INT UNSIGNED NOT NULL COMMENT'Identificador del area que pertenece el salon'
);

/* creacion de la tabla de Incidencias */

CREATE TABLE Incidencias(
    Inc_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada incidencia',
    Inc_Categoria INT UNSIGNED NOT NULL COMMENT'Identificador de la categoria que pertenece la incidencia',
    Inc_Tipo INT UNSIGNED NOT NULL COMMENT'Identificador del tipo que pertenece la incidencia',
    Inc_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la incidencia',
    Inc_Fecha DATE NOT NULL COMMENT'Fecha de la incidencia',
    Inc_Area INT UNSIGNED NOT NULL COMMENT'Identificador de la area donde ocurrio la incidencia',
    Inc_Lugar INT UNSIGNED NOT NULL COMMENT'Identificador del lugar donde ocurrio la incidencia',
    Inc_Trainer INT UNSIGNED NOT NULL COMMENT'Identificador del trainer que informa la incidencia'
);

/* creacion de la tabla de Estado_Comp */

CREATE TABLE Estado_Comp(
    Est_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada estado de los dispositivos',
    Est_Nombre VARCHAR(45) NOT NULL COMMENT'Nombre del estado del dispositivo'
);

/* creacion de la tabla de Teclados */

CREATE TABLE Teclados(
    Tc_Codigo VARCHAR(10) NOT NULL PRIMARY KEY COMMENT'Codigo del teclado',
    Tc_Marca VARCHAR(20) NOT NULL COMMENT'Marca del teclado',
    Tc_Estado INT UNSIGNED NOT NULL COMMENT'Identificador del estado que se encuentra el teclado',
    Tc_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la condicion del teclado'
);
/* creacion de la tabla de Mouses */

CREATE TABLE Mouses(
    Mo_Codigo VARCHAR(10) NOT NULL PRIMARY KEY COMMENT'Codigo del mouse',
    Mo_Marca VARCHAR(20) NOT NULL COMMENT'Marca del mouse',
    Mo_Estado INT UNSIGNED NOT NULL COMMENT'Identificador del estado que se encuentra el mouse',
    Mo_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la condicion del mouse'
);

/* creacion de la tabla de Diademas_Gamers */

CREATE TABLE Diademas_Gamers(
    Dg_Codigo VARCHAR(10) NOT NULL PRIMARY KEY COMMENT'Codigo del diadema',
    Dg_Marca VARCHAR(20) NOT NULL COMMENT'Marca del diadema',
    Dg_Estado INT UNSIGNED NOT NULL COMMENT'Identificador del estado que se encuentra el diadema',
    Dg_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la condicion del diadema'
);

/* creacion de la tabla de Pantallas */

CREATE TABLE Pantallas(
    Pt_Codigo VARCHAR(10) NOT NULL PRIMARY KEY COMMENT'Codigo de la Pantalla',
    Pt_Marca VARCHAR(20) NOT NULL COMMENT'Marca de la Pantalla',
    Pt_Estado INT UNSIGNED NOT NULL COMMENT'Identificador del estado que se encuentra la Pantalla',
    Pt_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la condicion de la Pantalla'
);

/* creacion de la tabla de Computadoras */

CREATE TABLE Computadoras(
    Cp_Id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT'Identificador de cada computadora',
    Cp_Codigo VARCHAR(10) NOT NULL COMMENT'Codigo del computadora',
    Cp_Marca VARCHAR(20) NOT NULL COMMENT'Marca del computadora',
    Cp_Estado INT UNSIGNED NOT NULL COMMENT'Identificador del estado que se encuentra el computadora',
    Cp_Descripcion VARCHAR(100) NOT NULL COMMENT'Descripcion acerca de la condicion del computadora',
    Cp_Teclado VARCHAR(10) NOT NULL COMMENT'Codigo del teclado que tiene la computadora',
    Cp_Mouse VARCHAR(10) NOT NULL COMMENT'Codigo del mouse que tiene la computadora',
    Cp_Diademas VARCHAR(10) NOT NULL COMMENT'Codigo de la diadema que tiene la computadora',
    Cp_Pantallas VARCHAR(10) NOT NULL COMMENT'Codigo de la pantalla que tiene la computadora',
    Cp_Salon INT UNSIGNED NOT NULL COMMENT'Identificador del salon que se encuentra la computadora'
);

/*Creacion de las relaciones entre la tabla salon con area*/

ALTER TABLE Salon ADD CONSTRAINT  salon_area_fk FOREIGN KEY(Sln_Areas) REFERENCES area(A_Id);

/*Creacion de las relaciones entre la tabla Incidencias con area*/

ALTER TABLE Incidencias ADD CONSTRAINT  incidencias_area_fk FOREIGN KEY(Inc_Area) REFERENCES area(A_Id);

/*Creacion de las relaciones entre la tabla Incidencias con Categoria_Inc*/

ALTER TABLE Incidencias ADD CONSTRAINT  incidencias_categoria_Inc_fk FOREIGN KEY(Inc_Categoria) REFERENCES Categoria_Inc(Cat_Id);

/*Creacion de las relaciones entre la tabla Incidencias con Tipo_Inc*/
ALTER TABLE Incidencias ADD CONSTRAINT  incidencias_Tipo_Inc_fk FOREIGN KEY(Inc_Tipo) REFERENCES Tipo_Inc(Tip_Id);

/*Creacion de las relaciones entre la tabla Incidencias con Trainers*/

ALTER TABLE Incidencias ADD CONSTRAINT  incidencias_Trainers_fk FOREIGN KEY(Inc_Trainer) REFERENCES Trainers(Tr_Id);

/*Creacion de las relaciones entre la tabla Incidencias con Salon*/

ALTER TABLE Incidencias ADD CONSTRAINT  incidencias_Salon_fk FOREIGN KEY(Inc_Lugar) REFERENCES Salon(Sln_Id);

/*Creacion de las relaciones entre la tabla Teclados con Estado_Comp*/

ALTER TABLE Teclados ADD CONSTRAINT  Teclados_Estado_Comp_fk FOREIGN KEY(Tc_Estado) REFERENCES Estado_Comp(Est_Id);

/*Creacion de las relaciones entre la tabla Mouses con Estado_Comp*/

ALTER TABLE Mouses ADD CONSTRAINT  Mouses_Estado_Comp_fk FOREIGN KEY(Mo_Estado) REFERENCES Estado_Comp(Est_Id);

/*Creacion de las relaciones entre la tabla Diademas_Gamers con Estado_Comp*/

ALTER TABLE Diademas_Gamers ADD CONSTRAINT  Diademas_Gamers_Estado_Comp_fk FOREIGN KEY(Dg_Estado) REFERENCES Estado_Comp(Est_Id);

/*Creacion de las relaciones entre la tabla Pantallas con Estado_Comp*/

ALTER TABLE Pantallas ADD CONSTRAINT  Pantallas_Gamers_Estado_Comp_fk FOREIGN KEY(Pt_Estado) REFERENCES Estado_Comp(Est_Id);

/*Creacion de las relaciones entre la tabla Computadoras con Teclados*/

ALTER TABLE Computadoras ADD CONSTRAINT  Computadoras_Teclados_fk FOREIGN KEY(Cp_Teclado) REFERENCES Teclados(Tc_Codigo);

/*Creacion de las relaciones entre la tabla Computadoras con Mouses*/

ALTER TABLE Computadoras ADD CONSTRAINT  Computadoras_Mouses_fk FOREIGN KEY(Cp_Mouse) REFERENCES Mouses(Mo_Codigo);

/*Creacion de las relaciones entre la tabla Computadoras con Diademas_Gamers*/

ALTER TABLE Computadoras ADD CONSTRAINT  Computadoras_Diademas_Gamers_fk FOREIGN KEY(Cp_Diademas) REFERENCES Diademas_Gamers(Dg_Codigo);

/*Creacion de las relaciones entre la tabla Computadoras con Pantallas*/

ALTER TABLE Computadoras ADD CONSTRAINT  Computadoras_Pantallas_fk FOREIGN KEY(Cp_Pantallas) REFERENCES Pantallas(Pt_Codigo);

/*Creacion de las relaciones entre la tabla Computadoras con Salon*/

ALTER TABLE Computadoras ADD CONSTRAINT  Computadoras_Salon_fk FOREIGN KEY(Cp_Salon) REFERENCES Salon(Sln_Id);