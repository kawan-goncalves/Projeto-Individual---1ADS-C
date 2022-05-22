

var inputNascimento = ""
var palavrafinal = ""
function mascaranascimento(){

    var nascimento = inputdtNascimento.value.length
    
    if (nascimento == 2) {
        document.getElementById("inputdtNascimento").value=document.getElementById("inputdtNascimento").value + "/";
    }
    else if (nascimento == 5) {
        document.getElementById("inputdtNascimento").value = document.getElementById("inputdtNascimento").value + "/";
    }
    else if (nascimento == 10) {
        inputNascimento= document.getElementById("inputdtNascimento").value
        palavrafinal=`${inputNascimento.slice(-4)}-`
        palavrafinal+=`${inputNascimento[3]}`
        palavrafinal+=`${inputNascimento[4]}-`
        palavrafinal+=`${inputNascimento[0]}`
        palavrafinal+=`${inputNascimento[1]}`
    }
}