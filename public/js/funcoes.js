function validarLogin() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if(window.location == "http://localhost:3333/inicioquiz.html"){

            botaostart.style.display="block"
            mensagemlogar.style.display="none"
        }
        
        logout.style.display="block"
        loginmenu.style.display="none"

        // finalizarAguardar();
    } else {
        if(window.location == "http://localhost:3333/inicioquiz.html"){
        botaostart.style.display="none"
        mensagemlogar.style.display="block"
        }

        logout.style.display="none"
        loginmenu.style.display="block"
    }
}
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_email.innerHTML = email;
        

        // finalizarAguardar();
    } else {
        window.location = "../inicioquiz.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../entrar.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
  //  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
  //  divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}
