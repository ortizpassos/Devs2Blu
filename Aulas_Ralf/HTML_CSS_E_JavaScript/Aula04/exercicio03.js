let numeroSecreto = Math.floor(Math.random() * 100) + 1;// Gera um número aleatório entre 1 e 100
let tentativas = 0;

// Pega os elementos 
document.getElementById('botaoTentar').addEventListener('click', function() {
  const palpite = Number(document.getElementById('palpiteUsuario').value);
  const mensagem = document.getElementById('mensagem');

// Verifica se o palpite é válido
  if (palpite < 1 || palpite > 100 || isNaN(palpite)) {
    mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  tentativas++;

// Verifica se o palpite está correto
  if (palpite === numeroSecreto) {
    mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas.`;
    document.getElementById('botaoTentar').disabled = true;
  } else {

// Carrega a diferença entre o número secreto e o palpite    
    const diferenca = Math.abs(numeroSecreto - palpite);
    let dica = "";
// Fornece uma dica com base na diferença
    if (diferenca <= 5) {
      dica = "🔥 Quase!";
    } else if (diferenca <= 10) {
      dica = "😅 Perto!";
    } else if (diferenca <= 20) {
      dica = "😐 Longe!";
    } else {
      dica = "❄️ Muito longe!";
    }


    mensagem.textContent = `${dica} Tente novamente.`;
  }
// Limpa o campo de entrada e foca nele novamente
  document.getElementById('palpiteUsuario').value = "";
  document.getElementById('palpiteUsuario').focus();
});

// Reseta o jogo
document.getElementById('botaoResetar').addEventListener('click', function() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativas = 0;
  document.getElementById('mensagem').textContent = "";
  document.getElementById('palpiteUsuario').value = "";
  document.getElementById('botaoTentar').disabled = false;
  document.getElementById('palpiteUsuario').focus();
});
