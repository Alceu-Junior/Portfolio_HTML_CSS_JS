const botaoAdicionaJogador = document.querySelector("#salvar-jogador")


const adicionarJogador = (evento) => {
    evento.preventDefault()

    const inputNome = document.querySelector("#nome").value
    const inputTime = document.querySelector("#time").value
    const inputNumero = document.querySelector("#numero").value

    var linha = criarLinhaTabela(inputNome, inputTime, inputNumero)

    const corpoTabela = document.querySelector("#corpo-tabela")
    corpoTabela.appendChild(linha)
    
    
}

botaoAdicionaJogador.addEventListener('click', adicionarJogador)


function criarLinhaTabela(nome, time, numero) {
    linhaCorpo = document.createElement('tbody')
    linha = document.createElement('tr')
    campoNome = document.createElement('td')
    campoTime = document.createElement('td')
    campoNumero = document.createElement('td')
    
    campoNome.textContent = nome
    campoTime.textContent = time
    campoNumero.textContent = numero

    linha.appendChild(campoNome)
    linha.appendChild(campoTime)
    linha.appendChild(campoNumero)

    linhaCorpo.appendChild(linha)

    return linhaCorpo;
}

function somenteNumeros(e) {
    function isNumber(str) {
        return !isNaN(str)
    }
    
    var validaNumero = isNumber(document.querySelector("#numero").value)
    
    if (!validaNumero){
        botaoAdicionaJogador.disabled=true
    }else{
        botaoAdicionaJogador.disabled=false
    }
    
}

const inputNome = document.querySelector("#nome").value
const inputTime = document.querySelector("#time").value
const inputNumero = document.querySelector("#numero").value

if (!inputNome || !inputTime || !inputNumero){
        botaoAdicionaJogador.disabled=true
}else{
    botaoAdicionaJogador.disabled=false
}


botaoEnviarComentario = document.querySelector("#botao-recado")

function enviaComentario(){
    recado = document.querySelector("#area-recado").value
    emailRecado = document.querySelector("#email-recado").value

    console.log(recado)
}

botaoEnviarComentario.addEventListener('click', enviaComentario)