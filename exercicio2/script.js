// # Exercício 2
// Escreva um programa que faça 3 perguntas de Sim ou Não, e guarde cada resposta em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". 
// Depois, siga os passos:

// a) Crie três novas variáveis, contendo as respostas;

// b) Imprima na tela todas as respostas. Por exemplo:

// ```
// SIM
// SIM
// NÃO
// ```

// c) Altere seu programa, para que o texto das perguntas também sejam guardadas em variáveis. Seu comando de **prompt** deve mudar um pouco, 
// como mostrado abaixo:

// ```jsx
// //mandando a pergunta como texto direto
// const respostaA = prompt("Você está usando uma roupa azul hoje?");

// //mandando a pergunta como variável
// const perguntaA = "Você está usando uma roupa azul hoje?";
// const respostaA = prompt(perguntaA);
// ```

// d) Altere seu programa, para que a impressão das respostas também tenha as **perguntas**. Por exemplo:

// ```
// Você está usando uma roupa azul hoje? - SIM
// ```

// const frio= prompt("Hoje está frio?")
// const janta= prompt("Você já jantou?")
// const brasil= prompt("Você mora no Brasil?")

// console.log (frio, janta, brasil)

const pergunta1 = prompt("Hoje está frio?")
const pergunta2 = prompt("Você já jantou?")
const pergunta3 = prompt("Você mora no Brasil?")

const resposta1 = "Não"
const resposta2 = "Não"
const resposta3 = "Sim"


console.log ("Hoje está frio?", resposta1,"Você já jantou?", resposta2,"Você mora no Brasil?", pergunta3)
