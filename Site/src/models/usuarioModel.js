var database = require("../database/config")


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function registraracertos(idUsuario,acertos) {
    

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registraracertos():", idUsuario, acertos);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    //Para o banco local mudar nome da tabela apenas para Jogadas
    var instrucao = `
        INSERT INTO JogadasMaroon5 (qtdAcertos,fk_usuario) VALUES ('${acertos}','${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, email, nascimento ,senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email,nascimento,senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    //Para o banco local mudar nome da tabela apenas para Usuario
    var instrucao = `
        INSERT INTO usuarioMaroon5 (Nome, Email,data_nascimento,senha) VALUES ('${nome}', '${email}','${nascimento}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",email, senha)
    //Para o banco local mudar nome da tabela apenas para Usuario
    var instrucao = `
        SELECT * FROM usuarioMaroon5 WHERE Email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registraracertos,
    cadastrar,
    entrar,
};