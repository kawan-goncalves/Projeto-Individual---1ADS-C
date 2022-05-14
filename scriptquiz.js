var largura = 300
var contador = 0
var acertos = 0
var quiz = setInterval(function diminuir() {
    tempopassando.style.width = largura + "px"
    largura -= 0.0440412
    if(contador<1){
        contador++
    }
    else if (largura <= 0 && contador == 1) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 2"
        questao.innerHTML = "<p>Qual desses hits tem mais views no Youtube?</p>"
        respostaA.innerHTML = "Girls Like you"
        respostaC.innerHTML = "Sugar"
        respostaB.innerHTML = "One More Night"
        respostaD.innerHTML = "Payphone"
    }
    else if (largura <= 0 && contador == 2) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 3"
        questao.innerHTML = "<p>Qual reality Adam Levine foi jurado durante 16 temporadas?</p>"
        respostaA.innerHTML = "X-factor"
        respostaC.innerHTML = "America`s Got Talent"
        respostaB.innerHTML = "American Idol"
        respostaD.innerHTML = "The Voice"
    }
    else if (largura <= 0 && contador == 3) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 4"
        questao.innerHTML = "<p>Quantas vezes Maroon 5 veio para o Brasil?</p>"
        respostaA.innerHTML = "6"
        respostaC.innerHTML = "9"
        respostaB.innerHTML = "7"
        respostaD.innerHTML = "4"
    }
    else if (largura <= 0 && contador == 4) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 5"
        questao.innerHTML = "<p>Qual o primeiro álbum da banda?</p>"
        respostaA.innerHTML = "We like Digging?"
        respostaC.innerHTML = "V"
        respostaB.innerHTML = "Overex<br>posed"
        respostaD.innerHTML = "Song About Jane"
    }
    else if (largura <= 0 && contador == 5) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 6"
        questao.innerHTML = "<p>E o último Lançado?</p>"
        respostaA.innerHTML = "V"
        respostaC.innerHTML = "Jordi"
        respostaB.innerHTML = "Overex<br>posed"
        respostaD.innerHTML = "Best Pill Blue"
    }
    else if (largura <= 0 && contador == 6) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 7"
        questao.innerHTML = "<p>Em 2005 receberam seu primeiro grammy, que foi na categoria:</p>"
        respostaA.innerHTML = "Álbum do ano"
        respostaC.innerHTML = "Música do Ano"
        respostaB.innerHTML = "Artista Revelação"
        respostaD.innerHTML = "Gravação do ano"
    }
    else if (largura <= 0 && contador == 7) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 8"
        questao.innerHTML = "<p>A banda surgiu em 1994, se chamando:</p>"
        respostaA.innerHTML = "Edible Nuns"
        respostaC.innerHTML = "Maroon 5"
        respostaB.innerHTML = "Mostly Men"
        respostaD.innerHTML = "Kara's Flower"
    }
    else if (largura <= 0 && contador == 8) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 9"
        questao.innerHTML = "<p>Em que ano Ryan Dusick deixou a banda?</p>"
        respostaA.innerHTML = "2004"
        respostaC.innerHTML = "2006"
        respostaB.innerHTML = "2005"
        respostaD.innerHTML = "2007"
    }
    else if (largura <= 0 && contador == 9) {
        largura = 300
        contador++
        numeroquestao.innerHTML = "Pergunta 10"
        questao.innerHTML = "<p>Quantos anos tem Adam Levine? </p>"
        respostaA.innerHTML = "43"
        respostaC.innerHTML = "40"
        respostaB.innerHTML = "41"
        respostaD.innerHTML = "38"
    }
    else if(largura<=0 && contador == 10) {
        respostaA.innerHTML = ""
        respostaC.innerHTML = ""
        respostaB.innerHTML = ""
        respostaD.innerHTML = ""
        ab.innerHTML = ""
        ab.innerHTML = ""
        cd.innerHTML = ""
        cd.innerHTML = ""
        if (acertos <= 4) {
            numeroquestao.innerHTML = "Que pena, poderia ter ido melhor"
        }
        else if (acertos <= 7) {
            numeroquestao.innerHTML = "Seu desempenho foi mediano"
        }

        else if (acertos <= 9) {
            numeroquestao.innerHTML = "Parabéns, você foi bem"
        }

        else {
            numeroquestao.innerHTML = "Uau, você é o(a) fã N°1 da Maroon 5"
        }
        questao.innerHTML = `<p>Acertou: ${acertos} questões</p>`
        clearInterval(quiz)
    }

}, 3);

function alternativaA(){
    if(contador==5|| contador == 10){
        acertos++
    }
    largura=0
}
function alternativaB(){
    if(contador==4|| contador == 7){
        acertos++
    }
    largura=0
}
function alternativaD(){
    if(contador<=1 || contador == 3|| contador == 8){
        acertos++
    }
    largura=0
}
function alternativaC(){
    if(contador==2||contador==6|| contador == 9){
        acertos++
    }
    largura=0
}
