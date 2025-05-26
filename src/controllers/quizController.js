var quizModel = require("../models/quizModel");

function listar(req, res) {
    quizModel.listar().then(function(resultado) {
        if(resultado.length > 0){
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro){
        console.log(erro);
        console.log("Houve um erro ao buscar os quizzes: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarQuestoes(req, res) {
    var id = req.params.id;

    quizModel.listarQuestoes(id)
        .then(
            function(resultado){
               if (resultado.length > 0){
                  res.status(200).json(resultado);
               } else {
                  res.status(204).send("Nenhum resultado encontrado!");
               }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar as questões: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

    
}

 function responderQuestao(req, res) {
    var idUsuario = req.body.idUsuario;
    var respostas = req.body.respostas;
    var idTentativa = 1;

    if(idUsuario == undefined){
        res.status(400).send("O id do usuário está indefinido!");
    } else if (respostas == undefined){
        res.status(400).send("As respostas estão indefinidas!");
    } else if (idTentativa == undefined){
        res.status(400).send("O id da tentativa está indefinido!");
    } else {
        quizModel.responderQuestao(idTentativa, idUsuario, respostas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        
    }
}

module.exports = {
    listar,
    listarQuestoes,
    responderQuestao
}