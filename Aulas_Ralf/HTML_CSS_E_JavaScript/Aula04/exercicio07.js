document.getElementById("verificar").addEventListener("click", function () {
  const ano = parseInt(document.getElementById("ano").value);
  const mensagem = document.getElementById("mensagem");

// Verificação de entrada válida
  if (isNaN(ano) || ano <= 0) {
    mensagem.textContent = "Por favor, insira um ano válido (maior que zero).";
    return;
  }
  // Verificação se o ano é bissexto
  // Um ano é bissexto se é divisível por 4, exceto se for divisível por 100, a menos que também seja divisível por 400.
  // Explicação: O ano deve ser divisível por 4, mas não por 100, a menos que também seja divisível por 400. 
  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0); //Fonte: https://pt.wikipedia.org/wiki/Ano_bissexto

// Verifica se o ano é bissexto e exibe a mensagem
  if (ehBissexto) {
    mensagem.textContent = `Sim! O ano ${ano} é bissexto.`;
  } else {
    mensagem.textContent = `Não. O ano ${ano} não é bissexto.`;
  }
    // Limpa o campo de entrada após a verificação
    document.getElementById("ano").value = "";
    mensagem.style.display = "block";                    // Exibe a mensagem
    mensagem.style.color = ehBissexto ? "green" : "red"; // Define a cor da mensagem   
    mensagem.style.padding = "10px";                     // Adiciona preenchimento para melhor visualização
    mensagem.style.border = "2px solid";                 // Adiciona uma borda para destacar
    mensagem.style.borderColor = ehBissexto ? "green" : "red"; // Define a cor da borda
    mensagem.style.borderRadius = "5px";                 // Adiciona bordas arredondadas

});
