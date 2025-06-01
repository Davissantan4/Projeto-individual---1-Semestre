var database = require("../database/config");

function total() {
    console.log("ACESSEI O COMENTARIO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function total()");
        var instrucaoSql = `
            SELECT COUNT(*) as total FROM Forum;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
}

function totalPorUsuario(idUsuario) {
    console.log("ACESSEI O COMENTARIO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function totalPorUsuario()");
    var instrucaoSql = `
        SELECT COUNT(*) as total_usuario FROM Forum where fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function maisParticipacoes() {
    console.log("ACESSEI O COMENTARIO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function maisParticipacoes()");
    var instrucaoSql = `
        SELECT u.nome usuario, count(f.id) posts FROM Usuario u
        INNER JOIN Forum f on f.fkUsuario = u.id
        GROUP BY u.nome
        HAVING posts = (SELECT count(id) FROM Forum GROUP BY fkUsuario ORDER BY count(id) DESC LIMIT 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function maioresParticipacoes(limite) {
    console.log("ACESSEI O COMENTARIO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function maioresParticipacoes()");
    var instrucaoSql = `
        SELECT u.nome, count(f.id) FROM Usuario u
        INNER JOIN Forum f on f.fkUsuario = u.id
        GROUP BY u.nome
        ORDER BY count(f.id) DESC LIMIT ${limite};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    total,
    totalPorUsuario,
    maisParticipacoes,
    maioresParticipacoes
}