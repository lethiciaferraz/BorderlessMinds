create database projetoIndividual;

use projetoIndividual




create table usuario (
idusuario in primary key auto_increment,
nome varchar(45),
email varchar (45),
constraint chktipo check (email like "@"),

