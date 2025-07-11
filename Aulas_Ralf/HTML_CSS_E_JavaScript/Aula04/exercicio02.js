document.getElementById("btn-converter").addEventListener("click", converter);

function converter() {
 // Obtém os elementos necessários  
  const imagemMoeda = document.getElementById("imagem-moeda");      // Imagem inicial
  const valor = parseFloat(document.getElementById("valor").value); // Valor a ser convertido
  const tipo = document.getElementById("tipo-conversao").value;     // Tipo de conversão selecionado
  const resultadoDiv = document.getElementById("resultado");        // Para exibir o resultado

// Define as imagens para cada tipo de moeda
  const imagens = {
    money:   "imagens/money.png",
    dolar:   "imagens/dolar.png",
    euro:    "imagens/euro.png",
    libra:   "imagens/libra.png",
    bitcoin: "imagens/bitcoin.png"    
  };

// Verifica se foi digitado um valor válido
  if (isNaN(valor) || valor <= 0) {
    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = "#f8d7da";
    resultadoDiv.style.color = "#721c24";
    resultadoDiv.innerHTML = "Por favor, digite um valor válido!";

// Volta a imagem inicial
    imagemMoeda.src = imagens.money;
    imagemMoeda.alt = "Imagem Inicial";
    return;
  }

  const cotacoes = {
    dolar: 5.41,
    euro: 6.36,
    libra: 7.38,
    bitcoin: 594065 // 1 Bitcoin em Reais (aproximadamente)
  };

// Define variável para o valor convertido
  let convertido = valor / cotacoes[tipo];
  let simbolo;    // Símbolo da moeda
  let imagem;     // Imagem da moeda

// Verifica o tipo de conversão  
  switch (tipo) {
    case "dolar":
      simbolo = "US$";
      convertido = convertido.toFixed(2);
      imagem = imagens.dolar;
      break;
    case "euro":
      simbolo = "€";
      convertido = convertido.toFixed(2);
      imagem = imagens.euro;
      break;
    case "libra":
      simbolo = "£";
      convertido = convertido.toFixed(2);
      imagem = imagens.libra;
      break;
    case "bitcoin":
      simbolo = "₿";
      convertido = convertido.toFixed(8);
      imagem = imagens.bitcoin;
      break;
  }

// Atualiza a imagem e o resultado
  imagemMoeda.src = imagem;
  imagemMoeda.alt = tipo;

// Exibe o resultado e imagem da moeda
  resultadoDiv.style.display = "block";
  resultadoDiv.style.backgroundColor = "#d1ecf1";
  resultadoDiv.style.color = "#0c5460";
  resultadoDiv.innerHTML = `<p>Resultado: ${simbolo} ${convertido}</p>`;
}
