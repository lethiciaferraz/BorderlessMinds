

var votacaoModel = require("../models/votacaoModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idvotacao = req.params.idvotacao;

    console.log(`Recuperando as ultimas medidas`);

    votacaoModel.buscarUltimasMedidas(idvotacao).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idioma = req.body.SelServer;
    var idusuario = req.body.idusuario


    // Faça as validações dos valores
    if (idioma == undefined) {
        res.status(400).send("Seu idioma está undefined!");
    } else if (idusuario == undefined) {
        res.status(400).send("Seu idusuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        votacaoModel.cadastrar(idioma,idusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log("deu erro na controller");
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("erro no catch")
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    buscarUltimasMedidas,

}


