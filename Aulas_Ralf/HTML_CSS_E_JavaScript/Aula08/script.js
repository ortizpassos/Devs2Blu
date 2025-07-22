
    const API_URL = 'http://localhost:3000';

    async function carregarPessoas() {
      const resposta = await fetch(API_URL);
      const pessoas = await resposta.json();
      const tabela = document.getElementById('tabelaPessoas');
      tabela.innerHTML = '';

      pessoas.forEach(p => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
          <td>${p.id}</td>
          <td>${p.nome}</td>
          <td>${p.idade}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editarPessoa(${p.id}, '${p.nome}', ${p.idade})">Editar</button>
            <button class="btn btn-danger btn-sm ms-2" onclick="excluirPessoa(${p.id})">Excluir</button>
          </td>
        `;
        tabela.appendChild(linha);
      });
    }

    async function salvarPessoa(event) {
      event.preventDefault();

      const id = document.getElementById('idPessoa').value;
      const nome = document.getElementById('nome').value;
      const idade = document.getElementById('idade').value;

      const payload = {
        nome,
        idade: parseInt(idade)
      };

      try {
        if (id) {
          await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } else {
          await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        }

        limparFormulario();
        carregarPessoas();
      } catch (erro) {
        alert('Erro ao salvar pessoa!');
        console.error(erro);
      }
    }

    function editarPessoa(id, nome, idade) {
      document.getElementById('idPessoa').value = id;
      document.getElementById('nome').value = nome;
      document.getElementById('idade').value = idade;
    }

    async function excluirPessoa(id) {
      if (confirm('Tem certeza que deseja excluir esta pessoa?')) {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        carregarPessoas();
      }
    }

    function limparFormulario() {
      document.getElementById('idPessoa').value = '';
      document.getElementById('formPessoa').reset();
    }

    document.getElementById('formPessoa').addEventListener('submit', salvarPessoa);

    carregarPessoas();
  