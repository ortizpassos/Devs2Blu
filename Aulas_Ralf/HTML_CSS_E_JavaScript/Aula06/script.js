// Função para pegar o CEP digitado e buscar os dados do endereço
document.getElementById("cep").addEventListener("blur", buscarCep);

// Variável para armazenar o CEP e verrificar se é válido
function buscarCep() {
  const cep = document.getElementById("cep").value.replace(/\D/g, '');
  if (cep.length !== 8) {
    alert("CEP inválido!");
    return;
  }

// Fazer a requisição para a API ViaCEP
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then(resposta => {
      if (!resposta.ok) {
        throw new Error("Erro na requisição");
      }
      return resposta.json();
    })
    .then(dados => {
      if (dados.erro) {
        document.getElementById("resultado").innerText = "CEP não encontrado!";
      } else {

// Preencher os campos com os dados retornados        
        document.getElementById("logradouro").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("uf").value = dados.uf;        
      }
    })
    .catch(error => {
      console.error(error);
      document.getElementById("resultado").innerText = "Erro ao buscar CEP.";
    });
}

// Função para cadastrar o endereço
document.getElementById("cadastrar").addEventListener("click", cadastrar);
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const uf = document.getElementById("uf").value;

  const resultado = document.getElementById("resultado");

  // Faz aparecer o alerta
  resultado.classList.remove("d-none");
  resultado.classList.remove("alert-info");
  resultado.classList.add("alert-success");

// 
  resultado.innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>CEP:</strong> ${cep}</p>
    <p><strong>Logradouro:</strong> ${logradouro}</p>
    <p><strong>Bairro:</strong> ${bairro}</p>
    <p><strong>Cidade:</strong> ${cidade}</p>
    <p><strong>UF:</strong> ${uf}</p>
  `;
}
