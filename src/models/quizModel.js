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

 async function responderQuestao(idTentativa, idUsuario, respostas) {

        for(let resp of respostas){
        var questao = await database.executar(`SELECT * FROM Quiz_questao WHERE idQuestao = ${resp.idQuestao}`);
        var correta = questao.alternativa_correta === resp.alternativa;

        var instrucao = await database.executar(`INSERT INTO Usuario_resposta (idTentativa, fkUsuario, fkResposta, acertou) VALUES (${idTentativa}, ${idUsuario}, ${resp.idResposta}, ${correta})`);
        }

        console.log("Executando a instrução: \n" + instrucao);
        return database.executar(instrucao);
}

module.exports = {
    listar,
    listarQuestoes,
    responderQuestao
}