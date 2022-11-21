function promocaoMedicamento() {
    //criar referência aos elementos da página
    let inMedicamento = document.getElementById('inMedicamento')
    let inPreco = document.getElementById('inPreco')
    let outPromocao = document.getElementById('outPromocao')
    let outValor = document.getElementById('outValor')

    //Obtem o conteúdo dos elementos da página
    let preco = Math.floor(inPreco.value)
    let medicamento = inMedicamento.value

    //Calcula o valor a ser pago
    let valor = preco * 2

    //alterar o conteúdo da linha de resposta
    outPromocao.textContent = 'Promoção de ' + medicamento
    outValor.textContent = 'Leve 2 por apenas R$: ' + valor.toFixed(2)
}

// criar referência ao elmento btPormoção
let btPromocao = document.getElementById('btPromocao')

//registrar um evento associado ao botão, para carregar uma função
btPromocao.addEventListener('click', promocaoMedicamento)
