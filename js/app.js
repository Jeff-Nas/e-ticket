//variáveis dos ingressos disponíveis
let qtdPista = Number(document.getElementById('qtd-pista').innerText)
let qtdSuperior = Number(document.getElementById('qtd-superior').innerText)
let qtdInferior = Number(document.getElementById('qtd-inferior').innerText)

//quantidade de ingressos restantes
let quantidade
let tipoIngresso

function comprar() {
    quantidade = parseInt(document.getElementById('qtd').value)
    tipoIngresso = document.getElementById('tipo-ingresso').value

    switch (tipoIngresso) {
        case "pista":
            qtdPista = calcularQtd("pista" , qtdPista)
           break

        case "inferior":
            qtdInferior = calcularQtd("inferior" , qtdInferior)
            break
        case "superior":
            qtdSuperior = calcularQtd("superior" , qtdSuperior)
            break
    }
}


function calcularQtd(tipoIngresso , qtdIngresso) {
    if (quantidade <= qtdIngresso) {
        qtdIngresso = qtdIngresso - quantidade
        document.getElementById(`qtd-${tipoIngresso}`).innerText = qtdIngresso
    } else {
        mensagem(qtdIngresso)
    }
    return qtdIngresso
}

function mensagem(qtdIngressos) {
    alert(`Não há ingressos suficientes para essa compra.
        \nIngressos disponíveis: ${qtdIngressos}`)
}