function verificarEmail() {
    var testeMail = inputEmail.value

    if (testeMail.indexOf(".") > -1 && testeMail.indexOf("@") > -1) {
        inputEmail.style.border = "2px solid green";
        avisoInputMail.innerHTML = 'email valido.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = 'green';
    }
    else if (testeMail == '') {
        inputEmail.style.border = "2px solid #b8860b";
        avisoInputMail.innerHTML = 'Campo vazio.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = '#b8860b';
    }

    else {
        inputEmail.style.border = "2px solid red";
        avisoInputMail.innerHTML = 'email invalido.';
        avisoInputMail.style.fontSize = '12px';
        avisoInputMail.style.color = 'red';
    }
}



function ValidaSenha() {
    var testeSenha = inputSenha.value

    if (testeSenha.length >= 8) {
        inputSenha.style.border = "2px solid green";
        avisoInputSenha.innerHTML = 'Senha válida.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = 'green';
    }
    else if (testeSenha == '') {
        inputSenha.style.border = "2px solid #b8860b";
        avisoInputSenha.innerHTML = 'Campo vazio.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = '#b8860b';
    }

    else {
        inputSenha.style.border = "2px solid red";
        avisoInputSenha.innerHTML = 'Senha invalida.';
        avisoInputSenha.style.fontSize = '12px';
        avisoInputSenha.style.color = 'red';
    }
}

function ValidaConfirmarSenha(){
    
        var testeConfirmarSenha = inputConfirmarSenha.value
        var testeSenha = inputSenha.value
    
        if (testeConfirmarSenha  == testeSenha) {
            inputConfirmarSenha.style.border = "2px solid green";
            avisoInputConfirmarSenha.innerHTML = 'Senha confirmada.';
            avisoInputConfirmarSenha.style.fontSize = '12px';
            avisoInputConfirmarSenha.style.color = 'green';
        }
        else if (testeConfirmarSenha == '') {
            inputConfirmarSenha.style.border = "2px solid #b8860b";
            avisoInputConfirmarSenha.innerHTML = 'Campo vazio.';
            avisoInputConfirmarSenha.style.fontSize = '12px';
            avisoInputConfirmarSenha.style.color = '#b8860b';
        }
    
        else {
            inputConfirmarSenha.style.border = "2px solid red";
            avisoInputConfirmarSenha.innerHTML = 'Senhas não são iguais.';
            avisoInputConfirmarSenha.style.fontSize = '12px';
            avisoInputConfirmarSenha.style.color = 'red';
        }
}