create database BorderlessMinds;

use BorderlessMinds;

create table usuario (
idusuario int primary key auto_increment,
nome varchar (250),
nacionalidade varchar (45),
email varchar (45),
constraint chktipo check (email like "@"), 
senha varchar (45));

create table mural (
idmural int auto_increment,
titulo varchar (45),
descricao varchar(250),
comentario varchar (250),
fkusuario int,
foreign key (fkusuario) references usuario (idusuario),
primary key (idmural, fkusuario));

create table idioma (
idIdioma int primary key auto_increment,
idioma varchar(45));

create table votacao (
fkidioma int,
foreign key (fkidioma) references idioma(idIdioma),
fkusuario int,
foreign key (fkusuario) references usuario(idusuario));

select * from usuario;

