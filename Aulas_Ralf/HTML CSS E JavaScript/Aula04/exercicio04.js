
// Carrega o valor do campo de entrada 
document.getElementById('botaoCalcular').addEventListener('click', function() {
  const valorDigitado = document.getElementById('entradaNumero').value;
  const numeroInformado = Number(valorDigitado);
  const listaResultado = document.getElementById('listaTabuada');

// Limpa a lista de resultados 
  listaResultado.innerHTML = "";

// Verifica se o valor digitado é válido 
  if (valorDigitado.trim() === "" || isNaN(numeroInformado) || numeroInformado === 0) {
    listaResultado.innerHTML = "<li>Por favor, informe um número válido.</li>";
    return;
  }

// Gera a tabuada do número informado
  for (let i = 1; i <= 10; i++) {
    const itemLista = document.createElement('li');
    itemLista.textContent = `${numeroInformado} x ${i} = ${numeroInformado * i}`;
    listaResultado.appendChild(itemLista);
  }
});
