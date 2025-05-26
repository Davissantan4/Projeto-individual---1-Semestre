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

create table Usuario_resposta(
idTentativa int not null,
fkUsuario int not null,
fkResposta int not null,
acertou boolean,
foreign key(fkUsuario) references Usuario(id),
foreign key(fkResposta) references Quiz_resposta(idResposta),
primary key(idTentativa, fkUsuario, fkResposta)
);

insert into Quiz (descricao)
		values   ('Quiz sobre os personagens de Cuphead'),
                 ('Quiz sobre a história de Cuphead'),
                 ('Quiz com perguntas extras sobre Cuphead');
                 
insert into Quiz_questao (fkQuiz, enunciado, resposta_correta, alternativa_correta)
               values    (1, 'Qual é o nome dos 2 personagens principais do jogo?', 'Xicrinho e Caneco', 'B'),
                         (1, 'Qual personagem jogável é liberado ao adquirir a DLC do jogo?', 'Ms.Chalice', 'D'),
                         (1, 'Qual é o nome em inglês do boss que tem um dado da cabeça?', 'King Dice', 'B'),
                         (1, 'Quem é conhecido como "toucinho?"', 'O lojista', 'C'),
                         (2, 'Qual é o objetivo do jogo?', 'Derrotar todos os chefes', 'A'),
                         (2, 'Qual é o nome, em português, da ilha onde o jogo se passa?', 'Ilha Tinteiro', 'C'),
                         (2, 'Por que é preciso derrotar todos os chefes do jogo?', 'Para pagar uma dívida', 'D'),
                         (2, 'Quem é o dono do Cassino?', 'Diabo', 'B'),
                         (3, 'Cuphead é um jogo de...', 'Correr e Atirar', 'A'),
                         (3, 'O Xicrinho e o Caneco são...', 'Irmãos', 'D'),
                         (3, 'Quantas possibilidades de mini chefes há na luta contra King Dice?', '9 possibilidades', 'D'),
                         (3, 'Qual é o nome da maçã que encontramos no início do jogo?', 'Mac', 'B'),
                         (3, 'Quantas moedas podemos ganhar no jogo principal?', '40 moedas', 'A');
                         
insert into Quiz_resposta (fkQuestao, resposta, alternativa)
              values      (1, 'Copo e Copinho', 'A'),
                          (1, 'Xicrinho e Caneco', 'B'),
                          (1, 'Xícara e Caneco', 'C'),
                          (1, 'Xicrinho e Chalice', 'D'),
                          (2, 'Srta.Chalice', 'A'),
                          (2, 'Sra.Chalice', 'B'),
                          (2, 'Chalice', 'C'),
                          (2, 'Ms.Chalice', 'D'),
                          (3, 'Dicehead', 'A'),
                          (3, 'King Dice', 'B'),
                          (3, 'Rei Dado', 'C'),
                          (3, 'The Dice', 'D'),
                          (4, 'Um boss', 'A'),
                          (4, 'Um personagem jogável', 'B'),
                          (4, 'O lojista', 'C'),
                          (4, 'Nenhuma das opções', 'D'),
                          (5, 'Derrotar todos os chefes', 'A'),
                          (5, 'Pegar todas as moedas', 'B'),
                          (5, 'Completar todas as fases', 'C'),
                          (5, 'Comprar todos os itens', 'D'),
                          (6, 'Ilha de Tinta', 'A'),
                          (6, 'Ilha dos Copos', 'B'),
                          (6, 'Ilha Tinteiro', 'C'),
                          (6, 'Ilha Tintura', 'D'),
                          (7, 'Por diversão', 'A'),
                          (7, 'Não é preciso', 'B'),
                          (7, 'Para liberar outra fase', 'C'),
                          (7, 'Para pagar uma dívida', 'D'),
                          (8, 'King Dice', 'A'),
                          (8, 'Diabo', 'B'),
                          (8, 'Toucinho', 'C'),
                          (8, 'Ms.Chalice', 'D'),
                          (9, 'Correr e Atirar', 'A'),
                          (9, 'RPG', 'B'),
                          (9, 'FPS', 'C'),
                          (9, 'Tabuleiro', 'D'),
                          (10, 'Primos', 'A'),
                          (10, 'Amigos', 'B'),
                          (10, 'Vizinhos', 'C'),
                          (10, 'Irmãos', 'D'),
                          (11, '10 possibilidades', 'A'),
                          (11, '12 possibilidades', 'B'),
                          (11, '14 possibilidades', 'C'),
                          (11, '9 possibilidades', 'D'),
                          (12, 'Apple', 'A'),
                          (12, 'Mac', 'B'),
                          (12, 'Mordida', 'C'),
                          (12, 'Macie', 'D'),
                          (13, '40 moedas', 'A'),
                          (13, '30 moedas', 'B'),
                          (13, '25 moedas', 'C'),
                          (13, '35 moedas', 'D');

select q.descricao Quiz, qq.idQuestao Questao, qq.enunciado Pergunta, qr.resposta Resposta, qr.alternativa Alternativa,
case when qr.resposta = qq.resposta_correta then 'Respota certa'
                                            else 'Resposta errada'
											end Resultado from Quiz q
inner join Quiz_questao qq on q.id = qq.fkQuiz
inner join Quiz_resposta qr on qr.fkQuestao = qq.idQuestao;                                           
						