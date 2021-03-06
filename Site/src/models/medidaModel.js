var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select qtdAcertos as Acertos,
        FORMAT(data_jogada,N'dd/MM hh:mm') as momento_grafico
    from JogadasMaroon5
    where fk_usuario = ${idUsuario}
    order by idJogada desc OFFSET 0 ROWS FETCH FIRST ${limite_linhas} ROWS ONLY;`;}
    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        qtdAcertos as Acertos,
                        DATE_FORMAT(data_jogada,'%d/%m %H:%i') as momento_grafico
                    from Jogadas
                    where fk_usuario = ${idUsuario}
                    order by idJogada desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select qtdAcertos as Acertos,
        FORMAT(data_jogada,N'dd/MM hh:mm') as momento_grafico
    from JogadasMaroon5
    where fk_usuario = ${idUsuario}
    order by idJogada desc OFFSET 0 ROWS FETCH FIRST 1 ROWS ONLY;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        qtdAcertos as Acertos,
                        DATE_FORMAT(data_jogada,'%M:%D) as momento_grafico, 
                        fk_usuario 
                        from Jogadas where fk_usuario = ${idUsuario} 
                    order by idJogada desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidasbarra(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select qtdAcertos as numeroquest,count(qtdAcertos) as qtdAcertosPorQuestao
        from JogadasMaroon5
        group by qtdAcertos order by sum(distinct qtdAcertos) desc;`;
    }
    else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select qtdAcertos as numeroquest,count(qtdAcertos) as qtdAcertosPorQuestao
        from Jogadas
        group by qtdAcertos order by sum(distinctrow qtdAcertos) desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoRealbarra(idUsuario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select qtdAcertos as numeroquest,count(qtdAcertos) as qtdAcertosPorQuestao
        from JogadasMaroon5
        group by qtdAcertos order by sum(distinct qtdAcertos) desc;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select qtdAcertos as numeroquest,count(qtdAcertos) as qtdAcertosPorQuestao
        from Jogadas
        group by qtdAcertos order by sum(distinctrow qtdAcertos) desc;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidasbarra,
    buscarMedidasEmTempoRealbarra
}
