function mostrarPromocao() {
    //criar referência dos elementos manipualods pelo programa (entradas e saídas)

    let inVeiculo = document.getElementById('inVeiculo')
    let inPreco = document.getElementById('inPreco')
    let outVeiculo = document.getElementById('outVeiculo')
    let outEntrada = document.getElementById('outEntrada')
    let outParcela = document.getElementById('outParcela')

    //obtém Conteúdo dos campos de entrada

    let veiculo = inVeiculo.value
    let preco = Number(inPreco.value)

    //calcula valor da entrada e das parcelas
    let entrada = preco * 0.5
    let parcela = (preco * 0.5) / 12
    //altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = 'Promoção: ' + veiculo
    outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2)
    outParcela.textContent = '+ 12 de R$: ' + parcela.toFixed(3)
}

//criar uam referência ao elemento btVerPromoção(botão)
let btVerPromocao = document.getElementById('btVerPromocao')
//registra um evento associado ao botão, para carregar uma função
btVerPromocao.addEventListener('click', mostrarPromocao)
