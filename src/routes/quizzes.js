var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/listar", function (req,res){
    quizController.listar(req, res);
});

router.get("/quiz/:id/questoes", function (req, res){
    quizController.listarQuestoes(req, res);
});

router.post("/quiz/:id/responder", async (req, res) => {
    quizController.responderQuestao(req, res);
});

module.exports = router;