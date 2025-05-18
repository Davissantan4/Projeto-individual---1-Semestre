create database cupweb;
use cupweb;

create table Usuario(
id int primary key auto_increment,
nome varchar(50) not null,
email varchar(100) not null,
senha varchar(100) not null,
unique ix_email (email)
);

create table Quiz(
id int primary key auto_increment,
qtdQuestoes int not null
);

create table Tentativa_quiz(
id int primary key auto_increment,
fkUsuario int not null,
fkQuiz int not null,
tentativa int not null,
acertos int not null,
erros int not null,
porcentagemAcertos decimal(5,2),
foreign key(fkUsuario) references Usuario(id),
foreign key(fkQUiz) references Quiz(id),
unique ix_usuario_quiz_tentativa (fkUsuario, fkQuiz, tentativa)
);