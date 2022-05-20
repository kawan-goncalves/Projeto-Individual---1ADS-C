
var largura = 300
var contador = 0
var qtacertos = 0
var perguntas = {
    numero: ["Pergunta 2", "Pergunta 3", "Pergunta 4", "Pergunta 5", "Pergunta 6", "Pergunta 7", "Pergunta 8", "Pergunta 9", "Pergunta 10"],
    enunciado: ["<p>Qual desses hits tem mais views no Youtube?</p>", "<p>Qual reality Adam Levine foi jurado durante 16 temporadas?</p>", "<p>Quantas vezes Maroon 5 veio para o Brasil?</p>", "<p>Qual o primeiro álbum da banda?</p>", "<p>E o último Lançado?</p>", "<p>Em 2005 receberam seu primeiro grammy, que foi na categoria:</p>", "<p>A banda surgiu em 1994, se chamando:</p>", "<p>Em que ano Ryan Dusick deixou a banda?</p>", "<p>Quantos anos tem Adam Levine? </p>"],
    resposta1: ["Girls Like you", "X-factor", "6", "We like Digging?", "V", "Álbum do ano", "Edible Nuns", "2004", "43"],
    resposta2: ["Sugar", "America`s Got Talent", "9", "V", "Jordi", "Musica do Ano", "Maroon 5", "2006", "40"],
    resposta3: ["One More Night", "American Idol", "7", "Overex<br>posed", "Overex<br>posed", "Artista Revelação", "Mostly Men", "2005", "41"],
    resposta4: ["Payphone","The Voice","4","Songs About Jane","Red Pill Blue","Gravação do ano","Kara's Flower","2007","38"]

}
var quiz = setInterval(function diminuir() {
    tempopassando.style.width = largura + "px"
    largura -= 0.0440412
    if (contador < 1) {
        contador++
    }
    else if (largura <= 0 && contador == 1) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[0]
        questao.innerHTML = perguntas.enunciado[0]
        respostaA.innerHTML = perguntas.resposta1[0]
        respostaC.innerHTML = perguntas.resposta2[0]
        respostaB.innerHTML = perguntas.resposta3[0]
        respostaD.innerHTML = perguntas.resposta4[0]
    }
    else if (largura <= 0 && contador == 2) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[1]
        questao.innerHTML = perguntas.enunciado[1]
        respostaA.innerHTML = perguntas.resposta1[1]
        respostaC.innerHTML = perguntas.resposta2[1]
        respostaB.innerHTML = perguntas.resposta3[1]
        respostaD.innerHTML = perguntas.resposta4[1]
    }
    else if (largura <= 0 && contador == 3) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[2]
        questao.innerHTML = perguntas.enunciado[2]
        respostaA.innerHTML = perguntas.resposta1[2]
        respostaC.innerHTML = perguntas.resposta2[2]
        respostaB.innerHTML = perguntas.resposta3[2]
        respostaD.innerHTML = perguntas.resposta4[2]
    }
    else if (largura <= 0 && contador == 4) {
        largura = 300
        contador++

        numeroquestao.innerHTML = perguntas.numero[3]
        questao.innerHTML = perguntas.enunciado[3]
        respostaA.innerHTML = perguntas.resposta1[3]
        respostaC.innerHTML = perguntas.resposta2[3]
        respostaB.innerHTML = perguntas.resposta3[3]
        respostaD.innerHTML = perguntas.resposta4[3]
    }
    else if (largura <= 0 && contador == 5) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[4]
        questao.innerHTML = perguntas.enunciado[4]
        respostaA.innerHTML = perguntas.resposta1[4]
        respostaC.innerHTML = perguntas.resposta2[4]
        respostaB.innerHTML = perguntas.resposta3[4]
        respostaD.innerHTML = perguntas.resposta4[4]
    }
    else if (largura <= 0 && contador == 6) {
        largura = 300
        contador++

        numeroquestao.innerHTML = perguntas.numero[5]
        questao.innerHTML = perguntas.enunciado[5]
        respostaA.innerHTML = perguntas.resposta1[5]
        respostaC.innerHTML = perguntas.resposta2[5]
        respostaB.innerHTML = perguntas.resposta3[5]
        respostaD.innerHTML = perguntas.resposta4[5]
    }
    else if (largura <= 0 && contador == 7) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[6]
        questao.innerHTML = perguntas.enunciado[6]
        respostaA.innerHTML = perguntas.resposta1[6]
        respostaC.innerHTML = perguntas.resposta2[6]
        respostaB.innerHTML = perguntas.resposta3[6]
        respostaD.innerHTML = perguntas.resposta4[6]
    }
    else if (largura <= 0 && contador == 8) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[7]
        questao.innerHTML = perguntas.enunciado[7]
        respostaA.innerHTML = perguntas.resposta1[7]
        respostaC.innerHTML = perguntas.resposta2[7]
        respostaB.innerHTML = perguntas.resposta3[7]
        respostaD.innerHTML = perguntas.resposta4[7]
    }
    else if (largura <= 0 && contador == 9) {
        largura = 300
        contador++
        numeroquestao.innerHTML = perguntas.numero[8]
        questao.innerHTML = perguntas.enunciado[8]
        respostaA.innerHTML = perguntas.resposta1[8]
        respostaC.innerHTML = perguntas.resposta2[8]
        respostaB.innerHTML = perguntas.resposta3[8]
        respostaD.innerHTML = perguntas.resposta4[8]
    }
    else if (largura <= 0 && contador == 10) {
        respostaA.innerHTML = ""
        respostaC.innerHTML = ""
        respostaB.innerHTML = ""
        respostaD.innerHTML = ""
        ab.innerHTML = ''
        cd.innerHTML = ''
        if (qtacertos <= 4) {
            numeroquestao.innerHTML = "Que pena, poderia ter ido melhor"
        }
        else if (qtacertos <= 7) {
            numeroquestao.innerHTML = "Seu desempenho foi mediano"
        }

        else if (qtacertos <= 9) {
            numeroquestao.innerHTML = "Parabéns, você foi bem"
        }

        else {
            numeroquestao.innerHTML = "Uau, você é o(a) fã N°1 da Maroon 5"
        }
        questao.innerHTML = `<p>Acertou: ${qtacertos} questões</p>`
        clearInterval(quiz);
        registraracertos();
        aparecerdiv();
    }

}, 3);


function alternativaA() {
    if (contador == 5 || contador == 10) {
        qtacertos++
    }
    largura = 0
}
function alternativaB() {
    if (contador == 4 || contador == 7) {
        qtacertos++
    }
    largura = 0
}
function alternativaD() {
    if (contador <= 1 || contador == 3 || contador == 8) {
        qtacertos++
    }
    largura = 0
}
function alternativaC() {
    if (contador == 2 || contador == 6 || contador == 9) {
        qtacertos++
    }
    largura = 0
}
function registraracertos() {
    var qtdAcertos = qtacertos
    // Enviando o valor da nova input
    fetch("/usuarios/registraracertos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            acertosServer: qtdAcertos,

        })
    })
}
