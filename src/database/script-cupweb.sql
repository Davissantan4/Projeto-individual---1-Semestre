create database cupweb;
use cupweb;
-- drop database cupweb;

create table Usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(100),
senha varchar(100),
unique ix_email (email)
);

create table Forum(
id int primary key auto_increment,
titulo varchar(100),
descricao varchar(150),
fkUsuario int,
foreign key (fkUsuario) references Usuario(id)
);

select * from Forum;

select f.titulo, f.descricao, u.nome Autor, u.email from Forum f
inner join Usuario u on f.fkUsuario = u.id;

select u.nome Usuario, u.email Email, count(f.fkUsuario) Participacoes from Usuario u
inner join Forum f on f.fkUsuario = u.id
group by u.id, u.nome, u.email, f.fkUsuario
having Participacoes >= (select count(id) / count(distinct fkUsuario) from Forum);

select u.nome Usuario, count(f.fkUsuario) Participacoes from Forum f
inner join Usuario u on f.fkUsuario = u.id
group by fkUsuario, u.nome;
