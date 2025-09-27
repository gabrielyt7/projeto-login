// fa-solid fa-eye-slash
//fas fa-eye
    
function trocarBotao(){
    let senha =document.getElementById("senhaID")
    let botao = document.getElementById("botaoID")

     if(botao.className == "fa-solid fa-eye-slash"){
        botao.className = "fas fa-eye"
        senha.type = "text"
     } else if(botao.className == "fas fa-eye"){
        botao.className = "fa-solid fa-eye-slash"
        senha.type = "password"
     }

}

