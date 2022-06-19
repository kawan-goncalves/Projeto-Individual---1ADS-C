-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create database Maroon5;
use Maroon5;

create table Usuario(
idUsuario int primary key auto_increment,
nome varchar (85),
data_nascimento date,
email varchar(90) unique,
senha varchar(20));

create table Jogadas(
idJogada int primary key auto_increment,
qtdAcertos varchar(2),
data_jogada datetime default current_timeStamp,
fk_usuario int,
foreign key (fk_usuario) references usuario(idUsuario));




/* para sql server - remoto - produção */

create table UsuarioMaroon5(
idUsuario int primary key identity(1,1),
nome varchar (85),
data_nascimento date,
email varchar(90) unique,
senha varchar(20));

create table JogadasMaroon5(
idJogada int primary key identity(1,1),
qtdAcertos varchar(2),
data_jogada datetime default current_timeStamp,
fk_usuario int foreign key references usuarioMaroon5(idUsuario));

