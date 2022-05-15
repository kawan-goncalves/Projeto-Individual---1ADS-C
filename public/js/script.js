
var click = 0
var clicknight = 0
var clickMemories=0
function play(){
    click++
    if(click == 1){
        mapsdiv.innerHTML= `<img src="img site/Gif maps.gif">`
        playmaps.play()
        
    }
    if(click==2){
        mapsdiv.innerHTML= '<img src="img site/capa para dar play.jpg">'
        playmaps.pause()
        click=0
    }
}
function playnight(){
    clicknight++
    if(clicknight == 1){
        nightdiv.innerHTML= `<img src="img site/Overexposed gif (2).gif">`
        playaudionight.play()
        
    }
    if(clicknight==2){
        nightdiv.innerHTML= '<img src="img site/overexposed para dar play.jpg">'
        playaudionight.pause()
        clicknight=0
    }
}
function playMemories(){
    clickMemories++
    if(clickMemories == 1){
        Memoriesdiv.innerHTML= `<img src="img site/Jordi gif.gif">`
        playaudioMemories.play()
    }
    if(clickMemories==2){
        Memoriesdiv.innerHTML= '<img src="img site/Jordi para dar play.jpg">'
        playaudioMemories.pause()
        clickMemories=0
    }
}