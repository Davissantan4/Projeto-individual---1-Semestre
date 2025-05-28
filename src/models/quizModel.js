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

function listarRespostas(idQuestao) {
    var instrucao = `
        SELECT idResposta FROM  Quiz_resposta where fkQuestao = ${idQuestao};
        `;
        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

async function selecionarResposta(idQuestao, alternativa){
    var instrucao = `
        SELECT idResposta FROM Quiz_resposta where fkQuestao = ${idQuestao} AND alternativa = ${alternativa};
        `;
        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

 async function responderQuestao(idUsuario, respostas) {

        for(let resp of respostas){
        var questao = await database.executar(`SELECT * FROM Quiz_questao WHERE idQuestao = ${resp.idQuestao}`);
        var resposta = await database.executar(`SELECT * FROM Quiz_resposta WHERE idResposta = ${resp.idResposta}`);
        var correta = questao.alternativa_correta === resp.alternativa;

        var instrucao = await database.executar(`INSERT INTO Usuario_resposta (data_resposta, fkUsuario, fkResposta, acertou) VALUES (current_timestamp(), ${idUsuario}, ${resposta}, ${correta})`);
        }

        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

module.exports = {
    listar,
    listarQuestoes,
    selecionarResposta,
    responderQuestao
}