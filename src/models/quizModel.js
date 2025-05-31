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
        SELECT qr.idResposta, qr.fkQuestao, qr.resposta, qr.alternativa
        INNER JOIN Quiz_questao qq on qr.fkQuestao = qq.idQuestao
        INNER JOIN QUiz q on qq.fkQuiz = ${id}
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
    listarRespostas,
    responderQuestao
}