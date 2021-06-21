botaoEnviarComentario = document.querySelector("#botao-recado")

function enviaComentario(evento){
    evento.preventDefault()

    recado = document.querySelector("#area-recado").value
    emailRecado = document.querySelector("#email-recado").value

    console.log(recado, emailRecado)
}

botaoEnviarComentario.addEventListener('click', enviaComentario)