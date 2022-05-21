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

select*from Jogadas;

insert into usuario values (null,'Kawan','2004-02-27','kawan@gmail.com','12345678');

insert into usuario values (null,'Claudia','1980-02-22','claudia@gmail.com','12345678');

select qtdAcertos as numeroquest,count(qtdAcertos) as qtdAcertosPorQuestao
                    from Jogadas
                    group by qtdAcertos order by sum(distinctrow qtdAcertos) desc;

insert into Jogadas (qtdAcertos, fk_usuario) values('7',2);