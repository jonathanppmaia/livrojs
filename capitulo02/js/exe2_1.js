//declarar a função mostrarOla
function mostrarOla() {
    //Obtem o conteúdo do campo (com id=)nome
    let nome = document.getElementById('nome').value
    // exibe no parágrafo (resposta) : "Olá" e o nome informado
    document.getElementById('resposta').textContent = `Olá  ${nome}`
}
//Criar uma referência ao botaõ (com id=)mostrar
let mostrar = document.getElementById('mostrar')
//registra para o botão "mostrar" um ouvinte para o evento para o enevonto click
//que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla)
