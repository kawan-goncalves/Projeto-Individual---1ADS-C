
var click = 0
var clicknight = 0
var clickMemories = 0

var listamusicas =
{
    nome: ["Maps", "One More Night", "Memories"],
    album: ["V", "Overexposed", "Jordi"],
    onclick: ["play", "playnight", "playMemories"],
    div: ["mapsdiv", "nightdiv", "memoriesdiv"],
    linkimg: ["img site/capa para dar play.jpg", "img site/overexposed para dar play.jpg", "img site/Jordi para dar play.jpg"],
    audio: ["musicas/Maps.mp3", "musicas/Maroon 5 - One More Night.mp3", "musicas/Maroon 5 - Memories.mp3"],
    idaudio:["playmaps","playaudionight","playaudioMemories"]
}
setTimeout(()=> {
    for (var contador = 0; contador < 3; contador++) {
    albuns.innerHTML +=
        `<div class="boxmusica">
    <p>Ouça "${listamusicas.nome[contador]}" do Album ${listamusicas.album[contador]} !!!</p>
    <a onclick="${listamusicas.onclick[contador]}()">
    <div id="${listamusicas.div[contador]}">
    <img src="${listamusicas.linkimg[contador]}">
    </div>
    </a>
    <audio src="${listamusicas.audio[contador]}" loop="true" id="${listamusicas.idaudio[contador]}">
                O seu navegador não tem suporte à áudio.
    </audio>
    </div>`
}},100)

function play() {
    click++
    if (click == 1) {
        mapsdiv.innerHTML = `<img src="img site/Gif maps.gif">`
        playmaps.play()

    }
    if (click == 2) {
        mapsdiv.innerHTML = '<img src="img site/capa para dar play.jpg">'
        playmaps.pause()
        click = 0
    }
}
function playnight() {
    clicknight++
    if (clicknight == 1) {
        nightdiv.innerHTML = `<img src="img site/Overexposed gif (2).gif">`
        playaudionight.play()

    }
    if (clicknight == 2) {
        nightdiv.innerHTML = '<img src="img site/overexposed para dar play.jpg">'
        playaudionight.pause()
        clicknight = 0
    }
}
function playMemories() {
    clickMemories++
    if (clickMemories == 1) {
        memoriesdiv.innerHTML = `<img src="img site/Jordi gif.gif">`
        playaudioMemories.play()
    }
    if (clickMemories == 2) {
        memoriesdiv.innerHTML = '<img src="img site/Jordi para dar play.jpg">'
        playaudioMemories.pause()
        clickMemories = 0
    }
}

function cadastrotela(){
    teladecadastro.style.display="block"
    teladelogin.style.display="none"

    opcaocadastro.style.backgroundColor ="#000000"
    opcaocadastro.style.backgroundImage ="linear-gradient(to right, yellow,rgb(235, 44, 235), rgb(47, 213, 255),green)"
    opcaocadastro.style.color ="transparent"
    opcaocadastro.style.backgroundClip ="text"
    opcaocadastro.style.webkitBackgroundClip ="text"


    opcaologin.style.backgroundColor ="grey"
    opcaologin.style.backgroundImage ="none"
    opcaologin.style.color ="black"
    opcaologin.setAttribute("style", "background-clip: none")
    opcaologin.setAttribute("style", "-webkit-background-clip:none")
}

function entrartela(){
    teladecadastro.style.display="none"
    teladelogin.style.display="block"

    opcaologin.style.backgroundColor ="#000000"
    opcaologin.style.backgroundImage ="linear-gradient(to right, yellow,rgb(235, 44, 235), rgb(47, 213, 255),green)"
    opcaologin.style.color ="transparent"
    opcaologin.style.backgroundClip ="text"
    opcaologin.style.webkitBackgroundClip ="text"


    opcaocadastro.style.backgroundColor ="grey"
    opcaocadastro.style.backgroundImage ="none"
    opcaocadastro.style.color ="black"
    opcaocadastro.setAttribute("style", "background-clip: none")
    opcaocadastro.setAttribute("style", "-webkit-background-clip:none")
}
