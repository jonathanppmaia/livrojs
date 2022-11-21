<h4>
Livro: Lógica de Programação e Algoritmo com Javascript
</h4>

<h4>Autor: Edécio Fernado Lepsem</h4>

<hr>

<h5>CAPÍTULO 01 - INTRODUÇÃO</h5>

<h5>Notas sobre Capítulo </h5>

A linguagem javascript disp~e dos comandos (metódos) prompt() e alert() para realizar pequenas intereações com o usuário.

**prompt()** - Exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto. se a resposta deve ser um número, você deve converter o valor para Number:
Exemplo:
`var aNumber = Number(window.prompt("Digite um número", ""));`

**alert()** - mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK, deve ser utilizada para mensagens que não requeiram nenhuma resposta da parte do usuário, a não ser o reconhecimento da mensagem.
Exemplo:
`alert("Hello world!")`

**tofix()** - O método toFixed() formata um número utilizando notação de ponto fixo.
Exemplo:
``numObj.toFixed([dígitos])`
`var resultado = 30.564664`
`alert(resultado.toFixed(2))` `// 30.56`

<h5>Exercícios</h5>

01 - Apresente a mensagem ao usuário "Bem-Vindo ao Mundo Javascript1".
02 - Receber uma informação e apresentar uma mensagem utilizando a informação recebeida.
03 - Apresentar o resultado do cálculo ao lado de cada variável como um comentário (//).
04 - Converter texto (string) em número (number) pelo métodos Number().
05 - Exibir uma variável que não recebeu uma atribuição de valor, gerando uma saída "underfined".
06 - Elaborar um programa que leia um número. Calcule e informe o dobro desse número. - Entrada de dados: ler um número; - Processamento: Calcular o dobro; - Saída: Informar o dobro;
07 - Elaborar um programa que leia um número e converta para Number no caso de soma (+). Calcule e informe o dobro desse número. - Entrada de dados: ler um número; - Processamento: Calcular o dobro; - Saída: Informar o dobro;
08 - Elaborar um programa que leia dois números. Calcule e informe a soma desses números. - Entrada de dados: ler um número; - Processamento: Calcular a soma; - Saída: Informar o dobro;
09 - Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
10 - Elaborar um programa que leia a duração de uma viagem em dias e horas. Calcule e infome a duração total da Viagem em números de horas.

<h5>Exercícios Capítulo 01</h5>
- a) Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.
  - ​    Exemplo:
  - ​        Valor:15
  - ​        Vizinho: 14 e 16

-   b) Elaborar um programa para pizzaria, o qual leia o valor de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
    -   ​ Exemplo:
    -   ​ Valor da Conta: R$ 90.00
    -   ​ Número de Clientes: 3
    -   ​ Valor por Cliente
-   c) Elaborar um programa para uma loja, a qual leia o preço de um porduot e informe as opções e pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto em até 3x.
    -   ​ Exemplo:
    -   ​ Valor da Conta: R$60.00
    -   ​ À vista: R$: 54.00
    -   ​ Ou em 3x de R$: 20.00
-   d) Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.
    -   ​ Exemplo:
    -   ​ 1º Nota: 7.00
    -   ​ 2º Nota: 8.00
    -   ​ Média:7.5

<hr>

<h5>CAPÍTULO 02 - INTEGRAÇÃO COM HTML</h5>

<h5>Exercícios Capítulo 02</h5>

EXEMPLOS DE PROGRAMAS JAVASCRIPT INTEGRADOS COM HTML

-   a) Elaborar um programa para uma Vídeo Locadora, que leia o título e a duração de um filme em minutos. Exiba o Título do filme e converta a duração para horas e minutos.

-   b) Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e preço do ceículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x.

-   c) Um supermercado está com uma promoção - Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção.
