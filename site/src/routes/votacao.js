
var express = require("express");
var router = express.Router();

router.get("/ultimas/", function (req, res) {
    votacaoController.buscarUltimasMedidas(req, res);
});

var votacaoController = require("../controllers/votacaoController");

//Recebendo os dados do html e direcionando para a função cadastrar de votacaoController.js
router.post("/cadastrar", function (req, res) {
    votacaoController.cadastrar(req, res);
})

module.exports = router;