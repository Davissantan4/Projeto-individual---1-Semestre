var express = require("express");
var router = express.Router();

var comentarioController = require("../controllers/comentarioController");

router.get("/total", function (req, res) {
    comentarioController.total(req, res);
});

router.get("/total/:idUsuario", function (req, res) {
    comentarioController.totalPorUsuario(req, res);
});

router.get("/participacoes", function (req, res) {
    comentarioController.maisParticipacoes(req, res);
});

router.get("/maiores", function (req, res) {
    comentarioController.maioresParticipacoes(req, res);
});

router.get("/ultimas", function (req, res) {
    comentarioController.ultimasParticipacoes(req, res);
});


module.exports = router;
