function converterDuracao() {
    //cria referência aos elementos da página
    let inTitulo = document.getElementById('inTitulo')
    let inDuracao = document.getElementById('inDuracao')
    let outTitulo = document.getElementById('outTitulo')
    let outResposta = document.getElementById('outResposta')

    //obtém conteúdos dos campos de entrada
    let titulo = inTitulo.value
    let duracao = Number(inDuracao.value)

    //arredonda para baixo o resultado da divisão
    let horas = Math.floor(duracao / 60)
    //obtem o resto da divisão entre os números
    let minutos = duracao % 60
    //altera o conteúdo dos parágrafos de resposta
    outTitulo.textContent = 'Título do Filme: ' + titulo
    outResposta.textContent = horas + 'horas(s) e ' + minutos + ' minuto(s)'
}

//cria uma referência ao elemento btCOnverter(botão)
let btConverter = document.getElementById('btConverter')
//registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener('click', converterDuracao)
