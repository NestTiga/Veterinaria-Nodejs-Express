--Crear la base de datos
CREATE DATABASE IF NOT EXISTS db_veterinaria;

-- Seleccionar la base de datos
USE db_veterinaria;

--Crear tabla de mascotas con los id, nombre, especie, estado (true o false) y fecha de nacimiento
CREATE TABLE pacientes(
id_paciente INT(10) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL,
especie VARCHAR(100) NOT NULL,
estado BOOLEAN NOT NULL,
fecha_nacimiento DATE NOT NULL,
PRIMARY KEY (id_paciente)
);