function calcularPreco() {
    //criar referência aso elementos da página
    let inPreco = document.getElementById('inPreco')
    let inTempo = document.getElementById('inTempo')
    let outValorPagar = document.getElementById('outValorPagar')

    //obtém o conteúdo dos campos de entrada
    let preco = Number(inPreco.value)
    let tempo = Number(inTempo.value)

    //calcular valor a ser pago (arrendonda para cima)
    let valor = Math.ceil(tempo / 15) * preco

    //alterar o conteúdo da linha da resposta (com 2 decimais)
    outValorPagar.textContent = 'Valor a pagar R$ ' + valor.toFixed(2)
}
//criar um referência ao elemento btpagar
let btpagar = document.getElementById('btPagar')

//registrar um evento associado ao botão, para carregar a funçãi

btpagar.addEventListener('click', calcularPreco)
