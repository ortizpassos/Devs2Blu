
// Perguntas e respostas para o quiz
const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    opcoes: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    correta: 2
  },
  {
    pergunta: "Quanto é 5 x 3?",
    opcoes: ["8", "15", "10", "13"],
    correta: 1
  },
  {
    pergunta: "Quanto é 144 dividido por 12?",
    opcoes: ["12", "22", "15", "10"],
    correta: 0
  },
  {
    pergunta: "Qual o maior planeta do sistema solar?",
    opcoes: ["Terra", "Marte", "Júpiter", "Vênus"],
    correta: 2
  },
  {
    pergunta: "Qual é a fórmula da água?",
    opcoes: ["CO2", "H2O", "NaCl", "O2"],
    correta: 1
  },
  {
    pergunta: "Em que continente está o Brasil?",
    opcoes: ["Europa", "América do sul", "África", "Ásia"],
    correta: 2
  },
  {
    pergunta: "Quanto é a raiz quadrada de 144?",
    opcoes: ["6", "12", "7", "9"],
    correta: 1
  },
  {
    pergunta: "Qual o símbolo químico do ouro?",
    opcoes: ["Ag", "Au", "Pb", "Fe"],
    correta: 1
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    opcoes: ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Rafael"],
    correta: 2
  },
  {
    pergunta: "Qual o idioma oficial da Argentina?",
    opcoes: ["Português", "Francês", "Espanhol", "Italiano"],
    correta: 2
  }
];

// Embaralha e escolhe 5 perguntas aleatórias
const perguntasSelecionadas = perguntas.sort(() => 0.5 - Math.random()).slice(0, 5); // fonte: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array


// Variáveis de controle do quiz
let indiceAtual = 0;
let acertos = 0;

// Elementos de interface
const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const botaoProxima = document.getElementById("proxima");
const resultado = document.getElementById("resultado");
const pontuacao = document.getElementById("pontuacao");

// Função para carregar a pergunta atual
function carregarPergunta() {
  botaoProxima.disabled = true;
  opcoesElemento.innerHTML = "";
  const perguntaAtual = perguntasSelecionadas[indiceAtual];
  perguntaElemento.textContent = `(${indiceAtual + 1}/5) ${perguntaAtual.pergunta}`;

// Cria os botões de opção
  perguntaAtual.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.addEventListener("click", () => {
      if (i === perguntaAtual.correta) acertos++;
      Array.from(opcoesElemento.children).forEach(btn => btn.disabled = true);
      botao.style.backgroundColor = i === perguntaAtual.correta ? "#8f8" : "#f88";
      botaoProxima.disabled = false;
    });
    opcoesElemento.appendChild(botao);
  });
}

botaoProxima.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual < 5) {
    carregarPergunta();
  } else {
    document.getElementById("quiz").classList.add("escondido");
    resultado.classList.remove("escondido");
    pontuacao.textContent = `Você acertou ${acertos} de 5 perguntas.`;
  }
});

// Inicializa
carregarPergunta();
