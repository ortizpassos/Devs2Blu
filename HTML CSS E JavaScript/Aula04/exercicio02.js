document.getElementById("btn-converter").addEventListener("click", converter);

function converter() {
  const imagemMoeda = document.getElementById("imagem-moeda");
  const valor = parseFloat(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo-conversao").value;
  const resultadoDiv = document.getElementById("resultado");

  const imagens = {
    money:   "imagens/money.png",
    dolar:   "imagens/dolar.png",
    euro:    "imagens/euro.png",
    libra:   "imagens/libra.png",
    bitcoin: "imagens/bitcoin.png"    
  };

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
    dolar: 5.10,
    euro: 5.55,
    libra: 6.45,
    bitcoin: 320000.00
  };

  let convertido = valor / cotacoes[tipo];
  let simbolo;
  let imagem;

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

  // Atualiza a imagem no local inicial
  imagemMoeda.src = imagem;
  imagemMoeda.alt = tipo;

  resultadoDiv.style.display = "block";
  resultadoDiv.style.backgroundColor = "#d1ecf1";
  resultadoDiv.style.color = "#0c5460";
  resultadoDiv.innerHTML = `<p>Resultado: ${simbolo} ${convertido}</p>`;
}
