function mostrarPromocao() {
    //criar referência aso elementos da página
    let inProduto = document.getElementById('inProduto')
    let inPreco = document.getElementById('inPreco')
    let outProduto = document.getElementById('outProduto')
    let outPreco = document.getElementById('outPreco')

    //obtém o conteúdo dos campos de entrada
    let produto = inProduto.value
    let preco = Number(inPreco.value)

    //calcular valor a ser pago
    let produtoPromocao = preco * 0.5
    let promocao = (preco * 2) + produtoPromocao
    
    //alterar o conteúdo da linha da resposta (com 2 decimais)
    outProduto.textContent = produto + ' - Promoção: Leve 3 por R$ ' + promocao.toFixed(2)
    outPreco.textContent = "O 3º Produto custa apenas R$ " + produtoPromocao.toFixed(2)
}
//criar um referência ao elemento btpagar
let btPromocao = document.getElementById('btPromocao')

//registrar um evento associado ao botão, para carregar a funçãi

btPromocao.addEventListener('click', mostrarPromocao)
