var usuarioModel = require("../models/usuarioModel");

var sessoes = [];
function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seu acerto está undefined!");
    
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.registraracertos(acertos)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o registro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    registraracertos
}