
// Função para calcular o fatorial de um número
document.getElementById("calcular").addEventListener("click", function() {
  const entrada = document.getElementById("numero").value;
  const numero = Number(entrada);
  const resultadoElemento = document.getElementById("resultado");

  if (entrada.trim() === "" || isNaN(numero) || numero < 0) {
    resultadoElemento.textContent = "Por favor, informe um número válido (maior ou igual a zero).";
    return;
  }

  let fatorial = 1; // Inicializa o fatorial como 1

// Calcula o fatorial
  for (let i = 2; i <= numero; i++) { // Começa de 2, pois 1! = 1
    fatorial *= i;
  }

// Exibe o resultado
  resultadoElemento.textContent = `O fatorial de ${numero} é ${fatorial}.`;
});
