create database cupweb;
use cupweb;

create table Usuario(
id int primary key auto_increment,
nome varchar(50),
email varchar(100),
senha varchar(100)
);

create table Quiz(
id int primary key auto_increment,
descricao varchar(255)
);

create table Quiz_questao(
idQuestao int primary key auto_increment,
fkQuiz int not null,
enunciado varchar(255),
resposta_correta varchar(150),
alternativa_correta char(1),
foreign key(fkQuiz) references Quiz(id)
);

create table Quiz_resposta(
idResposta int primary key auto_increment,
fkQuestao int not null,
resposta varchar(150),
alternativa char(1),
foreign key(fkQuestao) references Quiz_questao(idQuestao)
);

create table Usuario_quiz_resposta(
idTentativa int not null,
fkUsuario int not null,
fkResposta int not null,
acertou boolean,
foreign key(fkUsuario) references Usuario(id),
foreign key(fkResposta) references Quiz_resposta(idResposta),
primary key(idTentativa, fkUsuario, fkResposta)
);