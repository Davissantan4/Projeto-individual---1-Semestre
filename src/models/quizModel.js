var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM  Quiz;
        `;
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarQuestoes(id) {
    var instrucao = `
        SELECT * FROM Quiz_questao WHERE fkQuiz = ${id};
        `;
        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

function listarRespostas(id) {
    var instrucao = `
        SELECT * from Quiz_resposta qr
        INNER JOIN Quiz_questao qq on qr.fkQuestao = qq.idQuestao
        WHERE qq.fkQuiz = ${id};
        `;
        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

 async function responderQuestao(idUsuario, respostas) {

    console.log(respostas);

        for(let resp of respostas){
        const questao = await database.executar(`SELECT * FROM Quiz_questao WHERE idQuestao = 5;`);

        const correta = questao[0].alternativa_correta === resp.alternativa;

        const instrucao = await database.executar(`INSERT INTO Usuario_resposta (data_resposta, fkUsuario, fkResposta, acertou) VALUES (current_timestamp(), ${idUsuario}, 4, ${correta ? 1 : 0});`);


        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);

        }
        
}

module.exports = {
    listar,
    listarQuestoes,
    listarRespostas,
    responderQuestao
}