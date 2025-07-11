document.getElementById("calcular").addEventListener("click", function () {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const resultado = document.getElementById("resultado");

  // Verificação de entrada valida
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    resultado.textContent = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

// Cálculo do IMC
  const imc = peso / (altura * altura);
  let classificacao = "";

// Classificação do IMC
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau 1";
  } else if (imc < 40) {
    classificacao = "Obesidade grau 2";
  } else {
    classificacao = "Obesidade grau 3";
  }

// Cálculo do peso ideal
  const pesoIdealMin = 18.5 * (altura * altura);
  const pesoIdealMax = 24.9 * (altura * altura);

// Exibir o resultado
  resultado.innerHTML = `
    Seu IMC é <strong>${imc.toFixed(2)}</strong> — ${classificacao}.<br>
    Peso ideal para sua altura é entre <strong>${pesoIdealMin.toFixed(1)} kg</strong> e 
    <strong>${pesoIdealMax.toFixed(1)} kg</strong>.
  `;
// Limpar os campos após o cálculo
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
});
